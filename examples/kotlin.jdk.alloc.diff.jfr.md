# Sampling profile diff

133 samples → 106 samples (-27 samples, -20.3%).

| Category | Change | Delta |      % |   Samples |
| -------- | -----: | ----: | -----: | --------: |
| ours     | -20.3% |   -27 | 100.0% | 133 → 106 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                               | Location                                                                      |
| ------: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `invoke()`                                                                                                                                                                             | kotlin.reflect.jvm.internal.ReflectProperties$LazySoftVal                     |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `checkNotNullParameter(Object, String)`                                                                                                                                                | kotlin.jvm.internal.Intrinsics                                                |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `parametersCount(TypeSystemContext, TypeConstructorMarker)`                                                                                                                            | org.jetbrains.kotlin.types.model.TypeSystemContextContextualKt                |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `fullyExpandedType(ConeClassLikeType, FirSession, Function1)`                                                                                                                          | org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt                         |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `fullyExpandedType$default(ConeClassLikeType, FirSession, Function1, int, Object)`                                                                                                     | org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt                         |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `getNode(Object)`                                                                                                                                                                      | java.util.HashMap                                                             |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                      | org.jetbrains.kotlin.metadata.ProtoBuf$Property                               |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                                                                                                   | org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentList             |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `markPlacesForInlineAndRemoveInlinable(MethodNode, Map, int)`                                                                                                                          | org.jetbrains.kotlin.codegen.inline.MethodInliner                             |
| +100.0% |    +1 | 0.8% → 1.9% |   1 → 2 | `analyze(String, MethodNode)`                                                                                                                                                          | org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `writeGenericArguments$lambda$1(JvmSignatureWriter, Function3, int, KotlinTypeMarker, Variance, Variance, TypeMappingMode)`                                                            | org.jetbrains.kotlin.codegen.state.KotlinTypeMapper$Companion                 |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `isInitialized()`                                                                                                                                                                      | kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type                       |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `classData(Object)`                                                                                                                                                                    | java.lang.invoke.InvokerBytecodeGenerator                                     |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(FastJarFileSystem, String)`                                                                                                                                                    | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler                    |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `getContextReceiverTypeCount()`                                                                                                                                                        | org.jetbrains.kotlin.metadata.ProtoBuf$Property                               |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>()`                                                                                                                                                                             | org.jetbrains.kotlin.fir.builder.FirFunctionTypeParameterBuilder              |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `take(Object[], int)`                                                                                                                                                                  | kotlin.collections.ArraysKt___ArraysKt                                        |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(KtSourceElement, List, FirTarget, FirExpression, DefaultConstructorMarker)`                                                                                                    | org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl             |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>()`                                                                                                                                                                             | org.jetbrains.kotlin.fir.expressions.builder.FirFunctionCallBuilder           |
|     new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(KtSourceElement, FirResolvePhase, FirModuleData, FirDeclarationOrigin, FirDeclarationAttributes, Name, FirTypeParameterSymbol, FirBasedSymbol, Variance, boolean, List, List)` | org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl               |

#### Progressions

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % | Samples | Function                                                                                                                                                                     | Location                                                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  -42.9% |    -3 |   5.3% → 3.8% |   7 → 4 | `throwParameterIsNullNPE(String)`                                                                                                                                            | kotlin.jvm.internal.Intrinsics                                                          |
|   -6.9% |    -2 | 21.8% → 25.5% | 29 → 27 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                                                                                | java.util.zip.Inflater                                                                  |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `sanitizeStackTrace(Throwable)`                                                                                                                                              | kotlin.jvm.internal.Intrinsics                                                          |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `prepareQualifiedTransform(FirQualifiedAccessExpression, FirNamedReferenceWithCandidate)`                                                                                    | org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `execute(AbstractInsnNode, Interpreter)`                                                                                                                                     | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                                     |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `signedHashCode(int, byte[], int, int)`                                                                                                                                      | jdk.internal.util.ArraysSupport                                                         |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                                              | java.lang.ClassLoader                                                                   |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `findBootstrapClass(String)`                                                                                                                                                 | java.lang.ClassLoader                                                                   |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `getPropertyCount()`                                                                                                                                                         | kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class                                |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `findEntry0(long, String)`                                                                                                                                                   | jdk.internal.loader.NativeLibrary                                                       |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `isInitialized()`                                                                                                                                                            | org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable                                        |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                                                                                                                                       | com.intellij.lang.impl.PsiBuilderImpl                                                   |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `parseTypeRefContents(TokenSet, boolean)`                                                                                                                                    | org.jetbrains.kotlin.parsing.KotlinParsing                                              |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `advance()`                                                                                                                                                                  | org.jetbrains.kotlin.lexer._JetLexer                                                    |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `bind(FirTargetElement)`                                                                                                                                                     | org.jetbrains.kotlin.fir.FirAbstractTarget                                              |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `consume(ModifierList, LighterASTNode, boolean)`                                                                                                                             | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder          |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `searchClasses(ClassId, Set, Function2)`                                                                                                                                     | org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl                             |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `isVisible$default(FirVisibilityChecker, FirMemberDeclaration, FirSession, FirFile, List, FirExpression, boolean, FirRegularClass, boolean, SupertypeSupplier, int, Object)` | org.jetbrains.kotlin.fir.FirVisibilityChecker                                           |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                                            | org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter                                   |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `reduceCandidates(FirExpression, Collection, Set)`                                                                                                                           | org.jetbrains.kotlin.fir.resolve.calls.overloads.FirOverloadByLambdaReturnTypeResolver  |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                                                                              | Location                                                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|     new |   +38 | 0.0% → 35.8% |  0 → 38 | `invokeStatic(Object, Object)`                                                        | java.lang.invoke.LambdaForm$DMH.0x000000e001001c00                                                                      |
|     new |   +36 | 0.0% → 34.0% |  0 → 36 | `invoke(Object, Object, Object)`                                                      | java.lang.invoke.LambdaForm$MH.0x000000e001010000                                                                       |
|     new |    +6 |  0.0% → 5.7% |   0 → 6 | `invoke()`                                                                            | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e001671dc8 |
|     new |    +5 |  0.0% → 4.7% |   0 → 5 | `invoke()`                                                                            | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e0016d95c0 |
|  +80.0% |    +4 |  3.8% → 8.5% |   5 → 9 | `visitWithCallOrAssignment(FirStatement)`                                             | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
| +100.0% |    +4 |  3.0% → 7.5% |   4 → 8 | `visitFunctionCall(FirFunctionCall, Void)`                                            | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
| +100.0% |    +4 |  3.0% → 7.5% |   4 → 8 | `visitFunctionCall(FirFunctionCall, Object)`                                          | org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor                                         |
|     new |    +4 |  0.0% → 3.8% |   0 → 4 | `invoke()`                                                                            | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000e0016a5458 |
|     new |    +4 |  0.0% → 3.8% |   0 → 4 | `invoke()`                                                                            | org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter$LambdaAnalyzerImpl$$Lambda.0x000000e0016a5220               |
|     new |    +4 |  0.0% → 3.8% |   0 → 4 | `preprocessNodeBeforeInline(MethodNode, Map)`                                         | org.jetbrains.kotlin.codegen.inline.MethodInliner                                                                       |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `convertFunctionDeclaration(LighterASTNode)`                                          | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder                                          |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `convertFile(LighterASTNode, KtSourceFile, KtSourceFileLinesMapping)`                 | org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder                                          |
| +150.0% |    +3 |  1.5% → 4.7% |   2 → 5 | `buildFirFile(FlyweightCapableTreeStructure, KtSourceFile, KtSourceFileLinesMapping)` | org.jetbrains.kotlin.fir.lightTree.LightTree2Fir                                                                        |
|  +42.9% |    +3 |  5.3% → 9.4% |  7 → 10 | `getValue(Object, Object)`                                                            | org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache                                                                    |
| +300.0% |    +3 |  0.8% → 3.8% |   1 → 4 | `transformArguments(FirTransformer, Object)`                                          | org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl                                                           |
| +300.0% |    +3 |  0.8% → 3.8% |   1 → 4 | `transformChildren(FirTransformer, Object)`                                           | org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl                                                           |
| +300.0% |    +3 |  0.8% → 3.8% |   1 → 4 | `transformElement(FirElement, Object)`                                                | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher                  |
|  +30.0% |    +3 | 7.5% → 12.3% | 10 → 13 | `accept(FirVisitor, Object)`                                                          | org.jetbrains.kotlin.fir.expressions.FirBlock                                                                           |
|  +30.0% |    +3 | 7.5% → 12.3% | 10 → 13 | `visitStatement(FirStatement, Object)`                                                | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                                     |
|  +30.0% |    +3 | 7.5% → 12.3% | 10 → 13 | `visitExpression(FirExpression, Object)`                                              | org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor                                                                     |

#### Progressions

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                           | Location                                                                                                                |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |   -50 |  37.6% → 0.0% |  50 → 0 | `invokeStatic(Object, Object)`                                                                     | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                                                                      |
| removed |   -50 |  37.6% → 0.0% |  50 → 0 | `invoke(Object, Object, Object)`                                                                   | java.lang.invoke.LambdaForm$MH.0x0000007001010000                                                                       |
|  -23.0% |   -17 | 55.6% → 53.8% | 74 → 57 | `run(String[])`                                                                                    | org.jetbrains.kotlin.preloading.Preloader                                                                               |
|  -23.0% |   -17 | 55.6% → 53.8% | 74 → 57 | `main(String[])`                                                                                   | org.jetbrains.kotlin.preloading.Preloader                                                                               |
|  -25.9% |   -14 | 40.6% → 37.7% | 54 → 40 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion                                                                    |
|  -28.6% |   -14 | 36.8% → 33.0% | 49 → 35 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | java.lang.invoke.Invokers$Holder                                                                                        |
|  -29.2% |   -14 | 36.1% → 32.1% | 48 → 34 | `invokeImpl(Object, Object[])`                                                                     | jdk.internal.reflect.DirectMethodHandleAccessor                                                                         |
|  -29.8% |   -14 | 35.3% → 31.1% | 47 → 33 | `invoke(Object, Object[])`                                                                         | jdk.internal.reflect.DirectMethodHandleAccessor                                                                         |
|  -31.1% |   -14 | 33.8% → 29.2% | 45 → 31 | `invoke(Object, Object[])`                                                                         | java.lang.reflect.Method                                                                                                |
|  -25.9% |   -14 | 40.6% → 37.7% | 54 → 40 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|  -25.9% |   -14 | 40.6% → 37.7% | 54 → 40 | `doMain(CLICompiler, String[])`                                                                    | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|  -24.5% |   -13 | 39.8% → 37.7% | 53 → 40 | `main(String[])`                                                                                   | org.jetbrains.kotlin.cli.jvm.K2JVMCompiler                                                                              |
|  -26.5% |   -13 | 36.8% → 34.0% | 49 → 36 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|  -26.5% |   -13 | 36.8% → 34.0% | 49 → 36 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|  -27.7% |   -13 | 35.3% → 32.1% | 47 → 34 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
|  -25.0% |   -12 | 36.1% → 34.0% | 48 → 36 | `exec(PrintStream, MessageRenderer, String[])`                                                     | org.jetbrains.kotlin.cli.common.CLICompiler                                                                             |
|  -23.5% |   -12 | 38.3% → 36.8% | 51 → 39 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                               | org.jetbrains.kotlin.config.phaser.CompilerPhaseKt                                                                      |
|  -52.2% |   -12 | 17.3% → 10.4% | 23 → 11 | `transform(FirTransformer, Object)`                                                                | org.jetbrains.kotlin.fir.expressions.FirFunctionCall                                                                    |
| removed |   -12 |   9.0% → 0.0% |  12 → 0 | `invoke()`                                                                                         | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x0000007001671dc8 |
|  -46.2% |   -12 | 19.5% → 13.2% | 26 → 14 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                  | org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt                                                                |


# Allocated heap profile diff

Allocated 717 MB (+179 kB, +0.0%) over 867 samples → 865 samples (827 kB → 829 kB per sample).

| Category | Change |   Delta |      % |              Size |   Samples |
| -------- | -----: | ------: | -----: | ----------------: | --------: |
| ours     |  +0.0% | +179 kB | 100.0% |            717 MB | 857 → 856 |
| stdlib   |  -0.9% |  -256 B |   0.0% | 29.6 kB → 29.3 kB |    10 → 9 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |    Delta |             % |              Size |   Samples | Function                                                                                | Location                                                                                                         |
| --------: | -------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
|    +74.1% | +82.1 MB | 15.5% → 26.9% |   111 MB → 193 MB | 110 → 112 | `copyOf(byte[], int)`                                                                   | java.util.Arrays                                                                                                 |
| +19200.8% |   +77 MB |  0.1% → 10.8% |  401 kB → 77.4 MB |     1 → 4 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                 | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                                             |
| +34391.7% |   +58 MB |   0.0% → 8.1% |  169 kB → 58.2 MB |         1 | `getDeclaredFields0(boolean)`                                                           | java.lang.Class                                                                                                  |
|       new | +22.2 MB |   0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `initTable()`                                                                           | java.util.concurrent.ConcurrentHashMap                                                                           |
|    +43.4% |  +4.2 MB |   1.3% → 1.9% | 9.68 MB → 13.9 MB |   20 → 27 | `copyOfRangeByte(byte[], int, int)`                                                     | java.util.Arrays                                                                                                 |
|    +25.8% | +3.44 MB |   1.9% → 2.3% | 13.3 MB → 16.7 MB |   30 → 35 | `iterator()`                                                                            | java.util.ArrayList                                                                                              |
|    +40.0% | +2.09 MB |   0.7% → 1.0% | 5.23 MB → 7.33 MB |   10 → 14 | `newOutput()`                                                                           | org.jetbrains.kotlin.protobuf.ByteString                                                                         |
|   +400.0% | +2.09 MB |   0.1% → 0.4% |  523 kB → 2.62 MB |     1 → 5 | `requestGroup(TowerGroup, Continuation)`                                                | org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager                                                 |
|       new | +2.09 MB |   0.0% → 0.3% |     0 B → 2.09 MB |     0 → 4 | `createScope(IrSymbolOwner)`                                                            | org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext                                          |
|   +312.1% | +2.04 MB |   0.1% → 0.4% |  653 kB → 2.69 MB |     4 → 8 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`         | java.lang.ClassLoader                                                                                            |
|   +330.0% | +1.61 MB |   0.1% → 0.3% |  487 kB → 2.09 MB |     1 → 4 | `analyzer$lambda$0(FixStackAnalyzer, int, int)`                                         | org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer                                              |
|   +100.0% | +1.57 MB |   0.2% → 0.4% | 1.57 MB → 3.14 MB |     3 → 6 | `unmodifiableList(List)`                                                                | java.util.Collections                                                                                            |
|    +75.0% | +1.57 MB |   0.3% → 0.5% | 2.09 MB → 3.66 MB |     4 → 7 | `<init>()`                                                                              | org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage                                      |
|       new | +1.57 MB |   0.0% → 0.2% |     0 B → 1.57 MB |     0 → 3 | `addNewIncorporatedConstraint(TypeVariableMarker, KotlinTypeMarker, ConstraintContext)` | org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector |
|   +150.0% | +1.57 MB |   0.1% → 0.4% | 1.05 MB → 2.62 MB |     1 → 3 | `iterator()`                                                                            | java.util.LinkedHashMap$LinkedEntrySet                                                                           |
|    +75.0% | +1.57 MB |   0.3% → 0.5% | 2.09 MB → 3.66 MB |     3 → 6 | `<init>(ClassWriter)`                                                                   | jdk.internal.org.objectweb.asm.SymbolTable                                                                       |
|    +37.6% | +1.38 MB |   0.5% → 0.7% | 3.66 MB → 5.04 MB |    6 → 10 | `allocateInstance(Class)`                                                               | jdk.internal.misc.Unsafe                                                                                         |
|    +66.6% | +1.08 MB |   0.2% → 0.4% | 1.63 MB → 2.71 MB |     3 → 5 | `<init>(byte[], int, boolean)`                                                          | org.jetbrains.org.objectweb.asm.ClassReader                                                                      |
|    +33.3% | +1.05 MB |   0.4% → 0.6% | 3.14 MB → 4.19 MB |     6 → 7 | `newString(byte[], int, int)`                                                           | java.lang.StringLatin1                                                                                           |
|    +50.0% | +1.05 MB |   0.3% → 0.4% | 2.09 MB → 3.14 MB |     4 → 6 | `ensureCapacity()`                                                                      | com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure                                                            |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |            % |              Size |   Samples | Function                                     | Location                                                                                         |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -79.4% |  -151 MB | 26.6% → 5.5% |  191 MB → 39.3 MB | 106 → 102 | `<init>(int)`                                | java.io.ByteArrayOutputStream                                                                    |
| removed | -66.4 MB |  9.3% → 0.0% |     66.4 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                  | java.io.File                                                                                     |
| removed | -22.3 MB |  3.1% → 0.0% |     22.3 MB → 0 B |     1 → 0 | `<init>(InputStream, Inflater, int)`         | java.util.zip.InflaterInputStream                                                                |
|  -62.5% | -5.23 MB |  1.2% → 0.4% | 8.37 MB → 3.14 MB |    16 → 6 | `newNode(int, Object, Object, HashMap$Node)` | java.util.LinkedHashMap                                                                          |
|  -52.6% | -4.65 MB |  1.2% → 0.6% | 8.83 MB → 4.19 MB |    15 → 8 | `resize()`                                   | java.util.HashMap                                                                                |
|  -43.8% | -3.66 MB |  1.2% → 0.7% | 8.37 MB → 4.71 MB |    16 → 9 | `newInstance(OutputStream, int)`             | org.jetbrains.kotlin.protobuf.CodedOutputStream                                                  |
|  -75.0% | -3.14 MB |  0.6% → 0.1% | 4.19 MB → 1.05 MB |     7 → 2 | `<init>()`                                   | kotlin.collections.builders.SetBuilder                                                           |
|  -77.1% | -2.73 MB |  0.5% → 0.1% |  3.54 MB → 811 kB |     7 → 3 | `newNode(int, Object, Object, HashMap$Node)` | java.util.HashMap                                                                                |
|  -50.0% | -2.09 MB |  0.6% → 0.3% | 4.19 MB → 2.09 MB |     8 → 4 | `simplifyTrivialInstructions(MethodNode)`    | org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `iterator()`                                 | java.util.LinkedHashMap$LinkedValues                                                             |
|  -75.0% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 523 kB |     4 → 1 | `iterator()`                                 | org.jetbrains.kotlin.utils.SmartList                                                             |
|  -75.0% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 523 kB |     4 → 1 | `replace(byte[], char, char)`                | java.lang.StringLatin1                                                                           |
|  -60.0% | -1.57 MB |  0.4% → 0.1% | 2.62 MB → 1.05 MB |     5 → 2 | `<init>(int)`                                | kotlin.collections.builders.MapBuilder                                                           |
|  -32.0% | -1.57 MB |  0.7% → 0.5% | 4.91 MB → 3.34 MB |    10 → 7 | `allocateUninitializedArray(Class, int)`     | jdk.internal.misc.Unsafe                                                                         |
|  -42.9% | -1.57 MB |  0.5% → 0.3% | 3.66 MB → 2.09 MB |     7 → 3 | `addConstantUtf8(String)`                    | jdk.internal.org.objectweb.asm.SymbolTable                                                       |
|  -37.5% | -1.57 MB |  0.6% → 0.4% | 4.19 MB → 2.62 MB |     8 → 5 | `<init>(int)`                                | java.lang.AbstractStringBuilder                                                                  |
| removed | -1.57 MB |  0.2% → 0.0% |     1.57 MB → 0 B |     3 → 0 | `newInstance(Class, int)`                    | java.lang.reflect.Array                                                                          |
|  -75.0% | -1.57 MB |  0.3% → 0.1% |  2.09 MB → 523 kB |     3 → 1 | `<init>(int)`                                | jdk.internal.org.objectweb.asm.ByteVector                                                        |
|  -15.6% |  -1.5 MB |  1.3% → 1.1% | 9.59 MB → 8.09 MB |   29 → 24 | `clone()`                                    | java.lang.Object                                                                                 |
|   -9.2% | -1.48 MB |  2.2% → 2.0% |   16 MB → 14.5 MB |   31 → 27 | `<init>(int)`                                | org.jetbrains.kotlin.protobuf.ByteString$Output                                                  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |    Delta |             % |              Size |   Samples | Function                                                                             | Location                                                              |
| --------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
|       new |  +186 MB |  0.0% → 26.0% |      0 B → 186 MB |   0 → 244 | `invokeStatic(Object, Object)`                                                       | java.lang.invoke.LambdaForm$DMH.0x000000e001001c00                    |
|       new |  +184 MB |  0.0% → 25.6% |      0 B → 184 MB |   0 → 239 | `invoke(Object, Object, Object)`                                                     | java.lang.invoke.LambdaForm$MH.0x000000e001010000                     |
|    +73.6% | +82.1 MB | 15.5% → 27.0% |   111 MB → 194 MB | 122 → 121 | `toByteArray()`                                                                      | java.io.ByteArrayOutputStream                                         |
|    +67.7% | +81.1 MB | 16.7% → 28.0% |   120 MB → 201 MB | 138 → 136 | `copyOf(byte[], int)`                                                                | java.util.Arrays                                                      |
| +22014.0% | +58.6 MB |   0.0% → 8.2% |  266 kB → 58.8 MB |         2 | `getDeclaredFields0(boolean)`                                                        | java.lang.Class                                                       |
| +22014.0% | +58.6 MB |   0.0% → 8.2% |  266 kB → 58.8 MB |         2 | `privateGetDeclaredFields(boolean)`                                                  | java.lang.Class                                                       |
| +34391.7% |   +58 MB |   0.0% → 8.1% |  169 kB → 58.2 MB |         1 | `getDeclaredFields()`                                                                | java.lang.Class                                                       |
|  +3696.1% | +57.7 MB |   0.2% → 8.3% | 1.56 MB → 59.2 MB |     4 → 3 | `getArgumentsInfo(Class)`                                                            | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +2743.0% | +57.2 MB |   0.3% → 8.3% | 2.08 MB → 59.2 MB |     5 → 3 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`    | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +2743.0% | +57.2 MB |   0.3% → 8.3% | 2.08 MB → 59.2 MB |     5 → 3 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                      | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|  +2743.0% | +57.2 MB |   0.3% → 8.3% | 2.08 MB → 59.2 MB |     5 → 3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt |
|    +39.8% |   +57 MB | 20.0% → 27.9% |   143 MB → 200 MB | 274 → 271 | `exec(PrintStream, Services, MessageRenderer, String[])`                             | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|    +40.4% | +56.5 MB | 19.5% → 27.4% |   140 MB → 196 MB | 267 → 263 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                               | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                 |
|    +39.2% |   +56 MB | 19.9% → 27.7% |   143 MB → 199 MB | 273 → 268 | `exec(PrintStream, MessageRenderer, String[])`                                       | org.jetbrains.kotlin.cli.common.CLICompiler                           |
|       new | +22.8 MB |   0.0% → 3.2% |     0 B → 22.8 MB |     0 → 2 | `putVal(Object, Object, boolean)`                                                    | java.util.concurrent.ConcurrentHashMap                                |
|       new | +22.2 MB |   0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `initTable()`                                                                        | java.util.concurrent.ConcurrentHashMap                                |
|       new | +22.2 MB |   0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `put(Object, Object)`                                                                | java.util.concurrent.ConcurrentHashMap                                |
|       new | +22.2 MB |   0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `storeString(String)`                                                                | jdk.jfr.internal.StringPool                                           |
|       new | +22.2 MB |   0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `addString(String)`                                                                  | jdk.jfr.internal.StringPool                                           |
|       new | +22.2 MB |   0.0% → 3.1% |     0 B → 22.2 MB |     0 → 1 | `putString(String)`                                                                  | jdk.jfr.internal.event.EventWriter                                    |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |             Size |   Samples | Function                                                                                | Location                                                                                                                |
| ------: | -------: | ------------: | ---------------: | --------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| removed |  -197 MB |  27.5% → 0.0% |     197 MB → 0 B |   251 → 0 | `invokeStatic(Object, Object)`                                                          | java.lang.invoke.LambdaForm$DMH.0x0000007001001c00                                                                      |
| removed |  -196 MB |  27.3% → 0.0% |     196 MB → 0 B |   248 → 0 | `invoke(Object, Object, Object)`                                                        | java.lang.invoke.LambdaForm$MH.0x0000007001010000                                                                       |
|  -79.4% |  -151 MB |  26.6% → 5.5% | 191 MB → 39.3 MB | 106 → 102 | `<init>(int)`                                                                           | java.io.ByteArrayOutputStream                                                                                           |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `listFiles(FilenameFilter)`                                                             | java.io.File                                                                                                            |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `cleanup()`                                                                             | org.fusesource.jansi.internal.JansiLoader                                                                               |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `initialize()`                                                                          | org.fusesource.jansi.internal.JansiLoader                                                                               |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `<clinit>()`                                                                            | org.fusesource.jansi.internal.CLibrary                                                                                  |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `<clinit>()`                                                                            | org.jetbrains.kotlin.cli.common.messages.PlainTextMessageRenderer                                                       |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `<clinit>()`                                                                            | org.jetbrains.kotlin.cli.common.messages.MessageRenderer                                                                |
| removed | -66.4 MB |   9.3% → 0.0% |    66.4 MB → 0 B |     1 → 0 | `defaultMessageRenderer()`                                                              | org.jetbrains.kotlin.cli.common.CLICompiler$Companion                                                                   |
| removed | -23.5 MB |   3.3% → 0.0% |    23.5 MB → 0 B |    44 → 0 | `invoke()`                                                                              | org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d95c0 |
|   -4.7% | -23.3 MB | 69.9% → 66.6% |  501 MB → 478 MB | 443 → 437 | `main(String[])`                                                                        | org.jetbrains.kotlin.preloading.Preloader                                                                               |
|  -87.9% | -22.9 MB |   3.6% → 0.4% |  26 MB → 3.14 MB |     8 → 6 | `loadClass(String)`                                                                     | java.lang.ClassLoader                                                                                                   |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `<init>(InputStream, Inflater, int)`                                                    | java.util.zip.InflaterInputStream                                                                                       |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | java.util.zip.ZipFile$ZipFileInflaterInputStream                                                                        |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)`           | java.util.zip.ZipFile$ZipFileInflaterInputStream                                                                        |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `getInputStream(ZipEntry)`                                                              | java.util.zip.ZipFile                                                                                                   |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `getInputStream(ZipEntry)`                                                              | java.util.jar.JarFile                                                                                                   |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `getInputStream()`                                                                      | jdk.internal.loader.URLClassPath$JarLoader$2                                                                            |
| removed | -22.3 MB |   3.1% → 0.0% |    22.3 MB → 0 B |     1 → 0 | `cachedInputStream()`                                                                   | jdk.internal.loader.Resource                                                                                            |


# Lock contention profile diff

Blocked 510.8ms → 491.4ms (-19.4ms, -3.8%) over 3 samples (170.3ms → 163.8ms per sample).

| Category | Change |   Delta |      % |              Time | Samples |
| -------- | -----: | ------: | -----: | ----------------: | ------: |
| ours     |  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 |

## Hottest functions

### Self time

#### Progressions

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

| Change |   Delta |      % |              Time | Samples | Function              | Location                 |
| -----: | ------: | -----: | ----------------: | ------: | --------------------- | ------------------------ |
|  -3.8% | -19.4ms | 100.0% | 510.8ms → 491.4ms |       3 | `park(boolean, long)` | jdk.internal.misc.Unsafe |

### Total time

#### Progressions

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
