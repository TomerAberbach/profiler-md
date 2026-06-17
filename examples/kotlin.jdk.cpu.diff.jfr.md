# Sampling profile diff

122 samples → 113 samples (-9 samples, -7.4%).

| Category | Change | Delta |      % |   Samples |
| -------- | -----: | ----: | -----: | --------: |
| ours     |  -7.4% |    -9 | 100.0% | 122 → 113 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

| Change | Delta |           % | Samples | Function                                                                                                          | Location                                                                                             |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `parsePostfixExpression()`                                                                                        | org.jetbrains.kotlin.parsing.KotlinExpressionParsing                                                 |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `allocateInstance(Object)`                                                                                        | java.lang.invoke.DirectMethodHandle                                                                  |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `runTasks()`                                                                                                      | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                                                         | org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitFunctionCall(FirFunctionCall, CheckerContext)`                                                              | org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `loadCallableSpecificExperimentalities(CheckerContext, FirCallableSymbol, Set, boolean, SmartSet)`                | org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker                       |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitBlock(FirBlock, CheckerContext)`                                                                            | org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `convertFunctionContent(IrFunction, FirFunction, FirClass)`                                                       | org.jetbrains.kotlin.fir.backend.generators.ClassMemberGenerator                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `applyArgumentsWithReorderingIfNeeded(IrMemberAccessExpression, CallAndReferenceGenerator$ReceiverInfo, FirCall)` | org.jetbrains.kotlin.fir.backend.generators.CallAndReferenceGenerator                                |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitLocalVariable(FirProperty)`                                                                                 | org.jetbrains.kotlin.fir.backend.Fir2IrVisitor                                                       |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `preprocessNodeBeforeInline(MethodNode, Map)`                                                                     | org.jetbrains.kotlin.codegen.inline.MethodInliner                                                    |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                     | org.jetbrains.kotlin.codegen.inline.MethodInliner                                                    |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)`                                                  | org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer                                        |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `list0(File)`                                                                                                     | java.io.UnixFileSystem                                                                               |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `generateStaticInitializer()`                                                                                     | java.lang.reflect.ProxyGenerator                                                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `fromString(String, boolean)`                                                                                     | kotlin.reflect.jvm.internal.impl.name.ClassId$Companion                                              |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `mark()`                                                                                                          | org.jetbrains.kotlin.parsing.AbstractKotlinParsing                                                   |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `firValueParameter_delegate$lambda$0(ValueParameter)`                                                             | org.jetbrains.kotlin.fir.lightTree.fir.ValueParameter                                                |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `stringsToBytes(String[])`                                                                                        | org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt                                      |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `requiredToSave(FirResolvedTypeRef)`                                                                              | org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                                                                                                                                                                                                        | Location                                                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `extractArgumentsTypeRefAndSource(FirTypeRef)`                                                                                                                                                                                  | org.jetbrains.kotlin.fir.analysis.checkers.FirHelpersKt                     |
| removed |    -2 |   1.6% → 0.0% |   2 → 0 | `getNode(Object)`                                                                                                                                                                                                               | java.util.HashMap                                                           |
|   -3.1% |    -1 | 26.2% → 27.4% | 32 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                                                                                                                                   | java.util.zip.Inflater                                                      |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `initCEN(int, ZipCoder)`                                                                                                                                                                                                        | java.util.zip.ZipFile$Source                                                |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `forName0(String, boolean, ClassLoader, Class)`                                                                                                                                                                                 | java.lang.Class                                                             |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<init>(FastJarFileSystem, String)`                                                                                                                                                                                             | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler                  |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                                                                                                 | java.lang.ClassLoader                                                       |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `sort(Object[], int, int, Comparator, Object[], int, int)`                                                                                                                                                                      | java.util.TimSort                                                           |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `at(IElementType)`                                                                                                                                                                                                              | org.jetbrains.kotlin.parsing.AbstractKotlinParsing                          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `access$2602(PsiBuilderImpl$StartMarker, PsiBuilderImpl$ProductionMarker)`                                                                                                                                                      | com.intellij.lang.impl.PsiBuilderImpl$StartMarker                           |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `indexOf(PsiBuilderImpl$ProductionMarker)`                                                                                                                                                                                      | com.intellij.lang.impl.MarkerProduction                                     |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<init>(FirDeserializationContext)`                                                                                                                                                                                             | org.jetbrains.kotlin.fir.deserialization.FirContractDeserializer            |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<init>(KtSourceElement, FirPropertyAccessExpression, ConeKotlinType, List, FqName, FqName, FirClassLikeSymbol, FirResolvedQualifier, boolean, ConeKotlinType, boolean, boolean, boolean, List, FirResolvedSymbolOrigin, List)` | org.jetbrains.kotlin.fir.expressions.impl.FirResolvedQualifierImpl          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)`                                                                                            | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                      |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `enqueueResolveTasksForNoReceiver(CallInfo)`                                                                                                                                                                                    | org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension |
|  -50.0% |    -1 |   1.6% → 0.9% |   2 → 1 | `allocateInstance(Class)`                                                                                                                                                                                                       | jdk.internal.misc.Unsafe                                                    |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `shouldBeFlexible(TypeVariableMarker)`                                                                                                                                                                                          | org.jetbrains.kotlin.fir.resolve.inference.ConeConstraintSystemUtilContext  |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                               | org.jetbrains.kotlin.metadata.ProtoBuf$Property                             |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<init>()`                                                                                                                                                                                                                      | org.jetbrains.kotlin.fir.FirElementWithResolveState                         |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `indexOf(byte[], byte[])`                                                                                                                                                                                                       | java.lang.StringLatin1                                                      |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                                                    | Location                                                                                                                |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|     new |   +36 | 0.0% → 31.9% |  0 → 36 | `invokeStatic(Object, Object)`                                                                              | java.lang.invoke.LambdaForm$DMH.0x000000a001001c00                                                                      |
|     new |   +36 | 0.0% → 31.9% |  0 → 36 | `invoke(Object, Object, Object)`                                                                            | java.lang.invoke.LambdaForm$MH.0x000000a001010000                                                                       |
|  +75.0% |    +6 | 6.6% → 12.4% |  8 → 14 | `visitElement(FirElement, Object)`                                                                          | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
|  +55.6% |    +5 | 7.4% → 12.4% |  9 → 14 | `generateMethod(IrFunction, SourceMapper)`                                                                  | org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen                                                                   |
|     new |    +5 |  0.0% → 4.4% |   0 → 5 | `invoke()`                                                                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a001671dc8 |
|     new |    +5 |  0.0% → 4.4% |   0 → 5 | `invoke()`                                                                                                  | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000a0016d95c0 |
|  +40.0% |    +4 | 8.2% → 12.4% | 10 → 14 | `visitElement(FirElement, Void)`                                                                            | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
|  +44.4% |    +4 | 7.4% → 11.5% |  9 → 13 | `visitBlock(FirBlock, Void)`                                                                                | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
|  +44.4% |    +4 | 7.4% → 11.5% |  9 → 13 | `visitBlock(FirBlock, Object)`                                                                              | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
| +400.0% |    +4 |  0.8% → 4.4% |   1 → 5 | `accept(MethodVisitor)`                                                                                     | org.jetbrains.org.objectweb.asm.tree.MethodNode                                                                         |
|     new |    +4 |  0.0% → 3.5% |   0 → 4 | `invoke()`                                                                                                  | org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x000000a0015ebd20                              |
|     new |    +4 |  0.0% → 3.5% |   0 → 4 | `compute()`                                                                                                 | org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x000000a0015ea2a8                            |
|     new |    +4 |  0.0% → 3.5% |   0 → 4 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | org.jetbrains.kotlin.types.AbstractTypeChecker                                                                          |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `findKotlinClassOrContent(ClassId, MetadataVersion)`                                                        | org.jetbrains.kotlin.load.kotlin.VirtualFileFinder                                                                      |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `computePackagePartInfo(FqName, String)`                                                                    | org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider                                           |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `computePackagePartsInfos(FqName)`                                                                          | org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider                                           |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `tryComputePackagePartInfos(FqName)`                                                                        | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                          |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)`                          | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider                                          |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `invoke(Object, Void)`                                                                                      | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2           |
| +150.0% |    +3 |  1.6% → 4.4% |   2 → 5 | `invoke(Object, Object)`                                                                                    | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2           |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                                                                      | Location                                                                                                                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |   -44 |  36.1% → 0.0% |  44 → 0 | `invokeStatic(Object, Object)`                                                                                                                | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                                                                      |
| removed |   -43 |  35.2% → 0.0% |  43 → 0 | `invoke(Object, Object, Object)`                                                                                                              | java.lang.invoke.LambdaForm$MH.0x0000007001010000                                                                       |
|  -19.6% |    -9 | 37.7% → 32.7% | 46 → 37 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                                                    |
|  -20.0% |    -9 | 36.9% → 31.9% | 45 → 36 | `main(String[])`                                                                                                                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                              |
|  -20.9% |    -9 | 35.2% → 30.1% | 43 → 34 | `invokeImpl(Object, Object[])`                                                                                                                | jdk.internal.reflect.DirectMethodHandleAccessor                                                                         |
| removed |    -9 |   7.4% → 0.0% |   9 → 0 | `invoke()`                                                                                                                                    | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d9170 |
|  -19.0% |    -8 | 34.4% → 30.1% | 42 → 34 | `invoke(Object, Object[])`                                                                                                                    | jdk.internal.reflect.DirectMethodHandleAccessor                                                                         |
|  -19.0% |    -8 | 34.4% → 30.1% | 42 → 34 | `invoke(Object, Object[])`                                                                                                                    | java.lang.reflect.Method                                                                                                |
|  -17.8% |    -8 | 36.9% → 32.7% | 45 → 37 | `doMain(CLICompiler, String[])`                                                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|  -18.2% |    -8 | 36.1% → 31.9% | 44 → 36 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase                                                                   |
|  -19.5% |    -8 | 33.6% → 29.2% | 41 → 33 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|  -10.0% |    -7 | 57.4% → 55.8% | 70 → 63 | `run(String[])`                                                                                                                               | org.jetbrains.kotlin.preloading.Preloader                                                                               |
|  -16.3% |    -7 | 35.2% → 31.9% | 43 → 36 | `invokeExact_MT(Object, Object, Object, Object)`                                                                                              | java.lang.invoke.Invokers$Holder                                                                                        |
|  -15.9% |    -7 | 36.1% → 32.7% | 44 → 37 | `phaseBody(LoggingContext, Object)`                                                                                                           | org.jetbrains.kotlin.cli.pipeline.PipelinePhase                                                                         |
|  -16.3% |    -7 | 35.2% → 31.9% | 43 → 36 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | org.jetbrains.kotlin.backend.common.phaser.CompositePhase                                                               |
|  -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                                                                      |
|  -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|  -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|  -16.7% |    -7 | 34.4% → 31.0% | 42 → 35 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |
|  -17.1% |    -7 | 33.6% → 30.1% | 41 → 34 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline                                                                   |


# Allocated heap profile diff

Allocated 717 MB (-250 kB, -0.0%) over 874 samples → 869 samples (820 kB → 825 kB per sample).

| Category | Change |   Delta |      % |            Size |   Samples |
| -------- | -----: | ------: | -----: | --------------: | --------: |
| ours     |  -0.0% | -250 kB | 100.0% |          717 MB | 864 → 861 |
| stdlib   |  -0.8% |  -240 B |   0.0% | 30 kB → 29.8 kB |    10 → 8 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |             % |              Size |  Samples | Function                                                                                   | Location                                                                                         |
| -------: | -------: | ------------: | ----------------: | -------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  +148.5% |  +156 MB | 14.6% → 36.3% |   105 MB → 260 MB | 98 → 107 | `copyOf(byte[], int)`                                                                      | java.util.Arrays                                                                                 |
| +4733.9% | +60.9 MB |   0.2% → 8.7% | 1.29 MB → 62.2 MB |    5 → 2 | `newNode(int, Object, Object, HashMap$Node)`                                               | java.util.HashMap                                                                                |
|  +971.2% | +20.2 MB |   0.3% → 3.1% | 2.08 MB → 22.3 MB |    5 → 2 | `<init>(InputStream, Inflater, int)`                                                       | java.util.zip.InflaterInputStream                                                                |
|   +91.7% | +5.54 MB |   0.8% → 1.6% | 6.05 MB → 11.6 MB |  16 → 29 | `clone()`                                                                                  | java.lang.Object                                                                                 |
|  +135.4% | +4.82 MB |   0.5% → 1.2% | 3.56 MB → 8.37 MB |   7 → 15 | `box-impl(List)`                                                                           | org.jetbrains.kotlin.fir.MutableOrEmptyList                                                      |
|  +350.0% | +3.66 MB |   0.1% → 0.7% | 1.05 MB → 4.71 MB |    2 → 9 | `<init>()`                                                                                 | org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage                      |
|   +22.3% | +3.14 MB |   2.0% → 2.4% | 14.1 MB → 17.2 MB |  27 → 33 | `<init>(int)`                                                                              | org.jetbrains.kotlin.protobuf.ByteString$Output                                                  |
|  +166.7% | +2.62 MB |   0.2% → 0.6% | 1.57 MB → 4.19 MB |    3 → 7 | `to(Object, Object)`                                                                       | kotlin.TuplesKt                                                                                  |
|  +250.0% | +2.62 MB |   0.1% → 0.5% | 1.05 MB → 3.66 MB |    2 → 7 | `copyOfRange(byte[], int, int)`                                                            | java.util.Arrays                                                                                 |
|  +200.0% | +2.09 MB |   0.1% → 0.4% | 1.05 MB → 3.14 MB |    2 → 6 | `<init>()`                                                                                 | org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache                                        |
|   +36.2% | +2.09 MB |   0.8% → 1.1% | 5.79 MB → 7.88 MB |  12 → 16 | `newInstance(OutputStream, int)`                                                           | org.jetbrains.kotlin.protobuf.CodedOutputStream                                                  |
|  +400.0% | +2.09 MB |   0.1% → 0.4% |  523 kB → 2.62 MB |    1 → 5 | `iterator()`                                                                               | org.jetbrains.kotlin.utils.SmartList                                                             |
|  +133.3% | +2.09 MB |   0.2% → 0.5% | 1.57 MB → 3.66 MB |    3 → 7 | `<init>(int)`                                                                              | kotlin.collections.builders.MapBuilder                                                           |
|      new | +1.57 MB |   0.0% → 0.2% |     0 B → 1.57 MB |    0 → 3 | `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` | org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer |
|      new | +1.57 MB |   0.0% → 0.2% |     0 B → 1.57 MB |    0 → 3 | `getLabel()`                                                                               | org.jetbrains.org.objectweb.asm.tree.LabelNode                                                   |
|   +60.0% | +1.57 MB |   0.4% → 0.6% | 2.62 MB → 4.19 MB |    5 → 8 | `newOutput()`                                                                              | org.jetbrains.kotlin.protobuf.ByteString                                                         |
|   +51.8% | +1.08 MB |   0.3% → 0.4% | 2.09 MB → 3.17 MB |    3 → 6 | `allocateUninitializedArray(Class, int)`                                                   | jdk.internal.misc.Unsafe                                                                         |
|   +45.9% | +1.05 MB |   0.3% → 0.5% | 2.28 MB → 3.33 MB |    4 → 5 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`      | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt                                  |
|  +200.0% | +1.05 MB |   0.1% → 0.2% |  523 kB → 1.57 MB |    1 → 2 | `descriptorString()`                                                                       | java.lang.Class                                                                                  |
|  +200.0% | +1.05 MB |   0.1% → 0.2% |  523 kB → 1.57 MB |    1 → 3 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)`      | org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt                                            |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |   Samples | Function                                                  | Location                                                                     |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -76.8% |  -151 MB | 27.5% → 6.4% |  197 MB → 45.7 MB | 116 → 113 | `<init>(int)`                                             | java.io.ByteArrayOutputStream                                                |
| removed | -64.5 MB |  9.0% → 0.0% |     64.5 MB → 0 B |     1 → 0 | `list0(File)`                                             | java.io.UnixFileSystem                                                       |
| removed | -22.3 MB |  3.1% → 0.0% |     22.3 MB → 0 B |     1 → 0 | `initTable()`                                             | java.util.concurrent.ConcurrentHashMap                                       |
|  -36.1% | -2.67 MB |  1.0% → 0.7% | 7.37 MB → 4.71 MB |    13 → 9 | `<init>(int)`                                             | java.lang.AbstractStringBuilder                                              |
|  -63.1% | -2.64 MB |  0.6% → 0.2% | 4.19 MB → 1.55 MB |     9 → 3 | `newString(byte[], int, int)`                             | java.lang.StringLatin1                                                       |
| removed | -2.62 MB |  0.4% → 0.0% |     2.62 MB → 0 B |     4 → 0 | `<init>(String)`                                          | org.jetbrains.kotlin.name.FqName                                             |
|  -71.4% | -2.62 MB |  0.5% → 0.1% | 3.66 MB → 1.05 MB |     6 → 2 | `arrayOfUninitializedElements(int)`                       | kotlin.collections.builders.ListBuilderKt                                    |
| removed | -2.62 MB |  0.4% → 0.0% |     2.62 MB → 0 B |     5 → 0 | `toArray()`                                               | org.jetbrains.org.objectweb.asm.tree.InsnList                                |
|  -29.6% | -2.42 MB |  1.1% → 0.8% | 8.18 MB → 5.76 MB |   16 → 11 | `<init>(int, int)`                                        | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                          |
|  -50.0% | -2.09 MB |  0.6% → 0.3% | 4.19 MB → 2.09 MB |     8 → 4 | `toString()`                                              | java.lang.StringBuilder                                                      |
|  -80.5% | -1.68 MB |  0.3% → 0.1% |  2.09 MB → 408 kB |     5 → 1 | `loadAllClassesFromJars(Collection, int, ClassHandler)`   | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                         |
|  -75.0% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 523 kB |     4 → 1 | `sequencedKeySet()`                                       | java.util.LinkedHashMap                                                      |
|  -37.5% | -1.57 MB |  0.6% → 0.4% | 4.19 MB → 2.62 MB |     8 → 5 | `allocateInstance(Object)`                                | java.lang.invoke.DirectMethodHandle                                          |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `unmodifiableList(List)`                                  | java.util.Collections                                                        |
|  -60.0% | -1.57 MB |  0.4% → 0.1% | 2.62 MB → 1.05 MB |     5 → 2 | `identifier(String)`                                      | org.jetbrains.kotlin.name.Name                                               |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     2 → 0 | `addConstantMemberReference(int, String, String, String)` | jdk.internal.org.objectweb.asm.SymbolTable                                   |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`           | org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer          |
|  -75.1% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 520 kB |     4 → 1 | `getBytes(int, int)`                                      | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping |
| removed | -1.46 MB |  0.2% → 0.0% |     1.46 MB → 0 B |     2 → 0 | `newFieldSet()`                                           | org.jetbrains.kotlin.protobuf.FieldSet                                       |
|  -57.1% | -1.32 MB |  0.3% → 0.1% |  2.31 MB → 992 kB |     5 → 3 | `createZipEntry(String)`                                  | java.util.zip.ZipInputStream                                                 |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |    Delta |             % |              Size |   Samples | Function                                                                             | Location                                                              |
| -------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
|      new |  +191 MB |  0.0% → 26.6% |      0 B → 191 MB |   0 → 252 | `invokeStatic(Object, Object)`                                                       | java.lang.invoke.LambdaForm$DMH.0x000000a001001c00                    |
|      new |  +189 MB |  0.0% → 26.4% |      0 B → 189 MB |   0 → 249 | `invoke(Object, Object, Object)`                                                     | java.lang.invoke.LambdaForm$MH.0x000000a001010000                     |
|  +144.5% |  +160 MB | 15.5% → 37.8% |   111 MB → 271 MB | 114 → 134 | `copyOf(byte[], int)`                                                                | java.util.Arrays                                                      |
|  +151.7% |  +158 MB | 14.5% → 36.5% |   104 MB → 262 MB | 101 → 113 | `toByteArray()`                                                                      | java.io.ByteArrayOutputStream                                         |
|   +48.8% | +66.5 MB | 19.0% → 28.3% |   136 MB → 203 MB | 264 → 274 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                 |
|   +48.3% | +66.5 MB | 19.2% → 28.5% |   138 MB → 204 MB | 267 → 277 | `exec(PrintStream, MessageRenderer, String[])`                                       | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|   +46.7% | +65.5 MB | 19.6% → 28.7% |   140 MB → 206 MB | 272 → 281 | `exec(PrintStream, Services, MessageRenderer, String[])`                             | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|      new | +62.1 MB |   0.0% → 8.7% |     0 B → 62.1 MB |     0 → 2 | `parseMemberValue(Class, ByteBuffer, ConstantPool, Class)`                           | sun.reflect.annotation.AnnotationParser                               |
|      new | +61.7 MB |   0.0% → 8.6% |     0 B → 61.7 MB |     0 → 1 | `enumConstantDirectory()`                                                            | java.lang.Class                                                       |
|      new | +61.7 MB |   0.0% → 8.6% |     0 B → 61.7 MB |     0 → 1 | `valueOf(Class, String)`                                                             | java.lang.Enum                                                        |
|      new | +61.7 MB |   0.0% → 8.6% |     0 B → 61.7 MB |     0 → 1 | `parseEnumValue(Class, ByteBuffer, ConstantPool, Class)`                             | sun.reflect.annotation.AnnotationParser                               |
| +5873.1% | +61.4 MB |   0.1% → 8.7% | 1.05 MB → 62.4 MB |     2 → 3 | `declaredAnnotations()`                                                              | java.lang.reflect.Field                                               |
| +5873.1% | +61.4 MB |   0.1% → 8.7% | 1.05 MB → 62.4 MB |     2 → 3 | `getAnnotation(Class)`                                                               | java.lang.reflect.Field                                               |
| +3494.8% | +61.2 MB |   0.2% → 8.8% | 1.75 MB → 62.9 MB |         4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`    | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
| +3494.8% | +61.2 MB |   0.2% → 8.8% | 1.75 MB → 62.9 MB |         4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                      | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
| +3494.8% | +61.2 MB |   0.2% → 8.8% | 1.75 MB → 62.9 MB |         4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
| +4733.9% | +60.9 MB |   0.2% → 8.7% | 1.29 MB → 62.2 MB |     5 → 2 | `newNode(int, Object, Object, HashMap$Node)`                                         | java.util.HashMap                                                     |
| +3886.3% | +60.9 MB |   0.2% → 8.7% | 1.57 MB → 62.4 MB |         3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                            | sun.reflect.annotation.AnnotationParser                               |
| +3886.3% | +60.9 MB |   0.2% → 8.7% | 1.57 MB → 62.4 MB |         3 | `parseAnnotations(byte[], ConstantPool, Class)`                                      | sun.reflect.annotation.AnnotationParser                               |
| +3466.4% | +60.7 MB |   0.2% → 8.7% | 1.75 MB → 62.4 MB |     4 → 3 | `getArgumentsInfo(Class)`                                                            | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |            % |             Size |   Samples | Function                          | Location                                                          |
| ------: | -------: | -----------: | ---------------: | --------: | --------------------------------- | ----------------------------------------------------------------- |
| removed |  -188 MB | 26.2% → 0.0% |     188 MB → 0 B |   238 → 0 | `invokeStatic(Object, Object)`    | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                |
| removed |  -185 MB | 25.8% → 0.0% |     185 MB → 0 B |   233 → 0 | `invoke(Object, Object, Object)`  | java.lang.invoke.LambdaForm$MH.0x0000007001010000                 |
|  -76.8% |  -151 MB | 27.5% → 6.4% | 197 MB → 45.7 MB | 116 → 113 | `<init>(int)`                     | java.io.ByteArrayOutputStream                                     |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `list0(File)`                     | java.io.UnixFileSystem                                            |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `list(File)`                      | java.io.UnixFileSystem                                            |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `normalizedList()`                | java.io.File                                                      |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`       | java.io.File                                                      |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `cleanup()`                       | org.fusesource.jansi.internal.JansiLoader                         |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `initialize()`                    | org.fusesource.jansi.internal.JansiLoader                         |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `<clinit>()`                      | org.fusesource.jansi.internal.CLibrary                            |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `<clinit>()`                      | org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `<clinit>()`                      | org.jetbrains.kotlin.cli.common.messages.MessageRenderer          |
| removed | -64.5 MB |  9.0% → 0.0% |    64.5 MB → 0 B |     1 → 0 | `defaultMessageRenderer()`        | org.jetbrains.kotlin.cli.common.CLICompiler$Companion             |
| removed | -22.8 MB |  3.2% → 0.0% |    22.8 MB → 0 B |     2 → 0 | `putVal(Object, Object, boolean)` | java.util.concurrent.ConcurrentHashMap                            |
| removed | -22.8 MB |  3.2% → 0.0% |    22.8 MB → 0 B |     2 → 0 | `put(Object, Object)`             | java.util.concurrent.ConcurrentHashMap                            |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `initTable()`                     | java.util.concurrent.ConcurrentHashMap                            |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `storeString(String)`             | jdk.jfr.internal.StringPool                                       |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `addString(String)`               | jdk.jfr.internal.StringPool                                       |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `putString(String)`               | jdk.jfr.internal.event.EventWriter                                |
| removed | -22.3 MB |  3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `commit()`                        | jdk.jfr.events.InitialSecurityPropertyEvent                       |


# Lock contention profile diff

Blocked 510.6ms → 492.7ms (-17.9ms, -3.5%) over 3 samples → 2 samples (170.2ms → 246.4ms per sample).

| Category | Change |   Delta |      % |              Time | Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------: |
| ours     |  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 |

## Hottest functions

### Self time

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |   Delta |      % |              Time | Samples | Function              | Location                 |
| -----: | ------: | -----: | ----------------: | ------: | --------------------- | ------------------------ |
|  -3.5% | -17.9ms | 100.0% | 510.6ms → 492.7ms |   3 → 2 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Progressions

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
