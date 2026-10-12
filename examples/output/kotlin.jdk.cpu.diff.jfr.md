# Sampling profile diff

Collected 92 samples → 108 samples (+16 samples, +17.4%).

| Category         | Change | Delta |             % | Samples |
| ---------------- | -----: | ----: | ------------: | ------: |
| Standard library | +33.3% |   +14 | 45.7% → 51.9% | 42 → 56 |
| Ours             |  +4.0% |    +2 | 54.3% → 48.1% | 50 → 52 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % | Samples | Function                                                                                                    | Location                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
|  +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                               | `java.util.zip.Inflater`                                                             |
|     new |    +2 |   0.0% → 1.9% |   0 → 2 | `readSourceFileWithMapping(InputStreamReader)`                                                              | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                    |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)`                                         | `jdk.internal.loader.NativeLibraries`                                                |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                      | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                        |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel` |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `areEqual(Object, Object)`                                                                                  | `kotlin.jvm.internal.Intrinsics`                                                     |
| +100.0% |    +1 |   1.1% → 1.9% |   1 → 2 | `throwParameterIsNullNPE(String)`                                                                           | `kotlin.jvm.internal.Intrinsics`                                                     |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `checkNotNullParameter(Object, String)`                                                                     | `kotlin.jvm.internal.Intrinsics`                                                     |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                     |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `visitTypeParameter(FirTypeParameter, Object)`                                                              | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                       |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                        | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl`          |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `initCEN(int, ZipCoder)`                                                                                    | `java.util.zip.ZipFile$Source`                                                       |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `list0(File)`                                                                                               | `java.io.UnixFileSystem`                                                             |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `getSerializedSize()`                                                                                       | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`                            |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `getDeclaringClass0()`                                                                                      | `java.lang.Class`                                                                    |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `slice()`                                                                                                   | `java.nio.DirectByteBufferR`                                                         |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `<init>(FirNamedReference, FirExpression, int, DefaultConstructorMarker)`                                   | `org.jetbrains.kotlin.fir.builder.CalleeAndReceiver`                                 |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `visitMethod(int, String, String, String, String[])`                                                        | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`                            |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `isMarkedNullable(KotlinTypeMarker)`                                                                        | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                     |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `processExtensionsThatHideMembers(CallInfo, ReceiverValue, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                   |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                    | Location                                                                                      |
| -----: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 1.9% |   0 → 2 | `readSourceFileWithMapping(InputStreamReader)`                                                              | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                             |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                      | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                 |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `processFunctionsByName(CallInfo, TowerLevelProcessor)`                                                     | `org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel`          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker`                                              |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitTypeParameter(FirTypeParameter, Object)`                                                              | `org.jetbrains.kotlin.fir.visitors.FirVisitor`                                                |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `acceptChildren(FirVisitor, Object)`                                                                        | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl`                   |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(FirNamedReference, FirExpression, int, DefaultConstructorMarker)`                                   | `org.jetbrains.kotlin.fir.builder.CalleeAndReceiver`                                          |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `visitMethod(int, String, String, String, String[])`                                                        | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `isMarkedNullable(KotlinTypeMarker)`                                                                        | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                              |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `processExtensionsThatHideMembers(CallInfo, ReceiverValue, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`                            |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `allocate()`                                                                                                | `com.intellij.util.io.FileAccessorCache$Handle`                                               |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `<init>(Candidate, CheckerSink)`                                                                            | `org.jetbrains.kotlin.fir.resolve.CollectionLiteralOuterCandidateContext`                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `getResolvedContractDescription()`                                                                          | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`                                     |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `addSmartcastIfNeeded(FirExpression, ResolutionMode)`                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean)`                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem` |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `getContainerAnnotations()`                                                                                 | `org.jetbrains.kotlin.fir.java.enhancement.EnhancementSignatureParts`                         |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `defaultType(FirClassLikeDeclaration)`                                                                      | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                               |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)`                 | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`                             |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `transformArguments(FirTransformer, Object)`                                                                | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`                       |
|    new |    +1 | 0.0% → 0.9% |   0 → 1 | `getArgument(int)`                                                                                          | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                                 |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                            | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | --------------------------------------------------------- |
|  +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`       | `java.util.zip.Inflater`                                  |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | `jdk.internal.loader.NativeLibraries`                     |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `areEqual(Object, Object)`                                          | `kotlin.jvm.internal.Intrinsics`                          |
| +100.0% |    +1 |   1.1% → 1.9% |   1 → 2 | `throwParameterIsNullNPE(String)`                                   | `kotlin.jvm.internal.Intrinsics`                          |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `checkNotNullParameter(Object, String)`                             | `kotlin.jvm.internal.Intrinsics`                          |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `initCEN(int, ZipCoder)`                                            | `java.util.zip.ZipFile$Source`                            |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `list0(File)`                                                       | `java.io.UnixFileSystem`                                  |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `getSerializedSize()`                                               | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type` |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `getDeclaringClass0()`                                              | `java.lang.Class`                                         |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `slice()`                                                           | `java.nio.DirectByteBufferR`                              |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `allocateInstance(Class)`                                           | `jdk.internal.misc.Unsafe`                                |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `last(List)`                                                        | `kotlin.collections.CollectionsKt___CollectionsKt`        |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `toList(Iterable)`                                                  | `kotlin.collections.CollectionsKt___CollectionsKt`        |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `putMapEntries(Map, boolean)`                                       | `java.util.HashMap`                                       |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `visitVarInsn(int, int)`                                            | `jdk.internal.org.objectweb.asm.MethodWriter`             |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `add(Object)`                                                       | `java.util.HashSet`                                       |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `open0(String, boolean)`                                            | `java.io.FileOutputStream`                                |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |           % | Samples | Function                                                                                                          | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 2.2% → 0.0% |   2 → 0 | `balanceWhiteSpaces()`                                                                                            | `com.intellij.lang.impl.PsiBuilderImpl`                                                                  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `clone()`                                                                                                         | `java.lang.Object`                                                                                       |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `getAsFirStatement$default(LightTreeRawFirExpressionBuilder, LighterASTNode, String, int, Object)`                | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                          |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `eof()`                                                                                                           | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                   | `java.lang.ClassLoader`                                                                                  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `create(EdgeLabel, EdgeKind)`                                                                                     | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.Edge$Companion`                                                |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `readUtfNonAscii(int, int, int, char[])`                                                                          | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)`                                              | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`                                         |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `isEnabledByDefault(LanguageVersionSettings, LanguageFeature)`                                                    | `org.jetbrains.kotlin.config.LanguageVersionSettingsKt`                                                  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `withNext(Object)`                                                                                                | `kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`                         |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `getDeprecation(FirBasedSymbol, FirSession, FirElement)`                                                          | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                               |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`          | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `currentStorage()`                                                                                                | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                             |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `hasNext()`                                                                                                       | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator`   |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `getFir()`                                                                                                        | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                        |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `<init>(ResolutionContext, ConstraintStorage)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory`                                      |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `transformReturnExpression(FirReturnExpression, ResolutionMode)`                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                  | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDispatchReceiver`                                    |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `firstOrNull(Iterable)`                                                                                           | `kotlin.collections.CollectionsKt___CollectionsKt`                                                       |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                                          | Location                                                                                                 |
| ------: | ----: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 2.2% → 0.0% |   2 → 0 | `balanceWhiteSpaces()`                                                                                            | `com.intellij.lang.impl.PsiBuilderImpl`                                                                  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `getAsFirStatement$default(LightTreeRawFirExpressionBuilder, LighterASTNode, String, int, Object)`                | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`                          |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `eof()`                                                                                                           | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `create(EdgeLabel, EdgeKind)`                                                                                     | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.Edge$Companion`                                                |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `readUtfNonAscii(int, int, int, char[])`                                                                          | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)`                                              | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`                                         |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `isEnabledByDefault(LanguageVersionSettings, LanguageFeature)`                                                    | `org.jetbrains.kotlin.config.LanguageVersionSettingsKt`                                                  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `getDeprecation(FirBasedSymbol, FirSession, FirElement)`                                                          | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                               |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)`          | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `currentStorage()`                                                                                                | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                             |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `getFir()`                                                                                                        | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                        |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `<init>(ResolutionContext, ConstraintStorage)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory`                                      |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `transformReturnExpression(FirReturnExpression, ResolutionMode)`                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)`                                                  | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDispatchReceiver`                                    |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)`                                           | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `<init>(DefaultConstructorMarker)`                                                                                | `org.jetbrains.kotlin.util.ArrayMap`                                                                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `<init>(JavaAnnotationOwner)`                                                                                     | `org.jetbrains.kotlin.load.java.structure.JavaElementsKt$$Lambda.0x00000080015d5080`                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)`                                                                          | `org.jetbrains.org.objectweb.asm.ClassReader`                                                            |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `prepareCapturedType(ConeKotlinType, FirSession)`                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt`                                                 |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                        | Location                                                                                               |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `clone()`                                                                       | `java.lang.Object`                                                                                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                                |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `withNext(Object)`                                                              | `kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`                       |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `hasNext()`                                                                     | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator` |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `firstOrNull(Iterable)`                                                         | `kotlin.collections.CollectionsKt___CollectionsKt`                                                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `newDirectory(ImageReader$Directory, String)`                                   | `jdk.internal.jimage.ImageReader$SharedImageReader`                                                    |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `indexOfRange(Object, int, int)`                                                | `java.util.ArrayList`                                                                                  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `indexOf(int)`                                                                  | `java.lang.String`                                                                                     |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `applyPattern(String)`                                                          | `java.text.MessageFormat`                                                                              |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

| Change | Delta |             % | Samples | Location                                              |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter:100` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.jvm.internal.Intrinsics:169` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Location                             |
| ------: | ----: | -----: | ------: | ------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `kotlin.jvm.internal.Intrinsics:140` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Location                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.jvm.internal.Intrinsics:130` |

##### `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.types.AbstractTypeChecker:564` |

##### `visitTypeParameter(FirTypeParameter, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.visitors.FirVisitor:201` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl`)

| Change | Delta |             % | Samples | Location                                                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl:53` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Location                            |
| -----: | ----: | ------------: | ------: | ----------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.zip.ZipFile$Source:1775` |

##### `getSerializedSize()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`)

| Change | Delta |             % | Samples | Location                                                       |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type:6206` |

##### `slice()` (`java.nio.DirectByteBufferR`)

| Change | Delta |             % | Samples | Location                         |
| -----: | ----: | ------------: | ------: | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.nio.DirectByteBufferR:262` |

##### `<init>(FirNamedReference, FirExpression, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.builder.CalleeAndReceiver`)

| Change | Delta |             % | Samples | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.builder.CalleeAndReceiver:711` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`)

| Change | Delta |             % | Samples | Location                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4:255` |

##### `isMarkedNullable(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:133` |

##### `processExtensionsThatHideMembers(CallInfo, ReceiverValue, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

| Change | Delta |             % | Samples | Location                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask:468` |

##### `allocate()` (`com.intellij.util.io.FileAccessorCache$Handle`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `com.intellij.util.io.FileAccessorCache$Handle:218` |

##### `getResolvedContractDescription()` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol:42` |

##### `addSmartcastIfNeeded(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Location                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer:336` |

##### `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

| Change | Delta |             % | Samples | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem:79` |

##### `getContainerAnnotations()` (`org.jetbrains.kotlin.fir.java.enhancement.EnhancementSignatureParts`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.java.enhancement.EnhancementSignatureParts:1153` |

##### `defaultType(FirClassLikeDeclaration)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |             % | Samples | Location                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt:170` |

##### `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver:252` |

##### `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`)

| Change | Delta |             % | Samples | Location                                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl:123` |

##### `getArgument(int)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:5794` |

##### `last(List)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change | Delta |             % | Samples | Location                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `kotlin.collections.CollectionsKt___CollectionsKt:430` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap:503` |

##### `visitVarInsn(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.MethodWriter:959` |

##### `add(Object)` (`java.util.HashSet`)

| Change | Delta |             % | Samples | Location                |
| -----: | ----: | ------------: | ------: | ----------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashSet:229` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:1212` |

##### `getAsFirStatement$default(LightTreeRawFirExpressionBuilder, LighterASTNode, String, int, Object)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:120` |

##### `eof()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:142` |

##### `create(EdgeLabel, EdgeKind)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.Edge$Companion`)

|  Change | Delta |             % | Samples | Location                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.Edge$Companion:143` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:3844` |

##### `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)` (`org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`)

|  Change | Delta |             % | Samples | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData:53` |

##### `withNext(Object)` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`)

|  Change | Delta |             % | Samples | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue:24` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |             % | Samples | Location                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver:97` |

##### `currentStorage()` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change | Delta |             % | Samples | Location                                                                         |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl:854` |

##### `hasNext()` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator`)

|  Change | Delta |             % | Samples | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator:17` |

##### `getFir()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

|  Change | Delta |             % | Samples | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol:32` |

##### `<init>(ResolutionContext, ConstraintStorage)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory`)

|  Change | Delta |             % | Samples | Location                                                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory:40` |

##### `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|  Change | Delta |             % | Samples | Location                                                                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer:110` |

##### `transformReturnExpression(FirReturnExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |             % | Samples | Location                                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher:742` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDispatchReceiver`)

|  Change | Delta |             % | Samples | Location                                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDispatchReceiver:182` |

##### `firstOrNull(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `kotlin.collections.CollectionsKt___CollectionsKt:271` |

##### `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`)

|  Change | Delta |             % | Samples | Location                                                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask:490` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.org.objectweb.asm.ClassReader:1323` |

##### `newDirectory(ImageReader$Directory, String)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.jimage.ImageReader$SharedImageReader:534` |

##### `indexOfRange(Object, int, int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:299` |

##### `indexOf(int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:2394` |

##### `applyPattern(String)` (`java.text.MessageFormat`)

|  Change | Delta |             % | Samples | Location                      |
| ------: | ----: | ------------: | ------: | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.text.MessageFormat:470` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Caller                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| +29.2% |    +7 | 100.0% | 24 → 31 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

| Change | Delta |             % | Samples | Caller                                                                        | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` (`jdk.internal.loader.NativeLibraries`)

| Change | Delta |      % | Samples | Caller   | Location                                                |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `open()` | `jdk.internal.loader.NativeLibraries$NativeLibraryImpl` |

##### `completeCall(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`)

| Change | Delta |             % | Samples | Caller                                                                                        | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `completeCall$default(FirCallCompleter, FirExpression, ResolutionMode, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter` |

##### `processFunctionsByName(CallInfo, TowerLevelProcessor)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.DispatchReceiverMemberScopeTowerLevel`)

| Change | Delta |             % | Samples | Caller                                                                                                      | Location                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler` |

##### `areEqual(Object, Object)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Caller                                                   | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------- | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isStaticMultiFieldValueClassReplacement(IrDeclaration)` | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |      % | Samples | Caller                                  | Location                         |
| ------: | ----: | -----: | ------: | --------------------------------------- | -------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |             % | Samples | Caller                                                        | Location                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `checkSyntax(CheckerContext, DiagnosticReporter, FirElement)` | `org.jetbrains.kotlin.fir.analysis.checkers.syntax.FirSyntaxChecker` |

##### `isSubtypeForSameConstructor(TypeCheckerState, TypeSystemContext, TypeArgumentListMarker, RigidTypeMarker)` (`org.jetbrains.kotlin.types.AbstractTypeChecker`)

| Change | Delta |             % | Samples | Caller                                                                                                      | Location                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isSubtypeOfForSingleClassifierType(TypeCheckerState, TypeSystemContext, RigidTypeMarker, RigidTypeMarker)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `visitTypeParameter(FirTypeParameter, Object)` (`org.jetbrains.kotlin.fir.visitors.FirVisitor`)

| Change | Delta |             % | Samples | Caller                       | Location                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirTypeParameter` |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl`)

| Change | Delta |             % | Samples | Caller                                                                                              | Location                                                                                           |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitElement(FirElement, FirLocalVariableAssignmentAnalyzer$Companion$MiniCfgBuilder$MiniCfgData)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirLocalVariableAssignmentAnalyzer$Companion$MiniCfgBuilder` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change | Delta |             % | Samples | Caller                                          | Location                       |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `list0(File)` (`java.io.UnixFileSystem`)

| Change | Delta |             % | Samples | Caller       | Location                 |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `list(File)` | `java.io.UnixFileSystem` |

##### `getSerializedSize()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type`)

| Change | Delta |             % | Samples | Caller                           | Location                                                      |
| -----: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `writeMessageNoTag(MessageLite)` | `kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream` |

##### `getDeclaringClass0()` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller                | Location          |
| -----: | ----: | ------------: | ------: | --------------------- | ----------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getDeclaringClass()` | `java.lang.Class` |

##### `slice()` (`java.nio.DirectByteBufferR`)

| Change | Delta |             % | Samples | Caller    | Location                     |
| -----: | ----: | ------------: | ------: | --------- | ---------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `slice()` | `java.nio.DirectByteBufferR` |

##### `<init>(FirNamedReference, FirExpression, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.builder.CalleeAndReceiver`)

| Change | Delta |             % | Samples | Caller                                  | Location                                                                        |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertCallExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`)

| Change | Delta |             % | Samples | Caller                                   | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `isMarkedNullable(KotlinTypeMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

| Change | Delta |             % | Samples | Caller                                                                                      | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `hasNotNullSupertype(TypeCheckerState, RigidTypeMarker, TypeCheckerState$SupertypesPolicy)` | `org.jetbrains.kotlin.types.AbstractNullabilityChecker` |

##### `processExtensionsThatHideMembers(CallInfo, ReceiverValue, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask`)

| Change | Delta |             % | Samples | Caller                                                                                                                                 | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processCandidatesWithGivenImplicitReceiverAsValue(ImplicitReceiverValue, CallInfo, TowerGroup, Set, Set, Set, boolean, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask` |

##### `allocate()` (`com.intellij.util.io.FileAccessorCache$Handle`)

| Change | Delta |             % | Samples | Caller                | Location                                 |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getIfCached(Object)` | `com.intellij.util.io.FileAccessorCache` |

##### `<init>(Candidate, CheckerSink)` (`org.jetbrains.kotlin.fir.resolve.CollectionLiteralOuterCandidateContext`)

| Change | Delta |             % | Samples | Caller                                                           | Location                                                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.EagerResolveOfCollectionLiteral` |

##### `getResolvedContractDescription()` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

| Change | Delta |             % | Samples | Caller                                                                                        | Location                                                   |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `processConditionalContract(MutableFlow, FirStatement, PersistentFlow, FirAnonymousFunction)` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `addSmartcastIfNeeded(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Caller                                                                                                        | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, boolean)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeCheckerStateForConstraintSystem`)

| Change | Delta |             % | Samples | Caller                                                                                                  | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `completeIsSubTypeOf(TypeCheckerState, TypeSystemContext, KotlinTypeMarker, KotlinTypeMarker, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeChecker` |

##### `getContainerAnnotations()` (`org.jetbrains.kotlin.fir.java.enhancement.EnhancementSignatureParts`)

| Change | Delta |             % | Samples | Caller                                                                                                     | Location                                                                |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `extractQualifiersFromAnnotations(AbstractSignatureParts$TypeAndDefaultQualifiers, JavaDefaultQualifiers)` | `org.jetbrains.kotlin.load.java.typeEnhancement.AbstractSignatureParts` |

##### `defaultType(FirClassLikeDeclaration)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |             % | Samples | Caller                            | Location                                        |
| -----: | ----: | ------------: | ------: | --------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `defaultType(FirClassLikeSymbol)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `resolveStatus(FirDeclaration, FirDeclarationStatus, FirClass, FirProperty, boolean, List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver`)

| Change | Delta |             % | Samples | Caller                                                | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `resolveStatus(FirProperty, FirClass, boolean, List)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirStatusResolver` |

##### `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirResolvedArgumentListImpl`)

| Change | Delta |             % | Samples | Caller                                                              | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transformArgumentList(FirCall, ExpectedArgumentType$ArgumentsMap)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |

##### `getArgument(int)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

| Change | Delta |             % | Samples | Caller            | Location                                      |
| -----: | ----: | ------------: | ------: | ----------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % | Samples | Caller                     | Location                              |
| -----: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `last(List)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change | Delta |             % | Samples | Caller                                                    | Location                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putParameter(FirValueParameter, IrValueParameterSymbol)` | `org.jetbrains.kotlin.fir.backend.Fir2IrLocalCallableStorage` |

##### `toList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change | Delta |             % | Samples | Caller                | Location                                          |
| -----: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `setParameters(List)` | `org.jetbrains.kotlin.ir.declarations.IrFunction` |

##### `putMapEntries(Map, boolean)` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Caller        | Location            |
| -----: | ----: | ------------: | ------: | ------------- | ------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `putAll(Map)` | `java.util.HashMap` |

##### `visitVarInsn(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Caller                  | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `add(Object)` (`java.util.HashSet`)

| Change | Delta |             % | Samples | Caller                                                                                | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `computeExpandedTypeInner(TypeSystemCommonBackendContext, KotlinTypeMarker, HashSet)` | `org.jetbrains.kotlin.types.ExpandedTypeUtilsKt` |

##### `open0(String, boolean)` (`java.io.FileOutputStream`)

| Change | Delta |             % | Samples | Caller                  | Location                   |
| -----: | ----: | ------------: | ------: | ----------------------- | -------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `open(String, boolean)` | `java.io.FileOutputStream` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Caller               | Location                                |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `clone()` (`java.lang.Object`)

|  Change | Delta |             % | Samples | Caller                | Location           |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `getAsFirStatement$default(LightTreeRawFirExpressionBuilder, LighterASTNode, String, int, Object)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------- | -------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertBlock(LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `eof()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Caller                                                                                                | Location                                     |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `doParseModifierListBody(Consumer, TokenSet, KotlinParsing$AnnotationParsingMode, TokenSet, boolean)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `create(EdgeLabel, EdgeKind)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.Edge$Companion`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                                                     |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `addEdge(CFGNode, CFGNode, EdgeKind, boolean, EdgeLabel)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode$Companion` |

##### `readUtfNonAscii(int, int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                      | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readUtf(int, int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `topLevelFunctionNameIndex_delegate$lambda$0(PackagePartsCacheData)` (`org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`)

|  Change | Delta |             % | Samples | Caller     | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000080015fb478` |

##### `isEnabledByDefault(LanguageVersionSettings, LanguageFeature)` (`org.jetbrains.kotlin.config.LanguageVersionSettingsKt`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------ | --------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getFeatureSupport(LanguageFeature)` | `org.jetbrains.kotlin.config.LanguageVersionSettingsImpl` |

##### `withNext(Object)` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`)

|  Change | Delta |             % | Samples | Caller                | Location                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `put(Object, Object)` | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap` |

##### `getDeprecation(FirBasedSymbol, FirSession, FirElement)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                            | Location                                                               |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isDeprecatedHidden(ResolutionContext, FirBasedSymbol, CallInfo)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckHiddenDeclaration` |

##### `resolveCallAndSelectCandidate(FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                         | Location                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `currentStorage()` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change | Delta |             % | Samples | Caller                                                                             | Location                                                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getDependentTypeParameters(NewConstraintSystemImpl, TypeConstructorMarker, List)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CollectTypeVariableUsagesInfo` |

##### `hasNext()` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasNext()` | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValuesIterator` |

##### `getFir()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

|  Change | Delta |             % | Samples | Caller                     | Location                         |
| ------: | ----: | ------------: | ------: | -------------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `areEqual(Object, Object)` | `kotlin.jvm.internal.Intrinsics` |

##### `<init>(ResolutionContext, ConstraintStorage)` (`org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(ResolutionContext, CallInfo)` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory` |

##### `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|  Change | Delta |             % | Samples | Caller     | Location                                                                                                                           |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x00000078016da790` |

##### `transformReturnExpression(FirReturnExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change | Delta |             % | Samples | Caller                                                   | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `transformReturnExpression(FirReturnExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `check(CheckerSink, ResolutionContext, Candidate, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDispatchReceiver`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |

##### `firstOrNull(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Caller                                                                  | Location                                                                 |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findClasses$lambda$0$0(ClassId, Set, Function2, JvmDependenciesIndex)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

##### `runResolverForInvoke(CallInfo, ExpressionReceiverValue, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeFunctionResolveTask`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirInvokeResolveTowerExtension$enqueueResolverTasksForInvoke$3` |

##### `<init>(DefaultConstructorMarker)` (`org.jetbrains.kotlin.util.ArrayMap`)

|  Change | Delta |             % | Samples | Caller                | Location                                       |
| ------: | ----: | ------------: | ------: | --------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(Object, int)` | `org.jetbrains.kotlin.util.OneElementArrayMap` |

##### `<init>(JavaAnnotationOwner)` (`org.jetbrains.kotlin.load.java.structure.JavaElementsKt$$Lambda.0x00000080015d5080`)

|  Change | Delta |             % | Samples | Caller                             | Location                                     |
| ------: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `readMethod(ClassVisitor, Context, int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `accept(ClassVisitor, Attribute[], int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `prepareCapturedType(ConeKotlinType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt`)

|  Change | Delta |             % | Samples | Caller                                                                                                                              | Location                                                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `resolvePlainArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `newDirectory(ImageReader$Directory, String)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

|  Change | Delta |             % | Samples | Caller                                         | Location                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------- | --------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `makeDirectory(String, ImageReader$Directory)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `indexOfRange(Object, int, int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller            | Location              |
| ------: | ----: | ------------: | ------: | ----------------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `indexOf(Object)` | `java.util.ArrayList` |

##### `indexOf(int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                           | Location                                                     |
| ------: | ----: | ------------: | ------: | -------------------------------- | ------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `checkClassName(String, String)` | `org.jetbrains.org.objectweb.asm.util.CheckSignatureAdapter` |

##### `applyPattern(String)` (`java.text.MessageFormat`)

|  Change | Delta |             % | Samples | Caller           | Location                  |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(String)` | `java.text.MessageFormat` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % | Samples | Function                                                                                           | Location                                                        |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| +20.0% |   +11 | 59.8% → 61.1% | 55 → 66 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                     |
| +16.7% |    +9 | 58.7% → 58.3% | 54 → 63 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                     |
| +23.5% |    +8 | 37.0% → 38.9% | 34 → 42 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`         |
| +72.7% |    +8 | 12.0% → 17.6% | 11 → 19 | `executePhase(JvmFir2IrPipelineArtifact)`                                                          | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |
| +72.7% |    +8 | 12.0% → 17.6% | 11 → 19 | `executePhase(PipelineArtifact)`                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |
| +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`                                      | `java.util.zip.Inflater`                                        |
| +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflate(byte[], int, int)`                                                                        | `java.util.zip.Inflater`                                        |
| +20.6% |    +7 | 37.0% → 38.0% | 34 → 41 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`         |
| +20.6% |    +7 | 37.0% → 38.0% | 34 → 41 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`          |
| +20.6% |    +7 | 37.0% → 38.0% | 34 → 41 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                    |
| +25.9% |    +7 | 29.3% → 31.5% | 27 → 34 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`         |
| +77.8% |    +7 |  9.8% → 14.8% |  9 → 16 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`          |
| +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[], int, int)`                                                                           | `java.util.zip.InflaterInputStream`                             |
| +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[], int, int)`                                                                           | `java.util.zip.ZipInputStream`                                  |
| +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[])`                                                                                     | `java.io.FilterInputStream`                                     |
| +17.6% |    +6 |         37.0% | 34 → 40 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`            |
| +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                              |
| +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`         |
| +21.4% |    +6 | 30.4% → 31.5% | 28 → 34 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |
| +21.4% |    +6 | 30.4% → 31.5% | 28 → 34 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |

##### Ours

|  Change | Delta |             % | Samples | Function                                                                                                                                                                    | Location                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  +20.0% |   +11 | 59.8% → 61.1% | 55 → 66 | `run(String[])`                                                                                                                                                             | `org.jetbrains.kotlin.preloading.Preloader`                         |
|  +16.7% |    +9 | 58.7% → 58.3% | 54 → 63 | `main(String[])`                                                                                                                                                            | `org.jetbrains.kotlin.preloading.Preloader`                         |
|  +23.5% |    +8 | 37.0% → 38.9% | 34 → 42 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                                                          | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`             |
|  +72.7% |    +8 | 12.0% → 17.6% | 11 → 19 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`     |
|  +72.7% |    +8 | 12.0% → 17.6% | 11 → 19 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`     |
|  +20.6% |    +7 | 37.0% → 38.0% | 34 → 41 | `doMain(CLICompiler, String[])`                                                                                                                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`             |
|  +20.6% |    +7 | 37.0% → 38.0% | 34 → 41 | `main(String[])`                                                                                                                                                            | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`              |
|  +20.6% |    +7 | 37.0% → 38.0% | 34 → 41 | `main(String[])`                                                                                                                                                            | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                        |
|  +25.9% |    +7 | 29.3% → 31.5% | 27 → 34 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`             |
|  +77.8% |    +7 |  9.8% → 14.8% |  9 → 16 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`              |
|  +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`             |
|  +21.4% |    +6 | 30.4% → 31.5% | 28 → 34 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler`                       |
|  +21.4% |    +6 | 30.4% → 31.5% | 28 → 34 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.common.CLICompiler`                       |
| +150.0% |    +6 |   4.3% → 9.3% |  4 → 10 | `accept(IrVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                   |
|  +66.7% |    +6 |  9.8% → 13.9% |  9 → 15 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  +66.7% |    +6 |  9.8% → 13.9% |  9 → 15 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`              |
|  +66.7% |    +6 |  9.8% → 13.9% |  9 → 15 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |
|  +20.0% |    +5 | 27.2% → 27.8% | 25 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`              |
|  +20.0% |    +5 | 27.2% → 27.8% | 25 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                                                | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`              |
|  +15.2% |    +5 | 35.9% → 35.2% | 33 → 38 | `phaseBody(LoggingContext, Object)`                                                                                                                                         | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                   |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                            | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------- |
|  +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`       | `java.util.zip.Inflater`                                |
|  +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflate(byte[], int, int)`                                         | `java.util.zip.Inflater`                                |
|  +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[], int, int)`                                            | `java.util.zip.InflaterInputStream`                     |
|  +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[], int, int)`                                            | `java.util.zip.ZipInputStream`                          |
|  +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[])`                                                      | `java.io.FilterInputStream`                             |
|  +17.6% |    +6 |         37.0% | 34 → 40 | `invokeStatic(Object, Object)`                                      | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`    |
|  +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invokeExact_MT(Object, Object, Object, Object)`                    | `java.lang.invoke.Invokers$Holder`                      |
|  +14.7% |    +5 | 37.0% → 36.1% | 34 → 39 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000007801010000`     |
|  +15.6% |    +5 | 34.8% → 34.3% | 32 → 37 | `invokeImpl(Object, Object[])`                                      | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|  +16.1% |    +5 | 33.7% → 33.3% | 31 → 36 | `invoke(Object, Object[])`                                          | `java.lang.reflect.Method`                              |
|  +12.5% |    +4 | 34.8% → 33.3% | 32 → 36 | `invoke(Object, Object[])`                                          | `jdk.internal.reflect.DirectMethodHandleAccessor`       |
|     new |    +3 |   0.0% → 2.8% |   0 → 3 | `getValue()`                                                        | `kotlin.SafePublicationLazyImpl`                        |
| +200.0% |    +2 |   1.1% → 2.8% |   1 → 3 | `checkNotNullParameter(Object, String)`                             | `kotlin.jvm.internal.Intrinsics`                        |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | `jdk.internal.loader.NativeLibraries`                   |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `open()`                                                            | `jdk.internal.loader.NativeLibraries$NativeLibraryImpl` |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `loadLibrary(Class, String, boolean)`                               | `jdk.internal.loader.NativeLibraries`                   |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `loadLibrary(Class, File)`                                          | `jdk.internal.loader.NativeLibraries`                   |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `loadLibrary(Class, File)`                                          | `java.lang.ClassLoader`                                 |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `load0(Class, String)`                                              | `java.lang.Runtime`                                     |
|  +14.3% |    +1 |   7.6% → 7.4% |   7 → 8 | `load(String)`                                                      | `java.lang.System`                                      |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % | Samples | Function                                                                                                                                           | Location                                                                                                                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
|  -40.0% |    -8 | 21.7% → 11.1% | 20 → 12 | `executePhase(PipelineArtifact)`                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                                                          |
|  -35.0% |    -7 | 21.7% → 12.0% | 20 → 13 | `executePhase(ConfigurationPipelineArtifact)`                                                                                                      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                                                          |
|  -29.4% |    -5 | 18.5% → 11.1% | 17 → 12 | `transformInplace(List, FirTransformer, Object)`                                                                                                   | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                  |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                   | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                            |
|  -71.4% |    -5 |   7.6% → 1.9% |   7 → 2 | `invoke()`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078016ae458` |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)`                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlock(FirBlock, Object)`                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                                           |
| removed |    -5 |   5.4% → 0.0% |   5 → 0 | `getValue()`                                                                                                                                       | `kotlin.UnsafeLazyImpl`                                                                                                   |
|  -38.5% |    -5 |  14.1% → 7.4% |  13 → 8 | `acceptChildren(FirVisitor, Object)`                                                                                                               | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
|  -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `accept(FirVisitor, Object)`                                                                                                                       | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                                           |
|  -41.7% |    -5 |  13.0% → 6.5% |  12 → 7 | `collectDiagnostics(FirDeclaration, PendingDiagnosticReporter)`                                                                                    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`                                                |
|  -41.7% |    -5 |  13.0% → 6.5% |  12 → 7 | `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)`                                                      | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                                             |
|  -26.7% |    -4 | 16.3% → 10.2% | 15 → 11 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -57.1% |    -4 |   7.6% → 2.8% |   7 → 3 | `transformFile(FirFile, ResolutionMode)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -57.1% |    -4 |   7.6% → 2.8% |   7 → 3 | `transformFile(FirFile, ResolutionMode)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -57.1% |    -4 |   7.6% → 2.8% |   7 → 3 | `transformFile(FirFile, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -28.6% |    -4 |  15.2% → 9.3% | 14 → 10 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                                  | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                                                |

##### Ours

| Change | Delta |             % | Samples | Function                                                                                                                                           | Location                                                                                                                  |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| -40.0% |    -8 | 21.7% → 11.1% | 20 → 12 | `executePhase(PipelineArtifact)`                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                                                          |
| -35.0% |    -7 | 21.7% → 12.0% | 20 → 13 | `executePhase(ConfigurationPipelineArtifact)`                                                                                                      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                                                          |
| -29.4% |    -5 | 18.5% → 11.1% | 17 → 12 | `transformInplace(List, FirTransformer, Object)`                                                                                                   | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                  |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                                   | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                            |
| -71.4% |    -5 |   7.6% → 1.9% |   7 → 2 | `invoke()`                                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078016ae458` |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)`                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlock(FirBlock, ResolutionMode)`                                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transformBlock(FirBlock, Object)`                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `transform(FirTransformer, Object)`                                                                                                                | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                                           |
| -38.5% |    -5 |  14.1% → 7.4% |  13 → 8 | `acceptChildren(FirVisitor, Object)`                                                                                                               | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
| -35.7% |    -5 |  15.2% → 8.3% |  14 → 9 | `accept(FirVisitor, Object)`                                                                                                                       | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                                           |
| -41.7% |    -5 |  13.0% → 6.5% |  12 → 7 | `collectDiagnostics(FirDeclaration, PendingDiagnosticReporter)`                                                                                    | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`                                                |
| -41.7% |    -5 |  13.0% → 6.5% |  12 → 7 | `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)`                                                      | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                                             |
| -26.7% |    -4 | 16.3% → 10.2% | 15 → 11 | `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| -57.1% |    -4 |   7.6% → 2.8% |   7 → 3 | `transformFile(FirFile, ResolutionMode)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
| -57.1% |    -4 |   7.6% → 2.8% |   7 → 3 | `transformFile(FirFile, ResolutionMode)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| -57.1% |    -4 |   7.6% → 2.8% |   7 → 3 | `transformFile(FirFile, Object)`                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| -28.6% |    -4 |  15.2% → 9.3% | 14 → 10 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)`                                                                                  | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                                                |
| -28.6% |    -4 |  15.2% → 9.3% | 14 → 10 | `transformElement(FirElement, ResolutionMode)`                                                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`                             |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                        | Location                                                                                                |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -5 | 5.4% → 0.0% |   5 → 0 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                                                                                 |
|  -50.0% |    -2 | 4.3% → 1.9% |   4 → 2 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                                                                           |
| removed |    -2 | 2.2% → 0.0% |   2 → 0 | `firstOrNull(Sequence)`                                                         | `kotlin.sequences.SequencesKt___SequencesKt`                                                            |
|  -66.7% |    -2 | 3.3% → 0.9% |   3 → 1 | `newInvokeSpecial(Object, Object)`                                              | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -66.7% |    -2 | 3.3% → 0.9% |   3 → 1 | `linkToTargetMethod(Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                                                                      |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `clone()`                                                                       | `java.lang.Object`                                                                                      |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                                                      |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `toByteArray()`                                                                 | `java.io.ByteArrayOutputStream`                                                                         |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `withNext(Object)`                                                              | `kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`                        |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `put(Object, Object)`                                                           | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap`               |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `hasNext()`                                                                     | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator`  |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `hasNext()`                                                                     | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValuesIterator` |
| removed |    -1 | 1.1% → 0.0% |   1 → 0 | `firstOrNull(Iterable)`                                                         | `kotlin.collections.CollectionsKt___CollectionsKt`                                                      |
|  -50.0% |    -1 | 2.2% → 0.9% |   2 → 1 | `next()`                                                                        | `kotlin.sequences.TransformingSequence$iterator$1`                                                      |
|  -50.0% |    -1 | 2.2% → 0.9% |   2 → 1 | `calcNext()`                                                                    | `kotlin.sequences.FilteringSequence$iterator$1`                                                         |
|  -50.0% |    -1 | 2.2% → 0.9% |   2 → 1 | `hasNext()`                                                                     | `kotlin.sequences.FilteringSequence$iterator$1`                                                         |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |     % | Samples | Callee                                                                       | Location                                               |
| -----: | ----: | ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +20.0% |    +6 | 54.5% | 30 → 36 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| +20.0% |    +5 | 45.5% | 25 → 30 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % | Samples | Callee          | Location                                    |
| -----: | ----: | -----: | ------: | --------------- | ------------------------------------------- |
| +16.7% |    +9 | 100.0% | 54 → 63 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |             % | Samples | Callee                                                 | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +22.2% |    +6 | 79.4% → 78.6% | 27 → 33 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +28.6% |    +2 | 20.6% → 21.4% |   7 → 9 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                                                             | Location                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| +66.7% |    +6 | 81.8% → 78.9% |  9 → 15 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)`                                        | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |
| +50.0% |    +1 | 18.2% → 15.8% |   2 → 3 | `runLowerings$org_jetbrains_kotlin_cli_jvm(Project, CompilerConfiguration, ModuleDescriptor, Module, JvmIrCodegenFactory, JvmIrCodegenFactory$BackendInput, BaseDiagnosticsCollector, FirJvmBackendClassResolver)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |
|    new |    +1 |   0.0% → 5.3% |   0 → 1 | `getFileSystem(String)`                                                                                                                                                                                            | `com.intellij.openapi.vfs.impl.VirtualFileManagerImpl`              |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change | Delta |      % | Samples | Callee                                    | Location                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------- | --------------------------------------------------------------- |
| +72.7% |    +8 | 100.0% | 11 → 19 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `inflate(byte[], int, int)` (`java.util.zip.Inflater`)

| Change | Delta |      % | Samples | Callee                                                        | Location                 |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------- | ------------------------ |
| +29.2% |    +7 | 100.0% | 24 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)` | `java.util.zip.Inflater` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +20.6% |    +7 | 100.0% | 34 → 41 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |              % | Samples | Callee                          | Location                                                |
| -----: | ----: | -------------: | ------: | ------------------------------- | ------------------------------------------------------- |
| +17.6% |    +6 | 100.0% → 97.6% | 34 → 40 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|    new |    +1 |    0.0% → 2.4% |   0 → 1 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Callee           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| +20.6% |    +7 | 100.0% | 34 → 41 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| +25.9% |    +7 | 100.0% | 27 → 34 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change | Delta |              % | Samples | Callee                                                                                                   | Location                                                          |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +66.7% |    +6 | 100.0% → 93.8% |  9 → 15 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|    new |    +1 |    0.0% → 6.3% |   0 → 1 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

| Change | Delta |      % | Samples | Callee                      | Location                 |
| -----: | ----: | -----: | ------: | --------------------------- | ------------------------ |
| +25.0% |    +6 | 100.0% | 24 → 30 | `inflate(byte[], int, int)` | `java.util.zip.Inflater` |

##### `read(byte[], int, int)` (`java.util.zip.ZipInputStream`)

| Change | Delta |      % | Samples | Callee                   | Location                            |
| -----: | ----: | -----: | ------: | ------------------------ | ----------------------------------- |
| +25.0% |    +6 | 100.0% | 24 → 30 | `read(byte[], int, int)` | `java.util.zip.InflaterInputStream` |

##### `read(byte[])` (`java.io.FilterInputStream`)

| Change | Delta |      % | Samples | Callee                   | Location                       |
| -----: | ----: | -----: | ------: | ------------------------ | ------------------------------ |
| +25.0% |    +6 | 100.0% | 24 → 30 | `read(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                     |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------------------------- |
| +17.6% |    +6 | 100.0% | 34 → 40 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                            |
| -----: | ----: | -----: | ------: | -------------------------------- | --------------------------------------------------- |
| +18.2% |    +6 | 100.0% | 33 → 39 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000007801010000` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |              % | Samples | Callee                                                        | Location                                                         |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------- |
|  +15.2% |    +5 | 100.0% → 97.4% | 33 → 38 | `phaseBody(LoggingContext, Object)`                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|     new |    +3 |    0.0% → 7.7% |   0 → 3 | `phaseBody(LoggingContext, Object)`                           | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
| removed |    -1 |    3.0% → 0.0% |   1 → 0 | `runBefore(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
|     new |    +1 |    0.0% → 2.6% |   0 → 1 | `phaseBody(LoggingContext, Object)`                           | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Callee                                                      | Location                                      |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------- | --------------------------------------------- |
| +21.4% |    +6 | 100.0% | 28 → 34 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| +21.4% |    +6 | 100.0% | 28 → 34 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|  Change | Delta |             % | Samples | Callee                                | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| +100.0% |    +3 | 75.0% → 60.0% |   3 → 6 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| +100.0% |    +1 | 25.0% → 20.0% |   1 → 2 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrElementTransformerVoid`  |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer`             |
|     new |    +1 |  0.0% → 10.0% |   0 → 1 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrVisitor`                 |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change | Delta |             % | Samples | Callee                                     | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
|  +57.1% |    +4 | 77.8% → 73.3% |  7 → 11 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| +100.0% |    +2 | 22.2% → 26.7% |   2 → 4 | `generateAnnotations()`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                               |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
| +66.7% |    +6 | 100.0% |  9 → 15 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

| Change | Delta |      % | Samples | Callee                                            | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------- | ------------------------------------------------------ |
| +66.7% |    +6 | 100.0% |  9 → 15 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |              % | Samples | Callee          | Location                        |
| ------: | ----: | -------------: | ------: | --------------- | ------------------------------- |
|  +25.0% |    +6 | 96.0% → 100.0% | 24 → 30 | `read(byte[])`  | `java.io.FilterInputStream`     |
| removed |    -1 |    4.0% → 0.0% |   1 → 0 | `toByteArray()` | `java.io.ByteArrayOutputStream` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |      % | Samples | Callee                                                  | Location                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| +20.0% |    +5 | 100.0% | 25 → 30 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % | Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| +15.2% |    +5 | 100.0% | 33 → 38 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007801010000`)

| Change | Delta |      % | Samples | Callee                         | Location                                             |
| -----: | ----: | -----: | ------: | ------------------------------ | ---------------------------------------------------- |
| +14.7% |    +5 | 100.0% | 34 → 39 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| +15.6% |    +5 | 100.0% | 32 → 37 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| +16.1% |    +5 | 100.0% | 31 → 36 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| +12.5% |    +4 | 100.0% | 32 → 36 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

| Change | Delta |            % | Samples | Callee     | Location                                                                                                   |
| -----: | ----: | -----------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke()` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000078015fc9b0` |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000007801635220`                       |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |              % | Samples | Callee                            | Location                         |
| ------: | ----: | -------------: | ------: | --------------------------------- | -------------------------------- |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `open()` (`jdk.internal.loader.NativeLibraries$NativeLibraryImpl`)

| Change | Delta |      % | Samples | Callee                                                              | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------- | ------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` | `jdk.internal.loader.NativeLibraries` |

##### `loadLibrary(Class, String, boolean)` (`jdk.internal.loader.NativeLibraries`)

| Change | Delta |      % | Samples | Callee   | Location                                                |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `open()` | `jdk.internal.loader.NativeLibraries$NativeLibraryImpl` |

##### `loadLibrary(Class, File)` (`jdk.internal.loader.NativeLibraries`)

| Change | Delta |      % | Samples | Callee                                | Location                              |
| -----: | ----: | -----: | ------: | ------------------------------------- | ------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `loadLibrary(Class, String, boolean)` | `jdk.internal.loader.NativeLibraries` |

##### `loadLibrary(Class, File)` (`java.lang.ClassLoader`)

| Change | Delta |      % | Samples | Callee                     | Location                              |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `loadLibrary(Class, File)` | `jdk.internal.loader.NativeLibraries` |

##### `load0(Class, String)` (`java.lang.Runtime`)

| Change | Delta |      % | Samples | Callee                     | Location                |
| -----: | ----: | -----: | ------: | -------------------------- | ----------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `loadLibrary(Class, File)` | `java.lang.ClassLoader` |

##### `load(String)` (`java.lang.System`)

| Change | Delta |      % | Samples | Callee                 | Location            |
| -----: | ----: | -----: | ------: | ---------------------- | ------------------- |
| +14.3% |    +1 | 100.0% |   7 → 8 | `load0(Class, String)` | `java.lang.Runtime` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

| Change | Delta |      % | Samples | Callee                                        | Location                                                         |
| -----: | ----: | -----: | ------: | --------------------------------------------- | ---------------------------------------------------------------- |
| -40.0% |    -8 | 100.0% | 20 → 12 | `executePhase(ConfigurationPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

| Change | Delta |             % | Samples | Callee                                                                        | Location                                                         |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -38.5% |    -5 | 65.0% → 61.5% |  13 → 8 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`              | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
| -66.7% |    -2 |  15.0% → 7.7% |   3 → 1 | `runPlatformCheckers(List, BaseDiagnosticsCollector)`                         | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`                |
| -25.0% |    -1 | 20.0% → 23.1% |   4 → 3 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                   |
|    new |    +1 |   0.0% → 7.7% |   0 → 1 | `createEnvironmentAndSources(CompilerConfiguration, Disposable, String)`      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |             % | Samples | Callee                              | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ------------------------------------------------------------------ |
|  -66.7% |    -4 | 35.3% → 16.7% |   6 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`               |
|  -66.7% |    -2 |  17.6% → 8.3% |   3 → 1 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirLiteralExpression`        |
|  +50.0% |    +1 | 11.8% → 25.0% |   2 → 3 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall`           |
|  -11.1% |    -1 | 52.9% → 66.7% |   9 → 8 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |

##### `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change | Delta |             % | Samples | Callee                                                                                        | Location                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------- |
| -33.3% |    -3 | 64.3% → 66.7% |   9 → 6 | `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| -40.0% |    -2 | 35.7% → 33.3% |   5 → 3 | `runResolution(FirSession, List)`                                                             | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078016ae458`)

|  Change | Delta |             % | Samples | Callee                                                                                                         | Location                                                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                                            | Location                                                   |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| -35.7% |    -5 | 100.0% |  14 → 9 | `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt` |

##### `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                                                                | Location                                                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -35.7% |    -5 | 100.0% |  14 → 9 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformBlock(FirBlock, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                     | Location                                                                                      |
| -----: | ----: | -----: | ------: | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| -35.7% |    -5 | 100.0% |  14 → 9 | `transformBlock(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `transformBlock(FirBlock, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                     | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| -35.7% |    -5 | 100.0% |  14 → 9 | `transformBlock(FirBlock, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirBlock`)

| Change | Delta |             % | Samples | Callee                             | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -35.7% |    -5 |        100.0% |  14 → 9 | `transformBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -33.3% |    -4 | 85.7% → 88.9% |  12 → 8 | `transformBlock(FirBlock, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                       |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |            % | Samples | Callee     | Location                                                                                                         |
| ------: | ----: | -----------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x00000080016a4c00`                              |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000800162ab48` |
| removed |    -1 | 20.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaAnnotation$$Lambda.0x0000008001407a40`       |

##### `acceptChildren(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

|  Change | Delta |              % | Samples | Callee                       | Location                                                 |
| ------: | ----: | -------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|  -27.3% |    -3 | 84.6% → 100.0% |  11 → 8 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction` |
| removed |    -2 |   15.4% → 0.0% |   2 → 0 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`  |

##### `accept(FirVisitor, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

| Change | Delta |             % | Samples | Callee                       | Location                                                                          |
| -----: | ----: | ------------: | ------: | ---------------------------- | --------------------------------------------------------------------------------- |
| -41.7% |    -5 | 85.7% → 77.8% |  12 → 7 | `visitFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `collectDiagnostics(FirDeclaration, PendingDiagnosticReporter)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`)

| Change | Delta |      % | Samples | Callee                       | Location                                        |
| -----: | ----: | -----: | ------: | ---------------------------- | ----------------------------------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `accept(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.FirFile` |

##### `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`)

| Change | Delta |      % | Samples | Callee                                                          | Location                                                                   |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `collectDiagnostics(FirDeclaration, PendingDiagnosticReporter)` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector` |

##### `transformFunctionCallInternal$org_jetbrains_kotlin_resolve(FirFunctionCall, ResolutionMode, FirExpressionsResolveTransformer$CallResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change | Delta |             % | Samples | Callee                                                                                                                                         | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -80.0% |    -4 |  33.3% → 9.1% |   5 → 1 | `completeCall(FirExpression, ResolutionMode, boolean)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.FirCallCompleter`                                 |
| -11.1% |    -1 | 60.0% → 72.7% |   9 → 8 | `resolveCallAndSelectCandidate$default(FirCallResolver, FirFunctionCall, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                      |
|    new |    +1 |   0.0% → 9.1% |   0 → 1 | `transformCallArgumentsInsideAnnotationContext(FirFunctionCall, ResolutionMode$WithExpectedType)`                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
|    new |    +1 |   0.0% → 9.1% |   0 → 1 | `enterCallArguments(FirStatement, List)`                                                                                                       | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                    |

##### `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % | Samples | Callee                                     | Location                                                                                       |
| -----: | ----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `doTransformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformFile(FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                   | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `transformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformFile(FirFile, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                                   | Location                                                                                                 |
| -----: | ----: | -----: | ------: | ---------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `transformFile(FirFile, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformStatementsIndexed(FirBlock, FirTransformer, Function1)` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

|  Change | Delta |             % | Samples | Callee                              | Location                                                   |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ---------------------------------------------------------- |
|  -50.0% |    -2 | 28.6% → 20.0% |   4 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`     |
|  -33.3% |    -2 | 42.9% → 40.0% |   6 → 4 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression` |
|  -33.3% |    -1 | 21.4% → 20.0% |   3 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirProperty`        |
| +100.0% |    +1 |  7.1% → 20.0% |   1 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirBlock`            |
| +100.0% |    +1 |  7.1% → 20.0% |   1 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`   |

##### `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`)

| Change | Delta |             % | Samples | Callee                              | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------------------- |
| -30.8% |    -4 | 92.9% → 90.0% |  13 → 9 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirBlock` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |              % | Samples | Callee     | Location                                                                                         |
| ------: | ----: | -------------: | ------: | ---------- | ------------------------------------------------------------------------------------------------ |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x00000080015fb478`      |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000008001631b48`             |
| +100.0% |    +1 | 25.0% → 100.0% |   1 → 2 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x00000078013edac0`             |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x00000080011a47c8` |

##### `firstOrNull(Sequence)` (`kotlin.sequences.SequencesKt___SequencesKt`)

|  Change | Delta |             % | Samples | Callee      | Location                                        |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `hasNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

##### `newInvokeSpecial(Object, Object)` (`java.lang.invoke.DirectMethodHandle$Holder`)

|  Change | Delta |            % | Samples | Callee                               | Location                                                                              |
| ------: | ----: | -----------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------- |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `<init>(JavaAnnotationOwner)`        | `org.jetbrains.kotlin.load.java.structure.JavaElementsKt$$Lambda.0x00000080015d5080`  |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `<init>(AbstractFir2IrLazyFunction)` | `org.jetbrains.kotlin.fir.lazy.AbstractFir2IrLazyFunction$$Lambda.0x00000080017ca000` |

##### `linkToTargetMethod(Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                             | Location                                     |
| -----: | ----: | -----: | ------: | ---------------------------------- | -------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `newInvokeSpecial(Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Callee    | Location           |
| ------: | ----: | ------------: | ------: | --------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

|  Change | Delta |             % | Samples | Callee                | Location           |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                                                          | Location                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee              | Location                                                 |
| ------: | ----: | ------------: | ------: | ------------------- | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `put(Object, Object)` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap`)

|  Change | Delta |             % | Samples | Callee                | Location                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `withNext(Object)`    | `kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`          |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `put(Object, Object)` | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap` |

##### `hasNext()` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValuesIterator`)

|  Change | Delta |             % | Samples | Callee      | Location                                                                                               |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `hasNext()` | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator` |

##### `next()` (`kotlin.sequences.TransformingSequence$iterator$1`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                            |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex$$Lambda.0x00000080014a4038` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.modules.CliJavaModuleFinder$systemModules$1`                          |

##### `calcNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |      % | Samples | Callee   | Location                                           |
| -----: | ----: | -----: | ------: | -------- | -------------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `next()` | `kotlin.sequences.TransformingSequence$iterator$1` |

##### `hasNext()` (`kotlin.sequences.FilteringSequence$iterator$1`)

| Change | Delta |      % | Samples | Callee       | Location                                        |
| -----: | ----: | -----: | ------: | ------------ | ----------------------------------------------- |
| -50.0% |    -1 | 100.0% |   2 → 1 | `calcNext()` | `kotlin.sequences.FilteringSequence$iterator$1` |

# Allocated heap profile diff

Allocated 684 MiB (-260.585 KiB, ~0%) over 877 samples → 872 samples (799 KiB → 803 KiB per sample).

| Category         | Change |        Delta |             % |                Size |   Samples |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------: |
| Standard library |  -0.2% |   -1.142 MiB | 76.9% → 76.8% |   526 MiB → 525 MiB | 552 → 547 |
| Ours             |  +0.6% | +909.257 KiB | 23.1% → 23.2% |   158 MiB → 159 MiB | 314 → 315 |
| Unknown          |  +2.0% |       +600 B |         <0.1% | 29.9 KiB → 30.5 KiB |   11 → 10 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |            % |                Size |   Samples | Function                                                                              | Location                                                                |
| ------: | -------------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +152.7% |    +70.343 MiB | 6.7% → 17.0% |  46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`                                                                         | `java.io.ByteArrayOutputStream`                                         |
| +517.7% |     +69.39 MiB | 2.0% → 12.1% | 13.4 MiB → 82.8 MiB |   27 → 44 | `copyOfRangeByte(byte[], int, int)`                                                   | `java.util.Arrays`                                                      |
| +700.0% |     +3.493 MiB |  0.1% → 0.6% |  511 KiB → 3.99 MiB |     1 → 7 | `to(Object, Object)`                                                                  | `kotlin.TuplesKt`                                                       |
| +507.4% |     +3.481 MiB |  0.1% → 0.6% |  703 KiB → 4.17 MiB |     1 → 7 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`       |
|  +71.7% |     +3.126 MiB |  0.6% → 1.1% | 4.36 MiB → 7.49 MiB |    9 → 16 | `resize()`                                                                            | `java.util.HashMap`                                                     |
| +166.7% |     +2.494 MiB |  0.2% → 0.6% |  1.5 MiB → 3.99 MiB |     3 → 8 | `<init>(int)`                                                                         | `kotlin.collections.builders.MapBuilder`                                |
|  +80.0% |     +1.995 MiB |  0.4% → 0.7% |  2.5 MiB → 4.49 MiB |     5 → 9 | `copyOfRange(byte[], int, int)`                                                       | `java.util.Arrays`                                                      |
|  +99.9% |     +1.994 MiB |  0.3% → 0.6% |    2 MiB → 3.99 MiB |     4 → 7 | `newString(byte[], int, int)`                                                         | `java.lang.StringLatin1`                                                |
|     new |     +1.994 MiB |  0.0% → 0.3% |      0 B → 1.99 MiB |     0 → 3 | `addConstantMemberReference(int, String, String, String)`                             | `jdk.internal.org.objectweb.asm.SymbolTable`                            |
|  +32.9% |     +1.803 MiB |  0.8% → 1.1% | 5.49 MiB → 7.29 MiB |   10 → 15 | `<init>(int, float, boolean)`                                                         | `java.util.HashSet`                                                     |
|     new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `valueOf(int)`                                                                        | `java.lang.Integer`                                                     |
|     new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                       |
|     new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 2 | `<init>()`                                                                            | `org.jetbrains.kotlin.fir.declarations.builder.FirTypeParameterBuilder` |
|     new |     +1.496 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `merge(SymbolTable, Frame, int)`                                                      | `org.jetbrains.org.objectweb.asm.Frame`                                 |
| +300.0% |     +1.496 MiB |  0.1% → 0.3% |  511 KiB → 1.99 MiB |     1 → 3 | `<init>(int)`                                                                         | `jdk.internal.org.objectweb.asm.ByteVector`                             |
|     new |     +1.489 MiB |  0.0% → 0.2% |      0 B → 1.49 MiB |     0 → 3 | `readBootstrapMethodsAttribute(int)`                                                  | `org.jetbrains.org.objectweb.asm.ClassReader`                           |
| +283.1% |     +1.471 MiB |  0.1% → 0.3% |  532 KiB → 1.99 MiB |     2 → 5 | `<init>(int)`                                                                         | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`           |
|  +22.9% |     +1.115 MiB |  0.7% → 0.9% | 4.87 MiB → 5.99 MiB |   10 → 12 | `newInstance(OutputStream, int)`                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                       |
| +200.0% | +1,022.031 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `<init>()`                                                                            | `kotlin.collections.builders.SetBuilder`                                |
| +200.0% |     +1,022 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `sequencedKeySet()`                                                                   | `java.util.LinkedHashMap`                                               |

##### Standard library

|  Change |          Delta |            % |                Size |   Samples | Function                                                  | Location                                                      |
| ------: | -------------: | -----------: | ------------------: | --------: | --------------------------------------------------------- | ------------------------------------------------------------- |
| +152.7% |    +70.343 MiB | 6.7% → 17.0% |  46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`                                             | `java.io.ByteArrayOutputStream`                               |
| +517.7% |     +69.39 MiB | 2.0% → 12.1% | 13.4 MiB → 82.8 MiB |   27 → 44 | `copyOfRangeByte(byte[], int, int)`                       | `java.util.Arrays`                                            |
| +700.0% |     +3.493 MiB |  0.1% → 0.6% |  511 KiB → 3.99 MiB |     1 → 7 | `to(Object, Object)`                                      | `kotlin.TuplesKt`                                             |
|  +71.7% |     +3.126 MiB |  0.6% → 1.1% | 4.36 MiB → 7.49 MiB |    9 → 16 | `resize()`                                                | `java.util.HashMap`                                           |
| +166.7% |     +2.494 MiB |  0.2% → 0.6% |  1.5 MiB → 3.99 MiB |     3 → 8 | `<init>(int)`                                             | `kotlin.collections.builders.MapBuilder`                      |
|  +80.0% |     +1.995 MiB |  0.4% → 0.7% |  2.5 MiB → 4.49 MiB |     5 → 9 | `copyOfRange(byte[], int, int)`                           | `java.util.Arrays`                                            |
|  +99.9% |     +1.994 MiB |  0.3% → 0.6% |    2 MiB → 3.99 MiB |     4 → 7 | `newString(byte[], int, int)`                             | `java.lang.StringLatin1`                                      |
|     new |     +1.994 MiB |  0.0% → 0.3% |      0 B → 1.99 MiB |     0 → 3 | `addConstantMemberReference(int, String, String, String)` | `jdk.internal.org.objectweb.asm.SymbolTable`                  |
|  +32.9% |     +1.803 MiB |  0.8% → 1.1% | 5.49 MiB → 7.29 MiB |   10 → 15 | `<init>(int, float, boolean)`                             | `java.util.HashSet`                                           |
|     new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `valueOf(int)`                                            | `java.lang.Integer`                                           |
| +300.0% |     +1.496 MiB |  0.1% → 0.3% |  511 KiB → 1.99 MiB |     1 → 3 | `<init>(int)`                                             | `jdk.internal.org.objectweb.asm.ByteVector`                   |
| +283.1% |     +1.471 MiB |  0.1% → 0.3% |  532 KiB → 1.99 MiB |     2 → 5 | `<init>(int)`                                             | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output` |
| +200.0% | +1,022.031 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `<init>()`                                                | `kotlin.collections.builders.SetBuilder`                      |
| +200.0% |     +1,022 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `sequencedKeySet()`                                       | `java.util.LinkedHashMap`                                     |
|     new | +1,021.992 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |     0 → 2 | `subList(int, int)`                                       | `java.util.AbstractList`                                      |
| +200.0% | +1,021.976 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `singletonList(Object)`                                   | `java.util.Collections`                                       |
| +200.0% | +1,021.945 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `addConstantUtf8Reference(int, String)`                   | `jdk.internal.org.objectweb.asm.SymbolTable`                  |
|     new | +1,021.929 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |     0 → 2 | `descriptorString()`                                      | `java.lang.Class`                                             |
|     new | +1,013.914 KiB |  0.0% → 0.1% |     0 B → 1,014 KiB |     0 → 2 | `read(ByteBuffer)`                                        | `java.nio.channels.Channels$ReadableByteChannelImpl`          |
| +195.5% | +1,011.765 KiB |  0.1% → 0.2% |  518 KiB → 1.49 MiB |     1 → 2 | `compress(char[], int, int)`                              | `java.lang.StringUTF16`                                       |

##### Ours

|  Change |          Delta |           % |                Size | Samples | Function                                                                                   | Location                                                                  |
| ------: | -------------: | ----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| +507.4% |     +3.481 MiB | 0.1% → 0.6% |  703 KiB → 4.17 MiB |   1 → 7 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`         |
|     new |     +1.497 MiB | 0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                          | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                         |
|     new |     +1.497 MiB | 0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 2 | `<init>()`                                                                                 | `org.jetbrains.kotlin.fir.declarations.builder.FirTypeParameterBuilder`   |
|     new |     +1.496 MiB | 0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `merge(SymbolTable, Frame, int)`                                                           | `org.jetbrains.org.objectweb.asm.Frame`                                   |
|     new |     +1.489 MiB | 0.0% → 0.2% |      0 B → 1.49 MiB |   0 → 3 | `readBootstrapMethodsAttribute(int)`                                                       | `org.jetbrains.org.objectweb.asm.ClassReader`                             |
|  +22.9% |     +1.115 MiB | 0.7% → 0.9% | 4.87 MiB → 5.99 MiB | 10 → 12 | `newInstance(OutputStream, int)`                                                           | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                         |
|     new |     +1,022 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                    |
|     new |     +1,022 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)`      | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt`                   |
|     new | +1,021.992 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `traverseIds(int)`                                                                         | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`          |
|     new | +1,021.992 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `getArgumentTypes(String)`                                                                 | `org.jetbrains.org.objectweb.asm.Type`                                    |
|     new | +1,021.984 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `internalNameByClassId(ClassId)`                                                           | `org.jetbrains.kotlin.resolve.jvm.JvmClassName`                           |
|     new | +1,021.984 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 1 | `processInlineFunFinallyBlocks(MethodNode, int, int, boolean)`                             | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner`         |
| +100.0% | +1,021.968 KiB | 0.1% → 0.3% |   1,022 KiB → 2 MiB |   2 → 4 | `create()`                                                                                 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                 |
|     new | +1,021.968 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `create()`                                                                                 | `org.jetbrains.kotlin.utils.SmartSet$Companion`                           |
|     new |  +1,021.96 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `visitInsn(int)`                                                                           | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                         |
|     new | +1,021.953 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$1` |
|     new | +1,021.953 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                |
| +200.0% | +1,021.945 KiB | 0.1% → 0.2% |   511 KiB → 1.5 MiB |   1 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                 |
|     new | +1,021.945 KiB | 0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `findMergeNodes(MethodNode)`                                                               | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer$Companion` |
|  +66.7% | +1,021.937 KiB | 0.2% → 0.4% |   1.5 MiB → 2.5 MiB |   3 → 5 | `newFieldMap(int)`                                                                         | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                            |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                 Size |   Samples | Function                                                            | Location                                                                                           |
| ------: | ----------: | ------------: | -------------------: | --------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -65.515 MiB |   9.6% → 0.0% |       65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                                            | `java.util.zip.ZipFile$Source`                                                                     |
|  -25.1% | -65.363 MiB | 38.0% → 28.5% |    260 MiB → 195 MiB | 102 → 108 | `copyOf(byte[], int)`                                               | `java.util.Arrays`                                                                                 |
|  -50.8% |  -9.549 MiB |   2.7% → 1.4% |  18.8 MiB → 9.24 MiB |   41 → 23 | `iterator()`                                                        | `java.util.ArrayList`                                                                              |
|  -71.4% |  -4.988 MiB |   1.0% → 0.3% |  6.98 MiB → 1.99 MiB |    14 → 4 | `copyOf(Object[], int)`                                             | `java.util.Arrays`                                                                                 |
|  -54.5% |   -4.55 MiB |   1.2% → 0.6% |  8.36 MiB → 3.81 MiB |    16 → 8 | `grow(int)`                                                         | `java.util.ArrayList`                                                                              |
|  -23.8% |  -3.888 MiB |   2.4% → 1.8% |  16.4 MiB → 12.5 MiB |   33 → 25 | `<init>(int)`                                                       | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
|  -54.5% |  -2.994 MiB |   0.8% → 0.4% |   5.49 MiB → 2.5 MiB |    11 → 5 | `box-impl(List)`                                                    | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| removed |  -2.652 MiB |   0.4% → 0.0% |       2.65 MiB → 0 B |     5 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                     | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
|  -50.4% |  -2.537 MiB |   0.7% → 0.4% |   5.03 MiB → 2.5 MiB |    11 → 5 | `newNode(int, Object, Object, HashMap$Node)`                        | `java.util.LinkedHashMap`                                                                          |
|  -67.1% |  -2.035 MiB |   0.4% → 0.1% | 3.03 MiB → 1,022 KiB |     7 → 2 | `copyOf(Object[], int, Class)`                                      | `java.util.Arrays`                                                                                 |
|  -80.3% |  -2.021 MiB |   0.4% → 0.1% |   2.52 MiB → 509 KiB |     6 → 1 | `<init>(InputStream, Inflater, int)`                                | `java.util.zip.InflaterInputStream`                                                                |
|  -52.2% |  -1.822 MiB |   0.5% → 0.2% |  3.49 MiB → 1.67 MiB |     7 → 4 | `ensureCapacity()`                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -35.5% |   -1.59 MiB |   0.7% → 0.4% |   4.49 MiB → 2.9 MiB |     9 → 6 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`         | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|  -75.0% |  -1.497 MiB |   0.3% → 0.1% |      2 MiB → 511 KiB |     4 → 1 | `topLevel(FqName)`                                                  | `org.jetbrains.kotlin.name.ClassId$Companion`                                                      |
| removed |  -1.497 MiB |   0.2% → 0.0% |        1.5 MiB → 0 B |     3 → 0 | `sequencedEntrySet()`                                               | `java.util.LinkedHashMap`                                                                          |
|  -42.9% |  -1.497 MiB |   0.5% → 0.3% |     3.49 MiB → 2 MiB |     7 → 4 | `simplifyTrivialInstructions(MethodNode)`                           | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -75.0% |  -1.497 MiB |   0.3% → 0.1% |      2 MiB → 511 KiB |     4 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                              |
| removed |  -1.496 MiB |   0.2% → 0.0% |        1.5 MiB → 0 B |     3 → 0 | `getBytes(int, int)`                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
|  -59.4% |   -1.46 MiB |   0.4% → 0.1% | 2.46 MiB → 1,022 KiB |     5 → 2 | `replace(byte[], char, char)`                                       | `java.lang.StringLatin1`                                                                           |
|  -53.7% |  -1.155 MiB |   0.3% → 0.1% | 2.15 MiB → 1,022 KiB |     5 → 1 | `stringFromByteBuffer(ByteBuffer, int)`                             | `jdk.internal.jimage.ImageStringsReader`                                                           |

##### Standard library

|  Change |          Delta |             % |                 Size |   Samples | Function                                     | Location                                                                                   |
| ------: | -------------: | ------------: | -------------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -65.515 MiB |   9.6% → 0.0% |       65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`                                                             |
|  -25.1% |    -65.363 MiB | 38.0% → 28.5% |    260 MiB → 195 MiB | 102 → 108 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                                                         |
|  -50.8% |     -9.549 MiB |   2.7% → 1.4% |  18.8 MiB → 9.24 MiB |   41 → 23 | `iterator()`                                 | `java.util.ArrayList`                                                                      |
|  -71.4% |     -4.988 MiB |   1.0% → 0.3% |  6.98 MiB → 1.99 MiB |    14 → 4 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                                                         |
|  -54.5% |      -4.55 MiB |   1.2% → 0.6% |  8.36 MiB → 3.81 MiB |    16 → 8 | `grow(int)`                                  | `java.util.ArrayList`                                                                      |
|  -50.4% |     -2.537 MiB |   0.7% → 0.4% |   5.03 MiB → 2.5 MiB |    11 → 5 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                                                                  |
|  -67.1% |     -2.035 MiB |   0.4% → 0.1% | 3.03 MiB → 1,022 KiB |     7 → 2 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                                                         |
|  -80.3% |     -2.021 MiB |   0.4% → 0.1% |   2.52 MiB → 509 KiB |     6 → 1 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                                                        |
| removed |     -1.497 MiB |   0.2% → 0.0% |        1.5 MiB → 0 B |     3 → 0 | `sequencedEntrySet()`                        | `java.util.LinkedHashMap`                                                                  |
|  -59.4% |      -1.46 MiB |   0.4% → 0.1% | 2.46 MiB → 1,022 KiB |     5 → 2 | `replace(byte[], char, char)`                | `java.lang.StringLatin1`                                                                   |
|  -53.7% |     -1.155 MiB |   0.3% → 0.1% | 2.15 MiB → 1,022 KiB |     5 → 1 | `stringFromByteBuffer(ByteBuffer, int)`      | `jdk.internal.jimage.ImageStringsReader`                                                   |
|  -41.5% |      -1.06 MiB |   0.4% → 0.2% |   2.56 MiB → 1.5 MiB |     5 → 3 | `toString()`                                 | `java.lang.StringBuilder`                                                                  |
|  -33.4% | -1,022.031 KiB |   0.4% → 0.3% |  2.99 MiB → 1.99 MiB |     6 → 4 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                                                |
| removed | -1,021.992 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     2 → 0 | `listIterator(int)`                          | `kotlin.collections.builders.ListBuilder`                                                  |
| removed | -1,021.984 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     2 → 0 | `lazy(Function0)`                            | `kotlin.LazyKt__LazyJVMKt`                                                                 |
| removed |  -1,021.96 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     1 → 0 | `in(Class)`                                  | `java.lang.invoke.MethodHandles$Lookup`                                                    |
|  -50.0% | -1,021.953 KiB |   0.3% → 0.1% |    2 MiB → 1,022 KiB |     3 → 2 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                                                      |
| removed | -1,021.953 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     2 → 0 | `<init>(TrieNode)`                           | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator` |
|  -40.0% | -1,021.914 KiB |   0.4% → 0.2% |   2.49 MiB → 1.5 MiB |     5 → 3 | `arrayOfUninitializedElements(int)`          | `kotlin.collections.builders.ListBuilderKt`                                                |
|  -99.7% |  -1,019.32 KiB |  0.1% → <0.1% | 1,022 KiB → 2.61 KiB |     2 → 1 | `<init>()`                                   | `jdk.internal.org.objectweb.asm.ByteVector`                                                |

##### Ours

|  Change |          Delta |           % |                Size | Samples | Function                                                                                    | Location                                                                                           |
| ------: | -------------: | ----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -23.8% |     -3.888 MiB | 2.4% → 1.8% | 16.4 MiB → 12.5 MiB | 33 → 25 | `<init>(int)`                                                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
|  -54.5% |     -2.994 MiB | 0.8% → 0.4% |  5.49 MiB → 2.5 MiB |  11 → 5 | `box-impl(List)`                                                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| removed |     -2.652 MiB | 0.4% → 0.0% |      2.65 MiB → 0 B |   5 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                             | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
|  -52.2% |     -1.822 MiB | 0.5% → 0.2% | 3.49 MiB → 1.67 MiB |   7 → 4 | `ensureCapacity()`                                                                          | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -35.5% |      -1.59 MiB | 0.7% → 0.4% |  4.49 MiB → 2.9 MiB |   9 → 6 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|  -75.0% |     -1.497 MiB | 0.3% → 0.1% |     2 MiB → 511 KiB |   4 → 1 | `topLevel(FqName)`                                                                          | `org.jetbrains.kotlin.name.ClassId$Companion`                                                      |
|  -42.9% |     -1.497 MiB | 0.5% → 0.3% |    3.49 MiB → 2 MiB |   7 → 4 | `simplifyTrivialInstructions(MethodNode)`                                                   | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -75.0% |     -1.497 MiB | 0.3% → 0.1% |     2 MiB → 511 KiB |   4 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                         | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                              |
| removed |     -1.496 MiB | 0.2% → 0.0% |       1.5 MiB → 0 B |   3 → 0 | `getBytes(int, int)`                                                                        | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| removed |     -1.128 MiB | 0.2% → 0.0% |      1.13 MiB → 0 B |   2 → 0 | `visitVarInsn(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed | -1,022.007 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `substituteArguments(ConeSimpleKotlinType)`                                                 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`                            |
|  -50.0% |     -1,022 KiB | 0.3% → 0.1% |   2 MiB → 1,022 KiB |   4 → 2 | `identifier(String)`                                                                        | `org.jetbrains.kotlin.name.Name`                                                                   |
| removed |     -1,022 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                           |
|  -66.7% |     -1,022 KiB | 0.2% → 0.1% |   1.5 MiB → 511 KiB |   3 → 1 | `requestGroup(TowerGroup, Continuation)`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                 |
| removed |     -1,022 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `getModifiers()`                                                                            | `org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList`                  |
| removed | -1,021.992 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`                                           |
| removed | -1,021.976 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `getLabelNode(Label)`                                                                       | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed | -1,021.968 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `<init>(KtSourceElement)`                                                                   | `org.jetbrains.kotlin.fir.types.impl.FirTypeArgumentListImpl`                                      |
| removed |  -1,021.96 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `<init>()`                                                                                  | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                        |
| removed |  -1,021.96 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `visitLineNumber(int, Label)`                                                               | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|  Change |       Delta |      % |               Size |   Samples | Location                           |
| ------: | ----------: | -----: | -----------------: | --------: | ---------------------------------- |
| +152.7% | +70.343 MiB | 100.0% | 46.1 MiB → 116 MiB | 115 → 107 | `java.io.ByteArrayOutputStream:81` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |      % |                Size | Samples | Location                |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +517.7% | +69.39 MiB | 100.0% | 13.4 MiB → 82.8 MiB | 27 → 44 | `java.util.Arrays:3863` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|  Change |      Delta |      % |               Size | Samples | Location             |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------- |
| +700.0% | +3.493 MiB | 100.0% | 511 KiB → 3.99 MiB |   1 → 7 | `kotlin.TuplesKt:44` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |      Delta |      % |               Size | Samples | Location                                                             |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------------------------------------------------------- |
| +507.4% | +3.481 MiB | 100.0% | 703 KiB → 4.17 MiB |   1 → 7 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +71.7% | +3.126 MiB | 100.0% | 4.36 MiB → 7.49 MiB |  9 → 16 | `java.util.HashMap:710` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|  Change |          Delta |             % |              Size | Samples | Location                                    |
| ------: | -------------: | ------------: | ----------------: | ------: | ------------------------------------------- |
| +300.0% |     +1.496 MiB | 33.3% → 50.0% |   511 KiB → 2 MiB |   1 → 4 | `kotlin.collections.builders.MapBuilder:59` |
| +100.0% | +1,021.968 KiB | 66.7% → 50.0% | 1,022 KiB → 2 MiB |   2 → 4 | `kotlin.collections.builders.MapBuilder:60` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |               Size | Samples | Location                |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------- |
| +80.0% | +1.995 MiB | 100.0% | 2.5 MiB → 4.49 MiB |   5 → 9 | `java.util.Arrays:3856` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |             Size | Samples | Location                     |
| -----: | ---------: | -----: | ---------------: | ------: | ---------------------------- |
| +99.9% | +1.994 MiB | 100.0% | 2 MiB → 3.99 MiB |   4 → 7 | `java.lang.StringLatin1:750` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |      Delta |             % |           Size | Samples | Location                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ |
|    new | +1.994 MiB | 0.0% → 100.0% | 0 B → 1.99 MiB |   0 → 3 | `jdk.internal.org.objectweb.asm.SymbolTable:605` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +32.9% | +1.803 MiB | 100.0% | 5.49 MiB → 7.29 MiB | 10 → 15 | `java.util.HashSet:171` |

##### `valueOf(int)` (`java.lang.Integer`)

| Change |      Delta |             % |          Size | Samples | Location                 |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------ |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `java.lang.Integer:1083` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change |          Delta |            % |            Size | Samples | Location                                                |
| -----: | -------------: | -----------: | --------------: | ------: | ------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 66.7% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16600` |
|    new |   +510.992 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function:16681` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.builder.FirTypeParameterBuilder`)

| Change |        Delta |            % |            Size | Samples | Location                                                                   |
| -----: | -----------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------- |
|    new |   +1,022 KiB | 0.0% → 66.7% | 0 B → 1,022 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.builder.FirTypeParameterBuilder:40` |
|    new | +510.984 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.builder.FirTypeParameterBuilder:41` |

##### `merge(SymbolTable, Frame, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

| Change |      Delta |             % |          Size | Samples | Location                                     |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------------------------- |
|    new | +1.496 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.org.objectweb.asm.Frame:1183` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |      % |               Size | Samples | Location                                       |
| ------: | ---------: | -----: | -----------------: | ------: | ---------------------------------------------- |
| +300.0% | +1.496 MiB | 100.0% | 511 KiB → 1.99 MiB |   1 → 3 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |             % |           Size | Samples | Location                                           |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------------- |
|    new | +1.489 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 3 | `org.jetbrains.org.objectweb.asm.ClassReader:3624` |

##### `<init>(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`)

|  Change |        Delta |              % |               Size | Samples | Location                                                          |
| ------: | -----------: | -------------: | -----------------: | ------: | ----------------------------------------------------------------- |
| +186.9% | +995.093 KiB | 100.0% → 74.9% | 532 KiB → 1.49 MiB |   2 → 3 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output:789` |
|     new | +511.695 KiB |   0.0% → 25.1% |      0 B → 512 KiB |   0 → 2 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output:788` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

| Change |      Delta |      % |                Size | Samples | Location                                              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------- |
| +22.9% | +1.115 MiB | 100.0% | 4.87 MiB → 5.99 MiB | 10 → 12 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

|  Change |          Delta |      % |              Size | Samples | Location                                    |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------- |
| +200.0% | +1,022.031 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `kotlin.collections.builders.SetBuilder:19` |

##### `sequencedKeySet()` (`java.util.LinkedHashMap`)

|  Change |      Delta |      % |              Size | Samples | Location                      |
| ------: | ---------: | -----: | ----------------: | ------: | ----------------------------- |
| +200.0% | +1,022 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `java.util.LinkedHashMap:643` |

##### `subList(int, int)` (`java.util.AbstractList`)

| Change |          Delta |             % |            Size | Samples | Location                     |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `java.util.AbstractList:501` |

##### `singletonList(Object)` (`java.util.Collections`)

|  Change |          Delta |      % |              Size | Samples | Location                     |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------------------- |
| +200.0% | +1,021.976 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `java.util.Collections:5152` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |      % |              Size | Samples | Location                                          |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------- |
| +200.0% | +1,021.945 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `jdk.internal.org.objectweb.asm.SymbolTable:1040` |

##### `descriptorString()` (`java.lang.Class`)

| Change |          Delta |             % |            Size | Samples | Location               |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------- |
|    new | +1,021.929 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `java.lang.Class:4585` |

##### `read(ByteBuffer)` (`java.nio.channels.Channels$ReadableByteChannelImpl`)

| Change |          Delta |             % |            Size | Samples | Location                                                 |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------- |
|    new | +1,013.914 KiB | 0.0% → 100.0% | 0 B → 1,014 KiB |   0 → 2 | `java.nio.channels.Channels$ReadableByteChannelImpl:311` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |          Delta |      % |               Size | Samples | Location                    |
| ------: | -------------: | -----: | -----------------: | ------: | --------------------------- |
| +195.5% | +1,011.765 KiB | 100.0% | 518 KiB → 1.49 MiB |   1 → 2 | `java.lang.StringUTF16:211` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

| Change |    Delta |            % |          Size | Samples | Location                                                   |
| -----: | -------: | -----------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:113` |
|    new | +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:420` |

##### `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)` (`org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt`)

| Change |      Delta |             % |            Size | Samples | Location                                                    |
| -----: | ---------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|    new | +1,022 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt:118` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

| Change |        Delta |            % |          Size | Samples | Location                                                            |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:34` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:51` |

##### `getArgumentTypes(String)` (`org.jetbrains.org.objectweb.asm.Type`)

| Change |          Delta |             % |            Size | Samples | Location                                   |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------ |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.org.objectweb.asm.Type:301` |

##### `internalNameByClassId(ClassId)` (`org.jetbrains.kotlin.resolve.jvm.JvmClassName`)

| Change |          Delta |             % |            Size | Samples | Location                                           |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.resolve.jvm.JvmClassName:38` |

##### `processInlineFunFinallyBlocks(MethodNode, int, int, boolean)` (`org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner`)

| Change |          Delta |             % |            Size | Samples | Location                                                             |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner:89` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|  Change |          Delta |      % |              Size | Samples | Location                                                       |
| ------: | -------------: | -----: | ----------------: | ------: | -------------------------------------------------------------- |
| +100.0% | +1,021.968 KiB | 100.0% | 1,022 KiB → 2 MiB |   2 → 4 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

##### `create()` (`org.jetbrains.kotlin.utils.SmartSet$Companion`)

| Change |          Delta |             % |            Size | Samples | Location                                           |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------- |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.utils.SmartSet$Companion:33` |

##### `visitInsn(int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |         Delta |             % |            Size | Samples | Location                                              |
| -----: | ------------: | ------------: | --------------: | ------: | ----------------------------------------------------- |
|    new | +1,021.96 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:341` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$1`)

| Change |          Delta |             % |            Size | Samples | Location                                                                      |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------- |
|    new | +1,021.953 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$1:474` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |        Delta |            % |          Size | Samples | Location                                                       |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:341` |
|    new | +510.953 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:319` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

|  Change |          Delta |      % |              Size | Samples | Location                                                        |
| ------: | -------------: | -----: | ----------------: | ------: | --------------------------------------------------------------- |
| +200.0% | +1,021.945 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1:24018` |

##### `findMergeNodes(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer$Companion`)

| Change |          Delta |             % |            Size | Samples | Location                                                                      |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------- |
|    new | +1,021.945 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer$Companion:350` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

| Change |          Delta |      % |              Size | Samples | Location                                           |
| -----: | -------------: | -----: | ----------------: | ------: | -------------------------------------------------- |
| +66.7% | +1,021.937 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Location                            |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------- |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size | Samples | Location                |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------- |
| -27.8% | -63.821 MiB | 88.2% → 85.0% |   229 MiB → 166 MiB | 83 → 92 | `java.util.Arrays:3539` |
|  -5.0% |  -1.541 MiB | 11.8% → 15.0% | 30.8 MiB → 29.3 MiB | 19 → 16 | `java.util.Arrays:3541` |

##### `iterator()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Location                   |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- |
| -50.8% | -9.549 MiB | 100.0% | 18.8 MiB → 9.24 MiB | 41 → 23 | `java.util.ArrayList:1029` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -71.4% | -4.988 MiB | 100.0% | 6.98 MiB → 1.99 MiB |  14 → 4 | `java.util.Arrays:3482` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |     Delta |      % |                Size | Samples | Location                  |
| -----: | --------: | -----: | ------------------: | ------: | ------------------------- |
| -54.5% | -4.55 MiB | 100.0% | 8.36 MiB → 3.81 MiB |  16 → 8 | `java.util.ArrayList:239` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |      Delta |             % |                 Size | Samples | Location                                              |
| -----: | ---------: | ------------: | -------------------: | ------: | ----------------------------------------------------- |
| -17.9% | -2.494 MiB | 85.4% → 92.0% |    14 MiB → 11.5 MiB | 28 → 23 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| -58.3% | -1.393 MiB |  14.6% → 8.0% | 2.39 MiB → 1,022 KiB |   5 → 2 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `getFqNameWhenAvailable(IrDeclarationWithName)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|  Change |      Delta |            % |           Size | Samples | Location                                     |
| ------: | ---------: | -----------: | -------------: | ------: | -------------------------------------------- |
| removed |  -1.43 MiB | 53.9% → 0.0% | 1.43 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:276` |
| removed | -1.222 MiB | 46.1% → 0.0% | 1.22 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:277` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |               Size | Samples | Location                      |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------------- |
| -50.4% | -2.537 MiB | 100.0% | 5.03 MiB → 2.5 MiB |  11 → 5 | `java.util.LinkedHashMap:281` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |      Delta |      % |                 Size | Samples | Location                |
| -----: | ---------: | -----: | -------------------: | ------: | ----------------------- |
| -67.1% | -2.035 MiB | 100.0% | 3.03 MiB → 1,022 KiB |   7 → 2 | `java.util.Arrays:3513` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |               Size | Samples | Location                               |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------------------- |
| -80.3% | -2.021 MiB | 100.0% | 2.52 MiB → 509 KiB |   6 → 1 | `java.util.zip.InflaterInputStream:89` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |      Delta |      % |                Size | Samples | Location                                                     |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------ |
| -52.2% | -1.822 MiB | 100.0% | 3.49 MiB → 1.67 MiB |   7 → 4 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1662` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |     Delta |      % |               Size | Samples | Location                                             |
| -----: | --------: | -----: | -----------------: | ------: | ---------------------------------------------------- |
| -35.5% | -1.59 MiB | 100.0% | 4.49 MiB → 2.9 MiB |   9 → 6 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `topLevel(FqName)` (`org.jetbrains.kotlin.name.ClassId$Companion`)

| Change |      Delta |      % |            Size | Samples | Location                                          |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------- |
| -75.0% | -1.497 MiB | 100.0% | 2 MiB → 511 KiB |   4 → 1 | `org.jetbrains.kotlin.name.ClassId$Companion:123` |

##### `sequencedEntrySet()` (`java.util.LinkedHashMap`)

|  Change |      Delta |             % |          Size | Samples | Location                      |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------- |
| removed | -1.497 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `java.util.LinkedHashMap:897` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |          Delta |             % |                Size | Samples | Location                                                                                              |
| ------: | -------------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------- |
|  -66.7% | -1,021.976 KiB | 42.9% → 25.0% |   1.5 MiB → 511 KiB |   3 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |
| removed |   -510.992 KiB |  14.3% → 0.0% |       511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
|  -50.0% |   -510.984 KiB | 28.6% → 25.0% | 1,022 KiB → 511 KiB |   2 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |
|     new |   +510.984 KiB |  0.0% → 25.0% |       0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change |      Delta |      % |            Size | Samples | Location                                                  |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------- |
| -75.0% | -1.497 MiB | 100.0% | 2 MiB → 511 KiB |   4 → 1 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:169` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|  Change |      Delta |             % |          Size | Samples | Location                                                                          |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------- |
| removed | -1.496 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |     Delta |      % |                 Size | Samples | Location                     |
| -----: | --------: | -----: | -------------------: | ------: | ---------------------------- |
| -59.4% | -1.46 MiB | 100.0% | 2.46 MiB → 1,022 KiB |   5 → 2 | `java.lang.StringLatin1:317` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

|  Change |        Delta |              % |                Size | Samples | Location                                     |
| ------: | -----------: | -------------: | ------------------: | ------: | -------------------------------------------- |
| removed |   -1.497 MiB |   69.5% → 0.0% |       1.5 MiB → 0 B |   3 → 0 | `jdk.internal.jimage.ImageStringsReader:272` |
|  +52.2% | +350.187 KiB | 30.5% → 100.0% | 671 KiB → 1,022 KiB |   2 → 1 | `jdk.internal.jimage.ImageStringsReader:266` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |     Delta |      % |               Size | Samples | Location                      |
| -----: | --------: | -----: | -----------------: | ------: | ----------------------------- |
| -41.5% | -1.06 MiB | 100.0% | 2.56 MiB → 1.5 MiB |   5 → 3 | `java.lang.StringBuilder:475` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |      % |                Size | Samples | Location                                        |
| -----: | -------------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| -33.4% | -1,022.031 KiB | 100.0% | 2.99 MiB → 1.99 MiB |   6 → 4 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `listIterator(int)` (`kotlin.collections.builders.ListBuilder`)

|  Change |          Delta |             % |            Size | Samples | Location                                     |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `kotlin.collections.builders.ListBuilder:76` |

##### `lazy(Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|  Change |          Delta |             % |            Size | Samples | Location                      |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `kotlin.LazyKt__LazyJVMKt:26` |

##### `in(Class)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |         Delta |             % |            Size | Samples | Location                                     |
| ------: | ------------: | ------------: | --------------: | ------: | -------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `java.lang.invoke.MethodHandles$Lookup:1718` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

| Change |          Delta |      % |              Size | Samples | Location                                  |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------------------- |
| -50.0% | -1,021.953 KiB | 100.0% | 2 MiB → 1,022 KiB |   3 → 2 | `java.lang.invoke.DirectMethodHandle:501` |

##### `<init>(TrieNode)` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                                       |
| ------: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------------------- |
| removed | -1,021.953 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator:181` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change |          Delta |      % |               Size | Samples | Location                                        |
| -----: | -------------: | -----: | -----------------: | ------: | ----------------------------------------------- |
| -40.0% | -1,021.914 KiB | 100.0% | 2.49 MiB → 1.5 MiB |   5 → 3 | `kotlin.collections.builders.ListBuilderKt:624` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |         Delta |      % |                 Size | Samples | Location                                       |
| -----: | ------------: | -----: | -------------------: | ------: | ---------------------------------------------- |
| -99.7% | -1,019.32 KiB | 100.0% | 1,022 KiB → 2.61 KiB |   2 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:78` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |      Delta |             % |           Size | Samples | Location                                              |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------- |
| removed | -1.128 MiB | 100.0% → 0.0% | 1.13 MiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `substituteArguments(ConeSimpleKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                    |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------- |
| removed | -1,022.007 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor:125` |

##### `identifier(String)` (`org.jetbrains.kotlin.name.Name`)

| Change |      Delta |      % |              Size | Samples | Location                            |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------- |
| -50.0% | -1,022 KiB | 100.0% | 2 MiB → 1,022 KiB |   4 → 2 | `org.jetbrains.kotlin.name.Name:62` |

##### `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change |      Delta |             % |            Size | Samples | Location                                                    |
| ------: | ---------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
| removed | -1,022 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:32` |

##### `getModifiers()` (`org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList`)

|  Change |    Delta |            % |          Size | Samples | Location                                                                              |
| ------: | -------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------- |
| removed | -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList:138` |
| removed | -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList:141` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

|  Change |          Delta |             % |            Size | Samples | Location                                                      |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1:7714` |

##### `getLabelNode(Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |          Delta |             % |            Size | Samples | Location                                              |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------- |
| removed | -1,021.976 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:534` |

##### `<init>(KtSourceElement)` (`org.jetbrains.kotlin.fir.types.impl.FirTypeArgumentListImpl`)

|  Change |          Delta |             % |            Size | Samples | Location                                                         |
| ------: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.types.impl.FirTypeArgumentListImpl:15` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|  Change |       Delta |            % |          Size | Samples | Location                                                       |
| ------: | ----------: | -----------: | ------------: | ------: | -------------------------------------------------------------- |
| removed |    -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:54` |
| removed | -510.96 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:55` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |         Delta |             % |            Size | Samples | Location                                              |
| ------: | ------------: | ------------: | --------------: | ------: | ----------------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:510` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

|  Change |       Delta |      % |               Size |   Samples | Caller                                                  | Location                                               |
| ------: | ----------: | -----: | -----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------ |
| +152.7% | +70.343 MiB | 100.0% | 46.1 MiB → 116 MiB | 115 → 107 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |      % |                Size | Samples | Caller                          | Location           |
| ------: | ---------: | -----: | ------------------: | ------: | ------------------------------- | ------------------ |
| +517.7% | +69.39 MiB | 100.0% | 13.4 MiB → 82.8 MiB | 27 → 44 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                                 | Location                                                                     |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|     new |     +1.497 MiB |  0.0% → 37.5% |   0 B → 1.5 MiB |   0 → 3 | `addSuccessor(MaxStackFrameSizeAndLocalsCalculator$BasicBlock, Label)`                 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`   |
|     new | +1,021.992 KiB |  0.0% → 25.0% | 0 B → 1,022 KiB |   0 → 1 | `<init>(JvmBackendContext)`                                                            | `org.jetbrains.kotlin.backend.jvm.lower.JvmBuiltInsLowering`                 |
| removed |       -511 KiB | 100.0% → 0.0% |   511 KiB → 0 B |   1 → 0 | `fromRange(int, int)`                                                                  | `org.jetbrains.kotlin.contracts.description.EventOccurrencesRange$Companion` |
|     new |   +510.992 KiB |  0.0% → 12.5% |   0 B → 511 KiB |   0 → 1 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)` | `org.jetbrains.kotlin.KtSourceElementKt`                                     |
|     new |   +510.984 KiB |  0.0% → 12.5% |   0 B → 511 KiB |   0 → 1 | `zip(Iterable, Object[])`                                                              | `kotlin.collections.CollectionsKt___CollectionsKt`                           |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |      Delta |      % |               Size | Samples | Caller           | Location                                                                                     |
| ------: | ---------: | -----: | -----------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| +507.4% | +3.481 MiB | 100.0% | 703 KiB → 4.17 MiB |   1 → 7 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000078013f9e28` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +71.7% | +3.126 MiB | 100.0% | 4.36 MiB → 7.49 MiB |  9 → 16 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|  Change |      Delta |      % |               Size | Samples | Caller     | Location                                 |
| ------: | ---------: | -----: | -----------------: | ------: | ---------- | ---------------------------------------- |
| +166.7% | +2.494 MiB | 100.0% | 1.5 MiB → 3.99 MiB |   3 → 8 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |             % |               Size | Samples | Caller                                | Location           |
| ------: | ---------: | ------------: | -----------------: | ------: | ------------------------------------- | ------------------ |
| +133.3% | +1.995 MiB | 60.0% → 77.8% | 1.5 MiB → 3.49 MiB |   3 → 7 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |
|     ~0% |      -24 B | 40.0% → 22.2% |          1,022 KiB |       2 | `<init>(Charset, byte[], int, int)`   | `java.lang.String` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |      Delta |              % |               Size | Samples | Caller                | Location                          |
| ------: | ---------: | -------------: | -----------------: | ------: | --------------------- | --------------------------------- |
| +699.6% | +3.491 MiB | 25.0% → 100.0% | 511 KiB → 3.99 MiB |   1 → 7 | `substring(int, int)` | `java.lang.String`                |
| removed | -1.497 MiB |   75.0% → 0.0% |      1.5 MiB → 0 B |   3 → 0 | `substring(int, int)` | `java.lang.AbstractStringBuilder` |

##### `addConstantMemberReference(int, String, String, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |        Delta |            % |          Size | Samples | Caller                                                  | Location                                     |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------- | -------------------------------------------- |
|    new |   +1.497 MiB | 0.0% → 75.1% | 0 B → 1.5 MiB |   0 → 2 | `addConstantMethodref(String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.SymbolTable` |
|    new | +509.164 KiB | 0.0% → 24.9% | 0 B → 509 KiB |   0 → 1 | `addConstantFieldref(String, String, String)`           | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |             % |                Size | Samples | Caller        | Location                  |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------- | ------------------------- |
| +36.1% | +1.803 MiB | 90.9% → 93.2% | 4.99 MiB → 6.79 MiB |  9 → 14 | `<init>()`    | `java.util.LinkedHashSet` |
|    ~0% |       +8 B |   9.1% → 6.8% |             511 KiB |       1 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `valueOf(int)` (`java.lang.Integer`)

| Change |          Delta |            % |            Size | Samples | Caller                                                                                 | Location                                               |
| -----: | -------------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|    new | +1,021.992 KiB | 0.0% → 66.7% | 0 B → 1,022 KiB |   0 → 2 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)` | `org.jetbrains.kotlin.KtSourceElementKt`               |
|    new |       +511 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `convertWithOffsets(FirQualifiedAccessExpression, Function2)`                          | `org.jetbrains.kotlin.fir.backend.utils.OffsetUtilsKt` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function`)

| Change |      Delta |             % |          Size | Samples | Caller                                                        | Location                                          |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.builder.FirTypeParameterBuilder`)

| Change |        Delta |            % |            Size | Samples | Caller                                                        | Location                                                                                    |
| -----: | -----------: | -----------: | --------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|    new |   +1,022 KiB | 0.0% → 66.7% | 0 B → 1,022 KiB |   0 → 1 | `createSyntheticFunctionInterface(ClassId, FunctionTypeKind)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirSyntheticFunctionInterfaceProviderBase` |
|    new | +510.984 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `convertTypeParameter(LighterASTNode, List, FirBasedSymbol)`  | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`            |

##### `merge(SymbolTable, Frame, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

| Change |      Delta |             % |          Size | Samples | Caller               | Location                                       |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------- | ---------------------------------------------- |
|    new | +1.496 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `computeAllFrames()` | `org.jetbrains.org.objectweb.asm.MethodWriter` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |      % |               Size | Samples | Caller          | Location                                     |
| ------: | ---------: | -----: | -----------------: | ------: | --------------- | -------------------------------------------- |
| +300.0% | +1.496 MiB | 100.0% | 511 KiB → 1.99 MiB |   1 → 3 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `readBootstrapMethodsAttribute(int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |             % |           Size | Samples | Caller                         | Location                                      |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------ | --------------------------------------------- |
|    new | +1.489 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 3 | `<init>(byte[], int, boolean)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output`)

|  Change |      Delta |      % |               Size | Samples | Caller        | Location                                               |
| ------: | ---------: | -----: | -----------------: | ------: | ------------- | ------------------------------------------------------ |
| +283.1% | +1.471 MiB | 100.0% | 532 KiB → 1.99 MiB |   2 → 5 | `newOutput()` | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |        Delta |             % |                Size | Samples | Caller                                            | Location                                                                |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------- |
| +300.0% |   +1.497 MiB | 10.2% → 33.3% |     511 KiB → 2 MiB |   1 → 4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                     |
| removed | -901.312 KiB |  18.1% → 0.0% |       901 KiB → 0 B |   2 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument`            |
|  -33.3% |     -511 KiB | 30.7% → 16.7% | 1.5 MiB → 1,022 KiB |   3 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                  |
|     new |     +511 KiB |   0.0% → 8.3% |       0 B → 511 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record` |
|  +50.0% | +510.984 KiB | 20.5% → 25.0% | 1,022 KiB → 1.5 MiB |   2 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

|  Change |          Delta |      % |              Size | Samples | Caller               | Location                               |
| ------: | -------------: | -----: | ----------------: | ------: | -------------------- | -------------------------------------- |
| +200.0% | +1,022.031 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `createSetBuilder()` | `kotlin.collections.SetsKt__SetsJVMKt` |

##### `sequencedKeySet()` (`java.util.LinkedHashMap`)

|  Change |      Delta |      % |              Size | Samples | Caller     | Location                  |
| ------: | ---------: | -----: | ----------------: | ------: | ---------- | ------------------------- |
| +200.0% | +1,022 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `keySet()` | `java.util.LinkedHashMap` |

##### `subList(int, int)` (`java.util.AbstractList`)

| Change |          Delta |             % |            Size | Samples | Caller                  | Location                                               |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------- | ------------------------------------------------------ |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `trimToSize(List, int)` | `org.jetbrains.kotlin.utils.addToStdlib.AddToStdlibKt` |

##### `singletonList(Object)` (`java.util.Collections`)

|  Change |          Delta |      % |              Size | Samples | Caller           | Location                                             |
| ------: | -------------: | -----: | ----------------: | ------: | ---------------- | ---------------------------------------------------- |
| +200.0% | +1,021.976 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `listOf(Object)` | `kotlin.collections.CollectionsKt__CollectionsJVMKt` |

##### `addConstantUtf8Reference(int, String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |      % |              Size | Samples | Caller                     | Location                                     |
| ------: | -------------: | -----: | ----------------: | ------: | -------------------------- | -------------------------------------------- |
| +200.0% | +1,021.945 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `addConstantClass(String)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `descriptorString()` (`java.lang.Class`)

| Change |        Delta |            % |          Size | Samples | Caller                             | Location                             |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------- | ------------------------------------ |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `unparseSig(Class, StringBuilder)` | `sun.invoke.util.BytecodeDescriptor` |
|    new | +510.937 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `unparse(Class)`                   | `sun.invoke.util.BytecodeDescriptor` |

##### `read(ByteBuffer)` (`java.nio.channels.Channels$ReadableByteChannelImpl`)

| Change |          Delta |             % |            Size | Samples | Caller             | Location                             |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------ | ------------------------------------ |
|    new | +1,013.914 KiB | 0.0% → 100.0% | 0 B → 1,014 KiB |   0 → 2 | `read(ByteBuffer)` | `jdk.internal.jrtfs.JrtFileSystem$1` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |          Delta |      % |               Size | Samples | Caller                           | Location           |
| ------: | -------------: | -----: | -----------------: | ------: | -------------------------------- | ------------------ |
| +195.5% | +1,011.765 KiB | 100.0% | 518 KiB → 1.49 MiB |   1 → 2 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

| Change |      Delta |             % |            Size | Samples | Caller                                                                                                                               | Location                                               |
| -----: | ---------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
|    new | +1,022 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `toIrType$default(Fir2IrTypeConverter, ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter` |

##### `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)` (`org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt`)

| Change |      Delta |             % |            Size | Samples | Caller                                                                                                     | Location                                                |
| -----: | ---------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|    new | +1,022 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `IrSimpleTypeImpl$default(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType, int, Object)` | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

| Change |        Delta |            % |          Size | Samples | Caller                       | Location                                                         |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------- | ---------------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `isLocalClassName(int)`      | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `getQualifiedClassName(int)` | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |

##### `getArgumentTypes(String)` (`org.jetbrains.org.objectweb.asm.Type`)

| Change |        Delta |            % |          Size | Samples | Caller                                               | Location                                                        |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------------- | --------------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `visitMethod(int, String, String, String, String[])` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`       |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `initLocals(Frame)`                                  | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `internalNameByClassId(ClassId)` (`org.jetbrains.kotlin.resolve.jvm.JvmClassName`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                                              | Location                                                  |
| -----: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `mapBuiltInType(TypeSystemCommonBackendContext, KotlinTypeMarker, JvmTypeFactory, TypeMappingMode)` | `org.jetbrains.kotlin.load.kotlin.TypeSignatureMappingKt` |

##### `processInlineFunFinallyBlocks(MethodNode, int, int, boolean)` (`org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner`)

| Change |          Delta |             % |            Size | Samples | Caller                                                         | Location                                            |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------- | --------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|  Change |          Delta |      % |              Size | Samples | Caller     | Location                                                  |
| ------: | -------------: | -----: | ----------------: | ------: | ---------- | --------------------------------------------------------- |
| +100.0% | +1,021.968 KiB | 100.0% | 1,022 KiB → 2 MiB |   2 → 4 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `create()` (`org.jetbrains.kotlin.utils.SmartSet$Companion`)

| Change |          Delta |             % |            Size | Samples | Caller                                | Location                                         |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------- | ------------------------------------------------ |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `contains(ConeKotlinType, Function1)` | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt` |

##### `visitInsn(int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |         Delta |             % |            Size | Samples | Caller           | Location                                        |
| -----: | ------------: | ------------: | --------------: | ------: | ---------------- | ----------------------------------------------- |
|    new | +1,021.96 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `visitInsn(int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$1`)

| Change |          Delta |             % |            Size | Samples | Caller                                                      | Location                                                                  |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
|    new | +1,021.953 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$1` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                                    | Location                                                   |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|    new | +1,021.953 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

|  Change |          Delta |      % |              Size | Samples | Caller                                                      | Location                                                  |
| ------: | -------------: | -----: | ----------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------- |
| +200.0% | +1,021.945 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1` |

##### `findMergeNodes(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer$Companion`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                          | Location                                                        |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|    new | +1,021.945 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

| Change |          Delta |      % |              Size | Samples | Caller     | Location                                 |
| -----: | -------------: | -----: | ----------------: | ------: | ---------- | ---------------------------------------- |
| +66.7% | +1,021.937 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Caller                                          | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | ----------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| -27.8% | -63.821 MiB | 88.2% → 85.0% |   229 MiB → 166 MiB | 83 → 92 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| -47.0% |  -3.988 MiB |   3.3% → 2.3% | 8.48 MiB → 4.49 MiB |  16 → 8 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| +11.0% |  +2.447 MiB |  8.6% → 12.7% | 22.3 MiB → 24.8 MiB |   3 → 8 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `iterator()` (`java.util.ArrayList`)

|  Change |          Delta |           % |              Size | Samples | Caller                                                                                                                                              | Location                                                            |
| ------: | -------------: | ----------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed |     -1.497 MiB | 8.0% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `isNullable(IrType)`                                                                                                                                | `org.jetbrains.kotlin.ir.util.IrTypeUtilsKt`                        |
| removed |     -1,022 KiB | 5.3% → 0.0% |   1,022 KiB → 0 B |   2 → 0 | `transformIfNeeded(List, IrTransformer, Object)`                                                                                                    | `org.jetbrains.kotlin.ir.util.TransformKt`                          |
| removed | -1,021.984 KiB | 5.3% → 0.0% |   1,022 KiB → 0 B |   1 → 0 | `acceptChildren(IrVisitor, Object)`                                                                                                                 | `org.jetbrains.kotlin.ir.expressions.IrRichFunctionReference`       |
|  -66.7% | -1,021.968 KiB | 8.0% → 5.4% | 1.5 MiB → 511 KiB |   3 → 1 | `getFunctionalClassKindWithArity(FqName, String)`                                                                                                   | `org.jetbrains.kotlin.builtins.functions.FunctionTypeKindExtractor` |
| removed |       -511 KiB | 2.7% → 0.0% |     511 KiB → 0 B |   1 → 0 | `loadContextParametersTo(List, List, FirBasedSymbol, MessageLite, AnnotationDeserializer$CallableKind, ProtoBuf$Class, FirDeclarationOrigin, List)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`    |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |        Delta |             % |                Size | Samples | Caller                            | Location                                                              |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------- | --------------------------------------------------------------------- |
| removed |   -2.994 MiB |  42.9% → 0.0% |      2.99 MiB → 0 B |   6 → 0 | `toArray()`                       | `java.util.ArrayList`                                                 |
|  -50.0% |   -1.495 MiB | 42.8% → 75.0% | 2.99 MiB → 1.49 MiB |   6 → 3 | `grow(int)`                       | `java.util.ArrayList`                                                 |
| removed | -510.984 KiB |   7.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `updateValueAtIndex(int, Object)` | `kotlinx.collections.immutable.implementations.immutableMap.TrieNode` |
|     new | +510.945 KiB |  0.0% → 25.0% |       0 B → 511 KiB |   0 → 1 | `ensureCapacity()`                | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`               |
| removed | -510.804 KiB |   7.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `copy()`                          | `org.jetbrains.kotlin.util.ArrayMapImpl`                              |

##### `grow(int)` (`java.util.ArrayList`)

| Change |     Delta |      % |                Size | Samples | Caller   | Location              |
| -----: | --------: | -----: | ------------------: | ------: | -------- | --------------------- |
| -54.5% | -4.55 MiB | 100.0% | 8.36 MiB → 3.81 MiB |  16 → 8 | `grow()` | `java.util.ArrayList` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |      Delta |      % |                Size | Samples | Caller        | Location                                   |
| -----: | ---------: | -----: | ------------------: | ------: | ------------- | ------------------------------------------ |
| -23.8% | -3.888 MiB | 100.0% | 16.4 MiB → 12.5 MiB | 33 → 25 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|  Change |          Delta |            % |                Size | Samples | Caller                               | Location                                                                    |
| ------: | -------------: | -----------: | ------------------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| removed | -1,021.992 KiB | 18.2% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`             |
| removed | -1,021.984 KiB | 18.2% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`       |
| +100.0% |   +511.007 KiB | 9.1% → 40.0% | 511 KiB → 1,022 KiB |   1 → 2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| removed |       -511 KiB |  9.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `getContextArguments()`              | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| removed |       -511 KiB |  9.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`                |

##### `getFqNameWhenAvailable(IrDeclarationWithName)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|  Change |          Delta |            % |            Size | Samples | Caller                                         | Location                                                         |
| ------: | -------------: | -----------: | --------------: | ------: | ---------------------------------------------- | ---------------------------------------------------------------- |
| removed | -1,021.937 KiB | 37.6% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `hasAnnotation(IrAnnotationContainer, FqName)` | `org.jetbrains.kotlin.ir.interpreter.UtilsKt`                    |
| removed |   -672.726 KiB | 24.8% → 0.0% |   673 KiB → 0 B |   2 → 0 | `toDescription(IrSimpleFunction)`              | `org.jetbrains.kotlin.backend.common.lower.SpecialBridgeMethods` |
| removed |       -511 KiB | 18.8% → 0.0% |   511 KiB → 0 B |   1 → 0 | `asInfoForMangling(IrType)`                    | `org.jetbrains.kotlin.backend.jvm.InlineClassAbi`                |
| removed |       -511 KiB | 18.8% → 0.0% |   511 KiB → 0 B |   1 → 0 | `getClassFqNameUnsafe(TypeConstructorMarker)`  | `org.jetbrains.kotlin.ir.types.IrTypeSystemContext`              |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |               Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | -----------------: | ------: | ----------------------------------------------- | ------------------- |
| -50.4% | -2.537 MiB | 100.0% | 5.03 MiB → 2.5 MiB |  11 → 5 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |          Delta |              % |                 Size | Samples | Caller                                | Location                                             |
| ------: | -------------: | -------------: | -------------------: | ------: | ------------------------------------- | ---------------------------------------------------- |
| removed | -1,021.992 KiB |   32.9% → 0.0% |      1,022 KiB → 0 B |   2 → 0 | `<init>(Collection)`                  | `java.util.ArrayList`                                |
|  -35.1% |   -551.664 KiB | 50.7% → 100.0% | 1.54 MiB → 1,022 KiB |   4 → 2 | `copyOf(Object[], int)`               | `java.util.Arrays`                                   |
| removed |       -511 KiB |   16.4% → 0.0% |        511 KiB → 0 B |   1 → 0 | `copyToArrayOfAny(Object[], boolean)` | `kotlin.collections.CollectionsKt__CollectionsJVMKt` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |               Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| -80.3% | -2.021 MiB | 100.0% | 2.52 MiB → 509 KiB |   6 → 1 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |        Delta |             % |                Size | Samples | Caller                                                                                    | Location                                                |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -66.3% |   -1.322 MiB | 57.1% → 40.3% |     2 MiB → 689 KiB |   4 → 2 | `getChildren(LighterASTNode, Ref)`                                                        | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
| -33.3% | -511.007 KiB | 42.9% → 59.7% | 1.5 MiB → 1,022 KiB |   3 → 2 | `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |     Delta |      % |               Size | Samples | Caller                                                      | Location                                        |
| -----: | --------: | -----: | -----------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| -35.5% | -1.59 MiB | 100.0% | 4.49 MiB → 2.9 MiB |   9 → 6 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `topLevel(FqName)` (`org.jetbrains.kotlin.name.ClassId$Companion`)

|  Change |          Delta |              % |              Size | Samples | Caller                                                       | Location                                                         |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------- |
|  -66.7% | -1,021.992 KiB | 75.0% → 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `topLevel(FqName)`                                           | `org.jetbrains.kotlin.name.ClassId`                              |
| removed |   -510.992 KiB |   25.0% → 0.0% |     511 KiB → 0 B |   1 → 0 | `processClassifiersFromImportsByName(Name, List, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractImportingScope` |

##### `sequencedEntrySet()` (`java.util.LinkedHashMap`)

|  Change |      Delta |             % |          Size | Samples | Caller       | Location                  |
| ------: | ---------: | ------------: | ------------: | ------: | ------------ | ------------------------- |
| removed | -1.497 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `entrySet()` | `java.util.LinkedHashMap` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change |      Delta |      % |             Size | Samples | Caller                          | Location                                                                                           |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| -42.9% | -1.497 MiB | 100.0% | 3.49 MiB → 2 MiB |   7 → 4 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|  Change |          Delta |              % |              Size | Samples | Caller                                                              | Location                                                                     |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -66.7% | -1,021.968 KiB | 75.0% → 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `newTypeCheckerState(boolean, boolean, boolean)`                    | `org.jetbrains.kotlin.types.model.TypeCheckerProviderContext`                |
| removed |   -510.968 KiB |   25.0% → 0.0% |     511 KiB → 0 B |   1 → 0 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                                                      | Location                                                          |
| ------: | -------------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed | -1,021.898 KiB | 66.7% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| removed |   -510.671 KiB | 33.3% → 0.0% |   511 KiB → 0 B |   1 → 0 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |     Delta |      % |                 Size | Samples | Caller                | Location           |
| -----: | --------: | -----: | -------------------: | ------: | --------------------- | ------------------ |
| -59.4% | -1.46 MiB | 100.0% | 2.46 MiB → 1,022 KiB |   5 → 2 | `replace(char, char)` | `java.lang.String` |

##### `stringFromByteBuffer(ByteBuffer, int)` (`jdk.internal.jimage.ImageStringsReader`)

| Change |      Delta |      % |                 Size | Samples | Caller           | Location                               |
| -----: | ---------: | -----: | -------------------: | ------: | ---------------- | -------------------------------------- |
| -53.7% | -1.155 MiB | 100.0% | 2.15 MiB → 1,022 KiB |   5 → 1 | `getString(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |        Delta |            % |          Size | Samples | Caller                                                                                                                   | Location                                                                              |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| removed | -574.687 KiB | 21.9% → 0.0% | 575 KiB → 0 B |   1 → 0 | `unparseMethod(Class, Class[])`                                                                                          | `sun.invoke.util.BytecodeDescriptor`                                                  |
| removed |     -511 KiB | 19.5% → 0.0% | 511 KiB → 0 B |   1 → 0 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`                                        |
|     new |     +511 KiB | 0.0% → 33.3% | 0 B → 511 KiB |   0 → 1 | `map$lambda$0$add(Map, String, String)`                                                                                  | `org.jetbrains.kotlin.metadata.jvm.deserialization.ClassMapperLite`                   |
| removed |     -511 KiB | 19.5% → 0.0% | 511 KiB → 0 B |   1 → 0 | `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)`                                    | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |
| removed |     -511 KiB | 19.5% → 0.0% | 511 KiB → 0 B |   1 → 0 | `descriptorString()`                                                                                                     | `java.lang.Class`                                                                     |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |        Delta |              % |               Size | Samples | Caller            | Location                                    |
| -----: | -----------: | -------------: | -----------------: | ------: | ----------------- | ------------------------------------------- |
| -50.0% |   -1.497 MiB | 100.0% → 75.0% | 2.99 MiB → 1.5 MiB |   6 → 3 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |
|    new | +510.898 KiB |   0.0% → 25.0% |      0 B → 511 KiB |   0 → 1 | `putByte(int)`    | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `listIterator(int)` (`kotlin.collections.builders.ListBuilder`)

|  Change |          Delta |             % |            Size | Samples | Caller       | Location                                  |
| ------: | -------------: | ------------: | --------------: | ------: | ------------ | ----------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `iterator()` | `kotlin.collections.builders.ListBuilder` |

##### `lazy(Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|  Change |          Delta |             % |            Size | Samples | Caller                                      | Location                                                  |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------- | --------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `buildLazyValueForMap(JavaAnnotationOwner)` | `org.jetbrains.kotlin.load.java.structure.JavaElementsKt` |

##### `in(Class)` (`java.lang.invoke.MethodHandles$Lookup`)

|  Change |         Delta |             % |            Size | Samples | Caller                                                        | Location                               |
| ------: | ------------: | ------------: | --------------: | ------: | ------------------------------------------------------------- | -------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `linkMethodHandleConstant(Class, int, Class, String, Object)` | `java.lang.invoke.MethodHandleNatives` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |              % |                Size | Samples | Caller                                     | Location                                     |
| ------: | ---------: | -------------: | ------------------: | ------: | ------------------------------------------ | -------------------------------------------- |
| removed | -1.497 MiB |   75.0% → 0.0% |       1.5 MiB → 0 B |   2 → 0 | `newInvokeSpecial(Object, Object)`         | `java.lang.invoke.DirectMethodHandle$Holder` |
| +100.0% |   +511 KiB | 25.0% → 100.0% | 511 KiB → 1,022 KiB |   1 → 2 | `newInvokeSpecial(Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>(TrieNode)` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator`)

|  Change |          Delta |             % |            Size | Samples | Caller       | Location                                                                           |
| ------: | -------------: | ------------: | --------------: | ------: | ------------ | ---------------------------------------------------------------------------------- |
| removed | -1,021.953 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `iterator()` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeys` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change |        Delta |              % |                 Size | Samples | Caller        | Location                                  |
| -----: | -----------: | -------------: | -------------------: | ------: | ------------- | ----------------------------------------- |
| -60.0% |   -1.496 MiB | 100.0% → 66.7% | 2.49 MiB → 1,022 KiB |   5 → 2 | `<init>(int)` | `kotlin.collections.builders.MapBuilder`  |
|    new | +510.992 KiB |   0.0% → 33.3% |        0 B → 511 KiB |   0 → 1 | `<init>(int)` | `kotlin.collections.builders.ListBuilder` |

##### `<init>()` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |         Delta |      % |                 Size | Samples | Caller                                                            | Location                                      |
| -----: | ------------: | -----: | -------------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| -99.7% | -1,019.32 KiB | 100.0% | 1,022 KiB → 2.61 KiB |   2 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |        Delta |            % |          Size | Samples | Caller                                  | Location                                                     |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------ |
| removed |   -644.5 KiB | 55.8% → 0.0% | 645 KiB → 0 B |   1 → 0 | `readCode(MethodVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader`                |
| removed | -510.992 KiB | 44.2% → 0.0% | 511 KiB → 0 B |   1 → 0 | `store(int, Type)`                      | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `substituteArguments(ConeSimpleKotlinType)` (`org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`)

|  Change |          Delta |             % |            Size | Samples | Caller                                | Location                                                                |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------- | ----------------------------------------------------------------------- |
| removed | -1,022.007 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `substituteRecursive(ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor` |

##### `identifier(String)` (`org.jetbrains.kotlin.name.Name`)

|  Change |        Delta |              % |          Size | Samples | Caller                                                              | Location                                                    |
| ------: | -----------: | -------------: | ------------: | ------: | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| removed |     -511 KiB |   25.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `visitMethod(int, String, String, String, String[])`                | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$4`   |
| removed | -510.992 KiB |   25.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `propertyNameFromAccessorMethodName(Name, String, boolean, String)` | `org.jetbrains.kotlin.load.java.PropertiesConventionUtilKt` |
|     ~0% |         -8 B | 50.0% → 100.0% |     1,022 KiB |       2 | `guessByFirstCharacter(String)`                                     | `org.jetbrains.kotlin.name.Name`                            |

##### `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change |      Delta |             % |            Size | Samples | Caller                                                                                                           | Location                                                 |
| ------: | ---------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| removed | -1,022 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `constructClassType$default(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes, int, Object)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt` |

##### `requestGroup(TowerGroup, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change |      Delta |      % |              Size | Samples | Caller                                                                               | Location                                                               |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -66.7% | -1,022 KiB | 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `getModifiers()` (`org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList`)

|  Change |    Delta |            % |          Size | Samples | Caller                                                                                | Location                                                                    |
| ------: | -------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed | -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `contains(KtModifierKeywordToken)`                                                    | `org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList`                |
| removed | -511 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `checkModifiers(CheckerContext, DiagnosticReporter, FirModifierList, FirDeclaration)` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirModifierChecker` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                      | Location                                                 |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1` |

##### `getLabelNode(Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |          Delta |             % |            Size | Samples | Caller                      | Location                                          |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------- | ------------------------------------------------- |
| removed | -1,021.976 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `visitJumpInsn(int, Label)` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

##### `<init>(KtSourceElement)` (`org.jetbrains.kotlin.fir.types.impl.FirTypeArgumentListImpl`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                      | Location                                                                         |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `convertUserType(KtSourceElement, LighterASTNode, boolean)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|  Change |         Delta |             % |            Size | Samples | Caller                                                                         | Location                                              |
| ------: | ------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |         Delta |             % |            Size | Samples | Caller                        | Location                                        |
| ------: | ------------: | ------------: | --------------: | ------: | ----------------------------- | ----------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `visitLineNumber(int, Label)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|    Change |       Delta |             % |                Size |   Samples | Function                                                                                           | Location                                                |
| --------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|   +433.0% | +70.909 MiB |  2.4% → 12.8% | 16.4 MiB → 87.3 MiB |   33 → 53 | `copyOfRange(byte[], int, int)`                                                                    | `java.util.Arrays`                                      |
|   +152.7% | +70.343 MiB |  6.7% → 17.0% |  46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`                                                                                      | `java.io.ByteArrayOutputStream`                         |
|   +517.7% |  +69.39 MiB |  2.0% → 12.1% | 13.4 MiB → 82.8 MiB |   27 → 44 | `copyOfRangeByte(byte[], int, int)`                                                                | `java.util.Arrays`                                      |
|   +901.0% | +67.042 MiB |  1.1% → 10.9% | 7.44 MiB → 74.5 MiB |   15 → 26 | `newString(byte[], int, int)`                                                                      | `java.lang.StringLatin1`                                |
|  +1119.5% | +66.543 MiB |  0.9% → 10.6% | 5.94 MiB → 72.5 MiB |   12 → 22 | `substring(int, int)`                                                                              | `java.lang.String`                                      |
|    +46.8% | +61.821 MiB | 19.3% → 28.4% |   132 MiB → 194 MiB | 271 → 273 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|    +46.4% | +61.818 MiB | 19.5% → 28.5% |   133 MiB → 195 MiB | 273 → 275 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +30429.6% | +61.315 MiB |  <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                              | `sun.reflect.annotation.AnnotationParser`               |
| +30429.6% | +61.315 MiB |  <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                          | `sun.reflect.annotation.AnnotationParser`               |
| +30429.6% | +61.315 MiB |  <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations(byte[], ConstantPool, Class)`                                                    | `sun.reflect.annotation.AnnotationParser`               |
|    +44.1% | +61.127 MiB | 20.3% → 29.2% |   139 MiB → 200 MiB | 285 → 284 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `getAbstractTypeFromDescriptor(SymbolTable, String, int)`                                          | `jdk.internal.org.objectweb.asm.Frame`                  |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `setInputFrameFromDescriptor(SymbolTable, int, String, int)`                                       | `jdk.internal.org.objectweb.asm.Frame`                  |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `computeAllFrames()`                                                                               | `jdk.internal.org.objectweb.asm.MethodWriter`           |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `visitMaxs(int, int)`                                                                              | `jdk.internal.org.objectweb.asm.MethodWriter`           |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `generateConstructor()`                                                                            | `java.lang.reflect.ProxyGenerator`                      |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `run()`                                                                                            | `sun.reflect.annotation.AnnotationParser$1`             |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `doPrivileged(PrivilegedAction)`                                                                   | `java.security.AccessController`                        |
|       new | +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `annotationForMap(Class, Map)`                                                                     | `sun.reflect.annotation.AnnotationParser`               |
| +30181.6% | +60.815 MiB |  <0.1% → 8.9% |    206 KiB → 61 MiB |         1 | `declaredAnnotations()`                                                                            | `java.lang.reflect.Field`                               |

##### Standard library

|    Change |       Delta |            % |                Size |   Samples | Function                                                              | Location                                      |
| --------: | ----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------- | --------------------------------------------- |
|   +433.0% | +70.909 MiB | 2.4% → 12.8% | 16.4 MiB → 87.3 MiB |   33 → 53 | `copyOfRange(byte[], int, int)`                                       | `java.util.Arrays`                            |
|   +152.7% | +70.343 MiB | 6.7% → 17.0% |  46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`                                                         | `java.io.ByteArrayOutputStream`               |
|   +517.7% |  +69.39 MiB | 2.0% → 12.1% | 13.4 MiB → 82.8 MiB |   27 → 44 | `copyOfRangeByte(byte[], int, int)`                                   | `java.util.Arrays`                            |
|   +901.0% | +67.042 MiB | 1.1% → 10.9% | 7.44 MiB → 74.5 MiB |   15 → 26 | `newString(byte[], int, int)`                                         | `java.lang.StringLatin1`                      |
|  +1119.5% | +66.543 MiB | 0.9% → 10.6% | 5.94 MiB → 72.5 MiB |   12 → 22 | `substring(int, int)`                                                 | `java.lang.String`                            |
| +30429.6% | +61.315 MiB | <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser`     |
| +30429.6% | +61.315 MiB | <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`             | `sun.reflect.annotation.AnnotationParser`     |
| +30429.6% | +61.315 MiB | <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations(byte[], ConstantPool, Class)`                       | `sun.reflect.annotation.AnnotationParser`     |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `getAbstractTypeFromDescriptor(SymbolTable, String, int)`             | `jdk.internal.org.objectweb.asm.Frame`        |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `setInputFrameFromDescriptor(SymbolTable, int, String, int)`          | `jdk.internal.org.objectweb.asm.Frame`        |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `computeAllFrames()`                                                  | `jdk.internal.org.objectweb.asm.MethodWriter` |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `visitMaxs(int, int)`                                                 | `jdk.internal.org.objectweb.asm.MethodWriter` |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `generateConstructor()`                                               | `java.lang.reflect.ProxyGenerator`            |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `run()`                                                               | `sun.reflect.annotation.AnnotationParser$1`   |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `doPrivileged(PrivilegedAction)`                                      | `java.security.AccessController`              |
|       new | +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `annotationForMap(Class, Map)`                                        | `sun.reflect.annotation.AnnotationParser`     |
| +30181.6% | +60.815 MiB | <0.1% → 8.9% |    206 KiB → 61 MiB |         1 | `declaredAnnotations()`                                               | `java.lang.reflect.Field`                     |
| +30181.6% | +60.815 MiB | <0.1% → 8.9% |    206 KiB → 61 MiB |         1 | `getAnnotation(Class)`                                                | `java.lang.reflect.Field`                     |
| +12690.8% |  +60.54 MiB |  0.1% → 8.9% |    488 KiB → 61 MiB |         1 | `generateClassFile()`                                                 | `java.lang.reflect.ProxyGenerator`            |
| +12690.8% |  +60.54 MiB |  0.1% → 8.9% |    488 KiB → 61 MiB |         1 | `generateProxyClass(ClassLoader, String, List, int)`                  | `java.lang.reflect.ProxyGenerator`            |

##### Ours

|   Change |       Delta |             % |                Size |   Samples | Function                                                                                                                                                 | Location                                                                     |
| -------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|   +46.8% | +61.821 MiB | 19.3% → 28.4% |   132 MiB → 194 MiB | 271 → 273 | `doMain(CLICompiler, String[])`                                                                                                                          | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                      |
|   +46.4% | +61.818 MiB | 19.5% → 28.5% |   133 MiB → 195 MiB | 273 → 275 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                                       | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                      |
|   +44.1% | +61.127 MiB | 20.3% → 29.2% |   139 MiB → 200 MiB | 285 → 284 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                                |
|   +44.6% | +60.711 MiB | 19.9% → 28.8% |   136 MiB → 197 MiB |       279 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                      |
| +5189.6% | +60.351 MiB |   0.2% → 9.0% | 1.16 MiB → 61.5 MiB |     3 → 2 | `getArgumentsInfo(Class)`                                                                                                                                | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`      |
| +3585.0% | +60.331 MiB |   0.2% → 9.1% |   1.68 MiB → 62 MiB |         4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`                                                                        | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`      |
| +3585.0% | +60.331 MiB |   0.2% → 9.1% |   1.68 MiB → 62 MiB |         4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                                                                                          | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`      |
| +3585.0% | +60.331 MiB |   0.2% → 9.1% |   1.68 MiB → 62 MiB |         4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)`                                                                     | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`      |
|   +43.8% | +60.129 MiB | 20.1% → 28.9% |   137 MiB → 197 MiB | 282 → 280 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                                |
|    +2.3% | +10.682 MiB | 68.8% → 70.4% |   471 MiB → 482 MiB | 436 → 453 | `main(String[])`                                                                                                                                         | `org.jetbrains.kotlin.preloading.Preloader`                                  |
|    +1.8% |  +8.646 MiB | 69.5% → 70.8% |   475 MiB → 484 MiB | 446 → 458 | `run(String[])`                                                                                                                                          | `org.jetbrains.kotlin.preloading.Preloader`                                  |
|  +210.7% |  +6.996 MiB |   0.5% → 1.5% | 3.32 MiB → 10.3 MiB |    7 → 21 | `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                      | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`     |
|  +180.7% |  +5.998 MiB |   0.5% → 1.4% | 3.32 MiB → 9.32 MiB |    7 → 19 | `checkApplicabilityForArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, ConstraintPosition)`                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`    |
|  +180.7% |  +5.998 MiB |   0.5% → 1.4% | 3.32 MiB → 9.32 MiB |    7 → 19 | `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                        | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |
|  +180.7% |  +5.998 MiB |   0.5% → 1.4% | 3.32 MiB → 9.32 MiB |    7 → 19 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                                                                           | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
|  +212.6% |  +5.998 MiB |   0.4% → 1.3% | 2.82 MiB → 8.82 MiB |    6 → 18 | `resolvePlainExpressionArgument(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, boolean)`                                                 | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`    |
|  +212.6% |  +5.998 MiB |   0.4% → 1.3% | 2.82 MiB → 8.82 MiB |    6 → 18 | `resolvePlainExpressionArgument$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, boolean, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`    |
|    +2.0% |   +5.86 MiB | 42.2% → 43.1% |   289 MiB → 295 MiB |       237 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                       |
|    +2.0% |   +5.86 MiB | 42.2% → 43.1% |   289 MiB → 295 MiB |       237 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                       |
|  +114.2% |  +5.499 MiB |   0.7% → 1.5% | 4.82 MiB → 10.3 MiB |   10 → 21 | `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)`                             | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`     |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |               Size |   Samples | Function                                               | Location                                                 |
| ------: | ----------: | ------------: | -----------------: | --------: | ------------------------------------------------------ | -------------------------------------------------------- |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `getLoader(int)`                                       | `jdk.internal.loader.URLClassPath`                       |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String, boolean)`                        | `jdk.internal.loader.URLClassPath`                       |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `run()`                                                | `java.net.URLClassLoader$2`                              |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)` | `java.security.AccessController`                         |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String)`                                 | `java.net.URLClassLoader`                                |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `<init>()`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler`            |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `<init>()`                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`             |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                               | `java.util.zip.ZipFile$Source`                           |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`        | `java.util.zip.ZipFile$Source`                           |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `get(File, boolean, ZipCoder)`                         | `java.util.zip.ZipFile$Source`                           |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                 | `java.util.zip.ZipFile$CleanableResource`                |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int, Charset)`                           | `java.util.zip.ZipFile`                                  |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int)`                                    | `java.util.zip.ZipFile`                                  |
|  -24.4% | -65.362 MiB | 39.2% → 29.7% |  268 MiB → 203 MiB | 128 → 134 | `copyOf(byte[], int)`                                  | `java.util.Arrays`                                       |
|  -99.2% | -65.056 MiB |   9.6% → 0.1% | 65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                  | `java.lang.ClassLoader`                                  |
|  -99.2% | -65.056 MiB |   9.6% → 0.1% | 65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `<init>(File, boolean, int, Runtime$Version)`          | `java.util.jar.JarFile`                                  |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `getJarFile(URL)`                                      | `jdk.internal.loader.URLClassPath$JarLoader`             |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `run()`                                                | `jdk.internal.loader.URLClassPath$JarLoader$1`           |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `ensureOpen()`                                         | `jdk.internal.loader.URLClassPath$JarLoader`             |

##### Standard library

|  Change |       Delta |             % |               Size |   Samples | Function                                                       | Location                                       |
| ------: | ----------: | ------------: | -----------------: | --------: | -------------------------------------------------------------- | ---------------------------------------------- |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `getLoader(int)`                                               | `jdk.internal.loader.URLClassPath`             |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String, boolean)`                                | `jdk.internal.loader.URLClassPath`             |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `run()`                                                        | `java.net.URLClassLoader$2`                    |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)`         | `java.security.AccessController`               |
| removed | -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String)`                                         | `java.net.URLClassLoader`                      |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                 |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                | `java.util.zip.ZipFile$Source`                 |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `get(File, boolean, ZipCoder)`                                 | `java.util.zip.ZipFile$Source`                 |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                         | `java.util.zip.ZipFile$CleanableResource`      |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int, Charset)`                                   | `java.util.zip.ZipFile`                        |
| removed | -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int)`                                            | `java.util.zip.ZipFile`                        |
|  -24.4% | -65.362 MiB | 39.2% → 29.7% |  268 MiB → 203 MiB | 128 → 134 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                             |
|  -99.2% | -65.056 MiB |   9.6% → 0.1% | 65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                          | `java.lang.ClassLoader`                        |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `<init>(File, boolean, int, Runtime$Version)`                  | `java.util.jar.JarFile`                        |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `getJarFile(URL)`                                              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `run()`                                                        | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `ensureOpen()`                                                 | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`           |
| removed | -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `getLoader(URL)`                                               | `jdk.internal.loader.URLClassPath`             |

##### Ours

|  Change |       Delta |             % |                Size |   Samples | Function                                                                                              | Location                                                                                                                  |
| ------: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| removed | -65.555 MiB |   9.6% → 0.0% |      65.6 MiB → 0 B |     3 → 0 | `<init>()`                                                                                            | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
| removed | -65.555 MiB |   9.6% → 0.0% |      65.6 MiB → 0 B |     3 → 0 | `<init>()`                                                                                            | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|  -99.2% | -65.056 MiB |   9.6% → 0.1% |  65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                                                                 | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                                  |
|  -29.2% | -10.287 MiB |   5.2% → 3.7% |   35.3 MiB → 25 MiB |   72 → 52 | `transformChildren(FirTransformer, Object)`                                                           | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
|  -26.2% |  -10.27 MiB |   5.7% → 4.2% |   39.2 MiB → 29 MiB |   79 → 59 | `transformDeclarations(FirTransformer, Object)`                                                       | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
|  -25.1% |  -9.706 MiB |   5.7% → 4.2% |   38.7 MiB → 29 MiB |   76 → 59 | `transform(FirTransformer, Object)`                                                                   | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                                  |
|  -28.3% |  -8.265 MiB |   4.3% → 3.1% | 29.2 MiB → 20.9 MiB |   59 → 43 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -27.9% |  -7.513 MiB |   3.9% → 2.8% | 26.9 MiB → 19.4 MiB |   54 → 40 | `transformDeclarationContent(FirDeclaration, ResolutionMode)`                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|   -8.8% |  -7.316 MiB | 12.1% → 11.0% | 82.9 MiB → 75.5 MiB | 163 → 152 | `transformInplace(List, FirTransformer, Object)`                                                      | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                  |
|  -28.3% |  -7.268 MiB |   3.8% → 2.7% | 25.7 MiB → 18.4 MiB |   51 → 38 | `access$transformFunctionWithGivenSignature(FirDeclarationsResolveTransformer, FirFunction, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -28.3% |  -7.268 MiB |   3.8% → 2.7% | 25.7 MiB → 18.4 MiB |   51 → 38 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`   | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -11.9% |  -6.774 MiB |   8.3% → 7.3% | 56.9 MiB → 50.1 MiB | 113 → 101 | `transformElement(FirElement, ResolutionMode)`                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -26.3% |  -6.769 MiB |   3.8% → 2.8% | 25.7 MiB → 18.9 MiB |   51 → 39 | `transformFunctionWithGivenSignature(FirFunction, boolean)`                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -21.7% |  -6.769 MiB |   4.6% → 3.6% | 31.2 MiB → 24.4 MiB |   63 → 50 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -21.7% |  -6.769 MiB |   4.6% → 3.6% | 31.2 MiB → 24.4 MiB |   63 → 50 | `transformNamedFunction(FirNamedFunction, Object)`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|   -4.3% |  -6.568 MiB | 22.2% → 21.3% |   152 MiB → 145 MiB | 306 → 295 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                  | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                                                                      |
|  -25.9% |   -6.27 MiB |   3.5% → 2.6% | 24.2 MiB → 17.9 MiB |   48 → 37 | `invoke()`                                                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078016da2e8` |
|  -19.8% |   -6.27 MiB |   4.6% → 3.7% | 31.7 MiB → 25.4 MiB |   63 → 52 | `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)`                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                           |
|   -3.8% |  -5.849 MiB | 22.4% → 21.6% |   154 MiB → 148 MiB | 309 → 300 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                            | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                               |
|  -22.2% |  -5.272 MiB |   3.5% → 2.7% | 23.7 MiB → 18.4 MiB |   48 → 38 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |       Delta |             % |                Size | Samples | Callee                              | Location           |
| ------: | ----------: | ------------: | ------------------: | ------: | ----------------------------------- | ------------------ |
| +517.7% |  +69.39 MiB | 81.8% → 94.9% | 13.4 MiB → 82.8 MiB | 27 → 44 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |
| removed | -488.71 KiB |   2.9% → 0.0% |       489 KiB → 0 B |   1 → 0 | `clone()`                           | `java.lang.Object` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|   Change |       Delta |             % |                Size | Samples | Callee                          | Location           |
| -------: | ----------: | ------------: | ------------------: | ------: | ------------------------------- | ------------------ |
| +1194.6% | +65.048 MiB | 73.2% → 94.6% | 5.45 MiB → 70.5 MiB | 11 → 19 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `substring(int, int)` (`java.lang.String`)

|   Change |       Delta |      % |                Size | Samples | Callee                        | Location                 |
| -------: | ----------: | -----: | ------------------: | ------: | ----------------------------- | ------------------------ |
| +1119.5% | +66.543 MiB | 100.0% | 5.94 MiB → 72.5 MiB | 12 → 22 | `newString(byte[], int, int)` | `java.lang.StringLatin1` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                                             | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +46.8% | +61.821 MiB | 100.0% | 132 MiB → 194 MiB | 271 → 273 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                 | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +46.4% | +61.818 MiB | 100.0% | 133 MiB → 195 MiB | 273 → 275 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` (`sun.reflect.annotation.AnnotationParser`)

|  Change |        Delta |             % |              Size | Samples | Callee                                                     | Location                                  |
| ------: | -----------: | ------------: | ----------------: | ------: | ---------------------------------------------------------- | ----------------------------------------- |
|     new |  +61.017 MiB |  0.0% → 99.2% |      0 B → 61 MiB |   0 → 1 | `annotationForMap(Class, Map)`                             | `sun.reflect.annotation.AnnotationParser` |
| +148.0% | +305.476 KiB | 100.0% → 0.8% | 206 KiB → 512 KiB |   1 → 2 | `parseMemberValue(Class, ByteBuffer, ConstantPool, Class)` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations2(byte[], ConstantPool, Class, Class[])` (`sun.reflect.annotation.AnnotationParser`)

|    Change |       Delta |      % |               Size | Samples | Callee                                                                | Location                                  |
| --------: | ----------: | -----: | -----------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------- |
| +30429.6% | +61.315 MiB | 100.0% | 206 KiB → 61.5 MiB |   1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `parseAnnotations(byte[], ConstantPool, Class)` (`sun.reflect.annotation.AnnotationParser`)

|    Change |       Delta |      % |               Size | Samples | Callee                                                    | Location                                  |
| --------: | ----------: | -----: | -----------------: | ------: | --------------------------------------------------------- | ----------------------------------------- |
| +30429.6% | +61.315 MiB | 100.0% | 206 KiB → 61.5 MiB |   1 → 3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|   Change |        Delta |             % |              Size | Samples | Callee                                                                               | Location                                                                |
| -------: | -----------: | ------------: | ----------------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| +3585.0% |  +60.331 MiB |  1.2% → 31.0% | 1.68 MiB → 62 MiB |       4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|    +0.9% |   +1.224 MiB | 98.5% → 69.0% | 137 MiB → 138 MiB |     280 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|  removed | -439.093 KiB |   0.3% → 0.0% |     439 KiB → 0 B |   1 → 0 | `createArguments()`                                                                  | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                            |

##### `getAbstractTypeFromDescriptor(SymbolTable, String, int)` (`jdk.internal.org.objectweb.asm.Frame`)

| Change |       Delta |             % |         Size | Samples | Callee                | Location           |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------- | ------------------ |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `substring(int, int)` | `java.lang.String` |

##### `setInputFrameFromDescriptor(SymbolTable, int, String, int)` (`jdk.internal.org.objectweb.asm.Frame`)

| Change |       Delta |             % |         Size | Samples | Callee                                                    | Location                               |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------------------------------------------- | -------------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `getAbstractTypeFromDescriptor(SymbolTable, String, int)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `computeAllFrames()` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change |       Delta |             % |         Size | Samples | Callee                                                       | Location                               |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------------ | -------------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `setInputFrameFromDescriptor(SymbolTable, int, String, int)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `visitMaxs(int, int)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change |       Delta |             % |         Size | Samples | Callee               | Location                                      |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------- | --------------------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `computeAllFrames()` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `generateConstructor()` (`java.lang.reflect.ProxyGenerator`)

| Change |       Delta |             % |         Size | Samples | Callee                | Location                                      |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------- | --------------------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `visitMaxs(int, int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `run()` (`sun.reflect.annotation.AnnotationParser$1`)

| Change |       Delta |             % |         Size | Samples | Callee                                                      | Location                                    |
| -----: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------------------- | ------------------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `newProxyInstance(ClassLoader, Class[], InvocationHandler)` | `java.lang.reflect.Proxy`                   |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `run()`                                                     | `sun.reflect.annotation.AnnotationParser$1` |

##### `doPrivileged(PrivilegedAction)` (`java.security.AccessController`)

| Change |       Delta |             % |         Size | Samples | Callee                                                             | Location                         |
| -----: | ----------: | ------------: | -----------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `annotationForMap(Class, Map)` (`sun.reflect.annotation.AnnotationParser`)

| Change |       Delta |             % |         Size | Samples | Callee                           | Location                         |
| -----: | ----------: | ------------: | -----------: | ------: | -------------------------------- | -------------------------------- |
|    new | +61.017 MiB | 0.0% → 100.0% | 0 B → 61 MiB |   0 → 1 | `doPrivileged(PrivilegedAction)` | `java.security.AccessController` |

##### `declaredAnnotations()` (`java.lang.reflect.Field`)

|    Change |       Delta |      % |             Size | Samples | Callee                                          | Location                                  |
| --------: | ----------: | -----: | ---------------: | ------: | ----------------------------------------------- | ----------------------------------------- |
| +30181.6% | +60.815 MiB | 100.0% | 206 KiB → 61 MiB |       1 | `parseAnnotations(byte[], ConstantPool, Class)` | `sun.reflect.annotation.AnnotationParser` |
| +30181.6% | +60.815 MiB | 100.0% | 206 KiB → 61 MiB |       1 | `declaredAnnotations()`                         | `java.lang.reflect.Field`                 |

##### `getAnnotation(Class)` (`java.lang.reflect.Field`)

|    Change |       Delta |      % |             Size | Samples | Callee                  | Location                  |
| --------: | ----------: | -----: | ---------------: | ------: | ----------------------- | ------------------------- |
| +30181.6% | +60.815 MiB | 100.0% | 206 KiB → 61 MiB |       1 | `declaredAnnotations()` | `java.lang.reflect.Field` |

##### `generateClassFile()` (`java.lang.reflect.ProxyGenerator`)

|  Change |        Delta |             % |          Size | Samples | Callee                        | Location                           |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------- | ---------------------------------- |
|     new |  +61.017 MiB | 0.0% → 100.0% |  0 B → 61 MiB |   0 → 1 | `generateConstructor()`       | `java.lang.reflect.ProxyGenerator` |
| removed | -488.492 KiB | 100.0% → 0.0% | 488 KiB → 0 B |   1 → 0 | `generateStaticInitializer()` | `java.lang.reflect.ProxyGenerator` |

##### `generateProxyClass(ClassLoader, String, List, int)` (`java.lang.reflect.ProxyGenerator`)

|    Change |      Delta |      % |             Size | Samples | Callee                | Location                           |
| --------: | ---------: | -----: | ---------------: | ------: | --------------------- | ---------------------------------- |
| +12690.8% | +60.54 MiB | 100.0% | 488 KiB → 61 MiB |       1 | `generateClassFile()` | `java.lang.reflect.ProxyGenerator` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size | Samples | Callee                                         | Location                                      |
| -----: | ----------: | -----: | ----------------: | ------: | ---------------------------------------------- | --------------------------------------------- |
| +44.6% | +60.711 MiB | 100.0% | 136 MiB → 197 MiB |     279 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `getArgumentsInfo(Class)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|    Change |        Delta |              % |              Size | Samples | Callee                        | Location                                                                |
| --------: | -----------: | -------------: | ----------------: | ------: | ----------------------------- | ----------------------------------------------------------------------- |
| +30181.6% |  +60.815 MiB |  17.3% → 99.2% |  206 KiB → 61 MiB |       1 | `getAnnotation(Class)`        | `java.lang.reflect.Field`                                               |
|  +5146.9% |  +59.854 MiB | 100.0% → 99.2% | 1.16 MiB → 61 MiB |   3 → 1 | `getArgumentsInfo(Class)`     | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   removed | -488.523 KiB |   41.0% → 0.0% |     489 KiB → 0 B |   1 → 0 | `getAnnotationsByType(Class)` | `java.lang.reflect.Field`                                               |
|     +2.7% |  +13.226 KiB |   41.6% → 0.8% | 496 KiB → 509 KiB |       1 | `getMethod(String, Class[])`  | `java.lang.Class`                                                       |

##### `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |        Delta |             % |                Size | Samples | Callee                                                           | Location                                                                |
| -------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +5189.6% |  +60.351 MiB | 69.1% → 99.2% | 1.16 MiB → 61.5 MiB |   3 → 2 | `getArgumentsInfo(Class)`                                        | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  removed | -532.453 KiB |  30.9% → 0.0% |       532 KiB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                  |
|      new |  +511.71 KiB |   0.0% → 0.8% |       0 B → 512 KiB |   0 → 2 | `invoke(Object, Object[])`                                       | `java.lang.reflect.Method`                                              |

##### `parseCommandLineArguments(List, CommonToolArguments, boolean)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |      % |              Size | Samples | Callee                                                                            | Location                                                                |
| -------: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +3585.0% | +60.331 MiB | 100.0% | 1.68 MiB → 62 MiB |       4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |      % |              Size | Samples | Callee                                                          | Location                                                                |
| -------: | ----------: | -----: | ----------------: | ------: | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +3585.0% | +60.331 MiB | 100.0% | 1.68 MiB → 62 MiB |       4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                   | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| +43.8% | +60.129 MiB | 100.0% | 137 MiB → 197 MiB | 282 → 280 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |      % |              Size |   Samples | Callee          | Location                                    |
| -----: | ----------: | -----: | ----------------: | --------: | --------------- | ------------------------------------------- |
|  +2.3% | +10.682 MiB | 100.0% | 471 MiB → 482 MiB | 436 → 453 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |      Delta |             % |              Size |   Samples | Callee                                                                       | Location                                               |
| -----: | ---------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +2.0% |  +5.86 MiB | 60.7% → 60.8% | 289 MiB → 295 MiB |       237 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  +1.7% | +2.786 MiB | 34.8% → 34.7% | 165 MiB → 168 MiB | 208 → 220 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

|  Change |      Delta |      % |                Size | Samples | Callee                                                                                                                       | Location                                                                 |
| ------: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +210.7% | +6.996 MiB | 100.0% | 3.32 MiB → 10.3 MiB |  7 → 21 | `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)` | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |

##### `checkApplicabilityForArgumentType(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, ConstraintPosition)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change |      Delta |              % |                Size | Samples | Callee                                                                                                              | Location                                                                 |
| ------: | ---------: | -------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| +135.6% | +4.501 MiB | 100.0% → 83.9% | 3.32 MiB → 7.82 MiB |  7 → 16 | `addSubtypeConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt` |
|     new | +1.497 MiB |   0.0% → 16.1% |       0 B → 1.5 MiB |   0 → 3 | `captureFromTypeParameterUpperBoundIfNeeded(ConeKotlinType, ConeKotlinType, FirSession)`                            | `org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt`                 |

##### `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change |  Delta |              % |                Size | Samples | Callee                                                                                                                                                                                      | Location                                                                     |
| ------: | -----: | -------------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +150.6% | +5 MiB | 100.0% → 89.3% | 3.32 MiB → 8.32 MiB |  7 → 17 | `access$addSubTypeConstraintAndIncorporateIt(ConstraintInjector, ConstraintInjector$Context, ConstraintInjector$TypeCheckerStateForConstraintInjector, KotlinTypeMarker, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change |      Delta |      % |                Size | Samples | Callee                                                                                                            | Location                                                                     |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +180.7% | +5.998 MiB | 100.0% | 3.32 MiB → 9.32 MiB |  7 → 19 | `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |

##### `resolvePlainExpressionArgument(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, boolean)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change |      Delta |      % |                Size | Samples | Callee                                                                                                                                                                              | Location                                                                  |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +212.6% | +5.998 MiB | 100.0% | 2.82 MiB → 8.82 MiB |  6 → 18 | `resolvePlainArgumentType$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, ConeKotlinType, boolean, KtSourceElement, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `resolvePlainExpressionArgument$default(ArgumentCheckingProcessor, ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, boolean, int, Object)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor`)

|  Change |      Delta |      % |                Size | Samples | Callee                                                                                                   | Location                                                                  |
| ------: | ---------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +212.6% | +5.998 MiB | 100.0% | 2.82 MiB → 8.82 MiB |  6 → 18 | `resolvePlainExpressionArgument(ArgumentCheckingProcessor$ArgumentContext, ConeResolutionAtom, boolean)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ArgumentCheckingProcessor` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |       Delta |             % |               Size |   Samples | Callee                | Location                        |
| ------: | ----------: | ------------: | -----------------: | --------: | --------------------- | ------------------------------- |
| +152.7% | +70.343 MiB | 16.0% → 39.5% | 46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
|  -26.9% | -63.821 MiB | 82.3% → 59.0% |  238 MiB → 174 MiB | 109 → 118 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|   +2.4% | +87.218 KiB |   1.2% → 1.3% | 3.6 MiB → 3.68 MiB |     8 → 9 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
|   -0.5% |  -3.546 KiB |          0.3% |  785 KiB → 781 KiB |     3 → 2 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |     Delta |      % |              Size | Samples | Callee                                                  | Location                                               |
| -----: | --------: | -----: | ----------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
|  +2.0% | +5.86 MiB | 100.0% | 289 MiB → 295 MiB |     237 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `addConstraintIfCompatible(ConstraintSystemBuilder, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition, ConstraintKind)` (`org.jetbrains.kotlin.resolve.calls.inference.ConstraintSystemBuilderKt`)

|  Change |          Delta |             % |                Size | Samples | Callee                                                                          | Location                                                                                      |
| ------: | -------------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| +180.7% |     +5.998 MiB | 68.9% → 90.3% | 3.32 MiB → 9.32 MiB |  7 → 19 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`  | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                  |
|     new | +1,021.992 KiB |   0.0% → 9.7% |     0 B → 1,022 KiB |   0 → 2 | `closeTransaction()`                                                            | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl$TransactionState` |
| removed | -1,021.945 KiB |  20.7% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `addEqualityConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                  |
| removed |   -510.992 KiB |  10.4% → 0.0% |       511 KiB → 0 B |   1 → 0 | `prepareTransaction()`                                                          | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                  |

##### `getLoader(int)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |            % |           Size | Samples | Callee                 | Location                                     |
| ------: | ----------: | -----------: | -------------: | ------: | ---------------------- | -------------------------------------------- |
| removed | -65.041 MiB | 99.2% → 0.0% |   65 MiB → 0 B |   1 → 0 | `getLoader(URL)`       | `jdk.internal.loader.URLClassPath`           |
| removed | -488.71 KiB |  0.7% → 0.0% |  489 KiB → 0 B |   1 → 0 | `urlNoFragString(URL)` | `sun.net.util.URLUtil`                       |
| removed | -38.429 KiB |  0.1% → 0.0% | 38.4 KiB → 0 B |   1 → 0 | `getClassPath()`       | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `findResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee           | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------- |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `run()` (`java.net.URLClassLoader$2`)

|  Change |       Delta |             % |           Size | Samples | Callee                          | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------- | ---------------------------------- |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `findResource(String, boolean)` | `jdk.internal.loader.URLClassPath` |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `run()`                         | `java.net.URLClassLoader$2`        |

##### `doPrivileged(PrivilegedAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                             | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findResource(String)` (`java.net.URLClassLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                 | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------ | -------------------------------- |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |       Delta |             % |           Size | Samples | Callee                | Location                                                 |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------- | -------------------------------------------------------- |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `getResource(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|  Change |       Delta |             % |           Size | Samples | Callee     | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | ---------- | --------------------------------------------- |
| removed | -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `<init>()` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Callee                   | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------ | ------------------------------ |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Callee                                          | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

|  Change |       Delta |             % |           Size | Samples | Callee                         | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------ |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

|  Change |       Delta |             % |           Size | Samples | Callee                                 | Location                                  |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------- | ----------------------------------------- |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

|  Change |       Delta |             % |           Size | Samples | Callee                       | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------- | ----------------------- |
| removed | -65.515 MiB | 100.0% → 0.0% | 65.5 MiB → 0 B |   2 → 0 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change | Delta |           % |     Size | Samples | Callee    | Location           |
| -----: | ----: | ----------: | -------: | ------: | --------- | ------------------ |
|    ~0% | +56 B | 3.0% → 4.0% | 8.03 MiB |      26 | `clone()` | `java.lang.Object` |

##### `getResource(String)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |           Size | Samples | Callee                 | Location                                                 |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------- | -------------------------------------------------------- |
| removed |  -65.555 MiB | 100.0% → 0.0% | 65.6 MiB → 0 B |   3 → 0 | `findResource(String)` | `java.net.URLClassLoader`                                |
|     new | +510.984 KiB | 0.0% → 100.0% |  0 B → 511 KiB |   0 → 1 | `findResource(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|  Change |       Delta |           % |               Size | Samples | Callee                | Location                                                 |
| ------: | ----------: | ----------: | -----------------: | ------: | --------------------- | -------------------------------------------------------- |
|  -99.2% | -65.056 MiB |      100.0% | 65.6 MiB → 511 KiB |   3 → 1 | `getResource(String)` | `java.lang.ClassLoader`                                  |
| removed | -488.71 KiB | 0.7% → 0.0% |      489 KiB → 0 B |   1 → 0 | `getResource(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

|  Change |       Delta |             % |         Size | Samples | Callee              | Location                |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------- | ----------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |         Size | Samples | Callee                                        | Location                |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------------------------------- | ----------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

|  Change |       Delta |             % |         Size | Samples | Callee            | Location                                       |
| ------: | ----------: | ------------: | -----------: | ------: | ----------------- | ---------------------------------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |         Size | Samples | Callee                                                          | Location                         |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |         Size | Samples | Callee         | Location                                     |
| ------: | ----------: | ------------: | -----------: | ------: | -------------- | -------------------------------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

|  Change |       Delta |             % |         Size | Samples | Callee                                                         | Location                                     |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `getLoader(URL)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |         Size | Samples | Callee                                                          | Location                         |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| removed | -65.041 MiB | 100.0% → 0.0% | 65 MiB → 0 B |   1 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

|  Change |       Delta |              % |              Size | Samples | Callee                                          | Location                                                 |
| ------: | ----------: | -------------: | ----------------: | ------: | ----------------------------------------------- | -------------------------------------------------------- |
|  -30.0% | -10.287 MiB |  97.2% → 96.0% | 34.3 MiB → 24 MiB | 70 → 50 | `transformChildren(FirTransformer, Object)`     | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |
|  -28.2% |  -9.788 MiB | 98.6% → 100.0% | 34.8 MiB → 25 MiB | 71 → 52 | `transformDeclarations(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |
| removed |    -511 KiB |    1.4% → 0.0% |     511 KiB → 0 B |   1 → 0 | `transformImports(FirTransformer, Object)`      | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |

##### `transformDeclarations(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

| Change |        Delta |             % |                Size | Samples | Callee                                           | Location                                                 |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
| -26.2% |   -10.27 MiB |        100.0% |   39.2 MiB → 29 MiB | 79 → 59 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |
| -12.1% | -493.398 KiB | 10.1% → 12.0% | 3.97 MiB → 3.49 MiB |   7 → 6 | `transformDeclarations(FirTransformer, Object)`  | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

|  Change |          Delta |             % |                Size | Samples | Callee                                             | Location                                                                                                 |
| ------: | -------------: | ------------: | ------------------: | ------: | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  -26.9% |     -8.266 MiB | 79.4% → 77.4% | 30.7 MiB → 22.4 MiB | 62 → 46 | `transformNamedFunction(FirNamedFunction, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  -50.0% | -1,021.835 KiB |   5.2% → 3.4% |   2 MiB → 1,022 KiB |   3 → 2 | `transformNamedFunction(FirNamedFunction, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.AbstractFirStatusResolveTransformer`                      |
| removed |    -509.89 KiB |   1.3% → 0.0% |       510 KiB → 0 B |   1 → 0 | `transformNamedFunction(FirNamedFunction, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirImplicitAwareBodyResolveTransformer`      |
|   +1.9% |    +58.046 KiB |  7.7% → 10.5% | 2.99 MiB → 3.05 MiB |   6 → 7 | `transformNamedFunction(FirNamedFunction, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`                                |
|     ~0% |         -168 B |   6.4% → 8.6% |            2.49 MiB |       4 | `transformNamedFunction(FirNamedFunction, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`   |

##### `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |                Size | Samples | Callee                                         | Location                                                                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -28.3% | -8.265 MiB | 100.0% | 29.2 MiB → 20.9 MiB | 59 → 43 | `transformElement(FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformDeclarationContent(FirDeclaration, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |             % |                Size | Samples | Callee                                                        | Location                                                                                                 |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -28.4% | -7.514 MiB | 98.2% → 97.4% | 26.4 MiB → 18.9 MiB | 53 → 39 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  +0.2% | +1.101 KiB |   1.8% → 2.6% |   510 KiB → 511 KiB |       1 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirImplicitAwareBodyResolveTransformer`      |

##### `transformInplace(List, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change |          Delta |             % |                Size | Samples | Callee                              | Location                                                 |
| ------: | -------------: | ------------: | ------------------: | ------: | ----------------------------------- | -------------------------------------------------------- |
|  -24.1% |     -8.708 MiB | 43.7% → 36.4% | 36.2 MiB → 27.5 MiB | 72 → 56 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction` |
| +175.0% |     +3.492 MiB |   2.4% → 7.3% |    2 MiB → 5.49 MiB |  4 → 11 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`   |
|  -26.5% |     -1.978 MiB |   9.0% → 7.3% | 7.46 MiB → 5.48 MiB | 14 → 10 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirAnnotationCall` |
| removed | -1,021.984 KiB |   1.2% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirConstructor`   |
|   -6.2% |   -915.804 KiB | 17.3% → 17.8% | 14.4 MiB → 13.5 MiB |      27 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`     |

##### `access$transformFunctionWithGivenSignature(FirDeclarationsResolveTransformer, FirFunction, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |      % |                Size | Samples | Callee                                                      | Location                                                                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| -28.3% | -7.268 MiB | 100.0% | 25.7 MiB → 18.4 MiB | 51 → 38 | `transformFunctionWithGivenSignature(FirFunction, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |      % |                Size | Samples | Callee                                                                                                | Location                                                                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| -28.3% | -7.268 MiB | 100.0% | 25.7 MiB → 18.4 MiB | 51 → 38 | `access$transformFunctionWithGivenSignature(FirDeclarationsResolveTransformer, FirFunction, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformElement(FirElement, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

|  Change |         Delta |             % |                Size | Samples | Callee                                      | Location                                                              |
| ------: | ------------: | ------------: | ------------------: | ------: | ------------------------------------------- | --------------------------------------------------------------------- |
|  -31.2% |    -9.263 MiB | 52.2% → 40.7% | 29.7 MiB → 20.4 MiB | 60 → 42 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`              |
|   +9.3% |    +2.489 MiB | 47.0% → 58.3% | 26.7 MiB → 29.2 MiB | 52 → 58 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`       |
|  -66.7% | -1,021.96 KiB |   2.6% → 1.0% |   1.5 MiB → 511 KiB |   3 → 1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`      |
|     new |  +511.023 KiB |   0.0% → 1.0% |       0 B → 511 KiB |   0 → 1 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl` |
| removed |      -511 KiB |   0.9% → 0.0% |       511 KiB → 0 B |   1 → 0 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`     |

##### `transformFunctionWithGivenSignature(FirFunction, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |      % |                Size | Samples | Callee                                                           | Location                                                                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| -26.3% | -6.769 MiB | 100.0% | 25.7 MiB → 18.9 MiB | 51 → 39 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |        Delta |             % |                Size | Samples | Callee                                                     | Location                                                                                                                                            |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| -24.3% |   -5.771 MiB | 76.0% → 73.4% | 23.7 MiB → 17.9 MiB | 48 → 37 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                      |
| -33.3% |  -510.96 KiB |   4.8% → 4.1% | 1.5 MiB → 1,022 KiB |   3 → 2 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments`                                      |
|  -8.3% | -510.953 KiB | 19.2% → 22.5% | 5.99 MiB → 5.49 MiB | 12 → 11 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer` |

##### `transformNamedFunction(FirNamedFunction, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |                Size | Samples | Callee                                                     | Location                                                                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -21.7% | -6.769 MiB | 100.0% | 31.2 MiB → 24.4 MiB | 63 → 50 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                     | Location                                                    |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  -4.3% | -6.568 MiB | 100.0% | 152 MiB → 145 MiB | 306 → 295 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078016da2e8`)

| Change |     Delta |      % |                Size | Samples | Callee                                                                                              | Location                                                                                       |
| -----: | --------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| -25.9% | -6.27 MiB | 100.0% | 24.2 MiB → 17.9 MiB | 48 → 37 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `withParameters(FirCallableDeclaration, SessionAndScopeSessionHolder, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

| Change |          Delta |             % |                Size | Samples | Callee                                                                         | Location                                                                                                                                                                       |
| -----: | -------------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -28.0% |     -6.769 MiB | 76.4% → 68.6% | 24.2 MiB → 17.4 MiB | 48 → 36 | `invoke()`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078016da2e8`                                                      |
|    new | +1,021.984 KiB |   0.0% → 3.9% |     0 B → 1,022 KiB |   0 → 2 | `storeVariable(FirVariable, FirSession)`                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                                                                                |
| -16.7% | -1,021.968 KiB | 18.9% → 19.6% | 5.99 MiB → 4.99 MiB | 12 → 10 | `invoke()`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirAbstractContractResolveTransformerDispatcher$FirDeclarationsContractResolveTransformer$$Lambda.0x000000780167e048` |
|    new |   +510.976 KiB |   0.0% → 2.0% |       0 B → 511 KiB |   0 → 1 | `<init>(FirReceiverParameterSymbol, ConeKotlinType, FirSession, ScopeSession)` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitExtensionReceiverValue`                                                                                                        |
|    new |   +510.976 KiB |   0.0% → 2.0% |       0 B → 511 KiB |   0 → 1 | `invoke()`                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000078017106b0`                                                      |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                     | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  -3.8% | -5.849 MiB | 100.0% | 154 MiB → 148 MiB | 309 → 300 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change |        Delta |              % |                Size | Samples | Callee                                                                  | Location                                                                        |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -20.6% |   -4.773 MiB | 97.9% → 100.0% | 23.2 MiB → 18.4 MiB | 47 → 38 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |
| removed | -510.984 KiB |    2.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `<init>(FirMemberDeclaration)`                                          | `org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`              |

# Retained heap profile diff

Retained 18.3 MiB → 18.2 MiB (-117.484 KiB, -0.6%) over 194 objects (96.7 KiB → 96.1 KiB per object).

| Category         | Change |       Delta |             % |                Size |   Objects |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------: |
| Standard library |  -0.4% | -68.492 KiB | 93.7% → 93.9% | 17.2 MiB → 17.1 MiB | 183 → 182 |
| Ours             |  -4.1% | -48.992 KiB |   6.3% → 6.1% | 1.16 MiB → 1.11 MiB |   11 → 12 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                                                                                                                                                                                 | Location                                                                |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|  +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `initCEN(int, ZipCoder)`                                                                                                                                                                                                                                 | `java.util.zip.ZipFile$Source`                                          |
| +228.6% |       +512 B |         <0.1% |       224 B → 736 B |   2 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                                                                                                                                                                          | `java.lang.ClassLoader`                                                 |
|  +64.7% |       +264 B |         <0.1% |       408 B → 672 B |       2 | `copyOf(Object[], int, Class)`                                                                                                                                                                                                                           | `java.util.Arrays`                                                      |
|     new |       +256 B |  0.0% → <0.1% |         0 B → 256 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                                                                                                                                                                                                                      | `java.lang.Class`                                                       |
|     new |       +224 B |  0.0% → <0.1% |         0 B → 224 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                     |
|     new |       +144 B |  0.0% → <0.1% |         0 B → 144 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`                        |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 1 | `transformInPlace(List, IrTransformer, Object)`                                                                                                                                                                                                          | `org.jetbrains.kotlin.ir.util.TransformKt`                              |
|     new |        +96 B |  0.0% → <0.1% |          0 B → 96 B |   0 → 1 | `build()`                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder` |
|     new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `convertToIrAndActualize-MT2kVtw(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1)` | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`                       |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `putVal(Object, Object, boolean)`                                                                                                                                                                                                                        | `java.util.concurrent.ConcurrentHashMap`                                |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                                                                                                                                                                                             | `java.util.HashMap`                                                     |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                        | Location                                 |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------- |
|  +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `initCEN(int, ZipCoder)`                                                        | `java.util.zip.ZipFile$Source`           |
| +228.6% |       +512 B |         <0.1% |       224 B → 736 B |   2 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                  |
|  +64.7% |       +264 B |         <0.1% |       408 B → 672 B |       2 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                       |
|     new |       +256 B |  0.0% → <0.1% |         0 B → 256 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                                             | `java.lang.Class`                        |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `putVal(Object, Object, boolean)`                                               | `java.util.concurrent.ConcurrentHashMap` |
|     new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                      |

##### Ours

| Change |  Delta |            % |        Size | Objects | Function                                                                                                                                                                                                                                                 | Location                                                                |
| -----: | -----: | -----------: | ----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    new | +224 B | 0.0% → <0.1% | 0 B → 224 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                     |
|    new | +144 B | 0.0% → <0.1% | 0 B → 144 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                                                                                                                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`                        |
|    new |  +96 B | 0.0% → <0.1% |  0 B → 96 B |   0 → 1 | `transformInPlace(List, IrTransformer, Object)`                                                                                                                                                                                                          | `org.jetbrains.kotlin.ir.util.TransformKt`                              |
|    new |  +96 B | 0.0% → <0.1% |  0 B → 96 B |   0 → 1 | `build()`                                                                                                                                                                                                                                                | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder` |
|    new |  +64 B | 0.0% → <0.1% |  0 B → 64 B |   0 → 1 | `convertToIrAndActualize-MT2kVtw(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1)` | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`                       |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |   Objects | Function                                                                              | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -4.6% | -524.789 KiB | 61.3% → 58.9% | 11.2 MiB → 10.7 MiB | 138 → 135 | `copyOf(byte[], int)`                                                                 | `java.util.Arrays`                                                |
|  -58.9% |  -95.437 KiB |   0.9% → 0.4% |  162 KiB → 66.5 KiB |     3 → 2 | `compress(char[], int, int)`                                                          | `java.lang.StringUTF16`                                           |
|   -4.0% |  -47.335 KiB |   6.3% → 6.1% | 1.16 MiB → 1.11 MiB |         5 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])`                        | `java.util.concurrent.ConcurrentHashMap`                          |
| removed |   -2.023 KiB |  <0.1% → 0.0% |      2.02 KiB → 0 B |     1 → 0 | `<init>(CharSequence, Lexer)`                                                         | `com.intellij.lang.impl.TokenSequence$Builder`                    |
| removed |       -336 B |  <0.1% → 0.0% |         336 B → 0 B |     1 → 0 | `copyOf(Object[], int)`                                                               | `java.util.Arrays`                                                |
| removed |       -192 B |  <0.1% → 0.0% |         192 B → 0 B |     2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                   |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)`                                                   | `java.util.Arrays`                                                |
|     ~0% |        -80 B |          1.4% |             256 KiB |     2 → 1 | `resize()`                                                                            | `java.util.HashMap`                                               |
| removed |        -56 B |  <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `grow(int)`                                                                           | `java.util.ArrayList`                                             |
|  -26.7% |        -32 B |         <0.1% |        120 B → 88 B |         1 | `copyOfRange(byte[], int, int)`                                                       | `java.util.Arrays`                                                |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |     1 → 0 | `createAndCacheIrTypeParameter(FirTypeParameter, int, ConversionTypeOrigin)`          | `org.jetbrains.kotlin.fir.backend.Fir2IrClassifierStorage`        |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |     1 → 0 | `<init>(ControlFlowGraph, int)`                                                       | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                       | Location                                 |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------- | ---------------------------------------- |
|   -4.6% | -524.789 KiB | 61.3% → 58.9% | 11.2 MiB → 10.7 MiB | 138 → 135 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                       |
|  -58.9% |  -95.437 KiB |   0.9% → 0.4% |  162 KiB → 66.5 KiB |     3 → 2 | `compress(char[], int, int)`                                   | `java.lang.StringUTF16`                  |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |
| removed |       -336 B |  <0.1% → 0.0% |         336 B → 0 B |     1 → 0 | `copyOf(Object[], int)`                                        | `java.util.Arrays`                       |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)`                            | `java.util.Arrays`                       |
|     ~0% |        -80 B |          1.4% |             256 KiB |     2 → 1 | `resize()`                                                     | `java.util.HashMap`                      |
| removed |        -56 B |  <0.1% → 0.0% |          56 B → 0 B |     1 → 0 | `grow(int)`                                                    | `java.util.ArrayList`                    |
|  -26.7% |        -32 B |         <0.1% |        120 B → 88 B |         1 | `copyOfRange(byte[], int, int)`                                | `java.util.Arrays`                       |

##### Ours

|  Change |       Delta |            % |                Size | Objects | Function                                                                              | Location                                                          |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -4.0% | -47.335 KiB |  6.3% → 6.1% | 1.16 MiB → 1.11 MiB |       5 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| removed |  -2.023 KiB | <0.1% → 0.0% |      2.02 KiB → 0 B |   1 → 0 | `<init>(CharSequence, Lexer)`                                                         | `com.intellij.lang.impl.TokenSequence$Builder`                    |
| removed |      -192 B | <0.1% → 0.0% |         192 B → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                   |
| removed |       -32 B | <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `createAndCacheIrTypeParameter(FirTypeParameter, int, ConversionTypeOrigin)`          | `org.jetbrains.kotlin.fir.backend.Fir2IrClassifierStorage`        |
| removed |       -24 B | <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `<init>(ControlFlowGraph, int)`                                                       | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |              % |               Size | Objects | Location                            |
| -----: | -----------: | -------------: | -----------------: | ------: | ----------------------------------- |
|    new | +374.421 KiB |    0.0% → 9.5% |      0 B → 374 KiB |   0 → 2 | `java.util.zip.ZipFile$Source:1744` |
|  +6.2% | +208.843 KiB | 100.0% → 90.5% | 3.29 MiB → 3.5 MiB |       2 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |  Delta |      % |          Size | Objects | Location                |
| -----: | -----: | -----: | ------------: | ------: | ----------------------- |
| +64.7% | +264 B | 100.0% | 408 B → 672 B |       2 | `java.util.Arrays:3513` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change |  Delta |             % |        Size | Objects | Location                                                  |
| -----: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------- |
|    new | +224 B | 0.0% → 100.0% | 0 B → 224 B |   0 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`)

| Change |  Delta |             % |        Size | Objects | Location                                              |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------- |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1:9476` |

##### `transformInPlace(List, IrTransformer, Object)` (`org.jetbrains.kotlin.ir.util.TransformKt`)

| Change | Delta |             % |       Size | Objects | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 1 | `org.jetbrains.kotlin.ir.util.TransformKt:35` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                                                   |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 1 | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder:54` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % |       Size | Objects | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1047` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % |       Size | Objects | Location                 |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------ |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `java.util.HashMap:1909` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |   Objects | Location                |
| -----: | -----------: | -----: | ------------------: | --------: | ----------------------- |
|  -4.6% | -524.789 KiB | 100.0% | 11.2 MiB → 10.7 MiB | 138 → 135 | `java.util.Arrays:3539` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |       Delta |      % |               Size | Objects | Location                    |
| -----: | ----------: | -----: | -----------------: | ------: | --------------------------- |
| -58.9% | -95.437 KiB | 100.0% | 162 KiB → 66.5 KiB |   3 → 2 | `java.lang.StringUTF16:211` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |       Delta |      % |                Size | Objects | Location                                                             |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------------------------------------------------- |
|  -4.0% | -47.335 KiB | 100.0% | 1.16 MiB → 1.11 MiB |       5 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |         Size | Objects | Location                                      |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:2431` |

##### `<init>(CharSequence, Lexer)` (`com.intellij.lang.impl.TokenSequence$Builder`)

|  Change |      Delta |             % |           Size | Objects | Location                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------- |
| removed | -2.023 KiB | 100.0% → 0.0% | 2.02 KiB → 0 B |   1 → 0 | `com.intellij.lang.impl.TokenSequence$Builder:99` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |  Delta |             % |        Size | Objects | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- |
| removed | -336 B | 100.0% → 0.0% | 336 B → 0 B |   1 → 0 | `java.util.Arrays:3482` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change |  Delta |             % |        Size | Objects | Location                                             |
| ------: | -----: | ------------: | ----------: | ------: | ---------------------------------------------------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   2 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change | Delta |             % |       Size | Objects | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `java.util.Arrays:3863` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % |    Size | Objects | Location                |
| -----: | ----: | -----: | ------: | ------: | ----------------------- |
|    ~0% | -80 B | 100.0% | 256 KiB |   2 → 1 | `java.util.HashMap:710` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % |       Size | Objects | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `java.util.ArrayList:239` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change | Delta |      % |         Size | Objects | Location                |
| -----: | ----: | -----: | -----------: | ------: | ----------------------- |
| -26.7% | -32 B | 100.0% | 120 B → 88 B |       1 | `java.util.Arrays:3856` |

##### `createAndCacheIrTypeParameter(FirTypeParameter, int, ConversionTypeOrigin)` (`org.jetbrains.kotlin.fir.backend.Fir2IrClassifierStorage`)

|  Change | Delta |             % |       Size | Objects | Location                                                       |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.backend.Fir2IrClassifierStorage:115` |

##### `<init>(ControlFlowGraph, int)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode:89` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |  Delta |      % |          Size | Objects | Caller                                                    | Location                |
| ------: | -----: | -----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +228.6% | +512 B | 100.0% | 224 B → 736 B |   2 → 6 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |  Delta |      % |          Size | Objects | Caller                  | Location           |
| -----: | -----: | -----: | ------------: | ------: | ----------------------- | ------------------ |
| +64.7% | +264 B | 100.0% | 408 B → 672 B |       2 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change |  Delta |             % |        Size | Objects | Caller                                    | Location          |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------- | ----------------- |
|    new | +256 B | 0.0% → 100.0% | 0 B → 256 B |   0 → 1 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                            |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
|    new | +224 B | 0.0% → 100.0% | 0 B → 224 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`)

| Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                         |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | ------------------------------------------------ |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1` |

##### `transformInPlace(List, IrTransformer, Object)` (`org.jetbrains.kotlin.ir.util.TransformKt`)

| Change | Delta |             % |       Size | Objects | Caller                                     | Location                                                 |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------ | -------------------------------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.declarations.IrPackageFragment` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                  | Location                                                         |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +96 B | 0.0% → 100.0% | 0 B → 96 B |   0 → 1 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `convertToIrAndActualize-MT2kVtw(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1)` (`org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                                                                                                                                                                                        | Location                                          |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `convertToIrAndActualize-MT2kVtw$default(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1, int, Object)` | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % |       Size | Objects | Caller                | Location                                 |
| -----: | ----: | ------------: | ---------: | ------: | --------------------- | ---------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `put(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

| Change | Delta |             % |       Size | Objects | Caller                                          | Location            |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |      % |                Size |   Objects | Caller          | Location                        |
| -----: | -----------: | -----: | ------------------: | --------: | --------------- | ------------------------------- |
|  -4.6% | -524.789 KiB | 100.0% | 11.2 MiB → 10.7 MiB | 138 → 135 | `toByteArray()` | `java.io.ByteArrayOutputStream` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |       Delta |      % |               Size | Objects | Caller                           | Location           |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------- | ------------------ |
| -58.9% | -95.437 KiB | 100.0% | 162 KiB → 66.5 KiB |   3 → 2 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |       Delta |      % |                Size | Objects | Caller           | Location                                                                                     |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
|  -4.0% | -47.335 KiB | 100.0% | 1.16 MiB → 1.11 MiB |       5 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000078013f9e28` |

##### `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |         Size | Objects | Caller                | Location                                 |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------- | ---------------------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<init>(CharSequence, Lexer)` (`com.intellij.lang.impl.TokenSequence$Builder`)

|  Change |      Delta |             % |           Size | Objects | Caller                               | Location                               |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------ | -------------------------------------- |
| removed | -2.023 KiB | 100.0% → 0.0% | 2.02 KiB → 0 B |   1 → 0 | `performLexing(CharSequence, Lexer)` | `com.intellij.lang.impl.TokenSequence` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |  Delta |             % |        Size | Objects | Caller   | Location                                 |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ---------------------------------------- |
| removed | -336 B | 100.0% → 0.0% | 336 B → 0 B |   1 → 0 | `copy()` | `org.jetbrains.kotlin.util.ArrayMapImpl` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                        |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location           |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | ------------------ |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `resize()` (`java.util.HashMap`)

| Change | Delta |      % |    Size | Objects | Caller                                          | Location            |
| -----: | ----: | -----: | ------: | ------: | ----------------------------------------------- | ------------------- |
|    ~0% | -80 B | 100.0% | 256 KiB |   2 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change | Delta |             % |       Size | Objects | Caller   | Location              |
| ------: | ----: | ------------: | ---------: | ------: | -------- | --------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `grow()` | `java.util.ArrayList` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change | Delta |      % |         Size | Objects | Caller                                | Location           |
| -----: | ----: | -----: | -----------: | ------: | ------------------------------------- | ------------------ |
| -26.7% | -32 B | 100.0% | 120 B → 88 B |       1 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `createAndCacheIrTypeParameter(FirTypeParameter, int, ConversionTypeOrigin)` (`org.jetbrains.kotlin.fir.backend.Fir2IrClassifierStorage`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                                                     | Location                                                   |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `createAndCacheIrTypeParameter$default(Fir2IrClassifierStorage, FirTypeParameter, int, ConversionTypeOrigin, int, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrClassifierStorage` |

##### `<init>(ControlFlowGraph, int)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`)

|  Change | Delta |             % |       Size | Objects | Caller                                                    | Location                                           |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------- | -------------------------------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `<init>(ControlFlowGraph, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                    | Location                                       |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------- |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                 |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                 |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                 |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`      |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                        |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                        |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                        |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`   |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`               |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`               |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`   |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`           |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getLoader(URL)`                                                            | `jdk.internal.loader.URLClassPath`             |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getLoader(int)`                                                            | `jdk.internal.loader.URLClassPath`             |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `findResource(String, boolean)`                                             | `jdk.internal.loader.URLClassPath`             |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                                     | `java.net.URLClassLoader$2`                    |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)`          | `java.security.AccessController`               |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `doPrivileged(PrivilegedAction, AccessControlContext)`                      | `java.security.AccessController`               |

##### Ours

| Change |        Delta |             % |                Size |   Objects | Function                                                                                                      | Location                                                                                               |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |     2 → 4 | `getResource(String)`                                                                                         | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                               |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |     2 → 4 | `<init>()`                                                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                          |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |     2 → 4 | `<init>()`                                                                                                    | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                           |
| +16.2% | +550.914 KiB | 18.2% → 21.2% | 3.33 MiB → 3.87 MiB |    9 → 18 | `main(String[])`                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                 |
| +16.2% | +550.914 KiB | 18.2% → 21.2% | 3.33 MiB → 3.87 MiB |    9 → 18 | `main(String[])`                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                           |
|  +0.1% |  +25.679 KiB | 92.8% → 93.5% |              17 MiB | 175 → 179 | `run(String[])`                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                                                            |
|  +0.1% |  +25.679 KiB | 92.8% → 93.5% |              17 MiB | 175 → 179 | `main(String[])`                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                                                            |
|    new |   +5.812 KiB |  0.0% → <0.1% |      0 B → 5.81 KiB |     0 → 3 | `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)`                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |
|    new |   +5.812 KiB |  0.0% → <0.1% |      0 B → 5.81 KiB |     0 → 3 | `transformAnnotationCall(FirAnnotationCall, Void)`                                                            | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `processClassifiersFromImportsByName(Name, List, Function1)`                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractImportingScope`                                       |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `processClassifiersByNameWithSubstitution(Name, Function2)`                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractSimpleImportingScope`                                 |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `iterateScopesWithSubstitution(TypeResolutionConfiguration, Name, Function3, Function0)`                      | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                  |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `resolveUserTypeToSymbol(FirUserTypeRef, TypeResolutionConfiguration, SupertypeSupplier, boolean)`            | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                  |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`                                  |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)`           | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                     |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)`                                                   | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                     |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `transformTypeRef(FirTypeRef, Object)`                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`                     |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `transformUnresolvedTypeRef(FirUnresolvedTypeRef, Object)`                                                    | `org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer`                                              |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `transformUserTypeRef(FirUserTypeRef, Object)`                                                                | `org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer`                                              |
|    new |   +5.593 KiB |  0.0% → <0.1% |      0 B → 5.59 KiB |     0 → 1 | `transformAnnotationCall(FirAnnotationCall, Object)`                                                          | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |   Objects | Function                                                                                                                                                  | Location                                                                                                        |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  -3.8% | -524.789 KiB | 73.3% → 70.9% | 13.4 MiB → 12.9 MiB | 166 → 163 | `copyOf(byte[], int)`                                                                                                                                     | `java.util.Arrays`                                                                                              |
|  -3.8% | -524.789 KiB | 73.3% → 70.9% | 13.4 MiB → 12.9 MiB | 166 → 163 | `toByteArray()`                                                                                                                                           | `java.io.ByteArrayOutputStream`                                                                                 |
|  -3.7% | -524.789 KiB | 74.7% → 72.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                   | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                          |
|  -3.7% | -524.789 KiB | 74.7% → 72.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                              | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                          |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)`                                                                                                   | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                               |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `invoke()`                                                                                                                                                | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000078015edab0`                    |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                                                          | `org.jetbrains.kotlin.util.PerformanceManager`                                                                  |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)`                                                                                        | `org.jetbrains.kotlin.util.PerformanceManagerKt`                                                                |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                               |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `compute()`                                                                                                                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000078015ec038`                  |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `runReadAction(Computable)`                                                                                                                               | `com.intellij.mock.MockApplication`                                                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                                        | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `findKotlinClassOrContent(ClassId, MetadataVersion)`                                                                                                      | `org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`                                                            |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `computePackagePartInfo(FqName, String)`                                                                                                                  | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                                 |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `computePackagePartsInfos(FqName)`                                                                                                                        | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                                 |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `tryComputePackagePartInfos(FqName)`                                                                                                                      | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)`                                                                        | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `invoke(Object, Void)`                                                                                                                                    | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2` |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                       | Location                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------- | ----------------------------------------------------- |
|   -3.8% | -524.789 KiB | 73.3% → 70.9% | 13.4 MiB → 12.9 MiB | 166 → 163 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                                    |
|   -3.8% | -524.789 KiB | 73.3% → 70.9% | 13.4 MiB → 12.9 MiB | 166 → 163 | `toByteArray()`                                                | `java.io.ByteArrayOutputStream`                       |
|  -58.9% |  -95.437 KiB |   0.9% → 0.4% |  162 KiB → 66.5 KiB |     3 → 2 | `compress(char[], int, int)`                                   | `java.lang.StringUTF16`                               |
|  -58.9% |  -95.437 KiB |   0.9% → 0.4% |  162 KiB → 66.5 KiB |     3 → 2 | `<init>(char[], int, int, Void)`                               | `java.lang.String`                                    |
|  -58.9% |  -95.437 KiB |   0.9% → 0.4% |  162 KiB → 66.5 KiB |     3 → 2 | `<init>(char[], int, int)`                                     | `java.lang.String`                                    |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap`              |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `addCount(long, int)`                                          | `java.util.concurrent.ConcurrentHashMap`              |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `putIfAbsent(Object, Object)`                                  | `java.util.concurrent.ConcurrentHashMap`              |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `internKey(ReferencedKeyMap, Object)`                          | `jdk.internal.util.ReferencedKeyMap`                  |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `intern(ReferencedKeyMap, Object)`                             | `jdk.internal.util.ReferencedKeyMap`                  |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `intern(Object)`                                               | `jdk.internal.util.ReferencedKeySet`                  |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `makeImpl(Class, Class[], boolean)`                            | `java.lang.invoke.MethodType`                         |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `methodType(Class, Class[], boolean)`                          | `java.lang.invoke.MethodType`                         |
| removed |  -32.015 KiB |   0.2% → 0.0% |        32 KiB → 0 B |     1 → 0 | `findMethodHandleType(Class, Class[])`                         | `java.lang.invoke.MethodHandleNatives`                |
|  -99.9% |  -31.984 KiB |  0.2% → <0.1% |       32 KiB → 32 B |         1 | `putVal(Object, Object, boolean)`                              | `java.util.concurrent.ConcurrentHashMap`              |
|  -91.1% |       -896 B |         <0.1% |        984 B → 88 B |     6 → 1 | `resumeWith(Object)`                                           | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
|  -85.7% |       -192 B |         <0.1% |        224 B → 32 B |     3 → 1 | `getValue()`                                                   | `kotlin.SynchronizedLazyImpl`                         |
|  -59.3% |       -128 B |         <0.1% |        216 B → 88 B |     3 → 1 | `copyOfRange(byte[], int, int)`                                | `java.util.Arrays`                                    |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `copyOfRangeByte(byte[], int, int)`                            | `java.util.Arrays`                                    |
|     ~0% |        -80 B |          1.4% |             256 KiB |     2 → 1 | `resize()`                                                     | `java.util.HashMap`                                   |

##### Ours

| Change |        Delta |             % |                Size |   Objects | Function                                                                                                                                                  | Location                                                                                                        |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
|  -3.7% | -524.789 KiB | 74.7% → 72.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                   | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                          |
|  -3.7% | -524.789 KiB | 74.7% → 72.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                              | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                          |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)`                                                                                                   | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                               |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `invoke()`                                                                                                                                                | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000078015edab0`                    |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                                                          | `org.jetbrains.kotlin.util.PerformanceManager`                                                                  |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)`                                                                                        | `org.jetbrains.kotlin.util.PerformanceManagerKt`                                                                |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                               |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `compute()`                                                                                                                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000078015ec038`                  |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `runReadAction(Computable)`                                                                                                                               | `com.intellij.mock.MockApplication`                                                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                                        | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                             |
| -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `findKotlinClassOrContent(ClassId, MetadataVersion)`                                                                                                      | `org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`                                                            |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `computePackagePartInfo(FqName, String)`                                                                                                                  | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                                 |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `computePackagePartsInfos(FqName)`                                                                                                                        | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                                 |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `tryComputePackagePartInfos(FqName)`                                                                                                                      | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)`                                                                        | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `invoke(Object, Void)`                                                                                                                                    | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2` |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `invoke(Object, Object)`                                                                                                                                  | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2` |
| -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `getPackageParts(FqName)`                                                                                                                                 | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Callee                   | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------ | ------------------------------ |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Callee                                          | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------ |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                                  |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ----------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |      % |                Size | Objects | Callee                       | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------- | ----------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ----------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |      % |                Size | Objects | Callee                                        | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------- | ----------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |        Delta |      % |                Size | Objects | Callee            | Location                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change |        Delta |      % |                Size | Objects | Callee  | Location                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------- | ---------------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()` | `jdk.internal.loader.URLClassPath$3`           |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                      | Location                         |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |      % |                Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |      % |                Size | Objects | Callee         | Location                                     |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | -------------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |      % |                Size | Objects | Callee                                                         | Location                                     |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `getLoader(URL)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |      % |                Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `getLoader(int)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ---------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getLoader(URL)` | `jdk.internal.loader.URLClassPath` |

##### `findResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ---------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `run()` (`java.net.URLClassLoader$2`)

| Change |        Delta |      % |                Size | Objects | Callee                          | Location                           |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------- | ---------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `findResource(String, boolean)` | `jdk.internal.loader.URLClassPath` |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                         | `java.net.URLClassLoader$2`        |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change |        Delta |      % |                Size | Objects | Callee  | Location                    |
| -----: | -----------: | -----: | ------------------: | ------: | ------- | --------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()` | `java.net.URLClassLoader$2` |

##### `doPrivileged(PrivilegedAction, AccessControlContext)` (`java.security.AccessController`)

| Change |        Delta |      % |                Size | Objects | Callee                                                             | Location                         |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

| Change |        Delta |      % |                Size | Objects | Callee                | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | ----------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getResource(String)` | `java.lang.ClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |        Delta |      % |                Size | Objects | Callee                | Location                                                 |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | -------------------------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getResource(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |        Delta |      % |                Size | Objects | Callee     | Location                                      |
| -----: | -----------: | -----: | ------------------: | ------: | ---------- | --------------------------------------------- |
| +17.3% | +583.265 KiB | 100.0% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>()` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change |        Delta |             % |                Size | Objects | Callee                          | Location                                                |
| -----: | -----------: | ------------: | ------------------: | ------: | ------------------------------- | ------------------------------------------------------- |
| +17.3% | +583.265 KiB | 99.0% → 99.9% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |
| -94.0% |  -32.351 KiB |   1.0% → 0.1% | 34.4 KiB → 2.08 KiB |  7 → 14 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |        Delta |      % |                Size | Objects | Callee           | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------- | ------------------------------------------------------ |
| +16.2% | +550.914 KiB | 100.0% | 3.33 MiB → 3.87 MiB |  9 → 18 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |        Delta |             % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | -----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +16.2% | +550.468 KiB | 19.6% → 22.7% | 3.33 MiB → 3.87 MiB |    8 → 15 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
|  -3.7% | -524.789 KiB | 80.4% → 77.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |      % |   Size |   Objects | Callee          | Location                                    |
| -----: | ----------: | -----: | -----: | --------: | --------------- | ------------------------------------------- |
|  +0.1% | +25.679 KiB | 100.0% | 17 MiB | 175 → 179 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

| Change |      Delta |            % |           Size | Objects | Callee                                               | Location                                                                                                 |
| -----: | ---------: | -----------: | -------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 96.2% | 0 B → 5.59 KiB |   0 → 1 | `transformUserTypeRef(FirUserTypeRef, Object)`       | `org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer`                                                |
|    new |     +224 B |  0.0% → 3.8% |    0 B → 224 B |   0 → 2 | `transformAnnotation(FirAnnotation, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformAnnotationCall(FirAnnotationCall, Void)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                                       | Location                                                                                               |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
|    new | +5.812 KiB | 0.0% → 100.0% | 0 B → 5.81 KiB |   0 → 3 | `transformAnnotationCall(FirAnnotationCall, FirUserTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |

##### `processClassifiersFromImportsByName(Name, List, Function1)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractImportingScope`)

| Change |      Delta |             % |           Size | Objects | Callee                                 | Location                                                                            |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------- | ----------------------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `getClassLikeSymbolByClassId(ClassId)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |

##### `processClassifiersByNameWithSubstitution(Name, Function2)` (`org.jetbrains.kotlin.fir.scopes.impl.FirAbstractSimpleImportingScope`)

| Change |      Delta |             % |           Size | Objects | Callee                                                       | Location                                                         |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `processClassifiersFromImportsByName(Name, List, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractImportingScope` |

##### `iterateScopesWithSubstitution(TypeResolutionConfiguration, Name, Function3, Function0)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

| Change |      Delta |             % |           Size | Objects | Callee                                                      | Location                                                               |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `processClassifiersByNameWithSubstitution(Name, Function2)` | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractSimpleImportingScope` |

##### `resolveUserTypeToSymbol(FirUserTypeRef, TypeResolutionConfiguration, SupertypeSupplier, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

| Change |      Delta |             % |           Size | Objects | Callee                                                                                   | Location                                                              |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `iterateScopesWithSubstitution(TypeResolutionConfiguration, Name, Function3, Function0)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`)

| Change |      Delta |             % |           Size | Objects | Callee                                                                                             | Location                                                              |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `resolveUserTypeToSymbol(FirUserTypeRef, TypeResolutionConfiguration, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                                                                                        | Location                                                              |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `resolveType(FirTypeRef, TypeResolutionConfiguration, boolean, boolean, boolean, SupertypeSupplier, boolean)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl` |

##### `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                                                                              | Location                                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `resolveType(FirSpecificTypeResolverTransformer, FirTypeRef, TypeResolutionConfiguration, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `transformTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                                      | Location                                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `transformTypeRef(FirTypeRef, TypeResolutionConfiguration)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `transformUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                 | Location                                                                           |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `transformTypeRef(FirTypeRef, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `transformUserTypeRef(FirUserTypeRef, Object)` (`org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                                     | Location                                                  |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------------- |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `transformUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultTransformer` |

##### `transformAnnotationCall(FirAnnotationCall, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`)

| Change |      Delta |             % |           Size | Objects | Callee                                             | Location                                                                                               |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
|    new | +5.593 KiB | 0.0% → 100.0% | 0 B → 5.59 KiB |   0 → 1 | `transformAnnotationCall(FirAnnotationCall, Void)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |      % |                Size |   Objects | Callee                | Location           |
| -----: | -----------: | -----: | ------------------: | --------: | --------------------- | ------------------ |
|  -3.8% | -524.789 KiB | 100.0% | 13.4 MiB → 12.9 MiB | 166 → 163 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |             % |                Size |   Objects | Callee          | Location                        |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------- | ------------------------------- |
|  -3.8% | -524.789 KiB | 98.2% → 98.1% | 13.4 MiB → 12.9 MiB | 166 → 163 | `toByteArray()` | `java.io.ByteArrayOutputStream` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |      % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | -----------: | -----: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -3.7% | -524.789 KiB | 100.0% | 13.7 MiB → 13.2 MiB | 167 → 164 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  -3.1% |  -15.312 KiB |   3.5% |   486 KiB → 471 KiB |     5 → 4 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `create$lambda$0(VirtualFile, byte[], MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`)

| Change |       Delta |             % |                Size | Objects | Callee                                       | Location                                                |
| -----: | ----------: | ------------: | ------------------: | ------: | -------------------------------------------- | ------------------------------------------------------- |
| -59.0% | -95.468 KiB |  12.0% → 5.5% |  162 KiB → 66.5 KiB |   4 → 2 | `create(byte[], MetadataVersion, Function4)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |
|  -4.0% | -47.335 KiB | 88.0% → 94.5% | 1.16 MiB → 1.11 MiB |       5 | `contentsToByteArray(boolean)`               | `com.intellij.openapi.vfs.VirtualFile`                  |

##### `invoke()` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000078015edab0`)

| Change |        Delta |      % |                Size | Objects | Callee                                                  | Location                                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------- | ----------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |        Delta |      % |                Size | Objects | Callee     | Location                                                                                     |
| -----: | -----------: | -----: | ------------------: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `invoke()` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000078015edab0` |

##### `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManagerKt`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                           | Location                                       |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`)

| Change |        Delta |      % |                Size | Objects | Callee                                                             | Location                                         |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------ |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManagerKt` |

##### `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                                                      | Location                                                          |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `compute()` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000078015ec038`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                                                      | Location                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `runReadAction(Computable)` (`com.intellij.mock.MockApplication`)

| Change |        Delta |      % |                Size | Objects | Callee      | Location                                                                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------- | ---------------------------------------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `compute()` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000078015ec038` |

##### `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change |        Delta |      % |                Size | Objects | Callee                      | Location                            |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------- | ----------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `runReadAction(Computable)` | `com.intellij.mock.MockApplication` |

##### `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                                             | Location                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `findKotlinClassOrContent(ClassId, MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                                                                                                    | Location                                                            |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| -10.6% | -142.804 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   9 → 7 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

| Change |        Delta |            % |                Size | Objects | Callee                                               | Location                                                            |
| -----: | -----------: | -----------: | ------------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------- |
| -10.6% | -142.773 KiB |       100.0% | 1.32 MiB → 1.18 MiB |   8 → 7 | `findKotlinClassOrContent(ClassId, MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`                |
|    new |       +224 B | 0.0% → <0.1% |         0 B → 224 B |   0 → 2 | `readPackageDataFrom(String[], String[])`            | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |

##### `computePackagePartsInfos(FqName)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                                   | Location                                                                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
| -10.6% | -142.554 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   8 → 9 | `computePackagePartInfo(FqName, String)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                             | Location                                                                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
| -10.6% | -142.554 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   8 → 9 | `computePackagePartsInfos(FqName)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                               | Location                                                                         |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------------ | -------------------------------------------------------------------------------- |
| -10.6% | -142.554 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   8 → 9 | `tryComputePackagePartInfos(FqName)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                             | Location                                                                         |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| -10.6% | -142.554 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   8 → 9 | `access$tryComputePackagePartInfos(AbstractFirDeserializedSymbolProvider, FqName)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |

##### `<init>(char[], int, int, Void)` (`java.lang.String`)

| Change |       Delta |      % |               Size | Objects | Callee                       | Location                |
| -----: | ----------: | -----: | -----------------: | ------: | ---------------------------- | ----------------------- |
| -58.9% | -95.437 KiB | 100.0% | 162 KiB → 66.5 KiB |   3 → 2 | `compress(char[], int, int)` | `java.lang.StringUTF16` |

##### `<init>(char[], int, int)` (`java.lang.String`)

| Change |       Delta |      % |               Size | Objects | Callee                           | Location           |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------- | ------------------ |
| -58.9% | -95.437 KiB | 100.0% | 162 KiB → 66.5 KiB |   3 → 2 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `addCount(long, int)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |         Size | Objects | Callee                                                         | Location                                 |
| ------: | ----------: | ------------: | -----------: | ------: | -------------------------------------------------------------- | ---------------------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `transfer(ConcurrentHashMap$Node[], ConcurrentHashMap$Node[])` | `java.util.concurrent.ConcurrentHashMap` |

##### `putIfAbsent(Object, Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |         Size | Objects | Callee                            | Location                                 |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `internKey(ReferencedKeyMap, Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |       Delta |             % |         Size | Objects | Callee                        | Location                                 |
| ------: | ----------: | ------------: | -----------: | ------: | ----------------------------- | ---------------------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `intern(ReferencedKeyMap, Object)` (`jdk.internal.util.ReferencedKeyMap`)

|  Change |       Delta |             % |         Size | Objects | Callee                                | Location                             |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------------------------- | ------------------------------------ |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `internKey(ReferencedKeyMap, Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `intern(Object)` (`jdk.internal.util.ReferencedKeySet`)

|  Change |       Delta |             % |         Size | Objects | Callee                             | Location                             |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------------------- | ------------------------------------ |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `intern(ReferencedKeyMap, Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |       Delta |             % |         Size | Objects | Callee           | Location                             |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------- | ------------------------------------ |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `intern(Object)` | `jdk.internal.util.ReferencedKeySet` |

##### `methodType(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|  Change |       Delta |             % |         Size | Objects | Callee                              | Location                      |
| ------: | ----------: | ------------: | -----------: | ------: | ----------------------------------- | ----------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `makeImpl(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `findMethodHandleType(Class, Class[])` (`java.lang.invoke.MethodHandleNatives`)

|  Change |       Delta |             % |         Size | Objects | Callee                                | Location                      |
| ------: | ----------: | ------------: | -----------: | ------: | ------------------------------------- | ----------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |         Size | Objects | Callee                | Location                                 |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------- | ---------------------------------------- |
| removed | -32.015 KiB | 100.0% → 0.0% | 32 KiB → 0 B |   1 → 0 | `addCount(long, int)` | `java.util.concurrent.ConcurrentHashMap` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change |  Delta |              % |         Size | Objects | Callee                  | Location                                                                                 |
| ------: | -----: | -------------: | -----------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| removed | -512 B |   52.0% → 0.0% |  512 B → 0 B |   3 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
|  -84.9% | -496 B | 59.3% → 100.0% | 584 B → 88 B |   4 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |  Delta |             % |        Size | Objects | Callee     | Location                                                                             |
| ------: | -----: | ------------: | ----------: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| removed | -152 B |  67.9% → 0.0% | 152 B → 0 B |   2 → 0 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x0000008001775fe8`           |
| removed |  -72 B |  32.1% → 0.0% |  72 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000008001631b48` |
|     new |  +32 B | 0.0% → 100.0% |  0 B → 32 B |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x00000078013edac0` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change | Delta |            % |       Size | Objects | Callee                              | Location           |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------------- | ------------------ |
| removed | -96 B | 44.4% → 0.0% | 96 B → 0 B |   2 → 0 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`)

| Change |        Delta |      % |                Size | Objects | Callee                 | Location                                                                                                        |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| -10.6% | -142.554 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   8 → 9 | `invoke(Object, Void)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2` |

##### `getPackageParts(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

| Change |        Delta |      % |                Size | Objects | Callee                     | Location                                               |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| -10.6% | -142.554 KiB | 100.0% | 1.32 MiB → 1.18 MiB |   8 → 9 | `getValue(Object, Object)` | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache` |

# Lock contention profile diff

Blocked 485.3ms → 526.0ms (+40.76ms, +8.4%) over 2 contentions → 3 contentions (242.6ms → 175.3ms per contention).

| Category         | Change |    Delta |      % |              Time | Contentions |
| ---------------- | -----: | -------: | -----: | ----------------: | ----------: |
| Standard library |  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |    Delta |      % |              Time | Contentions | Function              | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |    Delta |      % |              Time | Contentions | Caller                    | Location                                 |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Regressions

Functions with the largest increase in time blocked within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Standard library

| Change |    Delta |      % |              Time | Contentions | Function                    | Location                                                                |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ----------------------------------------------------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `park(boolean, long)`       | `jdk.internal.misc.Unsafe`                                              |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `parkNanos(Object, long)`   | `java.util.concurrent.locks.LockSupport`                                |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `await(long, TimeUnit)`     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `await(long)`               | `java.lang.ref.ReferenceQueue`                                          |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `remove0(long)`             | `java.lang.ref.ReferenceQueue`                                          |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `remove(long)`              | `java.lang.ref.ReferenceQueue`                                          |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `run()`                     | `jdk.internal.ref.CleanerImpl`                                          |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `runWith(Object, Runnable)` | `java.lang.Thread`                                                      |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `run()`                     | `java.lang.Thread`                                                      |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `run()`                     | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |    Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |    Delta |      % |              Time | Contentions | Callee                    | Location                                 |
| -----: | -------: | -----: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |    Delta |      % |              Time | Contentions | Callee                  | Location                                                                |
| -----: | -------: | -----: | ----------------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |    Delta |      % |              Time | Contentions | Callee        | Location                       |
| -----: | -------: | -----: | ----------------: | ----------: | ------------- | ------------------------------ |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |    Delta |      % |              Time | Contentions | Callee          | Location                       |
| -----: | -------: | -----: | ----------------: | ----------: | --------------- | ------------------------------ |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |    Delta |      % |              Time | Contentions | Callee         | Location                       |
| -----: | -------: | -----: | ----------------: | ----------: | -------------- | ------------------------------ |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |    Delta |      % |              Time | Contentions | Callee  | Location                       |
| -----: | -------: | -----: | ----------------: | ----------: | ------- | ------------------------------ |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

| Change |    Delta |      % |              Time | Contentions | Callee                      | Location           |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------------- | ------------------ |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change |    Delta |      % |              Time | Contentions | Callee  | Location           |
| -----: | -------: | -----: | ----------------: | ----------: | ------- | ------------------ |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `run()` | `java.lang.Thread` |
