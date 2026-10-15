# Sampling profile diff

Collected 163 samples → 104 samples (-59 samples, -36.2%).

| Category         | Change | Delta |             % | Samples |
| ---------------- | -----: | ----: | ------------: | ------: |
| Ours             | -29.9% |   -23 | 47.2% → 51.9% | 77 → 54 |
| Standard library | -41.9% |   -36 | 52.8% → 48.1% | 86 → 50 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |           % | Samples | Function                                                                                                 | Location                                                                            |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 1.9% |   0 → 2 | `traverseCfg()`                                                                                          | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`      |
|    new |    +2 | 0.0% → 1.9% |   0 → 2 | `interpretPopInstructionsForBoxedValues(RedundantBoxingInterpreter, MethodNode, Frame[])`                | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer` |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `toReferenceImpl(FirExpression, FirSession)`                                                             | `org.jetbrains.kotlin.fir.expressions.ReferenceUtilsKt`                             |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`               |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `runTasks()`                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                            |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `transform(FirTransformer, Object)`                                                                      | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression`                          |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitAnnotationCall(FirAnnotationCall, Void)`                                                           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitAnnotationContainer(FirAnnotationContainer, Object)`                                               | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, Void)`                                                         | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                                                | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `acceptChildren(IrVisitor, Object)`                                                                      | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment`                            |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `writeTo(CodedOutputStream)`                                                                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `readBytes(byte[], int, int)`                                                                            | `java.io.FileInputStream`                                                           |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `nextNode()`                                                                                             | `java.util.HashMap$HashIterator`                                                    |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `addKey$kotlin_stdlib(Object)`                                                                           | `kotlin.collections.builders.MapBuilder`                                            |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `reflectionData()`                                                                                       | `java.lang.Class`                                                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `newArray(Class, int)`                                                                                   | `java.lang.reflect.Array`                                                           |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `revealDirect(MethodHandle)`                                                                             | `java.lang.invoke.MethodHandles$Lookup`                                             |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `build()`                                                                                                | `org.jetbrains.kotlin.fir.types.builder.FirUserTypeRefBuilder`                      |

##### Standard library

| Change | Delta |           % | Samples | Function                       | Location                                                                                   |
| -----: | ----: | ----------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `readBytes(byte[], int, int)`  | `java.io.FileInputStream`                                                                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `nextNode()`                   | `java.util.HashMap$HashIterator`                                                           |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `addKey$kotlin_stdlib(Object)` | `kotlin.collections.builders.MapBuilder`                                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `reflectionData()`             | `java.lang.Class`                                                                          |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `newArray(Class, int)`         | `java.lang.reflect.Array`                                                                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `revealDirect(MethodHandle)`   | `java.lang.invoke.MethodHandles$Lookup`                                                    |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `startsWith(String, int)`      | `java.lang.String`                                                                         |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `next()`                       | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBaseIterator` |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `append(String)`               | `java.lang.StringBuilder`                                                                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `replace(byte[], char, char)`  | `java.lang.StringLatin1`                                                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(Vector)`               | `java.util.Vector$Itr`                                                                     |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                 | Location                                                                                  |
| -----: | ----: | ----------: | ------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 1.9% |   0 → 2 | `traverseCfg()`                                                                                          | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`            |
|    new |    +2 | 0.0% → 1.9% |   0 → 2 | `interpretPopInstructionsForBoxedValues(RedundantBoxingInterpreter, MethodNode, Frame[])`                | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `toReferenceImpl(FirExpression, FirSession)`                                                             | `org.jetbrains.kotlin.fir.expressions.ReferenceUtilsKt`                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `processCandidate(Candidate, ResolutionContext, boolean, boolean)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                     |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `runTasks()`                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                        |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `transform(FirTransformer, Object)`                                                                      | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression`                                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitAnnotationCall(FirAnnotationCall, Void)`                                                           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`         |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitAnnotationContainer(FirAnnotationContainer, Object)`                                               | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`         |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, Void)`                                                         | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`         |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirStatement)`                                                | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`        |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `acceptChildren(IrVisitor, Object)`                                                                      | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment`                                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `writeTo(CodedOutputStream)`                                                                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                                         |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `build()`                                                                                                | `org.jetbrains.kotlin.fir.types.builder.FirUserTypeRefBuilder`                            |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `addChild(PsiBuilderImpl$ProductionMarker)`                                                              | `com.intellij.lang.impl.PsiBuilderImpl$StartMarker`                                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>()`                                                                                               | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`                     |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `convertImportDirective(LighterASTNode)`                                                                 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`          |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `get(Object)`                                                                                            | `it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap`                                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `isSuccess(CandidateApplicability)`                                                                      | `org.jetbrains.kotlin.resolve.calls.tower.CandidateApplicabilityKt`                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `hasAdditionalResolutionErrors(FirNamedReferenceWithCandidate)`                                          | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % | Samples | Function                                                                                                         | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|  -41.3% |   -19 | 28.2% → 26.0% | 46 → 27 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                    | `java.util.zip.Inflater`                                                                 |
|  -50.0% |    -3 |   3.7% → 2.9% |   6 → 3 | `throwParameterIsNullNPE(String)`                                                                                | `kotlin.jvm.internal.Intrinsics`                                                         |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `readUtfNonAscii(int, int, int, char[])`                                                                         | `org.jetbrains.org.objectweb.asm.ClassReader`                                            |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                          | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                         |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)`      | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                         |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `sanitizeStackTrace(Throwable)`                                                                                  | `kotlin.jvm.internal.Intrinsics`                                                         |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `available0()`                                                                                                   | `java.io.FileInputStream`                                                                |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `checkAndAddEntry(int, int, ZipCoder)`                                                                           | `java.util.zip.ZipFile$Source`                                                           |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `readBytes0(byte[], int, int)`                                                                                   | `java.io.RandomAccessFile`                                                               |
|  -12.5% |    -1 |   4.9% → 6.7% |   8 → 7 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)`                                              | `jdk.internal.loader.NativeLibraries`                                                    |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument`                       |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `equals(Object)`                                                                                                 | `java.lang.String`                                                                       |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `computeIfAbsent(Object, Function)`                                                                              | `java.util.concurrent.ConcurrentHashMap`                                                 |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `isPrimitive()`                                                                                                  | `java.lang.Class`                                                                        |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `visitExport(String, int, String[])`                                                                             | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion$read$1$visitModule$1` |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `getMyChildren()`                                                                                                | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`                                |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `registerJavaComponents(FirSession, JavaModuleResolver, FirSharableJavaComponents, boolean, InlineConstTracker)` | `org.jetbrains.kotlin.fir.session.ComponentsContainersKt`                                |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `makeImmutable()`                                                                                                | `org.jetbrains.kotlin.protobuf.FieldSet`                                                 |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `findBootstrapClass(String)`                                                                                     | `java.lang.ClassLoader`                                                                  |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                  | `java.lang.ClassLoader`                                                                  |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                        | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -41.3% |   -19 | 28.2% → 26.0% | 46 → 27 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                   | `java.util.zip.Inflater`                                           |
|  -50.0% |    -3 |   3.7% → 2.9% |   6 → 3 | `throwParameterIsNullNPE(String)`                                               | `kotlin.jvm.internal.Intrinsics`                                   |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `sanitizeStackTrace(Throwable)`                                                 | `kotlin.jvm.internal.Intrinsics`                                   |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `available0()`                                                                  | `java.io.FileInputStream`                                          |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `checkAndAddEntry(int, int, ZipCoder)`                                          | `java.util.zip.ZipFile$Source`                                     |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `readBytes0(byte[], int, int)`                                                  | `java.io.RandomAccessFile`                                         |
|  -12.5% |    -1 |   4.9% → 6.7% |   8 → 7 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)`             | `jdk.internal.loader.NativeLibraries`                              |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                               | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument` |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `equals(Object)`                                                                | `java.lang.String`                                                 |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `computeIfAbsent(Object, Function)`                                             | `java.util.concurrent.ConcurrentHashMap`                           |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `isPrimitive()`                                                                 | `java.lang.Class`                                                  |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `findBootstrapClass(String)`                                                    | `java.lang.ClassLoader`                                            |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                            |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `getClass()`                                                                    | `java.lang.Object`                                                 |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `size()`                                                                        | `java.util.Collections$UnmodifiableCollection`                     |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `refersTo0(Object)`                                                             | `java.lang.ref.Reference`                                          |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                                 |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `size()`                                                                        | `kotlin.collections.AbstractMutableSet`                            |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `clone()`                                                                       | `java.lang.Object`                                                 |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `<init>()`                                                                      | `kotlin.collections.builders.MapBuilder`                           |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                            | Location                                                                                      |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| removed |    -2 | 1.2% → 0.0% |   2 → 0 | `readUtfNonAscii(int, int, int, char[])`                                                                            | `org.jetbrains.org.objectweb.asm.ClassReader`                                                 |
| removed |    -2 | 1.2% → 0.0% |   2 → 0 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                             | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                              |
| removed |    -2 | 1.2% → 0.0% |   2 → 0 | `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)`         | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                              |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `visitExport(String, int, String[])`                                                                                | `org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion$read$1$visitModule$1`      |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `getMyChildren()`                                                                                                   | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`                                     |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `registerJavaComponents(FirSession, JavaModuleResolver, FirSharableJavaComponents, boolean, InlineConstTracker)`    | `org.jetbrains.kotlin.fir.session.ComponentsContainersKt`                                     |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `makeImmutable()`                                                                                                   | `org.jetbrains.kotlin.protobuf.FieldSet`                                                      |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `readSourceFileWithMapping(InputStreamReader)`                                                                      | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                             |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | `org.jetbrains.kotlin.parsing.KotlinLightParser`                                              |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `convertWhenEntry(LighterASTNode, FirVariable)`                                                                     | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`               |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `convertSimpleNameExpression(LighterASTNode)`                                                                       | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`               |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `getUsedAsExpression(LighterASTNode)`                                                                               | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`               |
|  -50.0% |    -1 | 1.2% → 1.0% |   2 → 1 | `balanceWhiteSpaces()`                                                                                              | `com.intellij.lang.impl.PsiBuilderImpl`                                                       |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `transformInplace(List, FirTransformer, Object)`                                                                    | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                      |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)`                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `<init>(Visibility, Modality, EffectiveVisibility)`                                                                 | `org.jetbrains.kotlin.fir.declarations.impl.FirResolvedDeclarationStatusImpl`                 |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                  |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)`                        | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`                            |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)`                                                                                 | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                        |
| removed |    -1 | 0.6% → 0.0% |   1 → 0 | `getCalleeReference()`                                                                                              | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`                               |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `traverseCfg()` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change | Delta |            % | Samples | Location                                                                          |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:79` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:84` |

##### `interpretPopInstructionsForBoxedValues(RedundantBoxingInterpreter, MethodNode, Frame[])` (`org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`)

| Change | Delta |             % | Samples | Location                                                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer:96` |

##### `toReferenceImpl(FirExpression, FirSession)` (`org.jetbrains.kotlin.fir.expressions.ReferenceUtilsKt`)

| Change | Delta |             % | Samples | Location                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.ReferenceUtilsKt:69` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Location                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner:58` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager:82` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver:144` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirReturnExpression`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression:35` |

##### `visitAnnotationCall(FirAnnotationCall, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Location                                                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:1525` |

##### `visitAnnotationContainer(FirAnnotationContainer, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:38` |

##### `visitResolvedTypeRef(FirResolvedTypeRef, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Location                                                                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:1501` |

##### `check(CheckerContext, DiagnosticReporter, FirStatement)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`)

| Change | Delta |             % | Samples | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker:39` |

##### `acceptChildren(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.declarations.IrPackageFragment`)

| Change | Delta |             % | Samples | Location                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment:27` |

##### `writeTo(CodedOutputStream)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:17363` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$HashIterator:1609` |

##### `addKey$kotlin_stdlib(Object)` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.collections.builders.MapBuilder:320` |

##### `reflectionData()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.Class:3392` |

##### `revealDirect(MethodHandle)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Location                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.invoke.MethodHandles$Lookup:3710` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirUserTypeRefBuilder`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.builder.FirUserTypeRefBuilder:26` |

##### `startsWith(String, int)` (`java.lang.String`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.String:2294` |

##### `next()` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBaseIterator`)

| Change | Delta |             % | Samples | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBaseIterator:165` |

##### `append(String)` (`java.lang.StringBuilder`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.StringBuilder:179` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change | Delta |             % | Samples | Location                     |
| -----: | ----: | ------------: | ------: | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.lang.StringLatin1:309` |

##### `<init>(Vector)` (`java.util.Vector$Itr`)

| Change | Delta |             % | Samples | Location                    |
| -----: | ----: | ------------: | ------: | --------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Vector$Itr:1235` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`)

| Change | Delta |             % | Samples | Location                                                                 |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression:21` |

##### `convertImportDirective(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

| Change | Delta |             % | Samples | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:257` |

##### `get(Object)` (`it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap:324` |

##### `isSuccess(CandidateApplicability)` (`org.jetbrains.kotlin.resolve.calls.tower.CandidateApplicabilityKt`)

| Change | Delta |             % | Samples | Location                                                                |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.tower.CandidateApplicabilityKt:143` |

##### `hasAdditionalResolutionErrors(FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

| Change | Delta |             % | Samples | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer:2276` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -50.0% |    -3 | 100.0% |   6 → 3 | `kotlin.jvm.internal.Intrinsics:140` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |            % | Samples | Location                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:3851` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:3865` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change | Delta |            % | Samples | Location                                                             |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:700` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:722` |

##### `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |            % | Samples | Location                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeChecker:550` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeChecker:586` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |             % | Samples | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `kotlin.jvm.internal.Intrinsics:253` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change | Delta |             % | Samples | Location                            |
| ------: | ----: | ------------: | ------: | ----------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.zip.ZipFile$Source:1250` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument`)

|  Change | Delta |             % | Samples | Location                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument:5165` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:1850` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:1694` |

##### `getMyChildren()` (`org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`)

|  Change | Delta |             % | Samples | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile:63` |

##### `makeImmutable()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.FieldSet:110` |

##### `size()` (`java.util.Collections$UnmodifiableCollection`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Collections$UnmodifiableCollection:1066` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.Arrays:3482` |

##### `size()` (`kotlin.collections.AbstractMutableSet`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.collections.AbstractMutableSet:15` |

##### `<init>()` (`kotlin.collections.builders.MapBuilder`)

|  Change | Delta |             % | Samples | Location                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.collections.builders.MapBuilder:54` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` (`org.jetbrains.kotlin.parsing.KotlinLightParser`)

|  Change | Delta |             % | Samples | Location                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.KotlinLightParser:67` |

##### `convertWhenEntry(LighterASTNode, FirVariable)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:1000` |

##### `convertSimpleNameExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:1224` |

##### `getUsedAsExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:1555` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:1212` |
| removed |    -1 |  50.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:1219` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `com.intellij.lang.impl.PsiBuilderImpl:1207` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt:20` |

##### `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |             % | Samples | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer:104` |

##### `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

|  Change | Delta |             % | Samples | Location                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor:91` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

|  Change | Delta |             % | Samples | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall:45` |

##### `getCalleeReference()` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl:27` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `traverseCfg()` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change | Delta |             % | Samples | Caller      | Location                                                                       |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `analyze()` | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer` |

##### `interpretPopInstructionsForBoxedValues(RedundantBoxingInterpreter, MethodNode, Frame[])` (`org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`)

| Change | Delta |             % | Samples | Caller                          | Location                                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------- | ----------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer` |

##### `toReferenceImpl(FirExpression, FirSession)` (`org.jetbrains.kotlin.fir.expressions.ReferenceUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                       | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toResolvedCallableReferenceImpl(FirExpression, FirSession)` | `org.jetbrains.kotlin.fir.expressions.ReferenceUtilsKt` |

##### `processCandidate(Candidate, ResolutionContext, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Caller                                                                                                         | Location                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |             % | Samples | Caller                                                                                                | Location                                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Caller                                                                                                                                         | Location                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirReturnExpression`)

| Change | Delta |             % | Samples | Caller                                                            | Location                                                   |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt` |

##### `visitAnnotationCall(FirAnnotationCall, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                                           | Location                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitAnnotationCall(FirAnnotationCall, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitAnnotationContainer(FirAnnotationContainer, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                                 | Location                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------- | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitStatement(FirStatement, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |

##### `visitResolvedTypeRef(FirResolvedTypeRef, Void)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                                             | Location                                                                          |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `check(CheckerContext, DiagnosticReporter, FirStatement)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker`)

| Change | Delta |             % | Samples | Caller                                                                       | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitPropertyAccessExpression(FirPropertyAccessExpression, CheckerContext)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent` |

##### `acceptChildren(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.declarations.IrPackageFragment`)

| Change | Delta |             % | Samples | Caller                                         | Location                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `acceptChildrenVoid(IrElement, IrVisitorVoid)` | `org.jetbrains.kotlin.ir.visitors.IrVisitorsKt` |

##### `writeTo(CodedOutputStream)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change | Delta |             % | Samples | Caller                           | Location                                            |
| -----: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeDelimitedTo(OutputStream)` | `org.jetbrains.kotlin.protobuf.AbstractMessageLite` |

##### `readBytes(byte[], int, int)` (`java.io.FileInputStream`)

| Change | Delta |             % | Samples | Caller                   | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------ | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `read(byte[], int, int)` | `java.io.FileInputStream` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller   | Location                          |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `addKey$kotlin_stdlib(Object)` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |             % | Samples | Caller                | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putEntry(Map$Entry)` | `kotlin.collections.builders.MapBuilder` |

##### `reflectionData()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                      | Location          |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `privateGetPublicMethods()` | `java.lang.Class` |

##### `newArray(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |             % | Samples | Caller                    | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `newInstance(Class, int)` | `java.lang.reflect.Array` |

##### `revealDirect(MethodHandle)` (`java.lang.invoke.MethodHandles$Lookup`)

| Change | Delta |             % | Samples | Caller                                                                                                                   | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.AbstractValidatingLambdaMetafactory` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirUserTypeRefBuilder`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertUserType(KtSourceElement, LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `startsWith(String, int)` (`java.lang.String`)

| Change | Delta |             % | Samples | Caller               | Location           |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `startsWith(String)` | `java.lang.String` |

##### `next()` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBaseIterator`)

| Change | Delta |             % | Samples | Caller               | Location                       |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addAll(Collection)` | `java.util.AbstractCollection` |

##### `append(String)` (`java.lang.StringBuilder`)

| Change | Delta |             % | Samples | Caller           | Location                  |
| -----: | ----: | ------------: | ------: | ---------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `append(Object)` | `java.lang.StringBuilder` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change | Delta |             % | Samples | Caller                | Location           |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `replace(char, char)` | `java.lang.String` |

##### `<init>(Vector)` (`java.util.Vector$Itr`)

| Change | Delta |             % | Samples | Caller       | Location           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `iterator()` | `java.util.Vector` |

##### `addChild(PsiBuilderImpl$ProductionMarker)` (`com.intellij.lang.impl.PsiBuilderImpl$StartMarker`)

| Change | Delta |             % | Samples | Caller               | Location                                |
| -----: | ----: | ------------: | ------: | -------------------- | --------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.FirAnonymousFunctionExpression`)

| Change | Delta |             % | Samples | Caller                                                   | Location                                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(KtSourceElement, FirAnonymousFunction, boolean)` | `org.jetbrains.kotlin.fir.expressions.impl.FirAnonymousFunctionExpressionImpl` |

##### `convertImportDirective(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

| Change | Delta |             % | Samples | Caller                                    | Location                                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertImportDirectives(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `get(Object)` (`it.unimi.dsi.fastutil.objects.Object2ObjectOpenHashMap`)

| Change | Delta |             % | Samples | Caller                                     | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `travelPath(int, FqName, List, int, List)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl` |

##### `isSuccess(CandidateApplicability)` (`org.jetbrains.kotlin.resolve.calls.tower.CandidateApplicabilityKt`)

| Change | Delta |             % | Samples | Caller        | Location                                                              |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isSuccess()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector` |

##### `hasAdditionalResolutionErrors(FirNamedReferenceWithCandidate)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`)

| Change | Delta |             % | Samples | Caller                                                | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toResolvedReference(FirNamedReferenceWithCandidate)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| -41.3% |   -19 | 100.0% | 46 → 27 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Caller                                  | Location                         |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                      | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change | Delta |             % | Samples | Caller                                                                                                                              | Location                                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

|  Change | Delta |             % | Samples | Caller                                                                                                      | Location                                         |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `sanitizeStackTrace(Throwable)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |             % | Samples | Caller                            | Location                         |
| ------: | ----: | ------------: | ------: | --------------------------------- | -------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `available0()` (`java.io.FileInputStream`)

|  Change | Delta |             % | Samples | Caller        | Location                  |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `available()` | `java.io.FileInputStream` |

##### `checkAndAddEntry(int, int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change | Delta |             % | Samples | Caller                   | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `readBytes0(byte[], int, int)` (`java.io.RandomAccessFile`)

|  Change | Delta |             % | Samples | Caller                        | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------- | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readBytes(byte[], int, int)` | `java.io.RandomAccessFile` |

##### `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` (`jdk.internal.loader.NativeLibraries`)

| Change | Delta |      % | Samples | Caller   | Location                                                |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------- |
| -12.5% |    -1 | 100.0% |   8 → 7 | `open()` | `jdk.internal.loader.NativeLibraries$NativeLibraryImpl` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument`)

|  Change | Delta |             % | Samples | Caller                                                        | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller            | Location            |
| ------: | ----: | ------------: | ------: | ----------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getNode(Object)` | `java.util.HashMap` |

##### `computeIfAbsent(Object, Function)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                            | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getProtectionDomain(CodeSource)` | `java.security.SecureClassLoader` |

##### `isPrimitive()` (`java.lang.Class`)

|  Change | Delta |             % | Samples | Caller                        | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `leadingReferenceParameter()` | `java.lang.invoke.MethodType` |

##### `visitExport(String, int, String[])` (`org.jetbrains.kotlin.resolve.jvm.modules.JavaModuleInfo$Companion$read$1$visitModule$1`)

|  Change | Delta |             % | Samples | Caller                                                          | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readModuleAttributes(ClassVisitor, Context, int, int, String)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `getMyChildren()` (`org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile`)

|  Change | Delta |             % | Samples | Caller          | Location                                                  |
| ------: | ----: | ------------: | ------: | --------------- | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getChildren()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |

##### `registerJavaComponents(FirSession, JavaModuleResolver, FirSharableJavaComponents, boolean, InlineConstTracker)` (`org.jetbrains.kotlin.fir.session.ComponentsContainersKt`)

|  Change | Delta |             % | Samples | Caller                                                                       | Location                                                |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `registerLibrarySessionComponents(FirSession, FirJvmSessionFactory$Context)` | `org.jetbrains.kotlin.fir.session.FirJvmSessionFactory` |

##### `makeImmutable()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Caller                      | Location                                                               |
| ------: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `makeExtensionsImmutable()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `findBootstrapClass(String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                             | Location                |
| ------: | ----: | ------------: | ------: | ---------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `getClass()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller               | Location            |
| ------: | ----: | ------------: | ------: | -------------------- | ------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isValidKey(Object)` | `java.util.EnumMap` |

##### `size()` (`java.util.Collections$UnmodifiableCollection`)

|  Change | Delta |             % | Samples | Caller               | Location                                      |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getArgumentCount()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `refersTo0(Object)` (`java.lang.ref.Reference`)

|  Change | Delta |             % | Samples | Caller                 | Location                  |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `refersToImpl(Object)` | `java.lang.ref.Reference` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Caller      | Location              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `grow(int)` | `java.util.ArrayList` |

##### `size()` (`kotlin.collections.AbstractMutableSet`)

|  Change | Delta |             % | Samples | Caller             | Location                              |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `contains(Object)` | `org.jetbrains.kotlin.utils.SmartSet` |

##### `clone()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller    | Location                      |
| ------: | ----: | ------------: | ------: | --------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `clone()` | `java.lang.invoke.MemberName` |

##### `<init>()` (`kotlin.collections.builders.MapBuilder`)

|  Change | Delta |             % | Samples | Caller     | Location                                 |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>()` | `kotlin.collections.builders.SetBuilder` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Caller                                                                        | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` (`org.jetbrains.kotlin.parsing.KotlinLightParser`)

|  Change | Delta |             % | Samples | Caller                                                                                                              | Location                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `reportErrors(LighterASTNode, FlyweightCapableTreeStructure, KotlinLightParser$LightTreeParsingErrorListener, Ref)` | `org.jetbrains.kotlin.parsing.KotlinLightParser` |

##### `convertWhenEntry(LighterASTNode, FirVariable)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertWhenExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `convertSimpleNameExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `getUsedAsExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertWhenExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

| Change | Delta |      % | Samples | Caller               | Location                                |
| -----: | ----: | -----: | ------: | -------------------- | --------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |             % | Samples | Caller                                          | Location                                                 |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformDeclarations(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |

##### `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |             % | Samples | Caller                                                                           | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformPropertyAccessExpression(FirPropertyAccessExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `<init>(Visibility, Modality, EffectiveVisibility)` (`org.jetbrains.kotlin.fir.declarations.impl.FirResolvedDeclarationStatusImpl`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                       | Location                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change | Delta |             % | Samples | Caller                                                                         | Location                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `consumeCandidate(FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                 | Location                                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `consumeCandidate$default(TowerLevelProcessor, FirBasedSymbol, FirExpression, FirExpression, FirScope, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelProcessor` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

|  Change | Delta |             % | Samples | Caller                                                | Location                                                 |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformSingle(FirElement, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `getCalleeReference()` (`org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`)

|  Change | Delta |             % | Samples | Caller                                                 | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `completeCall(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

##### Standard library

| Change | Delta |           % | Samples | Function                                                                  | Location                                                |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `readBytes(byte[], int, int)`                                             | `java.io.FileInputStream`                               |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `read(byte[], int, int)`                                                  | `java.io.FileInputStream`                               |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `fill()`                                                                  | `java.io.BufferedInputStream`                           |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `read1(byte[], int, int)`                                                 | `java.io.BufferedInputStream`                           |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `nextNode()`                                                              | `java.util.HashMap$HashIterator`                        |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `next()`                                                                  | `java.util.HashMap$ValueIterator`                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `listFiles(FilenameFilter)`                                               | `java.io.File`                                          |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `addKey$kotlin_stdlib(Object)`                                            | `kotlin.collections.builders.MapBuilder`                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `putEntry(Map$Entry)`                                                     | `kotlin.collections.builders.MapBuilder`                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `putAllEntries(Collection)`                                               | `kotlin.collections.builders.MapBuilder`                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `putAll(Map)`                                                             | `kotlin.collections.builders.MapBuilder`                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `reflectionData()`                                                        | `java.lang.Class`                                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `privateGetPublicMethods()`                                               | `java.lang.Class`                                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `getMethods()`                                                            | `java.lang.Class`                                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `referencedTypes(ClassLoader, List)`                                      | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(ClassLoader, List)`                                               | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(ClassLoader, Class)`                                              | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy`                               |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `apply(Object, Object)`                                                   | `java.lang.reflect.Proxy$$Lambda.0x000000b00107c650`    |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `get()`                                                                   | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |

##### Ours

|  Change | Delta |            % | Samples | Function                                                                                                                                                                    | Location                                                                                                                  |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  +35.7% |    +5 | 8.6% → 18.3% | 14 → 19 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                                                           |
|  +35.7% |    +5 | 8.6% → 18.3% | 14 → 19 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                                                           |
|  +45.5% |    +5 | 6.7% → 15.4% | 11 → 16 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`                                                       |
|  +33.3% |    +4 | 7.4% → 15.4% | 12 → 16 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                   |
|  +33.3% |    +4 | 7.4% → 15.4% | 12 → 16 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                                                    |
|  +33.3% |    +4 | 7.4% → 15.4% | 12 → 16 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                                                    |
|  +30.0% |    +3 | 6.1% → 12.5% | 10 → 13 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                   |
| +150.0% |    +3 |  1.2% → 4.8% |   2 → 5 | `performTransformations(MethodNode)`                                                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                                     |
| +150.0% |    +3 |  1.2% → 4.8% |   2 → 5 | `visitEnd()`                                                                                                                                                                | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`                                                                |
| +150.0% |    +3 |  1.2% → 4.8% |   2 → 5 | `visitEnd()`                                                                                                                                                                | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                                           |
| +300.0% |    +3 |  0.6% → 3.8% |   1 → 4 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                            | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                           |
| +300.0% |    +3 |  0.6% → 3.8% |   1 → 4 | `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                                                                          | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                           |
| +300.0% |    +3 |  0.6% → 3.8% |   1 → 4 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)`                                                                                                             | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                                                   |
| +300.0% |    +3 |  0.6% → 3.8% |   1 → 4 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)`                                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$typeMapper$1`                                                      |
| +300.0% |    +3 |  0.6% → 3.8% |   1 → 4 | `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)`                                                                          | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                                                   |
|     new |    +3 |  0.0% → 2.9% |   0 → 3 | `mapSignature(IrFunction, boolean, boolean, boolean)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                                          |
|     new |    +3 |  0.0% → 2.9% |   0 → 3 | `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)`                                                                           | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                                          |
|     new |    +3 |  0.0% → 2.9% |   0 → 3 | `mapSignatureWithGeneric(IrFunction)`                                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`                                                          |
|     new |    +3 |  0.0% → 2.9% |   0 → 3 | `mapClassType(TypeSystemCommonBackendContextForTypeMapping, TypeConstructorMarker, TypeMappingMode, RigidTypeMarker, TypeMappingContext, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                           |
|  +40.0% |    +2 |  3.1% → 6.7% |   5 → 7 | `invoke()`                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016768e8` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % | Samples | Function                                                                                                                                                                                                                                                 | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -25.5% |   -24 | 57.7% → 67.3% | 94 → 70 | `run(String[])`                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -25.5% |   -24 | 57.7% → 67.3% | 94 → 70 | `main(String[])`                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -41.3% |   -19 | 28.2% → 26.0% | 46 → 27 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                                                                                                                                                                            | `java.util.zip.Inflater`                                                                                 |
| -41.3% |   -19 | 28.2% → 26.0% | 46 → 27 | `inflate(byte[], int, int)`                                                                                                                                                                                                                              | `java.util.zip.Inflater`                                                                                 |
| -39.1% |   -18 | 28.2% → 26.9% | 46 → 28 | `read(byte[], int, int)`                                                                                                                                                                                                                                 | `java.util.zip.InflaterInputStream`                                                                      |
| -39.1% |   -18 | 28.2% → 26.9% | 46 → 28 | `read(byte[], int, int)`                                                                                                                                                                                                                                 | `java.util.zip.ZipInputStream`                                                                           |
| -39.1% |   -18 | 28.2% → 26.9% | 46 → 28 | `read(byte[])`                                                                                                                                                                                                                                           | `java.io.FilterInputStream`                                                                              |
| -36.2% |   -17 |         28.8% | 47 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
| -36.2% |   -17 |         28.8% | 47 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
| -58.6% |   -17 | 17.8% → 11.5% | 29 → 12 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -59.3% |   -16 | 16.6% → 10.6% | 27 → 11 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                               |
| -50.0% |   -15 | 18.4% → 14.4% | 30 → 15 | `transformInplace(List, FirTransformer, Object)`                                                                                                                                                                                                         | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                 |
| -68.2% |   -15 |  13.5% → 6.7% |  22 → 7 | `resumeWith(Object)`                                                                                                                                                                                                                                     | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                                    |
| -57.7% |   -15 | 16.0% → 10.6% | 26 → 11 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -70.0% |   -14 |  12.3% → 5.8% |  20 → 6 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)`                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                         |
| -63.6% |   -14 |  13.5% → 7.7% |  22 → 8 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -63.6% |   -14 |  13.5% → 7.7% |  22 → 8 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -56.0% |   -14 | 15.3% → 10.6% | 25 → 11 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -56.0% |   -14 | 15.3% → 10.6% | 25 → 11 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -56.0% |   -14 | 15.3% → 10.6% | 25 → 11 | `transformBlock(FirBlock, Object)`                                                                                                                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                    | Location                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
|  -41.3% |   -19 | 28.2% → 26.0% | 46 → 27 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`               | `java.util.zip.Inflater`                              |
|  -41.3% |   -19 | 28.2% → 26.0% | 46 → 27 | `inflate(byte[], int, int)`                                                 | `java.util.zip.Inflater`                              |
|  -39.1% |   -18 | 28.2% → 26.9% | 46 → 28 | `read(byte[], int, int)`                                                    | `java.util.zip.InflaterInputStream`                   |
|  -39.1% |   -18 | 28.2% → 26.9% | 46 → 28 | `read(byte[], int, int)`                                                    | `java.util.zip.ZipInputStream`                        |
|  -39.1% |   -18 | 28.2% → 26.9% | 46 → 28 | `read(byte[])`                                                              | `java.io.FilterInputStream`                           |
|  -68.2% |   -15 |  13.5% → 6.7% |  22 → 7 | `resumeWith(Object)`                                                        | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  -20.4% |   -11 | 33.1% → 41.3% | 54 → 43 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000b001001c00`  |
|  -20.8% |   -11 | 32.5% → 40.4% | 53 → 42 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001010000`   |
|  -20.8% |   -11 | 32.5% → 40.4% | 53 → 42 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                    |
|  -18.0% |    -9 | 30.7% → 39.4% | 50 → 41 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  -18.0% |    -9 | 30.7% → 39.4% | 50 → 41 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  -18.4% |    -9 | 30.1% → 38.5% | 49 → 40 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                            |
|  -62.5% |    -5 |   4.9% → 2.9% |   8 → 3 | `throwParameterIsNullNPE(String)`                                           | `kotlin.jvm.internal.Intrinsics`                      |
|  -62.5% |    -5 |   4.9% → 2.9% |   8 → 3 | `checkNotNullParameter(Object, String)`                                     | `kotlin.jvm.internal.Intrinsics`                      |
| removed |    -4 |   2.5% → 0.0% |   4 → 0 | `loadClass(String, boolean)`                                                | `java.lang.ClassLoader`                               |
| removed |    -3 |   1.8% → 0.0% |   3 → 0 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                      |
| removed |    -3 |   1.8% → 0.0% |   3 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                      |
| removed |    -3 |   1.8% → 0.0% |   3 → 0 | `getValue()`                                                                | `kotlin.SafePublicationLazyImpl`                      |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                        |
| removed |    -2 |   1.2% → 0.0% |   2 → 0 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                        |

##### Ours

| Change | Delta |             % | Samples | Function                                                                                                                                                                                                                                                 | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -25.5% |   -24 | 57.7% → 67.3% | 94 → 70 | `run(String[])`                                                                                                                                                                                                                                          | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -25.5% |   -24 | 57.7% → 67.3% | 94 → 70 | `main(String[])`                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.preloading.Preloader`                                                              |
| -36.2% |   -17 |         28.8% | 47 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
| -36.2% |   -17 |         28.8% | 47 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                   |
| -58.6% |   -17 | 17.8% → 11.5% | 29 → 12 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -59.3% |   -16 | 16.6% → 10.6% | 27 → 11 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                                                                                                                                        | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                               |
| -50.0% |   -15 | 18.4% → 14.4% | 30 → 15 | `transformInplace(List, FirTransformer, Object)`                                                                                                                                                                                                         | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                 |
| -57.7% |   -15 | 16.0% → 10.6% | 26 → 11 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -70.0% |   -14 |  12.3% → 5.8% |  20 → 6 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)`                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                         |
| -63.6% |   -14 |  13.5% → 7.7% |  22 → 8 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -63.6% |   -14 |  13.5% → 7.7% |  22 → 8 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -56.0% |   -14 | 15.3% → 10.6% | 25 → 11 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -56.0% |   -14 | 15.3% → 10.6% | 25 → 11 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -56.0% |   -14 | 15.3% → 10.6% | 25 → 11 | `transformBlock(FirBlock, Object)`                                                                                                                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -65.0% |   -13 |  12.3% → 6.7% |  20 → 7 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -65.0% |   -13 |  12.3% → 6.7% |  20 → 7 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
| -65.0% |   -13 |  12.3% → 6.7% |  20 → 7 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
| -61.9% |   -13 |  12.9% → 7.7% |  21 → 8 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
| -68.4% |   -13 |  11.7% → 5.8% |  19 → 6 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| -68.4% |   -13 |  11.7% → 5.8% |  19 → 6 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                      | Location                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +45.5% |    +5 | 78.6% → 84.2% | 11 → 16 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |      % | Samples | Callee                                    | Location                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------- | --------------------------------------------------------------- |
| +35.7% |    +5 | 100.0% | 14 → 19 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change | Delta |      % | Samples | Callee                                            | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------------ |
| +45.5% |    +5 | 100.0% | 11 → 16 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change | Delta |             % | Samples | Callee                                     | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| +30.0% |    +3 | 83.3% → 81.3% | 10 → 13 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| +50.0% |    +1 | 16.7% → 18.8% |   2 → 3 | `generateAnnotations()`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change | Delta |      % | Samples | Callee       | Location                                                |
| -----: | ----: | -----: | ------: | ------------ | ------------------------------------------------------- |
| +33.3% |    +4 | 100.0% | 12 → 16 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
| +33.3% |    +4 | 100.0% | 12 → 16 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change | Delta |             % | Samples | Callee                  | Location                                          |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------- |
| +150.0% |    +3 | 20.0% → 38.5% |   2 → 5 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

##### `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|  Change | Delta |      % | Samples | Callee                          | Location                                                                           |
| ------: | ----: | -----: | ------: | ------------------------------- | ---------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |

##### `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`)

|  Change | Delta |      % | Samples | Callee                               | Location                                                              |
| ------: | ----: | -----: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `performTransformations(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

|  Change | Delta |      % | Samples | Callee       | Location                                                   |
| ------: | ----: | -----: | ------: | ------------ | ---------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `visitEnd()` | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor` |

##### `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                      | Location                                                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `mapClassType(TypeSystemCommonBackendContextForTypeMapping, TypeConstructorMarker, TypeMappingMode, RigidTypeMarker, TypeMappingContext, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper`         |
|     new |    +2 |  0.0% → 50.0% |   0 → 2 | `writeGenericType(JvmDescriptorTypeWriter, KotlinTypeMarker, Type, TypeMappingMode)`                                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `boxTypeIfNeeded(Type, boolean)`                                                                                                                                            | `org.jetbrains.kotlin.types.AbstractTypeMapper`         |
|     new |    +1 |  0.0% → 25.0% |   0 → 1 | `append(Object)`                                                                                                                                                            | `java.lang.StringBuilder`                               |

##### `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

|  Change | Delta |      % | Samples | Callee                                                                                                                                           | Location                                        |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper` |

##### `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|  Change | Delta |      % | Samples | Callee                                                                                             | Location                                        |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper` |

##### `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$typeMapper$1`)

|  Change | Delta |      % | Samples | Callee                                                          | Location                                                |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------- | ------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `mapType$default(IrTypeMapper, IrType, TypeMappingMode, JvmSignatureWriter, boolean, int, Object)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|  Change | Delta |      % | Samples | Callee                                                          | Location                                                             |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$typeMapper$1` |

##### `mapSignature(IrFunction, boolean, boolean, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change | Delta |            % | Samples | Callee                                                                                                    | Location                                                         |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `writeParameter(JvmSignatureWriter, WritingParameterToGenericSignatureMode, IrType, IrFunction, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `writeFormalTypeParameters(List, JvmSignatureWriter)`                                                     | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`          |

##### `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change | Delta |             % | Samples | Callee                                                | Location                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `mapSignature(IrFunction, boolean, boolean, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `mapSignatureWithGeneric(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper`)

| Change | Delta |             % | Samples | Callee                                                                                            | Location                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `mapSignature$default(MethodSignatureMapper, IrFunction, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `mapClassType(TypeSystemCommonBackendContextForTypeMapping, TypeConstructorMarker, TypeMappingMode, RigidTypeMarker, TypeMappingContext, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

| Change | Delta |            % | Samples | Callee                                                                               | Location                                                |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `getClassInternalName(TypeConstructorMarker)`                                        | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `writeGenericType(JvmDescriptorTypeWriter, KotlinTypeMarker, Type, TypeMappingMode)` | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016768e8`)

|  Change | Delta |             % | Samples | Callee                                                                                                         | Location                                                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|     new |    +7 | 0.0% → 100.0% |   0 → 7 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `read(byte[], int, int)` (`java.io.FileInputStream`)

| Change | Delta |             % | Samples | Callee                        | Location                  |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `fill()` (`java.io.BufferedInputStream`)

| Change | Delta |             % | Samples | Callee                   | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------ | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `read(byte[], int, int)` | `java.io.FileInputStream` |

##### `read1(byte[], int, int)` (`java.io.BufferedInputStream`)

| Change | Delta |             % | Samples | Callee   | Location                      |
| -----: | ----: | ------------: | ------: | -------- | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `fill()` | `java.io.BufferedInputStream` |

##### `next()` (`java.util.HashMap$ValueIterator`)

| Change | Delta |             % | Samples | Callee       | Location                         |
| -----: | ----: | ------------: | ------: | ------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `nextNode()` | `java.util.HashMap$HashIterator` |

##### `listFiles(FilenameFilter)` (`java.io.File`)

| Change | Delta |             % | Samples | Callee             | Location       |
| -----: | ----: | ------------: | ------: | ------------------ | -------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `normalizedList()` | `java.io.File` |

##### `putEntry(Map$Entry)` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |             % | Samples | Callee                         | Location                                 |
| -----: | ----: | ------------: | ------: | ------------------------------ | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `addKey$kotlin_stdlib(Object)` | `kotlin.collections.builders.MapBuilder` |

##### `putAllEntries(Collection)` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |             % | Samples | Callee                | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putEntry(Map$Entry)` | `kotlin.collections.builders.MapBuilder` |

##### `putAll(Map)` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |             % | Samples | Callee                      | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putAllEntries(Collection)` | `kotlin.collections.builders.MapBuilder` |

##### `privateGetPublicMethods()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Callee             | Location          |
| -----: | ----: | ------------: | ------: | ------------------ | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `reflectionData()` | `java.lang.Class` |

##### `getMethods()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Callee                      | Location          |
| -----: | ----: | ------------: | ------: | --------------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `privateGetPublicMethods()` | `java.lang.Class` |

##### `referencedTypes(ClassLoader, List)` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Callee         | Location          |
| -----: | ----: | ------------: | ------: | -------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getMethods()` | `java.lang.Class` |

##### `<init>(ClassLoader, List)` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Callee                               | Location                               |
| -----: | ----: | ------------: | ------: | ------------------------------------ | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `referencedTypes(ClassLoader, List)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `<init>(ClassLoader, Class)` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Callee                      | Location                               |
| -----: | ----: | ------------: | ------: | --------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ClassLoader, List)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` (`java.lang.reflect.Proxy`)

| Change | Delta |             % | Samples | Callee                       | Location                               |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ClassLoader, Class)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `apply(Object, Object)` (`java.lang.reflect.Proxy$$Lambda.0x000000b00107c650`)

| Change | Delta |             % | Samples | Callee                                                                    | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy` |

##### `get()` (`jdk.internal.loader.AbstractClassLoaderValue$Memoizer`)

| Change | Delta |             % | Samples | Callee                  | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `java.lang.reflect.Proxy$$Lambda.0x000000b00107c650` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |             % | Samples | Callee                                                                       | Location                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| -36.2% |   -17 | 50.0% → 42.9% | 47 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| -14.9% |    -7 | 50.0% → 57.1% | 47 → 40 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % | Samples | Callee          | Location                                    |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------------- |
| -25.5% |   -24 | 100.0% | 94 → 70 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| -41.3% |   -19 | 100.0% | 46 → 27 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |             % | Samples | Callee                      | Location                 |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------ |
| -40.0% |   -18 | 97.8% → 96.4% | 45 → 27 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

| Change | Delta |      % | Samples | Callee                   | Location                            |
| -----: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
| -39.1% |   -18 | 100.0% | 46 → 28 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Callee                   | Location                       |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------ |
| -39.1% |   -18 | 100.0% | 46 → 28 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |             % | Samples | Callee         | Location                          |
| -----: | ----: | ------------: | ------: | -------------- | --------------------------------- |
| -39.1% |   -18 | 97.9% → 93.3% | 46 → 28 | `read(byte[])` | `java.io.FilterInputStream`       |
|    new |    +1 |   0.0% → 3.3% |   0 → 1 | `next()`       | `java.util.HashMap$ValueIterator` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |      % | Samples | Callee                                                  | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| -36.2% |   -17 | 100.0% | 47 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                         | Location                                                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -73.7% |   -14 | 65.5% → 41.7% |  19 → 5 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                      |
|  -40.0% |    -2 | 17.2% → 25.0% |   5 → 3 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                 |
| removed |    -2 |   6.9% → 0.0% |   2 → 0 | `transformExplicitReceiverOf(FirQualifiedAccessExpression)`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|     new |    +2 |  0.0% → 16.7% |   0 → 2 | `exitFunctionCall(FirFunctionCall, boolean)`                                                                                                   | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                    |
| removed |    -1 |   3.4% → 0.0% |   1 → 0 | `addSmartcastIfNeeded(FirExpression, ResolutionMode)`                                                                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

|  Change | Delta |             % | Samples | Callee                              | Location                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------- |
|  -62.5% |    -5 | 29.6% → 27.3% |   8 → 3 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`        |
|  -83.3% |    -5 |  22.2% → 9.1% |   6 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`      |
|  -40.0% |    -4 | 37.0% → 54.5% |  10 → 6 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression`    |
|  -75.0% |    -3 |  14.8% → 9.1% |   4 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirAugmentedAssignment` |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirBlock`               |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

| Change | Delta |             % | Samples | Callee                              | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------ |
| -66.7% |    -6 | 30.0% → 20.0% |   9 → 3 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`               |
| -50.0% |    -2 |         13.3% |   4 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`           |
| -16.7% |    -2 | 40.0% → 66.7% | 12 → 10 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |
| -66.7% |    -2 |  10.0% → 6.7% |   3 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`            |
| -40.0% |    -2 | 16.7% → 20.0% |   5 → 3 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
|  -80.0% |   -12 | 68.2% → 42.9% |  15 → 3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                         |
|  -70.0% |    -7 | 45.5% → 42.9% |  10 → 3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                      |
|  -50.0% |    -1 |  9.1% → 14.3% |   2 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |
| removed |    -1 |   4.5% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$4`                      |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                      |

##### `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                                            | Location                                                   |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| -57.7% |   -15 | 100.0% | 26 → 11 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt` |

##### `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`)

|  Change | Delta |             % | Samples | Callee                                                   | Location                                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------------------------------------ |
|  -80.0% |    -8 | 50.0% → 33.3% |  10 → 2 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                  |
|  -75.0% |    -6 | 40.0% → 33.3% |   8 → 2 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |
| removed |    -1 |   5.0% → 0.0% |   1 → 0 | `processPropertiesByName(CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                  |
| +100.0% |    +1 |  5.0% → 33.3% |   1 → 2 | `processPropertiesByName(CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |              % | Samples | Callee                                                                                                                  | Location                                                        |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|  -61.9% |   -13 | 95.5% → 100.0% |  21 → 8 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `reduceCandidates(CandidateCollector, ResolutionContext)`                                                               | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`        |

##### `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                                                                                                                             | Location                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| -63.6% |   -14 | 100.0% |  22 → 8 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                                                                | Location                                                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                     | Location                                                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `transformBlock(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                     | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -56.0% |   -14 | 100.0% | 25 → 11 | `transformBlock(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b001001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                     |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------------------------- |
| -20.4% |   -11 | 100.0% | 54 → 43 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b001010000`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| -20.8% |   -11 | 100.0% | 53 → 42 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| -20.8% |   -11 | 100.0% | 53 → 42 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b001010000` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| -18.0% |    -9 | 100.0% | 50 → 41 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| -18.0% |    -9 | 100.0% | 50 → 41 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

|  Change | Delta |           % | Samples | Callee                     | Location                                          |
| ------: | ----: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
|  -18.4% |    -9 |      100.0% | 49 → 40 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
| removed |    -1 | 2.0% → 0.0% |   1 → 0 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Callee                          | Location                         |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------------------------- |
| removed |    -2 | 25.0% → 0.0% |   2 → 0 | `sanitizeStackTrace(Throwable)` | `kotlin.jvm.internal.Intrinsics` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Callee                            | Location                         |
| -----: | ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| -62.5% |    -5 | 100.0% |   8 → 3 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |            % | Samples | Callee                             | Location                                                 |
| ------: | ----: | -----------: | ------: | ---------------------------------- | -------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `findClass(String)`                | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `findClass(String)`                | `java.net.URLClassLoader`                                |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `findBootstrapClassOrNull(String)` | `java.lang.ClassLoader`                                  |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change | Delta |            % | Samples | Callee  | Location                                       |
| ------: | ----: | -----------: | ------: | ------- | ---------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `run()` | `jdk.internal.loader.URLClassPath$3`           |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `run()` | `java.net.URLClassLoader$1`                    |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

|  Change | Delta |             % | Samples | Callee                                                                      | Location                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change | Delta |            % | Samples | Callee     | Location                                                                                                   |
| ------: | ----: | -----------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000700164ae20`          |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015fa9c0` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x0000007001631120`           |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000007001632230`                      |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x0000007001652ae0`            |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change | Delta |            % | Samples | Callee                                | Location                       |
| ------: | ----: | -----------: | ------: | ------------------------------------- | ------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `initCEN(int, ZipCoder)`              | `java.util.zip.ZipFile$Source` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `readFullyAt(byte[], int, int, long)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change | Delta |             % | Samples | Callee                                          | Location                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |              % | Samples | Callee                                                                                                      | Location                                                              |
| -----: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| -70.0% |   -14 | 100.0% → 85.7% |  20 → 6 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`      |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `isSuccess()`                                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change | Delta |      % | Samples | Callee                                                                               | Location                                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -65.0% |   -13 | 100.0% |  20 → 7 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `resumeTask(TowerResolveManager$SuspendedResolverTask)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change | Delta |      % | Samples | Callee               | Location                                              |
| -----: | ----: | -----: | ------: | -------------------- | ----------------------------------------------------- |
| -65.0% |   -13 | 100.0% |  20 → 7 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

|  Change | Delta |              % | Samples | Callee                                                                           | Location                                                            |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  -60.0% |   -12 | 95.2% → 100.0% |  20 → 8 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`     |
| removed |    -1 |    4.8% → 0.0% |   1 → 0 | `<init>(ResolutionContext, CallInfo)`                                            | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |              % | Samples | Callee                                                                                                                                                                                                                                                   | Location                                                 |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -73.7% |   -14 | 100.0% → 83.3% |  19 → 5 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |      % | Samples | Callee                                                                                                   | Location                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -68.4% |   -13 | 100.0% |  19 → 6 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

# Allocated heap profile diff

Allocated 684 MiB → 683 MiB (-279.992 KiB, ~0%) over 1,048 samples → 859 samples (668 KiB → 815 KiB per sample).

| Category         | Change |      Delta |             % |                Size |   Samples |
| ---------------- | -----: | ---------: | ------------: | ------------------: | --------: |
| Standard library |  +1.4% | +7.037 MiB | 76.2% → 77.3% |   521 MiB → 528 MiB | 737 → 542 |
| Ours             |  -4.5% | -7.305 MiB | 23.8% → 22.7% |   162 MiB → 155 MiB | 301 → 310 |
| Unknown          | -15.1% | -5.226 KiB |         <0.1% | 34.7 KiB → 29.4 KiB |    10 → 7 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                 Size |   Samples | Function                                                                                              | Location                                                                     |
| ------: | -----------: | ------------: | -------------------: | --------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +110.8% | +101.528 MiB | 13.4% → 28.3% |   91.6 MiB → 193 MiB | 163 → 104 | `copyOf(byte[], int)`                                                                                 | `java.util.Arrays`                                                           |
|     new |  +59.561 MiB |   0.0% → 8.7% |       0 B → 59.6 MiB |     0 → 1 | `addConstantMemberReference(int, String, String, String)`                                             | `jdk.internal.org.objectweb.asm.SymbolTable`                                 |
|  +33.1% |   +4.115 MiB |   1.8% → 2.4% |  12.4 MiB → 16.5 MiB |   24 → 32 | `copyOfRangeByte(byte[], int, int)`                                                                   | `java.util.Arrays`                                                           |
|  +67.8% |   +3.607 MiB |   0.8% → 1.3% |  5.32 MiB → 8.93 MiB |   11 → 16 | `newInstance(OutputStream, int)`                                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                            |
|     new |   +3.478 MiB |   0.0% → 0.5% |       0 B → 3.48 MiB |     0 → 7 | `<init>(InputStream)`                                                                                 | `org.jetbrains.kotlin.protobuf.CodedInputStream`                             |
|  +25.6% |   +3.462 MiB |   2.0% → 2.5% |    13.5 MiB → 17 MiB |   31 → 35 | `iterator()`                                                                                          | `java.util.ArrayList`                                                        |
| +100.0% |   +2.495 MiB |   0.4% → 0.7% |   2.5 MiB → 4.99 MiB |    5 → 10 | `<init>(int)`                                                                                         | `java.lang.AbstractStringBuilder`                                            |
|     new |   +2.113 MiB |   0.0% → 0.3% |       0 B → 2.11 MiB |     0 → 4 | `readUtf(int, int, char[])`                                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                |
| +200.0% |   +1.996 MiB |   0.1% → 0.4% | 1,022 KiB → 2.99 MiB |     2 → 6 | `<init>()`                                                                                            | `kotlin.collections.builders.SetBuilder`                                     |
|     new |   +1.729 MiB |   0.0% → 0.3% |       0 B → 1.73 MiB |     0 → 4 | `listIterator()`                                                                                      | `java.util.ArrayList`                                                        |
| +300.0% |   +1.497 MiB |   0.1% → 0.3% |      511 KiB → 2 MiB |     1 → 4 | `createScope(IrSymbolOwner)`                                                                          | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`    |
|     new |   +1.497 MiB |   0.0% → 0.2% |        0 B → 1.5 MiB |     0 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`                        |
|     new |   +1.497 MiB |   0.0% → 0.2% |        0 B → 1.5 MiB |     0 → 3 | `getLabel()`                                                                                          | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                             |
|     new |   +1.496 MiB |   0.0% → 0.2% |        0 B → 1.5 MiB |     0 → 3 | `createConstraintSystem(Function2)`                                                                   | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents`             |
|  +50.0% |   +1.496 MiB |   0.4% → 0.7% |  2.99 MiB → 4.49 MiB |     6 → 8 | `<init>(int)`                                                                                         | `java.util.ArrayList`                                                        |
|  +23.3% |   +1.393 MiB |   0.9% → 1.1% |  5.99 MiB → 7.38 MiB |   12 → 16 | `<init>(int, float, boolean)`                                                                         | `java.util.HashSet`                                                          |
|  +62.5% |   +1.247 MiB |   0.3% → 0.5% |     2 MiB → 3.24 MiB |     4 → 6 | `allocateUninitializedArray(Class, int)`                                                              | `jdk.internal.misc.Unsafe`                                                   |
| +367.2% |   +1.176 MiB |  <0.1% → 0.2% |    328 KiB → 1.5 MiB |     1 → 3 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
|     new |   +1.052 MiB |   0.0% → 0.2% |       0 B → 1.05 MiB |     0 → 2 | `<init>()`                                                                                            | `org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder`       |
|     new |   +1.004 MiB |   0.0% → 0.1% |          0 B → 1 MiB |     0 → 2 | `compress(char[], int, int)`                                                                          | `java.lang.StringUTF16`                                                      |

##### Standard library

|  Change |          Delta |             % |                 Size |   Samples | Function                                                  | Location                                             |
| ------: | -------------: | ------------: | -------------------: | --------: | --------------------------------------------------------- | ---------------------------------------------------- |
| +110.8% |   +101.528 MiB | 13.4% → 28.3% |   91.6 MiB → 193 MiB | 163 → 104 | `copyOf(byte[], int)`                                     | `java.util.Arrays`                                   |
|     new |    +59.561 MiB |   0.0% → 8.7% |       0 B → 59.6 MiB |     0 → 1 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable`         |
|  +33.1% |     +4.115 MiB |   1.8% → 2.4% |  12.4 MiB → 16.5 MiB |   24 → 32 | `copyOfRangeByte(byte[], int, int)`                       | `java.util.Arrays`                                   |
|  +25.6% |     +3.462 MiB |   2.0% → 2.5% |    13.5 MiB → 17 MiB |   31 → 35 | `iterator()`                                              | `java.util.ArrayList`                                |
| +100.0% |     +2.495 MiB |   0.4% → 0.7% |   2.5 MiB → 4.99 MiB |    5 → 10 | `<init>(int)`                                             | `java.lang.AbstractStringBuilder`                    |
| +200.0% |     +1.996 MiB |   0.1% → 0.4% | 1,022 KiB → 2.99 MiB |     2 → 6 | `<init>()`                                                | `kotlin.collections.builders.SetBuilder`             |
|     new |     +1.729 MiB |   0.0% → 0.3% |       0 B → 1.73 MiB |     0 → 4 | `listIterator()`                                          | `java.util.ArrayList`                                |
|  +50.0% |     +1.496 MiB |   0.4% → 0.7% |  2.99 MiB → 4.49 MiB |     6 → 8 | `<init>(int)`                                             | `java.util.ArrayList`                                |
|  +23.3% |     +1.393 MiB |   0.9% → 1.1% |  5.99 MiB → 7.38 MiB |   12 → 16 | `<init>(int, float, boolean)`                             | `java.util.HashSet`                                  |
|  +62.5% |     +1.247 MiB |   0.3% → 0.5% |     2 MiB → 3.24 MiB |     4 → 6 | `allocateUninitializedArray(Class, int)`                  | `jdk.internal.misc.Unsafe`                           |
|     new |     +1.004 MiB |   0.0% → 0.1% |          0 B → 1 MiB |     0 → 2 | `compress(char[], int, int)`                              | `java.lang.StringUTF16`                              |
|     new | +1,021.984 KiB |   0.0% → 0.1% |      0 B → 1,022 KiB |     0 → 1 | `wrap(byte[], int, int)`                                  | `java.nio.ByteBuffer`                                |
|     new | +1,021.984 KiB |   0.0% → 0.1% |      0 B → 1,022 KiB |     0 → 2 | `next()`                                                  | `kotlin.collections.IndexingIterator`                |
|     new | +1,021.984 KiB |   0.0% → 0.1% |      0 B → 1,022 KiB |     0 → 2 | `iterator()`                                              | `kotlin.sequences.GeneratorSequence`                 |
|     new | +1,021.976 KiB |   0.0% → 0.1% |      0 B → 1,022 KiB |     0 → 1 | `wrapperName(Wrapper)`                                    | `java.lang.invoke.TypeConvertingMethodAdapter`       |
|  +66.7% | +1,021.882 KiB |   0.2% → 0.4% |   1.5 MiB → 2.49 MiB |     3 → 4 | `initClassName()`                                         | `java.lang.Class`                                    |
| +200.3% | +1,021.554 KiB |   0.1% → 0.2% |    510 KiB → 1.5 MiB |     2 → 3 | `<init>(int)`                                             | `jdk.internal.org.objectweb.asm.ByteVector`          |
|  +33.3% |   +849.296 KiB |   0.4% → 0.5% |  2.49 MiB → 3.32 MiB |     6 → 7 | `enlarge(int)`                                            | `jdk.internal.org.objectweb.asm.ByteVector`          |
|     new |   +839.078 KiB |   0.0% → 0.1% |        0 B → 839 KiB |     0 → 1 | `asList(Object[])`                                        | `java.util.Arrays`                                   |
| +151.3% |   +615.226 KiB |          0.1% |  407 KiB → 1,022 KiB |     1 → 2 | `createListBuilder()`                                     | `kotlin.collections.CollectionsKt__CollectionsJVMKt` |

##### Ours

|  Change |          Delta |            % |                Size | Samples | Function                                                                                              | Location                                                                        |
| ------: | -------------: | -----------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +67.8% |     +3.607 MiB |  0.8% → 1.3% | 5.32 MiB → 8.93 MiB | 11 → 16 | `newInstance(OutputStream, int)`                                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                               |
|     new |     +3.478 MiB |  0.0% → 0.5% |      0 B → 3.48 MiB |   0 → 7 | `<init>(InputStream)`                                                                                 | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                |
|     new |     +2.113 MiB |  0.0% → 0.3% |      0 B → 2.11 MiB |   0 → 4 | `readUtf(int, int, char[])`                                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                   |
| +300.0% |     +1.497 MiB |  0.1% → 0.3% |     511 KiB → 2 MiB |   1 → 4 | `createScope(IrSymbolOwner)`                                                                          | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`       |
|     new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`                           |
|     new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `getLabel()`                                                                                          | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                |
|     new |     +1.496 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `createConstraintSystem(Function2)`                                                                   | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents`                |
| +367.2% |     +1.176 MiB | <0.1% → 0.2% |   328 KiB → 1.5 MiB |   1 → 3 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`    |
|     new |     +1.052 MiB |  0.0% → 0.2% |      0 B → 1.05 MiB |   0 → 2 | `<init>()`                                                                                            | `org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder`          |
| +200.0% | +1,021.992 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |   1 → 3 | `newFieldSet()`                                                                                       | `org.jetbrains.kotlin.protobuf.FieldSet`                                        |
|     new | +1,021.992 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                           | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`                        |
|     new | +1,021.992 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `enterCallArguments(FirStatement, List)`                                                              | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                      |
|     new | +1,021.992 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`              | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`           |
|     new | +1,021.992 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `<init>(CommonBackendContext, Function0)`                                                             | `org.jetbrains.kotlin.backend.common.lower.loops.DefaultHeaderInfoBuilder`      |
|     new | +1,021.984 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `<init>()`                                                                                            | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`              |
|     new | +1,021.984 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `<init>()`                                                                                            | `org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder` |
| +200.0% | +1,021.976 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |   1 → 3 | `<init>(String)`                                                                                      | `org.jetbrains.kotlin.name.FqName`                                              |
|     new | +1,021.968 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 1 | `visitFrameStart(int, int, int)`                                                                      | `org.jetbrains.org.objectweb.asm.MethodWriter`                                  |
|     new |  +1,021.96 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `getObjectType(String)`                                                                               | `org.jetbrains.org.objectweb.asm.Type`                                          |
|     new | +1,021.953 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 1 | `<clinit>()`                                                                                          | `com.intellij.openapi.util.ModificationTracker`                                 |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size |   Samples | Function                                                                              | Location                                                          |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -42.2% | -87.939 MiB | 30.5% → 17.6% |   208 MiB → 120 MiB | 192 → 115 | `<init>(int)`                                                                         | `java.io.ByteArrayOutputStream`                                   |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `initCEN(int, ZipCoder)`                                                              | `java.util.zip.ZipFile$Source`                                    |
| removed | -21.299 MiB |   3.1% → 0.0% |      21.3 MiB → 0 B |     2 → 0 | `initTable()`                                                                         | `java.util.concurrent.ConcurrentHashMap`                          |
| removed | -14.225 MiB |   2.1% → 0.0% |      14.2 MiB → 0 B |     7 → 0 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`            |
|  -62.0% | -13.108 MiB |   3.1% → 1.2% | 21.1 MiB → 8.03 MiB |   54 → 26 | `clone()`                                                                             | `java.lang.Object`                                                |
|  -50.0% |   -4.49 MiB |   1.3% → 0.7% | 8.98 MiB → 4.49 MiB |    16 → 9 | `newNode(int, Object, Object, HashMap$Node)`                                          | `java.util.LinkedHashMap`                                         |
| removed |  -3.992 MiB |   0.6% → 0.0% |      3.99 MiB → 0 B |     7 → 0 | `iterator()`                                                                          | `java.util.LinkedHashMap$LinkedEntrySet`                          |
|  -70.0% |  -3.493 MiB |   0.7% → 0.2% |  4.99 MiB → 1.5 MiB |    10 → 3 | `newFieldMap(int)`                                                                    | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                    |
|  -29.4% |  -2.495 MiB |   1.2% → 0.9% | 8.48 MiB → 5.99 MiB |   17 → 12 | `<init>(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`             |
|  -78.3% |  -2.478 MiB |   0.5% → 0.1% |  3.17 MiB → 703 KiB |     6 → 1 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
|  -80.6% |  -2.071 MiB |   0.4% → 0.1% |  2.57 MiB → 511 KiB |     5 → 1 | `accept(ClassVisitor, Attribute[], int)`                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                     |
|  -50.0% |  -1.996 MiB |   0.6% → 0.3% |    3.99 MiB → 2 MiB |     8 → 4 | `ensureCapacity()`                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`           |
|  -80.0% |  -1.993 MiB |   0.4% → 0.1% |  2.49 MiB → 511 KiB |     5 → 1 | `copyOf(Object[], int, Class)`                                                        | `java.util.Arrays`                                                |
|  -80.0% |  -1.992 MiB |   0.4% → 0.1% |  2.49 MiB → 511 KiB |     6 → 1 | `<init>(int)`                                                                         | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`     |
| removed |  -1.962 MiB |   0.3% → 0.0% |      1.96 MiB → 0 B |     4 → 0 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                      | `java.lang.String`                                                |
|  -50.8% |  -1.793 MiB |   0.5% → 0.3% | 3.53 MiB → 1.74 MiB |     8 → 4 | `createZipEntry(String)`                                                              | `java.util.zip.ZipInputStream`                                    |
|  -78.0% |   -1.77 MiB |   0.3% → 0.1% |  2.27 MiB → 512 KiB |     4 → 1 | `getBufIfOpen(boolean)`                                                               | `java.io.BufferedInputStream`                                     |
|  -50.0% |  -1.497 MiB |   0.4% → 0.2% |  2.99 MiB → 1.5 MiB |     6 → 3 | `allocateInstance(Object)`                                                            | `java.lang.invoke.DirectMethodHandle`                             |
| removed |  -1.497 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `getTypeInternal(String, int, int)`                                                   | `org.jetbrains.org.objectweb.asm.Type`                            |
|  -17.6% |  -1.496 MiB |   1.2% → 1.0% | 8.48 MiB → 6.99 MiB |   17 → 14 | `grow(int)`                                                                           | `java.util.ArrayList`                                             |

##### Standard library

|  Change |          Delta |             % |                Size |   Samples | Function                                                          | Location                                                      |
| ------: | -------------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------- | ------------------------------------------------------------- |
|  -42.2% |    -87.939 MiB | 30.5% → 17.6% |   208 MiB → 120 MiB | 192 → 115 | `<init>(int)`                                                     | `java.io.ByteArrayOutputStream`                               |
|  -97.8% |    -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `initCEN(int, ZipCoder)`                                          | `java.util.zip.ZipFile$Source`                                |
| removed |    -21.299 MiB |   3.1% → 0.0% |      21.3 MiB → 0 B |     2 → 0 | `initTable()`                                                     | `java.util.concurrent.ConcurrentHashMap`                      |
|  -62.0% |    -13.108 MiB |   3.1% → 1.2% | 21.1 MiB → 8.03 MiB |   54 → 26 | `clone()`                                                         | `java.lang.Object`                                            |
|  -50.0% |      -4.49 MiB |   1.3% → 0.7% | 8.98 MiB → 4.49 MiB |    16 → 9 | `newNode(int, Object, Object, HashMap$Node)`                      | `java.util.LinkedHashMap`                                     |
| removed |     -3.992 MiB |   0.6% → 0.0% |      3.99 MiB → 0 B |     7 → 0 | `iterator()`                                                      | `java.util.LinkedHashMap$LinkedEntrySet`                      |
|  -80.0% |     -1.993 MiB |   0.4% → 0.1% |  2.49 MiB → 511 KiB |     5 → 1 | `copyOf(Object[], int, Class)`                                    | `java.util.Arrays`                                            |
|  -80.0% |     -1.992 MiB |   0.4% → 0.1% |  2.49 MiB → 511 KiB |     6 → 1 | `<init>(int)`                                                     | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output` |
| removed |     -1.962 MiB |   0.3% → 0.0% |      1.96 MiB → 0 B |     4 → 0 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                  | `java.lang.String`                                            |
|  -50.8% |     -1.793 MiB |   0.5% → 0.3% | 3.53 MiB → 1.74 MiB |     8 → 4 | `createZipEntry(String)`                                          | `java.util.zip.ZipInputStream`                                |
|  -78.0% |      -1.77 MiB |   0.3% → 0.1% |  2.27 MiB → 512 KiB |     4 → 1 | `getBufIfOpen(boolean)`                                           | `java.io.BufferedInputStream`                                 |
|  -50.0% |     -1.497 MiB |   0.4% → 0.2% |  2.99 MiB → 1.5 MiB |     6 → 3 | `allocateInstance(Object)`                                        | `java.lang.invoke.DirectMethodHandle`                         |
|  -17.6% |     -1.496 MiB |   1.2% → 1.0% | 8.48 MiB → 6.99 MiB |   17 → 14 | `grow(int)`                                                       | `java.util.ArrayList`                                         |
| removed |     -1.496 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter`                 |
|  -38.1% |     -1.321 MiB |   0.5% → 0.3% | 3.47 MiB → 2.15 MiB |     8 → 5 | `newNode(int, Object, Object, HashMap$Node)`                      | `java.util.HashMap`                                           |
|  -22.3% |     -1.287 MiB |   0.8% → 0.7% | 5.76 MiB → 4.48 MiB |    11 → 8 | `allocateInstance(Class)`                                         | `jdk.internal.misc.Unsafe`                                    |
|  -66.7% |     -1,022 KiB |   0.2% → 0.1% |   1.5 MiB → 511 KiB |     3 → 1 | `lazy(Function0)`                                                 | `kotlin.LazyKt__LazyJVMKt`                                    |
|  -50.0% | -1,021.992 KiB |   0.3% → 0.1% |   2 MiB → 1,022 KiB |     4 → 2 | `stringFromByteBuffer(ByteBuffer, int)`                           | `jdk.internal.jimage.ImageStringsReader`                      |
| removed | -1,021.992 KiB |   0.1% → 0.0% |     1,022 KiB → 0 B |     2 → 0 | `plus(Collection, Iterable)`                                      | `kotlin.collections.CollectionsKt___CollectionsKt`            |
|  -66.7% | -1,021.984 KiB |   0.2% → 0.1% |   1.5 MiB → 511 KiB |     3 → 1 | `sequencedKeySet()`                                               | `java.util.LinkedHashMap`                                     |

##### Ours

|  Change |          Delta |           % |                Size | Samples | Function                                                                              | Location                                                                                                                          |
| ------: | -------------: | ----------: | ------------------: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -14.225 MiB | 2.1% → 0.0% |      14.2 MiB → 0 B |   7 → 0 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                            |
|  -70.0% |     -3.493 MiB | 0.7% → 0.2% |  4.99 MiB → 1.5 MiB |  10 → 3 | `newFieldMap(int)`                                                                    | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                                                    |
|  -29.4% |     -2.495 MiB | 1.2% → 0.9% | 8.48 MiB → 5.99 MiB | 17 → 12 | `<init>(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                                                             |
|  -78.3% |     -2.478 MiB | 0.5% → 0.1% |  3.17 MiB → 703 KiB |   6 → 1 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                                                 |
|  -80.6% |     -2.071 MiB | 0.4% → 0.1% |  2.57 MiB → 511 KiB |   5 → 1 | `accept(ClassVisitor, Attribute[], int)`                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                                     |
|  -50.0% |     -1.996 MiB | 0.6% → 0.3% |    3.99 MiB → 2 MiB |   8 → 4 | `ensureCapacity()`                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                                                           |
| removed |     -1.497 MiB | 0.2% → 0.0% |       1.5 MiB → 0 B |   3 → 0 | `getTypeInternal(String, int, int)`                                                   | `org.jetbrains.org.objectweb.asm.Type`                                                                                            |
| removed |     -1.465 MiB | 0.2% → 0.0% |      1.47 MiB → 0 B |   3 → 0 | `topLevel(Name)`                                                                      | `org.jetbrains.kotlin.name.FqName$Companion`                                                                                      |
| removed |     -1.277 MiB | 0.2% → 0.0% |      1.28 MiB → 0 B |   2 → 0 | `readBootstrapMethodsAttribute(int)`                                                  | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                                     |
| removed |     -1.074 MiB | 0.2% → 0.0% |      1.07 MiB → 0 B |   2 → 0 | `doRemap(int)`                                                                        | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`                                                                            |
|  -40.0% | -1,022.039 KiB | 0.4% → 0.2% |   2.5 MiB → 1.5 MiB |   5 → 3 | `_init_$lambda$0(int, int)`                                                           | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                                                             |
| removed |     -1,022 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `asSingleFqName()`                                                                    | `org.jetbrains.kotlin.name.ClassId`                                                                                               |
| removed | -1,021.992 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`         | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                                                        |
| removed | -1,021.992 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `loadExperimentalities(CheckerContext, FirBasedSymbol, boolean)`                      | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker`                                                  |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Class`                                                                                    |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `getArgumentTypes(String)`                                                            | `org.jetbrains.org.objectweb.asm.Type`                                                                                            |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                          | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirDiagnosticRenderers`                                                            |
| removed | -1,021.976 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `<init>(JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1, MemberSignature)`  | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$MemberAnnotationVisitor` |
| removed |  -1,021.96 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `build()`                                                                             | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                                                                |
| removed | -1,021.882 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `<init>(MethodVisitor, int, String, String, String, String[], int)`                   | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`                                                                        |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |       Delta |             % |                Size |  Samples | Location                |
| ------: | ----------: | ------------: | ------------------: | -------: | ----------------------- |
| +108.9% | +85.168 MiB | 85.4% → 84.6% |  78.2 MiB → 163 MiB | 138 → 86 | `java.util.Arrays:3539` |
| +121.9% | +16.359 MiB | 14.6% → 15.4% | 13.4 MiB → 29.8 MiB |  25 → 18 | `java.util.Arrays:3541` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |       Delta |             % |           Size | Samples | Location                                         |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------ |
|    new | +59.561 MiB | 0.0% → 100.0% | 0 B → 59.6 MiB |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:605` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +33.1% | +4.115 MiB | 100.0% | 12.4 MiB → 16.5 MiB | 24 → 32 | `java.util.Arrays:3863` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

| Change |      Delta |      % |                Size | Samples | Location                                              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------- |
| +67.8% | +3.607 MiB | 100.0% | 5.32 MiB → 8.93 MiB | 11 → 16 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change |      Delta |             % |           Size | Samples | Location                                             |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------- |
|    new | +3.478 MiB | 0.0% → 100.0% | 0 B → 3.48 MiB |   0 → 7 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `iterator()` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size | Samples | Location                   |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------- |
| +25.6% | +3.462 MiB | 100.0% | 13.5 MiB → 17 MiB | 31 → 35 | `java.util.ArrayList:1029` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |      Delta |      % |               Size | Samples | Location                              |
| ------: | ---------: | -----: | -----------------: | ------: | ------------------------------------- |
| +100.0% | +2.495 MiB | 100.0% | 2.5 MiB → 4.99 MiB |  5 → 10 | `java.lang.AbstractStringBuilder:101` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |             % |           Size | Samples | Location                                           |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------------- |
|    new | +2.113 MiB | 0.0% → 100.0% | 0 B → 2.11 MiB |   0 → 4 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

|  Change |      Delta |      % |                 Size | Samples | Location                                    |
| ------: | ---------: | -----: | -------------------: | ------: | ------------------------------------------- |
| +200.0% | +1.996 MiB | 100.0% | 1,022 KiB → 2.99 MiB |   2 → 6 | `kotlin.collections.builders.SetBuilder:19` |

##### `listIterator()` (`java.util.ArrayList`)

| Change |      Delta |             % |           Size | Samples | Location                   |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------- |
|    new | +1.729 MiB | 0.0% → 100.0% | 0 B → 1.73 MiB |   0 → 4 | `java.util.ArrayList:1018` |

##### `createScope(IrSymbolOwner)` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

|  Change |      Delta |      % |            Size | Samples | Location                                                                     |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------------------------------- |
| +300.0% | +1.497 MiB | 100.0% | 511 KiB → 2 MiB |   1 → 4 | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext:36` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

| Change |      Delta |             % |          Size | Samples | Location                                                   |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1:2037` |

##### `getLabel()` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

| Change |      Delta |             % |          Size | Samples | Location                                            |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.org.objectweb.asm.tree.LabelNode:61` |

##### `createConstraintSystem(Function2)` (`org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents`)

| Change |      Delta |             % |          Size | Samples | Location                                                            |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------------------------- |
|    new | +1.496 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents:62` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- |
| +50.0% | +1.496 MiB | 100.0% | 2.99 MiB → 4.49 MiB |   6 → 8 | `java.util.ArrayList:156` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +23.3% | +1.393 MiB | 100.0% | 5.99 MiB → 7.38 MiB | 12 → 16 | `java.util.HashSet:171` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |      % |             Size | Samples | Location                        |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------- |
| +62.5% | +1.247 MiB | 100.0% | 2 MiB → 3.24 MiB |   4 → 6 | `jdk.internal.misc.Unsafe:1380` |

##### `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change |         Delta |             % |            Size | Samples | Location                                                                        |
| ------: | ------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------- |
|     new | +1,021.89 KiB |  0.0% → 66.7% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl:46` |
|     new |   +510.96 KiB |  0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl:41` |
| removed |  -328.093 KiB | 100.0% → 0.0% |   328 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl:43` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder`)

| Change |        Delta |            % |          Size | Samples | Location                                                                  |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------- |
|    new | +566.367 KiB | 0.0% → 52.6% | 0 B → 566 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder:45` |
|    new | +510.992 KiB | 0.0% → 47.4% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder:34` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |      Delta |             % |        Size | Samples | Location                    |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------- |
|    new | +1.004 MiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.lang.StringUTF16:211` |

##### `wrap(byte[], int, int)` (`java.nio.ByteBuffer`)

| Change |          Delta |             % |            Size | Samples | Location                  |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `java.nio.ByteBuffer:436` |

##### `next()` (`kotlin.collections.IndexingIterator`)

| Change |          Delta |             % |            Size | Samples | Location                                 |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `kotlin.collections.IndexingIterator:41` |

##### `iterator()` (`kotlin.sequences.GeneratorSequence`)

| Change |          Delta |             % |            Size | Samples | Location                                 |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `kotlin.sequences.GeneratorSequence:637` |

##### `wrapperName(Wrapper)` (`java.lang.invoke.TypeConvertingMethodAdapter`)

| Change |          Delta |             % |            Size | Samples | Location                                           |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `java.lang.invoke.TypeConvertingMethodAdapter:123` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |          Delta |      % |              Size | Samples | Location                                       |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------- |
| +200.3% | +1,021.554 KiB | 100.0% | 510 KiB → 1.5 MiB |   2 → 3 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |      % |                Size | Samples | Location                                        |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| +33.3% | +849.296 KiB | 100.0% | 2.49 MiB → 3.32 MiB |   6 → 7 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `asList(Object[])` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- |
|    new | +839.078 KiB | 0.0% → 100.0% | 0 B → 839 KiB |   0 → 1 | `java.util.Arrays:4223` |

##### `createListBuilder()` (`kotlin.collections.CollectionsKt__CollectionsJVMKt`)

|  Change |        Delta |      % |                Size | Samples | Location                                                |
| ------: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------- |
| +151.3% | +615.226 KiB | 100.0% | 407 KiB → 1,022 KiB |   1 → 2 | `kotlin.collections.CollectionsKt__CollectionsJVMKt:47` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change |          Delta |      % |              Size | Samples | Location                                    |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------- |
| +200.0% | +1,021.992 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

| Change |          Delta |             % |            Size | Samples | Location                                                      |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1:7714` |

##### `enterCallArguments(FirStatement, List)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change |        Delta |            % |          Size | Samples | Location                                                        |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1059` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer:1952` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

| Change |        Delta |            % |          Size | Samples | Location                                                                 |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------ |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |

##### `<init>(CommonBackendContext, Function0)` (`org.jetbrains.kotlin.backend.common.lower.loops.DefaultHeaderInfoBuilder`)

| Change |        Delta |            % |          Size | Samples | Location                                                                       |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------ |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.backend.common.lower.loops.DefaultHeaderInfoBuilder:311` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.backend.common.lower.loops.DefaultHeaderInfoBuilder:314` |

##### `<init>()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

| Change |          Delta |             % |            Size | Samples | Location                                                              |
| -----: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder:29` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder`)

| Change |          Delta |             % |            Size | Samples | Location                                                                           |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder:32` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|  Change |          Delta |      % |              Size | Samples | Location                              |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------- |
| +200.0% | +1,021.976 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `org.jetbrains.kotlin.name.FqName:37` |

##### `visitFrameStart(int, int, int)` (`org.jetbrains.org.objectweb.asm.MethodWriter`)

| Change |          Delta |             % |            Size | Samples | Location                                            |
| -----: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------- |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `org.jetbrains.org.objectweb.asm.MethodWriter:1824` |

##### `getObjectType(String)` (`org.jetbrains.org.objectweb.asm.Type`)

| Change |         Delta |             % |            Size | Samples | Location                                   |
| -----: | ------------: | ------------: | --------------: | ------: | ------------------------------------------ |
|    new | +1,021.96 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.org.objectweb.asm.Type:252` |

##### `<clinit>()` (`com.intellij.openapi.util.ModificationTracker`)

| Change |          Delta |             % |            Size | Samples | Location                                           |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------- |
|    new | +1,021.953 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `com.intellij.openapi.util.ModificationTracker:21` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------- |
| -42.2% | -87.939 MiB | 100.0% | 208 MiB → 120 MiB | 192 → 115 | `java.io.ByteArrayOutputStream:81` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |             % |              Size | Samples | Location                            |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------- |
| removed |  -21.375 MiB |  96.2% → 0.0% |    21.4 MiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1744` |
|  -40.9% | -349.687 KiB | 3.8% → 100.0% | 855 KiB → 506 KiB |   2 → 1 | `java.util.zip.ZipFile$Source:1733` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |           Size | Samples | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- |
| removed | -21.299 MiB | 100.0% → 0.0% | 21.3 MiB → 0 B |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |        Delta |            % |           Size | Samples | Location                                                   |
| ------: | -----------: | -----------: | -------------: | ------: | ---------------------------------------------------------- |
| removed |   -13.36 MiB | 93.9% → 0.0% | 13.4 MiB → 0 B |   5 → 0 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |
| removed | -886.171 KiB |  6.1% → 0.0% |  886 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |     Delta |      % |                Size | Samples | Location                      |
| -----: | --------: | -----: | ------------------: | ------: | ----------------------------- |
| -50.0% | -4.49 MiB | 100.0% | 8.98 MiB → 4.49 MiB |  16 → 9 | `java.util.LinkedHashMap:281` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|  Change |      Delta |             % |           Size | Samples | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------------------- |
| removed | -3.992 MiB | 100.0% → 0.0% | 3.99 MiB → 0 B |   7 → 0 | `java.util.LinkedHashMap$LinkedEntrySet:914` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

| Change |      Delta |      % |               Size | Samples | Location                                           |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------------------------------- |
| -70.0% | -3.493 MiB | 100.0% | 4.99 MiB → 1.5 MiB |  10 → 3 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

| Change |      Delta |      % |                Size | Samples | Location                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------------------- |
| -29.4% | -2.495 MiB | 100.0% | 8.48 MiB → 5.99 MiB | 17 → 12 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |      Delta |      % |               Size | Samples | Location                                                             |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------------------------------------------------- |
| -78.3% | -2.478 MiB | 100.0% | 3.17 MiB → 703 KiB |   6 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |        Delta |             % |           Size | Samples | Location                                          |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------- |
| removed |    -2.57 MiB | 100.0% → 0.0% | 2.57 MiB → 0 B |   5 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |
|     new | +510.585 KiB | 0.0% → 100.0% |  0 B → 511 KiB |   0 → 1 | `org.jetbrains.org.objectweb.asm.ClassReader:545` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |      Delta |      % |             Size | Samples | Location                                                     |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------------------ |
| -50.0% | -1.996 MiB | 100.0% | 3.99 MiB → 2 MiB |   8 → 4 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1662` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |               Size | Samples | Location                |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- |
| -80.0% | -1.993 MiB | 100.0% | 2.49 MiB → 511 KiB |   5 → 1 | `java.util.Arrays:3513` |

##### `<init>(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`)

|  Change |      Delta |              % |               Size | Samples | Location                                                          |
| ------: | ---------: | -------------: | -----------------: | ------: | ----------------------------------------------------------------- |
|  -80.0% | -1.989 MiB | 99.9% → 100.0% | 2.49 MiB → 511 KiB |   5 → 1 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output:789` |
| removed | -2.617 KiB |    0.1% → 0.0% |     2.62 KiB → 0 B |   1 → 0 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output:788` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

|  Change |      Delta |             % |           Size | Samples | Location               |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------- |
| removed | -1.962 MiB | 100.0% → 0.0% | 1.96 MiB → 0 B |   4 → 0 | `java.lang.String:709` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

| Change |      Delta |      % |                Size | Samples | Location                           |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------- |
| -50.8% | -1.793 MiB | 100.0% | 3.53 MiB → 1.74 MiB |   8 → 4 | `java.util.zip.ZipInputStream:555` |

##### `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`)

| Change |     Delta |      % |               Size | Samples | Location                          |
| -----: | --------: | -----: | -----------------: | ------: | --------------------------------- |
| -78.0% | -1.77 MiB | 100.0% | 2.27 MiB → 512 KiB |   4 → 1 | `java.io.BufferedInputStream:181` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |      Delta |      % |               Size | Samples | Location                                  |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------------------------- |
| -50.0% | -1.497 MiB | 100.0% | 2.99 MiB → 1.5 MiB |   6 → 3 | `java.lang.invoke.DirectMethodHandle:501` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change |      Delta |             % |          Size | Samples | Location                                   |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------------ |
| removed | -1.497 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.org.objectweb.asm.Type:425` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- |
| -17.6% | -1.496 MiB | 100.0% | 8.48 MiB → 6.99 MiB | 17 → 14 | `java.util.ArrayList:239` |

##### `<init>(SymbolTable, int, String, String, String, String[], int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change |      Delta |             % |          Size | Samples | Location                                          |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------- |
| removed | -1.496 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `jdk.internal.org.objectweb.asm.MethodWriter:656` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Location                 |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------ |
| -38.1% | -1.321 MiB | 100.0% | 3.47 MiB → 2.15 MiB |   8 → 5 | `java.util.HashMap:1909` |

##### `lazy(Function0)` (`kotlin.LazyKt__LazyJVMKt`)

| Change |      Delta |      % |              Size | Samples | Location                      |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------- |
| -66.7% | -1,022 KiB | 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `kotlin.LazyKt__LazyJVMKt:26` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

| Change |        Delta |     % |                Size | Samples | Location                                     |
| -----: | -----------: | ----: | ------------------: | ------: | -------------------------------------------- |
| -50.0% | -511.015 KiB | 50.0% | 1,022 KiB → 511 KiB |   2 → 1 | `jdk.internal.jimage.ImageStringsReader:266` |
| -50.0% | -510.976 KiB | 50.0% | 1,022 KiB → 511 KiB |   2 → 1 | `jdk.internal.jimage.ImageStringsReader:272` |

##### `plus(Collection, Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change |          Delta |             % |            Size | Samples | Location                                                |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `kotlin.collections.CollectionsKt___CollectionsKt:3570` |

##### `sequencedKeySet()` (`java.util.LinkedHashMap`)

| Change |          Delta |      % |              Size | Samples | Location                      |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------- |
| -66.7% | -1,021.984 KiB | 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `java.util.LinkedHashMap:643` |

##### `topLevel(Name)` (`org.jetbrains.kotlin.name.FqName$Companion`)

|  Change |      Delta |             % |           Size | Samples | Location                                         |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ |
| removed | -1.465 MiB | 100.0% → 0.0% | 1.47 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.name.FqName$Companion:124` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |      Delta |             % |           Size | Samples | Location                                           |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------------------------- |
| removed | -1.277 MiB | 100.0% → 0.0% | 1.28 MiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:3624` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

|  Change |        Delta |            % |          Size | Samples | Location                                                  |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------- |
| removed | -589.171 KiB | 53.6% → 0.0% | 589 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper:70` |
| removed | -510.992 KiB | 46.4% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper:60` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

| Change |          Delta |      % |              Size | Samples | Location                                                                 |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------ |
| -40.0% | -1,022.039 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer:47` |

##### `asSingleFqName()` (`org.jetbrains.kotlin.name.ClassId`)

|  Change |      Delta |             % |            Size | Samples | Location                               |
| ------: | ---------: | ------------: | --------------: | ------: | -------------------------------------- |
| removed | -1,022 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.name.ClassId:74` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|  Change |          Delta |             % |            Size | Samples | Location                                                       |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt:541` |

##### `loadExperimentalities(CheckerContext, FirBasedSymbol, boolean)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                             |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------ |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker:201` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

|  Change |          Delta |             % |            Size | Samples | Location                                            |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Class:9233` |

##### `getArgumentTypes(String)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change |          Delta |             % |            Size | Samples | Location                                   |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------ |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.Type:301` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.analysis.diagnostics.FirDiagnosticRenderers`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                   |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirDiagnosticRenderers:430` |

##### `<init>(JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1, MemberSignature)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$MemberAnnotationVisitor`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                                                                              |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -1,021.976 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$MemberAnnotationVisitor:502` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|  Change |         Delta |             % |            Size | Samples | Location                                                              |
| ------: | ------------: | ------------: | --------------: | ------: | --------------------------------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder:36` |

##### `<init>(MethodVisitor, int, String, String, String, String[], int)` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`)

|  Change |        Delta |            % |          Size | Samples | Location                                                      |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------- |
| removed | -510.992 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor:38` |
| removed |  -510.89 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor:37` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |       Delta |             % |                Size |  Samples | Caller                        | Location                          |
| ------: | ----------: | ------------: | ------------------: | -------: | ----------------------------- | --------------------------------- |
| +108.9% | +85.168 MiB | 85.4% → 84.6% |  78.2 MiB → 163 MiB | 138 → 86 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| +708.4% | +20.849 MiB |  3.2% → 12.3% | 2.94 MiB → 23.8 MiB |        6 | `getBytes()`                  | `jdk.internal.loader.Resource`    |
|  -42.9% |   -4.49 MiB |  11.4% → 3.1% | 10.5 MiB → 5.99 MiB |  19 → 12 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |       Delta |             % |           Size | Samples | Caller                                        | Location                                     |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | -------------------------------------------- |
|    new | +59.561 MiB | 0.0% → 100.0% | 0 B → 59.6 MiB |   0 → 1 | `addConstantFieldref(String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Caller                          | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------- | ------------------ |
| +33.1% | +4.115 MiB | 100.0% | 12.4 MiB → 16.5 MiB | 24 → 32 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |          Delta |             % |                Size | Samples | Caller                                            | Location                                                           |
| ------: | -------------: | ------------: | ------------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
|     new |     +1.497 MiB |  0.0% → 16.8% |       0 B → 1.5 MiB |   0 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                |
|  +53.2% |     +1.194 MiB | 42.2% → 38.5% | 2.25 MiB → 3.44 MiB |   4 → 6 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
|     new | +1,021.984 KiB |  0.0% → 11.2% |     0 B → 1,022 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmMethodSignature` |
| +201.5% |   +683.023 KiB |  6.2% → 11.2% | 339 KiB → 1,022 KiB |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`       |
| +100.0% |       +511 KiB |  9.4% → 11.2% | 511 KiB → 1,022 KiB |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change |      Delta |             % |           Size | Samples | Caller                     | Location                                         |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------- | ------------------------------------------------ |
|    new | +3.478 MiB | 0.0% → 100.0% | 0 B → 3.48 MiB |   0 → 7 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                                  | Location                                                                        |
| ------: | -------------: | -----------: | --------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +300.0% |     +1.497 MiB | 3.7% → 11.8% | 511 KiB → 2 MiB |   1 → 4 | `iterator-impl(List)`                                                   | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                   |
|     new |     +1,022 KiB |  0.0% → 5.9% | 0 B → 1,022 KiB |   0 → 2 | `traverseOnce(ControlFlowGraph, PathAwareControlFlowGraphVisitor, Map)` | `org.jetbrains.kotlin.fir.analysis.cfa.util.CfgTraverserKt`                     |
|     new | +1,021.992 KiB |  0.0% → 5.9% | 0 B → 1,022 KiB |   0 → 1 | `analyze(String, MethodNode)`                                           | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryValsAnalyzer` |
| removed | -1,021.984 KiB |  7.4% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `processExcessLambdaArguments(List)`                                    | `org.jetbrains.kotlin.fir.resolve.calls.stages.FirCallArgumentsProcessor`       |
| removed | -1,021.976 KiB |  7.4% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `hasMangledParameters(IrFunction, boolean, boolean)`                    | `org.jetbrains.kotlin.backend.jvm.InlineClassAbiKt`                             |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |      Delta |             % |               Size | Samples | Caller     | Location                  |
| ------: | ---------: | ------------: | -----------------: | ------: | ---------- | ------------------------- |
| +166.7% | +2.495 MiB | 60.0% → 80.0% | 1.5 MiB → 3.99 MiB |   3 → 8 | `<init>()` | `java.lang.StringBuilder` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |             % |           Size | Samples | Caller                 | Location                                      |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------- | --------------------------------------------- |
|    new | +2.113 MiB | 0.0% → 100.0% | 0 B → 2.11 MiB |   0 → 4 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

|  Change |      Delta |      % |                 Size | Samples | Caller               | Location                               |
| ------: | ---------: | -----: | -------------------: | ------: | -------------------- | -------------------------------------- |
| +200.0% | +1.996 MiB | 100.0% | 1,022 KiB → 2.99 MiB |   2 → 6 | `createSetBuilder()` | `kotlin.collections.SetsKt__SetsJVMKt` |

##### `listIterator()` (`java.util.ArrayList`)

| Change |      Delta |             % |           Size | Samples | Caller                                           | Location                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
|    new | +1.729 MiB | 0.0% → 100.0% | 0 B → 1.73 MiB |   0 → 4 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `createScope(IrSymbolOwner)` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

|  Change |        Delta |             % |          Size | Samples | Caller                                  | Location                                                                  |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------- |
|     new |   +1.497 MiB |  0.0% → 75.0% | 0 B → 1.5 MiB |   0 → 3 | `visitValueParameter(IrValueParameter)` | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
| removed |     -511 KiB | 100.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `visitClass(IrClass)`                   | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
|     new | +510.992 KiB |  0.0% → 25.0% | 0 B → 511 KiB |   0 → 1 | `visitFunction(IrFunction)`             | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

| Change |      Delta |             % |          Size | Samples | Caller                                                      | Location                                              |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1` |

##### `getLabel()` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

| Change |      Delta |             % |          Size | Samples | Caller                  | Location                                         |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------- | ------------------------------------------------ |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `accept(MethodVisitor)` | `org.jetbrains.org.objectweb.asm.tree.LabelNode` |

##### `createConstraintSystem(Function2)` (`org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents`)

| Change |      Delta |             % |          Size | Samples | Caller                                                                        | Location                                                         |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +1.496 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `createConstraintSystem$default(InferenceComponents, Function2, int, Object)` | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents` |

##### `<init>(int)` (`java.util.ArrayList`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                                           | Location                                                                   |
| ------: | -------------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|     new |     +1.996 MiB | 0.0% → 44.4% |     0 B → 2 MiB |   0 → 3 | `take(Iterable, int)`                                                            | `kotlin.collections.CollectionsKt___CollectionsKt`                         |
| removed | -1,021.984 KiB | 33.3% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `getTypeParameterSymbols()`                                                      | `org.jetbrains.kotlin.fir.symbols.impl.FirClassLikeSymbol`                 |
| removed |       -511 KiB | 16.7% → 0.0% |   511 KiB → 0 B |   1 → 0 | `createKeyMapping(IntrinsicMethod, IrClassSymbol, String, IrClassifierSymbol[])` | `org.jetbrains.kotlin.backend.jvm.intrinsics.IrIntrinsicMethods$Companion` |
| removed |   -510.992 KiB | 16.7% → 0.0% |   511 KiB → 0 B |   1 → 0 | `zip(Iterable, Iterable)`                                                        | `kotlin.collections.CollectionsKt___CollectionsKt`                         |
| removed |   -510.992 KiB | 16.7% → 0.0% |   511 KiB → 0 B |   1 → 0 | `rigidType(ProtoBuf$Type, ConeAttributes)`                                       | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`             |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |             % |                Size | Samples | Caller        | Location                  |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------- | ------------------------- |
| +25.4% | +1.393 MiB | 91.7% → 93.2% | 5.49 MiB → 6.88 MiB | 11 → 15 | `<init>()`    | `java.util.LinkedHashSet` |
|    ~0% |      +24 B |   8.3% → 6.8% |             511 KiB |       1 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |      % |             Size | Samples | Caller           | Location                       |
| -----: | ---------: | -----: | ---------------: | ------: | ---------------- | ------------------------------ |
| +62.5% | +1.247 MiB | 100.0% | 2 MiB → 3.24 MiB |   4 → 6 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change |      Delta |      % |              Size | Samples | Caller                              | Location                                                         |
| ------: | ---------: | -----: | ----------------: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| +367.2% | +1.176 MiB | 100.0% | 328 KiB → 1.5 MiB |   1 → 3 | `createConstraintSystem(Function2)` | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.builder.FirRegularClassBuilder`)

| Change |        Delta |            % |          Size | Samples | Caller                                                                                                                                                                                                                                                                                                                                                       | Location                                                          |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|    new | +566.367 KiB | 0.0% → 52.6% | 0 B → 566 KiB |   0 → 1 | `<init>()`                                                                                                                                                                                                                                                                                                                                                   | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClassBuilder`  |
|    new | +510.992 KiB | 0.0% → 47.4% | 0 B → 511 KiB |   0 → 1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |      Delta |             % |        Size | Samples | Caller                           | Location           |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------- | ------------------ |
|    new | +1.004 MiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `wrap(byte[], int, int)` (`java.nio.ByteBuffer`)

| Change |          Delta |             % |            Size | Samples | Caller         | Location              |
| -----: | -------------: | ------------: | --------------: | ------: | -------------- | --------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `wrap(byte[])` | `java.nio.ByteBuffer` |

##### `next()` (`kotlin.collections.IndexingIterator`)

| Change |          Delta |             % |            Size | Samples | Caller   | Location                              |
| -----: | -------------: | ------------: | --------------: | ------: | -------- | ------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `next()` | `kotlin.collections.IndexingIterator` |

##### `iterator()` (`kotlin.sequences.GeneratorSequence`)

| Change |        Delta |            % |          Size | Samples | Caller                       | Location                                         |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------- | ------------------------------------------------ |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `last(Sequence)`             | `kotlin.sequences.SequencesKt___SequencesKt`     |
|    new | +510.984 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `<init>(FlatteningSequence)` | `kotlin.sequences.FlatteningSequence$iterator$1` |

##### `wrapperName(Wrapper)` (`java.lang.invoke.TypeConvertingMethodAdapter`)

| Change |          Delta |             % |            Size | Samples | Caller                      | Location                                       |
| -----: | -------------: | ------------: | --------------: | ------: | --------------------------- | ---------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `boxingDescriptor(Wrapper)` | `java.lang.invoke.TypeConvertingMethodAdapter` |

##### `initClassName()` (`java.lang.Class`)

| Change |          Delta |      % |               Size | Samples | Caller      | Location          |
| -----: | -------------: | -----: | -----------------: | ------: | ----------- | ----------------- |
| +66.7% | +1,021.882 KiB | 100.0% | 1.5 MiB → 2.49 MiB |   3 → 4 | `getName()` | `java.lang.Class` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |          Delta |      % |              Size | Samples | Caller          | Location                                     |
| ------: | -------------: | -----: | ----------------: | ------: | --------------- | -------------------------------------------- |
| +200.3% | +1,021.554 KiB | 100.0% | 510 KiB → 1.5 MiB |   2 → 3 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |              % |                Size | Samples | Caller                  | Location                                    |
| -----: | -----------: | -------------: | ------------------: | ------: | ----------------------- | ------------------------------------------- |
|    new | +510.765 KiB |   0.0% → 15.0% |       0 B → 511 KiB |   0 → 1 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |
| +13.3% | +338.531 KiB | 100.0% → 85.0% | 2.49 MiB → 2.82 MiB |       6 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `asList(Object[])` (`java.util.Arrays`)

| Change |        Delta |             % |          Size | Samples | Caller             | Location                           |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------ | ---------------------------------- |
|    new | +839.078 KiB | 0.0% → 100.0% | 0 B → 839 KiB |   0 → 1 | `asList(Object[])` | `kotlin.collections.ArraysUtilJVM` |

##### `createListBuilder()` (`kotlin.collections.CollectionsKt__CollectionsJVMKt`)

|  Change |         Delta |             % |            Size | Samples | Caller                                                                                                   | Location                                                                      |
| ------: | ------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|     new | +1,021.96 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `getTopLevelPropertySymbols(FqName, Name)`                                                               | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`                |
| removed |  -406.734 KiB | 100.0% → 0.0% |   407 KiB → 0 B |   1 → 0 | `createIrLazyConstructor(FirConstructor, IrConstructorSymbol, IrDeclarationOrigin, IrDeclarationParent)` | `org.jetbrains.kotlin.fir.backend.generators.Fir2IrLazyDeclarationsGenerator` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change |          Delta |      % |              Size | Samples | Caller     | Location                                                               |
| ------: | -------------: | -----: | ----------------: | ------: | ---------- | ---------------------------------------------------------------------- |
| +200.0% | +1,021.992 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

| Change |          Delta |             % |            Size | Samples | Caller                                                      | Location                                                 |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1` |

##### `enterCallArguments(FirStatement, List)` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                                                                                             | Location                                                                                      |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                   | Location                                                             |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `<init>(CommonBackendContext, Function0)` (`org.jetbrains.kotlin.backend.common.lower.loops.DefaultHeaderInfoBuilder`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                     | Location                                                               |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `<init>(CommonBackendContext, IrSymbolOwner, Map, ForLoopBodyTransformer)` | `org.jetbrains.kotlin.backend.common.lower.loops.RangeLoopTransformer` |

##### `<init>()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

| Change |        Delta |            % |          Size | Samples | Caller                                                                                                            | Location                                                                           |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `transformType(FirTypeRef, ConeKotlinType, ConeDiagnostic, TypeResolutionConfiguration, FirResolvedSymbolOrigin)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `toDefaultResolvedTypeRef(ConeClassLikeLookupTag)`                                                                | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`                  |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                                          | Location                                                     |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `tryToSetSourceForImplicitReceiver$tryToSetSourceForImplicitReceiver(FirExpression, Candidate)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|  Change |        Delta |             % |            Size | Samples | Caller                                                                     | Location                                                |
| ------: | -----------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------- |
|     new |   +1,022 KiB |  0.0% → 66.7% | 0 B → 1,022 KiB |   0 → 2 | `fromString(String, boolean)`                                              | `org.jetbrains.kotlin.name.ClassId$Companion`           |
| removed |     -511 KiB | 100.0% → 0.0% |   511 KiB → 0 B |   1 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                            | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                |
|     new | +510.976 KiB |  0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `visitFrameStart(int, int, int)` (`org.jetbrains.org.objectweb.asm.MethodWriter`)

| Change |          Delta |             % |            Size | Samples | Caller                 | Location                                |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------- | --------------------------------------- |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `accept(MethodWriter)` | `org.jetbrains.org.objectweb.asm.Frame` |

##### `getObjectType(String)` (`org.jetbrains.org.objectweb.asm.Type`)

| Change |        Delta |            % |          Size | Samples | Caller                     | Location                                                |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------- | ------------------------------------------------------- |
|    new | +510.984 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `mapType(Type)`            | `org.jetbrains.org.objectweb.asm.commons.Remapper`      |
|    new | +510.976 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `createObjectType(String)` | `org.jetbrains.kotlin.codegen.signature.AsmTypeFactory` |

##### `<clinit>()` (`com.intellij.openapi.util.ModificationTracker`)

| Change |          Delta |             % |            Size | Samples | Caller       | Location                                               |
| -----: | -------------: | ------------: | --------------: | ------: | ------------ | ------------------------------------------------------ |
|    new | +1,021.953 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `<clinit>()` | `com.intellij.core.CorePsiPackageImplementationHelper` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                  | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------ |
| -42.2% | -87.939 MiB | 100.0% | 208 MiB → 120 MiB | 192 → 115 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Caller                                          | Location                       |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| -97.8% | -21.716 MiB | 100.0% | 22.2 MiB → 506 KiB |   3 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |           Size | Samples | Caller                            | Location                                 |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -21.299 MiB | 100.0% → 0.0% | 21.3 MiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |       Delta |             % |           Size | Samples | Caller                                                                       | Location                                               |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| removed | -14.225 MiB | 100.0% → 0.0% | 14.2 MiB → 0 B |   7 → 0 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `clone()` (`java.lang.Object`)

| Change |       Delta |      % |                Size | Samples | Caller                | Location           |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------- | ------------------ |
| -62.0% | -13.108 MiB | 100.0% | 21.1 MiB → 8.03 MiB | 54 → 26 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |     Delta |      % |                Size | Samples | Caller                                          | Location            |
| -----: | --------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| -50.0% | -4.49 MiB | 100.0% | 8.98 MiB → 4.49 MiB |  16 → 9 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|  Change |        Delta |            % |            Size | Samples | Caller                                         | Location                                                                       |
| ------: | -----------: | -----------: | --------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------ |
| removed |   -1.996 MiB | 50.0% → 0.0% |     2 MiB → 0 B |   3 → 0 | `doAddOtherSystem(ConstraintStorage, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`   |
| removed |   -1,022 KiB | 25.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `create(Map, FirSession, boolean)`             | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$Companion` |
| removed |     -511 KiB | 12.5% → 0.0% |   511 KiB → 0 B |   1 → 0 | `serializeAnnotation(ClassId, Map)`            | `org.jetbrains.kotlin.fir.serialization.FirAnnotationSerializer`               |
| removed | -510.984 KiB | 12.5% → 0.0% |   511 KiB → 0 B |   1 → 0 | `hashCode()`                                   | `java.util.AbstractMap`                                                        |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

| Change |      Delta |      % |               Size | Samples | Caller     | Location                                 |
| -----: | ---------: | -----: | -----------------: | ------: | ---------- | ---------------------------------------- |
| -70.0% | -3.493 MiB | 100.0% | 4.99 MiB → 1.5 MiB |  10 → 3 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |          Delta |             % |                Size | Samples | Caller                                          | Location                                                                            |
| ------: | -------------: | ------------: | ------------------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |     -2.494 MiB |  29.4% → 0.0% |      2.49 MiB → 0 B |   5 → 0 | `<init>(FixStackAnalyzer, int, int)`            | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |
|  -25.0% | -1,022.109 KiB | 47.1% → 50.0% | 3.99 MiB → 2.99 MiB |   8 → 6 | `_init_$lambda$0(int, int)`                     | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`               |
|  -66.7% | -1,021.882 KiB |  17.6% → 8.3% |   1.5 MiB → 511 KiB |   3 → 1 | `<init>(int, int)`                              | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                      |
| +200.0% | +1,021.875 KiB |  5.9% → 25.0% |   511 KiB → 1.5 MiB |   1 → 3 | `<init>(int)`                                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.StoreLoadFrame`            |
|     new |   +510.992 KiB |   0.0% → 8.3% |       0 B → 511 KiB |   0 → 1 | `preprocessNodeBeforeInline$lambda$0(int, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                 |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |        Delta |             % |           Size | Samples | Caller           | Location                                                                                     |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| removed |   -3.165 MiB | 100.0% → 0.0% | 3.17 MiB → 0 B |   6 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f5a40` |
|     new | +702.726 KiB | 0.0% → 100.0% |  0 B → 703 KiB |   0 → 1 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b0013f73c0` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |      % |               Size | Samples | Caller                      | Location                                      |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------------- | --------------------------------------------- |
| -80.6% | -2.071 MiB | 100.0% | 2.57 MiB → 511 KiB |   5 → 1 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |          Delta |     % |              Size | Samples | Caller                                                                                    | Location                                                |
| -----: | -------------: | ----: | ----------------: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -50.0% | -1,021.968 KiB | 50.0% | 2 MiB → 1,022 KiB |   4 → 2 | `getChildren(LighterASTNode, Ref)`                                                        | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
| -50.0% |  -1,021.96 KiB | 50.0% | 2 MiB → 1,022 KiB |   4 → 2 | `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |        Delta |              % |               Size | Samples | Caller                                       | Location                           |
| ------: | -----------: | -------------: | -----------------: | ------: | -------------------------------------------- | ---------------------------------- |
|  -75.0% |   -1.495 MiB | 80.0% → 100.0% | 1.99 MiB → 511 KiB |   4 → 1 | `copyOf(Object[], int)`                      | `java.util.Arrays`                 |
| removed | -509.734 KiB |   20.0% → 0.0% |      510 KiB → 0 B |   1 → 0 | `<init>(LambdaForm$NamedFunction, Object[])` | `java.lang.invoke.LambdaForm$Name` |

##### `<init>(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`)

| Change |      Delta |      % |               Size | Samples | Caller        | Location                                               |
| -----: | ---------: | -----: | -----------------: | ------: | ------------- | ------------------------------------------------------ |
| -80.0% | -1.992 MiB | 100.0% | 2.49 MiB → 511 KiB |   6 → 1 | `newOutput()` | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

|  Change |      Delta |             % |           Size | Samples | Caller                                  | Location             |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------------------- | -------------------- |
| removed | -1.962 MiB | 100.0% → 0.0% | 1.96 MiB → 0 B |   4 → 0 | `newStringUTF8NoRepl(byte[], int, int)` | `java.lang.System$2` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

| Change |      Delta |      % |                Size | Samples | Caller      | Location                       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------- | ------------------------------ |
| -50.8% | -1.793 MiB | 100.0% | 3.53 MiB → 1.74 MiB |   8 → 4 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`)

| Change |     Delta |      % |               Size | Samples | Caller           | Location                      |
| -----: | --------: | -----: | -----------------: | ------: | ---------------- | ----------------------------- |
| -78.0% | -1.77 MiB | 100.0% | 2.27 MiB → 512 KiB |   4 → 1 | `getBufIfOpen()` | `java.io.BufferedInputStream` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |              % |          Size | Samples | Caller                                     | Location                                     |
| ------: | ---------: | -------------: | ------------: | ------: | ------------------------------------------ | -------------------------------------------- |
| removed | -1.497 MiB |   50.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |
|     ~0% |      -16 B | 50.0% → 100.0% |       1.5 MiB |       3 | `newInvokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change |          Delta |            % |            Size | Samples | Caller                     | Location                               |
| ------: | -------------: | -----------: | --------------: | ------: | -------------------------- | -------------------------------------- |
| removed | -1,021.984 KiB | 66.7% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `getReturnType(String)`    | `org.jetbrains.org.objectweb.asm.Type` |
| removed |       -511 KiB | 33.3% → 0.0% |   511 KiB → 0 B |   1 → 0 | `getArgumentTypes(String)` | `org.jetbrains.org.objectweb.asm.Type` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |              % |                Size | Samples | Caller               | Location              |
| -----: | ---------: | -------------: | ------------------: | ------: | -------------------- | --------------------- |
| -29.4% | -2.495 MiB | 100.0% → 85.7% | 8.48 MiB → 5.99 MiB | 17 → 12 | `grow()`             | `java.util.ArrayList` |
|    new | +1,022 KiB |   0.0% → 14.3% |     0 B → 1,022 KiB |   0 → 2 | `addAll(Collection)` | `java.util.ArrayList` |

##### `<init>(SymbolTable, int, String, String, String, String[], int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change |      Delta |             % |          Size | Samples | Caller                                               | Location                                     |
| ------: | ---------: | ------------: | ------------: | ------: | ---------------------------------------------------- | -------------------------------------------- |
| removed | -1.496 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| -38.1% | -1.321 MiB | 100.0% | 3.47 MiB → 2.15 MiB |   8 → 5 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |      % |                Size | Samples | Caller                     | Location                              |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------- |
| -22.3% | -1.287 MiB | 100.0% | 5.76 MiB → 4.48 MiB |  11 → 8 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `lazy(Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                                        | Location                                                                              |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed |     -511 KiB |  33.3% → 0.0% | 511 KiB → 0 B |   1 → 0 | `<init>(FirBasedSymbol, boolean, RealVariable, RealVariable, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                   |
| removed |     -511 KiB |  33.3% → 0.0% | 511 KiB → 0 B |   1 → 0 | `<init>(IrClass)`                                                             | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor`                          |
| removed | -510.984 KiB |  33.3% → 0.0% | 511 KiB → 0 B |   1 → 0 | `buildLazyValueForMap(JavaAnnotationOwner)`                                   | `org.jetbrains.kotlin.load.java.structure.JavaElementsKt`                             |
|     new | +510.984 KiB | 0.0% → 100.0% | 0 B → 511 KiB |   0 → 1 | `<init>(InventNamesForLocalFunctions, IrDeclaration)`                         | `org.jetbrains.kotlin.backend.common.lower.InventNamesForLocalFunctions$NameInventor` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

| Change |          Delta |      % |              Size | Samples | Caller           | Location                               |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------- | -------------------------------------- |
| -50.0% | -1,021.992 KiB | 100.0% | 2 MiB → 1,022 KiB |   4 → 2 | `getString(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `plus(Collection, Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                                                                                                                                                                                      | Location                                                             |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `<init>(NameResolver, TypeTable, VersionRequirementTable, FirModuleData, FqName, FqName, FirTypeDeserializer, AnnotationDeserializer, FirConstDeserializer, FirKDocDeserializer, DeserializedContainerSource, FirRegularClassSymbol, List)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext` |

##### `sequencedKeySet()` (`java.util.LinkedHashMap`)

| Change |          Delta |      % |              Size | Samples | Caller     | Location                  |
| -----: | -------------: | -----: | ----------------: | ------: | ---------- | ------------------------- |
| -66.7% | -1,021.984 KiB | 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `keySet()` | `java.util.LinkedHashMap` |

##### `topLevel(Name)` (`org.jetbrains.kotlin.name.FqName$Companion`)

|  Change |      Delta |             % |           Size | Samples | Caller                 | Location                            |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------- | ----------------------------------- |
| removed | -1.465 MiB | 100.0% → 0.0% | 1.47 MiB → 0 B |   3 → 0 | `<init>(FqName, Name)` | `org.jetbrains.kotlin.name.ClassId` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |      Delta |             % |           Size | Samples | Caller                         | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------ | --------------------------------------------- |
| removed | -1.277 MiB | 100.0% → 0.0% | 1.28 MiB → 0 B |   2 → 0 | `<init>(byte[], int, boolean)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

|  Change |      Delta |             % |           Size | Samples | Caller       | Location                                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------ | ------------------------------------------------------ |
| removed | -1.074 MiB | 100.0% → 0.0% | 1.07 MiB → 0 B |   2 → 0 | `remap(int)` | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

| Change |          Delta |      % |              Size | Samples | Caller                   | Location                                                                                         |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| -40.0% | -1,022.039 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000b0018e8518` |

##### `asSingleFqName()` (`org.jetbrains.kotlin.name.ClassId`)

|  Change |    Delta |            % |          Size | Samples | Caller                                 | Location                                                  |
| ------: | -------: | -----------: | ------------: | ------: | -------------------------------------- | --------------------------------------------------------- |
| removed | -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `isSerializableInJava(FqNameUnsafe)`   | `org.jetbrains.kotlin.builtins.jvm.JvmBuiltInsSignatures` |
| removed | -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `getCorrespondingKotlinClass(ClassId)` | `org.jetbrains.kotlin.fir.resolve.FirJavaClassMapper`     |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                    | Location                                                   |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `getDeprecationsProviderFromAnnotations(List, FirSession, boolean, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |

##### `loadExperimentalities(CheckerContext, FirBasedSymbol, boolean)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageBaseChecker`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                    | Location                                                                           |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirStatement)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirOptInUsageAccessChecker` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                        | Location                                       |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class` |

##### `getArgumentTypes(String)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change |        Delta |            % |          Size | Samples | Caller                                                                                                    | Location                                                                                  |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed |     -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
| removed | -510.984 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])`                                                      | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`                                 |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.analysis.diagnostics.FirDiagnosticRenderers`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                    | Location                                                                 |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `MAP_delegate$lambda$0(KtDiagnosticFactoryToRendererMap)` | `org.jetbrains.kotlin.fir.analysis.diagnostics.FirErrorsDefaultMessages` |

##### `<init>(JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1, MemberSignature)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$MemberAnnotationVisitor`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                               | Location                                                                                                                             |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -1,021.976 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `<init>(JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1, MemberSignature)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$AnnotationVisitorForMethod` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|  Change |         Delta |             % |            Size | Samples | Caller                                             | Location                                                          |
| ------: | ------------: | ------------: | --------------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `toDefaultResolvedTypeRef(ConeClassLikeLookupTag)` | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader` |

##### `<init>(MethodVisitor, int, String, String, String, String[], int)` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                                             | Location                                                   |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed | -1,021.882 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `<init>(MethodVisitor, int, String, String, String, String[], int, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|      Change |       Delta |             % |                 Size |   Samples | Function                                                                                           | Location                                                                |
| ----------: | ----------: | ------------: | -------------------: | --------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|      +78.4% | +88.419 MiB | 16.5% → 29.4% |    113 MiB → 201 MiB | 217 → 130 | `copyOf(byte[], int)`                                                                              | `java.util.Arrays`                                                      |
|      +72.5% |  +72.06 MiB | 14.5% → 25.1% |   99.4 MiB → 171 MiB | 192 → 112 | `toByteArray()`                                                                                    | `java.io.ByteArrayOutputStream`                                         |
|      +48.7% | +64.914 MiB | 19.5% → 29.0% |    133 MiB → 198 MiB | 268 → 276 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|      +48.0% | +64.663 MiB | 19.7% → 29.2% |    135 MiB → 199 MiB | 271 → 279 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|      +47.5% |  +61.92 MiB | 19.1% → 28.1% |    130 MiB → 192 MiB | 262 → 264 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                 |
|      +46.6% |  +61.92 MiB | 19.4% → 28.5% |    133 MiB → 195 MiB | 267 → 269 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                 |
|         new | +59.561 MiB |   0.0% → 8.7% |       0 B → 59.6 MiB |     0 → 1 | `addConstantFieldref(String, String, String)`                                                      | `jdk.internal.org.objectweb.asm.SymbolTable`                            |
|         new | +59.561 MiB |   0.0% → 8.7% |       0 B → 59.6 MiB |     0 → 1 | `visitFieldInsn(int, String, String, String)`                                                      | `jdk.internal.org.objectweb.asm.MethodWriter`                           |
| +3379491.3% | +59.559 MiB |  <0.1% → 8.7% |   1.8 KiB → 59.6 MiB |         1 | `generateMethod(ClassWriter, String)`                                                              | `java.lang.reflect.ProxyGenerator$ProxyMethod`                          |
|      +45.9% | +59.425 MiB | 18.9% → 27.6% |    129 MiB → 189 MiB | 260 → 257 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                 |
|    +2977.6% | +59.392 MiB |   0.3% → 9.0% |  1.99 MiB → 61.4 MiB |         5 | `addConstantMemberReference(int, String, String, String)`                                          | `jdk.internal.org.objectweb.asm.SymbolTable`                            |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)`                                        | `java.lang.reflect.Proxy`                                               |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `run()`                                                                                            | `sun.reflect.annotation.AnnotationParser$1`                             |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `doPrivileged(PrivilegedAction)`                                                                   | `java.security.AccessController`                                        |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `annotationForMap(Class, Map)`                                                                     | `sun.reflect.annotation.AnnotationParser`                               |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `declaredAnnotations()`                                                                            | `java.lang.reflect.Field`                                               |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `getAnnotation(Class)`                                                                             | `java.lang.reflect.Field`                                               |
|    +3920.8% | +58.566 MiB |   0.2% → 8.8% |  1.49 MiB → 60.1 MiB |     3 → 2 | `getArgumentsInfo(Class)`                                                                          | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `generateClassFile()`                                                                              | `java.lang.reflect.ProxyGenerator`                                      |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `generateProxyClass(ClassLoader, String, List, int)`                                               | `java.lang.reflect.ProxyGenerator`                                      |

##### Standard library

|      Change |       Delta |             % |                 Size |   Samples | Function                                                                  | Location                                                |
| ----------: | ----------: | ------------: | -------------------: | --------: | ------------------------------------------------------------------------- | ------------------------------------------------------- |
|      +78.4% | +88.419 MiB | 16.5% → 29.4% |    113 MiB → 201 MiB | 217 → 130 | `copyOf(byte[], int)`                                                     | `java.util.Arrays`                                      |
|      +72.5% |  +72.06 MiB | 14.5% → 25.1% |   99.4 MiB → 171 MiB | 192 → 112 | `toByteArray()`                                                           | `java.io.ByteArrayOutputStream`                         |
|         new | +59.561 MiB |   0.0% → 8.7% |       0 B → 59.6 MiB |     0 → 1 | `addConstantFieldref(String, String, String)`                             | `jdk.internal.org.objectweb.asm.SymbolTable`            |
|         new | +59.561 MiB |   0.0% → 8.7% |       0 B → 59.6 MiB |     0 → 1 | `visitFieldInsn(int, String, String, String)`                             | `jdk.internal.org.objectweb.asm.MethodWriter`           |
| +3379491.3% | +59.559 MiB |  <0.1% → 8.7% |   1.8 KiB → 59.6 MiB |         1 | `generateMethod(ClassWriter, String)`                                     | `java.lang.reflect.ProxyGenerator$ProxyMethod`          |
|    +2977.6% | +59.392 MiB |   0.3% → 9.0% |  1.99 MiB → 61.4 MiB |         5 | `addConstantMemberReference(int, String, String, String)`                 | `jdk.internal.org.objectweb.asm.SymbolTable`            |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)`               | `java.lang.reflect.Proxy`                               |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `run()`                                                                   | `sun.reflect.annotation.AnnotationParser$1`             |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `doPrivileged(PrivilegedAction)`                                          | `java.security.AccessController`                        |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `annotationForMap(Class, Map)`                                            | `sun.reflect.annotation.AnnotationParser`               |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `declaredAnnotations()`                                                   | `java.lang.reflect.Field`                               |
|    +5925.8% | +59.063 MiB |   0.1% → 8.8% | 1,021 KiB → 60.1 MiB |         2 | `getAnnotation(Class)`                                                    | `java.lang.reflect.Field`                               |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `generateClassFile()`                                                     | `java.lang.reflect.ProxyGenerator`                      |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `generateProxyClass(ClassLoader, String, List, int)`                      | `java.lang.reflect.ProxyGenerator`                      |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)`            | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `build()`                                                                 | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy`                               |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `apply(Object, Object)`                                                   | `java.lang.reflect.Proxy$$Lambda.0x000000b00107c650`    |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `get()`                                                                   | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |
|    +5875.8% | +58.564 MiB |   0.1% → 8.7% | 1,021 KiB → 59.6 MiB |     2 → 1 | `computeIfAbsent(ClassLoader, BiFunction)`                                | `jdk.internal.loader.AbstractClassLoaderValue`          |

##### Ours

|   Change |       Delta |             % |                Size |   Samples | Function                                                                                           | Location                                                                                                                  |
| -------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|   +48.7% | +64.914 MiB | 19.5% → 29.0% |   133 MiB → 198 MiB | 268 → 276 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|   +48.0% | +64.663 MiB | 19.7% → 29.2% |   135 MiB → 199 MiB | 271 → 279 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|   +47.5% |  +61.92 MiB | 19.1% → 28.1% |   130 MiB → 192 MiB | 262 → 264 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|   +46.6% |  +61.92 MiB | 19.4% → 28.5% |   133 MiB → 195 MiB | 267 → 269 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|   +45.9% | +59.425 MiB | 18.9% → 27.6% |   129 MiB → 189 MiB | 260 → 257 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
| +3920.8% | +58.566 MiB |   0.2% → 8.8% | 1.49 MiB → 60.1 MiB |     3 → 2 | `getArgumentsInfo(Class)`                                                                          | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                                                   |
| +2930.6% | +58.397 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |     5 → 3 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`                  | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                                                   |
| +2930.6% | +58.397 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |     5 → 3 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                                    | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                                                   |
| +2930.6% | +58.397 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |     5 → 3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)`               | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                                                   |
|   +25.1% | +37.334 MiB | 21.8% → 27.3% |   149 MiB → 186 MiB | 257 → 252 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|   +24.8% | +36.336 MiB | 21.4% → 26.8% |   146 MiB → 183 MiB | 252 → 245 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|    +5.5% | +24.673 MiB | 65.9% → 69.6% |   451 MiB → 475 MiB | 611 → 434 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
|    +5.2% | +23.712 MiB | 66.3% → 69.8% |   453 MiB → 477 MiB | 616 → 437 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
|      new | +21.312 MiB |   0.0% → 3.1% |      0 B → 21.3 MiB |     0 → 1 | `parseOptions(String[])`                                                                           | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
| +3867.6% | +19.299 MiB |   0.1% → 2.9% |  511 KiB → 19.8 MiB |    1 → 39 | `invoke()`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016d6f90` |
|    +7.9% | +11.711 MiB | 21.6% → 23.4% |   148 MiB → 160 MiB | 296 → 316 | `phaseBody(PipelineContext, PipelineArtifact)`                                                     | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +8.0% | +11.711 MiB | 21.5% → 23.2% |   147 MiB → 159 MiB | 294 → 314 | `phaseBody(LoggingContext, Object)`                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                         |
|    +7.3% |  +10.76 MiB | 21.5% → 23.1% |   147 MiB → 158 MiB | 293 → 312 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                   |
|    +6.3% |  +9.263 MiB | 21.3% → 22.7% |   146 MiB → 155 MiB | 291 → 307 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                               |
|    +6.4% |  +9.186 MiB | 21.1% → 22.5% |   144 MiB → 154 MiB | 288 → 304 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                               | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                                                                      |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size |   Samples | Function                                                                     | Location                                               |
| ------: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -42.2% | -87.939 MiB | 30.5% → 17.6% |   208 MiB → 120 MiB | 192 → 115 | `<init>(int)`                                                                | `java.io.ByteArrayOutputStream`                        |
|  -11.0% | -36.595 MiB | 48.7% → 43.3% |   333 MiB → 296 MiB | 415 → 237 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  -10.9% | -36.263 MiB | 48.6% → 43.3% |   332 MiB → 296 MiB | 414 → 237 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `<init>(File, boolean, int, Runtime$Version)`                                | `java.util.jar.JarFile`                                |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `getJarFile(URL)`                                                            | `jdk.internal.loader.URLClassPath$JarLoader`           |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `run()`                                                                      | `jdk.internal.loader.URLClassPath$JarLoader$1`         |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `ensureOpen()`                                                               | `jdk.internal.loader.URLClassPath$JarLoader`           |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`               | `jdk.internal.loader.URLClassPath$JarLoader`           |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `run()`                                                                      | `jdk.internal.loader.URLClassPath$3`                   |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `getLoader(URL)`                                                             | `jdk.internal.loader.URLClassPath`                     |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `getLoader(int)`                                                             | `jdk.internal.loader.URLClassPath`                     |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `initCEN(int, ZipCoder)`                                                     | `java.util.zip.ZipFile$Source`                         |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                              | `java.util.zip.ZipFile$Source`                         |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `get(File, boolean, ZipCoder)`                                               | `java.util.zip.ZipFile$Source`                         |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                       | `java.util.zip.ZipFile$CleanableResource`              |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(File, int, Charset)`                                                 | `java.util.zip.ZipFile`                                |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(File, int)`                                                          | `java.util.zip.ZipFile`                                |
|  -86.0% | -21.384 MiB |   3.6% → 0.5% | 24.9 MiB → 3.47 MiB |     8 → 7 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)`  | `java.security.AccessController`                       |
|  -86.0% | -21.384 MiB |   3.6% → 0.5% | 24.9 MiB → 3.47 MiB |     8 → 7 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`              | `java.security.AccessController`                       |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `findResource(String, boolean)`                                              | `jdk.internal.loader.URLClassPath`                     |

##### Standard library

|  Change |       Delta |             % |                Size |   Samples | Function                                                                    | Location                                       |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
|  -42.2% | -87.939 MiB | 30.5% → 17.6% |   208 MiB → 120 MiB | 192 → 115 | `<init>(int)`                                                               | `java.io.ByteArrayOutputStream`                |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                        |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`           |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `getLoader(URL)`                                                            | `jdk.internal.loader.URLClassPath`             |
| removed | -21.873 MiB |   3.2% → 0.0% |      21.9 MiB → 0 B |     2 → 0 | `getLoader(int)`                                                            | `jdk.internal.loader.URLClassPath`             |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                 |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                 |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                 |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`      |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                        |
|  -97.8% | -21.716 MiB |   3.2% → 0.1% |  22.2 MiB → 506 KiB |     3 → 1 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                        |
|  -86.0% | -21.384 MiB |   3.6% → 0.5% | 24.9 MiB → 3.47 MiB |     8 → 7 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |
|  -86.0% | -21.384 MiB |   3.6% → 0.5% | 24.9 MiB → 3.47 MiB |     8 → 7 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`               |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `findResource(String, boolean)`                                             | `jdk.internal.loader.URLClassPath`             |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `run()`                                                                     | `java.net.URLClassLoader$2`                    |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)`                      | `java.security.AccessController`               |

##### Ours

|  Change |       Delta |             % |                Size |   Samples | Function                                                                                                                            | Location                                                                                                                  |
| ------: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -11.0% | -36.595 MiB | 48.7% → 43.3% |   333 MiB → 296 MiB | 415 → 237 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|  -10.9% | -36.263 MiB | 48.6% → 43.3% |   332 MiB → 296 MiB | 414 → 237 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `getResource(String)`                                                                                                               | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                                  |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `<init>()`                                                                                                                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
| removed | -21.375 MiB |   3.1% → 0.0% |      21.4 MiB → 0 B |     1 → 0 | `<init>()`                                                                                                                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|  -97.7% | -21.169 MiB |   3.2% → 0.1% |  21.7 MiB → 511 KiB |    42 → 1 | `invoke()`                                                                                                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016cf868` |
|  -34.1% |  -7.484 MiB |   3.2% → 2.1% |   22 MiB → 14.5 MiB |   44 → 29 | `performTransformations(MethodNode)`                                                                                                | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                                     |
|  -35.1% |  -6.487 MiB |   2.7% → 1.8% |   18.5 MiB → 12 MiB |   37 → 24 | `analyzeMainLoop()`                                                                                                                 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                                           |
|  -35.1% |  -6.487 MiB |   2.7% → 1.8% |   18.5 MiB → 12 MiB |   37 → 24 | `analyze()`                                                                                                                         | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                                           |
|  -27.3% |  -5.988 MiB |   3.2% → 2.3% |     22 MiB → 16 MiB |   44 → 32 | `transform(String, MethodNode)`                                                                                                     | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`                                        |
|  -34.3% |  -5.988 MiB |   2.6% → 1.7% | 17.5 MiB → 11.5 MiB |   35 → 23 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)`                                                                    | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                                           |
|  -36.7% |  -5.613 MiB |   2.2% → 1.4% | 15.3 MiB → 9.68 MiB |   30 → 21 | `accept(FirVisitor, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`                                                                    |
|  -22.4% |  -5.485 MiB |   3.6% → 2.8% |   24.4 MiB → 19 MiB |   46 → 38 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                             | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                                          |
|  -22.4% |  -5.485 MiB |   3.6% → 2.8% |   24.4 MiB → 19 MiB |   46 → 38 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                                          |
|  -42.5% |  -5.006 MiB |   1.7% → 1.0% | 11.8 MiB → 6.79 MiB |   23 → 15 | `visitWithCallOrAssignment(FirStatement)`                                                                                           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
|  -66.7% |   -4.99 MiB |   1.1% → 0.4% |  7.49 MiB → 2.5 MiB |    14 → 5 | `visitArgumentList(FirArgumentList, Object)`                                                                                        | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                                            |
|  -66.7% |   -4.99 MiB |   1.1% → 0.4% |  7.49 MiB → 2.5 MiB |    14 → 5 | `accept(FirVisitor, Object)`                                                                                                        | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                                    |
|  -22.2% |  -4.989 MiB |   3.3% → 2.6% | 22.5 MiB → 17.5 MiB |   45 → 34 | `visitEnd()`                                                                                                                        | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`                                                                |
|  -22.2% |  -4.989 MiB |   3.3% → 2.6% | 22.5 MiB → 17.5 MiB |   45 → 34 | `visitEnd()`                                                                                                                        | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                                           |
|  -31.5% |  -4.809 MiB |   2.2% → 1.5% | 15.3 MiB → 10.5 MiB |   28 → 21 | `consumeCandidate(TowerGroup, Candidate, ResolutionContext)`                                                                        | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`                                                     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |            % |                Size | Samples | Callee    | Location           |
| -----: | ----------: | -----------: | ------------------: | ------: | --------- | ------------------ |
| -62.0% | -13.108 MiB | 18.7% → 4.0% | 21.1 MiB → 8.03 MiB | 54 → 26 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |      Delta |      % |               Size |   Samples | Callee                | Location           |
| -----: | ---------: | -----: | -----------------: | --------: | --------------------- | ------------------ |
| +72.5% | +72.06 MiB | 100.0% | 99.4 MiB → 171 MiB | 192 → 112 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                   | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| +48.7% | +64.914 MiB | 100.0% | 133 MiB → 198 MiB | 268 → 276 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|   Change |       Delta |             % |                Size |   Samples | Callee                                                                               | Location                                                                |
| -------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| +2930.6% | +58.397 MiB |  1.5% → 30.3% | 1.99 MiB → 60.4 MiB |     5 → 3 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|    +4.7% |  +6.266 MiB | 98.5% → 69.7% |   133 MiB → 139 MiB | 266 → 276 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change |        Delta |              % |              Size |   Samples | Callee                                                 | Location                                                |
| ------: | -----------: | -------------: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +48.1% |  +62.419 MiB | 99.6% → 100.0% | 130 MiB → 192 MiB | 261 → 264 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed | -510.992 KiB |    0.4% → 0.0% |     511 KiB → 0 B |     1 → 0 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |              Size |   Samples | Callee                                         | Location                                      |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
| +46.6% | +61.92 MiB | 100.0% | 133 MiB → 195 MiB | 267 → 269 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `addConstantFieldref(String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |       Delta |             % |           Size | Samples | Callee                                                    | Location                                     |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------- | -------------------------------------------- |
|    new | +59.561 MiB | 0.0% → 100.0% | 0 B → 59.6 MiB |   0 → 1 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `visitFieldInsn(int, String, String, String)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change |       Delta |             % |           Size | Samples | Callee                                        | Location                                     |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | -------------------------------------------- |
|    new | +59.561 MiB | 0.0% → 100.0% | 0 B → 59.6 MiB |   0 → 1 | `addConstantFieldref(String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `generateMethod(ClassWriter, String)` (`java.lang.reflect.ProxyGenerator$ProxyMethod`)

|  Change |       Delta |             % |           Size | Samples | Callee                                            | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------- | --------------------------------------------- |
|     new | +59.561 MiB | 0.0% → 100.0% | 0 B → 59.6 MiB |   0 → 1 | `visitFieldInsn(int, String, String, String)`     | `jdk.internal.org.objectweb.asm.MethodWriter` |
| removed |  -1.804 KiB | 100.0% → 0.0% |  1.8 KiB → 0 B |   1 → 0 | `visitTryCatchBlock(Label, Label, Label, String)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                                             | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +45.9% | +59.425 MiB | 100.0% | 129 MiB → 189 MiB | 260 → 257 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |        Delta |            % |               Size | Samples | Callee                                   | Location                                     |
| ------: | -----------: | -----------: | -----------------: | ------: | ---------------------------------------- | -------------------------------------------- |
|     new | +510.765 KiB |  0.0% → 0.8% |      0 B → 511 KiB |   0 → 1 | `put122(int, int, int)`                  | `jdk.internal.org.objectweb.asm.ByteVector`  |
| removed | -510.007 KiB | 25.0% → 0.0% |      510 KiB → 0 B |   1 → 0 | `addConstantClass(String)`               | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -11.3% | -173.476 KiB | 75.0% → 2.2% | 1.5 MiB → 1.33 MiB |   4 → 3 | `addConstantNameAndType(String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `newProxyInstance(ClassLoader, Class[], InvocationHandler)` (`java.lang.reflect.Proxy`)

|   Change |        Delta |              % |                 Size | Samples | Callee                                                    | Location                  |
| -------: | -----------: | -------------: | -------------------: | ------: | --------------------------------------------------------- | ------------------------- |
| +5875.8% |  +58.564 MiB | 100.0% → 99.2% | 1,021 KiB → 59.6 MiB |   2 → 1 | `getProxyConstructor(Class, ClassLoader, Class[])`        | `java.lang.reflect.Proxy` |
|      new | +510.992 KiB |    0.0% → 0.8% |        0 B → 511 KiB |   0 → 1 | `newProxyInstance(Class, Constructor, InvocationHandler)` | `java.lang.reflect.Proxy` |

##### `run()` (`sun.reflect.annotation.AnnotationParser$1`)

|   Change |       Delta |      % |                 Size | Samples | Callee                                                      | Location                                    |
| -------: | ----------: | -----: | -------------------: | ------: | ----------------------------------------------------------- | ------------------------------------------- |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)` | `java.lang.reflect.Proxy`                   |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `run()`                                                     | `sun.reflect.annotation.AnnotationParser$1` |

##### `doPrivileged(PrivilegedAction)` (`java.security.AccessController`)

|   Change |       Delta |      % |                 Size | Samples | Callee                                                             | Location                         |
| -------: | ----------: | -----: | -------------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `annotationForMap(Class, Map)` (`sun.reflect.annotation.AnnotationParser`)

|   Change |       Delta |      % |                 Size | Samples | Callee                           | Location                         |
| -------: | ----------: | -----: | -------------------: | ------: | -------------------------------- | -------------------------------- |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `doPrivileged(PrivilegedAction)` | `java.security.AccessController` |

##### `declaredAnnotations()` (`java.lang.reflect.Field`)

|   Change |       Delta |      % |                 Size | Samples | Callee                                          | Location                                  |
| -------: | ----------: | -----: | -------------------: | ------: | ----------------------------------------------- | ----------------------------------------- |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `parseAnnotations(byte[], ConstantPool, Class)` | `sun.reflect.annotation.AnnotationParser` |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `declaredAnnotations()`                         | `java.lang.reflect.Field`                 |

##### `getAnnotation(Class)` (`java.lang.reflect.Field`)

|   Change |       Delta |      % |                 Size | Samples | Callee                  | Location                  |
| -------: | ----------: | -----: | -------------------: | ------: | ----------------------- | ------------------------- |
| +5925.8% | +59.063 MiB | 100.0% | 1,021 KiB → 60.1 MiB |       2 | `declaredAnnotations()` | `java.lang.reflect.Field` |

##### `getArgumentsInfo(Class)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |        Delta |              % |                 Size | Samples | Callee                    | Location                                                                |
| -------: | -----------: | -------------: | -------------------: | ------: | ------------------------- | ----------------------------------------------------------------------- |
| +5925.8% |  +59.063 MiB | 66.7% → 100.0% | 1,021 KiB → 60.1 MiB |       2 | `getAnnotation(Class)`    | `java.lang.reflect.Field`                                               |
| +5875.8% |  +58.564 MiB |  66.7% → 99.2% | 1,021 KiB → 59.6 MiB |   2 → 1 | `getArgumentsInfo(Class)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  removed | -508.968 KiB |   33.3% → 0.0% |        509 KiB → 0 B |   1 → 0 | `put(Object, Object)`     | `kotlin.collections.builders.MapBuilder`                                |

##### `generateClassFile()` (`java.lang.reflect.ProxyGenerator`)

|      Change |          Delta |             % |               Size | Samples | Callee                                | Location                                       |
| ----------: | -------------: | ------------: | -----------------: | ------: | ------------------------------------- | ---------------------------------------------- |
| +3379491.3% |    +59.559 MiB | 0.2% → 100.0% | 1.8 KiB → 59.6 MiB |       1 | `generateMethod(ClassWriter, String)` | `java.lang.reflect.ProxyGenerator$ProxyMethod` |
|     removed | -1,018.835 KiB |  99.8% → 0.0% |    1,019 KiB → 0 B |   1 → 0 | `generateConstructor()`               | `java.lang.reflect.ProxyGenerator`             |

##### `generateProxyClass(ClassLoader, String, List, int)` (`java.lang.reflect.ProxyGenerator`)

|   Change |       Delta |      % |                 Size | Samples | Callee                | Location                           |
| -------: | ----------: | -----: | -------------------: | ------: | --------------------- | ---------------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `generateClassFile()` | `java.lang.reflect.ProxyGenerator` |

##### `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)` (`java.lang.reflect.Proxy$ProxyBuilder`)

|   Change |       Delta |      % |                 Size | Samples | Callee                                               | Location                           |
| -------: | ----------: | -----: | -------------------: | ------: | ---------------------------------------------------- | ---------------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `generateProxyClass(ClassLoader, String, List, int)` | `java.lang.reflect.ProxyGenerator` |

##### `build()` (`java.lang.reflect.Proxy$ProxyBuilder`)

|   Change |       Delta |      % |                 Size | Samples | Callee                                                         | Location                               |
| -------: | ----------: | -----: | -------------------: | ------: | -------------------------------------------------------------- | -------------------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` (`java.lang.reflect.Proxy`)

|   Change |       Delta |      % |                 Size | Samples | Callee    | Location                               |
| -------: | ----------: | -----: | -------------------: | ------: | --------- | -------------------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `build()` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `apply(Object, Object)` (`java.lang.reflect.Proxy$$Lambda.0x000000b00107c650`)

|   Change |       Delta |      % |                 Size | Samples | Callee                                                                    | Location                  |
| -------: | ----------: | -----: | -------------------: | ------: | ------------------------------------------------------------------------- | ------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy` |

##### `get()` (`jdk.internal.loader.AbstractClassLoaderValue$Memoizer`)

|   Change |       Delta |      % |                 Size | Samples | Callee                  | Location                                             |
| -------: | ----------: | -----: | -------------------: | ------: | ----------------------- | ---------------------------------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `apply(Object, Object)` | `java.lang.reflect.Proxy$$Lambda.0x000000b00107c650` |

##### `computeIfAbsent(ClassLoader, BiFunction)` (`jdk.internal.loader.AbstractClassLoaderValue`)

|   Change |       Delta |      % |                 Size | Samples | Callee  | Location                                                |
| -------: | ----------: | -----: | -------------------: | ------: | ------- | ------------------------------------------------------- |
| +5875.8% | +58.564 MiB | 100.0% | 1,021 KiB → 59.6 MiB |   2 → 1 | `get()` | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |

##### `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |        Delta |             % |                Size | Samples | Callee                     | Location                                                                |
| -------: | -----------: | ------------: | ------------------: | ------: | -------------------------- | ----------------------------------------------------------------------- |
| +3920.8% |  +58.566 MiB | 75.0% → 99.5% | 1.49 MiB → 60.1 MiB |   3 → 2 | `getArgumentsInfo(Class)`  | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   -34.0% | -173.695 KiB |  25.0% → 0.5% |   511 KiB → 337 KiB |   2 → 1 | `invoke(Object, Object[])` | `java.lang.reflect.Method`                                              |

##### `parseCommandLineArguments(List, CommonToolArguments, boolean)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |      % |                Size | Samples | Callee                                                                            | Location                                                                |
| -------: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +2930.6% | +58.397 MiB | 100.0% | 1.99 MiB → 60.4 MiB |   5 → 3 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |      % |                Size | Samples | Callee                                                          | Location                                                                |
| -------: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +2930.6% | +58.397 MiB | 100.0% | 1.99 MiB → 60.4 MiB |   5 → 3 | `parseCommandLineArguments(List, CommonToolArguments, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

|  Change |       Delta |              % |              Size |   Samples | Callee                          | Location                                                |
| ------: | ----------: | -------------: | ----------------: | --------: | ------------------------------- | ------------------------------------------------------- |
|  +46.0% | +58.709 MiB | 85.7% → 100.0% | 128 MiB → 186 MiB | 256 → 252 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed | -21.375 MiB |   14.3% → 0.0% |    21.4 MiB → 0 B |     1 → 0 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee           | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------------------ |
| +24.8% | +36.336 MiB | 100.0% | 146 MiB → 183 MiB | 252 → 245 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |      % |              Size |   Samples | Callee          | Location                                    |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------- |
|  +5.5% | +24.673 MiB | 100.0% | 451 MiB → 475 MiB | 611 → 434 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                                       | Location                                               |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +32.4% | +38.996 MiB | 26.6% → 33.4% | 120 MiB → 159 MiB | 201 → 199 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| -11.0% | -36.595 MiB | 73.4% → 62.1% | 333 MiB → 296 MiB | 415 → 237 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|    new | +21.312 MiB |   0.0% → 4.5% |    0 B → 21.3 MiB |     0 → 1 | `parseOptions(String[])`                                                     | `org.jetbrains.kotlin.preloading.Preloader`            |

##### `parseOptions(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |             % |           Size | Samples | Callee              | Location                |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------- |
|    new | +21.312 MiB | 0.0% → 100.0% | 0 B → 21.3 MiB |   0 → 1 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016d6f90`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                                       | Location                                                                                       |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
|     new |  +19.798 MiB | 0.0% → 100.0% | 0 B → 19.8 MiB |  0 → 39 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| removed | -510.968 KiB | 100.0% → 0.0% |  511 KiB → 0 B |   1 → 0 | `transformAccessor$lambda$0$0(FirProperty, FirPropertyAccessor, FirDeclarationsResolveTransformer, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |        Delta |             % |                Size |   Samples | Callee                           | Location                                                              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------- | --------------------------------------------------------------------- |
| +12.9% |   +8.435 MiB | 44.3% → 46.3% | 65.5 MiB → 73.9 MiB | 131 → 150 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  +5.8% |   +3.611 MiB | 41.7% → 40.9% | 61.7 MiB → 65.4 MiB | 122 → 127 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  -2.6% | -509.031 KiB | 13.1% → 11.8% | 19.4 MiB → 18.9 MiB |   40 → 36 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
| +12.2% | +165.554 KiB |          0.9% | 1.33 MiB → 1.49 MiB |         3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | ------------------------------------------------- |
|  +8.0% | +11.711 MiB | 100.0% | 147 MiB → 159 MiB | 294 → 314 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change |        Delta |             % |                Size |   Samples | Callee                                                               | Location                                                       |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------- | -------------------------------------------------------------- |
|   +7.0% |  +10.261 MiB | 99.7% → 99.4% |   146 MiB → 157 MiB | 292 → 310 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`              |
|  +60.0% |   +2.994 MiB |   3.4% → 5.1% | 4.99 MiB → 7.98 MiB |   10 → 15 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase` |
|  -50.0% | -510.968 KiB |   0.7% → 0.3% | 1,022 KiB → 511 KiB |     2 → 1 | `runBefore(PhaseConfig, PhaserState, LoggingContext, Object)`        | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`        |
| +100.0% | +510.968 KiB |   0.3% → 0.6% | 511 KiB → 1,022 KiB |     1 → 2 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`        |
|     new | +510.968 KiB |   0.0% → 0.3% |       0 B → 511 KiB |     0 → 1 | `isEnabled(NamedCompilerPhase)`                                      | `org.jetbrains.kotlin.config.phaser.PhaseConfig`               |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                     | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  +6.3% | +9.263 MiB | 100.0% | 146 MiB → 155 MiB | 291 → 307 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                     | Location                                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  +6.4% | +9.186 MiB | 100.0% | 144 MiB → 154 MiB | 288 → 304 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |        Delta |              % |              Size |   Samples | Callee                                                                       | Location                                               |
| ------: | -----------: | -------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -10.9% |  -36.263 MiB | 99.9% → 100.0% | 332 MiB → 296 MiB | 414 → 237 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed |  -20.347 MiB |    6.1% → 0.0% |    20.3 MiB → 0 B |    45 → 0 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| removed | -339.726 KiB |    0.1% → 0.0% |     340 KiB → 0 B |     1 → 0 | `mergeClasspathFromManifests(Map)`                                           | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |             % |                Size |   Samples | Callee                | Location                        |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------- | ------------------------------- |
| -42.2% |  -87.939 MiB | 62.7% → 40.6% |   208 MiB → 120 MiB | 192 → 115 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
| +72.5% |   +72.06 MiB | 29.9% → 57.9% |  99.4 MiB → 171 MiB | 192 → 112 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
| -65.1% |   -5.819 MiB |   2.7% → 1.1% | 8.94 MiB → 3.12 MiB |    19 → 7 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
| -22.8% | -347.414 KiB |          0.4% | 1.49 MiB → 1.15 MiB |     4 → 3 | `put(Object, Object)` | `java.util.HashMap`             |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

|  Change |       Delta |             % |           Size | Samples | Callee              | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                                        | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ----------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

|  Change |       Delta |             % |           Size | Samples | Callee            | Location                                       |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------- | ---------------------------------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                          | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee         | Location                                     |
| ------: | ----------: | ------------: | -------------: | ------: | -------------- | -------------------------------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                         | Location                                     |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `getLoader(URL)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                          | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `getLoader(int)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee           | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------- |
| removed | -21.873 MiB | 100.0% → 0.0% | 21.9 MiB → 0 B |   2 → 0 | `getLoader(URL)` | `jdk.internal.loader.URLClassPath` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Callee                   | Location                       |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------ | ------------------------------ |
| -97.8% | -21.716 MiB | 100.0% | 22.2 MiB → 506 KiB |   3 → 1 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |               Size | Samples | Callee                                          | Location                       |
| -----: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------------------ |
| -97.8% | -21.716 MiB | 100.0% | 22.2 MiB → 506 KiB |   3 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |       Delta |      % |               Size | Samples | Callee                         | Location                       |
| -----: | ----------: | -----: | -----------------: | ------: | ------------------------------ | ------------------------------ |
| -97.8% | -21.716 MiB | 100.0% | 22.2 MiB → 506 KiB |   3 → 1 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |       Delta |      % |               Size | Samples | Callee                                 | Location                                  |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------------- | ----------------------------------------- |
| -97.8% | -21.716 MiB | 100.0% | 22.2 MiB → 506 KiB |   3 → 1 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |       Delta |      % |               Size | Samples | Callee                       | Location                |
| -----: | ----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -97.8% | -21.716 MiB | 100.0% | 22.2 MiB → 506 KiB |   3 → 1 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change |       Delta |              % |                Size | Samples | Callee  | Location                                       |
| ------: | ----------: | -------------: | ------------------: | ------: | ------- | ---------------------------------------------- |
| removed | -21.873 MiB |   88.0% → 0.0% |      21.9 MiB → 0 B |   2 → 0 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| removed | -21.873 MiB |   88.0% → 0.0% |      21.9 MiB → 0 B |   2 → 0 | `run()` | `jdk.internal.loader.URLClassPath$3`           |
|   -0.3% |  -9.117 KiB | 14.0% → 100.0% | 3.48 MiB → 3.47 MiB |       7 | `run()` | `java.net.URLClassLoader$1`                    |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

| Change |       Delta |      % |                Size | Samples | Callee                                                                      | Location                         |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| -86.0% | -21.384 MiB | 100.0% | 24.9 MiB → 3.47 MiB |   8 → 7 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee           | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------- |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `run()` (`java.net.URLClassLoader$2`)

|  Change |       Delta |             % |           Size | Samples | Callee                          | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------- | ---------------------------------- |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `findResource(String, boolean)` | `jdk.internal.loader.URLClassPath` |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `run()`                         | `java.net.URLClassLoader$2`        |

##### `doPrivileged(PrivilegedAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                             | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------- | ----------------------- |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `getResource(String)` | `java.lang.ClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |       Delta |             % |           Size | Samples | Callee                | Location                                                 |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------- | -------------------------------------------------------- |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `getResource(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|  Change |       Delta |             % |           Size | Samples | Callee     | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | --------------------------------------------- |
| removed | -21.375 MiB | 100.0% → 0.0% | 21.4 MiB → 0 B |   1 → 0 | `<init>()` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016cf868`)

|  Change |        Delta |             % |           Size | Samples | Callee                                                                                                        | Location                                                                                       |
| ------: | -----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |  -21.668 MiB | 100.0% → 0.0% | 21.7 MiB → 0 B |  42 → 0 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
|     new | +510.976 KiB | 0.0% → 100.0% |  0 B → 511 KiB |   0 → 1 | `doTransformRegularClassContent$lambda$0(FirDeclarationsResolveTransformer, FirRegularClass, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `performTransformations(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|  Change |          Delta |             % |              Size | Samples | Callee                           | Location                                                                           |
| ------: | -------------: | ------------: | ----------------: | ------: | -------------------------------- | ---------------------------------------------------------------------------------- |
|  -31.7% |     -6.486 MiB | 93.2% → 96.6% | 20.5 MiB → 14 MiB | 41 → 28 | `transform(String, MethodNode)`  | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer` |
| removed | -1,021.937 KiB |   4.5% → 0.0% |   1,022 KiB → 0 B |   2 → 0 | `transform(String, MethodNode)`  | `org.jetbrains.kotlin.codegen.optimization.DeadCodeEliminationMethodTransformer`   |
|     new |   +510.984 KiB |   0.0% → 3.4% |     0 B → 511 KiB |   0 → 1 | `prepareForEmitting(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.common.UtilKt`                          |
| removed |   -510.968 KiB |   2.3% → 0.0% |     511 KiB → 0 B |   1 → 0 | `run()`                          | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor`             |

##### `analyzeMainLoop()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |         Delta |             % |                Size | Samples | Callee                                                                         | Location                                                                                         |
| ------: | ------------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
|  -34.3% |    -5.988 MiB | 94.6% → 95.8% | 17.5 MiB → 11.5 MiB | 35 → 23 | `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)`               | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                  |
| removed | -1,021.96 KiB |   5.4% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `invoke(Object, Object)`                                                       | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x00000070018e8518` |
|     new |  +510.992 KiB |   0.0% → 4.2% |       0 B → 511 KiB |   0 → 1 | `mergeControlFlowEdge$default(FastAnalyzer, int, Frame, boolean, int, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                  |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |      Delta |      % |              Size | Samples | Callee              | Location                                                        |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------- | --------------------------------------------------------------- |
| -35.1% | -6.487 MiB | 100.0% | 18.5 MiB → 12 MiB | 37 → 24 | `analyzeMainLoop()` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`)

| Change |      Delta |             % |               Size | Samples | Callee                          | Location                                                                                           |
| -----: | ---------: | ------------: | -----------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| -63.6% | -3.493 MiB | 25.0% → 12.5% |   5.49 MiB → 2 MiB |  11 → 4 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer`                     |
| -60.0% | -2.993 MiB | 22.7% → 12.5% |   4.99 MiB → 2 MiB |  10 → 4 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.ConstantConditionEliminationMethodTransformer`          |
| -62.5% | -2.494 MiB |  18.2% → 9.4% | 3.99 MiB → 1.5 MiB |   8 → 3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`                 |
| -62.5% | -2.494 MiB |  18.2% → 9.4% | 3.99 MiB → 1.5 MiB |   8 → 3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`               |
| +80.0% | +1.995 MiB | 11.4% → 28.1% | 2.5 MiB → 4.49 MiB |   5 → 9 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `analyzeInstruction(AbstractInsnNode, int, Frame, Frame, Frame)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |          Delta |             % |              Size | Samples | Callee                                                               | Location                                                                            |
| ------: | -------------: | ------------: | ----------------: | ------: | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|  -30.8% |     -3.992 MiB | 74.3% → 78.3% | 13 MiB → 8.98 MiB | 26 → 18 | `visitMeaningfulInstruction(AbstractInsnNode, int, int, Frame, int)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                     |
|  -42.9% |     -1.497 MiB | 20.0% → 17.4% |  3.49 MiB → 2 MiB |   7 → 4 | `execute(AbstractInsnNode, Interpreter)`                             | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                               |
| removed | -1,021.953 KiB |   5.7% → 0.0% |   1,022 KiB → 0 B |   2 → 0 | `execute(AbstractInsnNode, Interpreter)`                             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |
|     new |   +510.976 KiB |   0.0% → 4.3% |     0 B → 511 KiB |   0 → 1 | `iterator()`                                                         | `java.util.ArrayList`                                                               |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirFunctionCall`)

|  Change |          Delta |             % |                Size | Samples | Callee                                       | Location                                                                                           |
| ------: | -------------: | ------------: | ------------------: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -35.1% |     -3.264 MiB | 60.8% → 62.4% |  9.3 MiB → 6.04 MiB | 18 → 13 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                  |
|  -27.1% |     -1.351 MiB | 32.6% → 37.6% | 4.99 MiB → 3.64 MiB |  10 → 8 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                   |
| removed | -1,021.984 KiB |   6.5% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirLocalVariableAssignmentAnalyzer$Companion$MiniCfgBuilder` |
|   +4.7% |   +234.007 KiB | 31.5% → 52.1% | 4.81 MiB → 5.04 MiB | 10 → 11 | `visitFunctionCall(FirFunctionCall, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.ExpressionCheckersDiagnosticComponent`      |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change |          Delta |             % |                Size | Samples | Callee                                                                                                                                                                                                                           | Location                                                                        |
| -----: | -------------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| -85.7% |     -2.994 MiB |  14.3% → 2.6% |  3.49 MiB → 511 KiB |   5 → 1 | `getDeprecationsProviderFromAnnotations(List, FirSession, boolean, List)`                                                                                                                                                        | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                      |
| -75.0% |     -1.496 MiB |   8.2% → 2.6% |     2 MiB → 511 KiB |   4 → 1 | `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)`         | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                |
|  -6.9% | -1,018.085 KiB | 59.2% → 71.0% | 14.5 MiB → 13.5 MiB | 28 → 27 | `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)`                                                                              | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| -50.0% |   -511.007 KiB |   4.1% → 2.6% | 1,022 KiB → 511 KiB |   2 → 1 | `<init>()`                                                                                                                                                                                                                       | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`         |
| -50.0% |       -511 KiB |   4.1% → 2.6% | 1,022 KiB → 511 KiB |   2 → 1 | `childContext$default(FirDeserializationContext, List, FirBasedSymbol, NameResolver, TypeTable, FqName, DeserializedContainerSource, FirRegularClassSymbol, AnnotationDeserializer, FirConstDeserializer, boolean, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`            |

##### `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change |      Delta |      % |              Size | Samples | Callee                                                                                  | Location                                                         |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -22.4% | -5.485 MiB | 100.0% | 24.4 MiB → 19 MiB | 46 → 38 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `visitWithCallOrAssignment(FirStatement)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change |      Delta |      % |                Size | Samples | Callee                           | Location                                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------- | --------------------------------------------------------------------------------- |
| -42.5% | -5.006 MiB | 100.0% | 11.8 MiB → 6.79 MiB | 23 → 15 | `visitElement(FirElement, Void)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `visitArgumentList(FirArgumentList, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change |     Delta |      % |               Size | Samples | Callee                             | Location                                                                          |
| -----: | --------: | -----: | -----------------: | ------: | ---------------------------------- | --------------------------------------------------------------------------------- |
| -66.7% | -4.99 MiB | 100.0% | 7.49 MiB → 2.5 MiB |  14 → 5 | `visitElement(FirElement, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

| Change |     Delta |      % |               Size | Samples | Callee                                       | Location                                       |
| -----: | --------: | -----: | -----------------: | ------: | -------------------------------------------- | ---------------------------------------------- |
| -66.7% | -4.99 MiB | 100.0% | 7.49 MiB → 2.5 MiB |  14 → 5 | `visitArgumentList(FirArgumentList, Object)` | `org.jetbrains.kotlin.fir.visitors.FirVisitor` |

##### `visitEnd()` (`org.jetbrains.kotlin.codegen.TransformationMethodVisitor`)

|  Change |      Delta |             % |               Size | Samples | Callee                               | Location                                                              |
| ------: | ---------: | ------------: | -----------------: | ------: | ------------------------------------ | --------------------------------------------------------------------- |
|  -34.1% | -7.484 MiB | 97.8% → 82.9% |  22 MiB → 14.5 MiB | 44 → 29 | `performTransformations(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |
| +500.0% | +2.495 MiB |  2.2% → 17.1% | 511 KiB → 2.99 MiB |   1 → 5 | `accept(MethodVisitor)`              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                     |

##### `visitEnd()` (`org.jetbrains.org.objectweb.asm.MethodVisitor`)

| Change |      Delta |      % |                Size | Samples | Callee       | Location                                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------ | ---------------------------------------------------------- |
| -22.2% | -4.989 MiB | 100.0% | 22.5 MiB → 17.5 MiB | 45 → 34 | `visitEnd()` | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor` |

##### `consumeCandidate(TowerGroup, Candidate, ResolutionContext)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateCollector`)

| Change |      Delta |      % |                Size | Samples | Callee                                                                                                         | Location                                                              |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| -31.5% | -4.809 MiB | 100.0% | 15.3 MiB → 10.5 MiB | 28 → 21 | `processCandidate$default(ResolutionStageRunner, Candidate, ResolutionContext, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

# Retained heap profile diff

Retained 16.4 MiB → 18.8 MiB (+2.356 MiB, +14.3%) over 180 objects → 190 objects (93.5 KiB → 101 KiB per object).

| Category         | Change |       Delta |             % |                Size |   Objects |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------: |
| Standard library | +14.8% |   +2.28 MiB | 93.7% → 94.1% | 15.4 MiB → 17.7 MiB | 152 → 178 |
| Ours             |  +7.3% | +77.289 KiB |   6.3% → 5.9% | 1.04 MiB → 1.12 MiB |   28 → 12 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |   Objects | Function                                                                              | Location                                                                           |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +53.2% |   +3.868 MiB | 44.3% → 59.3% | 7.28 MiB → 11.1 MiB | 102 → 133 | `copyOf(byte[], int)`                                                                 | `java.util.Arrays`                                                                 |
| +190.5% | +106.164 KiB |   0.3% → 0.8% |  55.7 KiB → 162 KiB |     1 → 3 | `compress(char[], int, int)`                                                          | `java.lang.StringUTF16`                                                            |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `initCEN(int, ZipCoder)`                                                              | `java.util.zip.ZipFile$Source`                                                     |
|   +7.2% |  +76.429 KiB |   6.3% → 5.9% | 1.04 MiB → 1.11 MiB |     9 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                  |
|     new |  +16.015 KiB |   0.0% → 0.1% |        0 B → 16 KiB |     0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                        | `java.util.concurrent.ConcurrentHashMap`                                           |
|     new |   +2.023 KiB |  0.0% → <0.1% |      0 B → 2.02 KiB |     0 → 1 | `<init>(CharSequence, Lexer)`                                                         | `com.intellij.lang.impl.TokenSequence$Builder`                                     |
|     new |       +336 B |  0.0% → <0.1% |         0 B → 336 B |     0 → 1 | `copyOf(Object[], int, Class)`                                                        | `java.util.Arrays`                                                                 |
| +150.0% |       +288 B |         <0.1% |       192 B → 480 B |     2 → 5 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
|     new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |     0 → 1 | `copyOfRange(byte[], int, int)`                                                       | `java.util.Arrays`                                                                 |
|     new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |     0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`       | `java.lang.ClassLoader`                                                            |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |     0 → 1 | `<init>()`                                                                            | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder` |
| +100.0% |        +56 B |         <0.1% |        56 B → 112 B |     1 → 2 | `grow(int)`                                                                           | `java.util.ArrayList`                                                              |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `arrayOfUninitializedElements(int)`                                                   | `kotlin.collections.builders.ListBuilderKt`                                        |
|     new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |     0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                          | `java.util.LinkedHashMap`                                                          |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                                        | Location                                    |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------- |
|  +53.2% |   +3.868 MiB | 44.3% → 59.3% | 7.28 MiB → 11.1 MiB | 102 → 133 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                          |
| +190.5% | +106.164 KiB |   0.3% → 0.8% |  55.7 KiB → 162 KiB |     1 → 3 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                     |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`              |
|     new |  +16.015 KiB |   0.0% → 0.1% |        0 B → 16 KiB |     0 → 1 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                  | `java.util.concurrent.ConcurrentHashMap`    |
|     new |       +336 B |  0.0% → <0.1% |         0 B → 336 B |     0 → 1 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                          |
|     new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |     0 → 1 | `copyOfRange(byte[], int, int)`                                                 | `java.util.Arrays`                          |
|     new |       +112 B |  0.0% → <0.1% |         0 B → 112 B |     0 → 1 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                     |
| +100.0% |        +56 B |         <0.1% |        56 B → 112 B |     1 → 2 | `grow(int)`                                                                     | `java.util.ArrayList`                       |
|     new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |     0 → 1 | `arrayOfUninitializedElements(int)`                                             | `kotlin.collections.builders.ListBuilderKt` |
|     new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |     0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                   |

##### Ours

|  Change |       Delta |            % |                Size | Objects | Function                                                                              | Location                                                                           |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|   +7.2% | +76.429 KiB |  6.3% → 5.9% | 1.04 MiB → 1.11 MiB |   9 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                  |
|     new |  +2.023 KiB | 0.0% → <0.1% |      0 B → 2.02 KiB |   0 → 1 | `<init>(CharSequence, Lexer)`                                                         | `com.intellij.lang.impl.TokenSequence$Builder`                                     |
| +150.0% |      +288 B |        <0.1% |       192 B → 480 B |   2 → 5 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
|     new |       +64 B | 0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `<init>()`                                                                            | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder` |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                                     | Location                                                                                |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  -40.9% |   -1.489 MiB | 22.2% → 11.5% | 3.64 MiB → 2.15 MiB | 31 → 26 | `clone()`                                                                                                                    | `java.lang.Object`                                                                      |
| removed | -256.093 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   2 → 0 | `initTable()`                                                                                                                | `java.util.concurrent.ConcurrentHashMap`                                                |
|  -13.5% |  -40.031 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 1 | `resize()`                                                                                                                   | `java.util.HashMap`                                                                     |
| removed |   -9.953 KiB |   0.1% → 0.0% |      9.95 KiB → 0 B |   1 → 0 | `copyOf(int[], int)`                                                                                                         | `java.util.Arrays`                                                                      |
| removed |       -728 B |  <0.1% → 0.0% |         728 B → 0 B |   1 → 0 | `convertToIrAndActualizeForJvm-_I1IR-w(List, Fir2IrExtensions, CompilerConfiguration, BaseDiagnosticsCollector, Collection)` | `org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`           |
|  -57.7% |       -240 B |         <0.1% |       416 B → 176 B |   4 → 1 | `copyOfRangeByte(byte[], int, int)`                                                                                          | `java.util.Arrays`                                                                      |
| removed |       -136 B |  <0.1% → 0.0% |         136 B → 0 B |   1 → 0 | `<init>(int, int)`                                                                                                           | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                   |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |   1 → 0 | `getBytes(int, int)`                                                                                                         | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`          |
| removed |        -80 B |  <0.1% → 0.0% |          80 B → 0 B |   2 → 0 | `newFieldMap(int)`                                                                                                           | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                          |
| removed |        -80 B |  <0.1% → 0.0% |          80 B → 0 B |   1 → 0 | `<clinit>()`                                                                                                                 | `org.jetbrains.kotlin.backend.common.lower.inline.SyntheticAccessorGenerator$Companion` |
| removed |        -72 B |  <0.1% → 0.0% |          72 B → 0 B |   1 → 0 | `build()`                                                                                                                    | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`                |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `transformArguments(FirTransformer, Object)`                                                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`                 |
| removed |        -56 B |  <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)`                                                                      | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                       |
| removed |        -48 B |  <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `visitLabel(Label)`                                                                                                          | `org.jetbrains.org.objectweb.asm.MethodWriter`                                          |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |   1 → 0 | `visitInsn(int)`                                                                                                             | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                       |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `_init_$lambda$0(int, int)`                                                                                                  | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                   |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `newFieldSet()`                                                                                                              | `org.jetbrains.kotlin.protobuf.FieldSet`                                                |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `topLevel(Name)`                                                                                                             | `org.jetbrains.kotlin.name.FqName$Companion`                                            |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `fromString(String, boolean)`                                                                                                | `org.jetbrains.kotlin.name.ClassId$Companion`                                           |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `doRemap(int)`                                                                                                               | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`                                  |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                            | Location                                 |
| ------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------- | ---------------------------------------- |
|  -40.9% |   -1.489 MiB | 22.2% → 11.5% | 3.64 MiB → 2.15 MiB | 31 → 26 | `clone()`                           | `java.lang.Object`                       |
| removed | -256.093 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   2 → 0 | `initTable()`                       | `java.util.concurrent.ConcurrentHashMap` |
|  -13.5% |  -40.031 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 1 | `resize()`                          | `java.util.HashMap`                      |
| removed |   -9.953 KiB |   0.1% → 0.0% |      9.95 KiB → 0 B |   1 → 0 | `copyOf(int[], int)`                | `java.util.Arrays`                       |
|  -57.7% |       -240 B |         <0.1% |       416 B → 176 B |   4 → 1 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays`                       |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `iterator()`                        | `kotlin.sequences.TransformingSequence`  |
|   -3.4% |         -8 B |         <0.1% |       232 B → 224 B |       1 | `newInstance(Class, int)`           | `java.lang.reflect.Array`                |

##### Ours

|  Change |  Delta |            % |        Size | Objects | Function                                                                                                                     | Location                                                                                |
| ------: | -----: | -----------: | ----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| removed | -728 B | <0.1% → 0.0% | 728 B → 0 B |   1 → 0 | `convertToIrAndActualizeForJvm-_I1IR-w(List, Fir2IrExtensions, CompilerConfiguration, BaseDiagnosticsCollector, Collection)` | `org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`           |
| removed | -136 B | <0.1% → 0.0% | 136 B → 0 B |   1 → 0 | `<init>(int, int)`                                                                                                           | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                   |
| removed | -112 B | <0.1% → 0.0% | 112 B → 0 B |   1 → 0 | `getBytes(int, int)`                                                                                                         | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`          |
| removed |  -80 B | <0.1% → 0.0% |  80 B → 0 B |   2 → 0 | `newFieldMap(int)`                                                                                                           | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                          |
| removed |  -80 B | <0.1% → 0.0% |  80 B → 0 B |   1 → 0 | `<clinit>()`                                                                                                                 | `org.jetbrains.kotlin.backend.common.lower.inline.SyntheticAccessorGenerator$Companion` |
| removed |  -72 B | <0.1% → 0.0% |  72 B → 0 B |   1 → 0 | `build()`                                                                                                                    | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`                |
| removed |  -64 B | <0.1% → 0.0% |  64 B → 0 B |   1 → 0 | `transformArguments(FirTransformer, Object)`                                                                                 | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`                 |
| removed |  -56 B | <0.1% → 0.0% |  56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)`                                                                      | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                       |
| removed |  -48 B | <0.1% → 0.0% |  48 B → 0 B |   1 → 0 | `visitLabel(Label)`                                                                                                          | `org.jetbrains.org.objectweb.asm.MethodWriter`                                          |
| removed |  -40 B | <0.1% → 0.0% |  40 B → 0 B |   1 → 0 | `visitInsn(int)`                                                                                                             | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                       |
| removed |  -32 B | <0.1% → 0.0% |  32 B → 0 B |   1 → 0 | `_init_$lambda$0(int, int)`                                                                                                  | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                   |
| removed |  -24 B | <0.1% → 0.0% |  24 B → 0 B |   1 → 0 | `newFieldSet()`                                                                                                              | `org.jetbrains.kotlin.protobuf.FieldSet`                                                |
| removed |  -24 B | <0.1% → 0.0% |  24 B → 0 B |   1 → 0 | `topLevel(Name)`                                                                                                             | `org.jetbrains.kotlin.name.FqName$Companion`                                            |
| removed |  -24 B | <0.1% → 0.0% |  24 B → 0 B |   1 → 0 | `fromString(String, boolean)`                                                                                                | `org.jetbrains.kotlin.name.ClassId$Companion`                                           |
| removed |  -24 B | <0.1% → 0.0% |  24 B → 0 B |   1 → 0 | `doRemap(int)`                                                                                                               | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`                                  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size |   Objects | Location                |
| -----: | ---------: | -----: | ------------------: | --------: | ----------------------- |
| +53.2% | +3.868 MiB | 100.0% | 7.28 MiB → 11.1 MiB | 102 → 133 | `java.util.Arrays:3539` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |      % |               Size | Objects | Location                    |
| ------: | -----------: | -----: | -----------------: | ------: | --------------------------- |
| +190.5% | +106.164 KiB | 100.0% | 55.7 KiB → 162 KiB |   1 → 3 | `java.lang.StringUTF16:211` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |             % |                Size | Objects | Location                            |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------------- |
|  +2.3% | +83.265 KiB | 90.6% → 90.7% | 3.51 MiB → 3.59 MiB |       3 | `java.util.zip.ZipFile$Source:1733` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |       Delta |      % |                Size | Objects | Location                                                             |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------------------------------------------------- |
|  +7.2% | +76.429 KiB | 100.0% | 1.04 MiB → 1.11 MiB |   9 → 4 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |         Size | Objects | Location                                      |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:2431` |

##### `<init>(CharSequence, Lexer)` (`com.intellij.lang.impl.TokenSequence$Builder`)

| Change |      Delta |             % |           Size | Objects | Location                                          |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------- |
|    new | +2.023 KiB | 0.0% → 100.0% | 0 B → 2.02 KiB |   0 → 1 | `com.intellij.lang.impl.TokenSequence$Builder:99` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +336 B | 0.0% → 100.0% | 0 B → 336 B |   0 → 1 | `java.util.Arrays:3513` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change |  Delta |      % |          Size | Objects | Location                                             |
| ------: | -----: | -----: | ------------: | ------: | ---------------------------------------------------- |
| +150.0% | +288 B | 100.0% | 192 B → 480 B |   2 → 5 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `java.util.Arrays:3856` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                                                              |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder:22` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |      % |         Size | Objects | Location                  |
| ------: | ----: | -----: | -----------: | ------: | ------------------------- |
| +100.0% | +56 B | 100.0% | 56 B → 112 B |   1 → 2 | `java.util.ArrayList:239` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change | Delta |             % |       Size | Objects | Location                                        |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `kotlin.collections.builders.ListBuilderKt:624` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                      |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `java.util.LinkedHashMap:281` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -256.093 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   2 → 0 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Objects | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- |
| -13.5% | -40.031 KiB | 100.0% | 296 KiB → 256 KiB |   3 → 1 | `java.util.HashMap:710` |

##### `copyOf(int[], int)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Objects | Location                |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- |
| removed | -9.953 KiB | 100.0% → 0.0% | 9.95 KiB → 0 B |   1 → 0 | `java.util.Arrays:3595` |

##### `convertToIrAndActualizeForJvm-_I1IR-w(List, Fir2IrExtensions, CompilerConfiguration, BaseDiagnosticsCollector, Collection)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`)

|  Change |  Delta |             % |        Size | Objects | Location                                                                          |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- |
| removed | -728 B | 100.0% → 0.0% | 728 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt:101` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |      % |          Size | Objects | Location                |
| -----: | -----: | -----: | ------------: | ------: | ----------------------- |
| -57.7% | -240 B | 100.0% | 416 B → 176 B |   4 → 1 | `java.util.Arrays:3863` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |  Delta |             % |        Size | Objects | Location                                                 |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------------------------- |
| removed | -136 B | 100.0% → 0.0% | 136 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|  Change |  Delta |             % |        Size | Objects | Location                                                                          |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % |       Size | Objects | Location                                           |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                                                                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder:47` |

##### `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`)

|  Change | Delta |             % |       Size | Objects | Location                                                                    |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl:121` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:379` |

##### `visitLabel(Label)` (`org.jetbrains.org.objectweb.asm.MethodWriter`)

|  Change | Delta |             % |       Size | Objects | Location                                            |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.MethodWriter:1244` |

##### `visitInsn(int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:341` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|  Change | Delta |             % |       Size | Objects | Location                                                                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------ |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer:47` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % |       Size | Objects | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

##### `topLevel(Name)` (`org.jetbrains.kotlin.name.FqName$Companion`)

|  Change | Delta |             % |       Size | Objects | Location                                         |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.name.FqName$Companion:124` |

##### `fromString(String, boolean)` (`org.jetbrains.kotlin.name.ClassId$Companion`)

|  Change | Delta |             % |       Size | Objects | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.name.ClassId$Companion:144` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

|  Change | Delta |             % |       Size | Objects | Location                                                  |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper:70` |

##### `iterator()` (`kotlin.sequences.TransformingSequence`)

|  Change | Delta |             % |       Size | Objects | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `kotlin.sequences.TransformingSequence:240` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % |          Size | Objects | Location                     |
| -----: | ----: | -----: | ------------: | ------: | ---------------------------- |
|  -3.4% |  -8 B | 100.0% | 232 B → 224 B |       1 | `java.lang.reflect.Array:78` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size |   Objects | Caller          | Location                        |
| -----: | ---------: | -----: | ------------------: | --------: | --------------- | ------------------------------- |
| +53.2% | +3.868 MiB | 100.0% | 7.28 MiB → 11.1 MiB | 102 → 133 | `toByteArray()` | `java.io.ByteArrayOutputStream` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |        Delta |      % |               Size | Objects | Caller                           | Location           |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------- | ------------------ |
| +190.5% | +106.164 KiB | 100.0% | 55.7 KiB → 162 KiB |   1 → 3 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |                Size | Objects | Caller                                          | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |      Delta |             % |           Size | Objects | Caller           | Location                                                                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
|     new | +1.112 MiB | 0.0% → 100.0% | 0 B → 1.11 MiB |   0 → 4 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b0013f73c0` |
| removed | -1.038 MiB | 100.0% → 0.0% | 1.04 MiB → 0 B |   9 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f5a40` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

| Change |       Delta |             % |         Size | Objects | Caller                | Location                                 |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------- | ---------------------------------------- |
|    new | +16.015 KiB | 0.0% → 100.0% | 0 B → 16 KiB |   0 → 1 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<init>(CharSequence, Lexer)` (`com.intellij.lang.impl.TokenSequence$Builder`)

| Change |      Delta |             % |           Size | Objects | Caller                               | Location                               |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------ | -------------------------------------- |
|    new | +2.023 KiB | 0.0% → 100.0% | 0 B → 2.02 KiB |   0 → 1 | `performLexing(CharSequence, Lexer)` | `com.intellij.lang.impl.TokenSequence` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller                  | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- | ------------------ |
|    new | +336 B | 0.0% → 100.0% | 0 B → 336 B |   0 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change |  Delta |      % |          Size | Objects | Caller                                                      | Location                                        |
| ------: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| +150.0% | +288 B | 100.0% | 192 B → 480 B |   2 → 5 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller                                | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------- | ------------------ |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |  Delta |             % |        Size | Objects | Caller                                                    | Location                |
| -----: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------- | ----------------------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`)

| Change | Delta |             % |       Size | Objects | Caller       | Location                                                                           |
| -----: | ----: | ------------: | ---------: | ------: | ------------ | ---------------------------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `visitEnd()` | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1` |

##### `grow(int)` (`java.util.ArrayList`)

| Change | Delta |            % |       Size | Objects | Caller               | Location              |
| -----: | ----: | -----------: | ---------: | ------: | -------------------- | --------------------- |
|    new | +56 B | 0.0% → 50.0% | 0 B → 56 B |   0 → 1 | `addAll(Collection)` | `java.util.ArrayList` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change | Delta |             % |       Size | Objects | Caller        | Location                                  |
| -----: | ----: | ------------: | ---------: | ------: | ------------- | ----------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `<init>(int)` | `kotlin.collections.builders.ListBuilder` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller                                          | Location            |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `clone()` (`java.lang.Object`)

| Change |      Delta |      % |                Size | Objects | Caller                | Location           |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------- | ------------------ |
| -40.9% | -1.489 MiB | 100.0% | 3.64 MiB → 2.15 MiB | 31 → 26 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Caller                            | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -256.093 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   2 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Objects | Caller                                          | Location            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
| -13.5% | -40.031 KiB | 100.0% | 296 KiB → 256 KiB |   3 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `copyOf(int[], int)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Objects | Caller                | Location                      |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | ----------------------------- |
| removed | -9.953 KiB | 100.0% → 0.0% | 9.95 KiB → 0 B |   1 → 0 | `realloc(int[], int)` | `com.intellij.util.ArrayUtil` |

##### `convertToIrAndActualizeForJvm-_I1IR-w(List, Fir2IrExtensions, CompilerConfiguration, BaseDiagnosticsCollector, Collection)` (`org.jetbrains.kotlin.cli.jvm.compiler.legacy.pipeline.JvmCompilerPipelineKt`)

|  Change |  Delta |             % |        Size | Objects | Caller                                            | Location                                                       |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------- | -------------------------------------------------------------- |
| removed | -728 B | 100.0% → 0.0% | 728 B → 0 B |   1 → 0 | `executePhase(JvmFrontendPipelineArtifact, List)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |      % |          Size | Objects | Caller                          | Location           |
| -----: | -----: | -----: | ------------: | ------: | ------------------------------- | ------------------ |
| -57.7% | -240 B | 100.0% | 416 B → 176 B |   4 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |  Delta |             % |        Size | Objects | Caller             | Location                                                       |
| ------: | -----: | ------------: | ----------: | ------: | ------------------ | -------------------------------------------------------------- |
| removed | -136 B | 100.0% → 0.0% | 136 B → 0 B |   1 → 0 | `<init>(int, int)` | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                                      | Location                                                          |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | ---------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `<clinit>()` (`org.jetbrains.kotlin.backend.common.lower.inline.SyntheticAccessorGenerator$Companion`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                                                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ----------------------------------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.backend.common.lower.inline.SyntheticAccessorGenerator` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirValueParameterBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                                                                                                       | Location                                                         |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   1 → 0 | `addValueParametersTo(List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`)

|  Change | Delta |             % |       Size | Objects | Caller                                                              | Location                                                                                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `transformArgumentList(FirCall, ExpectedArgumentType$ArgumentsMap)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Caller                                                  | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `visitLabel(Label)` (`org.jetbrains.org.objectweb.asm.MethodWriter`)

|  Change | Delta |             % |       Size | Objects | Caller              | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ------------------- | ----------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `visitLabel(Label)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `visitInsn(int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Caller           | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ---------------- | ----------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `visitInsn(int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|  Change | Delta |             % |       Size | Objects | Caller                   | Location                                                                                         |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x00000070018e8518` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                                                               |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | ---------------------------------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `topLevel(Name)` (`org.jetbrains.kotlin.name.FqName$Companion`)

|  Change | Delta |             % |       Size | Objects | Caller                 | Location                            |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------- | ----------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(FqName, Name)` | `org.jetbrains.kotlin.name.ClassId` |

##### `fromString(String, boolean)` (`org.jetbrains.kotlin.name.ClassId$Companion`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location                                                                |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | ----------------------------------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `getClassId(NameResolver, int)` | `org.jetbrains.kotlin.serialization.deserialization.NameResolverUtilKt` |

##### `doRemap(int)` (`org.jetbrains.kotlin.codegen.inline.LocalVarRemapper`)

|  Change | Delta |             % |       Size | Objects | Caller       | Location                                               |
| ------: | ----: | ------------: | ---------: | ------: | ------------ | ------------------------------------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `remap(int)` | `org.jetbrains.kotlin.codegen.inline.LocalVarRemapper` |

##### `iterator()` (`kotlin.sequences.TransformingSequence`)

|  Change | Delta |             % |       Size | Objects | Caller                      | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------- | ----------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(FilteringSequence)` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `newInstance(Class, int)` (`java.lang.reflect.Array`)

| Change | Delta |      % |          Size | Objects | Caller                         | Location           |
| -----: | ----: | -----: | ------------: | ------: | ------------------------------ | ------------------ |
|  -3.4% |  -8 B | 100.0% | 232 B → 224 B |       1 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|      Change |        Delta |             % |                Size |   Objects | Function                                                                     | Location                                                                                                                                          |
| ----------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
|      +16.2% |   +2.443 MiB | 91.6% → 93.1% | 15.1 MiB → 17.5 MiB | 152 → 175 | `main(String[])`                                                             | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                       |
|      +16.2% |   +2.443 MiB | 91.6% → 93.1% | 15.1 MiB → 17.5 MiB | 154 → 176 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                       |
|      +21.8% |   +2.378 MiB | 66.4% → 70.8% | 10.9 MiB → 13.3 MiB | 133 → 159 | `copyOf(byte[], int)`                                                        | `java.util.Arrays`                                                                                                                                |
|      +21.8% |   +2.378 MiB | 66.4% → 70.8% | 10.9 MiB → 13.3 MiB | 133 → 159 | `toByteArray()`                                                              | `java.io.ByteArrayOutputStream`                                                                                                                   |
|      +21.3% |   +2.378 MiB | 68.0% → 72.1% | 11.2 MiB → 13.5 MiB | 134 → 160 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                            |
|      +21.3% |   +2.378 MiB | 68.0% → 72.1% | 11.2 MiB → 13.5 MiB | 134 → 160 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                            |
| +1041757.1% |   +1.112 MiB |  <0.1% → 5.9% |    112 B → 1.11 MiB |     1 → 4 | `invoke(Object)`                                                             | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b0013f73c0`                                                      |
|      +17.3% | +192.109 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |    11 → 8 | `transformInplace(List, FirTransformer, Object)`                             | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                          |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `computeTopLevelCallableNames(FqName)`                                       | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`                                            |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(Object, Void)`                                                       | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(Object, Object)`                                                     | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getTopLevelCallableNamesInPackage(FqName)`                                  | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                                                         |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `computeTopLevelCallableNames(FqName)`                                       | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`                                                                |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `computeTopLevelCallableNames(FqName)`                                       | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`                                         |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `mayHaveTopLevelCallable(FqName, Name)`                                      | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                                                               |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getTopLevelPropertySymbolsTo(List, FqName, Name)`                           | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                                               |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getTopLevelPropertySymbols(FqName, Name)`                                   | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`                                                                                    |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `processPropertiesByName(Name, Function1)`                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                                                                    |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(FirScope, Name, Function1)`                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                     |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(Object, Object, Object)`                                             | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                     |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                           | Location                                       |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------ | ---------------------------------------------- |
|  +21.8% |   +2.378 MiB | 66.4% → 70.8% | 10.9 MiB → 13.3 MiB | 133 → 159 | `copyOf(byte[], int)`                                              | `java.util.Arrays`                             |
|  +21.8% |   +2.378 MiB | 66.4% → 70.8% | 10.9 MiB → 13.3 MiB | 133 → 159 | `toByteArray()`                                                    | `java.io.ByteArrayOutputStream`                |
| +190.5% | +106.164 KiB |   0.3% → 0.8% |  55.7 KiB → 162 KiB |     1 → 3 | `compress(char[], int, int)`                                       | `java.lang.StringUTF16`                        |
| +190.5% | +106.164 KiB |   0.3% → 0.8% |  55.7 KiB → 162 KiB |     1 → 3 | `<init>(char[], int, int, Void)`                                   | `java.lang.String`                             |
| +190.5% | +106.164 KiB |   0.3% → 0.8% |  55.7 KiB → 162 KiB |     1 → 3 | `<init>(char[], int, int)`                                         | `java.lang.String`                             |
|   +2.3% |  +90.476 KiB | 23.5% → 21.0% | 3.86 MiB → 3.95 MiB |     4 → 5 | `findResource(String, boolean)`                                    | `jdk.internal.loader.URLClassPath`             |
|   +2.3% |  +90.476 KiB | 23.5% → 21.0% | 3.86 MiB → 3.95 MiB |     4 → 5 | `run()`                                                            | `java.net.URLClassLoader$2`                    |
|   +2.3% |  +90.476 KiB | 23.5% → 21.0% | 3.86 MiB → 3.95 MiB |     4 → 5 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`               |
|   +2.3% |  +90.476 KiB | 23.5% → 21.0% | 3.86 MiB → 3.95 MiB |     4 → 5 | `doPrivileged(PrivilegedAction, AccessControlContext)`             | `java.security.AccessController`               |
|   +2.3% |  +90.476 KiB | 23.5% → 21.0% | 3.86 MiB → 3.95 MiB |     4 → 5 | `findResource(String)`                                             | `java.net.URLClassLoader`                      |
|   +2.3% |  +90.476 KiB | 23.5% → 21.0% | 3.86 MiB → 3.95 MiB |     4 → 5 | `getResource(String)`                                              | `java.lang.ClassLoader`                        |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `initCEN(int, ZipCoder)`                                           | `java.util.zip.ZipFile$Source`                 |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                    | `java.util.zip.ZipFile$Source`                 |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `get(File, boolean, ZipCoder)`                                     | `java.util.zip.ZipFile$Source`                 |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `<init>(ZipFile, ZipCoder, File, int)`                             | `java.util.zip.ZipFile$CleanableResource`      |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `<init>(File, int, Charset)`                                       | `java.util.zip.ZipFile`                        |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `<init>(File, int)`                                                | `java.util.zip.ZipFile`                        |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `<init>(File, boolean, int, Runtime$Version)`                      | `java.util.jar.JarFile`                        |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `getJarFile(URL)`                                                  | `jdk.internal.loader.URLClassPath$JarLoader`   |
|   +2.1% |  +83.265 KiB | 23.6% → 21.0% | 3.87 MiB → 3.95 MiB |         5 | `run()`                                                            | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### Ours

|      Change |        Delta |             % |                Size |   Objects | Function                                                                     | Location                                                                                                                                          |
| ----------: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
|      +16.2% |   +2.443 MiB | 91.6% → 93.1% | 15.1 MiB → 17.5 MiB | 152 → 175 | `main(String[])`                                                             | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                       |
|      +16.2% |   +2.443 MiB | 91.6% → 93.1% | 15.1 MiB → 17.5 MiB | 154 → 176 | `run(String[])`                                                              | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                       |
|      +21.3% |   +2.378 MiB | 68.0% → 72.1% | 11.2 MiB → 13.5 MiB | 134 → 160 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                            |
|      +21.3% |   +2.378 MiB | 68.0% → 72.1% | 11.2 MiB → 13.5 MiB | 134 → 160 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                            |
| +1041757.1% |   +1.112 MiB |  <0.1% → 5.9% |    112 B → 1.11 MiB |     1 → 4 | `invoke(Object)`                                                             | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b0013f73c0`                                                      |
|      +17.3% | +192.109 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |    11 → 8 | `transformInplace(List, FirTransformer, Object)`                             | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                          |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `computeTopLevelCallableNames(FqName)`                                       | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`                                            |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(Object, Void)`                                                       | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(Object, Object)`                                                     | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getTopLevelCallableNamesInPackage(FqName)`                                  | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                                                         |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `computeTopLevelCallableNames(FqName)`                                       | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`                                                                |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `computeTopLevelCallableNames(FqName)`                                       | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`                                         |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `mayHaveTopLevelCallable(FqName, Name)`                                      | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                                                               |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getTopLevelPropertySymbolsTo(List, FqName, Name)`                           | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                                               |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getTopLevelPropertySymbols(FqName, Name)`                                   | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`                                                                                    |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `processPropertiesByName(Name, Function1)`                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                                                                    |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(FirScope, Name, Function1)`                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                     |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `invoke(Object, Object, Object)`                                             | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                     |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `processPropertiesByName(Name, Function1)`                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                               |
|      +17.3% | +192.023 KiB |   6.6% → 6.8% | 1.08 MiB → 1.27 MiB |     9 → 7 | `getProperties(FirScope, Name)`                                              | `org.jetbrains.kotlin.fir.scopes.FirScopeKt`                                                                                                      |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                         | Location                                                                                     |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -40.9% |   -1.489 MiB | 22.2% → 11.5% | 3.64 MiB → 2.15 MiB | 31 → 26 | `clone()`                                                                                                        | `java.lang.Object`                                                                           |
| removed |   -1.038 MiB |   6.3% → 0.0% |      1.04 MiB → 0 B |   9 → 0 | `invoke(Object)`                                                                                                 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f5a40` |
| removed | -256.093 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   2 → 0 | `initTable()`                                                                                                    | `java.util.concurrent.ConcurrentHashMap`                                                     |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                                                            | `java.util.concurrent.ConcurrentHashMap`                                                     |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                                                            | `jdk.jfr.internal.StringPool`                                                                |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                                                              | `jdk.jfr.internal.StringPool`                                                                |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                                                              | `jdk.jfr.internal.event.EventWriter`                                                         |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)`                                | `jdk.jfr.events.ActiveRecordingEvent`                                                        |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                                                              | `jdk.jfr.internal.PlatformRecorder`                                                          |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                                                       | `jdk.jfr.internal.PlatformRecorder`                                                          |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                                                        | `jdk.jfr.internal.PlatformRecording`                                                         |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                                                        | `jdk.jfr.Recording`                                                                          |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                                                        | `jdk.jfr.internal.dcmd.DCmdStart`                                                            |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                                                  | `jdk.jfr.internal.dcmd.AbstractDCmd`                                                         |
|  -93.7% | -240.078 KiB |   1.5% → 0.1% |    256 KiB → 16 KiB |   2 → 1 | `putVal(Object, Object, boolean)`                                                                                | `java.util.concurrent.ConcurrentHashMap`                                                     |
|  -13.5% |  -40.031 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 1 | `resize()`                                                                                                       | `java.util.HashMap`                                                                          |
|  -13.5% |  -39.992 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 2 | `putVal(int, Object, Object, boolean, boolean)`                                                                  | `java.util.HashMap`                                                                          |
|  -13.5% |  -39.992 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 2 | `put(Object, Object)`                                                                                            | `java.util.HashMap`                                                                          |
|  -99.3% |  -34.007 KiB |  0.2% → <0.1% |    34.3 KiB → 248 B |   8 → 3 | `resumeWith(Object)`                                                                                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                        |
|  -99.8% |   -32.39 KiB |  0.2% → <0.1% |     32.5 KiB → 64 B |   7 → 1 | `processFunctionsAndConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`                             |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                              |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  -40.9% |   -1.489 MiB | 22.2% → 11.5% | 3.64 MiB → 2.15 MiB | 31 → 26 | `clone()`                                                                         | `java.lang.Object`                                    |
| removed | -256.093 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   2 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`              |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`              |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                         |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                         |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                  |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                 |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                   |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                   |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                  |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                   |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                     |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                  |
|  -93.7% | -240.078 KiB |   1.5% → 0.1% |    256 KiB → 16 KiB |   2 → 1 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`              |
|  -13.5% |  -40.031 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 1 | `resize()`                                                                        | `java.util.HashMap`                                   |
|  -13.5% |  -39.992 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 2 | `putVal(int, Object, Object, boolean, boolean)`                                   | `java.util.HashMap`                                   |
|  -13.5% |  -39.992 KiB |   1.8% → 1.3% |   296 KiB → 256 KiB |   3 → 2 | `put(Object, Object)`                                                             | `java.util.HashMap`                                   |
|  -99.3% |  -34.007 KiB |  0.2% → <0.1% |    34.3 KiB → 248 B |   8 → 3 | `resumeWith(Object)`                                                              | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  -99.8% |  -32.296 KiB |  0.2% → <0.1% |     32.4 KiB → 64 B |   5 → 1 | `getValue()`                                                                      | `kotlin.SafePublicationLazyImpl`                      |
| removed |   -9.953 KiB |   0.1% → 0.0% |      9.95 KiB → 0 B |   1 → 0 | `copyOf(int[], int)`                                                              | `java.util.Arrays`                                    |

##### Ours

|  Change |       Delta |            % |             Size | Objects | Function                                                                                                                                                                                                                                                 | Location                                                                                                                             |
| ------: | ----------: | -----------: | ---------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| removed |  -1.038 MiB |  6.3% → 0.0% |   1.04 MiB → 0 B |   9 → 0 | `invoke(Object)`                                                                                                                                                                                                                                         | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f5a40`                                         |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `processFunctionsAndConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`                                                                     |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)`                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`                                                                     |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                                               |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                                               |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `invokeSuspend(Object)`                                                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                                |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                                                   |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `runTasks()`                                                                                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                                                   |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)`                                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                                                      |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)`                                                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                                                      |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)`                                                                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                                                      |
|  -99.8% |  -32.39 KiB | 0.2% → <0.1% |  32.5 KiB → 64 B |   7 → 1 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                       | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                             |
|  -99.8% | -32.382 KiB | 0.2% → <0.1% |  32.4 KiB → 64 B |   7 → 1 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)`                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                                        |
| removed | -32.335 KiB |  0.2% → 0.0% |   32.3 KiB → 0 B |   4 → 0 | `visitParameterAnnotation(int, ClassId, SourceElement)`                                                                                                                                                                                                  | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$AnnotationVisitorForMethod` |
| removed | -32.335 KiB |  0.2% → 0.0% |   32.3 KiB → 0 B |   4 → 0 | `visitParameterAnnotation(int, String, boolean)`                                                                                                                                                                                                         | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4$2`                                                                          |
| removed | -32.335 KiB |  0.2% → 0.0% |   32.3 KiB → 0 B |   4 → 0 | `readParameterAnnotations(MethodVisitor, Context, int, boolean)`                                                                                                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassReader`                                                                                        |
|  -99.8% |  -32.32 KiB | 0.2% → <0.1% |  32.4 KiB → 64 B |   6 → 1 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                             |
|  -99.8% |  -32.32 KiB | 0.2% → <0.1% |  32.4 KiB → 64 B |   6 → 1 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                             |
|  -99.8% |  -32.32 KiB | 0.2% → <0.1% |  32.4 KiB → 64 B |   6 → 1 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                                             |
|  -99.6% | -32.312 KiB | 0.2% → <0.1% | 32.4 KiB → 120 B |   6 → 2 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                                                                                                                                                  | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                                                     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |      Delta |      % |                Size |   Objects | Callee          | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | --------------- | ------------------------------------------- |
| +16.2% | +2.443 MiB | 100.0% | 15.1 MiB → 17.5 MiB | 152 → 175 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |             % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +21.3% |  +2.378 MiB | 74.2% → 77.4% | 11.2 MiB → 13.5 MiB | 134 → 160 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  +1.7% | +66.757 KiB | 25.8% → 22.6% | 3.89 MiB → 3.96 MiB |   20 → 16 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size | Objects | Callee    | Location           |
| -----: | ---------: | ------------: | ------------------: | ------: | --------- | ------------------ |
| -40.9% | -1.489 MiB | 33.4% → 16.2% | 3.64 MiB → 2.15 MiB | 31 → 26 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |      Delta |      % |                Size |   Objects | Callee                | Location           |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------- | ------------------ |
| +21.8% | +2.378 MiB | 100.0% | 10.9 MiB → 13.3 MiB | 133 → 159 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |      Delta |             % |                Size |   Objects | Callee          | Location                        |
| -----: | ---------: | ------------: | ------------------: | --------: | --------------- | ------------------------------- |
| +21.8% | +2.378 MiB | 97.8% → 98.2% | 10.9 MiB → 13.3 MiB | 133 → 159 | `toByteArray()` | `java.io.ByteArrayOutputStream` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |      Delta |           % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | ---------: | ----------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +21.3% | +2.378 MiB |      100.0% | 11.2 MiB → 13.5 MiB | 134 → 160 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  +2.1% |  +9.89 KiB | 4.1% → 3.5% |   471 KiB → 481 KiB |         4 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b0013f73c0`)

|  Change |      Delta |             % |           Size | Objects | Callee                                                                                      | Location                                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|     new | +1.112 MiB | 0.0% → 100.0% | 0 B → 1.11 MiB |   0 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| removed |     -112 B | 100.0% → 0.0% |    112 B → 0 B |   1 → 0 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change |        Delta |            % |                Size | Objects | Callee                              | Location                                                           |
| ------: | -----------: | -----------: | ------------------: | ------: | ----------------------------------- | ------------------------------------------------------------------ |
|  +17.3% | +192.023 KiB |       100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |
| +175.0% |       +112 B |        <0.1% |        64 B → 176 B |       1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |
| removed |        -24 B | <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`               |

##### `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                  | Location                                                                         |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `access$getPackageParts(AbstractFirDeserializedSymbolProvider, FqName)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                                                                                                  |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`    |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1` |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`)

| Change |        Delta |      % |                Size | Objects | Callee                 | Location                                                                                                                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `invoke(Object, Void)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `getValue(Object, Object)` | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache` |

##### `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                                      | Location                                                                  |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `getTopLevelCallableNamesInPackage(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider` |

##### `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                                                                           |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider` |

##### `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                                      | Location                                                                  |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `getTopLevelCallableNamesInPackage(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider` |

##### `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                                  | Location                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `mayHaveTopLevelCallable(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `getTopLevelPropertySymbols(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                                             | Location                                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------- | ----------------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `getTopLevelPropertySymbolsTo(List, FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`)

| Change |        Delta |      % |                Size | Objects | Callee                                     | Location                                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------ | -------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `getTopLevelPropertySymbols(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider` |

##### `invoke(FirScope, Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

| Change |        Delta |      % |                Size | Objects | Callee                                     | Location                                                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------------------ |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `processPropertiesByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope` |

##### `invoke(Object, Object, Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

| Change |        Delta |      % |                Size | Objects | Callee                              | Location                                                                                      |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `invoke(FirScope, Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |

##### `<init>(char[], int, int, Void)` (`java.lang.String`)

|  Change |        Delta |      % |               Size | Objects | Callee                       | Location                |
| ------: | -----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| +190.5% | +106.164 KiB | 100.0% | 55.7 KiB → 162 KiB |   1 → 3 | `compress(char[], int, int)` | `java.lang.StringUTF16` |

##### `<init>(char[], int, int)` (`java.lang.String`)

|  Change |        Delta |      % |               Size | Objects | Callee                           | Location           |
| ------: | -----------: | -----: | -----------------: | ------: | -------------------------------- | ------------------ |
| +190.5% | +106.164 KiB | 100.0% | 55.7 KiB → 162 KiB |   1 → 3 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `findResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

| Change |       Delta |      % |                Size | Objects | Callee           | Location                           |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------- | ---------------------------------- |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `run()` (`java.net.URLClassLoader$2`)

| Change |       Delta |      % |                Size | Objects | Callee                          | Location                           |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------- | ---------------------------------- |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `findResource(String, boolean)` | `jdk.internal.loader.URLClassPath` |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `run()`                         | `java.net.URLClassLoader$2`        |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change |       Delta |      % |                Size | Objects | Callee  | Location                    |
| -----: | ----------: | -----: | ------------------: | ------: | ------- | --------------------------- |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `run()` | `java.net.URLClassLoader$2` |

##### `doPrivileged(PrivilegedAction, AccessControlContext)` (`java.security.AccessController`)

| Change |       Delta |      % |                Size | Objects | Callee                                                             | Location                         |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findResource(String)` (`java.net.URLClassLoader`)

| Change |       Delta |      % |                Size | Objects | Callee                                                 | Location                         |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------------ | -------------------------------- |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `doPrivileged(PrivilegedAction, AccessControlContext)` | `java.security.AccessController` |

##### `getResource(String)` (`java.lang.ClassLoader`)

| Change |       Delta |      % |                Size | Objects | Callee                 | Location                  |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------- | ------------------------- |
|  +2.3% | +90.476 KiB | 100.0% | 3.86 MiB → 3.95 MiB |   4 → 5 | `findResource(String)` | `java.net.URLClassLoader` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |                Size | Objects | Callee                   | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------ | ------------------------------ |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |                Size | Objects | Callee                                          | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |       Delta |      % |                Size | Objects | Callee                         | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------ |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |       Delta |      % |                Size | Objects | Callee                                 | Location                                  |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------------------- | ----------------------------------------- |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |       Delta |      % |                Size | Objects | Callee                       | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------- | ----------------------- |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |       Delta |      % |                Size | Objects | Callee              | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------- | ----------------------- |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |       Delta |      % |                Size | Objects | Callee                                        | Location                |
| -----: | ----------: | -----: | ------------------: | ------: | --------------------------------------------- | ----------------------- |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |       Delta |      % |                Size | Objects | Callee            | Location                                       |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------------------- |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
|  +2.1% | +83.265 KiB | 100.0% | 3.87 MiB → 3.95 MiB |       5 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `processPropertiesByName(Name, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

| Change |        Delta |      % |                Size | Objects | Callee                                             | Location                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `processSymbolsByName(Name, Function3, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `getProperties(FirScope, Name)` (`org.jetbrains.kotlin.fir.scopes.FirScopeKt`)

| Change |        Delta |      % |                Size | Objects | Callee                                     | Location                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------- |
| +17.3% | +192.023 KiB | 100.0% | 1.08 MiB → 1.27 MiB |   9 → 7 | `processPropertiesByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f5a40`)

|  Change |      Delta |             % |           Size | Objects | Callee                                                                                | Location                                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed | -1.038 MiB | 100.0% → 0.0% | 1.04 MiB → 0 B |   9 → 0 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `put(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee                            | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `storeString(String)` (`jdk.jfr.internal.StringPool`)

|  Change |        Delta |             % |          Size | Objects | Callee                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `addString(String)` (`jdk.jfr.internal.StringPool`)

|  Change |        Delta |             % |          Size | Objects | Callee                | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ----------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `storeString(String)` | `jdk.jfr.internal.StringPool` |

##### `putString(String)` (`jdk.jfr.internal.event.EventWriter`)

|  Change |        Delta |             % |          Size | Objects | Callee              | Location                      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `addString(String)` | `jdk.jfr.internal.StringPool` |

##### `commit(long, long, long, String, String, boolean, long, long, long, long, long)` (`jdk.jfr.events.ActiveRecordingEvent`)

|  Change |        Delta |             % |          Size | Objects | Callee              | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ------------------------------------ |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `putString(String)` | `jdk.jfr.internal.event.EventWriter` |

##### `writeMetaEvents()` (`jdk.jfr.internal.PlatformRecorder`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                                            | Location                              |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- | ------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent` |

##### `start(PlatformRecording)` (`jdk.jfr.internal.PlatformRecorder`)

|  Change |        Delta |             % |          Size | Objects | Callee              | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------- | ----------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `writeMetaEvents()` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.internal.PlatformRecording`)

|  Change |        Delta |             % |          Size | Objects | Callee                     | Location                            |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------- | ----------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)` | `jdk.jfr.internal.PlatformRecorder` |

##### `start()` (`jdk.jfr.Recording`)

|  Change |        Delta |             % |          Size | Objects | Callee    | Location                             |
| ------: | -----------: | ------------: | ------------: | ------: | --------- | ------------------------------------ |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `start()` | `jdk.jfr.internal.PlatformRecording` |

##### `execute(ArgumentParser)` (`jdk.jfr.internal.dcmd.DCmdStart`)

|  Change |        Delta |             % |          Size | Objects | Callee    | Location            |
| ------: | -----------: | ------------: | ------------: | ------: | --------- | ------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `start()` | `jdk.jfr.Recording` |

##### `execute(String, String, char)` (`jdk.jfr.internal.dcmd.AbstractDCmd`)

|  Change |        Delta |             % |          Size | Objects | Callee                    | Location                          |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------- | --------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)` | `jdk.jfr.internal.dcmd.DCmdStart` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee                | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------- | ---------------------------------------- |
| removed | -256.093 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   2 → 0 | `initTable()`         | `java.util.concurrent.ConcurrentHashMap` |
|     new |  +16.015 KiB | 0.0% → 100.0% |  0 B → 16 KiB |   0 → 1 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |       Delta |            % |              Size | Objects | Callee                                       | Location                  |
| -----: | ----------: | -----------: | ----------------: | ------: | -------------------------------------------- | ------------------------- |
| -13.5% | -40.031 KiB |       100.0% | 296 KiB → 256 KiB |   3 → 1 | `resize()`                                   | `java.util.HashMap`       |
|    new |       +40 B | 0.0% → <0.1% |        0 B → 40 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Objects | Callee                                          | Location            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
| -13.5% | -39.992 KiB | 100.0% | 296 KiB → 256 KiB |   3 → 2 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

| Change |      Delta |             % |            Size | Objects | Callee                  | Location                                                                                 |
| -----: | ---------: | ------------: | --------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 94.8% → 25.8% | 32.5 KiB → 64 B |   7 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |
| -97.1% | -1.812 KiB |  5.5% → 22.6% | 1.87 KiB → 56 B |   2 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
|    new |     +128 B |  0.0% → 51.6% |     0 B → 128 B |   0 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.CoreEnvironmentUtilsKt$allSourceFilesSequence$1`  |

##### `processFunctionsAndConstructorsByName(FirScope, CallInfo, BodyResolveComponents, ConstructorFilter, Function1)` (`org.jetbrains.kotlin.fir.resolve.calls.ConstructorProcessingKt`)

|  Change |       Delta |              % |            Size | Objects | Callee                                    | Location                                                             |
| ------: | ----------: | -------------: | --------------: | ------: | ----------------------------------------- | -------------------------------------------------------------------- |
|  -99.8% | -32.296 KiB | 99.7% → 100.0% | 32.4 KiB → 64 B |   5 → 1 | `processFunctionsByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`  |
| removed |       -96 B |    0.3% → 0.0% |      96 B → 0 B |   2 → 0 | `processFunctionsByName(Name, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change |       Delta |              % |            Size | Objects | Callee     | Location                                                                                                   |
| ------: | ----------: | -------------: | --------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
|  -99.8% | -32.273 KiB | 99.9% → 100.0% | 32.3 KiB → 64 B |   4 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000b0015f9850` |
| removed |       -24 B |    0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirLazyJavaAnnotationList$$Lambda.0x0000007001631120`           |
| removed |       -24 B |    0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x0000007001632230`                      |
| removed |       -24 B |    0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000700164ae20`          |
| removed |       -24 B |    0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x0000007001652ae0`            |

##### `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`)

|  Change |       Delta |              % |            Size | Objects | Callee                                                  | Location                                                                             |
| ------: | ----------: | -------------: | --------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------ |
|  -99.8% | -32.296 KiB | 99.7% → 100.0% | 32.4 KiB → 64 B |   5 → 1 | `processFunctionsByName(CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel`                  |
| removed |       -96 B |    0.3% → 0.0% |      96 B → 0 B |   2 → 0 | `processFunctionsByName(CallInfo, TowerLevelProcessor)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                      | Location                                                         |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                               | Location                                                               |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `invokeSuspend(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                               | Location                                                               |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `resumeTask(TowerResolveManager$SuspendedResolverTask)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change |      Delta |      % |            Size | Objects | Callee               | Location                                              |
| -----: | ---------: | -----: | --------------: | ------: | -------------------- | ----------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change |      Delta |      % |            Size | Objects | Callee                                                  | Location                                                           |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------ |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `resumeTask(TowerResolveManager$SuspendedResolverTask)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change |      Delta |      % |            Size | Objects | Callee       | Location                                                           |
| -----: | ---------: | -----: | --------------: | ------: | ------------ | ------------------------------------------------------------------ |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `runTasks()` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                | Location                                                        |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                           | Location                                                        |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                                  | Location                                                        |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -99.8% | -32.39 KiB | 100.0% | 32.5 KiB → 64 B |   7 → 1 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change |      Delta |              % |            Size | Objects | Callee                                                                                                                                         | Location                                                      |
| ------: | ---------: | -------------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|  -99.8% | -32.32 KiB | 99.8% → 100.0% | 32.4 KiB → 64 B |   6 → 1 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`      |
| removed |      -64 B |    0.2% → 0.0% |      64 B → 0 B |   1 → 0 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `visitParameterAnnotation(int, ClassId, SourceElement)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$AnnotationVisitorForMethod`)

|  Change |       Delta |            % |         Size | Objects | Callee                                                       | Location                                                     |
| ------: | ----------: | -----------: | -----------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| removed | -32.015 KiB | 99.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                        | `java.util.HashMap`                                          |
| removed |      -328 B |  1.0% → 0.0% |  328 B → 0 B |   3 → 0 | `fromMethodSignatureAndParameterIndex(MemberSignature, int)` | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion` |

##### `visitParameterAnnotation(int, String, boolean)` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4$2`)

|  Change |       Delta |             % |           Size | Objects | Callee                                                  | Location                                                                                                                             |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -32.335 KiB | 100.0% → 0.0% | 32.3 KiB → 0 B |   4 → 0 | `visitParameterAnnotation(int, ClassId, SourceElement)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializerKt$loadMemberAnnotations$1$AnnotationVisitorForMethod` |

##### `readParameterAnnotations(MethodVisitor, Context, int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |       Delta |             % |           Size | Objects | Callee                                           | Location                                                    |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------- |
| removed | -32.335 KiB | 100.0% → 0.0% | 32.3 KiB → 0 B |   4 → 0 | `visitParameterAnnotation(int, String, boolean)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4$2` |

##### `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                                                                                                                             | Location                                                 |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| -99.8% | -32.32 KiB | 100.0% | 32.4 KiB → 64 B |   6 → 1 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                                                                                                                                                                   | Location                                                 |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -99.8% | -32.32 KiB | 100.0% | 32.4 KiB → 64 B |   6 → 1 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change |      Delta |      % |            Size | Objects | Callee                                                                                                   | Location                                                 |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| -99.8% | -32.32 KiB | 100.0% | 32.4 KiB → 64 B |   6 → 1 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change |       Delta |             % |            Size | Objects | Callee                                                                                                                                                                                                                   | Location                                                                        |
| ------: | ----------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
|  -99.8% | -32.273 KiB | 99.7% → 53.3% | 32.3 KiB → 64 B |   4 → 1 | `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)`                                                                      | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| removed |       -72 B |   0.2% → 0.0% |      72 B → 0 B |   1 → 0 | `addValueParametersTo$default(FirMemberDeserializer, List, FirBasedSymbol, FirRegularClassBuilder, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirValueParameterKind, boolean, List, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                |
|     new |       +56 B |  0.0% → 46.7% |      0 B → 56 B |   0 → 1 | `addAll(Collection, Iterable)`                                                                                                                                                                                           | `kotlin.collections.CollectionsKt__MutableCollectionsKt`                        |
| removed |       -24 B |   0.1% → 0.0% |      24 B → 0 B |   1 → 0 | `toTypeRef(ProtoBuf$Type, FirDeserializationContext)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                |

# Lock contention profile diff

Blocked 936.9ms → 65.4ms (-871.50ms, -93.0%) over 3 contentions → 1 contention (312.3ms → 65.4ms per contention).

| Category         | Change |     Delta |      % |             Time | Contentions |
| ---------------- | -----: | --------: | -----: | ---------------: | ----------: |
| Standard library | -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |      % |             Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------- | -------------------------- |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |      % |             Time | Contentions | Caller                    | Location                                 |
| -----: | --------: | -----: | ---------------: | ----------: | ------------------------- | ---------------------------------------- |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Improvements

Functions with the largest decrease in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |     Delta |      % |             Time | Contentions | Function                    | Location                                                                |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | ----------------------------------------------------------------------- |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `park(boolean, long)`       | `jdk.internal.misc.Unsafe`                                              |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `parkNanos(Object, long)`   | `java.util.concurrent.locks.LockSupport`                                |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `await(long, TimeUnit)`     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `await(long)`               | `java.lang.ref.ReferenceQueue`                                          |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `remove0(long)`             | `java.lang.ref.ReferenceQueue`                                          |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `remove(long)`              | `java.lang.ref.ReferenceQueue`                                          |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `run()`                     | `jdk.internal.ref.CleanerImpl`                                          |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `runWith(Object, Runnable)` | `java.lang.Thread`                                                      |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `run()`                     | `java.lang.Thread`                                                      |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `run()`                     | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |             Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------- | -------------------------- |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |             Time | Contentions | Callee                    | Location                                 |
| -----: | --------: | -----: | ---------------: | ----------: | ------------------------- | ---------------------------------------- |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |             Time | Contentions | Callee                  | Location                                                                |
| -----: | --------: | -----: | ---------------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |             Time | Contentions | Callee        | Location                       |
| -----: | --------: | -----: | ---------------: | ----------: | ------------- | ------------------------------ |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |             Time | Contentions | Callee          | Location                       |
| -----: | --------: | -----: | ---------------: | ----------: | --------------- | ------------------------------ |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |     Delta |      % |             Time | Contentions | Callee         | Location                       |
| -----: | --------: | -----: | ---------------: | ----------: | -------------- | ------------------------------ |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |      % |             Time | Contentions | Callee  | Location                       |
| -----: | --------: | -----: | ---------------: | ----------: | ------- | ------------------------------ |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

| Change |     Delta |      % |             Time | Contentions | Callee                      | Location           |
| -----: | --------: | -----: | ---------------: | ----------: | --------------------------- | ------------------ |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change |     Delta |      % |             Time | Contentions | Callee  | Location           |
| -----: | --------: | -----: | ---------------: | ----------: | ------- | ------------------ |
| -93.0% | -871.50ms | 100.0% | 936.9ms → 65.4ms |       3 → 1 | `run()` | `java.lang.Thread` |
