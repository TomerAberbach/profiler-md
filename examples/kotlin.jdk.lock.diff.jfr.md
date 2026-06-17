# Sampling profile diff

118 samples (0 samples, 0.0%).

| Category | Change | Delta |      % | Samples |
| -------- | -----: | ----: | -----: | ------: |
| ours     |   0.0% |     0 | 100.0% |     118 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                                                                                            | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  +14.3% |    +4 | 23.7% → 27.1% | 28 → 32 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                       | java.util.zip.Inflater                                                                      |
|  +50.0% |    +2 |   3.4% → 5.1% |   4 → 6 | `throwParameterIsNullNPE(String)`                                                                                   | kotlin.jvm.internal.Intrinsics                                                              |
| +100.0% |    +1 |   0.8% → 1.7% |   1 → 2 | `advance()`                                                                                                         | org.jetbrains.kotlin.lexer._JetLexer                                                        |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `computeIndexedQualifiers(KotlinTypeMarker, Iterable, TypeEnhancementInfo, boolean)`                                | org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts                       |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitBlock(FirBlock, CheckerContext)`                                                                              | org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitAnnotationContainer(FirAnnotationContainer, Object)`                                                          | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor             |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitElement(FirElement, Void)`                                                                                    | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor             |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `collectionSizeOrDefault(Iterable, int)`                                                                            | kotlin.collections.CollectionsKt__IterablesKt                                               |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitProperty(FirProperty, Void)`                                                                                  | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor             |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `doGenerate(ReifiedTypeParametersUsages)`                                                                           | org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen                                    |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)`                                                     | org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$typeMapper$1                          |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)`                | java.lang.ClassLoader                                                                       |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `newDirectoryStream(DirectoryStream$Filter)`                                                                        | jdk.internal.jrtfs.JrtPath                                                                  |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `findChild(String)`                                                                                                 | com.intellij.openapi.vfs.VirtualFile                                                        |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `getLexemeIndexAt(int)`                                                                                             | com.intellij.lang.impl.MarkerProduction                                                     |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | org.jetbrains.kotlin.parsing.KotlinLightParser                                              |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `getTokenType()`                                                                                                    | com.intellij.lang.impl.PsiBuilderAdapter                                                    |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `readUtfNonAscii(int, int, int, char[])`                                                                            | org.jetbrains.org.objectweb.asm.ClassReader                                                 |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `toExpandedRecordsList(List)`                                                                                       | org.jetbrains.kotlin.metadata.jvm.deserialization.JvmNameResolverKt                         |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `classIndex_delegate$lambda$0(FirClass)`                                                                            | org.jetbrains.kotlin.fir.scopes.impl.FirNestedClassifierScopeImpl                           |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                            | Location                                                                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                                                            | java.util.zip.ZipFile$Source                                                                |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `hasNext()`                                                                                                                                                         | kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap$EntryIterator                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                                     | java.lang.ClassLoader                                                                       |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getRelativePath()`                                                                                                                                                 | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipEntryDescription                             |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `ensureIndex(int)`                                                                                                                                                  | it.unimi.dsi.fastutil.ints.AbstractIntList                                                  |
|  -50.0% |    -1 | 1.7% → 0.8% |   2 → 1 | `sanitizeStackTrace(Throwable)`                                                                                                                                     | kotlin.jvm.internal.Intrinsics                                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `checkNotNullParameter(Object, String)`                                                                                                                             | kotlin.jvm.internal.Intrinsics                                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `tt()`                                                                                                                                                              | org.jetbrains.kotlin.parsing.AbstractKotlinParsing                                          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)`                                                       | org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl                         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getAnnotationPlatformSupport(FirSession)`                                                                                                                          | org.jetbrains.kotlin.fir.declarations.FirAnnotationsPlatformSpecificSupportComponentKt      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `hasSupertypePathToParameter(FirTypeParameter, FirTypeParameter, Set)`                                                                                              | org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `isVisible(FirMemberDeclaration, FirSession, FirFile, List, FirExpression, boolean, FirRegularClass, boolean, SupertypeSupplier)`                                   | org.jetbrains.kotlin.fir.FirVisibilityChecker                                               |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getClass(ClassId, FirDeserializationContext)`                                                                                                                      | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl$lambda$0(FirCallResolver, FirQualifiedAccessExpression, FirSimpleNamedReference, boolean, FirElement, ResolutionMode)` | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                                      |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                          | org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `createConstraintSystem$default(InferenceComponents, Function2, int, Object)`                                                                                       | org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                                                                                  | org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner                         |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getType(TypeArgumentMarker)`                                                                                                                                       | org.jetbrains.kotlin.fir.types.ConeTypeContext                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getStaticCallableMemberScopeImpl(FirClass, FirSession, ScopeSession, boolean)`                                                                                     | org.jetbrains.kotlin.fir.scopes.FirKotlinScopeProvider                                      |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                     | Location                                                                                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
|     new |   +36 |  0.0% → 30.5% |  0 → 36 | `invokeStatic(Object, Object)`                                               | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                                                                               |
|     new |   +36 |  0.0% → 30.5% |  0 → 36 | `invoke(Object, Object, Object)`                                             | java.lang.invoke.LambdaForm$MH.0x0000007001010000                                                                                |
|     new |    +7 |   0.0% → 5.9% |   0 → 7 | `invoke()`                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d9170          |
| +300.0% |    +6 |   1.7% → 6.8% |   2 → 8 | `transformDeclarations(FirTransformer, Object)`                              | org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl                                                                           |
|     new |    +5 |   0.0% → 4.2% |   0 → 5 | `invoke()`                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016a5000          |
|     new |    +5 |   0.0% → 4.2% |   0 → 5 | `invoke()`                                                                   | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x00000070016a7c80                        |
|     new |    +5 |   0.0% → 4.2% |   0 → 5 | `invoke()`                                                                   | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x00000070016d9618 |
|  +14.3% |    +4 | 23.7% → 27.1% | 28 → 32 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                | java.util.zip.Inflater                                                                                                           |
|  +14.3% |    +4 | 23.7% → 27.1% | 28 → 32 | `inflate(byte[], int, int)`                                                  | java.util.zip.Inflater                                                                                                           |
|  +40.0% |    +4 |  8.5% → 11.9% | 10 → 14 | `accept(FirVisitor, Object)`                                                 | org.jetbrains.kotlin.fir.expressions.FirFunctionCall                                                                             |
| +400.0% |    +4 |   0.8% → 4.2% |   1 → 5 | `processFunctionsByName(Name, Function1)`                                    | org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope                                                               |
|     new |    +4 |   0.0% → 3.4% |   0 → 4 | `invoke()`                                                                   | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x00000070016ac688                                                |
|     new |    +4 |   0.0% → 3.4% |   0 → 4 | `processMembers(CallInfo, TowerLevelProcessor, Function2)`                   | org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel                                               |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `read(byte[], int, int)`                                                     | java.util.zip.InflaterInputStream                                                                                                |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `read(byte[], int, int)`                                                     | java.util.zip.ZipInputStream                                                                                                     |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `read(byte[])`                                                               | java.io.FilterInputStream                                                                                                        |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                             |
|  +11.1% |    +3 | 22.9% → 25.4% | 27 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                             |
|  +30.0% |    +3 |  8.5% → 11.0% | 10 → 13 | `getValue(Object, Object)`                                                   | org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache                                                                             |
| +100.0% |    +3 |   2.5% → 5.1% |   3 → 6 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher                           |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                           | Location                                              |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| removed |   -48 |  40.7% → 0.0% |  48 → 0 | `invokeStatic(Object, Object)`                                                                     | java.lang.invoke.LambdaForm$DMH.0x000000b801001c00    |
| removed |   -48 |  40.7% → 0.0% |  48 → 0 | `invoke(Object, Object, Object)`                                                                   | java.lang.invoke.LambdaForm$MH.0x000000b801010000     |
|  -25.0% |   -12 | 40.7% → 30.5% | 48 → 36 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler            |
|  -22.9% |   -11 | 40.7% → 31.4% | 48 → 37 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion  |
|  -23.9% |   -11 | 39.0% → 29.7% | 46 → 35 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | java.lang.invoke.Invokers$Holder                      |
|  -25.0% |   -11 | 37.3% → 28.0% | 44 → 33 | `invokeImpl(Object, Object[])`                                                                     | jdk.internal.reflect.DirectMethodHandleAccessor       |
|  -21.3% |   -10 | 39.8% → 31.4% | 47 → 37 | `doMain(CLICompiler, String[])`                                                                    | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |
|  -24.4% |   -10 | 34.7% → 26.3% | 41 → 31 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | org.jetbrains.kotlin.cli.common.CLICompiler           |
|  -24.4% |   -10 | 34.7% → 26.3% | 41 → 31 | `exec(PrintStream, MessageRenderer, String[])`                                                     | org.jetbrains.kotlin.cli.common.CLICompiler           |
|  -21.4% |    -9 | 35.6% → 28.0% | 42 → 33 | `invoke(Object, Object[])`                                                                         | jdk.internal.reflect.DirectMethodHandleAccessor       |
|  -19.1% |    -9 | 39.8% → 32.2% | 47 → 38 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |
|  -20.9% |    -9 | 36.4% → 28.8% | 43 → 34 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                     | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline |
|  -20.9% |    -9 | 36.4% → 28.8% | 43 → 34 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler            |
|  -21.4% |    -9 | 35.6% → 28.0% | 42 → 33 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                             | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler            |
|  -20.0% |    -8 | 33.9% → 27.1% | 40 → 32 | `invoke(Object, Object[])`                                                                         | java.lang.reflect.Method                              |
|  -19.5% |    -8 | 34.7% → 28.0% | 41 → 33 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | org.jetbrains.kotlin.cli.common.CLICompiler           |
|  -20.5% |    -8 | 33.1% → 26.3% | 39 → 31 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | org.jetbrains.kotlin.cli.common.CLICompiler$Companion |
|  -17.0% |    -8 | 39.8% → 33.1% | 47 → 39 | `phaseBody(PipelineContext, PipelineArtifact)`                                                     | org.jetbrains.kotlin.cli.pipeline.PipelinePhase       |
|  -17.0% |    -8 | 39.8% → 33.1% | 47 → 39 | `phaseBody(LoggingContext, Object)`                                                                | org.jetbrains.kotlin.cli.pipeline.PipelinePhase       |
|  -17.0% |    -8 | 39.8% → 33.1% | 47 → 39 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase |


# Allocated heap profile diff

Allocated 717 MB (+15.3 kB, +0.0%) over 865 samples → 864 samples (829 kB → 830 kB per sample).

| Category | Change |    Delta |      % |              Size |   Samples |
| -------- | -----: | -------: | -----: | ----------------: | --------: |
| ours     |  +0.0% | +16.1 kB | 100.0% |            717 MB | 854 → 858 |
| stdlib   |  -2.6% |   -808 B |   0.0% | 30.5 kB → 29.7 kB |    11 → 6 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |            % |              Size |   Samples | Function                                                                                                    | Location                                                                         |
| -------: | -------: | -----------: | ----------------: | --------: | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
|  +175.7% | +82.7 MB | 6.6% → 18.1% |  47.1 MB → 130 MB | 115 → 125 | `<init>(int)`                                                                                               | java.io.ByteArrayOutputStream                                                    |
| +2206.2% | +60.9 MB |  0.4% → 8.9% | 2.76 MB → 63.7 MB |     7 → 4 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                     | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                             |
| +2329.2% | +60.9 MB |  0.4% → 8.9% | 2.61 MB → 63.5 MB |     5 → 4 | `enlarge(int)`                                                                                              | jdk.internal.org.objectweb.asm.ByteVector                                        |
|  +114.1% | +4.18 MB |  0.5% → 1.1% | 3.66 MB → 7.84 MB |    7 → 15 | `resize()`                                                                                                  | java.util.HashMap                                                                |
|      new | +3.14 MB |  0.0% → 0.4% |     0 B → 3.14 MB |     0 → 1 | `<init>(int)`                                                                                               | org.jetbrains.org.objectweb.asm.ByteVector                                       |
|   +24.6% |  +2.9 MB |  1.6% → 2.0% | 11.8 MB → 14.7 MB |   25 → 29 | `iterator()`                                                                                                | java.util.ArrayList                                                              |
|  +200.0% | +2.09 MB |  0.1% → 0.4% | 1.05 MB → 3.14 MB |     2 → 6 | `allocateInstance(Object)`                                                                                  | java.lang.invoke.DirectMethodHandle                                              |
|      new | +2.09 MB |  0.0% → 0.3% |     0 B → 2.09 MB |     0 → 3 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler                   |
|  +400.0% | +2.09 MB |  0.1% → 0.4% |  523 kB → 2.62 MB |     1 → 5 | `getTypeInternal(String, int, int)`                                                                         | org.jetbrains.org.objectweb.asm.Type                                             |
|   +90.7% | +2.07 MB |  0.3% → 0.6% | 2.29 MB → 4.36 MB |     4 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                       | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt                  |
|   +44.1% |  +1.6 MB |  0.5% → 0.7% | 3.63 MB → 5.23 MB |    8 → 10 | `allocateInstance(Class)`                                                                                   | jdk.internal.misc.Unsafe                                                         |
|      new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |     0 → 3 | `iterator()`                                                                                                | java.util.LinkedHashMap$LinkedEntrySet                                           |
|  +150.0% | +1.57 MB |  0.1% → 0.4% | 1.05 MB → 2.62 MB |     2 → 5 | `lazy(LazyThreadSafetyMode, Function0)`                                                                     | kotlin.LazyKt__LazyJVMKt                                                         |
|      new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |     0 → 3 | `<init>()`                                                                                                  | org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder |
|   +27.3% | +1.57 MB |  0.8% → 1.0% | 5.76 MB → 7.32 MB |   10 → 14 | `<init>(int, int)`                                                                                          | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                              |
|  +148.7% | +1.55 MB |  0.1% → 0.4% |  1.04 MB → 2.6 MB |     2 → 5 | `accept(ClassVisitor, Attribute[], int)`                                                                    | org.jetbrains.org.objectweb.asm.ClassReader                                      |
|  +259.4% | +1.51 MB |  0.1% → 0.3% |  582 kB → 2.09 MB |     1 → 4 | `ensureCapacity()`                                                                                          | com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure                            |
|   +55.8% | +1.46 MB |  0.4% → 0.6% | 2.62 MB → 4.08 MB |     5 → 7 | `<init>(int)`                                                                                               | kotlin.collections.builders.MapBuilder                                           |
|      new | +1.44 MB |  0.0% → 0.2% |     0 B → 1.44 MB |     0 → 3 | `newInstance(OutputStream, int)`                                                                            | kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream                      |
|   +19.2% | +1.11 MB |  0.8% → 1.0% |  5.8 MB → 6.92 MB |   16 → 21 | `clone()`                                                                                                   | java.lang.Object                                                                 |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                      | Location                                                                            |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -53.4% |  -136 MB | 35.6% → 16.6% |   255 MB → 119 MB | 102 → 100 | `copyOf(byte[], int)`                                                         | java.util.Arrays                                                                    |
| removed | -66.2 MB |   9.2% → 0.0% |     66.2 MB → 0 B |     2 → 0 | `singletonIterator(Object)`                                                   | java.util.Collections                                                               |
| removed | -4.17 MB |   0.6% → 0.0% |     4.17 MB → 0 B |     8 → 0 | `<init>(byte[], int, boolean)`                                                | org.jetbrains.org.objectweb.asm.ClassReader                                         |
|  -60.0% | -3.14 MB |   0.7% → 0.3% | 5.23 MB → 2.09 MB |     9 → 4 | `box-impl(List)`                                                              | org.jetbrains.kotlin.fir.MutableOrEmptyList                                         |
|  -29.4% | -2.62 MB |   1.2% → 0.9% |  8.9 MB → 6.28 MB |   17 → 11 | `grow(int)`                                                                   | java.util.ArrayList                                                                 |
|  -14.8% | -2.62 MB |   2.5% → 2.1% | 17.7 MB → 15.1 MB |   34 → 29 | `<init>(int)`                                                                 | org.jetbrains.kotlin.protobuf.ByteString$Output                                     |
|  -77.9% | -2.26 MB |   0.4% → 0.1% |   2.9 MB → 640 kB |     7 → 3 | `createZipEntry(String)`                                                      | java.util.zip.ZipInputStream                                                        |
|  -80.0% | -2.09 MB |   0.4% → 0.1% |  2.62 MB → 523 kB |     4 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`           | org.jetbrains.kotlin.fir.types.ConeInferenceContext                                 |
|  -40.0% | -2.09 MB |   0.7% → 0.4% | 5.23 MB → 3.14 MB |    10 → 6 | `<init>(int, float, boolean)`                                                 | java.util.HashSet                                                                   |
|  -40.1% | -1.68 MB |   0.6% → 0.3% | 4.19 MB → 2.51 MB |     8 → 5 | `allocateUninitializedArray(Class, int)`                                      | jdk.internal.misc.Unsafe                                                            |
|  -75.5% | -1.62 MB |   0.3% → 0.1% |  2.14 MB → 523 kB |     5 → 1 | `addConstantUtf8(String)`                                                     | jdk.internal.org.objectweb.asm.SymbolTable                                          |
|  -33.4% | -1.57 MB |   0.7% → 0.4% | 4.71 MB → 3.13 MB |     9 → 6 | `copyOf(Object[], int)`                                                       | java.util.Arrays                                                                    |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                               | org.jetbrains.kotlin.ir.util.IrUtilsKt                                              |
|  -37.5% | -1.57 MB |   0.6% → 0.4% | 4.19 MB → 2.62 MB |     8 → 5 | `newOutput()`                                                                 | org.jetbrains.kotlin.protobuf.ByteString                                            |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `visitTypeInsn(int, String)`                                                  | org.jetbrains.org.objectweb.asm.tree.MethodNode                                     |
|  -10.1% | -1.51 MB |   2.1% → 1.9% |   15 MB → 13.5 MB |   29 → 24 | `copyOfRangeByte(byte[], int, int)`                                           | java.util.Arrays                                                                    |
|  -18.3% | -1.06 MB |   0.8% → 0.7% | 5.77 MB → 4.71 MB |    10 → 9 | `<init>(int)`                                                                 | java.lang.AbstractStringBuilder                                                     |
|  -66.7% | -1.05 MB |   0.2% → 0.1% |  1.57 MB → 523 kB |     3 → 1 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt                            |
| removed | -1.05 MB |   0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `<init>(PersistentHashMap)`                                                   | kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder |
| removed | -1.05 MB |   0.1% → 0.0% |     1.05 MB → 0 B |     1 → 0 | `iterator()`                                                                  | kotlin.sequences.FilteringSequence                                                  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |            % |              Size |   Samples | Function                                                                          | Location                                                                                                                         |
| -------: | -------: | -----------: | ----------------: | --------: | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
|      new |  +184 MB | 0.0% → 25.7% |      0 B → 184 MB |   0 → 236 | `invokeStatic(Object, Object)`                                                    | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                                                                               |
|      new |  +184 MB | 0.0% → 25.6% |      0 B → 184 MB |   0 → 235 | `invoke(Object, Object, Object)`                                                  | java.lang.invoke.LambdaForm$MH.0x0000007001010000                                                                                |
|  +175.7% | +82.7 MB | 6.6% → 18.1% |  47.1 MB → 130 MB | 115 → 125 | `<init>(int)`                                                                     | java.io.ByteArrayOutputStream                                                                                                    |
|      new | +61.5 MB |  0.0% → 8.6% |     0 B → 61.5 MB |     0 → 1 | `generateClassFile()`                                                             | java.lang.reflect.ProxyGenerator                                                                                                 |
|      new | +61.5 MB |  0.0% → 8.6% |     0 B → 61.5 MB |     0 → 1 | `generateProxyClass(ClassLoader, String, List, int)`                              | java.lang.reflect.ProxyGenerator                                                                                                 |
|      new | +61.5 MB |  0.0% → 8.6% |     0 B → 61.5 MB |     0 → 1 | `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)`                    | java.lang.reflect.Proxy$ProxyBuilder                                                                                             |
|      new | +61.5 MB |  0.0% → 8.6% |     0 B → 61.5 MB |     0 → 1 | `build()`                                                                         | java.lang.reflect.Proxy$ProxyBuilder                                                                                             |
|      new | +61.5 MB |  0.0% → 8.6% |     0 B → 61.5 MB |     0 → 1 | `apply(Object, Object)`                                                           | java.lang.reflect.Proxy$$Lambda.0x000000700107c650                                                                               |
| +2329.2% | +60.9 MB |  0.4% → 8.9% | 2.61 MB → 63.5 MB |     5 → 4 | `enlarge(int)`                                                                    | jdk.internal.org.objectweb.asm.ByteVector                                                                                        |
| +5000.2% | +60.8 MB |  0.2% → 8.6% |   1.22 MB → 62 MB |     3 → 2 | `declaredAnnotations()`                                                           | java.lang.reflect.Field                                                                                                          |
| +5000.2% | +60.8 MB |  0.2% → 8.6% |   1.22 MB → 62 MB |     3 → 2 | `getAnnotation(Class)`                                                            | java.lang.reflect.Field                                                                                                          |
| +2309.2% | +60.4 MB |  0.4% → 8.8% |   2.61 MB → 63 MB |     5 → 3 | `putUTF8(String)`                                                                 | jdk.internal.org.objectweb.asm.ByteVector                                                                                        |
| +2863.2% | +59.9 MB |  0.3% → 8.7% |   2.09 MB → 62 MB |     4 → 2 | `addConstantUtf8Reference(int, String)`                                           | jdk.internal.org.objectweb.asm.SymbolTable                                                                                       |
| +2863.2% | +59.9 MB |  0.3% → 8.7% |   2.09 MB → 62 MB |     4 → 2 | `addConstantClass(String)`                                                        | jdk.internal.org.objectweb.asm.SymbolTable                                                                                       |
| +2838.2% | +59.4 MB |  0.3% → 8.6% | 2.09 MB → 61.5 MB |     4 → 1 | `visit(int, int, String, String, String, String[])`                               | jdk.internal.org.objectweb.asm.ClassWriter                                                                                       |
| +1236.1% | +58.7 MB |  0.7% → 8.9% | 4.75 MB → 63.5 MB |    10 → 4 | `addConstantUtf8(String)`                                                         | jdk.internal.org.objectweb.asm.SymbolTable                                                                                       |
|      new | +22.2 MB |  0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | jdk.jfr.events.ActiveRecordingEvent                                                                                              |
|      new | +22.2 MB |  0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `writeMetaEvents()`                                                               | jdk.jfr.internal.PlatformRecorder                                                                                                |
|      new | +20.3 MB |  0.0% → 2.8% |     0 B → 20.3 MB |    0 → 38 | `invoke()`                                                                        | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d9170          |
|      new | +15.7 MB |  0.0% → 2.2% |     0 B → 15.7 MB |    0 → 30 | `invoke()`                                                                        | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x00000070016d9618 |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |            Size |   Samples | Function                                      | Location                                                                                                                |
| ------: | -------: | ------------: | --------------: | --------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |  -199 MB |  27.8% → 0.0% |    199 MB → 0 B |   254 → 0 | `invokeStatic(Object, Object)`                | java.lang.invoke.LambdaForm$DMH.0x000000b801001c00                                                                      |
| removed |  -196 MB |  27.3% → 0.0% |    196 MB → 0 B |   248 → 0 | `invoke(Object, Object, Object)`              | java.lang.invoke.LambdaForm$MH.0x000000b801010000                                                                       |
|  -54.5% |  -138 MB | 35.2% → 16.0% | 253 MB → 115 MB | 103 → 100 | `toByteArray()`                               | java.io.ByteArrayOutputStream                                                                                           |
|  -51.9% |  -136 MB | 36.4% → 17.5% | 261 MB → 125 MB | 118 → 120 | `copyOf(byte[], int)`                         | java.util.Arrays                                                                                                        |
| removed | -66.2 MB |   9.2% → 0.0% |   66.2 MB → 0 B |     2 → 0 | `singletonIterator(Object)`                   | java.util.Collections                                                                                                   |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `iterator()`                                  | java.util.Collections$SingletonList                                                                                     |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `proxyClassContext(ClassLoader, List, Set)`   | java.lang.reflect.Proxy$ProxyBuilder                                                                                    |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `<init>(ClassLoader, List)`                   | java.lang.reflect.Proxy$ProxyBuilder                                                                                    |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `<init>(ClassLoader, Class)`                  | java.lang.reflect.Proxy$ProxyBuilder                                                                                    |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `apply(Object, Object)`                       | java.lang.reflect.Proxy$$Lambda.0x000000b80107c650                                                                      |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `createAnnotationData(int)`                   | java.lang.Class                                                                                                         |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `annotationData()`                            | java.lang.Class                                                                                                         |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `getDeclaredAnnotation(Class)`                | java.lang.Class                                                                                                         |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `getIndirectlyPresent(Map, Class)`            | sun.reflect.annotation.AnnotationSupport                                                                                |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `getDirectlyAndIndirectlyPresent(Map, Class)` | sun.reflect.annotation.AnnotationSupport                                                                                |
| removed | -65.6 MB |   9.2% → 0.0% |   65.6 MB → 0 B |     1 → 0 | `getAnnotationsByType(Class)`                 | java.lang.reflect.Field                                                                                                 |
| removed |   -23 MB |   3.2% → 0.0% |     23 MB → 0 B |    41 → 0 | `invoke()`                                    | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b801673a10 |
| removed | -22.3 MB |   3.1% → 0.0% |   22.3 MB → 0 B |     1 → 0 | `commit()`                                    | jdk.jfr.events.InitialSecurityPropertyEvent                                                                             |
| removed | -22.3 MB |   3.1% → 0.0% |   22.3 MB → 0 B |     1 → 0 | `emitInitialSecurityProperties()`             | jdk.jfr.internal.instrument.JDKEvents                                                                                   |
| removed | -22.3 MB |   3.1% → 0.0% |   22.3 MB → 0 B |     1 → 0 | `run()`                                       | jdk.jfr.internal.instrument.JDKEvents$$Lambda.0x000000b801075930                                                        |


# Lock contention profile diff

Blocked 517.1ms → 515.6ms (-1.5ms, -0.3%) over 3 samples → 2 samples (172.4ms → 257.8ms per sample).

| Category | Change |  Delta |      % |              Time | Samples |
| -------- | -----: | -----: | -----: | ----------------: | ------: |
| ours     |  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 |

## Hottest functions

### Self time

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |  Delta |      % |              Time | Samples | Function              | Location                 |
| -----: | -----: | -----: | ----------------: | ------: | --------------------- | ------------------------ |
|  -0.3% | -1.5ms | 100.0% | 517.1ms → 515.6ms |   3 → 2 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Progressions

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
