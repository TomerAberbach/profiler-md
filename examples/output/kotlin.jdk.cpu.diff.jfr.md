# Sampling profile diff

Collected 92 samples → 108 samples (+16 samples, +17.4%).

| Category         | Change | Delta |             % | Samples |
| ---------------- | -----: | ----: | ------------: | ------: |
| Standard library | +33.3% |   +14 | 45.7% → 51.9% | 42 → 56 |
| Ours             |  +4.0% |    +2 | 54.3% → 48.1% | 50 → 52 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

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

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % | Samples | Function                                                                                           | Location                                                        |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|    new |   +40 |  0.0% → 37.0% |  0 → 40 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`            |
|    new |   +39 |  0.0% → 36.1% |  0 → 39 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007801010000`             |
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
| +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                              |
| +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`         |
| +21.4% |    +6 | 30.4% → 31.5% | 28 → 34 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                   |

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
|     new |   +40 |  0.0% → 37.0% |  0 → 40 | `invokeStatic(Object, Object)`                                      | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`    |
|     new |   +39 |  0.0% → 36.1% |  0 → 39 | `invoke(Object, Object, Object)`                                    | `java.lang.invoke.LambdaForm$MH.0x0000007801010000`     |
|  +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflateBytesBytes(long, byte[], int, int, byte[], int, int)`       | `java.util.zip.Inflater`                                |
|  +29.2% |    +7 | 26.1% → 28.7% | 24 → 31 | `inflate(byte[], int, int)`                                         | `java.util.zip.Inflater`                                |
|  +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[], int, int)`                                            | `java.util.zip.InflaterInputStream`                     |
|  +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[], int, int)`                                            | `java.util.zip.ZipInputStream`                          |
|  +25.0% |    +6 | 26.1% → 27.8% | 24 → 30 | `read(byte[])`                                                      | `java.io.FilterInputStream`                             |
|  +18.2% |    +6 | 35.9% → 36.1% | 33 → 39 | `invokeExact_MT(Object, Object, Object, Object)`                    | `java.lang.invoke.Invokers$Holder`                      |
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

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                                                                           | Location                                                                                                                  |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| removed |   -34 |  37.0% → 0.0% |  34 → 0 | `invokeStatic(Object, Object)`                                                                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000008001001c00`                                                                      |
| removed |   -34 |  37.0% → 0.0% |  34 → 0 | `invoke(Object, Object, Object)`                                                                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000008001010000`                                                                       |
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

|  Change | Delta |            % | Samples | Function                                                                        | Location                                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| removed |   -34 | 37.0% → 0.0% |  34 → 0 | `invokeStatic(Object, Object)`                                                  | `java.lang.invoke.LambdaForm$DMH.0x0000008001001c00`                                                    |
| removed |   -34 | 37.0% → 0.0% |  34 → 0 | `invoke(Object, Object, Object)`                                                | `java.lang.invoke.LambdaForm$MH.0x0000008001010000`                                                     |
| removed |    -5 |  5.4% → 0.0% |   5 → 0 | `getValue()`                                                                    | `kotlin.UnsafeLazyImpl`                                                                                 |
|  -50.0% |    -2 |  4.3% → 1.9% |   4 → 2 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                                                                           |
| removed |    -2 |  2.2% → 0.0% |   2 → 0 | `firstOrNull(Sequence)`                                                         | `kotlin.sequences.SequencesKt___SequencesKt`                                                            |
|  -66.7% |    -2 |  3.3% → 0.9% |   3 → 1 | `newInvokeSpecial(Object, Object)`                                              | `java.lang.invoke.DirectMethodHandle$Holder`                                                            |
|  -66.7% |    -2 |  3.3% → 0.9% |   3 → 1 | `linkToTargetMethod(Object, Object)`                                            | `java.lang.invoke.Invokers$Holder`                                                                      |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `clone()`                                                                       | `java.lang.Object`                                                                                      |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                                                      |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `toByteArray()`                                                                 | `java.io.ByteArrayOutputStream`                                                                         |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int)`                                         | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `loadClass(String, boolean)`                                                    | `java.lang.ClassLoader`                                                                                 |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `withNext(Object)`                                                              | `kotlinx.collections.immutable.implementations.persistentOrderedMap.LinkedValue`                        |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `put(Object, Object)`                                                           | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap`               |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `hasNext()`                                                                     | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapLinksIterator`  |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `hasNext()`                                                                     | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValuesIterator` |
| removed |    -1 |  1.1% → 0.0% |   1 → 0 | `firstOrNull(Iterable)`                                                         | `kotlin.collections.CollectionsKt___CollectionsKt`                                                      |
|  -50.0% |    -1 |  2.2% → 0.9% |   2 → 1 | `next()`                                                                        | `kotlin.sequences.TransformingSequence$iterator$1`                                                      |

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

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

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
|     new | +1,021.992 KiB |  0.0% → 0.1% |      0 B → 1022 KiB |     0 → 2 | `subList(int, int)`                                       | `java.util.AbstractList`                                      |
| +200.0% | +1,021.976 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `singletonList(Object)`                                   | `java.util.Collections`                                       |
| +200.0% | +1,021.945 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |     1 → 3 | `addConstantUtf8Reference(int, String)`                   | `jdk.internal.org.objectweb.asm.SymbolTable`                  |
|     new | +1,021.929 KiB |  0.0% → 0.1% |      0 B → 1022 KiB |     0 → 2 | `descriptorString()`                                      | `java.lang.Class`                                             |
|     new | +1,013.914 KiB |  0.0% → 0.1% |      0 B → 1014 KiB |     0 → 2 | `read(ByteBuffer)`                                        | `java.nio.channels.Channels$ReadableByteChannelImpl`          |
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
|     new |     +1,022 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                    |
|     new |     +1,022 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `IrSimpleTypeImpl(IrClassifierSymbol, SimpleTypeNullability, List, List, KotlinType)`      | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt`                   |
|     new | +1,021.992 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `traverseIds(int)`                                                                         | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`          |
|     new | +1,021.992 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `getArgumentTypes(String)`                                                                 | `org.jetbrains.org.objectweb.asm.Type`                                    |
|     new | +1,021.984 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `internalNameByClassId(ClassId)`                                                           | `org.jetbrains.kotlin.resolve.jvm.JvmClassName`                           |
|     new | +1,021.984 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 1 | `processInlineFunFinallyBlocks(MethodNode, int, int, boolean)`                             | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner`         |
| +100.0% | +1,021.968 KiB | 0.1% → 0.3% |    1022 KiB → 2 MiB |   2 → 4 | `create()`                                                                                 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                 |
|     new | +1,021.968 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `create()`                                                                                 | `org.jetbrains.kotlin.utils.SmartSet$Companion`                           |
|     new |  +1,021.96 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `visitInsn(int)`                                                                           | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                         |
|     new | +1,021.953 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record$1` |
|     new | +1,021.953 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`                |
| +200.0% | +1,021.945 KiB | 0.1% → 0.2% |   511 KiB → 1.5 MiB |   1 → 3 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                 |
|     new | +1,021.945 KiB | 0.0% → 0.1% |      0 B → 1022 KiB |   0 → 2 | `findMergeNodes(MethodNode)`                                                               | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer$Companion` |
|  +66.7% | +1,021.937 KiB | 0.2% → 0.4% |   1.5 MiB → 2.5 MiB |   3 → 5 | `newFieldMap(int)`                                                                         | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |             % |                Size |   Samples | Function                                                            | Location                                                                                           |
| ------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -65.515 MiB |   9.6% → 0.0% |      65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                                            | `java.util.zip.ZipFile$Source`                                                                     |
|  -25.1% | -65.363 MiB | 38.0% → 28.5% |   260 MiB → 195 MiB | 102 → 108 | `copyOf(byte[], int)`                                               | `java.util.Arrays`                                                                                 |
|  -50.8% |  -9.549 MiB |   2.7% → 1.4% | 18.8 MiB → 9.24 MiB |   41 → 23 | `iterator()`                                                        | `java.util.ArrayList`                                                                              |
|  -71.4% |  -4.988 MiB |   1.0% → 0.3% | 6.98 MiB → 1.99 MiB |    14 → 4 | `copyOf(Object[], int)`                                             | `java.util.Arrays`                                                                                 |
|  -54.5% |   -4.55 MiB |   1.2% → 0.6% | 8.36 MiB → 3.81 MiB |    16 → 8 | `grow(int)`                                                         | `java.util.ArrayList`                                                                              |
|  -23.8% |  -3.888 MiB |   2.4% → 1.8% | 16.4 MiB → 12.5 MiB |   33 → 25 | `<init>(int)`                                                       | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
|  -54.5% |  -2.994 MiB |   0.8% → 0.4% |  5.49 MiB → 2.5 MiB |    11 → 5 | `box-impl(List)`                                                    | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
| removed |  -2.652 MiB |   0.4% → 0.0% |      2.65 MiB → 0 B |     5 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                     | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
|  -50.4% |  -2.537 MiB |   0.7% → 0.4% |  5.03 MiB → 2.5 MiB |    11 → 5 | `newNode(int, Object, Object, HashMap$Node)`                        | `java.util.LinkedHashMap`                                                                          |
|  -67.1% |  -2.035 MiB |   0.4% → 0.1% | 3.03 MiB → 1022 KiB |     7 → 2 | `copyOf(Object[], int, Class)`                                      | `java.util.Arrays`                                                                                 |
|  -80.3% |  -2.021 MiB |   0.4% → 0.1% |  2.52 MiB → 509 KiB |     6 → 1 | `<init>(InputStream, Inflater, int)`                                | `java.util.zip.InflaterInputStream`                                                                |
|  -52.2% |  -1.822 MiB |   0.5% → 0.2% | 3.49 MiB → 1.67 MiB |     7 → 4 | `ensureCapacity()`                                                  | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -35.5% |   -1.59 MiB |   0.7% → 0.4% |  4.49 MiB → 2.9 MiB |     9 → 6 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`         | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|  -75.0% |  -1.497 MiB |   0.3% → 0.1% |     2 MiB → 511 KiB |     4 → 1 | `topLevel(FqName)`                                                  | `org.jetbrains.kotlin.name.ClassId$Companion`                                                      |
| removed |  -1.497 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `sequencedEntrySet()`                                               | `java.util.LinkedHashMap`                                                                          |
|  -42.9% |  -1.497 MiB |   0.5% → 0.3% |    3.49 MiB → 2 MiB |     7 → 4 | `simplifyTrivialInstructions(MethodNode)`                           | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -75.0% |  -1.497 MiB |   0.3% → 0.1% |     2 MiB → 511 KiB |     4 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                              |
| removed |  -1.496 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `getBytes(int, int)`                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
|  -59.4% |   -1.46 MiB |   0.4% → 0.1% | 2.46 MiB → 1022 KiB |     5 → 2 | `replace(byte[], char, char)`                                       | `java.lang.StringLatin1`                                                                           |
|  -53.7% |  -1.155 MiB |   0.3% → 0.1% | 2.15 MiB → 1022 KiB |     5 → 1 | `stringFromByteBuffer(ByteBuffer, int)`                             | `jdk.internal.jimage.ImageStringsReader`                                                           |

##### Standard library

|  Change |          Delta |             % |                Size |   Samples | Function                                     | Location                                                                                   |
| ------: | -------------: | ------------: | ------------------: | --------: | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed |    -65.515 MiB |   9.6% → 0.0% |      65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                     | `java.util.zip.ZipFile$Source`                                                             |
|  -25.1% |    -65.363 MiB | 38.0% → 28.5% |   260 MiB → 195 MiB | 102 → 108 | `copyOf(byte[], int)`                        | `java.util.Arrays`                                                                         |
|  -50.8% |     -9.549 MiB |   2.7% → 1.4% | 18.8 MiB → 9.24 MiB |   41 → 23 | `iterator()`                                 | `java.util.ArrayList`                                                                      |
|  -71.4% |     -4.988 MiB |   1.0% → 0.3% | 6.98 MiB → 1.99 MiB |    14 → 4 | `copyOf(Object[], int)`                      | `java.util.Arrays`                                                                         |
|  -54.5% |      -4.55 MiB |   1.2% → 0.6% | 8.36 MiB → 3.81 MiB |    16 → 8 | `grow(int)`                                  | `java.util.ArrayList`                                                                      |
|  -50.4% |     -2.537 MiB |   0.7% → 0.4% |  5.03 MiB → 2.5 MiB |    11 → 5 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap`                                                                  |
|  -67.1% |     -2.035 MiB |   0.4% → 0.1% | 3.03 MiB → 1022 KiB |     7 → 2 | `copyOf(Object[], int, Class)`               | `java.util.Arrays`                                                                         |
|  -80.3% |     -2.021 MiB |   0.4% → 0.1% |  2.52 MiB → 509 KiB |     6 → 1 | `<init>(InputStream, Inflater, int)`         | `java.util.zip.InflaterInputStream`                                                        |
| removed |     -1.497 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `sequencedEntrySet()`                        | `java.util.LinkedHashMap`                                                                  |
|  -59.4% |      -1.46 MiB |   0.4% → 0.1% | 2.46 MiB → 1022 KiB |     5 → 2 | `replace(byte[], char, char)`                | `java.lang.StringLatin1`                                                                   |
|  -53.7% |     -1.155 MiB |   0.3% → 0.1% | 2.15 MiB → 1022 KiB |     5 → 1 | `stringFromByteBuffer(ByteBuffer, int)`      | `jdk.internal.jimage.ImageStringsReader`                                                   |
|  -41.5% |      -1.06 MiB |   0.4% → 0.2% |  2.56 MiB → 1.5 MiB |     5 → 3 | `toString()`                                 | `java.lang.StringBuilder`                                                                  |
|  -33.4% | -1,022.031 KiB |   0.4% → 0.3% | 2.99 MiB → 1.99 MiB |     6 → 4 | `enlarge(int)`                               | `jdk.internal.org.objectweb.asm.ByteVector`                                                |
| removed | -1,021.992 KiB |   0.1% → 0.0% |      1022 KiB → 0 B |     2 → 0 | `listIterator(int)`                          | `kotlin.collections.builders.ListBuilder`                                                  |
| removed | -1,021.984 KiB |   0.1% → 0.0% |      1022 KiB → 0 B |     2 → 0 | `lazy(Function0)`                            | `kotlin.LazyKt__LazyJVMKt`                                                                 |
| removed |  -1,021.96 KiB |   0.1% → 0.0% |      1022 KiB → 0 B |     1 → 0 | `in(Class)`                                  | `java.lang.invoke.MethodHandles$Lookup`                                                    |
|  -50.0% | -1,021.953 KiB |   0.3% → 0.1% |    2 MiB → 1022 KiB |     3 → 2 | `allocateInstance(Object)`                   | `java.lang.invoke.DirectMethodHandle`                                                      |
| removed | -1,021.953 KiB |   0.1% → 0.0% |      1022 KiB → 0 B |     2 → 0 | `<init>(TrieNode)`                           | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator` |
|  -40.0% | -1,021.914 KiB |   0.4% → 0.2% |  2.49 MiB → 1.5 MiB |     5 → 3 | `arrayOfUninitializedElements(int)`          | `kotlin.collections.builders.ListBuilderKt`                                                |
|  -99.7% |  -1,019.32 KiB |  0.1% → <0.1% | 1022 KiB → 2.61 KiB |     2 → 1 | `<init>()`                                   | `jdk.internal.org.objectweb.asm.ByteVector`                                                |

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
| removed | -1,022.007 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   2 → 0 | `substituteArguments(ConeSimpleKotlinType)`                                                 | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`                            |
|  -50.0% |     -1,022 KiB | 0.3% → 0.1% |    2 MiB → 1022 KiB |   4 → 2 | `identifier(String)`                                                                        | `org.jetbrains.kotlin.name.Name`                                                                   |
| removed |     -1,022 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   1 → 0 | `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                           |
|  -66.7% |     -1,022 KiB | 0.2% → 0.1% |   1.5 MiB → 511 KiB |   3 → 1 | `requestGroup(TowerGroup, Continuation)`                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                 |
| removed |     -1,022 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   2 → 0 | `getModifiers()`                                                                            | `org.jetbrains.kotlin.fir.analysis.checkers.FirModifierList$FirLightModifierList`                  |
| removed | -1,021.992 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`                                           |
| removed | -1,021.976 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   1 → 0 | `getLabelNode(Label)`                                                                       | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed | -1,021.968 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   1 → 0 | `<init>(KtSourceElement)`                                                                   | `org.jetbrains.kotlin.fir.types.impl.FirTypeArgumentListImpl`                                      |
| removed |  -1,021.96 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   2 → 0 | `<init>()`                                                                                  | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                        |
| removed |  -1,021.96 KiB | 0.1% → 0.0% |      1022 KiB → 0 B |   2 → 0 | `visitLineNumber(int, Label)`                                                               | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |        Delta |             % |                Size |   Samples | Function                                                                                           | Location                                                |
| --------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|       new | +187.352 MiB |  0.0% → 27.4% |       0 B → 187 MiB |   0 → 259 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00`    |
|       new | +185.356 MiB |  0.0% → 27.1% |       0 B → 185 MiB |   0 → 255 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000007801010000`     |
|   +433.0% |  +70.909 MiB |  2.4% → 12.8% | 16.4 MiB → 87.3 MiB |   33 → 53 | `copyOfRange(byte[], int, int)`                                                                    | `java.util.Arrays`                                      |
|   +152.7% |  +70.343 MiB |  6.7% → 17.0% |  46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`                                                                                      | `java.io.ByteArrayOutputStream`                         |
|   +517.7% |   +69.39 MiB |  2.0% → 12.1% | 13.4 MiB → 82.8 MiB |   27 → 44 | `copyOfRangeByte(byte[], int, int)`                                                                | `java.util.Arrays`                                      |
|   +901.0% |  +67.042 MiB |  1.1% → 10.9% | 7.44 MiB → 74.5 MiB |   15 → 26 | `newString(byte[], int, int)`                                                                      | `java.lang.StringLatin1`                                |
|  +1119.5% |  +66.543 MiB |  0.9% → 10.6% | 5.94 MiB → 72.5 MiB |   12 → 22 | `substring(int, int)`                                                                              | `java.lang.String`                                      |
|    +46.8% |  +61.821 MiB | 19.3% → 28.4% |   132 MiB → 194 MiB | 271 → 273 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
|    +46.4% |  +61.818 MiB | 19.5% → 28.5% |   133 MiB → 195 MiB | 273 → 275 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +30429.6% |  +61.315 MiB |  <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])`                              | `sun.reflect.annotation.AnnotationParser`               |
| +30429.6% |  +61.315 MiB |  <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`                                          | `sun.reflect.annotation.AnnotationParser`               |
| +30429.6% |  +61.315 MiB |  <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations(byte[], ConstantPool, Class)`                                                    | `sun.reflect.annotation.AnnotationParser`               |
|    +44.1% |  +61.127 MiB | 20.3% → 29.2% |   139 MiB → 200 MiB | 285 → 284 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`           |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `getAbstractTypeFromDescriptor(SymbolTable, String, int)`                                          | `jdk.internal.org.objectweb.asm.Frame`                  |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `setInputFrameFromDescriptor(SymbolTable, int, String, int)`                                       | `jdk.internal.org.objectweb.asm.Frame`                  |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `computeAllFrames()`                                                                               | `jdk.internal.org.objectweb.asm.MethodWriter`           |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `visitMaxs(int, int)`                                                                              | `jdk.internal.org.objectweb.asm.MethodWriter`           |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `generateConstructor()`                                                                            | `java.lang.reflect.ProxyGenerator`                      |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `run()`                                                                                            | `sun.reflect.annotation.AnnotationParser$1`             |
|       new |  +61.017 MiB |   0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `doPrivileged(PrivilegedAction)`                                                                   | `java.security.AccessController`                        |

##### Standard library

|    Change |        Delta |            % |                Size |   Samples | Function                                                              | Location                                             |
| --------: | -----------: | -----------: | ------------------: | --------: | --------------------------------------------------------------------- | ---------------------------------------------------- |
|       new | +187.352 MiB | 0.0% → 27.4% |       0 B → 187 MiB |   0 → 259 | `invokeStatic(Object, Object)`                                        | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
|       new | +185.356 MiB | 0.0% → 27.1% |       0 B → 185 MiB |   0 → 255 | `invoke(Object, Object, Object)`                                      | `java.lang.invoke.LambdaForm$MH.0x0000007801010000`  |
|   +433.0% |  +70.909 MiB | 2.4% → 12.8% | 16.4 MiB → 87.3 MiB |   33 → 53 | `copyOfRange(byte[], int, int)`                                       | `java.util.Arrays`                                   |
|   +152.7% |  +70.343 MiB | 6.7% → 17.0% |  46.1 MiB → 116 MiB | 115 → 107 | `<init>(int)`                                                         | `java.io.ByteArrayOutputStream`                      |
|   +517.7% |   +69.39 MiB | 2.0% → 12.1% | 13.4 MiB → 82.8 MiB |   27 → 44 | `copyOfRangeByte(byte[], int, int)`                                   | `java.util.Arrays`                                   |
|   +901.0% |  +67.042 MiB | 1.1% → 10.9% | 7.44 MiB → 74.5 MiB |   15 → 26 | `newString(byte[], int, int)`                                         | `java.lang.StringLatin1`                             |
|  +1119.5% |  +66.543 MiB | 0.9% → 10.6% | 5.94 MiB → 72.5 MiB |   12 → 22 | `substring(int, int)`                                                 | `java.lang.String`                                   |
| +30429.6% |  +61.315 MiB | <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser`            |
| +30429.6% |  +61.315 MiB | <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])`             | `sun.reflect.annotation.AnnotationParser`            |
| +30429.6% |  +61.315 MiB | <0.1% → 9.0% |  206 KiB → 61.5 MiB |     1 → 3 | `parseAnnotations(byte[], ConstantPool, Class)`                       | `sun.reflect.annotation.AnnotationParser`            |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `getAbstractTypeFromDescriptor(SymbolTable, String, int)`             | `jdk.internal.org.objectweb.asm.Frame`               |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `setInputFrameFromDescriptor(SymbolTable, int, String, int)`          | `jdk.internal.org.objectweb.asm.Frame`               |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `computeAllFrames()`                                                  | `jdk.internal.org.objectweb.asm.MethodWriter`        |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `visitMaxs(int, int)`                                                 | `jdk.internal.org.objectweb.asm.MethodWriter`        |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `generateConstructor()`                                               | `java.lang.reflect.ProxyGenerator`                   |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `run()`                                                               | `sun.reflect.annotation.AnnotationParser$1`          |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `doPrivileged(PrivilegedAction)`                                      | `java.security.AccessController`                     |
|       new |  +61.017 MiB |  0.0% → 8.9% |        0 B → 61 MiB |     0 → 1 | `annotationForMap(Class, Map)`                                        | `sun.reflect.annotation.AnnotationParser`            |
| +30181.6% |  +60.815 MiB | <0.1% → 8.9% |    206 KiB → 61 MiB |         1 | `declaredAnnotations()`                                               | `java.lang.reflect.Field`                            |
| +30181.6% |  +60.815 MiB | <0.1% → 8.9% |    206 KiB → 61 MiB |         1 | `getAnnotation(Class)`                                                | `java.lang.reflect.Field`                            |

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

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |               Size |   Samples | Function                                               | Location                                                 |
| ------: | -----------: | ------------: | -----------------: | --------: | ------------------------------------------------------ | -------------------------------------------------------- |
| removed | -186.758 MiB |  27.3% → 0.0% |      187 MiB → 0 B |   252 → 0 | `invokeStatic(Object, Object)`                         | `java.lang.invoke.LambdaForm$DMH.0x0000008001001c00`     |
| removed |  -185.76 MiB |  27.2% → 0.0% |      186 MiB → 0 B |   250 → 0 | `invoke(Object, Object, Object)`                       | `java.lang.invoke.LambdaForm$MH.0x0000008001010000`      |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `getLoader(int)`                                       | `jdk.internal.loader.URLClassPath`                       |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String, boolean)`                        | `jdk.internal.loader.URLClassPath`                       |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `run()`                                                | `java.net.URLClassLoader$2`                              |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)` | `java.security.AccessController`                         |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String)`                                 | `java.net.URLClassLoader`                                |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `<init>()`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler`            |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `<init>()`                                             | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`             |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                               | `java.util.zip.ZipFile$Source`                           |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`        | `java.util.zip.ZipFile$Source`                           |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `get(File, boolean, ZipCoder)`                         | `java.util.zip.ZipFile$Source`                           |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                 | `java.util.zip.ZipFile$CleanableResource`                |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int, Charset)`                           | `java.util.zip.ZipFile`                                  |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int)`                                    | `java.util.zip.ZipFile`                                  |
|  -24.4% |  -65.362 MiB | 39.2% → 29.7% |  268 MiB → 203 MiB | 128 → 134 | `copyOf(byte[], int)`                                  | `java.util.Arrays`                                       |
|  -99.2% |  -65.056 MiB |   9.6% → 0.1% | 65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                  | `java.lang.ClassLoader`                                  |
|  -99.2% |  -65.056 MiB |   9.6% → 0.1% | 65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                  | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `<init>(File, boolean, int, Runtime$Version)`          | `java.util.jar.JarFile`                                  |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `getJarFile(URL)`                                      | `jdk.internal.loader.URLClassPath$JarLoader`             |

##### Standard library

|  Change |        Delta |             % |               Size |   Samples | Function                                                       | Location                                             |
| ------: | -----------: | ------------: | -----------------: | --------: | -------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -186.758 MiB |  27.3% → 0.0% |      187 MiB → 0 B |   252 → 0 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000008001001c00` |
| removed |  -185.76 MiB |  27.2% → 0.0% |      186 MiB → 0 B |   250 → 0 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000008001010000`  |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `getLoader(int)`                                               | `jdk.internal.loader.URLClassPath`                   |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String, boolean)`                                | `jdk.internal.loader.URLClassPath`                   |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `run()`                                                        | `java.net.URLClassLoader$2`                          |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)`         | `java.security.AccessController`                     |
| removed |  -65.555 MiB |   9.6% → 0.0% |     65.6 MiB → 0 B |     3 → 0 | `findResource(String)`                                         | `java.net.URLClassLoader`                            |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                                       | `java.util.zip.ZipFile$Source`                       |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                | `java.util.zip.ZipFile$Source`                       |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `get(File, boolean, ZipCoder)`                                 | `java.util.zip.ZipFile$Source`                       |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                         | `java.util.zip.ZipFile$CleanableResource`            |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int, Charset)`                                   | `java.util.zip.ZipFile`                              |
| removed |  -65.515 MiB |   9.6% → 0.0% |     65.5 MiB → 0 B |     2 → 0 | `<init>(File, int)`                                            | `java.util.zip.ZipFile`                              |
|  -24.4% |  -65.362 MiB | 39.2% → 29.7% |  268 MiB → 203 MiB | 128 → 134 | `copyOf(byte[], int)`                                          | `java.util.Arrays`                                   |
|  -99.2% |  -65.056 MiB |   9.6% → 0.1% | 65.6 MiB → 511 KiB |     3 → 1 | `getResource(String)`                                          | `java.lang.ClassLoader`                              |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `<init>(File, boolean, int, Runtime$Version)`                  | `java.util.jar.JarFile`                              |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `getJarFile(URL)`                                              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `run()`                                                        | `jdk.internal.loader.URLClassPath$JarLoader$1`       |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `ensureOpen()`                                                 | `jdk.internal.loader.URLClassPath$JarLoader`         |
| removed |  -65.041 MiB |   9.5% → 0.0% |       65 MiB → 0 B |     1 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader`         |

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

# Retained heap profile diff

Retained 18.3 MiB → 18.2 MiB (-117.484 KiB, -0.6%) over 194 objects (96.7 KiB → 96.1 KiB per object).

| Category         | Change |       Delta |             % |                Size |   Objects |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------: |
| Standard library |  -0.4% | -68.492 KiB | 93.7% → 93.9% | 17.2 MiB → 17.1 MiB | 183 → 182 |
| Ours             |  -4.1% | -48.992 KiB |   6.3% → 6.1% | 1.16 MiB → 1.11 MiB |   11 → 12 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

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

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

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

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Standard library

| Change |        Delta |             % |                Size | Objects | Function                                                                    | Location                                             |
| -----: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new |   +3.865 MiB |  0.0% → 21.2% |      0 B → 3.87 MiB |  0 → 17 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x0000007801001c00` |
|    new |   +3.865 MiB |  0.0% → 21.2% |      0 B → 3.87 MiB |  0 → 17 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x0000007801010000`  |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                       |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                       |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                       |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`            |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                              |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                              |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                              |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1`       |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`                 |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getLoader(URL)`                                                            | `jdk.internal.loader.URLClassPath`                   |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `getLoader(int)`                                                            | `jdk.internal.loader.URLClassPath`                   |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `findResource(String, boolean)`                                             | `jdk.internal.loader.URLClassPath`                   |
| +17.3% | +583.265 KiB | 18.0% → 21.2% | 3.29 MiB → 3.86 MiB |   2 → 4 | `run()`                                                                     | `java.net.URLClassLoader$2`                          |

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

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                                                                                  | Location                                                                                       |
| ------: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |   -3.327 MiB |  18.2% → 0.0% |      3.33 MiB → 0 B |     9 → 0 | `invokeStatic(Object, Object)`                                                                                                                            | `java.lang.invoke.LambdaForm$DMH.0x0000008001001c00`                                           |
| removed |   -3.327 MiB |  18.2% → 0.0% |      3.33 MiB → 0 B |     9 → 0 | `invoke(Object, Object, Object)`                                                                                                                          | `java.lang.invoke.LambdaForm$MH.0x0000008001010000`                                            |
|   -3.8% | -524.789 KiB | 73.3% → 70.9% | 13.4 MiB → 12.9 MiB | 166 → 163 | `copyOf(byte[], int)`                                                                                                                                     | `java.util.Arrays`                                                                             |
|   -3.8% | -524.789 KiB | 73.3% → 70.9% | 13.4 MiB → 12.9 MiB | 166 → 163 | `toByteArray()`                                                                                                                                           | `java.io.ByteArrayOutputStream`                                                                |
|   -3.7% | -524.789 KiB | 74.7% → 72.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                   | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                         |
|   -3.7% | -524.789 KiB | 74.7% → 72.3% | 13.7 MiB → 13.2 MiB | 167 → 164 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                              | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                         |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)`                                                                                                   | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                              |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `invoke()`                                                                                                                                                | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000078015edab0`   |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                                                          | `org.jetbrains.kotlin.util.PerformanceManager`                                                 |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)`                                                                                        | `org.jetbrains.kotlin.util.PerformanceManagerKt`                                               |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                              |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                            |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `compute()`                                                                                                                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000078015ec038` |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `runReadAction(Computable)`                                                                                                                               | `com.intellij.mock.MockApplication`                                                            |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                                        | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                            |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                            |
|  -10.6% | -142.804 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     9 → 7 | `findKotlinClassOrContent(ClassId, MetadataVersion)`                                                                                                      | `org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`                                           |
|  -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `computePackagePartInfo(FqName, String)`                                                                                                                  | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                |
|  -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `computePackagePartsInfos(FqName)`                                                                                                                        | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                |
|  -10.6% | -142.554 KiB |   7.2% → 6.5% | 1.32 MiB → 1.18 MiB |     8 → 9 | `tryComputePackagePartInfos(FqName)`                                                                                                                      | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`               |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                       | Location                                              |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------- | ----------------------------------------------------- |
| removed |   -3.327 MiB |  18.2% → 0.0% |      3.33 MiB → 0 B |     9 → 0 | `invokeStatic(Object, Object)`                                 | `java.lang.invoke.LambdaForm$DMH.0x0000008001001c00`  |
| removed |   -3.327 MiB |  18.2% → 0.0% |      3.33 MiB → 0 B |     9 → 0 | `invoke(Object, Object, Object)`                               | `java.lang.invoke.LambdaForm$MH.0x0000008001010000`   |
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

# Lock contention profile diff

Blocked 485.3ms → 526.0ms (+40.76ms, +8.4%) over 2 contentions → 3 contentions (242.6ms → 175.3ms per contention).

| Category         | Change |    Delta |      % |              Time | Contentions |
| ---------------- | -----: | -------: | -----: | ----------------: | ----------: |
| Standard library |  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |    Delta |      % |              Time | Contentions | Function              | Location                   |
| -----: | -------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
|  +8.4% | +40.76ms | 100.0% | 485.3ms → 526.0ms |       2 → 3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

### Total time

#### Regressions

Functions with the largest increase in total time blocked in the function and all its callees.

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
