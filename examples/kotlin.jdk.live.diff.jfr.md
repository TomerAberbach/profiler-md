# Sampling profile diff

117 samples → 120 samples (+3 samples, +2.6%).

| Category | Change | Delta |      % |   Samples |
| -------- | -----: | ----: | -----: | --------: |
| ours     |  +2.6% |    +3 | 100.0% | 117 → 120 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                                                                                                                                     | Location                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
|  +13.3% |    +4 | 25.6% → 28.3% | 30 → 34 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                                                                | java.util.zip.Inflater                                                            |
| +100.0% |    +2 |   1.7% → 3.3% |   2 → 4 | `throwParameterIsNullNPE(String)`                                                                                                                            | kotlin.jvm.internal.Intrinsics                                                    |
|     new |    +2 |   0.0% → 1.7% |   0 → 2 | `advance()`                                                                                                                                                  | org.jetbrains.kotlin.lexer._JetLexer                                              |
| +100.0% |    +1 |   0.9% → 1.7% |   1 → 2 | `readUtfNonAscii(int, int, int, char[])`                                                                                                                     | org.jetbrains.org.objectweb.asm.ClassReader                                       |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `getClassLikeSymbolByClassId(ClassId)`                                                                                                                       | org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `resolvePlainArgumentType(Candidate, ConeResolutionAtom, ConeKotlinType, ConeKotlinType, CheckerSink, ResolutionContext, boolean, boolean, KtSourceElement)` | org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor           |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `incorporate(ConstraintIncorporator$Context, TypeVariableMarker, Constraint)`                                                                                | org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintIncorporator    |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)`                       | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask                  |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                                                                         | org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl                     |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitStatement(FirStatement, Object)`                                                                                                                       | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                               |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                                                                         | org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl                            |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, Object)`                                                                                                           | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor   |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `generate()`                                                                                                                                                 | org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen                             |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                    | org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen                          |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                                                                | org.jetbrains.kotlin.codegen.inline.MethodInliner                                 |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `visitMethodInsn(int, String, String, String, boolean)`                                                                                                      | jdk.internal.org.objectweb.asm.MethodWriter                                       |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                              | java.lang.ClassLoader                                                             |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `getProperty(String)`                                                                                                                                        | java.util.Properties                                                              |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `read(VirtualFile, KotlinCliJavaFileManager, GlobalSearchScope)`                                                                                             | org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion                 |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `order(ByteOrder)`                                                                                                                                           | java.nio.ByteBuffer                                                               |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                            | Location                                                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `resize()`                                                          | java.util.HashMap                                                                      |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `initCEN(int, ZipCoder)`                                            | java.util.zip.ZipFile$Source                                                           |
|  -12.5% |    -1 | 6.8% → 5.8% |   8 → 7 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | jdk.internal.loader.NativeLibraries                                                    |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `putFieldInfo(ByteVector)`                                          | jdk.internal.org.objectweb.asm.FieldWriter                                             |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `checkAccess(byte, Class, MemberName)`                              | java.lang.invoke.MethodHandles$Lookup                                                  |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `encodePath(String, boolean)`                                       | sun.net.www.ParseUtil                                                                  |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `newInvokeSpecial(Object, Object)`                                  | java.lang.invoke.DirectMethodHandle$Holder                                             |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `flushLastBuffer()`                                                 | org.jetbrains.kotlin.protobuf.ByteString$Output                                        |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `build()`                                                           | org.jetbrains.kotlin.fir.expressions.builder.FirPropertyAccessExpressionBuilder        |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `parseFunction(boolean)`                                            | org.jetbrains.kotlin.parsing.KotlinParsing                                             |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                              | com.intellij.lang.impl.PsiBuilderImpl                                                  |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `isAtLabelDefinitionOrMissingIdentifier()`                          | org.jetbrains.kotlin.parsing.KotlinExpressionParsing                                   |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `readUtf(int, int, char[])`                                         | org.jetbrains.org.objectweb.asm.ClassReader                                            |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `getValue(Object, Object)`                                          | org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache                                   |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `<init>(boolean)`                                                   | java.util.zip.Inflater                                                                 |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `build()`                                                           | org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder                  |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `getOwnDeprecation(LanguageVersionSettings)`                        | org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol                               |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `invoke(Object, Object, Object, Object)`                            | org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x000000f0016bb598         |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `replaceLambdaArgumentEffects(FirFunctionCall, FirSession)`         | org.jetbrains.kotlin.fir.resolve.transformers.LambdaArgumentEffectsTransformerKt       |
| removed |    -1 | 0.9% → 0.0% |   1 → 0 | `invokeSuspend(Object)`                                             | org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1 |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % | Samples | Function                                                                                                                                      | Location                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|    new |   +45 |  0.0% → 37.5% |  0 → 45 | `invokeStatic(Object, Object)`                                                                                                                | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00        |
|    new |   +42 |  0.0% → 35.0% |  0 → 42 | `invoke(Object, Object, Object)`                                                                                                              | java.lang.invoke.LambdaForm$MH.0x0000007001010000         |
| +41.4% |   +12 | 24.8% → 34.2% | 29 → 41 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | org.jetbrains.kotlin.cli.common.CLICompiler               |
| +41.4% |   +12 | 24.8% → 34.2% | 29 → 41 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | org.jetbrains.kotlin.cli.common.CLICompiler               |
| +37.9% |   +11 | 24.8% → 33.3% | 29 → 40 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | org.jetbrains.kotlin.cli.common.CLICompiler$Companion     |
| +29.7% |   +11 | 31.6% → 40.0% | 37 → 48 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase     |
| +27.0% |   +10 | 31.6% → 39.2% | 37 → 47 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | org.jetbrains.kotlin.cli.common.CLICompiler$Companion     |
| +29.4% |   +10 | 29.1% → 36.7% | 34 → 44 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline     |
| +29.4% |   +10 | 29.1% → 36.7% | 34 → 44 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline     |
| +28.6% |   +10 | 29.9% → 37.5% | 35 → 45 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt        |
| +28.6% |   +10 | 29.9% → 37.5% | 35 → 45 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline     |
| +24.3% |    +9 | 31.6% → 38.3% | 37 → 46 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion      |
| +24.3% |    +9 | 31.6% → 38.3% | 37 → 46 | `doMain(CLICompiler, String[])`                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion     |
| +26.5% |    +9 | 29.1% → 35.8% | 34 → 43 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline     |
| +28.1% |    +9 | 27.4% → 34.2% | 32 → 41 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler               |
| +25.0% |    +9 | 30.8% → 37.5% | 36 → 45 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.backend.common.phaser.CompositePhase |
| +12.3% |    +8 | 55.6% → 60.8% | 65 → 73 | `run(String[])`                                                                                                                               | org.jetbrains.kotlin.preloading.Preloader                 |
| +21.6% |    +8 | 31.6% → 37.5% | 37 → 45 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                |
| +23.5% |    +8 | 29.1% → 35.0% | 34 → 42 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                |
| +23.5% |    +8 | 29.1% → 35.0% | 34 → 42 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                                                               | Location                                                                                                                |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |   -37 |  31.6% → 0.0% |  37 → 0 | `invokeStatic(Object, Object)`                                                                                                         | java.lang.invoke.LambdaForm$DMH.0x000000f001001c00                                                                      |
| removed |   -37 |  31.6% → 0.0% |  37 → 0 | `invoke(Object, Object, Object)`                                                                                                       | java.lang.invoke.LambdaForm$MH.0x000000f001010000                                                                       |
| removed |   -10 |   8.5% → 0.0% |  10 → 0 | `invoke()`                                                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016a5000 |
| removed |    -9 |   7.7% → 0.0% |   9 → 0 | `invoke()`                                                                                                                             | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x000000f0016a7c80               |
| removed |    -9 |   7.7% → 0.0% |   9 → 0 | `invoke()`                                                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016d9170 |
|  -70.0% |    -7 |   8.5% → 2.5% |  10 → 3 | `transformBody(FirTransformer, Object)`                                                                                                | org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl                                                     |
|  -36.8% |    -7 | 16.2% → 10.0% | 19 → 12 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)`                                                                       | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  -70.0% |    -7 |   8.5% → 2.5% |  10 → 3 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)`                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  -70.0% |    -7 |   8.5% → 2.5% |  10 → 3 | `withAnonymousFunction(FirAnonymousFunction, SessionAndScopeSessionHolder, Function0)`                                                 | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext                                           |
| removed |    -7 |   6.0% → 0.0% |   7 → 0 | `analyzeInternal(ConePostponedResolvedAtom, boolean, CollectionLiteralBounds)`                                                         | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$$Lambda.0x000000f0016a3228                                  |
|  -66.7% |    -6 |   7.7% → 2.5% |   9 → 3 | `transformAnonymousFunctionBody(FirAnonymousFunction, FirTypeRef)`                                                                     | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  -66.7% |    -6 |   7.7% → 2.5% |   9 → 3 | `doTransformAnonymousFunctionBodyFromCallCompletion$org_jetbrains_kotlin_resolve(FirAnonymousFunctionExpression, FirResolvedTypeRef)`  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer                            |
|  -66.7% |    -6 |   7.7% → 2.5% |   9 → 3 | `analyzeAndGetLambdaReturnArguments$lambda$5$2(FirDeclarationsResolveTransformer, FirAnonymousFunctionExpression, FirResolvedTypeRef)` | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl                                          |
|  -66.7% |    -6 |   7.7% → 2.5% |   9 → 3 | `runLambdaCompletion(Candidate, boolean, Function0)`                                                                                   | org.jetbrains.kotlin.fir.resolve.inference.FirInferenceSession                                                          |
| removed |    -6 |   5.1% → 0.0% |   6 → 0 | `invoke(Object)`                                                                                                                       | org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter$$Lambda.0x000000f0016a6748                         |
| removed |    -6 |   5.1% → 0.0% |   6 → 0 | `invoke()`                                                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f001673a10 |
|  -23.8% |    -5 | 17.9% → 13.3% | 21 → 16 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                      | org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt                                                                |
|  -23.8% |    -5 | 17.9% → 13.3% | 21 → 16 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)`                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer                             |
|  -23.8% |    -5 | 17.9% → 13.3% | 21 → 16 | `transformBlock(FirBlock, ResolutionMode)`                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer                             |
|  -23.8% |    -5 | 17.9% → 13.3% | 21 → 16 | `transformBlock(FirBlock, ResolutionMode)`                                                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher                  |


# Allocated heap profile diff

Allocated 717 MB (-260 kB, -0.0%) over 865 samples → 872 samples (829 kB → 822 kB per sample).

| Category | Change |   Delta |      % |   Size |   Samples |
| -------- | -----: | ------: | -----: | -----: | --------: |
| ours     |  -0.0% | -260 kB | 100.0% | 717 MB | 856 → 862 |
| stdlib   |  +0.1% |   +40 B |   0.0% |  30 kB |    9 → 10 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |            % |              Size | Samples | Function                                                | Location                                                                             |
| -------: | -------: | -----------: | ----------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| +6980.6% |  +145 MB | 0.3% → 20.5% |  2.07 MB → 147 MB |   6 → 5 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                 |
|      new | +59.5 MB |  0.0% → 8.3% |     0 B → 59.5 MB |   0 → 1 | `<clinit>()`                                            | org.jetbrains.kotlin.config.LanguageFeature                                          |
|  +321.3% | +3.36 MB |  0.1% → 0.6% | 1.05 MB → 4.41 MB |   2 → 9 | `allocateInstance(Class)`                               | jdk.internal.misc.Unsafe                                                             |
|   +31.3% | +3.28 MB |  1.5% → 1.9% | 10.5 MB → 13.8 MB | 21 → 26 | `copyOfRangeByte(byte[], int, int)`                     | java.util.Arrays                                                                     |
|  +300.0% | +3.14 MB |  0.1% → 0.6% | 1.05 MB → 4.19 MB |   2 → 8 | `arrayOfUninitializedElements(int)`                     | kotlin.collections.builders.ListBuilderKt                                            |
|   +59.7% | +2.15 MB |  0.5% → 0.8% |  3.6 MB → 5.76 MB |  7 → 11 | `newNode(int, Object, Object, HashMap$Node)`            | java.util.LinkedHashMap                                                              |
|      new | +1.98 MB |  0.0% → 0.3% |     0 B → 1.98 MB |   0 → 3 | `createScope(IrSymbolOwner)`                            | org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext              |
|  +151.2% | +1.58 MB |  0.1% → 0.4% | 1.05 MB → 2.63 MB |   2 → 5 | `compress(char[], int, int)`                            | java.lang.StringUTF16                                                                |
|      new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |   0 → 3 | `listIterator(int)`                                     | kotlin.collections.builders.ListBuilder                                              |
|      new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |   0 → 2 | `<init>()`                                              | org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationBuilder                    |
|  +300.0% | +1.57 MB |  0.1% → 0.3% |  523 kB → 2.09 MB |   1 → 4 | `singletonList(Object)`                                 | java.util.Collections                                                                |
|   +42.9% | +1.57 MB |  0.5% → 0.7% | 3.66 MB → 5.23 MB |   7 → 9 | `<init>()`                                              | org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage          |
|   +33.3% | +1.57 MB |  0.7% → 0.9% | 4.71 MB → 6.28 MB |  9 → 12 | `newOutput()`                                           | org.jetbrains.kotlin.protobuf.ByteString                                             |
|  +300.0% | +1.57 MB |  0.1% → 0.3% |  523 kB → 2.09 MB |   1 → 4 | `iterator()`                                            | java.util.LinkedHashMap$LinkedKeySet                                                 |
|   +49.4% | +1.55 MB |  0.4% → 0.7% | 3.14 MB → 4.69 MB |   6 → 8 | `allocateUninitializedArray(Class, int)`                | jdk.internal.misc.Unsafe                                                             |
|  +147.2% | +1.54 MB |  0.1% → 0.4% | 1.05 MB → 2.59 MB |   2 → 5 | `getTypeInternal(String, int, int)`                     | org.jetbrains.org.objectweb.asm.Type                                                 |
|      new | +1.53 MB |  0.0% → 0.2% |     0 B → 1.53 MB |   0 → 3 | `<init>(MethodNode, boolean)`                           | org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer         |
|  +101.4% |  +1.1 MB |  0.2% → 0.3% | 1.09 MB → 2.19 MB |   2 → 4 | `readUtf(int, int, char[])`                             | org.jetbrains.org.objectweb.asm.ClassReader                                          |
|   +50.1% | +1.05 MB |  0.3% → 0.4% | 2.09 MB → 3.14 MB |   4 → 5 | `toArray()`                                             | org.jetbrains.org.objectweb.asm.tree.InsnList                                        |
|  +200.0% | +1.05 MB |  0.1% → 0.2% |  523 kB → 1.57 MB |   1 → 3 | `considerType(CheckerContext, ConeKotlinType, Set)`     | org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                                    | Location                                                         |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -73.6% |  -134 MB |  25.4% → 6.7% |  182 MB → 48.1 MB | 109 → 114 | `copyOf(byte[], int)`                                                                       | java.util.Arrays                                                 |
| removed | -65.3 MB |   9.1% → 0.0% |     65.3 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                                                                 | java.io.File                                                     |
|  -30.9% |  -2.1 MB |   0.9% → 0.7% |   6.8 MB → 4.7 MB |    11 → 8 | `newString(byte[], int, int)`                                                               | java.lang.StringLatin1                                           |
|  -44.5% |  -2.1 MB |   0.7% → 0.4% | 4.71 MB → 2.61 MB |     8 → 4 | `<init>(int)`                                                                               | java.util.ArrayList                                              |
|   -1.6% |    -2 MB | 17.0% → 16.8% |   122 MB → 120 MB | 113 → 111 | `<init>(int)`                                                                               | java.io.ByteArrayOutputStream                                    |
|  -27.9% | -1.82 MB |   0.9% → 0.7% | 6.53 MB → 4.71 MB |    12 → 9 | `resize()`                                                                                  | java.util.HashMap                                                |
|  -37.5% | -1.57 MB |   0.6% → 0.4% | 4.19 MB → 2.62 MB |     8 → 5 | `box-impl(List)`                                                                            | org.jetbrains.kotlin.fir.MutableOrEmptyList                      |
|  -60.0% | -1.57 MB |   0.4% → 0.1% | 2.62 MB → 1.05 MB |     5 → 2 | `stringFromByteBuffer(ByteBuffer, int)`                                                     | jdk.internal.jimage.ImageStringsReader                           |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `<init>()`                                                                                  | org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `<init>(Object, Object)`                                                                    | org.jetbrains.kotlin.util.WeakPair                               |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `create()`                                                                                  | org.jetbrains.kotlin.utils.SmartSet$Companion                    |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `iterator()`                                                                                | org.jetbrains.org.objectweb.asm.tree.analysis.SmallSet           |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `iterator()`                                                                                | kotlin.sequences.FilteringSequence                               |
|  -75.0% | -1.57 MB |   0.3% → 0.1% |  2.09 MB → 523 kB |     4 → 1 | `copyOfRange(byte[], int, int)`                                                             | java.util.Arrays                                                 |
| removed | -1.57 MB |   0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `newString(byte[], long)`                                                                   | java.lang.StringConcatHelper                                     |
|  -74.9% | -1.57 MB |   0.3% → 0.1% |  2.09 MB → 524 kB |     4 → 2 | `<init>(ClassWriter)`                                                                       | jdk.internal.org.objectweb.asm.SymbolTable                       |
|  -62.7% | -1.44 MB |   0.3% → 0.1% |  2.29 MB → 855 kB |     6 → 4 | `createZipEntry(String)`                                                                    | java.util.zip.ZipInputStream                                     |
| removed | -1.26 MB |   0.2% → 0.0% |     1.26 MB → 0 B |     3 → 0 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt  |
| removed | -1.17 MB |   0.2% → 0.0% |     1.17 MB → 0 B |     3 → 0 | `iterator()`                                                                                | org.jetbrains.kotlin.utils.SmartList                             |
|  -23.2% | -1.11 MB |   0.7% → 0.5% | 4.78 MB → 3.67 MB |    10 → 7 | `<init>(int)`                                                                               | java.lang.AbstractStringBuilder                                  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |    Delta |             % |              Size |   Samples | Function                                                                             | Location                                                              |
| --------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
|       new |  +181 MB |  0.0% → 25.3% |      0 B → 181 MB |   0 → 237 | `invokeStatic(Object, Object)`                                                       | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                    |
|       new |  +179 MB |  0.0% → 25.0% |      0 B → 179 MB |   0 → 231 | `invoke(Object, Object, Object)`                                                     | java.lang.invoke.LambdaForm$MH.0x0000007001010000                     |
|    +50.3% | +68.9 MB | 19.1% → 28.7% |   137 MB → 206 MB | 262 → 281 | `exec(PrintStream, MessageRenderer, String[])`                                       | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|    +49.4% | +68.4 MB | 19.3% → 28.9% |   139 MB → 207 MB | 265 → 283 | `exec(PrintStream, Services, MessageRenderer, String[])`                             | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|    +49.5% | +66.8 MB | 18.8% → 28.1% |   135 MB → 202 MB | 258 → 273 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                 |
|       new | +60.1 MB |   0.0% → 8.4% |     0 B → 60.1 MB |     0 → 2 | `parseEnumValue(Class, ByteBuffer, ConstantPool, Class)`                             | sun.reflect.annotation.AnnotationParser                               |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `<clinit>()`                                                                         | org.jetbrains.kotlin.config.LanguageFeature                           |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `ensureClassInitialized0(Class)`                                                     | jdk.internal.misc.Unsafe                                              |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `ensureClassInitialized(Class)`                                                      | jdk.internal.misc.Unsafe                                              |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `ensureClassInitialized(Class)`                                                      | jdk.internal.reflect.MethodHandleAccessorFactory                      |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `getEnumConstantsShared()`                                                           | java.lang.Class                                                       |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `enumConstantDirectory()`                                                            | java.lang.Class                                                       |
|       new | +59.5 MB |   0.0% → 8.3% |     0 B → 59.5 MB |     0 → 1 | `valueOf(Class, String)`                                                             | java.lang.Enum                                                        |
| +11379.5% | +59.5 MB |   0.1% → 8.4% |  523 kB → 60.1 MB |     1 → 2 | `declaredAnnotations()`                                                              | java.lang.reflect.Field                                               |
| +11379.5% | +59.5 MB |   0.1% → 8.4% |  523 kB → 60.1 MB |     1 → 2 | `getAnnotation(Class)`                                                               | java.lang.reflect.Field                                               |
| +11378.3% | +59.5 MB |   0.1% → 8.4% |  523 kB → 60.1 MB |     1 → 2 | `parseMemberValue(Class, ByteBuffer, ConstantPool, Class)`                           | sun.reflect.annotation.AnnotationParser                               |
|  +3748.9% | +58.8 MB |   0.2% → 8.4% | 1.57 MB → 60.4 MB |         3 | `getArgumentsInfo(Class)`                                                            | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +3748.9% | +58.8 MB |   0.2% → 8.4% | 1.57 MB → 60.4 MB |         3 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`    | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +3748.9% | +58.8 MB |   0.2% → 8.4% | 1.57 MB → 60.4 MB |         3 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                      | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +3748.9% | +58.8 MB |   0.2% → 8.4% | 1.57 MB → 60.4 MB |         3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |            % |             Size |   Samples | Function                                                               | Location                                                                                                                |
| ------: | -------: | -----------: | ---------------: | --------: | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |  -189 MB | 26.3% → 0.0% |     189 MB → 0 B |   236 → 0 | `invokeStatic(Object, Object)`                                         | java.lang.invoke.LambdaForm$DMH.0x000000f001001c00                                                                      |
| removed |  -187 MB | 26.1% → 0.0% |     187 MB → 0 B |   233 → 0 | `invoke(Object, Object, Object)`                                       | java.lang.invoke.LambdaForm$MH.0x000000f001010000                                                                       |
|  -75.3% |  -134 MB | 24.9% → 6.2% | 178 MB → 44.1 MB | 107 → 113 | `toByteArray()`                                                        | java.io.ByteArrayOutputStream                                                                                           |
|  -71.0% |  -134 MB | 26.3% → 7.6% | 188 MB → 54.5 MB | 125 → 133 | `copyOf(byte[], int)`                                                  | java.util.Arrays                                                                                                        |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                                            | java.io.File                                                                                                            |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `cleanup()`                                                            | org.fusesource.jansi.internal.JansiLoader                                                                               |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `initialize()`                                                         | org.fusesource.jansi.internal.JansiLoader                                                                               |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `<clinit>()`                                                           | org.fusesource.jansi.internal.CLibrary                                                                                  |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `<clinit>()`                                                           | org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer                                                       |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `<clinit>()`                                                           | org.jetbrains.kotlin.cli.common.messages.MessageRenderer                                                                |
| removed | -65.3 MB |  9.1% → 0.0% |    65.3 MB → 0 B |     1 → 0 | `defaultMessageRenderer()`                                             | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `commit()`                                                             | jdk.jfr.events.InitialSecurityPropertyEvent                                                                             |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `emitInitialSecurityProperties()`                                      | jdk.jfr.internal.instrument.JDKEvents                                                                                   |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `run()`                                                                | jdk.jfr.internal.instrument.JDKEvents$$Lambda.0x000000f001075930                                                        |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `execute(long, PeriodicType)`                                          | jdk.jfr.internal.periodic.JDKEventTask                                                                                  |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `run(long, PeriodicType)`                                              | jdk.jfr.internal.periodic.PeriodicTask                                                                                  |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `doChunkBegin(boolean)`                                                | jdk.jfr.internal.periodic.PeriodicEvents                                                                                |
| removed | -21.8 MB |  3.0% → 0.0% |    21.8 MB → 0 B |    43 → 0 | `invoke()`                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f0016d9170 |
| removed |   -17 MB |  2.4% → 0.0% |      17 MB → 0 B |    33 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | java.lang.invoke.LambdaForm$DMH.0x000000f001234000                                                                      |
| removed | -15.3 MB |  2.1% → 0.0% |    15.3 MB → 0 B |    29 → 0 | `invoke()`                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f001673a10 |


# Lock contention profile diff

Blocked 84.2ms → 534.5ms (+450.3ms, +534.5%) over 1 sample → 3 samples (84.2ms → 178.2ms per sample).

| Category |  Change |    Delta |      % |             Time | Samples |
| -------- | ------: | -------: | -----: | ---------------: | ------: |
| ours     | +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

|  Change |    Delta |      % |             Time | Samples | Function              | Location                 |
| ------: | -------: | -----: | ---------------: | ------: | --------------------- | ------------------------ |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

|  Change |    Delta |      % |             Time | Samples | Function                    | Location                                                              |
| ------: | -------: | -----: | ---------------: | ------: | --------------------------- | --------------------------------------------------------------------- |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `park(boolean, long)`       | jdk.internal.misc.Unsafe                                              |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `parkNanos(Object, long)`   | java.util.concurrent.locks.LockSupport                                |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `await(long, TimeUnit)`     | java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `await(long)`               | java.lang.ref.ReferenceQueue                                          |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `remove0(long)`             | java.lang.ref.ReferenceQueue                                          |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `remove(long)`              | java.lang.ref.ReferenceQueue                                          |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `run()`                     | jdk.internal.ref.CleanerImpl                                          |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `runWith(Object, Runnable)` | java.lang.Thread                                                      |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `run()`                     | java.lang.Thread                                                      |
| +534.5% | +450.3ms | 100.0% | 84.2ms → 534.5ms |   1 → 3 | `run()`                     | jdk.internal.misc.InnocuousThread                                     |
