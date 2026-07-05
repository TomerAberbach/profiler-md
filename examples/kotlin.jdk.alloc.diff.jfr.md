# Sampling profile diff

133 samples → 106 samples (-27 samples, -20.3%).

| Category | Change | Delta |             % | Samples |
| -------- | -----: | ----: | ------------: | ------: |
| ours     | -26.3% |   -20 | 57.1% → 52.8% | 76 → 56 |
| stdlib   | -12.3% |    -7 | 42.9% → 47.2% | 57 → 50 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                               | Location                                                                        |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `checkNotNullParameter(Object, String)`                                                                                                                                                | kotlin.jvm.internal.Intrinsics                                                  |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `parametersCount(TypeSystemContext, TypeConstructorMarker)`                                                                                                                            | org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt                  |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `fullyExpandedType(ConeClassLikeType, FirSession, Function1)`                                                                                                                          | org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt                           |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)`                                                                                                     | org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt                           |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                      | org.jetbrains.kotlin.metadata.ProtoBuf$Property                                 |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                                                                                                   | org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList               |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                                                                                          | org.jetbrains.kotlin.codegen.inline.MethodInliner                               |
| +100.0% |    +1 | 0.8% → 1.9% |   1 → 2 | `analyze(String, MethodNode)`                                                                                                                                                          | org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer   |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `writeGenericArguments$lambda$1(JvmSignatureWriter, Function3, int, KotlinTypeMarker, Variance, Variance, TypeMappingMode)`                                                            | org.jetbrains.kotlin.codegen.state.KotlinTypeMapper$Companion                   |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(FastJarFileSystem, String)`                                                                                                                                                    | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler                      |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `getContextReceiverTypeCount()`                                                                                                                                                        | org.jetbrains.kotlin.metadata.ProtoBuf$Property                                 |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>()`                                                                                                                                                                             | org.jetbrains.kotlin.fir.builder.FirFunctionTypeParameterBuilder                |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `take(Object[], int)`                                                                                                                                                                  | kotlin.collections.ArraysKt___ArraysKt                                          |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(KtSourceElement, List, FirTarget, FirExpression, DefaultConstructorMarker)`                                                                                                    | org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl               |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>()`                                                                                                                                                                             | org.jetbrains.kotlin.fir.expressions.builder.FirFunctionCallBuilder             |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, Name, FirTypeParameterSymbol, FirBasedSymbol, Variance, boolean, List, List)` | org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl                 |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `stringsToBytes(String[])`                                                                                                                                                             | org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt                 |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `getOptionalAnnotationClassNamesByPackage()`                                                                                                                                           | org.jetbrains.kotlin.fir.java.deserialization.OptionalAnnotationClassesProvider |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `getEmptyRoot()`                                                                                                                                                                       | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup$Companion               |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `safeSubstitute(TypeSubstitutorMarker, KotlinTypeMarker)`                                                                                                                              | org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl      |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                     | Location                                                                                |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| removed |    -2 | 1.5% → 0.0% |   2 → 0 | `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)`                                                                                    | org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer |
| removed |    -2 | 1.5% → 0.0% |   2 → 0 | `execute(AbstractInsnNode, Interpreter)`                                                                                                                                     | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `isInitialized()`                                                                                                                                                            | org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable                                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                                                                                                                                       | com.intellij.lang.impl.PsiBuilderImpl                                                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `parseTypeRefContents(TokenSet, boolean)`                                                                                                                                    | org.jetbrains.kotlin.parsing.KotlinParsing                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `advance()`                                                                                                                                                                  | org.jetbrains.kotlin.lexer._JetLexer                                                    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `bind(FirTargetElement)`                                                                                                                                                     | org.jetbrains.kotlin.fir.FirAbstractTarget                                              |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `consume(ModifierList, LighterASTNode, boolean)`                                                                                                                             | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `searchClasses(ClassId, Set, Function2)`                                                                                                                                     | org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl                             |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `isVisible$default(FirVisibilityChecker, FirMemberDeclaration, FirSession, FirFile, List, FirExpression, boolean, FirRegularClass, boolean, SupertypeSupplier, int, Object)` | org.jetbrains.kotlin.fir.FirVisibilityChecker                                           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                            | org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter                                   |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `reduceCandidates(FirExpression, Collection, Set)`                                                                                                                           | org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver  |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)`                                       | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask                        |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `resumeWith(Object)`                                                                                                                                                         | kotlin.coroutines.jvm.internal.BaseContinuationImpl                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `hashCode()`                                                                                                                                                                 | org.jetbrains.kotlin.fir.resolve.dfa.SyntheticVariable                                  |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `getExpectedTypeWithSAMConversion(ResolutionContext, Candidate, FirExpression, ConeKotlinType)`                                                                              | org.jetbrains.kotlin.fir.resolve.calls.stages.CheckArgumentsKt                          |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `approximateTo(TypeApproximatorConfiguration, AbstractTypeApproximator$Cache, RigidTypeMarker, boolean, int)`                                                                | org.jetbrains.kotlin.types.AbstractTypeApproximator                                     |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `build()`                                                                                                                                                                    | org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder           |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `transformFunctionCall(FirFunctionCall, FirSession)`                                                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirArrayOfCallTransformer    |
| removed |    -1 | 0.8% → 0.0% |   1 → 0 | `transformBranches(FirTransformer, Object)`                                                                                                                                  | org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl                         |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                              | Location                                                                                               |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
|  +80.0% |    +4 |  3.8% → 8.5% |   5 → 9 | `visitWithCallOrAssignment(FirStatement)`                                             | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                        |
| +100.0% |    +4 |  3.0% → 7.5% |   4 → 8 | `visitFunctionCall(FirFunctionCall, Void)`                                            | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                        |
| +100.0% |    +4 |  3.0% → 7.5% |   4 → 8 | `visitFunctionCall(FirFunctionCall, Object)`                                          | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                        |
|     new |    +4 |  0.0% → 3.8% |   0 → 4 | `preprocessNodeBeforeInline(MethodNode, Map)`                                         | org.jetbrains.kotlin.codegen.inline.MethodInliner                                                      |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `convertFunctionDeclaration(LighterASTNode)`                                          | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder                         |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)`                 | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder                         |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `buildFirFile(FlyweightCapableTreeStructure, KtSourceFile, KtSourceFileLinesMapping)` | org.jetbrains.kotlin.fir.lightTree.LightTree2Fir                                                       |
|  +42.9% |    +3 |  5.3% → 9.4% |  7 → 10 | `getValue(Object, Object)`                                                            | org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache                                                   |
| +300.0% |    +3 |  0.8% → 3.8% |   1 → 4 | `transformArguments(FirTransformer, Object)`                                          | org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl                                          |
| +300.0% |    +3 |  0.8% → 3.8% |   1 → 4 | `transformChildren(FirTransformer, Object)`                                           | org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl                                          |
| +300.0% |    +3 |  0.8% → 3.8% |   1 → 4 | `transformElement(FirElement, Object)`                                                | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher |
|  +30.0% |    +3 | 7.5% → 12.3% | 10 → 13 | `accept(FirVisitor, Object)`                                                          | org.jetbrains.kotlin.fir.expressions.FirBlock                                                          |
|  +30.0% |    +3 | 7.5% → 12.3% | 10 → 13 | `visitStatement(FirStatement, Object)`                                                | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                    |
|  +30.0% |    +3 | 7.5% → 12.3% | 10 → 13 | `visitExpression(FirExpression, Object)`                                              | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                    |
|  +33.3% |    +3 | 6.8% → 11.3% |  9 → 12 | `visitElement(FirElement, Void)`                                                      | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                        |
| +100.0% |    +3 |  2.3% → 5.7% |   3 → 6 | `acceptChildren(FirVisitor, Object)`                                                  | org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl                                          |
|  +60.0% |    +3 |  3.8% → 7.5% |   5 → 8 | `accept(FirVisitor, Object)`                                                          | org.jetbrains.kotlin.fir.expressions.FirFunctionCall                                                   |
|  +42.9% |    +3 |  5.3% → 9.4% |  7 → 10 | `acceptChildren(FirVisitor, Object)`                                                  | org.jetbrains.kotlin.fir.expressions.impl.FirBlockImpl                                                 |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `visitJump(FirJump, Object)`                                                          | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                    |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `visitReturnExpression(FirReturnExpression, Object)`                                  | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                    |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |             % | Samples | Function                                                                                           | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -23.0% |   -17 | 55.6% → 53.8% | 74 → 57 | `run(String[])`                                                                                    | org.jetbrains.kotlin.preloading.Preloader                |
| -23.0% |   -17 | 55.6% → 53.8% | 74 → 57 | `main(String[])`                                                                                   | org.jetbrains.kotlin.preloading.Preloader                |
| -25.9% |   -14 | 40.6% → 37.7% | 54 → 40 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion     |
| -31.1% |   -14 | 33.8% → 29.2% | 45 → 31 | `invoke(Object, Object[])`                                                                         | java.lang.reflect.Method                                 |
| -25.9% |   -14 | 40.6% → 37.7% | 54 → 40 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion    |
| -25.9% |   -14 | 40.6% → 37.7% | 54 → 40 | `doMain(CLICompiler, String[])`                                                                    | org.jetbrains.kotlin.cli.common.CLICompiler$Companion    |
| -24.5% |   -13 | 39.8% → 37.7% | 53 → 40 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler               |
| -26.5% |   -13 | 36.8% → 34.0% | 49 → 36 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | org.jetbrains.kotlin.cli.common.CLICompiler              |
| -26.5% |   -13 | 36.8% → 34.0% | 49 → 36 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | org.jetbrains.kotlin.cli.common.CLICompiler              |
| -27.7% |   -13 | 35.3% → 32.1% | 47 → 34 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | org.jetbrains.kotlin.cli.common.CLICompiler$Companion    |
| -25.0% |   -12 | 36.1% → 34.0% | 48 → 36 | `exec(PrintStream, MessageRenderer, String[])`                                                     | org.jetbrains.kotlin.cli.common.CLICompiler              |
| -23.5% |   -12 | 38.3% → 36.8% | 51 → 39 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                               | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt       |
| -52.2% |   -12 | 17.3% → 10.4% | 23 → 11 | `transform(FirTransformer, Object)`                                                                | org.jetbrains.kotlin.fir.expressions.FirFunctionCall     |
| -46.2% |   -12 | 19.5% → 13.2% | 26 → 14 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                  | org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt |
| -22.9% |   -11 | 36.1% → 34.9% | 48 → 37 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler               |
| -22.9% |   -11 | 36.1% → 34.9% | 48 → 37 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                             | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler               |
| -23.4% |   -11 | 35.3% → 34.0% | 47 → 36 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                    | org.jetbrains.kotlin.cli.common.CLICompiler              |
| -20.8% |   -11 | 39.8% → 39.6% | 53 → 42 | `phaseBody(PipelineContext, PipelineArtifact)`                                                     | org.jetbrains.kotlin.cli.pipeline.PipelinePhase          |
| -21.2% |   -11 | 39.1% → 38.7% | 52 → 41 | `phaseBody(LoggingContext, Object)`                                                                | org.jetbrains.kotlin.cli.pipeline.PipelinePhase          |
| -21.2% |   -11 | 39.1% → 38.7% | 52 → 41 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | org.jetbrains.kotlin.config.phaser.NamedCompilerPhase    |


# Allocated heap profile diff

Allocated 717 MB (+179 kB, ~0%) over 867 samples → 865 samples (827 kB → 829 kB per sample).

| Category | Change |    Delta |             % |              Size |   Samples |
| -------- | -----: | -------: | ------------: | ----------------: | --------: |
| stdlib   | -15.1% | -84.3 MB | 77.7% → 65.9% |   557 MB → 472 MB | 554 → 534 |
| ours     | +52.7% | +84.5 MB | 22.3% → 34.1% |   160 MB → 245 MB | 303 → 322 |
| native   |  -0.9% |   -256 B |         <0.1% | 29.6 kB → 29.3 kB |    10 → 9 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |    Delta |            % |              Size | Samples | Function                                                                                                                                                                                                         | Location                                                                                                         |
| --------: | -------: | -----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| +19200.8% |   +77 MB | 0.1% → 10.8% |  401 kB → 77.4 MB |   1 → 4 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                          | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                             |
|    +25.8% | +3.44 MB |  1.9% → 2.3% | 13.3 MB → 16.7 MB | 30 → 35 | `iterator()`                                                                                                                                                                                                     | java.util.ArrayList                                                                                              |
|    +40.0% | +2.09 MB |  0.7% → 1.0% | 5.23 MB → 7.33 MB | 10 → 14 | `newOutput()`                                                                                                                                                                                                    | org.jetbrains.kotlin.protobuf.ByteString                                                                         |
|   +400.0% | +2.09 MB |  0.1% → 0.4% |  523 kB → 2.62 MB |   1 → 5 | `requestGroup(TowerGroup, Continuation)`                                                                                                                                                                         | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager                                                 |
|       new | +2.09 MB |  0.0% → 0.3% |     0 B → 2.09 MB |   0 → 4 | `createScope(IrSymbolOwner)`                                                                                                                                                                                     | org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext                                          |
|   +330.0% | +1.61 MB |  0.1% → 0.3% |  487 kB → 2.09 MB |   1 → 4 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`                                                                                                                                                                  | org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer                                              |
|   +100.0% | +1.57 MB |  0.2% → 0.4% | 1.57 MB → 3.14 MB |   3 → 6 | `unmodifiableList(List)`                                                                                                                                                                                         | java.util.Collections                                                                                            |
|    +75.0% | +1.57 MB |  0.3% → 0.5% | 2.09 MB → 3.66 MB |   4 → 7 | `<init>()`                                                                                                                                                                                                       | org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage                                      |
|       new | +1.57 MB |  0.0% → 0.2% |     0 B → 1.57 MB |   0 → 3 | `addNewIncorporatedConstraint(TypeVariableMarker, KotlinTypeMarker, ConstraintContext)`                                                                                                                          | org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector |
|   +150.0% | +1.57 MB |  0.1% → 0.4% | 1.05 MB → 2.62 MB |   1 → 3 | `iterator()`                                                                                                                                                                                                     | java.util.LinkedHashMap$LinkedEntrySet                                                                           |
|    +71.4% | +1.49 MB |  0.3% → 0.5% | 2.09 MB → 3.59 MB |   4 → 7 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                      | org.jetbrains.kotlin.metadata.ProtoBuf$Type$1                                                                    |
|    +66.6% | +1.08 MB |  0.2% → 0.4% | 1.63 MB → 2.71 MB |   3 → 5 | `<init>(byte[], int, boolean)`                                                                                                                                                                                   | org.jetbrains.org.objectweb.asm.ClassReader                                                                      |
|    +50.0% | +1.05 MB |  0.3% → 0.4% | 2.09 MB → 3.14 MB |   4 → 6 | `ensureCapacity()`                                                                                                                                                                                               | com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure                                                            |
|       new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |   0 → 1 | `convertType(LighterASTNode)`                                                                                                                                                                                    | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder                                   |
|       new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `fromMethodNameAndDesc(String, String)`                                                                                                                                                                          | org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion                                                       |
|       new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `<init>(FirBasedSymbol, ConeResolutionAtom, ConeResolutionAtom, ExplicitReceiverKind, InferenceComponents$ConstraintSystemFactory, ConstraintStorage, CallInfo, FirScope, boolean, boolean, BodyResolveContext)` | org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate                                                       |
|       new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `notNull()`                                                                                                                                                                                                      | kotlin.properties.Delegates                                                                                      |
|       new | +1.05 MB |  0.0% → 0.1% |     0 B → 1.05 MB |   0 → 2 | `valueOf(int)`                                                                                                                                                                                                   | java.lang.Integer                                                                                                |
|    +66.7% | +1.05 MB |  0.2% → 0.4% | 1.57 MB → 2.62 MB |   3 → 5 | `<init>(String)`                                                                                                                                                                                                 | org.jetbrains.kotlin.name.FqName                                                                                 |
|    +50.0% | +1.05 MB |  0.3% → 0.4% | 2.09 MB → 3.14 MB |   4 → 6 | `toString()`                                                                                                                                                                                                     | java.lang.StringBuilder                                                                                          |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |   Samples | Function                                                                              | Location                                                                                         |
| ------: | -------: | -----------: | ----------------: | --------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -79.4% |  -151 MB | 26.6% → 5.5% |  191 MB → 39.3 MB | 106 → 102 | `<init>(int)`                                                                         | java.io.ByteArrayOutputStream                                                                    |
| removed | -66.4 MB |  9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                                                           | java.io.File                                                                                     |
|  -43.8% | -3.66 MB |  1.2% → 0.7% | 8.37 MB → 4.71 MB |    16 → 9 | `newInstance(OutputStream, int)`                                                      | org.jetbrains.kotlin.protobuf.CodedOutputStream                                                  |
|  -50.0% | -2.09 MB |  0.6% → 0.3% | 4.19 MB → 2.09 MB |     8 → 4 | `simplifyTrivialInstructions(MethodNode)`                                             | org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `iterator()`                                                                          | java.util.LinkedHashMap$LinkedValues                                                             |
|  -75.0% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 523 kB |     4 → 1 | `iterator()`                                                                          | org.jetbrains.kotlin.utils.SmartList                                                             |
|   -9.2% | -1.48 MB |  2.2% → 2.0% |   16 MB → 14.5 MB |   31 → 27 | `<init>(int)`                                                                         | org.jetbrains.kotlin.protobuf.ByteString$Output                                                  |
|  -53.4% |  -1.4 MB |  0.4% → 0.2% | 2.62 MB → 1.22 MB |     5 → 3 | `<init>()`                                                                            | org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache                                        |
| removed | -1.06 MB |  0.1% → 0.0% |     1.06 MB → 0 B |     2 → 0 | `visitEnd()`                                                                          | org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1                 |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)` | org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser              |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `hashCode()`                                                                          | org.jetbrains.kotlin.fir.resolve.dfa.RealVariable                                                |
|  -66.7% | -1.05 MB |  0.2% → 0.1% |  1.57 MB → 523 kB |     3 → 1 | `kindOf(TowerGroupKind)`                                                              | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerGroup                                          |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     1 → 0 | `getChild(KtSourceElement, Set, int, int, boolean)`                                   | org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt                                               |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `executeInvokeInsn(AbstractInsnNode, String, Interpreter)`                            | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                                              |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `coneFlexibleOrSimpleType(ConeTypeContext, ConeKotlinType, ConeKotlinType, boolean)`  | org.jetbrains.kotlin.fir.types.TypeUtilsKt                                                       |
|  -50.0% | -1.05 MB |  0.3% → 0.1% | 2.09 MB → 1.05 MB |     4 → 2 | `newFieldSet()`                                                                       | org.jetbrains.kotlin.protobuf.FieldSet                                                           |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     2 → 0 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)` | org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt                                            |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     1 → 0 | `<init>()`                                                                            | org.jetbrains.kotlin.fir.serialization.FirSerializerExtension                                    |
| removed | -1.05 MB |  0.1% → 0.0% |     1.05 MB → 0 B |     1 → 0 | `convertCallExpression(LighterASTNode)`                                               | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder                    |
|  -51.0% |  -954 kB |  0.3% → 0.1% |  1.87 MB → 915 kB |     3 → 2 | `compute()`                                                                           | org.jetbrains.kotlin.name.FqNameUnsafe                                                           |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |    Delta |             % |              Size |   Samples | Function                                                                                                                                                                                                                                                 | Location                                                                                                                |
| --------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|    +73.6% | +82.1 MB | 15.5% → 27.0% |   111 MB → 194 MB | 122 → 121 | `toByteArray()`                                                                                                                                                                                                                                          | java.io.ByteArrayOutputStream                                                                                           |
| +34391.7% |   +58 MB |  <0.1% → 8.1% |  169 kB → 58.2 MB |         1 | `getDeclaredFields()`                                                                                                                                                                                                                                    | java.lang.Class                                                                                                         |
|  +3696.1% | +57.7 MB |   0.2% → 8.3% | 1.56 MB → 59.2 MB |     4 → 3 | `getArgumentsInfo(Class)`                                                                                                                                                                                                                                | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt                                                   |
|  +2743.0% | +57.2 MB |   0.3% → 8.3% | 2.08 MB → 59.2 MB |     5 → 3 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`                                                                                                                                                                        | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt                                                   |
|  +2743.0% | +57.2 MB |   0.3% → 8.3% | 2.08 MB → 59.2 MB |     5 → 3 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                                                                                                                                                                                          | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt                                                   |
|  +2743.0% | +57.2 MB |   0.3% → 8.3% | 2.08 MB → 59.2 MB |     5 → 3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)`                                                                                                                                                                     | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt                                                   |
|    +39.8% |   +57 MB | 20.0% → 27.9% |   143 MB → 200 MB | 274 → 271 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                                                                                                                                 | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|    +40.4% | +56.5 MB | 19.5% → 27.4% |   140 MB → 196 MB | 267 → 263 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                                                                                                                                   | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|    +39.2% |   +56 MB | 19.9% → 27.7% |   143 MB → 199 MB | 273 → 268 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                                                                                                                           | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|   +404.7% | +10.6 MB |   0.4% → 1.8% | 2.62 MB → 13.2 MB |    4 → 23 | `invoke(Object)`                                                                                                                                                                                                                                         | org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000e0016911a8                            |
|   +109.5% | +9.17 MB |   1.2% → 2.4% | 8.37 MB → 17.5 MB |   16 → 35 | `invoke()`                                                                                                                                                                                                                                               | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e001671dc8 |
|     +2.9% | +8.97 MB | 42.6% → 43.9% |   306 MB → 314 MB |       237 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                  | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                    |
|     +2.9% | +8.97 MB | 42.6% → 43.9% |   306 MB → 314 MB |       237 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                             | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                    |
|    +24.0% | +8.68 MB |   5.0% → 6.2% | 36.1 MB → 44.8 MB |   68 → 84 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                                                                                                                                 | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                                                                  |
|    +19.5% | +8.68 MB |   6.2% → 7.4% | 44.5 MB → 53.2 MB |   83 → 99 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`                                                                                                                                  | org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver                                                           |
|    +27.2% | +8.25 MB |   4.2% → 5.4% | 30.3 MB → 38.5 MB |   59 → 71 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                                                                                                                         | org.jetbrains.kotlin.fir.pipeline.FirUtilsKt                                                                            |
|    +19.4% | +8.21 MB |   5.9% → 7.1% | 42.4 MB → 50.6 MB |   79 → 94 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                                                     | org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask                                                    |
|    +19.4% | +8.21 MB |   5.9% → 7.1% | 42.4 MB → 50.6 MB |   79 → 94 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                     | org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask                                                    |
|    +16.6% | +7.63 MB |   6.4% → 7.5% | 46.1 MB → 53.7 MB |  86 → 100 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                                                                  |
|    +16.6% | +7.63 MB |   6.4% → 7.5% | 46.1 MB → 53.7 MB |  86 → 100 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver                                                                  |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                                           | Location                                                                                                                |
| ------: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|  -79.4% |  -151 MB |  26.6% → 5.5% |  191 MB → 39.3 MB | 106 → 102 | `<init>(int)`                                                                                      | java.io.ByteArrayOutputStream                                                                                           |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                                                                        | java.io.File                                                                                                            |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `cleanup()`                                                                                        | org.fusesource.jansi.internal.JansiLoader                                                                               |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `initialize()`                                                                                     | org.fusesource.jansi.internal.JansiLoader                                                                               |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `<clinit>()`                                                                                       | org.fusesource.jansi.internal.CLibrary                                                                                  |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `<clinit>()`                                                                                       | org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer                                                       |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `<clinit>()`                                                                                       | org.jetbrains.kotlin.cli.common.messages.MessageRenderer                                                                |
| removed | -66.4 MB |   9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `defaultMessageRenderer()`                                                                         | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
| removed | -23.5 MB |   3.3% → 0.0% |     23.5 MB → 0 B |    44 → 0 | `invoke()`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d95c0 |
|   -4.7% | -23.3 MB | 69.9% → 66.6% |   501 MB → 478 MB | 443 → 437 | `main(String[])`                                                                                   | org.jetbrains.kotlin.preloading.Preloader                                                                               |
|  -87.9% | -22.9 MB |   3.6% → 0.4% |   26 MB → 3.14 MB |     8 → 6 | `loadClass(String)`                                                                                | java.lang.ClassLoader                                                                                                   |
|   -4.4% | -22.3 MB | 70.2% → 67.1% |   503 MB → 481 MB | 447 → 443 | `run(String[])`                                                                                    | org.jetbrains.kotlin.preloading.Preloader                                                                               |
|  -60.8% | -12.6 MB |   2.9% → 1.1% | 20.7 MB → 8.14 MB |   38 → 17 | `put(Object, Object)`                                                                              | java.util.HashMap                                                                                                       |
|   -5.8% | -11.7 MB | 27.9% → 26.3% |   200 MB → 188 MB | 256 → 248 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                              |
|   -4.8% | -9.87 MB | 28.5% → 27.1% |   204 MB → 194 MB | 265 → 259 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|  -19.1% | -9.78 MB |   7.1% → 5.8% | 51.1 MB → 41.3 MB |   94 → 79 | `transformElement(FirElement, Object)`                                                             | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer                             |
|   -4.8% | -9.65 MB | 28.1% → 26.8% |   202 MB → 192 MB | 260 → 255 | `doMain(CLICompiler, String[])`                                                                    | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|   -4.8% | -9.65 MB | 28.0% → 26.6% |   201 MB → 191 MB | 258 → 253 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                                                    |
|  -72.2% | -9.51 MB |   1.8% → 0.5% | 13.2 MB → 3.66 MB |    25 → 6 | `invoke(Object)`                                                                                   | org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000e0016913e0                            |
|   -5.2% | -9.41 MB | 25.1% → 23.8% |   180 MB → 171 MB | 218 → 214 | `invoke(Object, Object[])`                                                                         | java.lang.reflect.Method                                                                                                |


# Retained heap profile diff

Retained 19.3 MB → 19.5 MB (+157 kB, +0.8%) over 194 samples → 203 samples (99.6 kB → 95.9 kB per sample).

| Category | Change |    Delta |             % |              Size |   Samples |
| -------- | -----: | -------: | ------------: | ----------------: | --------: |
| stdlib   |  +0.2% | +43.4 kB | 94.0% → 93.4% |           18.2 MB | 180 → 185 |
| ours     |  +9.8% |  +113 kB |   6.0% → 6.6% | 1.16 MB → 1.28 MB |   14 → 18 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

| Change |    Delta |            % |              Size | Samples | Function                                                                                               | Location                                                         |
| -----: | -------: | -----------: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|    new | +59.1 kB |  0.0% → 0.3% |     0 B → 59.1 kB |   0 → 1 | `forceCapacity(int[], int, int)`                                                                       | it.unimi.dsi.fastutil.ints.IntArrays                             |
|  +5.1% |   +59 kB |  6.0% → 6.2% | 1.16 MB → 1.22 MB |   4 → 7 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                  | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt  |
|    new |   +136 B | 0.0% → <0.1% |       0 B → 136 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                            | org.jetbrains.kotlin.metadata.ProtoBuf$Property$1                |
|    new |   +112 B | 0.0% → <0.1% |       0 B → 112 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                            | org.jetbrains.kotlin.metadata.ProtoBuf$Function$1                |
|    new |   +112 B | 0.0% → <0.1% |       0 B → 112 B |   0 → 1 | `build()`                                                                                              | org.jetbrains.kotlin.fir.declarations.builder.FirPropertyBuilder |
|    new |    +88 B | 0.0% → <0.1% |        0 B → 88 B |   0 → 1 | `build()`                                                                                              | org.jetbrains.kotlin.fir.java.declarations.FirJavaMethodBuilder  |
|    new |    +80 B | 0.0% → <0.1% |        0 B → 80 B |   0 → 1 | `copy(CallKind, List, FirArgumentList, FirExpression, Name, ImplicitInvokeMode, Candidate, Candidate)` | org.jetbrains.kotlin.fir.resolve.calls.candidate.CallInfo        |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |    Delta |            % |          Size | Samples | Function                                                                                                                    | Location                                                              |
| ------: | -------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed | -4.45 kB | <0.1% → 0.0% | 4.45 kB → 0 B |   1 → 0 | `lambda$static$0(int)`                                                                                                      | com.intellij.psi.tree.IElementType                                    |
| removed |   -344 B | <0.1% → 0.0% |   344 B → 0 B |   1 → 0 | `<init>()`                                                                                                                  | org.jetbrains.kotlin.fir.analysis.CheckersComponent                   |
| removed |   -144 B | <0.1% → 0.0% |   144 B → 0 B |   1 → 0 | `createCandidate(CallInfo, FirBasedSymbol, ExplicitReceiverKind, FirScope, FirExpression, FirExpression, boolean, boolean)` | org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory     |
| removed |    -96 B | <0.1% → 0.0% |    96 B → 0 B |   1 → 0 | `build()`                                                                                                                   | org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder |
| removed |    -32 B | <0.1% → 0.0% |    32 B → 0 B |   1 → 0 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)`                                       | org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt                 |
| removed |    -24 B | <0.1% → 0.0% |    24 B → 0 B |   1 → 0 | `lazy(Function0)`                                                                                                           | kotlin.LazyKt__LazyJVMKt                                              |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |    Delta |           % |          Size | Samples | Function                                                                                              | Location                                           |
| -----: | -------: | ----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `forceCapacity(int[], int, int)`                                                                      | it.unimi.dsi.fastutil.ints.IntArrays               |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `grow(int)`                                                                                           | it.unimi.dsi.fastutil.ints.IntArrayList            |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `add(int)`                                                                                            | it.unimi.dsi.fastutil.ints.IntArrayList            |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `addMarker(PsiBuilderImpl$ProductionMarker)`                                                          | com.intellij.lang.impl.MarkerProduction            |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `mark()`                                                                                              | com.intellij.lang.impl.PsiBuilderImpl              |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `mark()`                                                                                              | com.intellij.lang.impl.PsiBuilderAdapter           |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `mark()`                                                                                              | org.jetbrains.kotlin.parsing.AbstractKotlinParsing |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `tryParseModifier(Consumer, TokenSet, TokenSet)`                                                      | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `doParseModifierListBody(Consumer, TokenSet, KotlinParsing$AnnotationParsingMode, TokenSet, boolean)` | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `doParseModifierList(Consumer, TokenSet, KotlinParsing$AnnotationParsingMode, TokenSet, boolean)`     | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseTypeArgumentModifierList()`                                                                     | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `tryParseTypeArgumentList(TokenSet)`                                                                  | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseTypeArgumentList()`                                                                             | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseUserType()`                                                                                     | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseTypeRefContents(TokenSet, boolean)`                                                             | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseTypeRef(TokenSet, boolean)`                                                                     | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseTypeRef(TokenSet)`                                                                              | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseTypeRef()`                                                                                      | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseFunction(boolean)`                                                                              | org.jetbrains.kotlin.parsing.KotlinParsing         |
|    new | +59.1 kB | 0.0% → 0.3% | 0 B → 59.1 kB |   0 → 1 | `parseFunction()`                                                                                     | org.jetbrains.kotlin.parsing.KotlinParsing         |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

| Change |    Delta |             % |              Size | Samples | Function                                                                     | Location                                                                                                                                        |
| -----: | -------: | ------------: | ----------------: | ------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
|  -0.6% |  -114 kB | 93.0% → 91.7% |   18 MB → 17.9 MB |     178 | `run(String[])`                                                              | org.jetbrains.kotlin.preloading.Preloader                                                                                                       |
|  -0.6% |  -114 kB | 93.0% → 91.7% |   18 MB → 17.9 MB |     178 | `main(String[])`                                                             | org.jetbrains.kotlin.preloading.Preloader                                                                                                       |
| -59.1% |  -109 kB |   1.0% → 0.4% |  184 kB → 75.4 kB |   5 → 3 | `readElementValue(AnnotationVisitor, int, String, char[])`                   | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -59.1% |  -109 kB |   1.0% → 0.4% |  184 kB → 75.4 kB |   5 → 3 | `readElementValues(AnnotationVisitor, int, boolean, char[])`                 | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -59.1% |  -109 kB |   1.0% → 0.4% |  184 kB → 75.4 kB |   5 → 3 | `create(byte[], MetadataVersion, Function4)`                                 | org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass                                                                                           |
| -58.9% |  -109 kB |   1.0% → 0.4% |  184 kB → 75.6 kB |   5 → 6 | `accept(ClassVisitor, Attribute[], int)`                                     | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -58.9% |  -109 kB |   1.0% → 0.4% |  184 kB → 75.6 kB |   5 → 6 | `accept(ClassVisitor, int)`                                                  | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -58.8% |  -107 kB |   0.9% → 0.4% |  183 kB → 75.3 kB |   4 → 2 | `<init>(char[], int, int)`                                                   | java.lang.String                                                                                                                                |
| -58.8% |  -107 kB |   0.9% → 0.4% |  183 kB → 75.3 kB |   4 → 2 | `readUtfNonAscii(int, int, int, char[])`                                     | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -58.7% |  -107 kB |   0.9% → 0.4% |  183 kB → 75.4 kB |   4 → 3 | `readUtf(int, int, char[])`                                                  | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -58.7% |  -107 kB |   0.9% → 0.4% |  183 kB → 75.4 kB |   4 → 3 | `readUtf(int, char[])`                                                       | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
| -58.7% |  -107 kB |   0.9% → 0.4% |  183 kB → 75.4 kB |   4 → 3 | `readUTF8(int, char[])`                                                      | org.jetbrains.org.objectweb.asm.ClassReader                                                                                                     |
|  -0.5% | -72.3 kB | 72.0% → 71.0% | 13.9 MB → 13.8 MB |     164 | `toByteArray()`                                                              | java.io.ByteArrayOutputStream                                                                                                                   |
|  -0.5% | -72.3 kB | 72.0% → 71.0% | 13.9 MB → 13.8 MB |     164 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                                            |
|  -0.5% | -72.3 kB | 72.0% → 71.0% | 13.9 MB → 13.8 MB |     164 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                                                            |
|  -3.8% | -51.5 kB |   6.9% → 6.6% | 1.34 MB → 1.29 MB |   9 → 8 | `computeTopLevelCallableNames(FqName)`                                       | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1                                            |
|  -3.8% | -51.5 kB |   6.9% → 6.6% | 1.34 MB → 1.29 MB |   9 → 8 | `invoke(Object, Void)`                                                       | org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1 |
|  -3.8% | -51.5 kB |   6.9% → 6.6% | 1.34 MB → 1.29 MB |   9 → 8 | `invoke(Object, Object)`                                                     | org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1 |
|  -3.8% | -51.5 kB |   6.9% → 6.6% | 1.34 MB → 1.29 MB |   9 → 8 | `getTopLevelCallableNamesInPackage(FqName)`                                  | org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider                                                                         |
|  -3.8% | -51.5 kB |   6.9% → 6.6% | 1.34 MB → 1.29 MB |   9 → 8 | `computeTopLevelCallableNames(FqName)`                                       | org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider                                                                |


# Lock contention profile diff

Blocked 510.8ms → 491.4ms (-19.4ms, -3.8%) over 3 samples (170.3ms → 163.8ms per sample).

| Category | Change |   Delta |      % |              Time | Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------: |
| stdlib   |  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 |

The entry filter hides every sampled function, so all functions are shown.

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |   Delta |      % |              Time | Samples | Function              | Location                 |
| -----: | ------: | -----: | ----------------: | ------: | --------------------- | ------------------------ |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

| Change |   Delta |      % |              Time | Samples | Function                    | Location                                                              |
| -----: | ------: | -----: | ----------------: | ------: | --------------------------- | --------------------------------------------------------------------- |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `park(boolean, long)`       | jdk.internal.misc.Unsafe                                              |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `parkNanos(Object, long)`   | java.util.concurrent.locks.LockSupport                                |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `await(long, TimeUnit)`     | java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `await(long)`               | java.lang.ref.ReferenceQueue                                          |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `remove0(long)`             | java.lang.ref.ReferenceQueue                                          |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `remove(long)`              | java.lang.ref.ReferenceQueue                                          |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `run()`                     | jdk.internal.ref.CleanerImpl                                          |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `runWith(Object, Runnable)` | java.lang.Thread                                                      |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `run()`                     | java.lang.Thread                                                      |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `run()`                     | jdk.internal.misc.InnocuousThread                                     |
