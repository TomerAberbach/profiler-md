# Sampling profile diff

122 samples → 113 samples (-9 samples, -7.4%).

| Category | Change | Delta |             % | Samples |
| -------- | -----: | ----: | ------------: | ------: |
| stdlib   | -12.1% |    -8 | 54.1% → 51.3% | 66 → 58 |
| ours     |  -1.8% |    -1 | 45.9% → 48.7% | 56 → 55 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                                                                                          | Location                                                                                                  |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `parsePostfixExpression()`                                                                                        | org.jetbrains.kotlin.parsing.KotlinExpressionParsing                                                      |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `runTasks()`                                                                                                      | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager                                          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                                                         | org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker                          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitFunctionCall(FirFunctionCall, CheckerContext)`                                                              | org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent               |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `loadCallableSpecificExperimentalities(CheckerContext, FirCallableSymbol, Set, boolean, SmartSet)`                | org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker                            |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitBlock(FirBlock, CheckerContext)`                                                                            | org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent               |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `convertFunctionContent(IrFunction, FirFunction, FirClass)`                                                       | org.jetbrains.kotlin.fir.backend.generators.ClassMemberGenerator                                          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `applyArgumentsWithReorderingIfNeeded(IrMemberAccessExpression, CallAndReferenceGenerator$ReceiverInfo, FirCall)` | org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitLocalVariable(FirProperty)`                                                                                 | org.jetbrains.kotlin.fir.backend.Fir2IrVisitor                                                            |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                     | org.jetbrains.kotlin.codegen.inline.MethodInliner                                                         |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                     | org.jetbrains.kotlin.codegen.inline.MethodInliner                                                         |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)`                                                  | org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer                                             |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `invoke(Object)`                                                                                                  | org.jetbrains.kotlin.fir.scopes.impl.FirScopeWithCallableCopyReturnTypeUpdater$$Lambda.0x000000a0016f2238 |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `mark()`                                                                                                          | org.jetbrains.kotlin.parsing.AbstractKotlinParsing                                                        |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `firValueParameter_delegate$lambda$0(ValueParameter)`                                                             | org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter                                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `stringsToBytes(String[])`                                                                                        | org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt                                           |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `requiredToSave(FirResolvedTypeRef)`                                                                              | org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer      |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitArray(String)`                                                                                              | org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$3                                                   |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>()`                                                                                                        | org.jetbrains.kotlin.fir.resolve.calls.ConeResolutionAtom                                                 |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `transformPackageDirective(FirPackageDirective, Object)`                                                          | org.jetbrains.kotlin.fir.visitors.FirTransformer                                                          |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                                        | Location                                                                                              |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| removed |    -2 | 1.6% → 0.0% |   2 → 0 | `extractArgumentsTypeRefAndSource(FirTypeRef)`                                                                                                                                                                                  | org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>(FastJarFileSystem, String)`                                                                                                                                                                                             | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler                                            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `at(IElementType)`                                                                                                                                                                                                              | org.jetbrains.kotlin.parsing.AbstractKotlinParsing                                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `access$2602(PsiBuilderImpl$StartMarker, PsiBuilderImpl$ProductionMarker)`                                                                                                                                                      | com.intellij.lang.impl.PsiBuilderImpl$StartMarker                                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `indexOf(PsiBuilderImpl$ProductionMarker)`                                                                                                                                                                                      | com.intellij.lang.impl.MarkerProduction                                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>(FirDeserializationContext)`                                                                                                                                                                                             | org.jetbrains.kotlin.fir.deserialization.FirContractDeserializer                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `get(int)`                                                                                                                                                                                                                      | org.jetbrains.kotlin.protobuf.LazyStringArrayList                                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirPropertyAccessExpression, ConeKotlinType, List, FqName, FqName, FirClassLikeSymbol, FirResolvedQualifier, boolean, ConeKotlinType, boolean, boolean, boolean, List, FirResolvedSymbolOrigin, List)` | org.jetbrains.kotlin.fir.expressions.impl.FirResolvedQualifierImpl                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                                                                            | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                                                |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `enqueueResolveTasksForNoReceiver(CallInfo)`                                                                                                                                                                                    | org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension                           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `shouldBeFlexible(TypeVariableMarker)`                                                                                                                                                                                          | org.jetbrains.kotlin.fir.resolve.inference.ConeConstraintSystemUtilContext                            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                               | org.jetbrains.kotlin.metadata.ProtoBuf$Property                                                       |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                                                                                      | org.jetbrains.kotlin.fir.FirElementWithResolveState                                                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                                                                                      | org.jetbrains.kotlin.fir.symbols.impl.FirPropertySymbol                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `buildDefaultFlow(CFGNode, Function2)`                                                                                                                                                                                          | org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `transformReturnExpression(FirReturnExpression, ResolutionMode)`                                                                                                                                                                | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>(Continuation)`                                                                                                                                                                                                          | kotlin.coroutines.jvm.internal.ContinuationImpl                                                       |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `runResolverForExpressionReceiver(CallInfo, FirExpression, TowerGroup, Continuation)`                                                                                                                                           | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `toFirResolvedTypeRef(ConeKotlinType, KtSourceElement, FirTypeRef)`                                                                                                                                                             | org.jetbrains.kotlin.fir.UtilsKt                                                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `rollbackTransaction()`                                                                                                                                                                                                         | org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl$TransactionState           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                                                    | Location                                                                                                      |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
|  +75.0% |    +6 | 6.6% → 12.4% |  8 → 14 | `visitElement(FirElement, Object)`                                                                          | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                               |
|  +55.6% |    +5 | 7.4% → 12.4% |  9 → 14 | `generateMethod(IrFunction, SourceMapper)`                                                                  | org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen                                                         |
|  +40.0% |    +4 | 8.2% → 12.4% | 10 → 14 | `visitElement(FirElement, Void)`                                                                            | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                               |
|  +44.4% |    +4 | 7.4% → 11.5% |  9 → 13 | `visitBlock(FirBlock, Void)`                                                                                | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                               |
|  +44.4% |    +4 | 7.4% → 11.5% |  9 → 13 | `visitBlock(FirBlock, Object)`                                                                              | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                               |
| +400.0% |    +4 |  0.8% → 4.4% |   1 → 5 | `accept(MethodVisitor)`                                                                                     | org.jetbrains.org.objectweb.asm.tree.MethodNode                                                               |
|     new |    +4 |  0.0% → 3.5% |   0 → 4 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | org.jetbrains.kotlin.types.AbstractTypeChecker                                                                |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `findKotlinClassOrContent(ClassId, MetadataVersion)`                                                        | org.jetbrains.kotlin.load.kotlin.VirtualFileFinder                                                            |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `computePackagePartInfo(FqName, String)`                                                                    | org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider                                 |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `computePackagePartsInfos(FqName)`                                                                          | org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider                                 |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `tryComputePackagePartInfos(FqName)`                                                                        | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)`                          | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `invoke(Object, Void)`                                                                                      | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2 |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `invoke(Object, Object)`                                                                                    | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2 |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `getPackageParts(FqName)`                                                                                   | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)`                                     | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                |
| +300.0% |    +3 |  0.8% → 3.5% |   1 → 4 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)`     | org.jetbrains.kotlin.types.AbstractTypeChecker                                                                |
| +300.0% |    +3 |  0.8% → 3.5% |   1 → 4 | `isSubtypeOf(TypeCheckerState, KotlinTypeMarker, KotlinTypeMarker, boolean)`                                | org.jetbrains.kotlin.types.AbstractTypeChecker                                                                |
|  +30.0% |    +3 | 8.2% → 11.5% | 10 → 13 | `visitAnnotationContainer(FirAnnotationContainer, Void)`                                                    | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                               |
|  +30.0% |    +3 | 8.2% → 11.5% | 10 → 13 | `visitAnnotationContainer(FirAnnotationContainer, Object)`                                                  | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                               |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % | Samples | Function                                                                                                                                      | Location                                                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| -19.6% |    -9 | 37.7% → 32.7% | 46 → 37 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                        |
| -20.0% |    -9 | 36.9% → 31.9% | 45 → 36 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                  |
| -19.0% |    -8 | 34.4% → 30.1% | 42 → 34 | `invoke(Object, Object[])`                                                                                                                    | java.lang.reflect.Method                                                                    |
| -17.8% |    -8 | 36.9% → 32.7% | 45 → 37 | `doMain(CLICompiler, String[])`                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                       |
| -18.2% |    -8 | 36.1% → 31.9% | 44 → 36 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase                                       |
| -19.5% |    -8 | 33.6% → 29.2% | 41 → 33 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler                                                 |
| -10.0% |    -7 | 57.4% → 55.8% | 70 → 63 | `run(String[])`                                                                                                                               | org.jetbrains.kotlin.preloading.Preloader                                                   |
| -15.9% |    -7 | 36.1% → 32.7% | 44 → 37 | `phaseBody(LoggingContext, Object)`                                                                                                           | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                                             |
| -16.3% |    -7 | 35.2% → 31.9% | 43 → 36 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.backend.common.phaser.CompositePhase                                   |
| -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                                          |
| -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                       |
| -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                       |
| -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                       |
| -17.1% |    -7 | 33.6% → 30.1% | 41 → 34 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                       |
| -17.1% |    -7 | 33.6% → 30.1% | 41 → 34 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                  |
| -17.1% |    -7 | 33.6% → 30.1% | 41 → 34 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                  |
| -17.5% |    -7 | 32.8% → 29.2% | 40 → 33 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | org.jetbrains.kotlin.cli.common.CLICompiler                                                 |
| -31.8% |    -7 | 18.0% → 13.3% | 22 → 15 | `transformInplace(List, FirTransformer, Object)`                                                                                              | org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt                                      |
| -41.2% |    -7 |  13.9% → 8.8% | 17 → 10 | `transformElement(FirElement, ResolutionMode)`                                                                                                | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer |
| -41.2% |    -7 |  13.9% → 8.8% | 17 → 10 | `transformElement(FirElement, Object)`                                                                                                        | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer |


# Allocated heap profile diff

Allocated 717 MB over 874 samples → 869 samples (820 kB → 825 kB per sample).

| Category | Change |    Delta |             % |            Size |   Samples |
| -------- | -----: | -------: | ------------: | --------------: | --------: |
| stdlib   |  -2.0% | -11.3 MB | 78.7% → 77.1% | 564 MB → 553 MB | 571 → 551 |
| ours     |  +7.2% | +11.1 MB | 21.3% → 22.9% | 153 MB → 164 MB | 293 → 310 |
| native   |  -0.8% |   -240 B |         <0.1% | 30 kB → 29.8 kB |    10 → 8 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                                                                   | Location                                                                                         |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| +135.4% | +4.82 MB | 0.5% → 1.2% | 3.56 MB → 8.37 MB |  7 → 15 | `box-impl(List)`                                                                           | org.jetbrains.kotlin.fir.MutableOrEmptyList                                                      |
| +350.0% | +3.66 MB | 0.1% → 0.7% | 1.05 MB → 4.71 MB |   2 → 9 | `<init>()`                                                                                 | org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage                      |
|  +22.3% | +3.14 MB | 2.0% → 2.4% | 14.1 MB → 17.2 MB | 27 → 33 | `<init>(int)`                                                                              | org.jetbrains.kotlin.protobuf.ByteString$Output                                                  |
| +166.7% | +2.62 MB | 0.2% → 0.6% | 1.57 MB → 4.19 MB |   3 → 7 | `to(Object, Object)`                                                                       | kotlin.TuplesKt                                                                                  |
| +200.0% | +2.09 MB | 0.1% → 0.4% | 1.05 MB → 3.14 MB |   2 → 6 | `<init>()`                                                                                 | org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache                                        |
|  +36.2% | +2.09 MB | 0.8% → 1.1% | 5.79 MB → 7.88 MB | 12 → 16 | `newInstance(OutputStream, int)`                                                           | org.jetbrains.kotlin.protobuf.CodedOutputStream                                                  |
| +400.0% | +2.09 MB | 0.1% → 0.4% |  523 kB → 2.62 MB |   1 → 5 | `iterator()`                                                                               | org.jetbrains.kotlin.utils.SmartList                                                             |
|     new | +1.57 MB | 0.0% → 0.2% |     0 B → 1.57 MB |   0 → 3 | `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` | org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer |
|     new | +1.57 MB | 0.0% → 0.2% |     0 B → 1.57 MB |   0 → 3 | `getLabel()`                                                                               | org.jetbrains.org.objectweb.asm.tree.LabelNode                                                   |
|  +60.0% | +1.57 MB | 0.4% → 0.6% | 2.62 MB → 4.19 MB |   5 → 8 | `newOutput()`                                                                              | org.jetbrains.kotlin.protobuf.ByteString                                                         |
|  +45.9% | +1.05 MB | 0.3% → 0.5% | 2.28 MB → 3.33 MB |   4 → 5 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`      | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt                                  |
| +200.0% | +1.05 MB | 0.1% → 0.2% |  523 kB → 1.57 MB |   1 → 3 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)`      | org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt                                            |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `getAnnotationsByClassId(List, ClassId, FirSession)`                                       | org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt                                       |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `_init_$lambda$0(int, int)`                                                                | org.jetbrains.kotlin.codegen.optimization.temporaryVals.FastStoreLoadAnalyzer                    |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `valueOf(int)`                                                                             | java.lang.Integer                                                                                |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)`                 | org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass                                            |
| +200.0% | +1.05 MB | 0.1% → 0.2% |  523 kB → 1.57 MB |   1 → 3 | `createScope(IrSymbolOwner)`                                                               | org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext                          |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `processCandidatesAndPostponedAtoms(ConeResolutionAtom, Function1, Function1)`             | org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateTraversalKt                            |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `getSuperConeTypes(FirClass)`                                                              | org.jetbrains.kotlin.fir.declarations.utils.FirDeclarationUtilKt                                 |
|     new | +1.05 MB | 0.0% → 0.1% |     0 B → 1.05 MB |   0 → 1 | `_get_boundsNullability_$lambda$0$2(List, AbstractSignatureParts)`                         | org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts                            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |   Samples | Function                                                                      | Location                                                                     |
| ------: | -------: | -----------: | ----------------: | --------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -76.8% |  -151 MB | 27.5% → 6.4% |  197 MB → 45.7 MB | 116 → 113 | `<init>(int)`                                                                 | java.io.ByteArrayOutputStream                                                |
| removed | -2.62 MB |  0.4% → 0.0% |     2.62 MB → 0 B |     4 → 0 | `<init>(String)`                                                              | org.jetbrains.kotlin.name.FqName                                             |
| removed | -2.62 MB |  0.4% → 0.0% |     2.62 MB → 0 B |     5 → 0 | `toArray()`                                                                   | org.jetbrains.org.objectweb.asm.tree.InsnList                                |
|  -29.6% | -2.42 MB |  1.1% → 0.8% | 8.18 MB → 5.76 MB |   16 → 11 | `<init>(int, int)`                                                            | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                          |
|  -50.0% | -2.09 MB |  0.6% → 0.3% | 4.19 MB → 2.09 MB |     8 → 4 | `toString()`                                                                  | java.lang.StringBuilder                                                      |
|  -74.3% | -1.68 MB |  0.3% → 0.1% |  2.26 MB → 582 kB |     5 → 1 | `create()`                                                                    | com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2                      |
|  -80.5% | -1.68 MB |  0.3% → 0.1% |  2.09 MB → 408 kB |     5 → 1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                       | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                         |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `unmodifiableList(List)`                                                      | java.util.Collections                                                        |
|  -60.0% | -1.57 MB |  0.4% → 0.1% | 2.62 MB → 1.05 MB |     5 → 2 | `identifier(String)`                                                          | org.jetbrains.kotlin.name.Name                                               |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`                               | org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer          |
|  -75.1% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 520 kB |     4 → 1 | `getBytes(int, int)`                                                          | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping |
| removed | -1.46 MB |  0.2% → 0.0% |     1.46 MB → 0 B |     2 → 0 | `newFieldSet()`                                                               | org.jetbrains.kotlin.protobuf.FieldSet                                       |
|  -67.0% | -1.06 MB |  0.2% → 0.1% |  1.59 MB → 523 kB |     3 → 1 | `readUtf(int, int, char[])`                                                   | org.jetbrains.org.objectweb.asm.ClassReader                                  |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`            | org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner          |
|  -50.0% | -1.05 MB |  0.3% → 0.1% | 2.09 MB → 1.05 MB |     4 → 2 | `getTypeInternal(String, int, int)`                                           | org.jetbrains.org.objectweb.asm.Type                                         |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     1 → 0 | `<init>(Function1, Function1)`                                                | org.jetbrains.kotlin.fir.resolve.calls.candidate.Context                     |
|  -66.7% | -1.05 MB |  0.2% → 0.1% |  1.57 MB → 523 kB |     3 → 1 | `executeInvokeInsn(AbstractInsnNode, String, Interpreter)`                    | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                          |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt                     |
|  -66.7% | -1.05 MB |  0.2% → 0.1% |  1.57 MB → 523 kB |     3 → 1 | `iterator()`                                                                  | org.jetbrains.org.objectweb.asm.tree.analysis.SmallSet                       |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `getBasicBlockAt$lambda$0()`                                                  | org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator     |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |             % |              Size |   Samples | Function                                                                             | Location                                                              |
| -------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
|  +151.7% |  +158 MB | 14.5% → 36.5% |   104 MB → 262 MB | 101 → 113 | `toByteArray()`                                                                      | java.io.ByteArrayOutputStream                                         |
|   +48.8% | +66.5 MB | 19.0% → 28.3% |   136 MB → 203 MB | 264 → 274 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                 |
|   +48.3% | +66.5 MB | 19.2% → 28.5% |   138 MB → 204 MB | 267 → 277 | `exec(PrintStream, MessageRenderer, String[])`                                       | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|   +46.7% | +65.5 MB | 19.6% → 28.7% |   140 MB → 206 MB | 272 → 281 | `exec(PrintStream, Services, MessageRenderer, String[])`                             | org.jetbrains.kotlin.cli.common.CLICompiler                           |
| +5873.1% | +61.4 MB |   0.1% → 8.7% | 1.05 MB → 62.4 MB |     2 → 3 | `getAnnotation(Class)`                                                               | java.lang.reflect.Field                                               |
| +3494.8% | +61.2 MB |   0.2% → 8.8% | 1.75 MB → 62.9 MB |         4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`    | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
| +3494.8% | +61.2 MB |   0.2% → 8.8% | 1.75 MB → 62.9 MB |         4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                      | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
| +3494.8% | +61.2 MB |   0.2% → 8.8% | 1.75 MB → 62.9 MB |         4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
| +3466.4% | +60.7 MB |   0.2% → 8.7% | 1.75 MB → 62.4 MB |     4 → 3 | `getArgumentsInfo(Class)`                                                            | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +530.9% | +59.6 MB |   1.6% → 9.9% | 11.2 MB → 70.8 MB |   24 → 19 | `put(Object, Object)`                                                                | java.util.HashMap                                                     |
|  +627.7% |   +23 MB |   0.5% → 3.7% | 3.66 MB → 26.6 MB |    8 → 12 | `loadClass(String)`                                                                  | java.lang.ClassLoader                                                 |
| +4111.1% | +21.8 MB |   0.1% → 3.1% |  531 kB → 22.4 MB |     2 → 3 | `forName(String, boolean, ClassLoader)`                                              | java.lang.Class                                                       |
|    +7.2% | +10.4 MB | 20.4% → 21.8% |   146 MB → 156 MB | 281 → 299 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                 | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                    |
|    +7.0% | +10.4 MB | 20.9% → 22.4% |   150 MB → 161 MB | 289 → 307 | `phaseBody(LoggingContext, Object)`                                                  | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                       |
|    +7.3% | +10.4 MB | 20.1% → 21.5% |   144 MB → 154 MB | 277 → 295 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                       | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                 |
|    +7.2% | +9.98 MB | 19.3% → 20.7% |   139 MB → 149 MB | 267 → 285 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                            |
|    +6.6% | +9.92 MB | 21.1% → 22.5% |   151 MB → 161 MB | 290 → 308 | `phaseBody(PipelineContext, PipelineArtifact)`                                       | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                       |
|    +7.1% |  +9.9 MB | 19.4% → 20.8% |   139 MB → 149 MB | 268 → 286 | `execute(CommonCompilerArguments, Services, MessageCollector)`                       | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                 |
|    +6.5% | +9.76 MB | 21.1% → 22.4% |   151 MB → 161 MB | 291 → 307 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                           | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase                 |
|    +6.5% | +9.66 MB | 20.6% → 22.0% |   148 MB → 158 MB | 285 → 301 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                           | org.jetbrains.kotlin.backend.common.phaser.CompositePhase             |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |            % |              Size |   Samples | Function                                                                                                                                                                                                                                                 | Location                                                                           |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  -76.8% |  -151 MB | 27.5% → 6.4% |  197 MB → 45.7 MB | 116 → 113 | `<init>(int)`                                                                                                                                                                                                                                            | java.io.ByteArrayOutputStream                                                      |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                                                                                                                                                                                                                              | java.io.File                                                                       |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `cleanup()`                                                                                                                                                                                                                                              | org.fusesource.jansi.internal.JansiLoader                                          |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `initialize()`                                                                                                                                                                                                                                           | org.fusesource.jansi.internal.JansiLoader                                          |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `<clinit>()`                                                                                                                                                                                                                                             | org.fusesource.jansi.internal.CLibrary                                             |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `<clinit>()`                                                                                                                                                                                                                                             | org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer                  |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `<clinit>()`                                                                                                                                                                                                                                             | org.jetbrains.kotlin.cli.common.messages.MessageRenderer                           |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `defaultMessageRenderer()`                                                                                                                                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                              |
|  -20.0% | -11.8 MB |  8.2% → 6.6% | 58.8 MB → 47.1 MB |  113 → 89 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                             |
|  -18.6% | -10.7 MB |  8.1% → 6.6% | 57.8 MB → 47.1 MB |  112 → 89 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                             |
|  -19.6% | -10.7 MB |  7.6% → 6.1% |   54.7 MB → 44 MB |  105 → 83 | `runTasks()`                                                                                                                                                                                                                                             | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager                   |
|  -18.5% | -10.7 MB |  8.1% → 6.6% | 57.8 MB → 47.1 MB |  111 → 89 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`                                                                                                                                  | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver                      |
|  -17.2% | -9.66 MB |  7.8% → 6.5% | 56.2 MB → 46.6 MB |  108 → 88 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)`                                                                                                                                                    | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver                      |
|  -17.2% | -9.66 MB |  7.8% → 6.5% | 56.2 MB → 46.6 MB |  108 → 88 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)`                                                                                                                                                                         | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver                      |
|  -52.8% | -9.37 MB |  2.5% → 1.2% | 17.7 MB → 8.37 MB |   34 → 15 | `processMembers(CallInfo, TowerLevelProcessor, Function2)`                                                                                                                                                                                               | org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel |
|  -16.6% |  -9.2 MB |  7.7% → 6.4% |   55.2 MB → 46 MB |  106 → 86 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                                                                                                                                                  | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager                   |
|  -16.7% | -8.39 MB |  7.0% → 5.8% | 50.2 MB → 41.8 MB |   97 → 79 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                                                                                                                                 | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                             |
|  -16.9% | -8.39 MB |  6.9% → 5.8% | 49.7 MB → 41.3 MB |   96 → 78 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)`                                                                                                           | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                             |
|  -14.4% | -7.63 MB |  7.4% → 6.4% | 53.1 MB → 45.5 MB |  102 → 84 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                                                     | org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask               |
|  -14.4% | -7.63 MB |  7.4% → 6.4% | 53.1 MB → 45.5 MB |  102 → 84 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                     | org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask               |


# Retained heap profile diff

Retained 20.2 MB → 19.6 MB (-0.6 MB, -2.8%) over 198 samples → 203 samples (102 kB → 96.5 kB per sample).

| Category | Change |   Delta |             % |              Size |   Samples |
| -------- | -----: | ------: | ------------: | ----------------: | --------: |
| stdlib   |  -3.0% | -564 kB | 93.6% → 93.5% | 18.9 MB → 18.3 MB | 183 → 188 |
| ours     |  +0.2% | +2.3 kB |   6.4% → 6.5% |           1.28 MB |        15 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |    Delta |            % |          Size | Samples | Function                                                                                                  | Location                                                                                |
| -----: | -------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|    new | +4.45 kB | 0.0% → <0.1% | 0 B → 4.45 kB |   0 → 1 | `copyOf(int[], int)`                                                                                      | java.util.Arrays                                                                        |
|  +0.2% | +2.31 kB |  6.1% → 6.2% |       1.22 MB |   6 → 7 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                     | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt                         |
|    new |   +224 B | 0.0% → <0.1% |   0 B → 224 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                               | org.jetbrains.kotlin.metadata.ProtoBuf$Function$1                                       |
|    new |   +224 B | 0.0% → <0.1% |   0 B → 224 B |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirBlock)`                                                     | org.jetbrains.kotlin.fir.analysis.checkers.expression.FirConflictsExpressionChecker     |
|    new |    +48 B | 0.0% → <0.1% |    0 B → 48 B |   0 → 1 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |  Delta |            % |        Size | Samples | Function                                    | Location                                                                     |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------------- | ---------------------------------------------------------------------------- |
| removed | -256 B | <0.1% → 0.0% | 256 B → 0 B |   1 → 0 | `asRigidType(KotlinTypeMarker)`             | org.jetbrains.kotlin.fir.types.ConeTypeContext                               |
| removed |  -88 B | <0.1% → 0.0% |  88 B → 0 B |   1 → 0 | `build()`                                   | org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder         |
| removed |  -72 B | <0.1% → 0.0% |  72 B → 0 B |   1 → 0 | `getBytes(int, int)`                        | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping |
| removed |  -64 B | <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `build()`                                   | org.jetbrains.kotlin.fir.java.declarations.FirJavaValueParameterBuilder      |
| removed |  -32 B | <0.1% → 0.0% |  32 B → 0 B |   1 → 0 | `substituteArguments(ConeSimpleKotlinType)` | org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor        |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|      Change |    Delta |            % |             Size | Samples | Function                                                                                                                                      | Location                                                                                   |
| ----------: | -------: | -----------: | ---------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| +1698300.0% | +1.22 MB | <0.1% → 6.2% |   72 B → 1.22 MB |   1 → 7 | `invoke(Object)`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000a0013f5a40 |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                                         |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                      |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                      |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                      |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                      |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                 |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                 |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler                                                |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | org.jetbrains.kotlin.cli.common.CLICompiler                                                |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | org.jetbrains.kotlin.cli.common.CLICompiler                                                |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | org.jetbrains.kotlin.cli.common.CLICompiler                                                |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                      |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                      |
|      +67.2% | +41.6 kB |  0.3% → 0.5% |   62 kB → 104 kB | 14 → 15 | `doMain(CLICompiler, String[])`                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                      |
|      +66.3% | +41.3 kB |  0.3% → 0.5% | 62.3 kB → 104 kB |      15 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                                            |
|      +66.3% | +41.3 kB |  0.3% → 0.5% | 62.3 kB → 104 kB |      15 | `phaseBody(LoggingContext, Object)`                                                                                                           | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                                            |
|      +66.3% | +41.3 kB |  0.3% → 0.5% | 62.3 kB → 104 kB |      15 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase                                      |
|      +66.3% | +41.3 kB |  0.3% → 0.5% | 62.3 kB → 104 kB |      15 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.backend.common.phaser.CompositePhase                                  |
|         new | +37.4 kB |  0.0% → 0.2% |    0 B → 37.4 kB |   0 → 1 | `forName(String, boolean, ClassLoader)`                                                                                                       | java.lang.Class                                                                            |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                                                                                                                                                                                                        | Location                                                                                   |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed | -1.22 MB |   6.1% → 0.0% |     1.22 MB → 0 B |     6 → 0 | `invoke(Object)`                                                                                                                                                                                                                                                | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f5a40 |
|   -1.8% |  -339 kB | 91.7% → 92.6% | 18.5 MB → 18.1 MB | 177 → 181 | `run(String[])`                                                                                                                                                                                                                                                 | org.jetbrains.kotlin.preloading.Preloader                                                  |
|   -1.8% |  -339 kB | 91.7% → 92.6% | 18.5 MB → 18.1 MB | 176 → 181 | `main(String[])`                                                                                                                                                                                                                                                | org.jetbrains.kotlin.preloading.Preloader                                                  |
|   -5.7% |  -232 kB | 20.1% → 19.5% | 4.05 MB → 3.82 MB |         4 | `getResource(String)`                                                                                                                                                                                                                                           | java.lang.ClassLoader                                                                      |
|   -5.7% |  -232 kB | 20.1% → 19.5% | 4.05 MB → 3.82 MB |         4 | `getResource(String)`                                                                                                                                                                                                                                           | org.jetbrains.kotlin.preloading.MemoryBasedClassLoader                                     |
|   -5.7% |  -232 kB | 20.1% → 19.5% | 4.05 MB → 3.82 MB |         4 | `<init>()`                                                                                                                                                                                                                                                      | org.jetbrains.kotlin.cli.common.CLICompiler                                                |
|   -5.7% |  -232 kB | 20.1% → 19.5% | 4.05 MB → 3.82 MB |         4 | `<init>()`                                                                                                                                                                                                                                                      | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                 |
|   -5.6% |  -228 kB | 20.1% → 19.5% | 4.05 MB → 3.83 MB |        13 | `invoke(Object, Object[])`                                                                                                                                                                                                                                      | java.lang.reflect.Method                                                                   |
|   -4.6% |  -190 kB | 20.4% → 20.0% | 4.11 MB → 3.92 MB |   17 → 19 | `main(String[])`                                                                                                                                                                                                                                                | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                       |
|   -4.6% |  -190 kB | 20.4% → 20.0% | 4.11 MB → 3.92 MB |   17 → 19 | `main(String[])`                                                                                                                                                                                                                                                | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                 |
|   -0.8% |  -111 kB | 70.3% → 71.7% | 14.2 MB → 14.1 MB | 163 → 167 | `toByteArray()`                                                                                                                                                                                                                                                 | java.io.ByteArrayOutputStream                                                              |
|   -0.8% |  -111 kB | 71.6% → 73.0% | 14.4 MB → 14.3 MB | 164 → 168 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                         | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                       |
|   -0.8% |  -111 kB | 71.6% → 73.0% | 14.4 MB → 14.3 MB | 164 → 168 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                                    | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                       |
|   -0.2% |   -528 B |          1.3% |   263 kB → 262 kB |     2 → 1 | `put(Object, Object)`                                                                                                                                                                                                                                           | java.util.HashMap                                                                          |
| removed |   -528 B |  <0.1% → 0.0% |       528 B → 0 B |     1 → 0 | `<init>(ProtoBuf$PackageFragment, NameResolver, BinaryVersion, Function1)`                                                                                                                                                                                      | org.jetbrains.kotlin.serialization.deserialization.ProtoBasedClassDataFinder               |
|  -61.2% |   -504 B |         <0.1% |     824 B → 320 B |         3 | `prepareSessions(List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4)`                                                | org.jetbrains.kotlin.cli.common.SessionConstructionUtils                                   |
|  -61.2% |   -504 B |         <0.1% |     824 B → 320 B |         3 | `prepareSessions$default(SessionConstructionUtils, List, CompilerConfiguration, Name, TargetPlatform, boolean, DependencyListForCliModule, List, Function1, Function1, Function2, Function0, Function0, Function1, FirSessionProducer, Function4, int, Object)` | org.jetbrains.kotlin.cli.common.SessionConstructionUtils                                   |
|  -61.2% |   -504 B |         <0.1% |     824 B → 320 B |         3 | `prepareJvmSessions(List, Name, CompilerConfiguration, VfsBasedProjectEnvironment, AbstractProjectFileSearchScope, DependencyListForCliModule, Function1, Function1, Function2, Function1)`                                                                     | org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase                             |
|  -59.2% |   -488 B |         <0.1% |     824 B → 336 B |     4 → 1 | `convertToIrAndActualize()`                                                                                                                                                                                                                                     | org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline                                           |
|  -59.2% |   -488 B |         <0.1% |     824 B → 336 B |     4 → 1 | `convertToIrAndActualize-MT2kVtw(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1)`        | org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt                                            |


# Lock contention profile diff

Blocked 510.6ms → 492.7ms (-17.9ms, -3.5%) over 3 samples → 2 samples (170.2ms → 246.4ms per sample).

| Category | Change |   Delta |      % |              Time | Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------: |
| stdlib   |  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 |

The entry filter hides every sampled function, so all functions are shown.

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |   Delta |      % |              Time | Samples | Function              | Location                 |
| -----: | ------: | -----: | ----------------: | ------: | --------------------- | ------------------------ |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |   Delta |      % |              Time | Samples | Function                    | Location                                                              |
| -----: | ------: | -----: | ----------------: | ------: | --------------------------- | --------------------------------------------------------------------- |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `park(boolean, long)`       | jdk.internal.misc.Unsafe                                              |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `parkNanos(Object, long)`   | java.util.concurrent.locks.LockSupport                                |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `await(long, TimeUnit)`     | java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `await(long)`               | java.lang.ref.ReferenceQueue                                          |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `remove0(long)`             | java.lang.ref.ReferenceQueue                                          |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `remove(long)`              | java.lang.ref.ReferenceQueue                                          |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `run()`                     | jdk.internal.ref.CleanerImpl                                          |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `runWith(Object, Runnable)` | java.lang.Thread                                                      |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `run()`                     | java.lang.Thread                                                      |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `run()`                     | jdk.internal.misc.InnocuousThread                                     |
