# Sampling profile diff

118 samples (unchanged).

| Category | Change | Delta |             % | Samples |
| -------- | -----: | ----: | ------------: | ------: |
| ours     |  -9.1% |    -6 | 55.9% → 50.8% | 66 → 60 |
| stdlib   | +11.5% |    +6 | 44.1% → 49.2% | 52 → 58 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                            | Location                                                                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 0.8% → 1.7% |   1 → 2 | `advance()`                                                                                                         | org.jetbrains.kotlin.lexer._JetLexer                                                        |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `computeIndexedQualifiers(KotlinTypeMarker, Iterable, TypeEnhancementInfo, boolean)`                                | org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts                       |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `visitBlock(FirBlock, CheckerContext)`                                                                              | org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `visitAnnotationContainer(FirAnnotationContainer, Object)`                                                          | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor             |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `visitElement(FirElement, Void)`                                                                                    | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor             |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `collectionSizeOrDefault(Iterable, int)`                                                                            | kotlin.collections.CollectionsKt__IterablesKt                                               |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `visitProperty(FirProperty, Void)`                                                                                  | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor             |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `doGenerate(ReifiedTypeParametersUsages)`                                                                           | org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen                                    |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)`                                                     | org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$typeMapper$1                          |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `findChild(String)`                                                                                                 | com.intellij.openapi.vfs.VirtualFile                                                        |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `getLexemeIndexAt(int)`                                                                                             | com.intellij.lang.impl.MarkerProduction                                                     |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | org.jetbrains.kotlin.parsing.KotlinLightParser                                              |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `getTokenType()`                                                                                                    | com.intellij.lang.impl.PsiBuilderAdapter                                                    |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `readUtfNonAscii(int, int, int, char[])`                                                                            | org.jetbrains.org.objectweb.asm.ClassReader                                                 |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `toExpandedRecordsList(List)`                                                                                       | org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolverKt                         |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `classIndex_delegate$lambda$0(FirClass)`                                                                            | org.jetbrains.kotlin.fir.scopes.impl.FirNestedClassifierScopeImpl                           |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `createNestedClassifierScope(FirClass)`                                                                             | org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProvider                         |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `nestedClassifierScope(FirSession, FirClass)`                                                                       | org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt                       |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `extractProjectionsForAllCapturedTypesInternal(TypeSystemInferenceExtensionContext, KotlinTypeMarker, Set)`         | org.jetbrains.kotlin.resolve.calls.inference.components.VariableFixationFinderKt            |
|     new |    +1 | 0.0% → 0.8% |   0 → 1 | `hasAnnotation(List, ClassId, FirSession)`                                                                          | org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt                                  |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                            | Location                                                                                          |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getRelativePath()`                                                                                                                                                 | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipEntryDescription                                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `ensureIndex(int)`                                                                                                                                                  | it.unimi.dsi.fastutil.ints.AbstractIntList                                                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `checkNotNullParameter(Object, String)`                                                                                                                             | kotlin.jvm.internal.Intrinsics                                                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `tt()`                                                                                                                                                              | org.jetbrains.kotlin.parsing.AbstractKotlinParsing                                                |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)`                                                       | org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getAnnotationPlatformSupport(FirSession)`                                                                                                                          | org.jetbrains.kotlin.fir.declarations.FirAnnotationsPlatformSpecificSupportComponentKt            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `hasSupertypePathToParameter(FirTypeParameter, FirTypeParameter, Set)`                                                                                              | org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer                           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `isVisible(FirMemberDeclaration, FirSession, FirFile, List, FirExpression, boolean, FirRegularClass, boolean, SupertypeSupplier)`                                   | org.jetbrains.kotlin.fir.FirVisibilityChecker                                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getClass(ClassId, FirDeserializationContext)`                                                                                                                      | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                                            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer       |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                          | org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `createConstraintSystem$default(InferenceComponents, Function2, int, Object)`                                                                                       | org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                                  | org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getType(TypeArgumentMarker)`                                                                                                                                       | org.jetbrains.kotlin.fir.types.ConeTypeContext                                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getStaticCallableMemberScopeImpl(FirClass, FirSession, ScopeSession, boolean)`                                                                                     | org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider                                            |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getArgumentTypes(String)`                                                                                                                                          | org.jetbrains.org.objectweb.asm.Type                                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `contextReceiverTypes(ProtoBuf$Function, TypeTable)`                                                                                                                | org.jetbrains.kotlin.metadata.deserialization.ProtoTypeTableUtilKt                                |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `shouldApproximateCapturedType(TypeSystemInferenceExtensionContext, CapturedTypeMarker)`                                                                            | org.jetbrains.kotlin.types.TypeApproximatorConfiguration$AbstractCapturedTypesAndILTApproximation |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `originalIfDefinitelyNotNullable(RigidTypeMarker)`                                                                                                                  | org.jetbrains.kotlin.types.model.TypeSystemContext                                                |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                                                                    | Location                                                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|  +40.0% |    +4 |  8.5% → 11.9% | 10 → 14 | `accept(FirVisitor, Object)`                                                                                                                | org.jetbrains.kotlin.fir.expressions.FirFunctionCall                                                                    |
| +400.0% |    +4 |   0.8% → 4.2% |   1 → 5 | `processFunctionsByName(Name, Function1)`                                                                                                   | org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope                                                      |
|     new |    +4 |   0.0% → 3.4% |   0 → 4 | `processMembers(CallInfo, TowerLevelProcessor, Function2)`                                                                                  | org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel                                      |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `read(byte[])`                                                                                                                              | java.io.FilterInputStream                                                                                               |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                     | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                    |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                    |
|  +30.0% |    +3 |  8.5% → 11.0% | 10 → 13 | `getValue(Object, Object)`                                                                                                                  | org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache                                                                    |
|  +75.0% |    +3 |   3.4% → 5.9% |   4 → 7 | `invoke()`                                                                                                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d9170 |
| +100.0% |    +3 |   2.5% → 5.1% |   3 → 6 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                               | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher                  |
| +100.0% |    +3 |   2.5% → 5.1% |   3 → 6 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                                                               | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  +17.6% |    +3 | 14.4% → 16.9% | 17 → 20 | `visitNestedElements(FirElement)`                                                                                                           | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
| +300.0% |    +3 |   0.8% → 3.4% |   1 → 4 | `acceptChildren(FirVisitor, Object)`                                                                                                        | org.jetbrains.kotlin.fir.expressions.impl.FirWhileLoopImpl                                                              |
| +300.0% |    +3 |   0.8% → 3.4% |   1 → 4 | `visitLoop(FirLoop, Object)`                                                                                                                | org.jetbrains.kotlin.fir.visitors.FirVisitor                                                                            |
| +300.0% |    +3 |   0.8% → 3.4% |   1 → 4 | `visitWhileLoop(FirWhileLoop, Object)`                                                                                                      | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                                     |
|     new |    +3 |   0.0% → 2.5% |   0 → 3 | `findChild(String)`                                                                                                                         | com.intellij.openapi.vfs.VirtualFile                                                                                    |
|     new |    +3 |   0.0% → 2.5% |   0 → 3 | `travelPath(int, FqName, List, int, List)`                                                                                                  | org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl                                                             |
|     new |    +3 |   0.0% → 2.5% |   0 → 3 | `extractClassMetadata(ClassId, FirDeserializationContext)`                                                                                  | org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider                                           |
|     new |    +3 |   0.0% → 2.5% |   0 → 3 | `nestedClassifierScope(FirSession, FirClass)`                                                                                               | org.jetbrains.kotlin.fir.scopes.impl.FirDeclaredMemberScopeProviderKt                                                   |
|     new |    +3 |   0.0% → 2.5% |   0 → 3 | `createIrFunction(FirFunction, IrDeclarationParent, IrSimpleFunctionSymbol, IrDeclarationOrigin, boolean, ConeClassLikeLookupTag, boolean)` | org.jetbrains.kotlin.fir.backend.generators.Fir2IrCallableDeclarationsGenerator                                         |
|  +66.7% |    +2 |   2.5% → 4.2% |   3 → 5 | `buildLightTree(CharSequence, KtSourceFile, KotlinLightParser$LightTreeParsingErrorListener)`                                               | org.jetbrains.kotlin.parsing.KotlinLightParser                                                                          |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % | Samples | Function                                                                                                                                      | Location                                                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| -25.0% |   -12 | 40.7% → 30.5% | 48 → 36 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                            |
| -22.9% |   -11 | 40.7% → 31.4% | 48 → 37 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                                  |
| -21.3% |   -10 | 39.8% → 31.4% | 47 → 37 | `doMain(CLICompiler, String[])`                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                 |
| -24.4% |   -10 | 34.7% → 26.3% | 41 → 31 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | org.jetbrains.kotlin.cli.common.CLICompiler                                                           |
| -24.4% |   -10 | 34.7% → 26.3% | 41 → 31 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | org.jetbrains.kotlin.cli.common.CLICompiler                                                           |
| -19.1% |    -9 | 39.8% → 32.2% | 47 → 38 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                 |
| -20.9% |    -9 | 36.4% → 28.8% | 43 → 34 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                 |
| -20.9% |    -9 | 36.4% → 28.8% | 43 → 34 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                            |
| -21.4% |    -9 | 35.6% → 28.0% | 42 → 33 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                            |
| -20.0% |    -8 | 33.9% → 27.1% | 40 → 32 | `invoke(Object, Object[])`                                                                                                                    | java.lang.reflect.Method                                                                              |
| -19.5% |    -8 | 34.7% → 28.0% | 41 → 33 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | org.jetbrains.kotlin.cli.common.CLICompiler                                                           |
| -20.5% |    -8 | 33.1% → 26.3% | 39 → 31 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                 |
| -17.0% |    -8 | 39.8% → 33.1% | 47 → 39 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                                                       |
| -17.0% |    -8 | 39.8% → 33.1% | 47 → 39 | `phaseBody(LoggingContext, Object)`                                                                                                           | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                                                       |
| -17.0% |    -8 | 39.8% → 33.1% | 47 → 39 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase                                                 |
| -18.6% |    -8 | 36.4% → 29.7% | 43 → 35 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                 |
| -19.5% |    -8 | 34.7% → 28.0% | 41 → 33 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler                                                           |
| -66.7% |    -8 |  10.2% → 3.4% |  12 → 4 | `transformReturnExpression(FirReturnExpression, ResolutionMode)`                                                                              | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer |
| -15.2% |    -7 | 39.0% → 33.1% | 46 → 39 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.backend.common.phaser.CompositePhase                                             |
| -15.6% |    -7 | 38.1% → 32.2% | 45 → 38 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                                                    |


# Allocated heap profile diff

Allocated 717 MB over 865 samples → 864 samples (829 kB → 830 kB per sample).

| Category | Change |    Delta |             % |              Size |   Samples |
| -------- | -----: | -------: | ------------: | ----------------: | --------: |
| stdlib   |  -9.4% | -51.2 MB | 76.0% → 68.9% |   545 MB → 494 MB | 529 → 554 |
| ours     | +29.8% | +51.2 MB | 24.0% → 31.1% |   172 MB → 223 MB | 325 → 304 |
| native   |  -2.6% |   -808 B |         <0.1% | 30.5 kB → 29.7 kB |    11 → 6 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |            % |              Size |   Samples | Function                                                                                                    | Location                                                                          |
| -------: | -------: | -----------: | ----------------: | --------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
|  +175.7% | +82.7 MB | 6.6% → 18.1% |  47.1 MB → 130 MB | 115 → 125 | `<init>(int)`                                                                                               | java.io.ByteArrayOutputStream                                                     |
| +2206.2% | +60.9 MB |  0.4% → 8.9% | 2.76 MB → 63.7 MB |     7 → 4 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                     | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                              |
|      new | +3.14 MB |  0.0% → 0.4% |     0 B → 3.14 MB |     0 → 1 | `<init>(int)`                                                                                               | org.jetbrains.org.objectweb.asm.ByteVector                                        |
|   +24.6% |  +2.9 MB |  1.6% → 2.0% | 11.8 MB → 14.7 MB |   25 → 29 | `iterator()`                                                                                                | java.util.ArrayList                                                               |
|      new | +2.09 MB |  0.0% → 0.3% |     0 B → 2.09 MB |     0 → 3 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler                    |
|  +400.0% | +2.09 MB |  0.1% → 0.4% |  523 kB → 2.62 MB |     1 → 5 | `getTypeInternal(String, int, int)`                                                                         | org.jetbrains.org.objectweb.asm.Type                                              |
|   +90.7% | +2.07 MB |  0.3% → 0.6% | 2.29 MB → 4.36 MB |     4 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                       | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt                   |
|      new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |     0 → 3 | `iterator()`                                                                                                | java.util.LinkedHashMap$LinkedEntrySet                                            |
|  +150.0% | +1.57 MB |  0.1% → 0.4% | 1.05 MB → 2.62 MB |     2 → 5 | `lazy(LazyThreadSafetyMode, Function0)`                                                                     | kotlin.LazyKt__LazyJVMKt                                                          |
|      new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |     0 → 3 | `<init>()`                                                                                                  | org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder  |
|   +27.3% | +1.57 MB |  0.8% → 1.0% | 5.76 MB → 7.32 MB |   10 → 14 | `<init>(int, int)`                                                                                          | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                               |
|  +148.7% | +1.55 MB |  0.1% → 0.4% |  1.04 MB → 2.6 MB |     2 → 5 | `accept(ClassVisitor, Attribute[], int)`                                                                    | org.jetbrains.org.objectweb.asm.ClassReader                                       |
|  +259.4% | +1.51 MB |  0.1% → 0.3% |  582 kB → 2.09 MB |     1 → 4 | `ensureCapacity()`                                                                                          | com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure                             |
|  +209.7% | +1.06 MB |  0.1% → 0.2% |  507 kB → 1.57 MB |     1 → 3 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`                                                             | org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer               |
|      new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |     0 → 2 | `create(List)`                                                                                              | org.jetbrains.kotlin.fir.types.ConeAttributes$Companion                           |
|  +200.0% | +1.05 MB |  0.1% → 0.2% |  523 kB → 1.57 MB |     1 → 3 | `valueOf(int)`                                                                                              | java.lang.Integer                                                                 |
|      new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |     0 → 2 | `<init>(FixStackAnalyzer, int, int)`                                                                        | org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame |
|      new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |     0 → 2 | `getObjectType(String)`                                                                                     | org.jetbrains.org.objectweb.asm.Type                                              |
|      new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |     0 → 2 | `visitMethodInsn(int, String, String, String, boolean)`                                                     | org.jetbrains.org.objectweb.asm.tree.MethodNode                                   |
|      new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |     0 → 2 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)`                 | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt                   |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |           % |              Size | Samples | Function                                                                              | Location                                                                           |
| ------: | -------: | ----------: | ----------------: | ------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| removed | -4.17 MB | 0.6% → 0.0% |     4.17 MB → 0 B |   8 → 0 | `<init>(byte[], int, boolean)`                                                        | org.jetbrains.org.objectweb.asm.ClassReader                                        |
|  -60.0% | -3.14 MB | 0.7% → 0.3% | 5.23 MB → 2.09 MB |   9 → 4 | `box-impl(List)`                                                                      | org.jetbrains.kotlin.fir.MutableOrEmptyList                                        |
|  -14.8% | -2.62 MB | 2.5% → 2.1% | 17.7 MB → 15.1 MB | 34 → 29 | `<init>(int)`                                                                         | org.jetbrains.kotlin.protobuf.ByteString$Output                                    |
|  -80.0% | -2.09 MB | 0.4% → 0.1% |  2.62 MB → 523 kB |   4 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                   | org.jetbrains.kotlin.fir.types.ConeInferenceContext                                |
|  -33.4% | -1.57 MB | 0.7% → 0.4% | 4.71 MB → 3.13 MB |   9 → 6 | `copyOf(Object[], int)`                                                               | java.util.Arrays                                                                   |
| removed | -1.57 MB | 0.2% → 0.0% |     1.57 MB → 0 B |   3 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                       | org.jetbrains.kotlin.ir.util.IrUtilsKt                                             |
|  -37.5% | -1.57 MB | 0.6% → 0.4% | 4.19 MB → 2.62 MB |   8 → 5 | `newOutput()`                                                                         | org.jetbrains.kotlin.protobuf.ByteString                                           |
| removed | -1.57 MB | 0.2% → 0.0% |     1.57 MB → 0 B |   3 → 0 | `visitTypeInsn(int, String)`                                                          | org.jetbrains.org.objectweb.asm.tree.MethodNode                                    |
|  -66.7% | -1.05 MB | 0.2% → 0.1% |  1.57 MB → 523 kB |   3 → 1 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`         | org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt                           |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   1 → 0 | `iterator()`                                                                          | kotlin.sequences.FilteringSequence                                                 |
|  -66.7% | -1.05 MB | 0.2% → 0.1% |  1.57 MB → 523 kB |   3 → 1 | `toString()`                                                                          | java.lang.StringBuilder                                                            |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)` | org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt                              |
|  -66.7% | -1.05 MB | 0.2% → 0.1% |  1.57 MB → 523 kB |   3 → 1 | `visitVarInsn(int, int)`                                                              | org.jetbrains.org.objectweb.asm.tree.MethodNode                                    |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `internalNameByClassId(ClassId)`                                                      | org.jetbrains.kotlin.resolve.jvm.JvmClassName                                      |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `executeInvokeInsn(AbstractInsnNode, String, Interpreter)`                            | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                                |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   1 → 0 | `<init>(long)`                                                                        | org.jetbrains.kotlin.fir.lightTree.fir.modifier.ModifierList                       |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `processMembers(CallInfo, TowerLevelProcessor, Function2)`                            | org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `<init>()`                                                                            | org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationBuilder                  |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `visitLocalVariable(String, String, String, Label, Label, int)`                       | org.jetbrains.org.objectweb.asm.tree.MethodNode                                    |
| removed | -1.05 MB | 0.1% → 0.0% |     1.05 MB → 0 B |   2 → 0 | `iterator()`                                                                          | org.jetbrains.org.objectweb.asm.tree.analysis.SmallSet                             |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |            % |              Size |   Samples | Function                                                                                                                               | Location                                                                                                                |
| -------: | -------: | -----------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|  +175.7% | +82.7 MB | 6.6% → 18.1% |  47.1 MB → 130 MB | 115 → 125 | `<init>(int)`                                                                                                                          | java.io.ByteArrayOutputStream                                                                                           |
| +5000.2% | +60.8 MB |  0.2% → 8.6% |   1.22 MB → 62 MB |     3 → 2 | `getAnnotation(Class)`                                                                                                                 | java.lang.reflect.Field                                                                                                 |
|  +566.3% | +11.9 MB |  0.3% → 1.9% | 2.09 MB → 13.9 MB |    3 → 26 | `invoke()`                                                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016a5000 |
|   +36.1% | +10.5 MB |  4.0% → 5.5% |   29 MB → 39.5 MB |   55 → 74 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)`                                                                       | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|   +26.4% | +8.91 MB |  4.7% → 5.9% | 33.7 MB → 42.6 MB |   63 → 80 | `transformBlock(FirBlock, Object)`                                                                                                     | org.jetbrains.kotlin.fir.visitors.FirTransformer                                                                        |
|  +151.4% | +8.71 MB |  0.8% → 2.0% | 5.75 MB → 14.5 MB |   11 → 27 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)`                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  +142.3% | +8.19 MB |  0.8% → 1.9% | 5.75 MB → 13.9 MB |   11 → 26 | `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)`                                                 | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext                                           |
|   +16.7% | +8.18 MB |  6.8% → 8.0% | 49.1 MB → 57.3 MB |  93 → 107 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)`                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer                             |
|  +122.1% | +7.67 MB |  0.9% → 1.9% | 6.28 MB → 13.9 MB |   11 → 26 | `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  +122.1% | +7.67 MB |  0.9% → 1.9% | 6.28 MB → 13.9 MB |   11 → 26 | `doTransformAnonymousFunctionBodyFromCallCompletion$org_jetbrains_kotlin_resolve(FirAnonymousFunctionExpression, FirResolvedTypeRef)`  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|   +16.3% | +7.65 MB |  6.6% → 7.6% |   47 MB → 54.6 MB |  89 → 102 | `transformBlock(FirBlock, Object)`                                                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher                  |
|   +17.7% | +7.34 MB |  5.8% → 6.8% | 41.6 MB → 48.9 MB |   78 → 91 | `transformElement(FirElement, ResolutionMode)`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer                             |
|   +17.7% | +7.34 MB |  5.8% → 6.8% | 41.6 MB → 48.9 MB |   78 → 91 | `transformElement(FirElement, Object)`                                                                                                 | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer                             |
|   +97.6% | +7.15 MB |  1.0% → 2.0% | 7.32 MB → 14.5 MB |   14 → 27 | `transformBody(FirTransformer, Object)`                                                                                                | org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl                                                     |
|   +14.8% | +7.13 MB |  6.7% → 7.7% |   48 MB → 55.2 MB |  91 → 103 | `transformBlock(FirBlock, ResolutionMode)`                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher                  |
|   +14.5% | +7.13 MB |  6.8% → 7.8% | 49.1 MB → 56.2 MB |  93 → 105 | `transformBlock(FirBlock, ResolutionMode)`                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer                             |
|  +108.4% |  +6.8 MB |  0.9% → 1.8% | 6.28 MB → 13.1 MB |   11 → 25 | `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl                                          |
|   +68.4% |  +6.8 MB |  1.4% → 2.3% | 9.94 MB → 16.7 MB |   18 → 31 | `visitElement(FirElement, Object)`                                                                                                     | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
|   +14.1% | +6.61 MB |  6.6% → 7.5% |   47 MB → 53.6 MB |  89 → 100 | `transform(FirTransformer, Object)`                                                                                                    | org.jetbrains.kotlin.fir.expressions.FirBlock                                                                           |
|   +13.0% | +6.61 MB |  7.1% → 8.0% | 50.7 MB → 57.3 MB |  96 → 107 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                      | org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt                                                                |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                                                                                      | Location                                                                                                                |
| ------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|  -54.5% |  -138 MB | 35.2% → 16.0% |   253 MB → 115 MB | 103 → 100 | `toByteArray()`                                                                                                                               | java.io.ByteArrayOutputStream                                                                                           |
| removed | -65.6 MB |   9.2% → 0.0% |     65.6 MB → 0 B |     1 → 0 | `getAnnotationsByType(Class)`                                                                                                                 | java.lang.reflect.Field                                                                                                 |
|   -7.3% | -14.9 MB | 28.6% → 26.6% |   205 MB → 190 MB | 266 → 248 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                                                    |
|   -6.9% | -14.4 MB | 28.9% → 26.9% |   207 MB → 193 MB | 270 → 253 | `doMain(CLICompiler, String[])`                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|   -6.9% | -13.9 MB | 28.1% → 26.2% |   202 MB → 188 MB | 259 → 243 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                              |
|   -6.4% | -13.4 MB | 29.2% → 27.4% |   209 MB → 196 MB | 274 → 259 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|   -6.1% |   -13 MB | 29.9% → 28.0% |   214 MB → 201 MB | 283 → 269 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|   -6.0% | -12.7 MB | 29.4% → 27.6% |   211 MB → 198 MB | 276 → 263 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|   -5.7% |   -12 MB | 29.6% → 27.9% |   212 MB → 200 MB | 279 → 267 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|   -7.4% | -11.7 MB | 22.0% → 20.3% |   158 MB → 146 MB | 299 → 278 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|   -7.5% | -11.7 MB | 21.8% → 20.2% |   157 MB → 145 MB | 297 → 276 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|   -7.4% | -11.7 MB | 22.0% → 20.4% |   158 MB → 146 MB | 299 → 278 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|   -7.1% | -10.6 MB | 21.0% → 19.5% |   150 MB → 140 MB | 284 → 268 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|   -6.7% | -10.6 MB | 22.1% → 20.6% |   159 MB → 148 MB | 301 → 281 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                                                                      |
|  -50.5% | -10.6 MB |   2.9% → 1.4% | 20.9 MB → 10.4 MB |   37 → 20 | `doTransformFile(FirFile, ResolutionMode)`                                                                                                    | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|   -6.6% | -10.2 MB | 21.4% → 20.0% |   153 MB → 143 MB | 291 → 273 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|   -6.7% | -10.2 MB | 21.1% → 19.7% |   151 MB → 141 MB | 287 → 269 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                              |
|  -43.7% | -10.1 MB |   3.2% → 1.8% |     23 MB → 13 MB |   41 → 25 | `invoke()`                                                                                                                                    | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001673a10 |
|  -51.4% | -9.94 MB |   2.7% → 1.3% | 19.4 MB → 9.42 MB |   35 → 18 | `transformFile(FirFile, ResolutionMode)`                                                                                                      | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|   -6.3% | -9.63 MB | 21.2% → 19.8% |   152 MB → 142 MB | 288 → 271 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                              |


# Retained heap profile diff

Retained 20.7 MB → 18.9 MB (-1.8 MB, -8.3%) over 203 samples → 196 samples (102 kB → 96.6 kB per sample).

| Category | Change |    Delta |             % |              Size |   Samples |
| -------- | -----: | -------: | ------------: | ----------------: | --------: |
| stdlib   |  -8.7% | -1.68 MB | 93.6% → 93.2% | 19.3 MB → 17.7 MB | 184 → 182 |
| ours     |  -2.9% | -38.3 kB |   6.4% → 6.8% | 1.32 MB → 1.28 MB |   19 → 14 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |  Delta |            % |        Size | Samples | Function                                                                                                                                                                                                                                                  | Location                                                                                |
| -----: | -----: | -----------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|    new | +192 B | 0.0% → <0.1% | 0 B → 192 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                               | org.jetbrains.kotlin.metadata.ProtoBuf$Type$1                                           |
|    new | +128 B | 0.0% → <0.1% | 0 B → 128 B |   0 → 2 | `<init>()`                                                                                                                                                                                                                                                | org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder        |
|    new |  +80 B | 0.0% → <0.1% |  0 B → 80 B |   0 → 1 | `<init>(int)`                                                                                                                                                                                                                                             | java.util.ArrayList                                                                     |
|    new |  +32 B | 0.0% → <0.1% |  0 B → 32 B |   0 → 1 | `copy(FirDeclarationStatus, Visibility, Modality, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, ReturnValueStatus)` | org.jetbrains.kotlin.fir.UtilsKt                                                        |
|    new |  +32 B | 0.0% → <0.1% |  0 B → 32 B |   0 → 1 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)`                                                                                                                                                 | org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size | Samples | Function                                                                                                                                                      | Location                                                                    |
| ------: | -------: | -----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|   -3.0% | -37.7 kB |  6.1% → 6.4% | 1.26 MB → 1.22 MB |   7 → 6 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                                                                         | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt             |
| removed |   -152 B | <0.1% → 0.0% |       152 B → 0 B |   1 → 0 | `<clinit>()`                                                                                                                                                  | org.jetbrains.kotlin.fir.modules.FirJavaModuleResolverProviderKt            |
| removed |   -144 B | <0.1% → 0.0% |       144 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                   | org.jetbrains.kotlin.metadata.ProtoBuf$Class$1                              |
| removed |   -120 B | <0.1% → 0.0% |       120 B → 0 B |   1 → 0 | `<clinit>()`                                                                                                                                                  | org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion          |
| removed |   -112 B | <0.1% → 0.0% |       112 B → 0 B |   1 → 0 | `build()`                                                                                                                                                     | org.jetbrains.kotlin.fir.declarations.builder.FirPropertyBuilder            |
| removed |    -88 B | <0.1% → 0.0% |        88 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                   | org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1          |
| removed |    -80 B | <0.1% → 0.0% |        80 B → 0 B |   1 → 0 | `createIrLazyClass(FirRegularClass, IrDeclarationParent, IrClassSymbol)`                                                                                      | org.jetbrains.kotlin.fir.backend.generators.Fir2IrLazyDeclarationsGenerator |
| removed |    -80 B | <0.1% → 0.0% |        80 B → 0 B |   1 → 0 | `createValueParameter(int, int, IrDeclarationOrigin, IrParameterKind, Name, IrType, boolean, IrValueParameterSymbol, IrType, boolean, boolean, boolean)`      | org.jetbrains.kotlin.ir.declarations.IrFactory                              |
| removed |    -56 B | <0.1% → 0.0% |        56 B → 0 B |   1 → 0 | `scopeForClassImpl(FirClass, ConeSubstitutor, FirSession, ScopeSession, boolean, FirClass, boolean, ConeClassLikeLookupTag, FirClassSymbol, FirResolvePhase)` | org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProviderKt                    |
| removed |    -56 B | <0.1% → 0.0% |        56 B → 0 B |   1 → 0 | `createFunctionCallExitNode(ControlFlowGraphBuilder, FirFunctionCall)`                                                                                        | org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphNodeBuilderKt      |
| removed |    -40 B | <0.1% → 0.0% |        40 B → 0 B |   1 → 0 | `computeChildren()`                                                                                                                                           | org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile                     |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|   Change |    Delta |            % |            Size | Samples | Function                                                                                                                            | Location                                                                                                         |
| -------: | -------: | -----------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                             | org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer                                                   |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer                                                   |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `loadFunctionsByCallableId(CallableId)`                                                                                             | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                   |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `access$loadFunctionsByCallableId(AbstractFirDeserializedSymbolProvider, CallableId)`                                               | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                   |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `invoke(Object, Void)`                                                                                                              | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$3    |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `invoke(Object, Object)`                                                                                                            | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$3    |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `getCallables(FirCache, CallableId)`                                                                                                | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                   |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `getTopLevelFunctionSymbolsTo(List, FqName, Name)`                                                                                  | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                   |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `computeTopLevelFunctions(CallableId)`                                                                                              | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider                                |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `access$computeTopLevelFunctions(FirCachingCompositeSymbolProvider, CallableId)`                                                    | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider                                |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `invoke(Object, Void)`                                                                                                              | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$3 |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `invoke(Object, Object)`                                                                                                            | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$3 |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `getTopLevelFunctionSymbolsTo(List, FqName, Name)`                                                                                  | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider                                |
| +5540.0% | +4.43 kB |        <0.1% |  80 B → 4.51 kB |   1 → 3 | `getTopLevelFunctionSymbols(FqName, Name)`                                                                                          | org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider                                                     |
| +5260.0% | +4.21 kB |        <0.1% |  80 B → 4.29 kB |   1 → 3 | `getValue()`                                                                                                                        | kotlin.SafePublicationLazyImpl                                                                                   |
|      new | +4.18 kB | 0.0% → <0.1% |   0 B → 4.18 kB |   0 → 2 | `transformResult(FirTransformer, Object)`                                                                                           | org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl                                                |
|      new | +4.18 kB | 0.0% → <0.1% |   0 B → 4.18 kB |   0 → 2 | `transformChildren(FirTransformer, Object)`                                                                                         | org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl                                                |
|      new | +4.18 kB | 0.0% → <0.1% |   0 B → 4.18 kB |   0 → 2 | `transformExpression(FirExpression, ResolutionMode)`                                                                                | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer                      |
|    +3.0% | +4.13 kB |         0.7% | 138 kB → 142 kB |   5 → 7 | `accept(ClassVisitor, Attribute[], int)`                                                                                            | org.jetbrains.org.objectweb.asm.ClassReader                                                                      |
|    +3.0% | +4.13 kB |         0.7% | 138 kB → 142 kB |   5 → 7 | `accept(ClassVisitor, int)`                                                                                                         | org.jetbrains.org.objectweb.asm.ClassReader                                                                      |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                     | Location                                                                              |
| ------: | -------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|   -8.7% | -1.65 MB | 91.5% → 91.1% | 18.9 MB → 17.2 MB | 178 → 173 | `run(String[])`                                                              | org.jetbrains.kotlin.preloading.Preloader                                             |
|   -8.7% | -1.65 MB | 91.5% → 91.1% | 18.9 MB → 17.2 MB | 178 → 173 | `main(String[])`                                                             | org.jetbrains.kotlin.preloading.Preloader                                             |
|   -7.1% | -1.05 MB | 71.6% → 72.5% | 14.8 MB → 13.7 MB | 168 → 165 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                  |
|   -7.1% | -1.05 MB | 71.6% → 72.5% | 14.8 MB → 13.7 MB | 168 → 165 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                  |
|   -5.4% |  -785 kB | 70.3% → 72.5% | 14.5 MB → 13.7 MB | 167 → 165 | `toByteArray()`                                                              | java.io.ByteArrayOutputStream                                                         |
|  -15.2% |  -638 kB | 20.4% → 18.9% | 4.21 MB → 3.57 MB |   14 → 12 | `main(String[])`                                                             | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                  |
|  -15.2% |  -638 kB | 20.4% → 18.9% | 4.21 MB → 3.57 MB |   14 → 12 | `main(String[])`                                                             | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                            |
|  -14.6% |  -601 kB | 19.9% → 18.6% | 4.12 MB → 3.51 MB |    10 → 9 | `invoke(Object, Object[])`                                                   | java.lang.reflect.Method                                                              |
|  -14.6% |  -601 kB | 19.9% → 18.6% | 4.11 MB → 3.51 MB |     4 → 3 | `getResource(String)`                                                        | java.lang.ClassLoader                                                                 |
|  -14.6% |  -601 kB | 19.9% → 18.6% | 4.11 MB → 3.51 MB |     4 → 3 | `getResource(String)`                                                        | org.jetbrains.kotlin.preloading.MemoryBasedClassLoader                                |
|  -14.6% |  -601 kB | 19.9% → 18.6% | 4.11 MB → 3.51 MB |     4 → 3 | `<init>()`                                                                   | org.jetbrains.kotlin.cli.common.CLICompiler                                           |
|  -14.6% |  -601 kB | 19.9% → 18.6% | 4.11 MB → 3.51 MB |     4 → 3 | `<init>()`                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                            |
|  -98.4% |  -258 kB |  1.3% → <0.1% |  262 kB → 4.19 kB |     1 → 2 | `put(Object, Object)`                                                        | java.util.HashMap                                                                     |
|  -99.6% | -38.1 kB |  0.2% → <0.1% |   38.3 kB → 168 B |     4 → 3 | `checkElement(FirElement)`                                                   | org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor |
|  -99.6% | -38.1 kB |  0.2% → <0.1% |   38.3 kB → 168 B |     4 → 3 | `visitNestedElements(FirElement)`                                            | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor       |
| removed |   -38 kB |   0.2% → 0.0% |       38 kB → 0 B |     3 → 0 | `loadClass(String, boolean)`                                                 | java.lang.ClassLoader                                                                 |
|  -99.6% | -37.9 kB |  0.2% → <0.1% |     38 kB → 136 B |     3 → 2 | `acceptChildren(FirVisitor, Object)`                                         | org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl                       |
|  -99.6% | -37.9 kB |  0.2% → <0.1% |     38 kB → 136 B |     3 → 2 | `visitNamedFunction(FirNamedFunction, Void)`                                 | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor       |
|  -99.6% | -37.9 kB |  0.2% → <0.1% |     38 kB → 136 B |     3 → 2 | `visitNamedFunction(FirNamedFunction, Object)`                               | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor       |
|  -98.6% | -37.8 kB |  0.2% → <0.1% |   38.3 kB → 536 B |     5 → 4 | `getClassLikeSymbolByClassId(ClassId)`                                       | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider     |


# Lock contention profile diff

Blocked 517.1ms → 515.6ms (-1.5ms, -0.3%) over 3 samples → 2 samples (172.4ms → 257.8ms per sample).

| Category | Change |  Delta |      % |              Time | Samples |
| -------- | -----: | -----: | -----: | ----------------: | ------: |
| stdlib   |  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 |

The entry filter hides every sampled function, so all functions are shown.

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |  Delta |      % |              Time | Samples | Function              | Location                 |
| -----: | -----: | -----: | ----------------: | ------: | --------------------- | ------------------------ |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |  Delta |      % |              Time | Samples | Function                    | Location                                                              |
| -----: | -----: | -----: | ----------------: | ------: | --------------------------- | --------------------------------------------------------------------- |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `park(boolean, long)`       | jdk.internal.misc.Unsafe                                              |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `parkNanos(Object, long)`   | java.util.concurrent.locks.LockSupport                                |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `await(long, TimeUnit)`     | java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `await(long)`               | java.lang.ref.ReferenceQueue                                          |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `remove0(long)`             | java.lang.ref.ReferenceQueue                                          |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `remove(long)`              | java.lang.ref.ReferenceQueue                                          |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `run()`                     | jdk.internal.ref.CleanerImpl                                          |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `runWith(Object, Runnable)` | java.lang.Thread                                                      |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `run()`                     | java.lang.Thread                                                      |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `run()`                     | jdk.internal.misc.InnocuousThread                                     |
