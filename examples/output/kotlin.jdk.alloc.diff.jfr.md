# Sampling profile diff

Collected 234 samples → 97 samples (-137 samples, -58.5%).

| Category         | Change | Delta |             % |  Samples |
| ---------------- | -----: | ----: | ------------: | -------: |
| Standard library | -48.0% |   -47 | 41.9% → 52.6% |  98 → 51 |
| Ours             | -66.2% |   -90 | 58.1% → 47.4% | 136 → 46 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                                                                                                                                           | Location                                                                                            |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| +100.0% |    +1 | 0.4% → 2.1% |   1 → 2 | `readBytes(byte[], int, int)`                                                                                                                                                                                      | `java.io.FileInputStream`                                                                           |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `mark()`                                                                                                                                                                                                           | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                            |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                     |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(Map, List, KotlinTypeMarker, VariableFixationFinder$Context, LanguageVersionSettings)`                                                                                                                     | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `contains(ConeKotlinType, Function1, SmartSet)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                                                    |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `getResolvedAnnotationsWithClassIds()`                                                                                                                                                                             | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                   |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, CheckerContext)`                                                                                                                                                         | `org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent`                   |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitTypeRef(FirTypeRef, Object)`                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                   |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `toConeTypeProjection(JavaType, FirSession, JavaTypeParameterStack, Variance, FirJavaTypeConversionMode, KtSourceElement, Collection)`                                                                             | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`                                                |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                                                                   | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                     |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `toIrBasedKotlinType(IrType, KotlinBuiltIns)`                                                                                                                                                                      | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                                          |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `analyze()`                                                                                                                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`                      |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `nextNode()`                                                                                                                                                                                                       | `java.util.HashMap$HashIterator`                                                                    |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `put11(int, int)`                                                                                                                                                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                                                         |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `getChildNodesByType(LighterASTNode, IElementType)`                                                                                                                                                                | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`                       |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `stringsToBytes(String[])`                                                                                                                                                                                         | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`                                   |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `getOwnTypeParameters()`                                                                                                                                                                                           | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                      |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(DefaultConstructorMarker)`                                                                                                                                                                                 | `org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintPosition`                             |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>()`                                                                                                                                                                                                         | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                       |

##### Ours

| Change | Delta |           % | Samples | Function                                                                                                                                                                                                           | Location                                                                                            |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `mark()`                                                                                                                                                                                                           | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                            |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)`                                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                     |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(Map, List, KotlinTypeMarker, VariableFixationFinder$Context, LanguageVersionSettings)`                                                                                                                     | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `contains(ConeKotlinType, Function1, SmartSet)`                                                                                                                                                                    | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`                                                    |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `getResolvedAnnotationsWithClassIds()`                                                                                                                                                                             | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`                                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, CheckerContext)`                                                                                                                                                         | `org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent`                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `visitTypeRef(FirTypeRef, Object)`                                                                                                                                                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `toConeTypeProjection(JavaType, FirSession, JavaTypeParameterStack, Variance, FirJavaTypeConversionMode, KtSourceElement, Collection)`                                                                             | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`                                                |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                                                                   | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                     |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `toIrBasedKotlinType(IrType, KotlinBuiltIns)`                                                                                                                                                                      | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                                          |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `analyze()`                                                                                                                                                                                                        | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`                      |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `getChildNodesByType(LighterASTNode, IElementType)`                                                                                                                                                                | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `stringsToBytes(String[])`                                                                                                                                                                                         | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`                                   |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `getOwnTypeParameters()`                                                                                                                                                                                           | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                                      |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>(DefaultConstructorMarker)`                                                                                                                                                                                 | `org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintPosition`                             |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `<init>()`                                                                                                                                                                                                         | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                       |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `isProperTypeForFixation(ResultTypeResolver$Context, KotlinTypeMarker)`                                                                                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`                        |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `getOrderedAllTypeVariables$collectAllTypeVariables(ConeResolutionAtom, LinkedHashSet, ConstraintSystemCompletionContext)`                                                                                         | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`                              |
|    new |    +1 | 0.0% → 1.0% |   0 → 1 | `findClasses(ClassId, Set, Function2)`                                                                                                                                                                             | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                                       |

##### Standard library

|  Change | Delta |           % | Samples | Function                                         | Location                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------ | ------------------------------------------- |
| +100.0% |    +1 | 0.4% → 2.1% |   1 → 2 | `readBytes(byte[], int, int)`                    | `java.io.FileInputStream`                   |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `nextNode()`                                     | `java.util.HashMap$HashIterator`            |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `put11(int, int)`                                | `jdk.internal.org.objectweb.asm.ByteVector` |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `equals(Object, Object)`                         | `java.util.Objects`                         |
|     new |    +1 | 0.0% → 1.0% |   0 → 1 | `siftDownComparable(int, Object, Object[], int)` | `java.util.PriorityQueue`                   |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                                                                    |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -76.5% |   -13 | 7.3% → 4.1% |  17 → 4 | `throwParameterIsNullNPE(String)`                                                             | `kotlin.jvm.internal.Intrinsics`                                                            |
| removed |    -3 | 1.3% → 0.0% |   3 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                                                                     |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `runTasks()`                                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                          |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `unwrapStubTypeVariableConstructor(TypeConstructorMarker)`                                    | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                            |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `allocateInstance(Class)`                                                                     | `jdk.internal.misc.Unsafe`                                                                  |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `extractUpperTypesToCheckIntersectionEmptiness(List)`                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext` |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `getNode(Object)`                                                                             | `java.util.HashMap`                                                                         |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `extractValue(AbstractArrayMapOwner)`                                                         | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                  |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `hasNext()`                                                                                   | `java.util.ArrayList$Itr`                                                                   |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `startsWith(String, int)`                                                                     | `java.lang.String`                                                                          |
|  -12.5% |    -1 | 3.4% → 7.2% |   8 → 7 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)`                           | `jdk.internal.loader.NativeLibraries`                                                       |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `push(int)`                                                                                   | `jdk.internal.org.objectweb.asm.Frame`                                                      |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)`                           | `java.lang.invoke.MethodHandleImpl`                                                         |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                                                        |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `get(Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap`                                                    |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getProtectionDomain(CodeSource)`                                                             | `java.security.SecureClassLoader`                                                           |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `isAncestor(VirtualFile, VirtualFile, boolean)`                                               | `com.intellij.openapi.vfs.VfsUtilCore`                                                      |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `isInitialized()`                                                                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                               |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `binarySearchInArray(Comparable)`                                                             | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                              |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `setField(FieldSet$FieldDescriptorLite, Object)`                                              | `org.jetbrains.kotlin.protobuf.FieldSet`                                                    |

##### Ours

|  Change | Delta |           % | Samples | Function                                                                                          | Location                                                                                    |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `runTasks()`                                                                                      | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                          |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `unwrapStubTypeVariableConstructor(TypeConstructorMarker)`                                        | `org.jetbrains.kotlin.fir.types.ConeTypeContext`                                            |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `extractUpperTypesToCheckIntersectionEmptiness(List)`                                             | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext` |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `extractValue(AbstractArrayMapOwner)`                                                             | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`                  |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `isAncestor(VirtualFile, VirtualFile, boolean)`                                                   | `com.intellij.openapi.vfs.VfsUtilCore`                                                      |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `isInitialized()`                                                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                               |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `binarySearchInArray(Comparable)`                                                                 | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                              |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `setField(FieldSet$FieldDescriptorLite, Object)`                                                  | `org.jetbrains.kotlin.protobuf.FieldSet`                                                    |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Property`                                           |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<clinit>()`                                                                                      | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirValueClassDeclarationChecker`    |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `_atSet(TokenSet)`                                                                                | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                        |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `doParseModifierList(Consumer, TokenSet, KotlinParsing$AnnotationParsingMode, TokenSet, boolean)` | `org.jetbrains.kotlin.parsing.KotlinParsing`                                                |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getTokenType()`                                                                                  | `com.intellij.lang.impl.PsiBuilderAdapter`                                                  |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `balanceWhiteSpaces()`                                                                            | `com.intellij.lang.impl.PsiBuilderImpl`                                                     |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `prepareLightTree()`                                                                              | `com.intellij.lang.impl.PsiBuilderImpl`                                                     |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `convertValueArgument(LighterASTNode)`                                                            | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`             |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `convertCallExpression(LighterASTNode)`                                                           | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`             |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getAsFirStatement(LighterASTNode, String)`                                                       | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`             |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(SemanticWhitespaceAwarePsiBuilder, boolean)`                                              | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing`                                        |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `readSourceFileWithMapping(InputStreamReader)`                                                    | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`                                           |

##### Standard library

|  Change | Delta |           % | Samples | Function                                                                                      | Location                                            |
| ------: | ----: | ----------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------- |
|  -76.5% |   -13 | 7.3% → 4.1% |  17 → 4 | `throwParameterIsNullNPE(String)`                                                             | `kotlin.jvm.internal.Intrinsics`                    |
| removed |    -3 | 1.3% → 0.0% |   3 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`               | `java.lang.ClassLoader`                             |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `allocateInstance(Class)`                                                                     | `jdk.internal.misc.Unsafe`                          |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `getNode(Object)`                                                                             | `java.util.HashMap`                                 |
| removed |    -2 | 0.9% → 0.0% |   2 → 0 | `hasNext()`                                                                                   | `java.util.ArrayList$Itr`                           |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `startsWith(String, int)`                                                                     | `java.lang.String`                                  |
|  -12.5% |    -1 | 3.4% → 7.2% |   8 → 7 | `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)`                           | `jdk.internal.loader.NativeLibraries`               |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `push(int)`                                                                                   | `jdk.internal.org.objectweb.asm.Frame`              |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)`                           | `java.lang.invoke.MethodHandleImpl`                 |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `get(Object)`                                                                                 | `java.util.concurrent.ConcurrentHashMap`            |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `getProtectionDomain(CodeSource)`                                                             | `java.security.SecureClassLoader`                   |
|  -33.3% |    -1 | 1.3% → 2.1% |   3 → 2 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                  |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `grow()`                                                                                      | `java.util.ArrayList`                               |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `implRead()`                                                                                  | `java.io.BufferedInputStream`                       |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `decodeASCII(byte[], int, char[], int, int)`                                                  | `java.lang.System$2`                                |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `<init>(MapBuilder)`                                                                          | `kotlin.collections.builders.MapBuilder$EntriesItr` |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `equals(Object)`                                                                              | `java.lang.String`                                  |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `isThreadCpuTimeSupported()`                                                                  | `sun.management.ThreadImpl`                         |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `checkIndex(int)`                                                                             | `java.nio.Buffer`                                   |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `mark()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:79` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Location                                                     |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver:328` |

##### `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt:98` |

##### `<init>(Map, List, KotlinTypeMarker, VariableFixationFinder$Context, LanguageVersionSettings)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`)

| Change | Delta |             % | Samples | Location                                                                                               |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider:48` |

##### `contains(ConeKotlinType, Function1, SmartSet)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt:104` |

##### `getResolvedAnnotationsWithClassIds()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

| Change | Delta |             % | Samples | Location                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.symbols.FirBasedSymbol:61` |

##### `visitResolvedTypeRef(FirResolvedTypeRef, CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent:139` |

##### `visitTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor:38` |

##### `toConeTypeProjection(JavaType, FirSession, JavaTypeParameterStack, Variance, FirJavaTypeConversionMode, KtSourceElement, Collection)` (`org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`)

| Change | Delta |             % | Samples | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt:98` |

##### `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

| Change | Delta |             % | Samples | Location                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.types.AbstractTypeMapper:89` |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change | Delta |             % | Samples | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:70` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Location                              |
| -----: | ----: | ------------: | ------: | ------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.HashMap$HashIterator:1609` |

##### `put11(int, int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change | Delta |             % | Samples | Location                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:133` |

##### `getChildNodesByType(LighterASTNode, IElementType)` (`org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`)

| Change | Delta |             % | Samples | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder:234` |

##### `stringsToBytes(String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt:64` |

##### `getOwnTypeParameters()` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer:61` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

| Change | Delta |             % | Samples | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:330` |

##### `isProperTypeForFixation(ResultTypeResolver$Context, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

| Change | Delta |             % | Samples | Location                                                                         |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver:535` |

##### `getOrderedAllTypeVariables$collectAllTypeVariables(ConeResolutionAtom, LinkedHashSet, ConstraintSystemCompletionContext)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Location                                                                   |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter:404` |

##### `findClasses(ClassId, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

| Change | Delta |             % | Samples | Location                                                         |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl:88` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |             % | Samples | Location               |
| -----: | ----: | ------------: | ------: | ---------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.Objects:64` |

##### `siftDownComparable(int, Object, Object[], int)` (`java.util.PriorityQueue`)

| Change | Delta |             % | Samples | Location                      |
| -----: | ----: | ------------: | ------: | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `java.util.PriorityQueue:685` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Location                             |
| -----: | ----: | -----: | ------: | ------------------------------------ |
| -76.5% |   -13 | 100.0% |  17 → 4 | `kotlin.jvm.internal.Intrinsics:140` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|  Change | Delta |             % | Samples | Location                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager:83` |

##### `unwrapStubTypeVariableConstructor(TypeConstructorMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|  Change | Delta |            % | Samples | Location                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.types.ConeTypeContext:435` |

##### `extractUpperTypesToCheckIntersectionEmptiness(List)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`)

|  Change | Delta |            % | Samples | Location                                                                                        |
| ------: | ----: | -----------: | ------: | ----------------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext:127` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Location                |
| ------: | ----: | -----------: | ------: | ----------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:578` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `java.util.HashMap:585` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

|  Change | Delta |             % | Samples | Location                                                                      |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor:26` |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `java.util.ArrayList$Itr:1044` |

##### `startsWith(String, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:2286` |

##### `push(int)` (`jdk.internal.org.objectweb.asm.Frame`)

|  Change | Delta |             % | Samples | Location                                   |
| ------: | ----: | ------------: | ------: | ------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `jdk.internal.org.objectweb.asm.Frame:556` |

##### `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.MethodHandleImpl:1433` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change | Delta |             % | Samples | Location                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.invoke.LambdaMetafactory:336` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:946` |

##### `getProtectionDomain(CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |             % | Samples | Location                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.security.SecureClassLoader:222` |

##### `isAncestor(VirtualFile, VirtualFile, boolean)` (`com.intellij.openapi.vfs.VfsUtilCore`)

|  Change | Delta |             % | Samples | Location                                  |
| ------: | ----: | ------------: | ------: | ----------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.openapi.vfs.VfsUtilCore:52` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:6135` |

##### `binarySearchInArray(Comparable)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % | Samples | Location                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:316` |

##### `setField(FieldSet$FieldDescriptorLite, Object)` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.protobuf.FieldSet:253` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Property`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Property:19874` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirValueClassDeclarationChecker`)

|  Change | Delta |             % | Samples | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirValueClassDeclarationChecker:55` |

##### `_atSet(TokenSet)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Location                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:213` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|  Change | Delta |             % | Samples | Location                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderAdapter:44` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:1209` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Location                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `com.intellij.lang.impl.PsiBuilderImpl:1128` |

##### `convertValueArgument(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:3654` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:841` |

##### `getAsFirStatement(LighterASTNode, String)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Location                                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder:121` |

##### `<init>(SemanticWhitespaceAwarePsiBuilder, boolean)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing:60` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Location                                              |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt:103` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Location                |
| -----: | ----: | -----: | ------: | ----------------------- |
| -33.3% |    -1 | 100.0% |   3 → 2 | `java.util.Arrays:3482` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.util.ArrayList:244` |

##### `implRead()` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.io.BufferedInputStream:324` |

##### `decodeASCII(byte[], int, char[], int, int)` (`java.lang.System$2`)

|  Change | Delta |             % | Samples | Location                  |
| ------: | ----: | ------------: | ------: | ------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.System$2:2503` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Location                |
| ------: | ----: | ------------: | ------: | ----------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.lang.String:1850` |

##### `isThreadCpuTimeSupported()` (`sun.management.ThreadImpl`)

|  Change | Delta |             % | Samples | Location                       |
| ------: | ----: | ------------: | ------: | ------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `sun.management.ThreadImpl:96` |

##### `checkIndex(int)` (`java.nio.Buffer`)

|  Change | Delta |             % | Samples | Location              |
| ------: | ----: | ------------: | ------: | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `java.nio.Buffer:768` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `readBytes(byte[], int, int)` (`java.io.FileInputStream`)

|  Change | Delta |      % | Samples | Caller                   | Location                  |
| ------: | ----: | -----: | ------: | ------------------------ | ------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `read(byte[], int, int)` | `java.io.FileInputStream` |

##### `mark()` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

| Change | Delta |             % | Samples | Caller                                  | Location                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parseOneTokenExpression(IElementType)` | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                   | Location                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectCandidates$default(FirCallResolver, FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver` |

##### `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |             % | Samples | Caller                                                             | Location                                        |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `<init>(Map, List, KotlinTypeMarker, VariableFixationFinder$Context, LanguageVersionSettings)` (`org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider`)

| Change | Delta |             % | Samples | Caller                                                                                                                      | Location                                                                         |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findTypeVariableForFixation(VariableFixationFinder$Context, List, List, ConstraintSystemCompletionMode, KotlinTypeMarker)` | `org.jetbrains.kotlin.resolve.calls.inference.components.VariableFixationFinder` |

##### `contains(ConeKotlinType, Function1, SmartSet)` (`org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt`)

| Change | Delta |             % | Samples | Caller                                | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `contains(ConeKotlinType, Function1)` | `org.jetbrains.kotlin.fir.types.ConeTypeUtilsKt` |

##### `getResolvedAnnotationsWithClassIds()` (`org.jetbrains.kotlin.fir.symbols.FirBasedSymbol`)

| Change | Delta |             % | Samples | Caller                                                                | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `collectDslMarkerAnnotations(ResolutionContext, Set, ConeKotlinType)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckDslScopeViolation` |

##### `visitResolvedTypeRef(FirResolvedTypeRef, CheckerContext)` (`org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent`)

| Change | Delta |             % | Samples | Caller                                             | Location                                                                          |
| -----: | ----: | ------------: | ------: | -------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitResolvedTypeRef(FirResolvedTypeRef, Object)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.TypeCheckersDiagnosticComponent` |

##### `visitTypeRef(FirTypeRef, Object)` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Caller                                                 | Location                                              |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ----------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitUnresolvedTypeRef(FirUnresolvedTypeRef, Object)` | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor` |

##### `toConeTypeProjection(JavaType, FirSession, JavaTypeParameterStack, Variance, FirJavaTypeConversionMode, KtSourceElement, Collection)` (`org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`)

| Change | Delta |             % | Samples | Caller                                                                                                                   | Location                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toConeKotlinType(JavaType, FirSession, JavaTypeParameterStack, FirJavaTypeConversionMode, KtSourceElement, Collection)` | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt` |

##### `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

| Change | Delta |             % | Samples | Caller                                                                                             | Location                                        |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper` |

##### `toIrBasedKotlinType(IrType, KotlinBuiltIns)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change | Delta |             % | Samples | Caller                                                             | Location                                                   |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `toIrBasedKotlinType$default(IrType, KotlinBuiltIns, int, Object)` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt` |

##### `analyze()` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change | Delta |             % | Samples | Caller                          | Location                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.DeadCodeEliminationMethodTransformer` |

##### `nextNode()` (`java.util.HashMap$HashIterator`)

| Change | Delta |             % | Samples | Caller   | Location                          |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `next()` | `java.util.HashMap$ValueIterator` |

##### `put11(int, int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change | Delta |             % | Samples | Caller                 | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitLdcInsn(Object)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getChildNodesByType(LighterASTNode, IElementType)` (`org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`)

| Change | Delta |             % | Samples | Caller                                    | Location                                                                        |
| -----: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `convertLambdaExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `stringsToBytes(String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`)

| Change | Delta |             % | Samples | Caller                  | Location                                                        |
| -----: | ----: | ------------: | ------: | ----------------------- | --------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `decodeBytes(String[])` | `org.jetbrains.kotlin.metadata.jvm.deserialization.BitEncoding` |

##### `getOwnTypeParameters()` (`org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                                                                                       | Location                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `deserializeClassToSymbol(ClassId, ProtoBuf$Class, FirRegularClassSymbol, NameResolver, FirSession, FirModuleData, AnnotationDeserializer, FirKDocDeserializer, FirTypeDeserializer$FlexibleTypeFactory, FirScopeProvider, SerializerExtensionProtocol, FirDeserializationContext, DeserializedContainerSource, FirDeclarationOrigin, Function2, Function2)` | `org.jetbrains.kotlin.fir.deserialization.ClassDeserializationKt` |

##### `<init>(DefaultConstructorMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.model.ConstraintPosition`)

| Change | Delta |             % | Samples | Caller                               | Location                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------ | ------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(InitialConstraint, boolean)` | `org.jetbrains.kotlin.resolve.calls.inference.model.IncorporationConstraintPosition` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

| Change | Delta |             % | Samples | Caller                                                                                                | Location                                                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `isProperTypeForFixation(ResultTypeResolver$Context, KotlinTypeMarker)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver`)

| Change | Delta |             % | Samples | Caller                                                      | Location                                                                     |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------- | ---------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `prepareLowerConstraints(ResultTypeResolver$Context, List)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ResultTypeResolver` |

##### `getOrderedAllTypeVariables$collectAllTypeVariables(ConeResolutionAtom, LinkedHashSet, ConstraintSystemCompletionContext)` (`org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter`)

| Change | Delta |             % | Samples | Caller                                                                | Location                                                               |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getOrderedAllTypeVariables(ConstraintSystemCompletionContext, List)` | `org.jetbrains.kotlin.fir.resolve.inference.ConstraintSystemCompleter` |

##### `findClasses(ClassId, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

| Change | Delta |             % | Samples | Caller                                                                  | Location                                                                 |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `findClasses$lambda$0$0(ClassId, Set, Function2, JvmDependenciesIndex)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

##### `equals(Object, Object)` (`java.util.Objects`)

| Change | Delta |             % | Samples | Caller                       | Location           |
| -----: | ----: | ------------: | ------: | ---------------------------- | ------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `equals(Object[], Object[])` | `java.util.Arrays` |

##### `siftDownComparable(int, Object, Object[], int)` (`java.util.PriorityQueue`)

| Change | Delta |             % | Samples | Caller   | Location                  |
| -----: | ----: | ------------: | ------: | -------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `poll()` | `java.util.PriorityQueue` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |      % | Samples | Caller                                  | Location                         |
| -----: | ----: | -----: | ------: | --------------------------------------- | -------------------------------- |
| -76.5% |   -13 | 100.0% |  17 → 4 | `checkNotNullParameter(Object, String)` | `kotlin.jvm.internal.Intrinsics` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Caller                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

|  Change | Delta |             % | Samples | Caller                                                                                                | Location                                                        |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `unwrapStubTypeVariableConstructor(TypeConstructorMarker)` (`org.jetbrains.kotlin.fir.types.ConeTypeContext`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `unwrapStubTypeVariableConstructor(TypeConstructorMarker)` | `org.jetbrains.kotlin.fir.types.ConeTypeContext` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |             % | Samples | Caller                     | Location                              |
| ------: | ----: | ------------: | ------: | -------------------------- | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `extractUpperTypesToCheckIntersectionEmptiness(List)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintSystemCompletionContext`)

|  Change | Delta |             % | Samples | Caller                                                           | Location                                                                                 |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `check(CheckerSink, ResolutionContext, Candidate, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CheckIncompatibleTypeVariableUpperBounds` |

##### `getNode(Object)` (`java.util.HashMap`)

|  Change | Delta |            % | Samples | Caller                | Location            |
| ------: | ----: | -----------: | ------: | --------------------- | ------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `containsKey(Object)` | `java.util.HashMap` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `get(Object)`         | `java.util.HashMap` |

##### `extractValue(AbstractArrayMapOwner)` (`org.jetbrains.kotlin.util.AbstractArrayMapOwner$AbstractArrayMapAccessor`)

|  Change | Delta |            % | Samples | Caller                                       | Location                                             |
| ------: | ----: | -----------: | ------: | -------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getValue(AbstractArrayMapOwner, KProperty)` | `org.jetbrains.kotlin.util.NullableArrayMapAccessor` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getValue(AbstractArrayMapOwner, KProperty)` | `org.jetbrains.kotlin.util.ArrayMapAccessor`         |

##### `hasNext()` (`java.util.ArrayList$Itr`)

|  Change | Delta |            % | Samples | Caller                                                                                       | Location                                                                            |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `acceptChildren(IrVisitor, Object)`                                                          | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                   |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `removeValuesClashingWithVariablesPass(RedundantBoxedValuesCollection, MethodNode, Frame[])` | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer` |

##### `startsWith(String, int)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller               | Location           |
| ------: | ----: | ------------: | ------: | -------------------- | ------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `startsWith(String)` | `java.lang.String` |

##### `load(NativeLibraries$NativeLibraryImpl, String, boolean, boolean)` (`jdk.internal.loader.NativeLibraries`)

| Change | Delta |      % | Samples | Caller   | Location                                                |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------- |
| -12.5% |    -1 | 100.0% |   8 → 7 | `open()` | `jdk.internal.loader.NativeLibraries$NativeLibraryImpl` |

##### `push(int)` (`jdk.internal.org.objectweb.asm.Frame`)

|  Change | Delta |             % | Samples | Caller                                   | Location                               |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | -------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `execute(int, int, Symbol, SymbolTable)` | `jdk.internal.org.objectweb.asm.Frame` |

##### `makeIntrinsic(MethodType, LambdaForm, MethodHandleImpl$Intrinsic)` (`java.lang.invoke.MethodHandleImpl`)

|  Change | Delta |             % | Samples | Caller                | Location                         |
| ------: | ----: | ------------: | ------: | --------------------- | -------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `makeIdentity(Class)` | `java.lang.invoke.MethodHandles` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change | Delta |             % | Samples | Caller                                                                 | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801234000` |

##### `get(Object)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller                    | Location                             |
| ------: | ----: | ------------: | ------: | ------------------------- | ------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getNoCheckStale(Object)` | `jdk.internal.util.ReferencedKeyMap` |

##### `getProtectionDomain(CodeSource)` (`java.security.SecureClassLoader`)

|  Change | Delta |             % | Samples | Caller                                              | Location                          |
| ------: | ----: | ------------: | ------: | --------------------------------------------------- | --------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `defineClass(String, byte[], int, int, CodeSource)` | `java.security.SecureClassLoader` |

##### `isAncestor(VirtualFile, VirtualFile, boolean)` (`com.intellij.openapi.vfs.VfsUtilCore`)

|  Change | Delta |             % | Samples | Caller                            | Location                                |
| ------: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isInLibraryClasses(VirtualFile)` | `com.intellij.mock.MockFileIndexFacade` |

##### `isInitialized()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|  Change | Delta |             % | Samples | Caller            | Location                                           |
| ------: | ----: | ------------: | ------: | ----------------- | -------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isInitialized()` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable` |

##### `binarySearchInArray(Comparable)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % | Samples | Caller        | Location                                       |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get(Object)` | `org.jetbrains.kotlin.protobuf.SmallSortedMap` |

##### `setField(FieldSet$FieldDescriptorLite, Object)` (`org.jetbrains.kotlin.protobuf.FieldSet`)

|  Change | Delta |             % | Samples | Caller                                                                                                      | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseUnknownField(FieldSet, MessageLite, CodedInputStream, CodedOutputStream, ExtensionRegistryLite, int)` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Property`)

|  Change | Delta |             % | Samples | Caller                                                        | Location                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------- | ------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Property` |

##### `<clinit>()` (`org.jetbrains.kotlin.fir.analysis.checkers.declaration.FirValueClassDeclarationChecker`)

|  Change | Delta |             % | Samples | Caller       | Location                                                               |
| ------: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<clinit>()` | `org.jetbrains.kotlin.fir.analysis.checkers.CommonDeclarationCheckers` |

##### `_atSet(TokenSet)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Caller            | Location                                             |
| ------: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `atSet(TokenSet)` | `org.jetbrains.kotlin.parsing.AbstractKotlinParsing` |

##### `doParseModifierList(Consumer, TokenSet, KotlinParsing$AnnotationParsingMode, TokenSet, boolean)` (`org.jetbrains.kotlin.parsing.KotlinParsing`)

|  Change | Delta |             % | Samples | Caller                                           | Location                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------ | -------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parseModifierList(Consumer, TokenSet, boolean)` | `org.jetbrains.kotlin.parsing.KotlinParsing` |

##### `getTokenType()` (`com.intellij.lang.impl.PsiBuilderAdapter`)

|  Change | Delta |             % | Samples | Caller           | Location                                                             |
| ------: | ----: | ------------: | ------: | ---------------- | -------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getTokenType()` | `org.jetbrains.kotlin.parsing.SemanticWhitespaceAwarePsiBuilderImpl` |

##### `balanceWhiteSpaces()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Caller               | Location                                |
| ------: | ----: | ------------: | ------: | -------------------- | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `prepareLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `prepareLightTree()` (`com.intellij.lang.impl.PsiBuilderImpl`)

|  Change | Delta |             % | Samples | Caller           | Location                                |
| ------: | ----: | ------------: | ------: | ---------------- | --------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getLightTree()` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `convertValueArgument(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                  | Location                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `convertValueArguments(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `convertCallExpression(LighterASTNode)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                      | Location                                                                        |
| ------: | ----: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAsFirStatement(LighterASTNode, String)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `getAsFirStatement(LighterASTNode, String)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder`)

|  Change | Delta |             % | Samples | Caller                                                                                             | Location                                                                        |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `getAsFirStatement$default(LightTreeRawFirExpressionBuilder, LighterASTNode, String, int, Object)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `<init>(SemanticWhitespaceAwarePsiBuilder, boolean)` (`org.jetbrains.kotlin.parsing.AbstractKotlinParsing`)

|  Change | Delta |             % | Samples | Caller                                                              | Location                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------- | ------------------------------------------------------ |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `<init>(SemanticWhitespaceAwarePsiBuilder, KotlinParsing, boolean)` | `org.jetbrains.kotlin.parsing.KotlinExpressionParsing` |

##### `readSourceFileWithMapping(InputStreamReader)` (`org.jetbrains.kotlin.KtSourceFileLinesMappingKt`)

|  Change | Delta |             % | Samples | Caller                                                                        | Location                                       |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change | Delta |              % | Samples | Caller      | Location              |
| -----: | ----: | -------------: | ------: | ----------- | --------------------- |
| -66.7% |    -2 | 100.0% → 50.0% |   3 → 1 | `grow(int)` | `java.util.ArrayList` |
|    new |    +1 |   0.0% → 50.0% |   0 → 1 | `toArray()` | `java.util.ArrayList` |

##### `grow()` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Caller                       | Location              |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `implRead()` (`java.io.BufferedInputStream`)

|  Change | Delta |             % | Samples | Caller   | Location                      |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `read()` | `java.io.BufferedInputStream` |

##### `decodeASCII(byte[], int, char[], int, int)` (`java.lang.System$2`)

|  Change | Delta |             % | Samples | Caller                                    | Location                   |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | -------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `decodeArrayLoop(ByteBuffer, CharBuffer)` | `sun.nio.cs.UTF_8$Decoder` |

##### `<init>(MapBuilder)` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

|  Change | Delta |             % | Samples | Caller                            | Location                                 |
| ------: | ----: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `entriesIterator$kotlin_stdlib()` | `kotlin.collections.builders.MapBuilder` |

##### `equals(Object)` (`java.lang.String`)

|  Change | Delta |             % | Samples | Caller                                   | Location                                      |
| ------: | ----: | ------------: | ------: | ---------------------------------------- | --------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `readMethod(ClassVisitor, Context, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `isThreadCpuTimeSupported()` (`sun.management.ThreadImpl`)

|  Change | Delta |             % | Samples | Caller                     | Location                    |
| ------: | ----: | ------------: | ------: | -------------------------- | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isThreadCpuTimeEnabled()` | `sun.management.ThreadImpl` |

##### `checkIndex(int)` (`java.nio.Buffer`)

|  Change | Delta |             % | Samples | Caller     | Location                    |
| ------: | ----: | ------------: | ------: | ---------- | --------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `get(int)` | `java.nio.DirectByteBuffer` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change | Delta |             % | Samples | Function                                                                                       | Location                                                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +6.9% |    +2 | 12.4% → 32.0% | 29 → 31 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                        | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                                                                              |
|   +6.9% |    +2 | 12.4% → 32.0% | 29 → 31 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                   | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                                                                              |
| +200.0% |    +2 |   0.4% → 3.1% |   1 → 3 | `invoke(Object)`                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f8016913e0 → org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700168fc20`                                                       |
| +200.0% |    +2 |   0.4% → 3.1% |   1 → 3 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                                                                                                                                 |
| +200.0% |    +2 |   0.4% → 3.1% |   1 → 3 | `invoke(Object)`                                                                               | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f80161fd60 → org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000700161e798`                                                       |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transformChildren(IrTransformer, Object)`                                                     | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                                                                                                                                                                   |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitBody(IrBody, Object)`                                                                    | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitBlockBody(IrBlockBody, Object)`                                                          | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transform(IrTransformer, Object)`                                                             | `org.jetbrains.kotlin.ir.expressions.IrBody`                                                                                                                                                                                                        |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transformChildren(IrTransformer, Object)`                                                     | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                                                                                                                                                                   |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitDeclaration(IrDeclarationBase, Object)`                                                  | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitFunction(IrFunction, Object)`                                                            | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transform(String, MethodNode)`                                                                | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`                                                                                                                                                                |
|   +3.4% |    +1 | 12.4% → 30.9% | 29 → 30 | `read(byte[], int, int)`                                                                       | `java.util.zip.InflaterInputStream`                                                                                                                                                                                                                 |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `readBytes(byte[], int, int)`                                                                  | `java.io.FileInputStream`                                                                                                                                                                                                                           |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `read(byte[], int, int)`                                                                       | `java.io.FileInputStream`                                                                                                                                                                                                                           |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `fill()`                                                                                       | `java.io.BufferedInputStream`                                                                                                                                                                                                                       |
|  +16.7% |    +1 |   2.6% → 7.2% |   6 → 7 | `invoke()`                                                                                     | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f8016a5458 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d6f90` |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)`                             | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                                                                                                                                                                     |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `scope(ConeKotlinType, FirSession, ScopeSession, CallableCopyTypeCalculator, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                                                                                                                                                                     |

##### Ours

|  Change | Delta |             % | Samples | Function                                                                                           | Location                                                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +6.9% |    +2 | 12.4% → 32.0% | 29 → 31 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                                                                              |
|   +6.9% |    +2 | 12.4% → 32.0% | 29 → 31 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                                                                              |
| +200.0% |    +2 |   0.4% → 3.1% |   1 → 3 | `invoke(Object)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f8016913e0 → org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700168fc20`                                                       |
| +200.0% |    +2 |   0.4% → 3.1% |   1 → 3 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)`                      | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                                                                                                                                 |
| +200.0% |    +2 |   0.4% → 3.1% |   1 → 3 | `invoke(Object)`                                                                                   | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000f80161fd60 → org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000700161e798`                                                       |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transformChildren(IrTransformer, Object)`                                                         | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                                                                                                                                                                                   |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitBody(IrBody, Object)`                                                                        | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitBlockBody(IrBlockBody, Object)`                                                              | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transform(IrTransformer, Object)`                                                                 | `org.jetbrains.kotlin.ir.expressions.IrBody`                                                                                                                                                                                                        |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transformChildren(IrTransformer, Object)`                                                         | `org.jetbrains.kotlin.ir.declarations.IrFunction`                                                                                                                                                                                                   |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitDeclaration(IrDeclarationBase, Object)`                                                      | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `visitFunction(IrFunction, Object)`                                                                | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                                                                                                                                                                                    |
|     new |    +2 |   0.0% → 2.1% |   0 → 2 | `transform(String, MethodNode)`                                                                    | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`                                                                                                                                                                |
|  +16.7% |    +1 |   2.6% → 7.2% |   6 → 7 | `invoke()`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000f8016a5458 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d6f90` |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)`                                 | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                                                                                                                                                                     |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `scope(ConeKotlinType, FirSession, ScopeSession, CallableCopyTypeCalculator, FirResolvePhase)`     | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                                                                                                                                                                     |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `scope(SessionAndScopeSessionHolder, ConeKotlinType, CallableCopyTypeCalculator, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                                                                                                                                                                     |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `captureFromTypeParameterUpperBoundIfNeeded(ConeKotlinType, ConeKotlinType, FirSession)`           | `org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt`                                                                                                                                                                                            |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)`                          | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt`                                                                                                                                                                                  |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `access$prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)`                   | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt`                                                                                                                                                                                  |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                  | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------------------------------------------- |
|   +3.4% |    +1 | 12.4% → 30.9% | 29 → 30 | `read(byte[], int, int)`                                                  | `java.util.zip.InflaterInputStream`                     |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `readBytes(byte[], int, int)`                                             | `java.io.FileInputStream`                               |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `read(byte[], int, int)`                                                  | `java.io.FileInputStream`                               |
| +100.0% |    +1 |   0.4% → 2.1% |   1 → 2 | `fill()`                                                                  | `java.io.BufferedInputStream`                           |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `readFully(byte[], int, int)`                                             | `java.util.zip.ZipInputStream`                          |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `readLOC()`                                                               | `java.util.zip.ZipInputStream`                          |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `getNextEntry()`                                                          | `java.util.zip.ZipInputStream`                          |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `nextNode()`                                                              | `java.util.HashMap$HashIterator`                        |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `next()`                                                                  | `java.util.HashMap$ValueIterator`                       |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `put11(int, int)`                                                         | `jdk.internal.org.objectweb.asm.ByteVector`             |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `visitLdcInsn(Object)`                                                    | `jdk.internal.org.objectweb.asm.MethodWriter`           |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `codeFieldInitialization(MethodVisitor, String)`                          | `java.lang.reflect.ProxyGenerator$ProxyMethod`          |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `generateStaticInitializer()`                                             | `java.lang.reflect.ProxyGenerator`                      |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `generateClassFile()`                                                     | `java.lang.reflect.ProxyGenerator`                      |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `generateProxyClass(ClassLoader, String, List, int)`                      | `java.lang.reflect.ProxyGenerator`                      |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)`            | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `build()`                                                                 | `java.lang.reflect.Proxy$ProxyBuilder`                  |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy`                               |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `apply(Object, Object)`                                                   | `java.lang.reflect.Proxy$$Lambda.0x000000700107c650`    |
|     new |    +1 |   0.0% → 1.0% |   0 → 1 | `get()`                                                                   | `jdk.internal.loader.AbstractClassLoaderValue$Memoizer` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Ours

| Change | Delta |             % |  Samples | Function                                                                                                                                      | Location                                                    |
| -----: | ----: | ------------: | -------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| -74.8% |   -83 | 47.4% → 28.9% | 111 → 28 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| -73.9% |   -82 | 47.4% → 29.9% | 111 → 29 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| -74.5% |   -82 | 47.0% → 28.9% | 110 → 28 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| -73.0% |   -81 | 47.4% → 30.9% | 111 → 30 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| -74.3% |   -81 | 46.6% → 28.9% | 109 → 28 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| -75.0% |   -81 | 46.2% → 27.8% | 108 → 27 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -74.1% |   -80 | 46.2% → 28.9% | 108 → 28 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -74.5% |   -79 | 45.3% → 27.8% | 106 → 27 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -74.5% |   -79 | 45.3% → 27.8% | 106 → 27 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| -75.2% |   -79 | 44.9% → 26.8% | 105 → 26 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| -75.2% |   -79 | 44.9% → 26.8% | 105 → 26 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| -74.0% |   -74 | 42.7% → 26.8% | 100 → 26 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -74.7% |   -74 | 42.3% → 25.8% |  99 → 25 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -74.2% |   -72 | 41.5% → 25.8% |  97 → 25 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -74.0% |   -71 | 41.0% → 25.8% |  96 → 25 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -68.6% |   -70 | 43.6% → 33.0% | 102 → 32 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| -73.4% |   -69 | 40.2% → 25.8% |  94 → 25 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| -68.4% |   -67 | 41.9% → 32.0% |  98 → 31 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| -68.4% |   -67 | 41.9% → 32.0% |  98 → 31 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| -68.4% |   -67 | 41.9% → 32.0% |  98 → 31 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |

##### Standard library

|  Change | Delta |             % | Samples | Function                                                                                      | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|  -67.4% |   -64 | 40.6% → 32.0% | 95 → 31 | `invokeStatic(Object, Object)`                                                                | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|  -67.7% |   -63 | 39.7% → 30.9% | 93 → 30 | `invoke(Object, Object, Object)`                                                              | `java.lang.invoke.LambdaForm$MH.0x000000f801010000 → java.lang.invoke.LambdaForm$MH.0x0000007001010000`   |
|  -67.7% |   -63 | 39.7% → 30.9% | 93 → 30 | `invokeExact_MT(Object, Object, Object, Object)`                                              | `java.lang.invoke.Invokers$Holder`                                                                        |
|  -67.8% |   -61 | 38.5% → 29.9% | 90 → 29 | `invokeImpl(Object, Object[])`                                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|  -66.7% |   -58 | 37.2% → 29.9% | 87 → 29 | `invoke(Object, Object[])`                                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|  -66.3% |   -57 | 36.8% → 29.9% | 86 → 29 | `invoke(Object, Object[])`                                                                    | `java.lang.reflect.Method`                                                                                |
|  -66.7% |   -18 |  11.5% → 9.3% |  27 → 9 | `resumeWith(Object)`                                                                          | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                                                     |
|  -80.0% |   -16 |   8.5% → 4.1% |  20 → 4 | `checkNotNullParameter(Object, String)`                                                       | `kotlin.jvm.internal.Intrinsics`                                                                          |
|  -78.9% |   -15 |   8.1% → 4.1% |  19 → 4 | `throwParameterIsNullNPE(String)`                                                             | `kotlin.jvm.internal.Intrinsics`                                                                          |
|  -87.5% |    -7 |   3.4% → 1.0% |   8 → 1 | `getValue()`                                                                                  | `kotlin.UnsafeLazyImpl`                                                                                   |
| removed |    -6 |   2.6% → 0.0% |   6 → 0 | `getValue()`                                                                                  | `kotlin.SynchronizedLazyImpl`                                                                             |
| removed |    -4 |   1.7% → 0.0% |   4 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)`                                     | `java.lang.ClassLoader`                                                                                   |
| removed |    -4 |   1.7% → 0.0% |   4 → 0 | `defineClass(String, byte[], int, int)`                                                       | `java.lang.ClassLoader`                                                                                   |
|  -80.0% |    -4 |   2.1% → 1.0% |   5 → 1 | `loadClass(String, boolean)`                                                                  | `java.lang.ClassLoader`                                                                                   |
| removed |    -4 |   1.7% → 0.0% |   4 → 0 | `add(Object, Object[], int)`                                                                  | `java.util.ArrayList`                                                                                     |
| removed |    -4 |   1.7% → 0.0% |   4 → 0 | `add(Object)`                                                                                 | `java.util.ArrayList`                                                                                     |
| removed |    -3 |   1.3% → 0.0% |   3 → 0 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                                                                      |
| removed |    -3 |   1.3% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                        | `java.lang.invoke.LambdaForm$DMH.0x000000f801234000`                                                      |
| removed |    -3 |   1.3% → 0.0% |   3 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`              | `java.lang.invoke.Invokers$Holder`                                                                        |
| removed |    -3 |   1.3% → 0.0% |   3 → 0 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                  | `java.lang.invoke.BootstrapMethodInvoker`                                                                 |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |           % | Samples | Callee           | Location                          |
| -----: | ----: | ----------: | ------: | ---------------- | --------------------------------- |
|    new |    +1 | 0.0% → 3.2% |   0 → 1 | `getNextEntry()` | `java.util.zip.ZipInputStream`    |
|    new |    +1 | 0.0% → 3.2% |   0 → 1 | `next()`         | `java.util.HashMap$ValueIterator` |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |             % | Samples | Callee                                                                       | Location                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  +6.9% |    +2 |        100.0% | 29 → 31 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| +66.7% |    +2 | 10.3% → 16.1% |   3 → 5 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700168fc20`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                | Location                                                            |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------- |
|     new |    +3 | 0.0% → 100.0% |   0 → 3 | `invoke(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000700168fc20` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x000000f8016911a8` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$$Lambda.0x000000700161e798`)

|  Change | Delta |      % | Samples | Callee                                                                        | Location                                                            |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `processSymbolsByName$lambda$0(Ref$BooleanRef, Function1, FirCallableSymbol)` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `transformChildren(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

| Change | Delta |             % | Samples | Callee                                          | Location                                   |
| -----: | ----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transformInPlace(List, IrTransformer, Object)` | `org.jetbrains.kotlin.ir.util.TransformKt` |

##### `visitBody(IrBody, Object)` (`org.jetbrains.kotlin.ir.visitors.IrTransformer`)

| Change | Delta |             % | Samples | Callee                                     | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.ir.visitors.IrTransformer`)

| Change | Delta |             % | Samples | Callee                                | Location                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitBody(IrBody, Object)`           | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer` |

##### `transform(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBody`)

| Change | Delta |             % | Samples | Callee                      | Location                                          |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `transformChildren(IrTransformer, Object)` (`org.jetbrains.kotlin.ir.declarations.IrFunction`)

| Change | Delta |             % | Samples | Callee                             | Location                                     |
| -----: | ----: | ------------: | ------: | ---------------------------------- | -------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transform(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBody` |

##### `visitDeclaration(IrDeclarationBase, Object)` (`org.jetbrains.kotlin.ir.visitors.IrTransformer`)

| Change | Delta |             % | Samples | Callee                                     | Location                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.declarations.IrFunction` |
|    new |    +1 |  0.0% → 50.0% |   0 → 1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.declarations.IrVariable` |
|    new |    +1 |  0.0% → 50.0% |   0 → 1 | `transformChildren(IrTransformer, Object)` | `org.jetbrains.kotlin.ir.declarations.IrClass`    |

##### `visitFunction(IrFunction, Object)` (`org.jetbrains.kotlin.ir.visitors.IrTransformer`)

| Change | Delta |            % | Samples | Callee                                        | Location                                                                          |
| -----: | ----: | -----------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitDeclaration(IrDeclarationBase, Object)` | `org.jetbrains.kotlin.ir.visitors.IrTransformer`                                  |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `visitDeclaration(IrDeclarationBase, Object)` | `org.jetbrains.kotlin.backend.jvm.lower.JvmArgumentNullabilityAssertionsLowering` |

##### `transform(String, MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer`)

| Change | Delta |            % | Samples | Callee                         | Location                                                                                         |
| -----: | ----: | -----------: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `transform()`                  | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer$Transformer` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `isPurePush(AbstractInsnNode)` | `org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformerKt`           |

##### `read(byte[], int, int)` (`java.util.zip.InflaterInputStream`)

|  Change | Delta |              % | Samples | Callee                      | Location                            |
| ------: | ----: | -------------: | ------: | --------------------------- | ----------------------------------- |
|   +7.1% |    +2 | 96.6% → 100.0% | 28 → 30 | `inflate(byte[], int, int)` | `java.util.zip.Inflater`            |
| removed |    -1 |    3.4% → 0.0% |   1 → 0 | `fill()`                    | `java.util.zip.InflaterInputStream` |

##### `read(byte[], int, int)` (`java.io.FileInputStream`)

|  Change | Delta |      % | Samples | Callee                        | Location                  |
| ------: | ----: | -----: | ------: | ----------------------------- | ------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `readBytes(byte[], int, int)` | `java.io.FileInputStream` |

##### `fill()` (`java.io.BufferedInputStream`)

|  Change | Delta |      % | Samples | Callee                   | Location                  |
| ------: | ----: | -----: | ------: | ------------------------ | ------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `read(byte[], int, int)` | `java.io.FileInputStream` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016d6f90`)

|  Change | Delta |             % | Samples | Callee                                                                                                         | Location                                                                                       |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|     new |    +7 | 0.0% → 100.0% |   0 → 7 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| removed |    -6 | 100.0% → 0.0% |   6 → 0 | `transformAnonymousFunctionBody$lambda$0(FirDeclarationsResolveTransformer, FirAnonymousFunction, FirTypeRef)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

| Change | Delta |            % | Samples | Callee                                                             | Location                                        |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `scope(ConeKotlinType, FirSession, ScopeSession, CallableCopyTypeCalculator, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

|  Change | Delta |      % | Samples | Callee                                                             | Location                                        |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `scope(ConeKotlinType, FirSession, ScopeSession, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `scope(SessionAndScopeSessionHolder, ConeKotlinType, CallableCopyTypeCalculator, FirResolvePhase)` (`org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`)

|  Change | Delta |      % | Samples | Callee                                                                                         | Location                                        |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `scope(ConeKotlinType, FirSession, ScopeSession, CallableCopyTypeCalculator, FirResolvePhase)` | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt` |

##### `captureFromTypeParameterUpperBoundIfNeeded(ConeKotlinType, ConeKotlinType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt`)

|  Change | Delta |             % | Samples | Callee                                                                                     | Location                                                 |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `collectUpperBounds(ConeKotlinType, ConeTypeContext)`                                      | `org.jetbrains.kotlin.fir.TypeUtilsKt`                   |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `captureFromExpression(KotlinTypeMarker)`                                                  | `org.jetbrains.kotlin.fir.types.ConeTypeContext`         |
|     new |    +1 |  0.0% → 50.0% |   0 → 1 | `hasSupertypeWithGivenClassId(ConeKotlinType, ClassId, TypeSystemCommonSuperTypesContext)` | `org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt` |

##### `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt`)

|  Change | Delta |      % | Samples | Callee                                                                                   | Location                                                 |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| +100.0% |    +1 | 100.0% |   1 → 2 | `captureFromTypeParameterUpperBoundIfNeeded(ConeKotlinType, ConeKotlinType, FirSession)` | `org.jetbrains.kotlin.fir.resolve.calls.ArgumentUtilsKt` |

##### `access$prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt`)

|  Change | Delta |      % | Samples | Callee                                                                    | Location                                                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `prepareImplicitArgument(ConeResolutionAtom, ConeKotlinType, FirSession)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStagesKt` |

##### `readFully(byte[], int, int)` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % | Samples | Callee                   | Location                      |
| -----: | ----: | ------------: | ------: | ------------------------ | ----------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `read(byte[], int, int)` | `java.io.PushbackInputStream` |

##### `readLOC()` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % | Samples | Callee                        | Location                       |
| -----: | ----: | ------------: | ------: | ----------------------------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `readFully(byte[], int, int)` | `java.util.zip.ZipInputStream` |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

| Change | Delta |             % | Samples | Callee      | Location                       |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `next()` (`java.util.HashMap$ValueIterator`)

| Change | Delta |             % | Samples | Callee       | Location                         |
| -----: | ----: | ------------: | ------: | ------------ | -------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `nextNode()` | `java.util.HashMap$HashIterator` |

##### `visitLdcInsn(Object)` (`jdk.internal.org.objectweb.asm.MethodWriter`)

| Change | Delta |             % | Samples | Callee            | Location                                    |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `put11(int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `codeFieldInitialization(MethodVisitor, String)` (`java.lang.reflect.ProxyGenerator$ProxyMethod`)

| Change | Delta |             % | Samples | Callee                 | Location                                      |
| -----: | ----: | ------------: | ------: | ---------------------- | --------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `visitLdcInsn(Object)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `generateStaticInitializer()` (`java.lang.reflect.ProxyGenerator`)

| Change | Delta |             % | Samples | Callee                                           | Location                                       |
| -----: | ----: | ------------: | ------: | ------------------------------------------------ | ---------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `codeFieldInitialization(MethodVisitor, String)` | `java.lang.reflect.ProxyGenerator$ProxyMethod` |

##### `generateClassFile()` (`java.lang.reflect.ProxyGenerator`)

| Change | Delta |             % | Samples | Callee                        | Location                           |
| -----: | ----: | ------------: | ------: | ----------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateStaticInitializer()` | `java.lang.reflect.ProxyGenerator` |

##### `generateProxyClass(ClassLoader, String, List, int)` (`java.lang.reflect.ProxyGenerator`)

| Change | Delta |             % | Samples | Callee                | Location                           |
| -----: | ----: | ------------: | ------: | --------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateClassFile()` | `java.lang.reflect.ProxyGenerator` |

##### `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Callee                                               | Location                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------- | ---------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `generateProxyClass(ClassLoader, String, List, int)` | `java.lang.reflect.ProxyGenerator` |

##### `build()` (`java.lang.reflect.Proxy$ProxyBuilder`)

| Change | Delta |             % | Samples | Callee                                                         | Location                               |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `defineProxyClass(Proxy$ProxyBuilder$ProxyClassContext, List)` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` (`java.lang.reflect.Proxy`)

| Change | Delta |             % | Samples | Callee    | Location                               |
| -----: | ----: | ------------: | ------: | --------- | -------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `build()` | `java.lang.reflect.Proxy$ProxyBuilder` |

##### `apply(Object, Object)` (`java.lang.reflect.Proxy$$Lambda.0x000000700107c650`)

| Change | Delta |             % | Samples | Callee                                                                    | Location                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------- | ------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `lambda$getProxyConstructor$0(ClassLoader, AbstractClassLoaderValue$Sub)` | `java.lang.reflect.Proxy` |

##### `get()` (`jdk.internal.loader.AbstractClassLoaderValue$Memoizer`)

| Change | Delta |             % | Samples | Callee                  | Location                                             |
| -----: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `apply(Object, Object)` | `java.lang.reflect.Proxy$$Lambda.0x000000700107c650` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change | Delta |              % |  Samples | Callee                              | Location                                                         |
| ------: | ----: | -------------: | -------: | ----------------------------------- | ---------------------------------------------------------------- |
|  -74.5% |   -82 | 99.1% → 100.0% | 110 → 28 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|  -80.0% |    -4 |    4.5% → 3.6% |    5 → 1 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
| removed |    -2 |    1.8% → 0.0% |    2 → 0 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change | Delta |      % |  Samples | Callee                                         | Location                                          |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | ------------------------------------------------- |
| -73.9% |   -82 | 100.0% | 111 → 29 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change | Delta |      % |  Samples | Callee                                                     | Location                                                |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| -74.5% |   -82 | 100.0% | 110 → 28 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|  Change | Delta |             % | Samples | Callee                           | Location                                                              |
| ------: | ----: | ------------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
|  -79.2% |   -57 | 64.9% → 50.0% | 72 → 15 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  -64.7% |   -22 | 30.6% → 40.0% | 34 → 12 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
| removed |    -1 |   0.9% → 0.0% |   1 → 0 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  -25.0% |    -1 |  3.6% → 10.0% |   4 → 3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change | Delta |      % |  Samples | Callee                                                     | Location                                                    |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| -74.3% |   -81 | 100.0% | 109 → 28 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                         | Location                                                |
| -----: | ----: | -----: | -------: | ---------------------------------------------- | ------------------------------------------------------- |
| -75.0% |   -81 | 100.0% | 108 → 27 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                                               | Location                                             |
| -----: | ----: | -----: | -------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| -74.1% |   -80 | 100.0% | 108 → 28 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                                                                              | Location                                                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -74.5% |   -79 | 100.0% | 106 → 27 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change | Delta |      % |  Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -74.5% |   -79 | 100.0% | 106 → 27 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Callee                                                         | Location                                                |
| -----: | ----: | -----: | -------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| -75.2% |   -79 | 100.0% | 105 → 26 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % |  Samples | Callee                                                                | Location                                     |
| -----: | ----: | -----: | -------: | --------------------------------------------------------------------- | -------------------------------------------- |
| -75.2% |   -79 | 100.0% | 105 → 26 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % |  Samples | Callee                                                                 | Location                                     |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| -74.0% |   -74 | 100.0% | 100 → 26 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Callee                                                          | Location                                      |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------- | --------------------------------------------- |
| -74.7% |   -74 | 100.0% | 99 → 25 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |              % | Samples | Callee                                                                               | Location                                                                |
| -----: | ----: | -------------: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| -75.3% |   -73 | 100.0% → 96.0% | 97 → 24 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|    new |    +1 |    0.0% → 4.0% |   0 → 1 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change | Delta |      % | Samples | Callee                                                   | Location                                      |
| -----: | ----: | -----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| -74.0% |   -71 | 100.0% | 96 → 25 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |             % | Samples | Callee                                                 | Location                                                |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------- |
| -73.1% |   -68 | 91.2% → 78.1% | 93 → 25 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -22.2% |    -2 |  8.8% → 21.9% |   9 → 7 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Callee                                         | Location                                      |
| -----: | ----: | -----: | ------: | ---------------------------------------------- | --------------------------------------------- |
| -73.4% |   -69 | 100.0% | 94 → 25 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change | Delta |      % | Samples | Callee                                                                                             | Location                                                |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -68.4% |   -67 | 100.0% | 98 → 31 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change | Delta |      % | Samples | Callee                          | Location                                                |
| -----: | ----: | -----: | ------: | ------------------------------- | ------------------------------------------------------- |
| -68.4% |   -67 | 100.0% | 98 → 31 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change | Delta |      % | Samples | Callee           | Location                                               |
| -----: | ----: | -----: | ------: | ---------------- | ------------------------------------------------------ |
| -68.4% |   -67 | 100.0% | 98 → 31 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change | Delta |      % | Samples | Callee           | Location                                     |
| -----: | ----: | -----: | ------: | ---------------- | -------------------------------------------- |
| -67.4% |   -64 | 100.0% | 95 → 31 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001010000`)

| Change | Delta |      % | Samples | Callee                         | Location                                                                                                  |
| -----: | ----: | -----: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| -67.7% |   -63 | 100.0% | 93 → 30 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |      % | Samples | Callee                           | Location                                                                                                |
| -----: | ----: | -----: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| -67.7% |   -63 | 100.0% | 93 → 30 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801010000 → java.lang.invoke.LambdaForm$MH.0x0000007001010000` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                                           | Location                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------ | ---------------------------------- |
| -67.8% |   -61 | 100.0% | 90 → 29 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % | Samples | Callee                         | Location                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------- |
| -66.7% |   -58 | 100.0% | 87 → 29 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change | Delta |      % | Samples | Callee                     | Location                                          |
| -----: | ----: | -----: | ------: | -------------------------- | ------------------------------------------------- |
| -66.3% |   -57 | 100.0% | 86 → 29 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                                               |
| ------: | ----: | ------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
|  -70.6% |   -12 | 63.0% → 55.6% |  17 → 5 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
|  -56.3% |    -9 | 59.3% → 77.8% |  16 → 7 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
| removed |    -5 |  18.5% → 0.0% |   5 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$2`                               |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                               |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |

##### `checkNotNullParameter(Object, String)` (`kotlin.jvm.internal.Intrinsics`)

| Change | Delta |              % | Samples | Callee                            | Location                         |
| -----: | ----: | -------------: | ------: | --------------------------------- | -------------------------------- |
| -78.9% |   -15 | 95.0% → 100.0% |  19 → 4 | `throwParameterIsNullNPE(String)` | `kotlin.jvm.internal.Intrinsics` |

##### `throwParameterIsNullNPE(String)` (`kotlin.jvm.internal.Intrinsics`)

|  Change | Delta |            % | Samples | Callee                          | Location                         |
| ------: | ----: | -----------: | ------: | ------------------------------- | -------------------------------- |
| removed |    -2 | 10.5% → 0.0% |   2 → 0 | `sanitizeStackTrace(Throwable)` | `kotlin.jvm.internal.Intrinsics` |

##### `getValue()` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------- |
| removed |    -7 |  87.5% → 0.0% |   7 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000f8016a8b10`            |
| removed |    -1 |  12.5% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000f801693b78`        |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.java.enhancement.FirSignatureEnhancement$$Lambda.0x00000070016343e0` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |            % | Samples | Callee     | Location                                                                                    |
| ------: | ----: | -----------: | ------: | ---------- | ------------------------------------------------------------------------------------------- |
| removed |    -3 | 50.0% → 0.0% |   3 → 0 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000f8013e9650`        |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x000000f8015fc7d8` |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000f801776b90`                  |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedClassDescriptor$$Lambda.0x000000f801833ba8`     |
| removed |    -1 | 16.7% → 0.0% |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDeclarationDescriptor$annotations$2`            |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change | Delta |            % | Samples | Callee                                                                          | Location                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `preDefineClass(String, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `defineClass(String, byte[], int, int)` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee                                                    | Location                |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change | Delta |            % | Samples | Callee              | Location                                                 |
| ------: | ----: | -----------: | ------: | ------------------- | -------------------------------------------------------- |
| removed |    -4 | 80.0% → 0.0% |   4 → 0 | `findClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `add(Object, Object[], int)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee   | Location              |
| ------: | ----: | ------------: | ------: | -------- | --------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `grow()` | `java.util.ArrayList` |

##### `add(Object)` (`java.util.ArrayList`)

|  Change | Delta |             % | Samples | Callee                       | Location              |
| ------: | ----: | ------------: | ------: | ---------------------------- | --------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `add(Object, Object[], int)` | `java.util.ArrayList` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change | Delta |            % | Samples | Callee            | Location                                       |
| ------: | ----: | -----------: | ------: | ----------------- | ---------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `buildCallSite()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000f801234000`)

|  Change | Delta |             % | Samples | Callee                                                                                        | Location                             |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

|  Change | Delta |             % | Samples | Callee                                                                 | Location                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801234000` |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

|  Change | Delta |             % | Samples | Callee                                                                           | Location                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

# Allocated heap profile diff

Allocated 684 MiB (+116.156 KiB, ~0%) over 862 samples → 870 samples (812 KiB → 805 KiB per sample).

| Category         | Change |       Delta |             % |              Size |   Samples |
| ---------------- | -----: | ----------: | ------------: | ----------------: | --------: |
| Standard library | -10.4% | -54.659 MiB | 76.9% → 68.9% | 526 MiB → 471 MiB | 545 → 559 |
| Ours             | +34.8% |  +54.78 MiB | 23.1% → 31.1% | 158 MiB → 212 MiB | 305 → 302 |
| Unknown          | -20.0% |  -7.515 KiB |         <0.1% | 37.6 KiB → 30 KiB |    12 → 9 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|    Change |       Delta |           % |                Size | Samples | Function                                                                                | Location                                                                      |
| --------: | ----------: | ----------: | ------------------: | ------: | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
|  +3002.6% | +58.826 MiB | 0.3% → 8.9% | 1.96 MiB → 60.8 MiB |   6 → 2 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                        |
| +11872.2% | +58.803 MiB | 0.1% → 8.7% |  507 KiB → 59.3 MiB |       1 | `getDeclaredMethods0(boolean)`                                                          | `java.lang.Class`                                                             |
|  +1389.0% | +20.745 MiB | 0.2% → 3.3% | 1.49 MiB → 22.2 MiB |       3 | `<init>(InputStream, Inflater, int)`                                                    | `java.util.zip.InflaterInputStream`                                           |
|   +205.1% |  +12.77 MiB | 0.9% → 2.8% |   6.23 MiB → 19 MiB | 21 → 42 | `iterator()`                                                                            | `java.util.ArrayList`                                                         |
|    +99.9% |  +3.988 MiB | 0.6% → 1.2% | 3.99 MiB → 7.98 MiB |  7 → 16 | `resize()`                                                                              | `java.util.HashMap`                                                           |
|   +262.2% |  +3.925 MiB | 0.2% → 0.8% |  1.5 MiB → 5.42 MiB |  3 → 11 | `box-impl(List)`                                                                        | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                 |
|    +60.5% |  +3.847 MiB | 0.9% → 1.5% | 6.36 MiB → 10.2 MiB | 20 → 29 | `clone()`                                                                               | `java.lang.Object`                                                            |
|    +66.3% |  +2.976 MiB | 0.7% → 1.1% | 4.49 MiB → 7.47 MiB |  9 → 14 | `newInstance(OutputStream, int)`                                                        | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                             |
|   +140.4% |  +2.803 MiB | 0.3% → 0.7% |     2 MiB → 4.8 MiB |  4 → 10 | `newString(byte[], int, int)`                                                           | `java.lang.StringLatin1`                                                      |
|   +118.8% |  +2.438 MiB | 0.3% → 0.7% | 2.05 MiB → 4.49 MiB |   5 → 9 | `allocateInstance(Object)`                                                              | `java.lang.invoke.DirectMethodHandle`                                         |
|   +240.6% |  +2.401 MiB | 0.1% → 0.5% | 1,022 KiB → 3.4 MiB |   2 → 7 | `<init>()`                                                                              | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage` |
|    +71.0% |  +2.072 MiB | 0.4% → 0.7% | 2.92 MiB → 4.99 MiB |  6 → 10 | `newOutput()`                                                                           | `org.jetbrains.kotlin.protobuf.ByteString`                                    |
|   +100.0% |  +1.995 MiB | 0.3% → 0.6% |    2 MiB → 3.99 MiB |   4 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                             | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                               |
|       new |  +1.983 MiB | 0.0% → 0.3% |      0 B → 1.98 MiB |   0 → 3 | `read(ByteBuffer)`                                                                      | `java.nio.channels.Channels$ReadableByteChannelImpl`                          |
|       new |  +1.497 MiB | 0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`              |
|   +300.0% |  +1.497 MiB | 0.1% → 0.3% |     511 KiB → 2 MiB |   1 → 4 | `topLevel(FqName)`                                                                      | `org.jetbrains.kotlin.name.ClassId$Companion`                                 |
|       new |  +1.497 MiB | 0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `next()`                                                                                | `kotlin.collections.builders.MapBuilder$EntriesItr`                           |
|   +300.0% |  +1.497 MiB | 0.1% → 0.3% |     511 KiB → 2 MiB |   1 → 4 | `iterator()`                                                                            | `java.util.AbstractList`                                                      |
|       new |  +1.491 MiB | 0.0% → 0.2% |      0 B → 1.49 MiB |   0 → 3 | `getBufferBytes(ByteBuffer)`                                                            | `jdk.internal.jimage.BasicImageReader`                                        |
|       new |  +1.389 MiB | 0.0% → 0.2% |      0 B → 1.39 MiB |   0 → 2 | `getNonDispatchParameters(IrFunction)`                                                  | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                      |

##### Standard library

|    Change |          Delta |            % |                 Size | Samples | Function                                                     | Location                                                                            |
| --------: | -------------: | -----------: | -------------------: | ------: | ------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| +11872.2% |    +58.803 MiB |  0.1% → 8.7% |   507 KiB → 59.3 MiB |       1 | `getDeclaredMethods0(boolean)`                               | `java.lang.Class`                                                                   |
|  +1389.0% |    +20.745 MiB |  0.2% → 3.3% |  1.49 MiB → 22.2 MiB |       3 | `<init>(InputStream, Inflater, int)`                         | `java.util.zip.InflaterInputStream`                                                 |
|   +205.1% |     +12.77 MiB |  0.9% → 2.8% |    6.23 MiB → 19 MiB | 21 → 42 | `iterator()`                                                 | `java.util.ArrayList`                                                               |
|    +99.9% |     +3.988 MiB |  0.6% → 1.2% |  3.99 MiB → 7.98 MiB |  7 → 16 | `resize()`                                                   | `java.util.HashMap`                                                                 |
|    +60.5% |     +3.847 MiB |  0.9% → 1.5% |  6.36 MiB → 10.2 MiB | 20 → 29 | `clone()`                                                    | `java.lang.Object`                                                                  |
|   +140.4% |     +2.803 MiB |  0.3% → 0.7% |      2 MiB → 4.8 MiB |  4 → 10 | `newString(byte[], int, int)`                                | `java.lang.StringLatin1`                                                            |
|   +118.8% |     +2.438 MiB |  0.3% → 0.7% |  2.05 MiB → 4.49 MiB |   5 → 9 | `allocateInstance(Object)`                                   | `java.lang.invoke.DirectMethodHandle`                                               |
|       new |     +1.983 MiB |  0.0% → 0.3% |       0 B → 1.98 MiB |   0 → 3 | `read(ByteBuffer)`                                           | `java.nio.channels.Channels$ReadableByteChannelImpl`                                |
|       new |     +1.497 MiB |  0.0% → 0.2% |        0 B → 1.5 MiB |   0 → 3 | `next()`                                                     | `kotlin.collections.builders.MapBuilder$EntriesItr`                                 |
|   +300.0% |     +1.497 MiB |  0.1% → 0.3% |      511 KiB → 2 MiB |   1 → 4 | `iterator()`                                                 | `java.util.AbstractList`                                                            |
|       new |     +1.491 MiB |  0.0% → 0.2% |       0 B → 1.49 MiB |   0 → 3 | `getBufferBytes(ByteBuffer)`                                 | `jdk.internal.jimage.BasicImageReader`                                              |
|    +50.2% | +1,023.046 KiB |  0.3% → 0.4% |  1.99 MiB → 2.99 MiB |   4 → 5 | `enlarge(int)`                                               | `jdk.internal.org.objectweb.asm.ByteVector`                                         |
|       new | +1,021.992 KiB |  0.0% → 0.1% |      0 B → 1,022 KiB |   0 → 2 | `add(Object)`                                                | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector` |
|       new | +1,021.984 KiB |  0.0% → 0.1% |      0 B → 1,022 KiB |   0 → 2 | `createListBuilder()`                                        | `kotlin.collections.CollectionsKt__CollectionsJVMKt`                                |
|       new | +1,021.976 KiB |  0.0% → 0.1% |      0 B → 1,022 KiB |   0 → 2 | `asList(Object[])`                                           | `java.util.Arrays`                                                                  |
|       new | +1,021.968 KiB |  0.0% → 0.1% |      0 B → 1,022 KiB |   0 → 1 | `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger`                                                       |
| +15472.9% | +1,015.406 KiB | <0.1% → 0.1% | 6.56 KiB → 1,022 KiB |   1 → 2 | `makeImpl(Class, Class[], boolean)`                          | `java.lang.invoke.MethodType`                                                       |
|    +89.7% |   +995.132 KiB |  0.2% → 0.3% |  1.08 MiB → 2.05 MiB |   2 → 3 | `compress(char[], int, int)`                                 | `java.lang.StringUTF16`                                                             |
|    +63.1% |   +644.867 KiB |  0.1% → 0.2% | 1,022 KiB → 1.63 MiB |       2 | `newString(byte[], long)`                                    | `java.lang.StringConcatHelper`                                                      |
|       new |       +511 KiB |  0.0% → 0.1% |        0 B → 511 KiB |   0 → 1 | `toByteArray()`                                              | `jdk.internal.org.objectweb.asm.ClassWriter`                                        |

##### Ours

|   Change |          Delta |            % |                Size | Samples | Function                                                                                    | Location                                                                            |
| -------: | -------------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| +3002.6% |    +58.826 MiB |  0.3% → 8.9% | 1.96 MiB → 60.8 MiB |   6 → 2 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                              |
|  +262.2% |     +3.925 MiB |  0.2% → 0.8% |  1.5 MiB → 5.42 MiB |  3 → 11 | `box-impl(List)`                                                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                       |
|   +66.3% |     +2.976 MiB |  0.7% → 1.1% | 4.49 MiB → 7.47 MiB |  9 → 14 | `newInstance(OutputStream, int)`                                                            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                   |
|  +240.6% |     +2.401 MiB |  0.1% → 0.5% | 1,022 KiB → 3.4 MiB |   2 → 7 | `<init>()`                                                                                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`       |
|   +71.0% |     +2.072 MiB |  0.4% → 0.7% | 2.92 MiB → 4.99 MiB |  6 → 10 | `newOutput()`                                                                               | `org.jetbrains.kotlin.protobuf.ByteString`                                          |
|  +100.0% |     +1.995 MiB |  0.3% → 0.6% |    2 MiB → 3.99 MiB |   4 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                     |
|      new |     +1.497 MiB |  0.0% → 0.2% |       0 B → 1.5 MiB |   0 → 3 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`     | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                    |
|  +300.0% |     +1.497 MiB |  0.1% → 0.3% |     511 KiB → 2 MiB |   1 → 4 | `topLevel(FqName)`                                                                          | `org.jetbrains.kotlin.name.ClassId$Companion`                                       |
|      new |     +1.389 MiB |  0.0% → 0.2% |      0 B → 1.39 MiB |   0 → 2 | `getNonDispatchParameters(IrFunction)`                                                      | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                            |
|  +406.9% |     +1.201 MiB | <0.1% → 0.2% |   302 KiB → 1.5 MiB |   1 → 3 | `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)`  | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                              |
|  +207.3% |     +1.033 MiB |  0.1% → 0.2% |  511 KiB → 1.53 MiB |   1 → 3 | `<init>(byte[], int, boolean)`                                                              | `org.jetbrains.org.objectweb.asm.ClassReader`                                       |
|  +200.0% |     +1,022 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |   1 → 3 | `visitMethodInsn(int, String, String, String, boolean)`                                     | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                   |
|      new | +1,021.984 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `parent()`                                                                                  | `org.jetbrains.kotlin.name.FqName`                                                  |
|  +200.0% | +1,021.984 KiB |  0.1% → 0.2% |   511 KiB → 1.5 MiB |   1 → 3 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                             | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                            |
|      new | +1,021.984 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `toIrBasedDescriptor(IrClass)`                                                              | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`                          |
|      new | +1,021.976 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `transform$lambda$1(int, int)`                                                              | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer` |
|      new | +1,021.976 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `traverseIds(int)`                                                                          | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`                    |
|      new | +1,021.976 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 2 | `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                            |
|      new | +1,021.968 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 1 | `hashCode()`                                                                                | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                 |
|      new |  +1,021.96 KiB |  0.0% → 0.1% |     0 B → 1,022 KiB |   0 → 1 | `copyAnnotations(IrAnnotationContainer, Function1)`                                         | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                            |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |       Delta |             % |                Size |   Samples | Function                                                                                                  | Location                                                                                           |
| ------: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -64.135 MiB |   9.4% → 0.0% |      64.1 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                                                                                  | `java.util.zip.ZipFile$Source`                                                                     |
|  -29.7% |  -48.61 MiB | 24.0% → 16.9% |   164 MiB → 115 MiB |        94 | `copyOf(byte[], int)`                                                                                     | `java.util.Arrays`                                                                                 |
| removed | -21.218 MiB |   3.1% → 0.0% |      21.2 MiB → 0 B |     1 → 0 | `initTable()`                                                                                             | `java.util.concurrent.ConcurrentHashMap`                                                           |
|  -90.2% |   -4.61 MiB |   0.7% → 0.1% |  5.11 MiB → 511 KiB |    11 → 1 | `allocateInstance(Class)`                                                                                 | `jdk.internal.misc.Unsafe`                                                                         |
|   -3.4% |  -4.072 MiB | 17.6% → 17.0% |   121 MiB → 117 MiB | 121 → 125 | `<init>(int)`                                                                                             | `java.io.ByteArrayOutputStream`                                                                    |
| removed |  -2.991 MiB |   0.4% → 0.0% |      2.99 MiB → 0 B |     4 → 0 | `<init>(ClassWriter)`                                                                                     | `jdk.internal.org.objectweb.asm.SymbolTable`                                                       |
|  -60.0% |   -2.99 MiB |   0.7% → 0.3% |    4.99 MiB → 2 MiB |     9 → 4 | `<init>(int)`                                                                                             | `java.lang.AbstractStringBuilder`                                                                  |
|  -28.2% |  -2.937 MiB |   1.5% → 1.1% | 10.4 MiB → 7.49 MiB |   19 → 15 | `grow(int)`                                                                                               | `java.util.ArrayList`                                                                              |
|  -88.7% |  -2.657 MiB |  0.4% → <0.1% |  2.99 MiB → 345 KiB |     5 → 1 | `<init>()`                                                                                                | `kotlin.collections.builders.SetBuilder`                                                           |
|  -33.3% |  -2.495 MiB |   1.1% → 0.7% | 7.48 MiB → 4.99 MiB |   14 → 10 | `<init>(int, float, boolean)`                                                                             | `java.util.HashSet`                                                                                |
|  -70.3% |  -2.456 MiB |   0.5% → 0.2% | 3.49 MiB → 1.04 MiB |     7 → 2 | `getTypeInternal(String, int, int)`                                                                       | `org.jetbrains.org.objectweb.asm.Type`                                                             |
|  -78.2% |  -2.362 MiB |   0.4% → 0.1% |  3.02 MiB → 673 KiB |     6 → 2 | `getBytes(int, int)`                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| removed |  -1.996 MiB |   0.3% → 0.0% |         2 MiB → 0 B |     3 → 0 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion`          |
|  -60.4% |  -1.809 MiB |   0.4% → 0.2% | 2.99 MiB → 1.18 MiB |     6 → 3 | `simplifyTrivialInstructions(MethodNode)`                                                                 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -77.1% |  -1.673 MiB |   0.3% → 0.1% |  2.17 MiB → 508 KiB |     4 → 1 | `initClassName()`                                                                                         | `java.lang.Class`                                                                                  |
|  -50.9% |  -1.553 MiB |   0.4% → 0.2% |  3.05 MiB → 1.5 MiB |     7 → 3 | `newFieldMap(int)`                                                                                        | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
|  -75.0% |  -1.497 MiB |   0.3% → 0.1% |     2 MiB → 511 KiB |     3 → 1 | `allocateStartMarker()`                                                                                   | `com.intellij.lang.impl.MarkerPool`                                                                |
| removed |  -1.496 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     2 → 0 | `build()`                                                                                                 | `org.jetbrains.kotlin.fir.expressions.builder.FirResolvedQualifierBuilder`                         |
|  -60.0% |  -1.496 MiB |   0.4% → 0.1% | 2.5 MiB → 1,022 KiB |     3 → 2 | `requestGroup(TowerGroup, Continuation)`                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                 |
|  -75.0% |  -1.496 MiB |   0.3% → 0.1% |     2 MiB → 511 KiB |     3 → 1 | `singletonIterator(Object)`                                                                               | `java.util.Collections`                                                                            |

##### Standard library

|  Change |          Delta |             % |                 Size |   Samples | Function                                             | Location                                     |
| ------: | -------------: | ------------: | -------------------: | --------: | ---------------------------------------------------- | -------------------------------------------- |
| removed |    -64.135 MiB |   9.4% → 0.0% |       64.1 MiB → 0 B |     2 → 0 | `initCEN(int, ZipCoder)`                             | `java.util.zip.ZipFile$Source`               |
|  -29.7% |     -48.61 MiB | 24.0% → 16.9% |    164 MiB → 115 MiB |        94 | `copyOf(byte[], int)`                                | `java.util.Arrays`                           |
| removed |    -21.218 MiB |   3.1% → 0.0% |       21.2 MiB → 0 B |     1 → 0 | `initTable()`                                        | `java.util.concurrent.ConcurrentHashMap`     |
|  -90.2% |      -4.61 MiB |   0.7% → 0.1% |   5.11 MiB → 511 KiB |    11 → 1 | `allocateInstance(Class)`                            | `jdk.internal.misc.Unsafe`                   |
|   -3.4% |     -4.072 MiB | 17.6% → 17.0% |    121 MiB → 117 MiB | 121 → 125 | `<init>(int)`                                        | `java.io.ByteArrayOutputStream`              |
| removed |     -2.991 MiB |   0.4% → 0.0% |       2.99 MiB → 0 B |     4 → 0 | `<init>(ClassWriter)`                                | `jdk.internal.org.objectweb.asm.SymbolTable` |
|  -60.0% |      -2.99 MiB |   0.7% → 0.3% |     4.99 MiB → 2 MiB |     9 → 4 | `<init>(int)`                                        | `java.lang.AbstractStringBuilder`            |
|  -28.2% |     -2.937 MiB |   1.5% → 1.1% |  10.4 MiB → 7.49 MiB |   19 → 15 | `grow(int)`                                          | `java.util.ArrayList`                        |
|  -88.7% |     -2.657 MiB |  0.4% → <0.1% |   2.99 MiB → 345 KiB |     5 → 1 | `<init>()`                                           | `kotlin.collections.builders.SetBuilder`     |
|  -33.3% |     -2.495 MiB |   1.1% → 0.7% |  7.48 MiB → 4.99 MiB |   14 → 10 | `<init>(int, float, boolean)`                        | `java.util.HashSet`                          |
|  -77.1% |     -1.673 MiB |   0.3% → 0.1% |   2.17 MiB → 508 KiB |     4 → 1 | `initClassName()`                                    | `java.lang.Class`                            |
|  -75.0% |     -1.496 MiB |   0.3% → 0.1% |      2 MiB → 511 KiB |     3 → 1 | `singletonIterator(Object)`                          | `java.util.Collections`                      |
|  -59.2% |     -1.182 MiB |   0.3% → 0.1% |      2 MiB → 833 KiB |     3 → 2 | `lazy(LazyThreadSafetyMode, Function0)`              | `kotlin.LazyKt__LazyJVMKt`                   |
|  -40.9% |     -1.032 MiB |   0.4% → 0.2% |  2.53 MiB → 1.49 MiB |     5 → 3 | `toString()`                                         | `java.lang.StringBuilder`                    |
|  -20.2% |     -1.006 MiB |   0.7% → 0.6% |  4.99 MiB → 3.98 MiB |     9 → 7 | `copyOf(Object[], int)`                              | `java.util.Arrays`                           |
| removed | -1,021.968 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     2 → 0 | `iterator()`                                         | `java.util.LinkedHashMap$LinkedEntrySet`     |
| removed |  -1,021.96 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     2 → 0 | `descriptorString()`                                 | `java.lang.Class`                            |
| removed |  -1,021.96 KiB |   0.1% → 0.0% |      1,022 KiB → 0 B |     2 → 0 | `keysIterator$kotlin_stdlib()`                       | `kotlin.collections.builders.MapBuilder`     |
|  -40.0% | -1,021.953 KiB |   0.4% → 0.2% |    2.5 MiB → 1.5 MiB |     4 → 3 | `to(Object, Object)`                                 | `kotlin.TuplesKt`                            |
|  -99.5% | -1,017.039 KiB |  0.1% → <0.1% | 1,022 KiB → 4.85 KiB |     2 → 1 | `visitMethod(int, String, String, String, String[])` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### Ours

|  Change |          Delta |           % |                Size | Samples | Function                                                                                                  | Location                                                                                           |
| ------: | -------------: | ----------: | ------------------: | ------: | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -70.3% |     -2.456 MiB | 0.5% → 0.2% | 3.49 MiB → 1.04 MiB |   7 → 2 | `getTypeInternal(String, int, int)`                                                                       | `org.jetbrains.org.objectweb.asm.Type`                                                             |
|  -78.2% |     -2.362 MiB | 0.4% → 0.1% |  3.02 MiB → 673 KiB |   6 → 2 | `getBytes(int, int)`                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| removed |     -1.996 MiB | 0.3% → 0.0% |         2 MiB → 0 B |   3 → 0 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion`          |
|  -60.4% |     -1.809 MiB | 0.4% → 0.2% | 2.99 MiB → 1.18 MiB |   6 → 3 | `simplifyTrivialInstructions(MethodNode)`                                                                 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  -50.9% |     -1.553 MiB | 0.4% → 0.2% |  3.05 MiB → 1.5 MiB |   7 → 3 | `newFieldMap(int)`                                                                                        | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
|  -75.0% |     -1.497 MiB | 0.3% → 0.1% |     2 MiB → 511 KiB |   3 → 1 | `allocateStartMarker()`                                                                                   | `com.intellij.lang.impl.MarkerPool`                                                                |
| removed |     -1.496 MiB | 0.2% → 0.0% |       1.5 MiB → 0 B |   2 → 0 | `build()`                                                                                                 | `org.jetbrains.kotlin.fir.expressions.builder.FirResolvedQualifierBuilder`                         |
|  -60.0% |     -1.496 MiB | 0.4% → 0.1% | 2.5 MiB → 1,022 KiB |   3 → 2 | `requestGroup(TowerGroup, Continuation)`                                                                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                 |
|  -75.0% |     -1.496 MiB | 0.3% → 0.1% |     2 MiB → 511 KiB |   4 → 1 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                           | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
|  -44.6% |     -1.205 MiB | 0.4% → 0.2% |   2.7 MiB → 1.5 MiB |   5 → 3 | `readUtf(int, int, char[])`                                                                               | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|  -48.6% | -1,022.007 KiB | 0.3% → 0.2% | 2.05 MiB → 1.05 MiB |   4 → 2 | `create()`                                                                                                | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                                          |
| removed |     -1,022 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `ensureEntryArrayMutable()`                                                                               | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| removed | -1,021.992 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `asSingleFqName()`                                                                                        | `org.jetbrains.kotlin.name.ClassId`                                                                |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `<init>()`                                                                                                | `org.jetbrains.kotlin.fir.declarations.builder.FirAnonymousFunctionBuilder`                        |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `mapAsmType(Type, ClassifierResolutionContext)`                                                           | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`              |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `getAnnotationsByClassId(List, ClassId, FirSession)`                                                      | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`                                       |
| removed | -1,021.984 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `lower(IrModuleFragment)`                                                                                 | `org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering`         |
| removed | -1,021.976 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   1 → 0 | `createFile(ZipEntryDescription, Map)`                                                                    | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`                                       |
| removed | -1,021.968 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `child(Name)`                                                                                             | `org.jetbrains.kotlin.name.FqNameUnsafe`                                                           |
| removed | -1,021.968 KiB | 0.1% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `build()`                                                                                                 | `org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder`                    |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|   Change |        Delta |              % |                Size | Samples | Location                                                   |
| -------: | -----------: | -------------: | ------------------: | ------: | ---------------------------------------------------------- |
| +5070.9% |  +59.609 MiB | 60.0% → 100.0% | 1.18 MiB → 60.8 MiB |   4 → 2 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |
|  removed | -802.468 KiB |   40.0% → 0.0% |       802 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|   Change |       Delta |      % |                Size | Samples | Location                               |
| -------: | ----------: | -----: | ------------------: | ------: | -------------------------------------- |
| +1389.0% | +20.745 MiB | 100.0% | 1.49 MiB → 22.2 MiB |       3 | `java.util.zip.InflaterInputStream:89` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |      Delta |      % |              Size | Samples | Location                   |
| ------: | ---------: | -----: | ----------------: | ------: | -------------------------- |
| +205.1% | +12.77 MiB | 100.0% | 6.23 MiB → 19 MiB | 21 → 42 | `java.util.ArrayList:1029` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| +99.9% | +3.988 MiB | 100.0% | 3.99 MiB → 7.98 MiB |  7 → 16 | `java.util.HashMap:710` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

| Change |      Delta |      % |                Size | Samples | Location                                              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------- |
| +66.3% | +2.976 MiB | 100.0% | 4.49 MiB → 7.47 MiB |  9 → 14 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

|  Change |      Delta |      % |            Size | Samples | Location                     |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| +140.4% | +2.803 MiB | 100.0% | 2 MiB → 4.8 MiB |  4 → 10 | `java.lang.StringLatin1:750` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |      % |                Size | Samples | Location                                  |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------------------------- |
| +118.8% | +2.438 MiB | 100.0% | 2.05 MiB → 4.49 MiB |   5 → 9 | `java.lang.invoke.DirectMethodHandle:501` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|  Change |        Delta |             % |                Size | Samples | Location                                                                          |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- |
|     new |     +511 KiB |  0.0% → 14.7% |       0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:322` |
|     new |  +510.96 KiB |  0.0% → 14.7% |       0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:327` |
|     new | +510.953 KiB |  0.0% → 14.7% |       0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:340` |
| +100.0% | +510.914 KiB | 50.0% → 29.4% | 511 KiB → 1,022 KiB |   1 → 2 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |
|  +81.2% | +414.968 KiB | 50.0% → 26.6% |   511 KiB → 926 KiB |   1 → 2 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

| Change |      Delta |      % |                Size | Samples | Location                                       |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- |
| +71.0% | +2.072 MiB | 100.0% | 2.92 MiB → 4.99 MiB |  6 → 10 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change |      Delta |      % |             Size | Samples | Location                                             |
| ------: | ---------: | -----: | ---------------: | ------: | ---------------------------------------------------- |
| +100.0% | +1.995 MiB | 100.0% | 2 MiB → 3.99 MiB |   4 → 8 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `read(ByteBuffer)` (`java.nio.channels.Channels$ReadableByteChannelImpl`)

| Change |      Delta |             % |           Size | Samples | Location                                                 |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------------------- |
|    new | +1.983 MiB | 0.0% → 100.0% | 0 B → 1.98 MiB |   0 → 3 | `java.nio.channels.Channels$ReadableByteChannelImpl:311` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change |        Delta |            % |          Size | Samples | Location                                                              |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 33.3% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:661`  |
|    new |     +511 KiB | 0.0% → 33.3% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:1000` |
|    new | +510.992 KiB | 0.0% → 33.3% | 0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:684`  |

##### `topLevel(FqName)` (`org.jetbrains.kotlin.name.ClassId$Companion`)

|  Change |      Delta |      % |            Size | Samples | Location                                          |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------------------------- |
| +300.0% | +1.497 MiB | 100.0% | 511 KiB → 2 MiB |   1 → 4 | `org.jetbrains.kotlin.name.ClassId$Companion:123` |

##### `next()` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

| Change |      Delta |             % |          Size | Samples | Location                                                |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `kotlin.collections.builders.MapBuilder$EntriesItr:550` |

##### `iterator()` (`java.util.AbstractList`)

|  Change |      Delta |      % |            Size | Samples | Location                     |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| +300.0% | +1.497 MiB | 100.0% | 511 KiB → 2 MiB |   1 → 4 | `java.util.AbstractList:301` |

##### `getBufferBytes(ByteBuffer)` (`jdk.internal.jimage.BasicImageReader`)

| Change |      Delta |             % |           Size | Samples | Location                                   |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------------------------------ |
|    new | +1.491 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 3 | `jdk.internal.jimage.BasicImageReader:356` |

##### `getNonDispatchParameters(IrFunction)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |      Delta |             % |           Size | Samples | Location                                     |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------------- |
|    new | +1.389 MiB | 0.0% → 100.0% | 0 B → 1.39 MiB |   0 → 2 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:219` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |      % |                Size | Samples | Location                                        |
| -----: | -------------: | -----: | ------------------: | ------: | ----------------------------------------------- |
| +50.2% | +1,023.046 KiB | 100.0% | 1.99 MiB → 2.99 MiB |   4 → 5 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `add(Object)` (`kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector`)

| Change |          Delta |             % |            Size | Samples | Location                                                                               |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------- |
|    new | +1,021.992 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector:32` |

##### `createListBuilder()` (`kotlin.collections.CollectionsKt__CollectionsJVMKt`)

| Change |          Delta |             % |            Size | Samples | Location                                                |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `kotlin.collections.CollectionsKt__CollectionsJVMKt:47` |

##### `asList(Object[])` (`java.util.Arrays`)

| Change |          Delta |             % |            Size | Samples | Location                |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `java.util.Arrays:4223` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |          Delta |             % |            Size | Samples | Location                           |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------------- |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `java.math.MutableBigInteger:1196` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|    Change |          Delta |      % |                 Size | Samples | Location                          |
| --------: | -------------: | -----: | -------------------: | ------: | --------------------------------- |
| +15472.9% | +1,015.406 KiB | 100.0% | 6.56 KiB → 1,022 KiB |   1 → 2 | `java.lang.invoke.MethodType:400` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |        Delta |      % |                Size | Samples | Location                    |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------- |
| +89.7% | +995.132 KiB | 100.0% | 1.08 MiB → 2.05 MiB |   2 → 3 | `java.lang.StringUTF16:211` |

##### `newString(byte[], long)` (`java.lang.StringConcatHelper`)

| Change |        Delta |      % |                 Size | Samples | Location                           |
| -----: | -----------: | -----: | -------------------: | ------: | ---------------------------------- |
| +63.1% | +644.867 KiB | 100.0% | 1,022 KiB → 1.63 MiB |       2 | `java.lang.StringConcatHelper:400` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |    Delta |             % |          Size | Samples | Location                                         |
| -----: | -------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511 KiB | 0.0% → 100.0% | 0 B → 511 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:658` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|  Change |        Delta |              % |                Size | Samples | Location                                                   |
| ------: | -----------: | -------------: | ------------------: | ------: | ---------------------------------------------------------- |
| +237.9% | +719.554 KiB | 100.0% → 66.7% | 302 KiB → 1,022 KiB |   1 → 2 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:420` |
|     new |     +511 KiB |   0.0% → 33.3% |       0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter:113` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |        Delta |              % |              Size | Samples | Location                                          |
| -----: | -----------: | -------------: | ----------------: | ------: | ------------------------------------------------- |
|    new | +629.515 KiB |   0.0% → 40.1% |     0 B → 630 KiB |   0 → 1 | `org.jetbrains.org.objectweb.asm.ClassReader:214` |
| +84.0% | +429.281 KiB | 100.0% → 59.9% | 511 KiB → 940 KiB |   1 → 2 | `org.jetbrains.org.objectweb.asm.ClassReader:215` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |      Delta |      % |              Size | Samples | Location                                              |
| ------: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------------- |
| +200.0% | +1,022 KiB | 100.0% | 511 KiB → 1.5 MiB |   1 → 3 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:379` |

##### `parent()` (`org.jetbrains.kotlin.name.FqName`)

| Change |          Delta |             % |            Size | Samples | Location                              |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.name.FqName:67` |

##### `getFqNameWhenAvailable(IrDeclarationWithName)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|  Change |        Delta |              % |                Size | Samples | Location                                     |
| ------: | -----------: | -------------: | ------------------: | ------: | -------------------------------------------- |
|     new |     +511 KiB |   0.0% → 33.3% |       0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:277` |
| +100.0% | +510.984 KiB | 100.0% → 66.7% | 511 KiB → 1,022 KiB |   1 → 2 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:276` |

##### `toIrBasedDescriptor(IrClass)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change |          Delta |             % |            Size | Samples | Location                                                       |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt:663` |

##### `transform$lambda$1(int, int)` (`org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`)

| Change |          Delta |             % |            Size | Samples | Location                                                                               |
| -----: | -------------: | ------------: | --------------: | ------: | -------------------------------------------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer:47` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

| Change |          Delta |             % |            Size | Samples | Location                                                            |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:33` |

##### `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

| Change |          Delta |             % |            Size | Samples | Location                                                    |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:32` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

| Change |          Delta |             % |            Size | Samples | Location                                               |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------ |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable:78` |

##### `copyAnnotations(IrAnnotationContainer, Function1)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |         Delta |             % |            Size | Samples | Location                                     |
| -----: | ------------: | ------------: | --------------: | ------: | -------------------------------------------- |
|    new | +1,021.96 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:935` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |        Delta |            % |          Size | Samples | Location                            |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------- |
| removed |  -63.964 MiB | 99.7% → 0.0% |  64 MiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1744` |
| removed | -174.695 KiB |  0.3% → 0.0% | 175 KiB → 0 B |   1 → 0 | `java.util.zip.ZipFile$Source:1733` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size | Samples | Location                |
| -----: | ----------: | ------------: | ----------------: | ------: | ----------------------- |
| -33.3% | -52.078 MiB | 95.4% → 90.5% | 156 MiB → 104 MiB | 79 → 71 | `java.util.Arrays:3539` |
| +46.2% |  +3.468 MiB |   4.6% → 9.5% | 7.51 MiB → 11 MiB | 15 → 23 | `java.util.Arrays:3541` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |           Size | Samples | Location                                      |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- |
| removed | -21.218 MiB | 100.0% → 0.0% | 21.2 MiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |      Delta |      % |              Size |   Samples | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------- |
|  -3.4% | -4.072 MiB | 100.0% | 121 MiB → 117 MiB | 121 → 125 | `java.io.ByteArrayOutputStream:81` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |            % |            Size | Samples | Location                                         |
| ------: | -------------: | -----------: | --------------: | ------: | ------------------------------------------------ |
| removed |     -1.993 MiB | 66.6% → 0.0% |  1.99 MiB → 0 B |   2 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |
| removed | -1,021.984 KiB | 33.4% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:158` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |     Delta |      % |             Size | Samples | Location                              |
| -----: | --------: | -----: | ---------------: | ------: | ------------------------------------- |
| -60.0% | -2.99 MiB | 100.0% | 4.99 MiB → 2 MiB |   9 → 4 | `java.lang.AbstractStringBuilder:101` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------- |
| -28.2% | -2.937 MiB | 100.0% | 10.4 MiB → 7.49 MiB | 19 → 15 | `java.util.ArrayList:239` |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

| Change |      Delta |      % |               Size | Samples | Location                                    |
| -----: | ---------: | -----: | -----------------: | ------: | ------------------------------------------- |
| -88.7% | -2.657 MiB | 100.0% | 2.99 MiB → 345 KiB |   5 → 1 | `kotlin.collections.builders.SetBuilder:19` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -33.3% | -2.495 MiB | 100.0% | 7.48 MiB → 4.99 MiB | 14 → 10 | `java.util.HashSet:171` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change |          Delta |              % |               Size | Samples | Location                                   |
| ------: | -------------: | -------------: | -----------------: | ------: | ------------------------------------------ |
|  -58.5% |     -1.458 MiB | 71.4% → 100.0% | 2.5 MiB → 1.04 MiB |   5 → 2 | `org.jetbrains.org.objectweb.asm.Type:425` |
| removed | -1,021.992 KiB |   28.6% → 0.0% |    1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.Type:423` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

| Change |      Delta |      % |               Size | Samples | Location                                                                          |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------------------------------------------------------------------- |
| -78.2% | -2.362 MiB | 100.0% | 3.02 MiB → 673 KiB |   6 → 2 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion`)

|  Change |        Delta |            % |          Size | Samples | Location                                                                                      |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
| removed |   -1.497 MiB | 75.0% → 0.0% | 1.5 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion:119` |
| removed | -510.992 KiB | 25.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion:98`  |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |          Delta |            % |            Size | Samples | Location                                                                                              |
| ------: | -------------: | -----------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------- |
| removed |     -1.497 MiB | 50.0% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
| removed | -1,021.992 KiB | 33.3% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |
|     new |   +701.953 KiB | 0.0% → 57.9% |   0 B → 702 KiB |   0 → 2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |
|     new |       +511 KiB | 0.0% → 42.1% |   0 B → 511 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |
| removed |   -510.992 KiB | 16.7% → 0.0% |   511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:48` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

| Change |      Delta |      % |               Size | Samples | Location                                           |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------------------------------------- |
| -50.9% | -1.553 MiB | 100.0% | 3.05 MiB → 1.5 MiB |   7 → 3 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `allocateStartMarker()` (`com.intellij.lang.impl.MarkerPool`)

| Change |      Delta |      % |            Size | Samples | Location                               |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------- |
| -75.0% | -1.497 MiB | 100.0% | 2 MiB → 511 KiB |   3 → 1 | `com.intellij.lang.impl.MarkerPool:26` |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirResolvedQualifierBuilder`)

|  Change |      Delta |             % |          Size | Samples | Location                                                                      |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------- |
| removed | -1.496 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.expressions.builder.FirResolvedQualifierBuilder:50` |

##### `singletonIterator(Object)` (`java.util.Collections`)

| Change |      Delta |      % |            Size | Samples | Location                     |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| -75.0% | -1.496 MiB | 100.0% | 2 MiB → 511 KiB |   3 → 1 | `java.util.Collections:5028` |

##### `lazy(LazyThreadSafetyMode, Function0)` (`kotlin.LazyKt__LazyJVMKt`)

| Change |      Delta |             % |                Size | Samples | Location                      |
| -----: | ---------: | ------------: | ------------------: | ------: | ----------------------------- |
| -68.4% | -699.5 KiB | 50.0% → 38.7% | 1,022 KiB → 322 KiB |       1 | `kotlin.LazyKt__LazyJVMKt:45` |
| -50.0% |   -511 KiB | 50.0% → 61.3% | 1,022 KiB → 511 KiB |   2 → 1 | `kotlin.LazyKt__LazyJVMKt:44` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |      Delta |      % |                Size | Samples | Location                      |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------- |
| -40.9% | -1.032 MiB | 100.0% | 2.53 MiB → 1.49 MiB |   5 → 3 | `java.lang.StringBuilder:475` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |                Size | Samples | Location                |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------- |
| -20.2% | -1.006 MiB | 100.0% | 4.99 MiB → 3.98 MiB |   9 → 7 | `java.util.Arrays:3482` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|  Change |          Delta |             % |            Size | Samples | Location                                     |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `java.util.LinkedHashMap$LinkedEntrySet:914` |

##### `descriptorString()` (`java.lang.Class`)

|  Change |         Delta |             % |            Size | Samples | Location               |
| ------: | ------------: | ------------: | --------------: | ------: | ---------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `java.lang.Class:4585` |

##### `keysIterator$kotlin_stdlib()` (`kotlin.collections.builders.MapBuilder`)

|  Change |         Delta |             % |            Size | Samples | Location                                     |
| ------: | ------------: | ------------: | --------------: | ------: | -------------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `kotlin.collections.builders.MapBuilder:471` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

| Change |          Delta |      % |              Size | Samples | Location             |
| -----: | -------------: | -----: | ----------------: | ------: | -------------------- |
| -40.0% | -1,021.953 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   4 → 3 | `kotlin.TuplesKt:44` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |          Delta |      % |                 Size | Samples | Location                                         |
| -----: | -------------: | -----: | -------------------: | ------: | ------------------------------------------------ |
| -99.5% | -1,017.039 KiB | 100.0% | 1,022 KiB → 4.85 KiB |   2 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |        Delta |              % |          Size | Samples | Location                                                           |
| ------: | -----------: | -------------: | ------------: | ------: | ------------------------------------------------------------------ |
| removed | -510.859 KiB |   25.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:30` |
| removed | -510.765 KiB |   25.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:34` |
| removed |  -510.46 KiB |   25.0% → 0.0% | 510 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:28` |
|     ~0% |       -184 B | 25.0% → 100.0% |       511 KiB |       1 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:35` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |      % |              Size | Samples | Location                                           |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------------- |
| -44.6% | -1.205 MiB | 100.0% | 2.7 MiB → 1.5 MiB |   5 → 3 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change |          Delta |      % |                Size | Samples | Location                                                       |
| -----: | -------------: | -----: | ------------------: | ------: | -------------------------------------------------------------- |
| -48.6% | -1,022.007 KiB | 100.0% | 2.05 MiB → 1.05 MiB |   4 → 2 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

##### `ensureEntryArrayMutable()` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change |      Delta |             % |            Size | Samples | Location                                           |
| ------: | ---------: | ------------: | --------------: | ------: | -------------------------------------------------- |
| removed | -1,022 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:391` |

##### `asSingleFqName()` (`org.jetbrains.kotlin.name.ClassId`)

|  Change |          Delta |             % |            Size | Samples | Location                               |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.name.ClassId:74` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.builder.FirAnonymousFunctionBuilder`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                       |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------------ |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.declarations.builder.FirAnonymousFunctionBuilder:38` |

##### `mapAsmType(Type, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                                  |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser:203` |

##### `getAnnotationsByClassId(List, ClassId, FirSession)` (`org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`)

|  Change |          Delta |             % |            Size | Samples | Location                                                         |
| ------: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt:287` |

##### `lower(IrModuleFragment)` (`org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                                      |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering:45` |

##### `createFile(ZipEntryDescription, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|  Change |          Delta |             % |            Size | Samples | Location                                                        |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------------------- |
| removed | -1,021.976 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler:77` |

##### `child(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|  Change |          Delta |             % |            Size | Samples | Location                                    |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.name.FqNameUnsafe:98` |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder`)

|  Change |          Delta |             % |            Size | Samples | Location                                                                           |
| ------: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder:39` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|   Change |       Delta |      % |                Size | Samples | Caller                                                                       | Location                                               |
| -------: | ----------: | -----: | ------------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +3002.6% | +58.826 MiB | 100.0% | 1.96 MiB → 60.8 MiB |   6 → 2 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `getDeclaredMethods0(boolean)` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Caller                               | Location          |
| --------: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | ----------------- |
| +11872.2% | +58.803 MiB | 100.0% | 507 KiB → 59.3 MiB |       1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

|   Change |       Delta |      % |                Size | Samples | Caller                                                                                  | Location                                           |
| -------: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +1389.0% | +20.745 MiB | 100.0% | 1.49 MiB → 22.2 MiB |       3 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |      Delta |            % |                Size | Samples | Caller                                 | Location                                                        |
| ------: | ---------: | -----------: | ------------------: | ------: | -------------------------------------- | --------------------------------------------------------------- |
|     new | +1.996 MiB | 0.0% → 10.5% |         0 B → 2 MiB |   0 → 4 | `iterator-impl(List)`                  | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                   |
| removed |   -511 KiB |  8.0% → 0.0% |       511 KiB → 0 B |   1 → 0 | `getValueParameterSymbols()`           | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`       |
| +100.0% |   +511 KiB |  8.0% → 5.3% | 511 KiB → 1,022 KiB |   1 → 2 | `acceptChildren(IrVisitor, Object)`    | `org.jetbrains.kotlin.ir.declarations.IrFunction`               |
| removed |   -511 KiB |  8.0% → 0.0% |       511 KiB → 0 B |   1 → 0 | `computeExceptionHandlers(MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer` |
|     new |   +511 KiB |  0.0% → 2.6% |       0 B → 511 KiB |   0 → 1 | `getResolvedSuperTypes()`              | `org.jetbrains.kotlin.fir.symbols.impl.FirClassSymbol`          |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +99.9% | +3.988 MiB | 100.0% | 3.99 MiB → 7.98 MiB |  7 → 16 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|  Change |        Delta |             % |                Size | Samples | Caller             | Location                                                          |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------ | ----------------------------------------------------------------- |
|     new |   +1.497 MiB |  0.0% → 27.6% |       0 B → 1.5 MiB |   0 → 3 | `getBounds()`      | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl` |
| +100.0% |     +511 KiB | 33.3% → 18.4% | 511 KiB → 1,022 KiB |   1 → 2 | `getAnnotations()` | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`  |
|     new |     +511 KiB |   0.0% → 9.2% |       0 B → 511 KiB |   0 → 1 | `getAnnotations()` | `org.jetbrains.kotlin.fir.types.impl.FirUserTypeRefImpl`          |
|     new |     +511 KiB |   0.0% → 9.2% |       0 B → 511 KiB |   0 → 1 | `getAnnotations()` | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyImpl`      |
| removed | -510.992 KiB |  33.3% → 0.0% |       511 KiB → 0 B |   1 → 0 | `getAnnotations()` | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`   |

##### `clone()` (`java.lang.Object`)

|  Change |        Delta |              % |                Size | Samples | Caller                          | Location                          |
| ------: | -----------: | -------------: | ------------------: | ------: | ------------------------------- | --------------------------------- |
|  +74.1% |   +4.341 MiB | 92.2% → 100.0% | 5.86 MiB → 10.2 MiB | 19 → 28 | `copyOf(byte[], int)`           | `java.util.Arrays`                |
| removed | -510.992 KiB |    7.8% → 0.0% |       511 KiB → 0 B |   1 → 0 | `clone()`                       | `java.lang.invoke.MemberName`     |
|     new |    +4.71 KiB |   0.0% → <0.1% |      0 B → 4.71 KiB |   0 → 1 | `canonicalizeAll(Class[], int)` | `java.lang.invoke.MethodTypeForm` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |          Delta |             % |                Size | Samples | Caller                                            | Location                                                |
| ------: | -------------: | ------------: | ------------------: | ------: | ------------------------------------------------- | ------------------------------------------------------- |
| +396.5% |     +1.978 MiB | 11.1% → 33.2% |  511 KiB → 2.48 MiB |   1 → 4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`  |
| +150.0% |     +1.497 MiB | 22.2% → 33.4% | 1,022 KiB → 2.5 MiB |   2 → 5 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`           |
| +200.0% | +1,022.007 KiB | 11.1% → 20.0% |   511 KiB → 1.5 MiB |   1 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter` |
| removed | -1,021.984 KiB |  22.2% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`     |
| removed |       -511 KiB |  11.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`  |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |        Delta |              % |             Size | Samples | Caller                | Location                          |
| -----: | -----------: | -------------: | ---------------: | ------: | --------------------- | --------------------------------- |
| +93.3% |   +1.861 MiB | 100.0% → 80.4% | 2 MiB → 3.86 MiB |   4 → 8 | `substring(int, int)` | `java.lang.String`                |
|    new | +964.296 KiB |   0.0% → 19.6% |    0 B → 964 KiB |   0 → 2 | `substring(int, int)` | `java.lang.AbstractStringBuilder` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |          Delta |             % |                Size | Samples | Caller                                                                  | Location                                             |
| ------: | -------------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------- | ---------------------------------------------------- |
|  +66.7% | +1,021.992 KiB | 72.9% → 55.6% |   1.5 MiB → 2.5 MiB |   3 → 5 | `newInvokeSpecial(Object, Object)`                                      | `java.lang.invoke.DirectMethodHandle$Holder`         |
| +100.0% |   +511.007 KiB | 24.3% → 22.2% | 511 KiB → 1,022 KiB |   1 → 2 | `newInvokeSpecial(Object, Object, Object)`                              | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |       +511 KiB |  0.0% → 11.1% |       0 B → 511 KiB |   0 → 1 | `newInvokeSpecial(Object, int)`                                         | `java.lang.invoke.DirectMethodHandle$Holder`         |
|     new |   +510.984 KiB |  0.0% → 11.1% |       0 B → 511 KiB |   0 → 1 | `newInvokeSpecial(Object, Object, Object, Object, int, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x00000070016a8000` |
| removed |    -58.359 KiB |   2.8% → 0.0% |      58.4 KiB → 0 B |   1 → 0 | `newInvokeSpecial(Object, Object, int)`                                 | `java.lang.invoke.LambdaForm$DMH.0x000000f801006800` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|  Change |      Delta |      % |                Size | Samples | Caller                                                                                                | Location                                                                     |
| ------: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +240.6% | +2.401 MiB | 100.0% | 1,022 KiB → 3.4 MiB |   2 → 7 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change |        Delta |             % |                Size | Samples | Caller                                            | Location                                                           |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
|     new |   +1.996 MiB |  0.0% → 40.0% |         0 B → 2 MiB |   0 → 4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
| +100.0% |     +511 KiB | 17.1% → 20.0% | 511 KiB → 1,022 KiB |   1 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
|     new |     +511 KiB |  0.0% → 10.0% |       0 B → 511 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$JvmFieldSignature`  |
|     new | +510.992 KiB |  0.0% → 10.0% |       0 B → 511 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |
| removed | -510.992 KiB |  17.1% → 0.0% |       511 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeTable`                 |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change |      Delta |      % |             Size | Samples | Caller                                                      | Location                                        |
| ------: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| +100.0% | +1.995 MiB | 100.0% | 2 MiB → 3.99 MiB |   4 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `read(ByteBuffer)` (`java.nio.channels.Channels$ReadableByteChannelImpl`)

| Change |      Delta |             % |           Size | Samples | Caller             | Location                             |
| -----: | ---------: | ------------: | -------------: | ------: | ------------------ | ------------------------------------ |
|    new | +1.983 MiB | 0.0% → 100.0% | 0 B → 1.98 MiB |   0 → 3 | `read(ByteBuffer)` | `jdk.internal.jrtfs.JrtFileSystem$1` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change |      Delta |             % |          Size | Samples | Caller                                                                                                                              | Location                                                         |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `topLevel(FqName)` (`org.jetbrains.kotlin.name.ClassId$Companion`)

|  Change |          Delta |              % |              Size | Samples | Caller                                                       | Location                                                         |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| +200.0% | +1,021.984 KiB | 100.0% → 75.0% | 511 KiB → 1.5 MiB |   1 → 3 | `topLevel(FqName)`                                           | `org.jetbrains.kotlin.name.ClassId`                              |
|     new |   +510.992 KiB |   0.0% → 25.0% |     0 B → 511 KiB |   0 → 1 | `processClassifiersFromImportsByName(Name, List, Function1)` | `org.jetbrains.kotlin.fir.scopes.impl.FirAbstractImportingScope` |

##### `next()` (`kotlin.collections.builders.MapBuilder$EntriesItr`)

| Change |      Delta |             % |          Size | Samples | Caller   | Location                                            |
| -----: | ---------: | ------------: | ------------: | ------: | -------- | --------------------------------------------------- |
|    new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `next()` | `kotlin.collections.builders.MapBuilder$EntriesItr` |

##### `iterator()` (`java.util.AbstractList`)

|  Change |      Delta |      % |            Size | Samples | Caller       | Location                               |
| ------: | ---------: | -----: | --------------: | ------: | ------------ | -------------------------------------- |
| +300.0% | +1.497 MiB | 100.0% | 511 KiB → 2 MiB |   1 → 4 | `iterator()` | `org.jetbrains.kotlin.utils.SmartList` |

##### `getBufferBytes(ByteBuffer)` (`jdk.internal.jimage.BasicImageReader`)

| Change |      Delta |             % |           Size | Samples | Caller                       | Location                               |
| -----: | ---------: | ------------: | -------------: | ------: | ---------------------------- | -------------------------------------- |
|    new | +1.491 MiB | 0.0% → 100.0% | 0 B → 1.49 MiB |   0 → 3 | `getResource(ImageLocation)` | `jdk.internal.jimage.BasicImageReader` |

##### `getNonDispatchParameters(IrFunction)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |          Delta |            % |            Size | Samples | Caller                                                | Location                                                         |
| -----: | -------------: | -----------: | --------------: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 71.8% | 0 B → 1,022 KiB |   0 → 1 | `mapSignature(IrFunction, boolean, boolean, boolean)` | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|    new |   +401.234 KiB | 0.0% → 28.2% |   0 B → 401 KiB |   0 → 1 | `toDescription(IrSimpleFunction)`                     | `org.jetbrains.kotlin.backend.common.lower.SpecialBridgeMethods` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |      % |                Size | Samples | Caller            | Location                                    |
| -----: | -------------: | -----: | ------------------: | ------: | ----------------- | ------------------------------------------- |
| +50.2% | +1,023.046 KiB | 100.0% | 1.99 MiB → 2.99 MiB |   4 → 5 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `add(Object)` (`kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector`)

| Change |        Delta |            % |          Size | Samples | Caller                                     | Location                                                    |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------ | ----------------------------------------------------------- |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `addLocalScope(FirLocalScope)`             | `org.jetbrains.kotlin.fir.declarations.FirTowerDataContext` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `addReceiver(Name, ImplicitReceiverValue)` | `org.jetbrains.kotlin.fir.declarations.FirTowerDataContext` |

##### `createListBuilder()` (`kotlin.collections.CollectionsKt__CollectionsJVMKt`)

| Change |        Delta |            % |          Size | Samples | Caller                                     | Location                                                           |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------ | ------------------------------------------------------------------ |
|    new |     +511 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `getTopLevelPropertySymbols(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`     |
|    new | +510.984 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `convertClassContent(IrClass, FirClass)`   | `org.jetbrains.kotlin.fir.backend.generators.ClassMemberGenerator` |

##### `asList(Object[])` (`java.util.Arrays`)

| Change |          Delta |             % |            Size | Samples | Caller             | Location                           |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------ | ---------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `asList(Object[])` | `kotlin.collections.ArraysUtilJVM` |

##### `divideKnuth(MutableBigInteger, MutableBigInteger, boolean)` (`java.math.MutableBigInteger`)

| Change |          Delta |             % |            Size | Samples | Caller                                                  | Location                      |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------------- | ----------------------------- |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `divide(MutableBigInteger, MutableBigInteger, boolean)` | `java.math.MutableBigInteger` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

|    Change |          Delta |      % |                 Size | Samples | Caller                                | Location                      |
| --------: | -------------: | -----: | -------------------: | ------: | ------------------------------------- | ----------------------------- |
| +15472.9% | +1,015.406 KiB | 100.0% | 6.56 KiB → 1,022 KiB |   1 → 2 | `methodType(Class, Class[], boolean)` | `java.lang.invoke.MethodType` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |        Delta |      % |                Size | Samples | Caller                           | Location           |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------- | ------------------ |
| +89.7% | +995.132 KiB | 100.0% | 1.08 MiB → 2.05 MiB |   2 → 3 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `newString(byte[], long)` (`java.lang.StringConcatHelper`)

| Change |        Delta |      % |                 Size | Samples | Caller                         | Location                       |
| -----: | -----------: | -----: | -------------------: | ------: | ------------------------------ | ------------------------------ |
| +63.1% | +644.867 KiB | 100.0% | 1,022 KiB → 1.63 MiB |       2 | `simpleConcat(Object, Object)` | `java.lang.StringConcatHelper` |

##### `toByteArray()` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |    Delta |             % |          Size | Samples | Caller                 | Location                                       |
| -----: | -------: | ------------: | ------------: | ------: | ---------------------- | ---------------------------------------------- |
|    new | +511 KiB | 0.0% → 100.0% | 0 B → 511 KiB |   0 → 1 | `generateInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `toIrType(ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`)

|  Change |      Delta |      % |              Size | Samples | Caller                                                                                                                               | Location                                               |
| ------: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| +406.9% | +1.201 MiB | 100.0% | 302 KiB → 1.5 MiB |   1 → 3 | `toIrType$default(Fir2IrTypeConverter, ConeKotlinType, ConversionTypeOrigin, List, boolean, boolean, boolean, boolean, int, Object)` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |      Delta |      % |               Size | Samples | Caller                     | Location                                      |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------------- | --------------------------------------------- |
| +207.3% | +1.033 MiB | 100.0% | 511 KiB → 1.53 MiB |   1 → 3 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |    Delta |              % |                Size | Samples | Caller                                                  | Location                                              |
| ------: | -------: | -------------: | ------------------: | ------: | ------------------------------------------------------- | ----------------------------------------------------- |
| +100.0% | +511 KiB | 100.0% → 66.7% | 511 KiB → 1,022 KiB |   1 → 2 | `visitMethodInsn(int, String, String, String, boolean)` | `org.jetbrains.org.objectweb.asm.MethodVisitor`       |
|     new | +511 KiB |   0.0% → 33.3% |       0 B → 511 KiB |   0 → 1 | `accept(MethodVisitor)`                                 | `org.jetbrains.org.objectweb.asm.tree.MethodInsnNode` |

##### `parent()` (`org.jetbrains.kotlin.name.FqName`)

| Change |        Delta |            % |          Size | Samples | Caller              | Location                                      |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------- | --------------------------------------------- |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `topLevel(FqName)`  | `org.jetbrains.kotlin.name.ClassId$Companion` |
|    new | +510.992 KiB | 0.0% → 50.0% | 0 B → 511 KiB |   0 → 1 | `getOuterClassId()` | `org.jetbrains.kotlin.name.ClassId`           |

##### `getFqNameWhenAvailable(IrDeclarationWithName)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

|  Change |        Delta |              % |                Size | Samples | Caller                                        | Location                                            |
| ------: | -----------: | -------------: | ------------------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| +100.0% | +511.007 KiB | 100.0% → 66.7% | 511 KiB → 1,022 KiB |   1 → 2 | `getClassFqNameUnsafe(TypeConstructorMarker)` | `org.jetbrains.kotlin.ir.types.IrTypeSystemContext` |
|     new | +510.976 KiB |   0.0% → 33.3% |       0 B → 511 KiB |   0 → 1 | `asInfoForMangling(IrType)`                   | `org.jetbrains.kotlin.backend.jvm.InlineClassAbi`   |

##### `toIrBasedDescriptor(IrClass)` (`org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt`)

| Change |          Delta |             % |            Size | Samples | Caller                               | Location                                                   |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------ | ---------------------------------------------------------- |
|    new | +1,021.984 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `toIrBasedDescriptor(IrDeclaration)` | `org.jetbrains.kotlin.ir.descriptors.IrBasedDescriptorsKt` |

##### `transform$lambda$1(int, int)` (`org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer`)

| Change |          Delta |             % |            Size | Samples | Caller                   | Location                                                                                                                                                                                                                      |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer$$Lambda.0x000000f80190afb8 → org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxingMethodTransformer$$Lambda.0x000000700190afb8` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

| Change |          Delta |             % |            Size | Samples | Caller                       | Location                                                         |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------- | ---------------------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `getQualifiedClassName(int)` | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |

##### `constructClassType(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

| Change |          Delta |             % |            Size | Samples | Caller                                                                                                           | Location                                                 |
| -----: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|    new | +1,021.976 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 2 | `constructClassType$default(ConeClassLikeLookupTag, ConeTypeProjection[], boolean, ConeAttributes, int, Object)` | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

| Change |          Delta |             % |            Size | Samples | Caller        | Location                                                                       |
| -----: | -------------: | ------------: | --------------: | ------: | ------------- | ------------------------------------------------------------------------------ |
|    new | +1,021.968 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `get(Object)` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |

##### `copyAnnotations(IrAnnotationContainer, Function1)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |         Delta |             % |            Size | Samples | Caller                                                                   | Location                                 |
| -----: | ------------: | ------------: | --------------: | ------: | ------------------------------------------------------------------------ | ---------------------------------------- |
|    new | +1,021.96 KiB | 0.0% → 100.0% | 0 B → 1,022 KiB |   0 → 1 | `copyAnnotations$default(IrAnnotationContainer, Function1, int, Object)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Caller                                          | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size | Samples | Caller                        | Location                          |
| -----: | -----------: | ------------: | ------------------: | ------: | ----------------------------- | --------------------------------- |
| -33.3% |  -52.078 MiB | 95.4% → 90.5% |   156 MiB → 104 MiB | 79 → 71 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| +38.7% |   +2.506 MiB |   4.0% → 7.8% | 6.48 MiB → 8.99 MiB | 13 → 19 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| +93.8% | +985.031 KiB |   0.6% → 1.7% | 1.03 MiB → 1.99 MiB |   2 → 4 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |       Delta |             % |           Size | Samples | Caller                            | Location                                 |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -21.218 MiB | 100.0% → 0.0% | 21.2 MiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |      % |               Size | Samples | Caller                     | Location                              |
| -----: | --------: | -----: | -----------------: | ------: | -------------------------- | ------------------------------------- |
| -90.2% | -4.61 MiB | 100.0% | 5.11 MiB → 511 KiB |  11 → 1 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |      Delta |      % |              Size |   Samples | Caller                                                  | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------ |
|  -3.4% | -4.072 MiB | 100.0% | 121 MiB → 117 MiB | 121 → 125 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |      Delta |             % |           Size | Samples | Caller                     | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -2.991 MiB | 100.0% → 0.0% | 2.99 MiB → 0 B |   4 → 0 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |             % |               Size | Samples | Caller        | Location                  |
| -----: | ---------: | ------------: | -----------------: | ------: | ------------- | ------------------------- |
| -75.0% | -1.496 MiB | 40.0% → 25.0% |    2 MiB → 511 KiB |   4 → 1 | `<init>(int)` | `java.lang.StringBuilder` |
| -49.9% | -1.493 MiB | 60.0% → 75.0% | 2.99 MiB → 1.5 MiB |   5 → 3 | `<init>()`    | `java.lang.StringBuilder` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |        Delta |              % |                Size | Samples | Caller               | Location              |
| ------: | -----------: | -------------: | ------------------: | ------: | -------------------- | --------------------- |
|  -21.1% |   -1.995 MiB | 91.0% → 100.0% | 9.48 MiB → 7.49 MiB | 17 → 15 | `grow()`             | `java.util.ArrayList` |
| removed | -964.257 KiB |    9.0% → 0.0% |       964 KiB → 0 B |   2 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

| Change |      Delta |      % |               Size | Samples | Caller               | Location                               |
| -----: | ---------: | -----: | -----------------: | ------: | -------------------- | -------------------------------------- |
| -88.7% | -2.657 MiB | 100.0% | 2.99 MiB → 345 KiB |   5 → 1 | `createSetBuilder()` | `kotlin.collections.SetsKt__SetsJVMKt` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|  Change |        Delta |              % |                Size | Samples | Caller        | Location                  |
| ------: | -----------: | -------------: | ------------------: | ------: | ------------- | ------------------------- |
|  -28.6% |   -1.996 MiB | 93.3% → 100.0% | 6.99 MiB → 4.99 MiB | 13 → 10 | `<init>()`    | `java.util.LinkedHashSet` |
| removed | -510.968 KiB |    6.7% → 0.0% |       511 KiB → 0 B |   1 → 0 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change |          Delta |             % |              Size | Samples | Caller                     | Location                               |
| ------: | -------------: | ------------: | ----------------: | ------: | -------------------------- | -------------------------------------- |
|  -66.7% | -1,021.976 KiB | 42.9% → 48.1% | 1.5 MiB → 511 KiB |   3 → 1 | `getReturnType(String)`    | `org.jetbrains.org.objectweb.asm.Type` |
|  -64.1% |   -982.429 KiB | 42.9% → 51.9% | 1.5 MiB → 551 KiB |   3 → 1 | `getArgumentTypes(String)` | `org.jetbrains.org.objectweb.asm.Type` |
| removed |   -510.984 KiB |  14.3% → 0.0% |     511 KiB → 0 B |   1 → 0 | `getType(String)`          | `org.jetbrains.org.objectweb.asm.Type` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

| Change |        Delta |             % |               Size | Samples | Caller                                                                                      | Location                                                          |
| -----: | -----------: | ------------: | -----------------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -80.3% |   -2.024 MiB | 83.5% → 75.5% | 2.52 MiB → 508 KiB |   5 → 1 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
| -67.8% | -346.242 KiB | 16.5% → 24.5% |  511 KiB → 165 KiB |       1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion`)

|  Change |      Delta |             % |        Size | Samples | Caller                                               | Location                                                                   |
| ------: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -1.996 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   3 → 0 | `visitMethod(int, String, String, String, String[])` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaClass` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change |      Delta |      % |                Size | Samples | Caller                          | Location                                                                                           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| -60.4% | -1.809 MiB | 100.0% | 2.99 MiB → 1.18 MiB |   6 → 3 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `initClassName()` (`java.lang.Class`)

| Change |      Delta |      % |               Size | Samples | Caller      | Location          |
| -----: | ---------: | -----: | -----------------: | ------: | ----------- | ----------------- |
| -77.1% | -1.673 MiB | 100.0% | 2.17 MiB → 508 KiB |   4 → 1 | `getName()` | `java.lang.Class` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

| Change |      Delta |      % |               Size | Samples | Caller     | Location                                 |
| -----: | ---------: | -----: | -----------------: | ------: | ---------- | ---------------------------------------- |
| -50.9% | -1.553 MiB | 100.0% | 3.05 MiB → 1.5 MiB |   7 → 3 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `allocateStartMarker()` (`com.intellij.lang.impl.MarkerPool`)

| Change |      Delta |      % |            Size | Samples | Caller              | Location                                |
| -----: | ---------: | -----: | --------------: | ------: | ------------------- | --------------------------------------- |
| -75.0% | -1.497 MiB | 100.0% | 2 MiB → 511 KiB |   3 → 1 | `createMarker(int)` | `com.intellij.lang.impl.PsiBuilderImpl` |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirResolvedQualifierBuilder`)

|  Change |      Delta |             % |          Size | Samples | Caller                                                                                                                                                                                        | Location                                          |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| removed | -1.496 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   2 → 0 | `buildResolvedQualifierForClass(BodyResolveComponents, FirClassLikeSymbol, KtSourceElement, FqName, FqName, List, ConeDiagnostic, List, List, FirResolvedQualifier, FirResolvedSymbolOrigin)` | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt` |

##### `requestGroup(TowerGroup, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change |      Delta |      % |                Size | Samples | Caller                                                                               | Location                                                               |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -60.0% | -1.496 MiB | 100.0% | 2.5 MiB → 1,022 KiB |   3 → 2 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `singletonIterator(Object)` (`java.util.Collections`)

|  Change |          Delta |              % |              Size | Samples | Caller       | Location                              |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------ | ------------------------------------- |
|  -66.7% | -1,021.929 KiB | 75.0% → 100.0% | 1.5 MiB → 511 KiB |   2 → 1 | `iterator()` | `java.util.Collections$SingletonList` |
| removed |   -510.984 KiB |   25.0% → 0.0% |     511 KiB → 0 B |   1 → 0 | `iterator()` | `java.util.Collections$SingletonSet`  |

##### `lazy(LazyThreadSafetyMode, Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                                           | Location                                                                           |
| ------: | -------------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| removed | -1,021.976 KiB | 50.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `<init>(Function0, List)`                                                        | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType` |
| removed |       -511 KiB | 25.0% → 0.0% |   511 KiB → 0 B |   1 → 0 | `toLazyEffectiveVisibility(Visibility, FirClassLikeSymbol, FirSession, boolean)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializerKt`                 |
|     new |   +322.476 KiB | 0.0% → 38.7% |   0 B → 322 KiB |   0 → 1 | `substituteArguments(ConeSimpleKotlinType)`                                      | `org.jetbrains.kotlin.fir.resolve.substitution.AbstractConeSubstitutor`            |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                                               | Location                                                         |
| ------: | -------------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| removed | -1,021.984 KiB | 39.5% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `fromMethodNameAndDesc(String, String)`                                              | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`     |
| removed |   -543.671 KiB | 21.0% → 0.0% |   544 KiB → 0 B |   1 → 0 | `unparseMethod(Class, Class[])`                                                      | `sun.invoke.util.BytecodeDescriptor`                             |
|     new |       +511 KiB | 0.0% → 33.4% |   0 B → 511 KiB |   0 → 1 | `asSingleFqName()`                                                                   | `kotlin.reflect.jvm.internal.impl.name.ClassId`                  |
| removed |   -510.992 KiB | 19.7% → 0.0% |   511 KiB → 0 B |   1 → 0 | `collectFunctionSignatureForManglingSuffix(boolean, boolean, List, InfoForMangling)` | `org.jetbrains.kotlin.codegen.state.InlineClassManglingUtilsKt`  |
|     new |   +510.992 KiB | 0.0% → 33.4% |   0 B → 511 KiB |   0 → 1 | `getPath()`                                                                          | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarVirtualFile` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |          Delta |             % |                Size | Samples | Caller             | Location                                                |
| -----: | -------------: | ------------: | ------------------: | ------: | ------------------ | ------------------------------------------------------- |
| -33.6% |     -1.006 MiB | 60.0% → 49.9% | 2.99 MiB → 1.99 MiB |   5 → 4 | `grow(int)`        | `java.util.ArrayList`                                   |
| -50.0% | -1,021.984 KiB | 40.0% → 25.1% |   2 MiB → 1,022 KiB |   4 → 2 | `toArray()`        | `java.util.ArrayList`                                   |
|    new | +1,021.937 KiB |  0.0% → 25.1% |     0 B → 1,022 KiB |   0 → 1 | `ensureCapacity()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedEntrySet`)

|  Change |        Delta |            % |          Size | Samples | Caller                                               | Location                                                                      |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| removed | -510.992 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirCall)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirNamedVarargChecker` |
| removed | -510.976 KiB | 50.0% → 0.0% | 511 KiB → 0 B |   1 → 0 | `doAddOtherSystem(ConstraintStorage, boolean)`       | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`  |

##### `descriptorString()` (`java.lang.Class`)

|  Change |         Delta |             % |            Size | Samples | Caller                             | Location                             |
| ------: | ------------: | ------------: | --------------: | ------: | ---------------------------------- | ------------------------------------ |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `unparseSig(Class, StringBuilder)` | `sun.invoke.util.BytecodeDescriptor` |

##### `keysIterator$kotlin_stdlib()` (`kotlin.collections.builders.MapBuilder`)

|  Change |         Delta |             % |            Size | Samples | Caller       | Location                                 |
| ------: | ------------: | ------------: | --------------: | ------: | ------------ | ---------------------------------------- |
| removed | -1,021.96 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `iterator()` | `kotlin.collections.builders.SetBuilder` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                                                                             | Location                                                                                                           |
| ------: | -------------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| removed | -1,021.984 KiB | 40.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)`                                               | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                            |
| removed |       -511 KiB | 20.0% → 0.0% |   511 KiB → 0 B |   1 → 0 | `fakeElement(KtSourceElement, KtFakeSourceElementKind, KtSourceElementOffsetStrategy)`                             | `org.jetbrains.kotlin.KtSourceElementKt`                                                                           |
|     new |       +511 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `addPossibleNewConstraint(TypeVariableMarker, Constraint)`                                                         | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
|     new |       +511 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                                       |
|     new |       +511 KiB | 0.0% → 33.3% |   0 B → 511 KiB |   0 → 1 | `addSuccessor(MaxStackFrameSizeAndLocalsCalculator$BasicBlock, Label)`                                             | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`                                         |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |        Delta |              % |               Size | Samples | Caller                  | Location                                       |
| ------: | -----------: | -------------: | -----------------: | ------: | ----------------------- | ---------------------------------------------- |
| removed | -510.898 KiB |   50.0% → 0.0% |      511 KiB → 0 B |   1 → 0 | `generateConstructor()` | `java.lang.invoke.InnerClassLambdaMetafactory` |
|  -99.1% |  -506.14 KiB | 50.0% → 100.0% | 511 KiB → 4.85 KiB |       1 | `generateInnerClass()`  | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |        Delta |              % |              Size | Samples | Caller                                                        | Location                                                               |
| ------: | -----------: | -------------: | ----------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -66.7% | -1,021.5 KiB | 75.0% → 100.0% | 1.5 MiB → 511 KiB |   3 → 1 | `<init>(String, MethodNode, Interpreter, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`  |
| removed | -510.765 KiB |   25.0% → 0.0% |     511 KiB → 0 B |   1 → 0 | `<init>(String, MethodNode, Interpreter, Function2)`          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FastStackAnalyzer` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |      % |              Size | Samples | Caller                 | Location                                      |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------- | --------------------------------------------- |
| -44.6% | -1.205 MiB | 100.0% | 2.7 MiB → 1.5 MiB |   5 → 3 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change |          Delta |      % |                Size | Samples | Caller     | Location                                                  |
| -----: | -------------: | -----: | ------------------: | ------: | ---------- | --------------------------------------------------------- |
| -48.6% | -1,022.007 KiB | 100.0% | 2.05 MiB → 1.05 MiB |   4 → 2 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `ensureEntryArrayMutable()` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change |      Delta |             % |            Size | Samples | Caller                    | Location                                       |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------- | ---------------------------------------------- |
| removed | -1,022 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `put(Comparable, Object)` | `org.jetbrains.kotlin.protobuf.SmallSortedMap` |

##### `asSingleFqName()` (`org.jetbrains.kotlin.name.ClassId`)

|  Change |          Delta |             % |            Size | Samples | Caller                                 | Location                                              |
| ------: | -------------: | ------------: | --------------: | ------: | -------------------------------------- | ----------------------------------------------------- |
| removed | -1,021.992 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `getCorrespondingKotlinClass(ClassId)` | `org.jetbrains.kotlin.fir.resolve.FirJavaClassMapper` |

##### `<init>()` (`org.jetbrains.kotlin.fir.declarations.builder.FirAnonymousFunctionBuilder`)

|  Change |          Delta |             % |            Size | Samples | Caller                                    | Location                                                                        |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `convertLambdaExpression(LighterASTNode)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |

##### `mapAsmType(Type, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                                    | Location                                                                                  |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `parseMethodDescription(String, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |

##### `getAnnotationsByClassId(List, ClassId, FirSession)` (`org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`)

|  Change |          Delta |             % |            Size | Samples | Caller                                              | Location                                                     |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------------- | ------------------------------------------------------------ |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `getAnnotationByClassId(List, ClassId, FirSession)` | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt` |

##### `lower(IrModuleFragment)` (`org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering`)

|  Change |          Delta |             % |            Size | Samples | Caller                                        | Location                                                                          |
| ------: | -------------: | ------------: | --------------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| removed | -1,021.984 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `generate(IrModuleFragment, IrPluginContext)` | `org.jetbrains.kotlin.scripting.compiler.plugin.extensions.ReplLoweringExtension` |

##### `createFile(ZipEntryDescription, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|  Change |          Delta |             % |            Size | Samples | Caller                              | Location                                                     |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| removed | -1,021.976 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   1 → 0 | `<init>(FastJarFileSystem, String)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `child(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|  Change |          Delta |             % |            Size | Samples | Caller        | Location                           |
| ------: | -------------: | ------------: | --------------: | ------: | ------------- | ---------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `child(Name)` | `org.jetbrains.kotlin.name.FqName` |

##### `build()` (`org.jetbrains.kotlin.fir.expressions.builder.FirThisReceiverExpressionBuilder`)

|  Change |          Delta |             % |            Size | Samples | Caller                                                                             | Location                                                |
| ------: | -------------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -1,021.968 KiB | 100.0% → 0.0% | 1,022 KiB → 0 B |   2 → 0 | `receiverExpression(FirThisOwnerSymbol, ConeKotlinType, InaccessibleReceiverKind)` | `org.jetbrains.kotlin.fir.resolve.calls.FirReceiversKt` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |       Delta |             % |                Size |   Samples | Function                                                                                           | Location                                                                |
| --------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
|    +47.3% | +63.771 MiB | 19.7% → 29.0% |   135 MiB → 198 MiB | 265 → 280 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|    +48.1% | +61.481 MiB | 18.7% → 27.7% |   128 MiB → 189 MiB | 251 → 263 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                 |
|    +47.2% | +60.983 MiB | 18.9% → 27.8% |   129 MiB → 190 MiB | 254 → 265 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                 |
|    +46.5% | +60.964 MiB | 19.2% → 28.1% |   131 MiB → 192 MiB | 258 → 269 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                 |
|    +45.9% | +60.961 MiB | 19.4% → 28.3% |   133 MiB → 194 MiB | 261 → 272 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| +11923.0% | +59.055 MiB |   0.1% → 8.7% |  507 KiB → 59.6 MiB |     1 → 2 | `getMethod(String, Class[])`                                                                       | `java.lang.Class`                                                       |
|  +3963.5% | +58.899 MiB |   0.2% → 8.8% | 1.49 MiB → 60.4 MiB |     3 → 4 | `getArgumentsInfo(Class)`                                                                          | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
| +11872.2% | +58.803 MiB |   0.1% → 8.7% |  507 KiB → 59.3 MiB |         1 | `getDeclaredMethods0(boolean)`                                                                     | `java.lang.Class`                                                       |
| +11872.2% | +58.803 MiB |   0.1% → 8.7% |  507 KiB → 59.3 MiB |         1 | `privateGetDeclaredMethods(boolean)`                                                               | `java.lang.Class`                                                       |
| +11872.2% | +58.803 MiB |   0.1% → 8.7% |  507 KiB → 59.3 MiB |         1 | `getMethodsRecursive(String, Class[], boolean)`                                                    | `java.lang.Class`                                                       |
| +11872.2% | +58.803 MiB |   0.1% → 8.7% |  507 KiB → 59.3 MiB |         1 | `getMethod0(String, Class[])`                                                                      | `java.lang.Class`                                                       |
|  +2939.3% | +58.398 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |         4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`                  | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  +2939.3% | +58.398 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |         4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                                    | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  +2939.3% | +58.398 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |         4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)`               | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|   +589.9% | +21.754 MiB |   0.5% → 3.7% | 3.69 MiB → 25.4 MiB |    8 → 11 | `loadClass(String)`                                                                                | `java.lang.ClassLoader`                                                 |
| +12647.7% | +21.577 MiB |  <0.1% → 3.2% |  175 KiB → 21.7 MiB |     1 → 3 | `forName0(String, boolean, ClassLoader, Class)`                                                    | `java.lang.Class`                                                       |
| +12647.7% | +21.577 MiB |  <0.1% → 3.2% |  175 KiB → 21.7 MiB |     1 → 3 | `forName(String, boolean, ClassLoader, Class)`                                                     | `java.lang.Class`                                                       |
| +12647.7% | +21.577 MiB |  <0.1% → 3.2% |  175 KiB → 21.7 MiB |     1 → 3 | `forName(String, boolean, ClassLoader)`                                                            | `java.lang.Class`                                                       |
|       new | +21.326 MiB |   0.0% → 3.1% |      0 B → 21.3 MiB |     0 → 2 | `defineClass(String, Resource)`                                                                    | `jdk.internal.loader.BuiltinClassLoader`                                |
|       new | +21.326 MiB |   0.0% → 3.1% |      0 B → 21.3 MiB |     0 → 2 | `findClassOnClassPathOrNull(String)`                                                               | `jdk.internal.loader.BuiltinClassLoader`                                |

##### Standard library

|    Change |       Delta |            % |                Size | Samples | Function                                                                                | Location                                           |
| --------: | ----------: | -----------: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +11923.0% | +59.055 MiB |  0.1% → 8.7% |  507 KiB → 59.6 MiB |   1 → 2 | `getMethod(String, Class[])`                                                            | `java.lang.Class`                                  |
| +11872.2% | +58.803 MiB |  0.1% → 8.7% |  507 KiB → 59.3 MiB |       1 | `getDeclaredMethods0(boolean)`                                                          | `java.lang.Class`                                  |
| +11872.2% | +58.803 MiB |  0.1% → 8.7% |  507 KiB → 59.3 MiB |       1 | `privateGetDeclaredMethods(boolean)`                                                    | `java.lang.Class`                                  |
| +11872.2% | +58.803 MiB |  0.1% → 8.7% |  507 KiB → 59.3 MiB |       1 | `getMethodsRecursive(String, Class[], boolean)`                                         | `java.lang.Class`                                  |
| +11872.2% | +58.803 MiB |  0.1% → 8.7% |  507 KiB → 59.3 MiB |       1 | `getMethod0(String, Class[])`                                                           | `java.lang.Class`                                  |
|   +589.9% | +21.754 MiB |  0.5% → 3.7% | 3.69 MiB → 25.4 MiB |  8 → 11 | `loadClass(String)`                                                                     | `java.lang.ClassLoader`                            |
| +12647.7% | +21.577 MiB | <0.1% → 3.2% |  175 KiB → 21.7 MiB |   1 → 3 | `forName0(String, boolean, ClassLoader, Class)`                                         | `java.lang.Class`                                  |
| +12647.7% | +21.577 MiB | <0.1% → 3.2% |  175 KiB → 21.7 MiB |   1 → 3 | `forName(String, boolean, ClassLoader, Class)`                                          | `java.lang.Class`                                  |
| +12647.7% | +21.577 MiB | <0.1% → 3.2% |  175 KiB → 21.7 MiB |   1 → 3 | `forName(String, boolean, ClassLoader)`                                                 | `java.lang.Class`                                  |
|       new | +21.326 MiB |  0.0% → 3.1% |      0 B → 21.3 MiB |   0 → 2 | `defineClass(String, Resource)`                                                         | `jdk.internal.loader.BuiltinClassLoader`           |
|       new | +21.326 MiB |  0.0% → 3.1% |      0 B → 21.3 MiB |   0 → 2 | `findClassOnClassPathOrNull(String)`                                                    | `jdk.internal.loader.BuiltinClassLoader`           |
|       new | +21.326 MiB |  0.0% → 3.1% |      0 B → 21.3 MiB |   0 → 2 | `loadClassOrNull(String, boolean)`                                                      | `jdk.internal.loader.BuiltinClassLoader`           |
|       new | +21.326 MiB |  0.0% → 3.1% |      0 B → 21.3 MiB |   0 → 2 | `loadClass(String, boolean)`                                                            | `jdk.internal.loader.BuiltinClassLoader`           |
|       new | +21.326 MiB |  0.0% → 3.1% |      0 B → 21.3 MiB |   0 → 2 | `loadClass(String, boolean)`                                                            | `jdk.internal.loader.ClassLoaders$AppClassLoader`  |
|       new | +21.246 MiB |  0.0% → 3.1% |      0 B → 21.2 MiB |   0 → 1 | `loadMainClass(int, String)`                                                            | `sun.launcher.LauncherHelper`                      |
|       new | +21.246 MiB |  0.0% → 3.1% |      0 B → 21.2 MiB |   0 → 1 | `checkAndLoadMain(boolean, int, String)`                                                | `sun.launcher.LauncherHelper`                      |
|  +1394.4% | +20.824 MiB |  0.2% → 3.3% | 1.49 MiB → 22.3 MiB |   3 → 4 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|  +1394.4% | +20.824 MiB |  0.2% → 3.3% | 1.49 MiB → 22.3 MiB |   3 → 4 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)`           | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |
|  +1394.4% | +20.824 MiB |  0.2% → 3.3% | 1.49 MiB → 22.3 MiB |   3 → 4 | `getInputStream(ZipEntry)`                                                              | `java.util.zip.ZipFile`                            |
|  +1394.4% | +20.824 MiB |  0.2% → 3.3% | 1.49 MiB → 22.3 MiB |   3 → 4 | `getInputStream(ZipEntry)`                                                              | `java.util.jar.JarFile`                            |

##### Ours

|   Change |       Delta |             % |                Size |   Samples | Function                                                                                                                                      | Location                                                                                       |
| -------: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|   +47.3% | +63.771 MiB | 19.7% → 29.0% |   135 MiB → 198 MiB | 265 → 280 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                  |
|   +48.1% | +61.481 MiB | 18.7% → 27.7% |   128 MiB → 189 MiB | 251 → 263 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                        |
|   +47.2% | +60.983 MiB | 18.9% → 27.8% |   129 MiB → 190 MiB | 254 → 265 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                        |
|   +46.5% | +60.964 MiB | 19.2% → 28.1% |   131 MiB → 192 MiB | 258 → 269 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                        |
|   +45.9% | +60.961 MiB | 19.4% → 28.3% |   133 MiB → 194 MiB | 261 → 272 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                  |
| +3963.5% | +58.899 MiB |   0.2% → 8.8% | 1.49 MiB → 60.4 MiB |     3 → 4 | `getArgumentsInfo(Class)`                                                                                                                     | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                        |
| +2939.3% | +58.398 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |         4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)`                                                             | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                        |
| +2939.3% | +58.398 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |         4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)`                                                                               | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                        |
| +2939.3% | +58.398 MiB |   0.3% → 8.8% | 1.99 MiB → 60.4 MiB |         4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)`                                                          | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`                        |
|   +17.2% | +11.443 MiB |  9.7% → 11.4% | 66.6 MiB → 78.1 MiB | 131 → 156 | `executePhase(ConfigurationPipelineArtifact)`                                                                                                 | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                               |
|   +38.2% | +10.699 MiB |   4.1% → 5.7% |   28 MiB → 38.7 MiB |   52 → 75 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`                                                                              | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                 |
|    +6.9% | +10.505 MiB | 22.1% → 23.7% |   151 MiB → 162 MiB | 295 → 322 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                              |
|   +15.7% | +10.484 MiB |  9.7% → 11.3% | 66.6 MiB → 77.1 MiB | 131 → 154 | `executePhase(PipelineArtifact)`                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                               |
|    +5.7% |  +8.083 MiB | 20.9% → 22.0% |   143 MiB → 151 MiB | 279 → 299 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                        |
|   +63.5% |  +7.944 MiB |   1.8% → 3.0% | 12.5 MiB → 20.5 MiB |   24 → 39 | `runResolution(FirSession, List)`                                                                                                             | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                  |
|   +49.5% |  +7.927 MiB |   2.3% → 3.5% |     16 MiB → 24 MiB |   31 → 46 | `transform(FirTransformer, Object)`                                                                                                           | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                |
|   +63.3% |  +7.927 MiB |   1.8% → 3.0% | 12.5 MiB → 20.5 MiB |   24 → 39 | `process(List)`                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`                       |
|   +45.3% |  +7.776 MiB |   2.5% → 3.6% |   17.2 MiB → 25 MiB |   32 → 49 | `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)`                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
|    +5.2% |  +7.563 MiB | 21.2% → 22.3% |   145 MiB → 152 MiB | 283 → 303 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                        |
|    +5.1% |  +7.525 MiB | 21.7% → 22.8% |   148 MiB → 156 MiB | 289 → 310 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                    |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Standard library

|  Change |       Delta |            % |               Size | Samples | Function                                                           | Location                                       |
| ------: | ----------: | -----------: | -----------------: | ------: | ------------------------------------------------------------------ | ---------------------------------------------- |
|  -99.5% | -64.787 MiB | 9.5% → <0.1% | 65.1 MiB → 347 KiB |   4 → 1 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController`               |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `initCEN(int, ZipCoder)`                                           | `java.util.zip.ZipFile$Source`                 |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                    | `java.util.zip.ZipFile$Source`                 |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `get(File, boolean, ZipCoder)`                                     | `java.util.zip.ZipFile$Source`                 |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `<init>(ZipFile, ZipCoder, File, int)`                             | `java.util.zip.ZipFile$CleanableResource`      |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `<init>(File, int, Charset)`                                       | `java.util.zip.ZipFile`                        |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `<init>(File, int)`                                                | `java.util.zip.ZipFile`                        |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `<init>(File, boolean, int, Runtime$Version)`                      | `java.util.jar.JarFile`                        |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `getJarFile(URL)`                                                  | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `run()`                                                            | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `ensureOpen()`                                                     | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`     | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `run()`                                                            | `jdk.internal.loader.URLClassPath$3`           |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `getLoader(URL)`                                                   | `jdk.internal.loader.URLClassPath`             |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `getLoader(int)`                                                   | `jdk.internal.loader.URLClassPath`             |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `findResource(String, boolean)`                                    | `jdk.internal.loader.URLClassPath`             |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `run()`                                                            | `java.net.URLClassLoader$2`                    |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)`             | `java.security.AccessController`               |
| removed | -64.135 MiB |  9.4% → 0.0% |     64.1 MiB → 0 B |   2 → 0 | `findResource(String)`                                             | `java.net.URLClassLoader`                      |
| removed | -63.964 MiB |  9.4% → 0.0% |       64 MiB → 0 B |   1 → 0 | `getResource(String)`                                              | `java.lang.ClassLoader`                        |

##### Ours

|  Change |       Delta |           % |                Size | Samples | Function                                                                                                                                                                                                           | Location                                                                                                 |
| ------: | ----------: | ----------: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| removed | -63.964 MiB | 9.4% → 0.0% |        64 MiB → 0 B |   1 → 0 | `getResource(String)`                                                                                                                                                                                              | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`                                                 |
| removed | -63.964 MiB | 9.4% → 0.0% |        64 MiB → 0 B |   1 → 0 | `<init>()`                                                                                                                                                                                                         | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                            |
| removed | -63.964 MiB | 9.4% → 0.0% |        64 MiB → 0 B |   1 → 0 | `<init>()`                                                                                                                                                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                             |
|  -30.0% |  -7.756 MiB | 3.8% → 2.7% | 25.9 MiB → 18.1 MiB | 52 → 36 | `transformElement(FirElement, Object)`                                                                                                                                                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  -24.3% |  -7.229 MiB | 4.4% → 3.3% | 29.8 MiB → 22.6 MiB | 60 → 45 | `transformChildren(FirTransformer, Object)`                                                                                                                                                                        | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
|  -21.1% |  -6.746 MiB | 4.7% → 3.7% | 31.9 MiB → 25.2 MiB | 64 → 50 | `transformArguments(FirTransformer, Object)`                                                                                                                                                                       | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`                                          |
|  -14.0% |  -6.721 MiB | 7.0% → 6.1% | 48.1 MiB → 41.4 MiB | 91 → 82 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
|  -14.0% |  -6.721 MiB | 7.0% → 6.1% | 48.1 MiB → 41.4 MiB | 91 → 82 | `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)`                                                                                               | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                                   |
|  -13.1% |  -6.556 MiB | 7.3% → 6.3% | 49.9 MiB → 43.4 MiB | 95 → 85 | `resumeTask(TowerResolveManager$SuspendedResolverTask)`                                                                                                                                                            | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
|  -13.1% |  -6.556 MiB | 7.3% → 6.3% | 49.9 MiB → 43.4 MiB | 95 → 85 | `runTasks()`                                                                                                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`                                       |
|  -66.1% |  -5.827 MiB | 1.3% → 0.4% | 8.82 MiB → 2.99 MiB |  17 → 6 | `transformAsExplicitReceiver(FirExpression, ResolutionMode, boolean)`                                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  -70.0% |  -5.825 MiB | 1.2% → 0.4% |  8.32 MiB → 2.5 MiB |  16 → 5 | `transformExplicitReceiverOf(FirQualifiedAccessExpression)`                                                                                                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
|  -11.1% |  -5.651 MiB | 7.5% → 6.6% | 50.9 MiB → 45.3 MiB | 97 → 89 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)`                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
|  -11.1% |  -5.651 MiB | 7.5% → 6.6% | 50.9 MiB → 45.3 MiB | 97 → 89 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)`                                                                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                                          |
|  -24.4% |  -5.607 MiB | 3.4% → 2.5% |   23 MiB → 17.3 MiB | 44 → 35 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                                                                                                                            | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                         |
|  -24.4% |  -5.607 MiB | 3.4% → 2.5% |   23 MiB → 17.3 MiB | 44 → 35 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)`                                                                                | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                         |
|  -21.4% |  -5.227 MiB | 3.6% → 2.8% | 24.5 MiB → 19.2 MiB | 47 → 38 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                               |
|  -23.2% |  -4.714 MiB | 3.0% → 2.3% | 20.4 MiB → 15.6 MiB | 40 → 31 | `transform(FirTransformer, Object)`                                                                                                                                                                                | `org.jetbrains.kotlin.fir.expressions.FirArgumentList`                                                   |
|   -9.1% |  -4.653 MiB | 7.5% → 6.8% | 50.9 MiB → 46.3 MiB | 97 → 91 | `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                                 |
|  -14.2% |  -4.548 MiB | 4.7% → 4.0% |   32 MiB → 27.5 MiB | 61 → 54 | `transformExpression(FirExpression, ResolutionMode)`                                                                                                                                                               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|   Change |       Delta |             % |                Size |   Samples | Callee                                                                               | Location                                                                |
| -------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| +2939.3% | +58.398 MiB |  1.5% → 30.4% | 1.99 MiB → 60.4 MiB |         4 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|    +4.0% |  +5.372 MiB | 98.5% → 69.6% |   133 MiB → 138 MiB | 261 → 276 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                                             | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +48.1% | +61.481 MiB | 100.0% | 128 MiB → 189 MiB | 251 → 263 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change |        Delta |              % |              Size |   Samples | Callee                                                 | Location                                                |
| ------: | -----------: | -------------: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|  +47.8% |  +61.482 MiB | 99.6% → 100.0% | 129 MiB → 190 MiB | 253 → 265 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed | -510.992 KiB |    0.4% → 0.0% |     511 KiB → 0 B |     1 → 0 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
| +46.5% | +60.964 MiB | 100.0% | 131 MiB → 192 MiB | 258 → 269 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                   | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| +45.9% | +60.961 MiB | 100.0% | 133 MiB → 194 MiB | 261 → 272 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `getMethod(String, Class[])` (`java.lang.Class`)

|    Change |        Delta |              % |               Size | Samples | Callee                        | Location                                 |
| --------: | -----------: | -------------: | -----------------: | ------: | ----------------------------- | ---------------------------------------- |
| +11872.2% |  +58.803 MiB | 100.0% → 99.6% | 507 KiB → 59.3 MiB |       1 | `getMethod0(String, Class[])` | `java.lang.Class`                        |
|       new | +257.875 KiB |    0.0% → 0.4% |      0 B → 258 KiB |   0 → 1 | `copyMethod(Method)`          | `jdk.internal.reflect.ReflectionFactory` |

##### `getArgumentsInfo(Class)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|    Change |        Delta |             % |                 Size | Samples | Callee                        | Location                                                                |
| --------: | -----------: | ------------: | -------------------: | ------: | ----------------------------- | ----------------------------------------------------------------------- |
|  +5969.5% |  +59.143 MiB | 66.7% → 99.6% | 1,015 KiB → 60.1 MiB |   2 → 3 | `getArgumentsInfo(Class)`     | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
| +11923.0% |  +59.055 MiB | 33.3% → 98.6% |   507 KiB → 59.6 MiB |   1 → 2 | `getMethod(String, Class[])`  | `java.lang.Class`                                                       |
|   removed | -506.867 KiB |  33.3% → 0.0% |        507 KiB → 0 B |   1 → 0 | `getAnnotationsByType(Class)` | `java.lang.reflect.Field`                                               |
|    +68.3% | +346.976 KiB |  33.4% → 1.4% |    508 KiB → 855 KiB |   1 → 2 | `getAnnotation(Class)`        | `java.lang.reflect.Field`                                               |

##### `privateGetDeclaredMethods(boolean)` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Callee                         | Location          |
| --------: | ----------: | -----: | -----------------: | ------: | ------------------------------ | ----------------- |
| +11872.2% | +58.803 MiB | 100.0% | 507 KiB → 59.3 MiB |       1 | `getDeclaredMethods0(boolean)` | `java.lang.Class` |

##### `getMethodsRecursive(String, Class[], boolean)` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Callee                               | Location          |
| --------: | ----------: | -----: | -----------------: | ------: | ------------------------------------ | ----------------- |
| +11872.2% | +58.803 MiB | 100.0% | 507 KiB → 59.3 MiB |       1 | `privateGetDeclaredMethods(boolean)` | `java.lang.Class` |

##### `getMethod0(String, Class[])` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Callee                                          | Location          |
| --------: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ----------------- |
| +11872.2% | +58.803 MiB | 100.0% | 507 KiB → 59.3 MiB |       1 | `getMethodsRecursive(String, Class[], boolean)` | `java.lang.Class` |

##### `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |              % |                Size | Samples | Callee                     | Location                                                                |
| -------: | ----------: | -------------: | ------------------: | ------: | -------------------------- | ----------------------------------------------------------------------- |
| +3963.5% | +58.899 MiB | 74.8% → 100.0% | 1.49 MiB → 60.4 MiB |   3 → 4 | `getArgumentsInfo(Class)`  | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |
|  removed | -512.82 KiB |   25.2% → 0.0% |       513 KiB → 0 B |   1 → 0 | `invoke(Object, Object[])` | `java.lang.reflect.Method`                                              |

##### `parseCommandLineArguments(List, CommonToolArguments, boolean)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |      % |                Size | Samples | Callee                                                                            | Location                                                                |
| -------: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +2939.3% | +58.398 MiB | 100.0% | 1.99 MiB → 60.4 MiB |       4 | `parsePreprocessedCommandLineArguments(List, CommonToolArguments, Lazy, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` (`org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt`)

|   Change |       Delta |      % |                Size | Samples | Callee                                                          | Location                                                                |
| -------: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------- | ----------------------------------------------------------------------- |
| +2939.3% | +58.398 MiB | 100.0% | 1.99 MiB → 60.4 MiB |       4 | `parseCommandLineArguments(List, CommonToolArguments, boolean)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `loadClass(String)` (`java.lang.ClassLoader`)

| Change |        Delta |             % |                Size | Samples | Callee                       | Location                                               |
| -----: | -----------: | ------------: | ------------------: | ------: | ---------------------------- | ------------------------------------------------------ |
|    new |  +21.326 MiB |  0.0% → 83.8% |      0 B → 21.3 MiB |   0 → 2 | `loadClass(String, boolean)` | `jdk.internal.loader.ClassLoaders$AppClassLoader`      |
| +19.9% | +615.546 KiB | 81.8% → 14.2% | 3.02 MiB → 3.62 MiB |   6 → 8 | `loadClass(String, boolean)` | `java.lang.ClassLoader`                                |
| -25.9% | -177.453 KiB |  18.2% → 2.0% |   686 KiB → 508 KiB |   2 → 1 | `loadClass(String, boolean)` | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader` |

##### `forName0(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Callee              | Location                |
| --------: | ----------: | -----: | -----------------: | ------: | ------------------- | ----------------------- |
| +12647.7% | +21.577 MiB | 100.0% | 175 KiB → 21.7 MiB |   1 → 3 | `loadClass(String)` | `java.lang.ClassLoader` |

##### `forName(String, boolean, ClassLoader, Class)` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Callee                                          | Location          |
| --------: | ----------: | -----: | -----------------: | ------: | ----------------------------------------------- | ----------------- |
| +12647.7% | +21.577 MiB | 100.0% | 175 KiB → 21.7 MiB |   1 → 3 | `forName0(String, boolean, ClassLoader, Class)` | `java.lang.Class` |

##### `forName(String, boolean, ClassLoader)` (`java.lang.Class`)

|    Change |       Delta |      % |               Size | Samples | Callee                                         | Location          |
| --------: | ----------: | -----: | -----------------: | ------: | ---------------------------------------------- | ----------------- |
| +12647.7% | +21.577 MiB | 100.0% | 175 KiB → 21.7 MiB |   1 → 3 | `forName(String, boolean, ClassLoader, Class)` | `java.lang.Class` |

##### `defineClass(String, Resource)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |       Delta |             % |           Size | Samples | Callee            | Location                       |
| -----: | ----------: | ------------: | -------------: | ------: | ----------------- | ------------------------------ |
|    new | +21.326 MiB | 0.0% → 100.0% | 0 B → 21.3 MiB |   0 → 2 | `getByteBuffer()` | `jdk.internal.loader.Resource` |

##### `findClassOnClassPathOrNull(String)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |       Delta |             % |           Size | Samples | Callee                          | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------- | ---------------------------------------- |
|    new | +21.326 MiB | 0.0% → 100.0% | 0 B → 21.3 MiB |   0 → 2 | `defineClass(String, Resource)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClassOrNull(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |       Delta |             % |           Size | Samples | Callee                               | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------------ | ---------------------------------------- |
|    new | +21.326 MiB | 0.0% → 100.0% | 0 B → 21.3 MiB |   0 → 2 | `findClassOnClassPathOrNull(String)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.BuiltinClassLoader`)

| Change |       Delta |             % |           Size | Samples | Callee                             | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------------- | ---------------------------------------- |
|    new | +21.326 MiB | 0.0% → 100.0% | 0 B → 21.3 MiB |   0 → 2 | `loadClassOrNull(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadClass(String, boolean)` (`jdk.internal.loader.ClassLoaders$AppClassLoader`)

| Change |       Delta |             % |           Size | Samples | Callee                       | Location                                 |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------- | ---------------------------------------- |
|    new | +21.326 MiB | 0.0% → 100.0% | 0 B → 21.3 MiB |   0 → 2 | `loadClass(String, boolean)` | `jdk.internal.loader.BuiltinClassLoader` |

##### `loadMainClass(int, String)` (`sun.launcher.LauncherHelper`)

| Change |       Delta |             % |           Size | Samples | Callee                                  | Location          |
| -----: | ----------: | ------------: | -------------: | ------: | --------------------------------------- | ----------------- |
|    new | +21.246 MiB | 0.0% → 100.0% | 0 B → 21.2 MiB |   0 → 1 | `forName(String, boolean, ClassLoader)` | `java.lang.Class` |

##### `checkAndLoadMain(boolean, int, String)` (`sun.launcher.LauncherHelper`)

| Change |       Delta |             % |           Size | Samples | Callee                       | Location                      |
| -----: | ----------: | ------------: | -------------: | ------: | ---------------------------- | ----------------------------- |
|    new | +21.246 MiB | 0.0% → 100.0% | 0 B → 21.2 MiB |   0 → 1 | `loadMainClass(int, String)` | `sun.launcher.LauncherHelper` |

##### `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` (`java.util.zip.ZipFile$ZipFileInflaterInputStream`)

|   Change |       Delta |              % |                Size | Samples | Callee                               | Location                            |
| -------: | ----------: | -------------: | ------------------: | ------: | ------------------------------------ | ----------------------------------- |
| +1389.0% | +20.745 MiB | 100.0% → 99.6% | 1.49 MiB → 22.2 MiB |       3 | `<init>(InputStream, Inflater, int)` | `java.util.zip.InflaterInputStream` |

##### `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)` (`java.util.zip.ZipFile$ZipFileInflaterInputStream`)

|   Change |       Delta |      % |                Size | Samples | Callee                                                                                  | Location                                           |
| -------: | ----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| +1394.4% | +20.824 MiB | 100.0% | 1.49 MiB → 22.3 MiB |   3 → 4 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `getInputStream(ZipEntry)` (`java.util.zip.ZipFile`)

|   Change |       Delta |      % |                Size | Samples | Callee                                                                        | Location                                           |
| -------: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | -------------------------------------------------- |
| +1394.4% | +20.824 MiB | 100.0% | 1.49 MiB → 22.3 MiB |   3 → 4 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `getInputStream(ZipEntry)` (`java.util.jar.JarFile`)

|   Change |       Delta |      % |                Size | Samples | Callee                     | Location                |
| -------: | ----------: | -----: | ------------------: | ------: | -------------------------- | ----------------------- |
| +1394.4% | +20.824 MiB | 100.0% | 1.49 MiB → 22.3 MiB |   3 → 4 | `getInputStream(ZipEntry)` | `java.util.zip.ZipFile` |

##### `executePhase(ConfigurationPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

|  Change |        Delta |             % |                Size | Samples | Callee                                                                   | Location                                                                                    |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
|  +42.3% |  +11.199 MiB | 39.8% → 48.3% | 26.5 MiB → 37.7 MiB | 49 → 73 | `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)`         | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                              |
|  +23.4% | +954.578 KiB |   6.0% → 6.3% | 3.99 MiB → 4.92 MiB |  8 → 10 | `runPlatformCheckers(List, BaseDiagnosticsCollector)`                    | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt`                                           |
|   -7.1% | -901.656 KiB | 18.7% → 14.8% | 12.4 MiB → 11.6 MiB | 27 → 24 | `createEnvironmentAndSources(CompilerConfiguration, Disposable, String)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`                            |
|     new | +510.984 KiB |   0.0% → 0.6% |       0 B → 511 KiB |   0 → 1 | `invoke()`                                                               | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase$$Lambda.0x000000700140d980` |
| removed | -510.976 KiB |   0.7% → 0.0% |       511 KiB → 0 B |   1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`         | `java.lang.invoke.MethodHandleNatives`                                                      |

##### `resolveAndCheckFir(FirSession, List, BaseDiagnosticsCollector)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change |      Delta |             % |              Size | Samples | Callee                                                                                        | Location                                      |
| -----: | ---------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------------- | --------------------------------------------- |
| +66.1% | +7.944 MiB | 42.9% → 51.6% |   12 MiB → 20 MiB | 23 → 38 | `runResolution(FirSession, List)`                                                             | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
| +17.3% | +2.755 MiB | 57.1% → 48.4% | 16 MiB → 18.7 MiB | 29 → 37 | `runCheckers(FirSession, ScopeSession, Collection, BaseDiagnosticsCollector, MppCheckerKind)` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |        Delta |             % |                Size |   Samples | Callee                           | Location                                                              |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------- | --------------------------------------------------------------------- |
| +18.5% |  +11.981 MiB | 42.7% → 47.3% | 64.6 MiB → 76.6 MiB | 127 → 153 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  -3.8% |   -2.475 MiB | 43.3% → 38.9% |   65.5 MiB → 63 MiB | 127 → 124 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
| +50.7% | +515.945 KiB |   0.7% → 0.9% | 1,018 KiB → 1.5 MiB |     3 → 5 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |
|  +2.5% | +508.859 KiB | 13.4% → 12.8% | 20.2 MiB → 20.7 MiB |   38 → 40 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`)

| Change |       Delta |      % |                Size |   Samples | Callee                                        | Location                                                         |
| -----: | ----------: | -----: | ------------------: | --------: | --------------------------------------------- | ---------------------------------------------------------------- |
| +15.7% | +10.484 MiB | 100.0% | 66.6 MiB → 77.1 MiB | 131 → 154 | `executePhase(ConfigurationPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.7% | +8.083 MiB | 100.0% | 143 MiB → 151 MiB | 279 → 299 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runResolution(FirSession, List)` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`)

| Change |       Delta |             % |              Size | Samples | Callee               | Location                                                                 |
| -----: | ----------: | ------------: | ----------------: | ------: | -------------------- | ------------------------------------------------------------------------ |
| +65.9% |  +7.927 MiB | 96.1% → 97.6% |   12 MiB → 20 MiB | 23 → 38 | `process(List)`      | `org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor` |
|  +3.5% | +17.125 KiB |   3.9% → 2.4% | 494 KiB → 511 KiB |       1 | `<init>(FirSession)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

|  Change |          Delta |             % |                 Size | Samples | Callee                           | Location                                                                                                 |
| ------: | -------------: | ------------: | -------------------: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +128.6% |     +8.982 MiB | 43.6% → 66.7% |    6.99 MiB → 16 MiB | 14 → 31 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| +112.5% |     +4.491 MiB | 24.9% → 35.4% |  3.99 MiB → 8.48 MiB |  8 → 17 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`            |
| +300.0% |     +2.994 MiB |  6.2% → 16.7% | 1,022 KiB → 3.99 MiB |   2 → 7 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.contracts.FirContractResolveTransformerAdapter`           |
|  -33.3% | -1,022.132 KiB |  18.7% → 8.3% |     2.99 MiB → 2 MiB |   6 → 3 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`                                |
| +100.0% | +1,021.968 KiB |   6.2% → 8.3% |    1,022 KiB → 2 MiB |   2 → 4 | `transformFile(FirFile, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirAnnotationArgumentsTransformerAdapter`          |

##### `process(List)` (`org.jetbrains.kotlin.fir.resolve.transformers.FirTotalResolveProcessor`)

| Change |      Delta |             % |                Size | Samples | Callee                 | Location                                                                                              |
| -----: | ---------: | ------------: | ------------------: | ------: | ---------------------- | ----------------------------------------------------------------------------------------------------- |
| +68.7% | +7.927 MiB | 92.0% → 95.1% | 11.5 MiB → 19.5 MiB | 22 → 37 | `processFile(FirFile)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTransformerBasedResolveProcessor`                   |
|    ~0% |      -16 B |   8.0% → 4.9% |           1,022 KiB |       2 | `process(Collection)`  | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirCompilerRequiredAnnotationsResolveProcessor` |

##### `doTransformFile$lambda$0(FirDeclarationsResolveTransformer, FirFile, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |      % |              Size | Samples | Callee                                                        | Location                                                                                       |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| +45.3% | +7.776 MiB | 100.0% | 17.2 MiB → 25 MiB | 32 → 49 | `transformDeclarationContent(FirDeclaration, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                                                              | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +5.2% | +7.563 MiB | 100.0% | 145 MiB → 152 MiB | 283 → 303 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                     | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  +5.1% | +7.525 MiB | 100.0% | 148 MiB → 156 MiB | 289 → 310 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `executePrivileged(PrivilegedAction, AccessControlContext, Class)` (`java.security.AccessController`)

|  Change |        Delta |             % |                Size | Samples | Callee  | Location                                    |
| ------: | -----------: | ------------: | ------------------: | ------: | ------- | ------------------------------------------- |
| removed |  -64.135 MiB |  98.5% → 0.0% |      64.1 MiB → 0 B |   2 → 0 | `run()` | `java.net.URLClassLoader$2`                 |
|  -65.8% | -667.937 KiB | 1.5% → 100.0% | 1,015 KiB → 347 KiB |   2 → 1 | `run()` | `sun.reflect.annotation.AnnotationParser$1` |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Callee                   | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------ | ------------------------------ |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

|  Change |       Delta |             % |           Size | Samples | Callee                                          | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------------------------------------- | ------------------------------ |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

|  Change |       Delta |             % |           Size | Samples | Callee                         | Location                       |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------ | ------------------------------ |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

|  Change |       Delta |             % |           Size | Samples | Callee                                 | Location                                  |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------- | ----------------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

|  Change |       Delta |             % |           Size | Samples | Callee                       | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------------------- | ----------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

|  Change |       Delta |             % |           Size | Samples | Callee              | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------- | ----------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                                        | Location                |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------- | ----------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

|  Change |       Delta |             % |           Size | Samples | Callee            | Location                                       |
| ------: | ----------: | ------------: | -------------: | ------: | ----------------- | ---------------------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                          | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee         | Location                                     |
| ------: | ----------: | ------------: | -------------: | ------: | -------------- | -------------------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                         | Location                                     |
| ------: | ----------: | ------------: | -------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `getLoader(URL)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                          | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `getLoader(int)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee           | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `getLoader(URL)` | `jdk.internal.loader.URLClassPath` |

##### `findResource(String, boolean)` (`jdk.internal.loader.URLClassPath`)

|  Change |       Delta |             % |           Size | Samples | Callee           | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ---------------- | ---------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `getLoader(int)` | `jdk.internal.loader.URLClassPath` |

##### `run()` (`java.net.URLClassLoader$2`)

|  Change |       Delta |             % |           Size | Samples | Callee                          | Location                           |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------- | ---------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `findResource(String, boolean)` | `jdk.internal.loader.URLClassPath` |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `run()`                         | `java.net.URLClassLoader$2`        |

##### `doPrivileged(PrivilegedAction, AccessControlContext)` (`java.security.AccessController`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                             | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------------------ | -------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `executePrivileged(PrivilegedAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `findResource(String)` (`java.net.URLClassLoader`)

|  Change |       Delta |             % |           Size | Samples | Callee                                                 | Location                         |
| ------: | ----------: | ------------: | -------------: | ------: | ------------------------------------------------------ | -------------------------------- |
| removed | -64.135 MiB | 100.0% → 0.0% | 64.1 MiB → 0 B |   2 → 0 | `doPrivileged(PrivilegedAction, AccessControlContext)` | `java.security.AccessController` |

##### `getResource(String)` (`java.lang.ClassLoader`)

|  Change |       Delta |             % |         Size | Samples | Callee                 | Location                  |
| ------: | ----------: | ------------: | -----------: | ------: | ---------------------- | ------------------------- |
| removed | -63.964 MiB | 100.0% → 0.0% | 64 MiB → 0 B |   1 → 0 | `findResource(String)` | `java.net.URLClassLoader` |

##### `getResource(String)` (`org.jetbrains.kotlin.preloading.MemoryBasedClassLoader`)

|  Change |       Delta |             % |         Size | Samples | Callee                | Location                |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------- | ----------------------- |
| removed | -63.964 MiB | 100.0% → 0.0% | 64 MiB → 0 B |   1 → 0 | `getResource(String)` | `java.lang.ClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |       Delta |             % |         Size | Samples | Callee                | Location                                                 |
| ------: | ----------: | ------------: | -----------: | ------: | --------------------- | -------------------------------------------------------- |
| removed | -63.964 MiB | 100.0% → 0.0% | 64 MiB → 0 B |   1 → 0 | `getResource(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `<init>()` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|  Change |       Delta |             % |         Size | Samples | Callee     | Location                                      |
| ------: | ----------: | ------------: | -----------: | ------: | ---------- | --------------------------------------------- |
| removed | -63.964 MiB | 100.0% → 0.0% | 64 MiB → 0 B |   1 → 0 | `<init>()` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `transformElement(FirElement, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |                Size | Samples | Callee                                         | Location                                                                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| -30.0% | -7.756 MiB | 100.0% | 25.9 MiB → 18.1 MiB | 52 → 36 | `transformElement(FirElement, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformChildren(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`)

| Change |      Delta |              % |                Size | Samples | Callee                                       | Location                                                        |
| -----: | ---------: | -------------: | ------------------: | ------: | -------------------------------------------- | --------------------------------------------------------------- |
| -24.3% | -7.229 MiB |         100.0% | 29.8 MiB → 22.6 MiB | 60 → 45 | `transformArguments(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl` |
| -20.3% | -5.732 MiB | 95.0% → 100.0% | 28.3 MiB → 22.6 MiB | 57 → 45 | `transformChildren(FirTransformer, Object)`  | `org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl` |

##### `transformArguments(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirArgumentListImpl`)

| Change |      Delta |      % |                Size | Samples | Callee                                           | Location                                                 |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | -------------------------------------------------------- |
| -21.1% | -6.746 MiB | 100.0% | 31.9 MiB → 25.2 MiB | 64 → 50 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt` |

##### `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

|  Change |        Delta |             % |                 Size | Samples | Callee                                                                                                      | Location                                                                 |
| ------: | -----------: | ------------: | -------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|   -9.6% |   -4.226 MiB | 91.7% → 96.4% |  44.1 MiB → 39.9 MiB | 85 → 79 | `handleLevel(CandidateCollector, CandidateFactory, CallInfo, ExplicitReceiverKind, TowerGroup, TowerLevel)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerLevelHandler`         |
|  -66.7% |   -1.995 MiB |   6.2% → 2.4% | 2.99 MiB → 1,022 KiB |   4 → 2 | `requestGroup(TowerGroup, Continuation)`                                                                    | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`       |
| removed | -510.968 KiB |   1.0% → 0.0% |        511 KiB → 0 B |   1 → 0 | `onSuccessfulLevel(TowerGroup)`                                                                             | `org.jetbrains.kotlin.fir.resolve.calls.tower.InvokeReceiverResolveTask` |

##### `access$processLevel(FirBaseTowerResolveTask, TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`)

| Change |      Delta |      % |                Size | Samples | Callee                                                                               | Location                                                               |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| -14.0% | -6.721 MiB | 100.0% | 48.1 MiB → 41.4 MiB | 91 → 82 | `processLevel(TowerLevel, CallInfo, TowerGroup, ExplicitReceiverKind, Continuation)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask` |

##### `resumeTask(TowerResolveManager$SuspendedResolverTask)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change |      Delta |      % |                Size | Samples | Callee               | Location                                              |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------- | ----------------------------------------------------- |
| -13.1% | -6.556 MiB | 100.0% | 49.9 MiB → 43.4 MiB | 95 → 85 | `resumeWith(Object)` | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |

##### `runTasks()` (`org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager`)

| Change |      Delta |      % |                Size | Samples | Callee                                                  | Location                                                           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------ |
| -13.1% | -6.556 MiB | 100.0% | 49.9 MiB → 43.4 MiB | 95 → 85 | `resumeTask(TowerResolveManager$SuspendedResolverTask)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |

##### `transformAsExplicitReceiver(FirExpression, ResolutionMode, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change |      Delta |             % |                 Size | Samples | Callee                                                                                                        | Location                                                                                      |
| -----: | ---------: | ------------: | -------------------: | ------: | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -65.8% | -3.831 MiB | 66.1% → 66.6% |  5.83 MiB → 1.99 MiB |  11 → 4 | `transformQualifiedAccessExpression(FirQualifiedAccessExpression, ResolutionMode, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
| -66.7% | -1.995 MiB | 33.9% → 33.4% | 2.99 MiB → 1,022 KiB |   6 → 2 | `transformSingle(FirElement, FirTransformer, Object)`                                                         | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                      |

##### `transformExplicitReceiverOf(FirQualifiedAccessExpression)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change |      Delta |      % |               Size | Samples | Callee                                                                | Location                                                                                      |
| -----: | ---------: | -----: | -----------------: | ------: | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -70.0% | -5.825 MiB | 100.0% | 8.32 MiB → 2.5 MiB |  16 → 5 | `transformAsExplicitReceiver(FirExpression, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change |      Delta |             % |                Size | Samples | Callee                                                                                                      | Location                                                           |
| -----: | ---------: | ------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -11.5% | -5.558 MiB | 95.1% → 94.7% | 48.4 MiB → 42.9 MiB | 92 → 84 | `runTasks()`                                                                                                | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerResolveManager` |
|  -3.8% | -96.07 KiB |   4.9% → 5.3% |   2.5 MiB → 2.4 MiB |       5 | `enqueueResolutionTasks(ResolutionContext, TowerResolveManager, CandidateFactoriesAndCollectors, CallInfo)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`    |

##### `runResolver(CallInfo, ResolutionContext, CandidateCollector, CandidateFactory)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`)

| Change |      Delta |      % |                Size | Samples | Callee                                                                                                | Location                                                        |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| -11.1% | -5.651 MiB | 100.0% | 50.9 MiB → 45.3 MiB | 97 → 89 | `runResolver(CallInfo, ResolutionContext, CandidateCollector, TowerResolveManager, CandidateFactory)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change |      Delta |             % |                Size | Samples | Callee                                                                                                                                                                                                                           | Location                                                                        |
| ------: | ---------: | ------------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| removed | -1.996 MiB |   8.7% → 0.0% |         2 MiB → 0 B |   3 → 0 | `loadFunctionAnnotations(DeserializedContainerSource, ProtoBuf$Function, NameResolver, TypeTable)`                                                                                                                               | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializerWithProtocol`   |
|     new | +1.996 MiB |  0.0% → 11.5% |         0 B → 2 MiB |   0 → 4 | `toTypeRef(ProtoBuf$Type, FirDeserializationContext)`                                                                                                                                                                            | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                |
| removed | -1.996 MiB |   8.7% → 0.0% |         2 MiB → 0 B |   3 → 0 | `getDeprecationsProviderFromAnnotations(List, FirSession, boolean, List)`                                                                                                                                                        | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                      |
|   -7.7% | -1.116 MiB | 63.0% → 77.0% | 14.5 MiB → 13.4 MiB | 29 → 27 | `loadExtensionReceiverParameterAnnotations(DeserializedContainerSource, MessageLite, NameResolver, TypeTable, AnnotationDeserializer$CallableKind)`                                                                              | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer` |
| removed | -1,022 KiB |   4.3% → 0.0% |     1,022 KiB → 0 B |   2 → 0 | `childContext$default(FirDeserializationContext, List, FirBasedSymbol, NameResolver, TypeTable, FqName, DeserializedContainerSource, FirRegularClassSymbol, AnnotationDeserializer, FirConstDeserializer, boolean, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirDeserializationContext`            |

##### `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change |      Delta |      % |              Size | Samples | Callee                                                                                  | Location                                                         |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -24.4% | -5.607 MiB | 100.0% | 23 MiB → 17.3 MiB | 44 → 35 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

| Change |      Delta |      % |                Size | Samples | Callee                                  | Location                                                   |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------- | ---------------------------------------------------------- |
| -21.4% | -5.227 MiB | 100.0% | 24.5 MiB → 19.2 MiB | 47 → 38 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirArgumentList`)

| Change |      Delta |      % |                Size | Samples | Callee                                           | Location                                           |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------ | -------------------------------------------------- |
| -23.2% | -4.714 MiB | 100.0% | 20.4 MiB → 15.6 MiB | 40 → 31 | `transformArgumentList(FirArgumentList, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformer` |

##### `collectCandidates(FirQualifiedAccessExpression, Name, CallKind, boolean, FirFunctionCallOrigin, List, ResolutionContext, CandidateCollector, FirElement, ResolutionMode, CollectionLiteralOuterCandidateContext)` (`org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`)

|  Change |        Delta |              % |                Size | Samples | Callee                                                                                                                  | Location                                                        |
| ------: | -----------: | -------------: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
|   -8.2% |   -4.154 MiB | 99.0% → 100.0% | 50.4 MiB → 46.3 MiB | 96 → 91 | `runResolver$default(FirTowerResolver, CallInfo, ResolutionContext, CandidateCollector, CandidateFactory, int, Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver` |
| removed | -510.968 KiB |    1.0% → 0.0% |       511 KiB → 0 B |   1 → 0 | `reduceCandidates(CandidateCollector, ResolutionContext)`                                                               | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`        |

##### `transformExpression(FirExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

| Change |      Delta |      % |              Size | Samples | Callee                                      | Location                                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------- |
| -14.2% | -4.548 MiB | 100.0% | 32 MiB → 27.5 MiB | 61 → 54 | `transformChildren(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirReturnExpressionImpl` |

# Retained heap profile diff

Retained 16.5 MiB → 18.9 MiB (+2.395 MiB, +14.5%) over 207 objects → 202 objects (81.6 KiB → 95.8 KiB per object).

| Category         | Change |       Delta |             % |                Size |   Objects |
| ---------------- | -----: | ----------: | ------------: | ------------------: | --------: |
| Standard library | +16.3% |  +2.467 MiB | 91.9% → 93.3% | 15.2 MiB → 17.6 MiB | 161 → 185 |
| Ours             |  -5.4% | -73.742 KiB |   8.1% → 6.7% | 1.33 MiB → 1.26 MiB |   46 → 17 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained directly in the function body, excluding callees.

|   Change |        Delta |             % |                Size |   Objects | Function                                                                        | Location                                                                           |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +599.8% |   +1.688 MiB |  1.7% → 10.4% |  288 KiB → 1.97 MiB |    8 → 25 | `clone()`                                                                       | `java.lang.Object`                                                                 |
|    +7.6% | +817.984 KiB | 63.9% → 60.1% | 10.5 MiB → 11.3 MiB | 124 → 142 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                                 |
|      new | +262.046 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 3 | `resize()`                                                                      | `java.util.HashMap`                                                                |
|    +4.6% |   +5.921 KiB |   0.8% → 0.7% |   128 KiB → 134 KiB |     3 → 4 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                                            |
| +2427.3% |   +4.171 KiB |         <0.1% |    176 B → 4.34 KiB |         1 | `copyOf(int[], int)`                                                            | `java.util.Arrays`                                                                 |
|  +310.5% |       +472 B |         <0.1% |       152 B → 624 B |     1 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                            |
|      new |       +336 B |  0.0% → <0.1% |         0 B → 336 B |     0 → 1 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                                                 |
|      new |       +160 B |  0.0% → <0.1% |         0 B → 160 B |     0 → 1 | `getBytes(int, int)`                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`     |
|      new |       +144 B |  0.0% → <0.1% |         0 B → 144 B |     0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`                                   |
|  +100.0% |        +96 B |         <0.1% |        96 B → 192 B |     1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
|      new |        +88 B |  0.0% → <0.1% |          0 B → 88 B |     0 → 1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)`                 | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker` |
|      new |        +72 B |  0.0% → <0.1% |          0 B → 72 B |     0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                          |
|      new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |     0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                                                          |
|      new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |     0 → 1 | `buildFunction(IrFactory, IrFunctionBuilder)`                                   | `org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt`              |

##### Standard library

|   Change |        Delta |             % |                Size |   Objects | Function                                                                        | Location                  |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ------------------------- |
|  +599.8% |   +1.688 MiB |  1.7% → 10.4% |  288 KiB → 1.97 MiB |    8 → 25 | `clone()`                                                                       | `java.lang.Object`        |
|    +7.6% | +817.984 KiB | 63.9% → 60.1% | 10.5 MiB → 11.3 MiB | 124 → 142 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`        |
|      new | +262.046 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 3 | `resize()`                                                                      | `java.util.HashMap`       |
|    +4.6% |   +5.921 KiB |   0.8% → 0.7% |   128 KiB → 134 KiB |     3 → 4 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`   |
| +2427.3% |   +4.171 KiB |         <0.1% |    176 B → 4.34 KiB |         1 | `copyOf(int[], int)`                                                            | `java.util.Arrays`        |
|  +310.5% |       +472 B |         <0.1% |       152 B → 624 B |     1 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`   |
|      new |       +336 B |  0.0% → <0.1% |         0 B → 336 B |     0 → 1 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`        |
|      new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |     0 → 1 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap` |

##### Ours

|  Change |  Delta |            % |         Size | Objects | Function                                                        | Location                                                                           |
| ------: | -----: | -----------: | -----------: | ------: | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|     new | +160 B | 0.0% → <0.1% |  0 B → 160 B |   0 → 1 | `getBytes(int, int)`                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`     |
|     new | +144 B | 0.0% → <0.1% |  0 B → 144 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`     | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`                                   |
| +100.0% |  +96 B |        <0.1% | 96 B → 192 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                    |
|     new |  +88 B | 0.0% → <0.1% |   0 B → 88 B |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker` |
|     new |  +72 B | 0.0% → <0.1% |   0 B → 72 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`     | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                          |
|     new |  +32 B | 0.0% → <0.1% |   0 B → 32 B |   0 → 1 | `buildFunction(IrFactory, IrFunctionBuilder)`                   | `org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt`              |

#### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size | Objects | Function                                                                                             | Location                                                                                   |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                                        | `java.util.concurrent.ConcurrentHashMap`                                                   |
|   -4.2% |  -54.234 KiB |   7.6% → 6.4% |  1.26 MiB → 1.2 MiB |   6 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                          |
|   -0.9% |  -34.773 KiB | 24.0% → 20.8% | 3.96 MiB → 3.92 MiB |   6 → 4 | `initCEN(int, ZipCoder)`                                                                             | `java.util.zip.ZipFile$Source`                                                             |
|  -22.9% |  -17.101 KiB |   0.4% → 0.3% | 74.8 KiB → 57.7 KiB |   2 → 1 | `forceCapacity(int[], int, int)`                                                                     | `it.unimi.dsi.fastutil.ints.IntArrays`                                                     |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                                        | `java.util.IdentityHashMap`                                                                |
| removed |       -856 B |  <0.1% → 0.0% |         856 B → 0 B |   7 → 0 | `<init>(int, int)`                                                                                   | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                      |
| removed |       -832 B |  <0.1% → 0.0% |         832 B → 0 B |   2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                      | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                            |
| removed |       -272 B |  <0.1% → 0.0% |         272 B → 0 B |   1 → 0 | `init(int)`                                                                                          | `java.util.IdentityHashMap`                                                                |
| removed |       -224 B |  <0.1% → 0.0% |         224 B → 0 B |   2 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                                                                    |
| removed |       -208 B |  <0.1% → 0.0% |         208 B → 0 B |   3 → 0 | `initClassName()`                                                                                    | `java.lang.Class`                                                                          |
| removed |       -192 B |  <0.1% → 0.0% |         192 B → 0 B |   2 → 0 | `build()`                                                                                            | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`                    |
| removed |       -168 B |  <0.1% → 0.0% |         168 B → 0 B |   3 → 0 | `grow(int)`                                                                                          | `java.util.ArrayList`                                                                      |
| removed |       -152 B |  <0.1% → 0.0% |         152 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                                 | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`                                         |
|  -70.8% |       -136 B |         <0.1% |        192 B → 56 B |   3 → 1 | `copyOfRangeByte(byte[], int, int)`                                                                  | `java.util.Arrays`                                                                         |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                          | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                        |
| removed |       -112 B |  <0.1% → 0.0% |         112 B → 0 B |   1 → 0 | `lower(IrModuleFragment)`                                                                            | `org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering` |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |   3 → 0 | `getTypeInternal(String, int, int)`                                                                  | `org.jetbrains.org.objectweb.asm.Type`                                                     |
| removed |        -80 B |  <0.1% → 0.0% |          80 B → 0 B |   2 → 0 | `visitVarInsn(int, int)`                                                                             | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                          |
| removed |        -64 B |  <0.1% → 0.0% |          64 B → 0 B |   2 → 0 | `_init_$lambda$0(int, int)`                                                                          | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                      |
| removed |        -56 B |  <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)`                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                          |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                                             | Location                                 |
| ------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                                        | `java.util.concurrent.ConcurrentHashMap` |
|   -0.9% |  -34.773 KiB | 24.0% → 20.8% | 3.96 MiB → 3.92 MiB |   6 → 4 | `initCEN(int, ZipCoder)`                                                                             | `java.util.zip.ZipFile$Source`           |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |   1 → 0 | `resize(int)`                                                                                        | `java.util.IdentityHashMap`              |
| removed |       -272 B |  <0.1% → 0.0% |         272 B → 0 B |   1 → 0 | `init(int)`                                                                                          | `java.util.IdentityHashMap`              |
| removed |       -224 B |  <0.1% → 0.0% |         224 B → 0 B |   2 → 0 | `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` | `java.lang.ClassLoader`                  |
| removed |       -208 B |  <0.1% → 0.0% |         208 B → 0 B |   3 → 0 | `initClassName()`                                                                                    | `java.lang.Class`                        |
| removed |       -168 B |  <0.1% → 0.0% |         168 B → 0 B |   3 → 0 | `grow(int)`                                                                                          | `java.util.ArrayList`                    |
|  -70.8% |       -136 B |         <0.1% |        192 B → 56 B |   3 → 1 | `copyOfRangeByte(byte[], int, int)`                                                                  | `java.util.Arrays`                       |
| removed |        -40 B |  <0.1% → 0.0% |          40 B → 0 B |   1 → 0 | `<init>(String)`                                                                                     | `java.lang.AbstractStringBuilder`        |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `iterator()`                                                                                         | `java.util.ArrayList`                    |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |   1 → 0 | `<init>(int)`                                                                                        | `java.lang.AbstractStringBuilder`        |
| removed |        -24 B |  <0.1% → 0.0% |          24 B → 0 B |   1 → 0 | `toString()`                                                                                         | `java.lang.StringBuilder`                |

##### Ours

|  Change |       Delta |            % |                Size | Objects | Function                                                                              | Location                                                                                           |
| ------: | ----------: | -----------: | ------------------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   -4.2% | -54.234 KiB |  7.6% → 6.4% |  1.26 MiB → 1.2 MiB |   6 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                                  |
|  -22.9% | -17.101 KiB |  0.4% → 0.3% | 74.8 KiB → 57.7 KiB |   2 → 1 | `forceCapacity(int[], int, int)`                                                      | `it.unimi.dsi.fastutil.ints.IntArrays`                                                             |
| removed |      -856 B | <0.1% → 0.0% |         856 B → 0 B |   7 → 0 | `<init>(int, int)`                                                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
| removed |      -832 B | <0.1% → 0.0% |         832 B → 0 B |   2 → 0 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`       | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
| removed |      -192 B | <0.1% → 0.0% |         192 B → 0 B |   2 → 0 | `build()`                                                                             | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`                            |
| removed |      -152 B | <0.1% → 0.0% |         152 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                  | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`                                                 |
| removed |      -112 B | <0.1% → 0.0% |         112 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                                |
| removed |      -112 B | <0.1% → 0.0% |         112 B → 0 B |   1 → 0 | `lower(IrModuleFragment)`                                                             | `org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering`         |
| removed |       -96 B | <0.1% → 0.0% |          96 B → 0 B |   3 → 0 | `getTypeInternal(String, int, int)`                                                   | `org.jetbrains.org.objectweb.asm.Type`                                                             |
| removed |       -80 B | <0.1% → 0.0% |          80 B → 0 B |   2 → 0 | `visitVarInsn(int, int)`                                                              | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed |       -64 B | <0.1% → 0.0% |          64 B → 0 B |   2 → 0 | `_init_$lambda$0(int, int)`                                                           | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                              |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)`                               | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed |       -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `push(int)`                                                                           | `org.jetbrains.org.objectweb.asm.Frame`                                                            |
| removed |       -48 B | <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `createFile(ZipEntryDescription, Map)`                                                | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`                                       |
| removed |       -48 B | <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `constructor-impl$default(Map, int, DefaultConstructorMarker)`                        | `org.jetbrains.kotlin.fir.caches.NullableMap`                                                      |
| removed |       -48 B | <0.1% → 0.0% |          48 B → 0 B |   2 → 0 | `simplifyTrivialInstructions(MethodNode)`                                             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| removed |       -48 B | <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `<init>(String, MethodNode, FixStackContext, boolean)`                                | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`                              |
| removed |       -40 B | <0.1% → 0.0% |          40 B → 0 B |   1 → 0 | `newFieldMap(int)`                                                                    | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                                     |
| removed |       -40 B | <0.1% → 0.0% |          40 B → 0 B |   1 → 0 | `getLabelNode(Label)`                                                                 | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed |       -40 B | <0.1% → 0.0% |          40 B → 0 B |   1 → 0 | `addForwardReference(int, int, int)`                                                  | `org.jetbrains.org.objectweb.asm.Label`                                                            |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |        Delta |              % |                Size |   Objects | Location                |
| ------: | -----------: | -------------: | ------------------: | --------: | ----------------------- |
|   +7.7% | +831.515 KiB | 99.9% → 100.0% | 10.5 MiB → 11.3 MiB | 122 → 142 | `java.util.Arrays:3539` |
| removed |  -13.531 KiB |    0.1% → 0.0% |      13.5 KiB → 0 B |     2 → 0 | `java.util.Arrays:3541` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Objects | Location                |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------- |
|    new | +262.046 KiB | 0.0% → 100.0% | 0 B → 262 KiB |   0 → 3 | `java.util.HashMap:710` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |      Delta |      % |              Size | Objects | Location                    |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------- |
|  +4.6% | +5.921 KiB | 100.0% | 128 KiB → 134 KiB |   3 → 4 | `java.lang.StringUTF16:211` |

##### `copyOf(int[], int)` (`java.util.Arrays`)

|   Change |      Delta |      % |             Size | Objects | Location                |
| -------: | ---------: | -----: | ---------------: | ------: | ----------------------- |
| +2427.3% | +4.171 KiB | 100.0% | 176 B → 4.34 KiB |       1 | `java.util.Arrays:3595` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Location                |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- |
|    new | +336 B | 0.0% → 100.0% | 0 B → 336 B |   0 → 1 | `java.util.Arrays:3513` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

| Change |  Delta |             % |        Size | Objects | Location                                                                          |
| -----: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- |
|    new | +160 B | 0.0% → 100.0% | 0 B → 160 B |   0 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`)

| Change |  Delta |             % |        Size | Objects | Location                                              |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------- |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1:9476` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change | Delta |      % |         Size | Objects | Location                                             |
| ------: | ----: | -----: | -----------: | ------: | ---------------------------------------------------- |
| +100.0% | +96 B | 100.0% | 96 B → 192 B |   1 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` (`org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker`)

| Change | Delta |             % |       Size | Objects | Location                                                                              |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------- |
|    new | +88 B | 0.0% → 100.0% | 0 B → 88 B |   0 → 1 | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker:51` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

| Change | Delta |             % |       Size | Objects | Location                                                        |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1:24018` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Location                      |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `java.util.LinkedHashMap:281` |

##### `buildFunction(IrFactory, IrFunctionBuilder)` (`org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt`)

| Change | Delta |             % |       Size | Objects | Location                                                                  |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt:239` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Location                                      |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `java.util.concurrent.ConcurrentHashMap:2301` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |       Delta |      % |               Size | Objects | Location                                                             |
| -----: | ----------: | -----: | -----------------: | ------: | -------------------------------------------------------------------- |
|  -4.2% | -54.234 KiB | 100.0% | 1.26 MiB → 1.2 MiB |   6 → 8 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |             % |              Size | Objects | Location                            |
| -----: | ----------: | ------------: | ----------------: | ------: | ----------------------------------- |
|  -7.8% | -29.312 KiB |   9.2% → 8.6% | 374 KiB → 345 KiB |   2 → 1 | `java.util.zip.ZipFile$Source:1744` |
|  -0.1% |   -5.46 KiB | 90.8% → 91.4% |          3.59 MiB |   4 → 3 | `java.util.zip.ZipFile$Source:1733` |

##### `forceCapacity(int[], int, int)` (`it.unimi.dsi.fastutil.ints.IntArrays`)

| Change |       Delta |      % |                Size | Objects | Location                                   |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------ |
| -22.9% | -17.101 KiB | 100.0% | 74.8 KiB → 57.7 KiB |   2 → 1 | `it.unimi.dsi.fastutil.ints.IntArrays:125` |

##### `resize(int)` (`java.util.IdentityHashMap`)

|  Change |      Delta |             % |           Size | Objects | Location                        |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `java.util.IdentityHashMap:486` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |  Delta |             % |        Size | Objects | Location                                                 |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------------------------- |
| removed | -856 B | 100.0% → 0.0% | 856 B → 0 B |   7 → 0 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |  Delta |            % |        Size | Objects | Location                                                           |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------------------------------------ |
| removed | -576 B | 69.2% → 0.0% | 576 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:30` |
| removed | -256 B | 30.8% → 0.0% | 256 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:34` |

##### `init(int)` (`java.util.IdentityHashMap`)

|  Change |  Delta |             % |        Size | Objects | Location                        |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -272 B | 100.0% → 0.0% | 272 B → 0 B |   1 → 0 | `java.util.IdentityHashMap:266` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`)

|  Change |  Delta |             % |        Size | Objects | Location                                                                   |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------------------------------------------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder:54` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |  Delta |             % |        Size | Objects | Location                  |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------- |
| removed | -168 B | 100.0% → 0.0% | 168 B → 0 B |   3 → 0 | `java.util.ArrayList:239` |

##### `<init>(int, float)` (`it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`)

|  Change |  Delta |             % |        Size | Objects | Location                                               |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------ |
| removed | -152 B | 100.0% → 0.0% | 152 B → 0 B |   1 → 0 | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap:103` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |      % |         Size | Objects | Location                |
| -----: | -----: | -----: | -----------: | ------: | ----------------------- |
| -70.8% | -136 B | 100.0% | 192 B → 56 B |   3 → 1 | `java.util.Arrays:3863` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|  Change |  Delta |             % |        Size | Objects | Location                                                  |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `lower(IrModuleFragment)` (`org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering`)

|  Change |  Delta |             % |        Size | Objects | Location                                                                                      |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering:45` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change | Delta |             % |       Size | Objects | Location                                   |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------ |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   3 → 0 | `org.jetbrains.org.objectweb.asm.Type:425` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|  Change | Delta |             % |       Size | Objects | Location                                                                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer:47` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:379` |

##### `<init>(String)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                              |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `java.lang.AbstractStringBuilder:124` |

##### `iterator()` (`java.util.ArrayList`)

|  Change | Delta |             % |       Size | Objects | Location                   |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.util.ArrayList:1029` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                              |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                      |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------- |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `java.lang.StringBuilder:475` |

##### `push(int)` (`org.jetbrains.org.objectweb.asm.Frame`)

|  Change | Delta |             % |       Size | Objects | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.Frame:534` |

##### `createFile(ZipEntryDescription, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|  Change | Delta |             % |       Size | Objects | Location                                                        |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler:77` |

##### `constructor-impl$default(Map, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.caches.NullableMap`)

|  Change | Delta |             % |       Size | Objects | Location                                         |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.caches.NullableMap:17` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change | Delta |            % |       Size | Objects | Location                                                                                              |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------------------------------------------------------------------------------- |
| removed | -24 B | 50.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |
| removed | -24 B | 50.0% → 0.0% | 24 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |

##### `<init>(String, MethodNode, FixStackContext, boolean)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|  Change | Delta |             % |       Size | Objects | Location                                                                 |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer:56` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % |       Size | Objects | Location                                           |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.protobuf.SmallSortedMap:100` |

##### `getLabelNode(Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:534` |

##### `addForwardReference(int, int, int)` (`org.jetbrains.org.objectweb.asm.Label`)

|  Change | Delta |             % |       Size | Objects | Location                                    |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.Label:443` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `clone()` (`java.lang.Object`)

|  Change |      Delta |      % |               Size | Objects | Caller                | Location           |
| ------: | ---------: | -----: | -----------------: | ------: | --------------------- | ------------------ |
| +599.8% | +1.688 MiB | 100.0% | 288 KiB → 1.97 MiB |  8 → 25 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |        Delta |              % |                Size |   Objects | Caller                        | Location                          |
| ------: | -----------: | -------------: | ------------------: | --------: | ----------------------------- | --------------------------------- |
|   +7.7% | +831.515 KiB | 99.9% → 100.0% | 10.5 MiB → 11.3 MiB | 122 → 142 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| removed |  -13.531 KiB |    0.1% → 0.0% |      13.5 KiB → 0 B |     2 → 0 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `resize()` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Objects | Caller                                          | Location            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +262.046 KiB | 0.0% → 100.0% | 0 B → 262 KiB |   0 → 3 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |      Delta |      % |              Size | Objects | Caller                           | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------- | ------------------ |
|  +4.6% | +5.921 KiB | 100.0% | 128 KiB → 134 KiB |   3 → 4 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `copyOf(int[], int)` (`java.util.Arrays`)

|  Change |      Delta |             % |           Size | Objects | Caller                | Location                                 |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | ---------------------------------------- |
|     new | +4.343 KiB | 0.0% → 100.0% | 0 B → 4.34 KiB |   0 → 1 | `realloc(int[], int)` | `com.intellij.util.ArrayUtil`            |
| removed |     -176 B | 100.0% → 0.0% |    176 B → 0 B |   1 → 0 | `ensureCapacity(int)` | `kotlin.collections.builders.MapBuilder` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |  Delta |      % |          Size | Objects | Caller                                                    | Location                |
| ------: | -----: | -----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +310.5% | +472 B | 100.0% | 152 B → 624 B |   1 → 3 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Caller                  | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------- | ------------------ |
|    new | +336 B | 0.0% → 100.0% | 0 B → 336 B |   0 → 1 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

| Change |  Delta |             % |        Size | Objects | Caller                                                                                      | Location                                                          |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +160 B | 0.0% → 100.0% | 0 B → 160 B |   0 → 1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`)

| Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                         |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | ------------------------------------------------ |
|    new | +144 B | 0.0% → 100.0% | 0 B → 144 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change | Delta |      % |         Size | Objects | Caller                                                      | Location                                        |
| ------: | ----: | -----: | -----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| +100.0% | +96 B | 100.0% | 96 B → 192 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `check(CheckerContext, DiagnosticReporter, FirResolvedTypeRef)` (`org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker`)

| Change | Delta |             % |       Size | Objects | Caller                                                  | Location                                                                           |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +88 B | 0.0% → 100.0% | 0 B → 88 B |   0 → 1 | `check(CheckerContext, DiagnosticReporter, FirTypeRef)` | `org.jetbrains.kotlin.fir.analysis.checkers.type.FirUpperBoundViolatedTypeChecker` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

| Change | Delta |             % |       Size | Objects | Caller                                                      | Location                                                  |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------- |
|    new | +72 B | 0.0% → 100.0% | 0 B → 72 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change | Delta |             % |       Size | Objects | Caller                                          | Location            |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `buildFunction(IrFactory, IrFunctionBuilder)` (`org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                                                    | Location                                                              |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `addFunction(IrClass, String, IrType, Modality, DescriptorVisibility, boolean, boolean, boolean, boolean, IrDeclarationOrigin, int, int)` | `org.jetbrains.kotlin.ir.builders.declarations.DeclarationBuildersKt` |

##### `initTable()` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Caller                            | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)` | `java.util.concurrent.ConcurrentHashMap` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |      Delta |             % |           Size | Objects | Caller           | Location                                                                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| removed | -1.255 MiB | 100.0% → 0.0% | 1.26 MiB → 0 B |   6 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f8013f5a40` |
|     new | +1.202 MiB | 0.0% → 100.0% |  0 B → 1.2 MiB |   0 → 8 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f73c0` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |       Delta |      % |                Size | Objects | Caller                                          | Location                       |
| -----: | ----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
|  -0.9% | -34.773 KiB | 100.0% | 3.96 MiB → 3.92 MiB |   6 → 4 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `forceCapacity(int[], int, int)` (`it.unimi.dsi.fastutil.ints.IntArrays`)

| Change |       Delta |      % |                Size | Objects | Caller      | Location                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ----------- | ----------------------------------------- |
| -22.9% | -17.101 KiB | 100.0% | 74.8 KiB → 57.7 KiB |   2 → 1 | `grow(int)` | `it.unimi.dsi.fastutil.ints.IntArrayList` |

##### `resize(int)` (`java.util.IdentityHashMap`)

|  Change |      Delta |             % |           Size | Objects | Caller                | Location                    |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | --------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.IdentityHashMap` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |  Delta |            % |        Size | Objects | Caller                                          | Location                                                                            |
| ------: | -----: | -----------: | ----------: | ------: | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| removed | -384 B | 44.9% → 0.0% | 384 B → 0 B |   3 → 0 | `_init_$lambda$0(int, int)`                     | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`               |
| removed | -208 B | 24.3% → 0.0% | 208 B → 0 B |   2 → 0 | `<init>(FixStackAnalyzer, int, int)`            | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |
| removed | -136 B | 15.9% → 0.0% | 136 B → 0 B |   1 → 0 | `preprocessNodeBeforeInline$lambda$0(int, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                 |
| removed | -128 B | 15.0% → 0.0% | 128 B → 0 B |   1 → 0 | `<init>(int, int)`                              | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                      |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |  Delta |            % |        Size | Objects | Caller                                                        | Location                                                               |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| removed | -576 B | 69.2% → 0.0% | 576 B → 0 B |   1 → 0 | `<init>(String, MethodNode, Interpreter, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`  |
| removed | -256 B | 30.8% → 0.0% | 256 B → 0 B |   1 → 0 | `<init>(String, MethodNode, Interpreter, Function2)`          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FastStackAnalyzer` |

##### `init(int)` (`java.util.IdentityHashMap`)

|  Change |  Delta |             % |        Size | Objects | Caller     | Location                    |
| ------: | -----: | ------------: | ----------: | ------: | ---------- | --------------------------- |
| removed | -272 B | 100.0% → 0.0% | 272 B → 0 B |   1 → 0 | `<init>()` | `java.util.IdentityHashMap` |

##### `defineClass0(ClassLoader, Class, String, byte[], int, int, ProtectionDomain, boolean, int, Object)` (`java.lang.ClassLoader`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                                    | Location             |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------- | -------------------- |
| removed | -224 B | 100.0% → 0.0% | 224 B → 0 B |   2 → 0 | `defineClass(ClassLoader, Class, String, byte[], ProtectionDomain, boolean, int, Object)` | `java.lang.System$2` |

##### `initClassName()` (`java.lang.Class`)

|  Change |  Delta |             % |        Size | Objects | Caller      | Location          |
| ------: | -----: | ------------: | ----------: | ------: | ----------- | ----------------- |
| removed | -208 B | 100.0% → 0.0% | 208 B → 0 B |   3 → 0 | `getName()` | `java.lang.Class` |

##### `build()` (`org.jetbrains.kotlin.fir.declarations.builder.FirNamedFunctionBuilder`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                                                  | Location                                                         |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   2 → 0 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |  Delta |             % |        Size | Objects | Caller   | Location              |
| ------: | -----: | ------------: | ----------: | ------: | -------- | --------------------- |
| removed | -168 B | 100.0% → 0.0% | 168 B → 0 B |   3 → 0 | `grow()` | `java.util.ArrayList` |

##### `<init>(int, float)` (`it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap`)

|  Change |  Delta |             % |        Size | Objects | Caller     | Location                                           |
| ------: | -----: | ------------: | ----------: | ------: | ---------- | -------------------------------------------------- |
| removed | -152 B | 100.0% → 0.0% | 152 B → 0 B |   1 → 0 | `<init>()` | `it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |  Delta |      % |         Size | Objects | Caller                          | Location           |
| -----: | -----: | -----: | -----------: | ------: | ------------------------------- | ------------------ |
| -70.8% | -136 B | 100.0% | 192 B → 56 B |   3 → 1 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|  Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                            |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `lower(IrModuleFragment)` (`org.jetbrains.kotlin.scripting.compiler.plugin.irLowerings.ReplSnippetsToClassesLowering`)

|  Change |  Delta |             % |        Size | Objects | Caller                                        | Location                                                                          |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `generate(IrModuleFragment, IrPluginContext)` | `org.jetbrains.kotlin.scripting.compiler.plugin.extensions.ReplLoweringExtension` |

##### `getTypeInternal(String, int, int)` (`org.jetbrains.org.objectweb.asm.Type`)

|  Change | Delta |            % |       Size | Objects | Caller                  | Location                               |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------- | -------------------------------------- |
| removed | -64 B | 66.7% → 0.0% | 64 B → 0 B |   2 → 0 | `getReturnType(String)` | `org.jetbrains.org.objectweb.asm.Type` |
| removed | -32 B | 33.3% → 0.0% | 32 B → 0 B |   1 → 0 | `getType(String)`       | `org.jetbrains.org.objectweb.asm.Type` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |            % |       Size | Objects | Caller                   | Location                                                     |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------ | ------------------------------------------------------------ |
| removed | -40 B | 50.0% → 0.0% | 40 B → 0 B |   1 → 0 | `visitVarInsn(int, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor`              |
| removed | -40 B | 50.0% → 0.0% | 40 B → 0 B |   1 → 0 | `load(int, Type)`        | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `_init_$lambda$0(int, int)` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

|  Change | Delta |             % |       Size | Objects | Caller                   | Location                                                                                         |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------ | ------------------------------------------------------------------------------------------------ |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   2 → 0 | `invoke(Object, Object)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000f8018e8518` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Caller                                                  | Location                                        |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------- | ----------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `<init>(String)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller           | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>(String)` | `java.lang.StringBuilder` |

##### `iterator()` (`java.util.ArrayList`)

|  Change | Delta |             % |       Size | Objects | Caller         | Location                                   |
| ------: | ----: | ------------: | ---------: | ------: | -------------- | ------------------------------------------ |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `doPeriodic()` | `jdk.jfr.internal.periodic.PeriodicEvents` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | ------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location                             |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | ------------------------------------ |
| removed | -24 B | 100.0% → 0.0% | 24 B → 0 B |   1 → 0 | `unparseMethod(Class, Class[])` | `sun.invoke.util.BytecodeDescriptor` |

##### `push(int)` (`org.jetbrains.org.objectweb.asm.Frame`)

|  Change | Delta |             % |       Size | Objects | Caller                                   | Location                                |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------- | --------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `execute(int, int, Symbol, SymbolTable)` | `org.jetbrains.org.objectweb.asm.Frame` |

##### `createFile(ZipEntryDescription, Map)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler`)

|  Change | Delta |             % |       Size | Objects | Caller                              | Location                                                     |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------- | ------------------------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `<init>(FastJarFileSystem, String)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `constructor-impl$default(Map, int, DefaultConstructorMarker)` (`org.jetbrains.kotlin.fir.caches.NullableMap`)

|  Change | Delta |             % |       Size | Objects | Caller                                                  | Location                                               |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------- | ------------------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `<init>(Map, Function2, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location                                                                                           |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   2 → 0 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `<init>(String, MethodNode, FixStackContext, boolean)` (`org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                       | Location                                                                       |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `analyzeAndTransformBreakContinueGotos(FixStackContext, String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer` |

##### `newFieldMap(int)` (`org.jetbrains.kotlin.protobuf.SmallSortedMap`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                                 |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | ---------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `<init>()` | `org.jetbrains.kotlin.protobuf.FieldSet` |

##### `getLabelNode(Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Caller              | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ------------------- | ------------------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `visitLabel(Label)` | `org.jetbrains.org.objectweb.asm.tree.MethodNode` |

##### `addForwardReference(int, int, int)` (`org.jetbrains.org.objectweb.asm.Label`)

|  Change | Delta |             % |       Size | Objects | Caller                          | Location                                |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- | --------------------------------------- |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `put(ByteVector, int, boolean)` | `org.jetbrains.org.objectweb.asm.Label` |

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                                    | Location                                                                                                                                                                                      |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +25.4% |    +2.75 MiB | 65.6% → 71.8% | 10.8 MiB → 13.6 MiB | 130 → 168 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
|  +25.4% |    +2.75 MiB | 65.6% → 71.8% | 10.8 MiB → 13.6 MiB | 130 → 168 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
|  +18.2% |   +2.693 MiB | 89.7% → 92.6% | 14.8 MiB → 17.5 MiB | 177 → 183 | `main(String[])`                                                                                            | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|  +18.2% |   +2.693 MiB | 89.7% → 92.6% | 14.8 MiB → 17.5 MiB | 178 → 183 | `run(String[])`                                                                                             | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|  +23.1% |     +2.5 MiB | 65.6% → 70.5% | 10.8 MiB → 13.3 MiB | 130 → 167 | `toByteArray()`                                                                                             | `java.io.ByteArrayOutputStream`                                                                                                                                                               |
|  +23.0% |   +2.486 MiB | 65.6% → 70.5% | 10.8 MiB → 13.3 MiB | 132 → 167 | `copyOf(byte[], int)`                                                                                       | `java.util.Arrays`                                                                                                                                                                            |
| +599.8% |   +1.688 MiB |  1.7% → 10.4% |  288 KiB → 1.97 MiB |    8 → 25 | `clone()`                                                                                                   | `java.lang.Object`                                                                                                                                                                            |
|     new |   +1.202 MiB |   0.0% → 6.4% |       0 B → 1.2 MiB |     0 → 8 | `invoke(Object)`                                                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f73c0`                                                                                                  |
|     new | +262.085 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 4 | `putVal(int, Object, Object, boolean, boolean)`                                                             | `java.util.HashMap`                                                                                                                                                                           |
|     new | +262.085 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 4 | `put(Object, Object)`                                                                                       | `java.util.HashMap`                                                                                                                                                                           |
|     new | +262.046 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 3 | `resize()`                                                                                                  | `java.util.HashMap`                                                                                                                                                                           |
|   +7.1% |  +91.078 KiB |   7.6% → 7.1% | 1.25 MiB → 1.34 MiB |   14 → 15 | `getValue(Object, Object)`                                                                                  | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                                                                                                                        |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)`                                                     | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                                                                                                             |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `invoke()`                                                                                                  | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x000000f8015ebd20 → org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015ea9c0`     |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                            | `org.jetbrains.kotlin.util.PerformanceManager`                                                                                                                                                |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)`                                          | `org.jetbrains.kotlin.util.PerformanceManagerKt`                                                                                                                                              |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                                                                                                             |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                                                                                                           |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `compute()`                                                                                                 | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x000000f8015ea2a8 → org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015e8f48` |
|   +6.7% |   +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `runReadAction(Computable)`                                                                                 | `com.intellij.mock.MockApplication`                                                                                                                                                           |

##### Standard library

|   Change |        Delta |             % |                Size |   Objects | Function                                                                        | Location                                                 |
| -------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | -------------------------------------------------------- |
|   +23.1% |     +2.5 MiB | 65.6% → 70.5% | 10.8 MiB → 13.3 MiB | 130 → 167 | `toByteArray()`                                                                 | `java.io.ByteArrayOutputStream`                          |
|   +23.0% |   +2.486 MiB | 65.6% → 70.5% | 10.8 MiB → 13.3 MiB | 132 → 167 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                       |
|  +599.8% |   +1.688 MiB |  1.7% → 10.4% |  288 KiB → 1.97 MiB |    8 → 25 | `clone()`                                                                       | `java.lang.Object`                                       |
|      new | +262.085 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 4 | `putVal(int, Object, Object, boolean, boolean)`                                 | `java.util.HashMap`                                      |
|      new | +262.085 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 4 | `put(Object, Object)`                                                           | `java.util.HashMap`                                      |
|      new | +262.046 KiB |   0.0% → 1.4% |       0 B → 262 KiB |     0 → 3 | `resize()`                                                                      | `java.util.HashMap`                                      |
|      new |   +6.031 KiB |  0.0% → <0.1% |      0 B → 6.03 KiB |     0 → 2 | `add(Object)`                                                                   | `java.util.HashSet`                                      |
|    +4.6% |   +5.921 KiB |   0.8% → 0.7% |   128 KiB → 134 KiB |     3 → 4 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                  |
|    +4.6% |   +5.921 KiB |   0.8% → 0.7% |   128 KiB → 134 KiB |     3 → 4 | `<init>(char[], int, int, Void)`                                                | `java.lang.String`                                       |
|    +4.6% |   +5.921 KiB |   0.8% → 0.7% |   128 KiB → 134 KiB |     3 → 4 | `<init>(char[], int, int)`                                                      | `java.lang.String`                                       |
| +2427.3% |   +4.171 KiB |         <0.1% |    176 B → 4.34 KiB |         1 | `copyOf(int[], int)`                                                            | `java.util.Arrays`                                       |
| +1089.1% |   +3.914 KiB |         <0.1% |    368 B → 4.27 KiB |     5 → 4 | `getValue()`                                                                    | `kotlin.SynchronizedLazyImpl`                            |
| +2236.4% |   +3.843 KiB |         <0.1% |    176 B → 4.02 KiB |         1 | `addAll(Collection)`                                                            | `java.util.AbstractCollection`                           |
| +2236.4% |   +3.843 KiB |         <0.1% |    176 B → 4.02 KiB |         1 | `addAll(Collection, Iterable)`                                                  | `kotlin.collections.CollectionsKt__MutableCollectionsKt` |
| +1327.8% |   +3.734 KiB |         <0.1% |    288 B → 4.02 KiB |     2 → 1 | `getValue()`                                                                    | `kotlin.SafePublicationLazyImpl`                         |
|  +486.4% |   +1.671 KiB |         <0.1% |    352 B → 2.02 KiB |     4 → 1 | `resumeWith(Object)`                                                            | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`    |
|  +310.5% |       +472 B |         <0.1% |       152 B → 624 B |     1 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                  |
|      new |       +336 B |  0.0% → <0.1% |         0 B → 336 B |     0 → 1 | `copyOf(Object[], int, Class)`                                                  | `java.util.Arrays`                                       |
|      new |       +336 B |  0.0% → <0.1% |         0 B → 336 B |     0 → 1 | `copyOf(Object[], int)`                                                         | `java.util.Arrays`                                       |
|   +73.3% |       +264 B |         <0.1% |       360 B → 624 B |     4 → 3 | `defineClass(String, byte[], int, int, ProtectionDomain)`                       | `java.lang.ClassLoader`                                  |

##### Ours

| Change |       Delta |             % |                Size |   Objects | Function                                                                                                                                                  | Location                                                                                                                                                                                      |
| -----: | ----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +25.4% |   +2.75 MiB | 65.6% → 71.8% | 10.8 MiB → 13.6 MiB | 130 → 168 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                   | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
| +25.4% |   +2.75 MiB | 65.6% → 71.8% | 10.8 MiB → 13.6 MiB | 130 → 168 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                              | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                                                                        |
| +18.2% |  +2.693 MiB | 89.7% → 92.6% | 14.8 MiB → 17.5 MiB | 177 → 183 | `main(String[])`                                                                                                                                          | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
| +18.2% |  +2.693 MiB | 89.7% → 92.6% | 14.8 MiB → 17.5 MiB | 178 → 183 | `run(String[])`                                                                                                                                           | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                                                                   |
|    new |  +1.202 MiB |   0.0% → 6.4% |       0 B → 1.2 MiB |     0 → 8 | `invoke(Object)`                                                                                                                                          | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f73c0`                                                                                                  |
|  +7.1% | +91.078 KiB |   7.6% → 7.1% | 1.25 MiB → 1.34 MiB |   14 → 15 | `getValue(Object, Object)`                                                                                                                                | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                                                                                                                        |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)`                                                                                                   | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                                                                                                             |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `invoke()`                                                                                                                                                | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x000000f8015ebd20 → org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015ea9c0`     |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)`                                                                          | `org.jetbrains.kotlin.util.PerformanceManager`                                                                                                                                                |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)`                                                                                        | `org.jetbrains.kotlin.util.PerformanceManagerKt`                                                                                                                                              |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`                                                                                                                             |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                                                                                                           |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `compute()`                                                                                                                                               | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x000000f8015ea2a8 → org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015e8f48` |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `runReadAction(Computable)`                                                                                                                               | `com.intellij.mock.MockApplication`                                                                                                                                                           |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)`                                                        | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                                                                                                           |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`                                                                                                                           |
|  +6.7% |  +85.21 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    8 → 12 | `findKotlinClassOrContent(ClassId, MetadataVersion)`                                                                                                      | `org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`                                                                                                                                          |
|  +6.6% | +85.171 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    9 → 12 | `computePackagePartInfo(FqName, String)`                                                                                                                  | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                                                                                                               |
|  +6.6% | +85.171 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    9 → 12 | `computePackagePartsInfos(FqName)`                                                                                                                        | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`                                                                                                               |
|  +6.6% | +85.171 KiB |   7.6% → 7.1% | 1.25 MiB → 1.33 MiB |    9 → 12 | `tryComputePackagePartInfos(FqName)`                                                                                                                      | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`                                                                                                              |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |            % |               Size | Objects | Function                                                                                            | Location                                                                                                                                                                                  |
| ------: | -----------: | -----------: | -----------------: | ------: | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -100.0% |   -1.255 MiB | 7.6% → <0.1% |   1.26 MiB → 160 B |   6 → 1 | `invoke(Object)`                                                                                    | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f8013f5a40 → org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f6880` |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `initTable()`                                                                                       | `java.util.concurrent.ConcurrentHashMap`                                                                                                                                                  |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                                                   | `java.util.concurrent.ConcurrentHashMap`                                                                                                                                                  |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                                               | `java.util.concurrent.ConcurrentHashMap`                                                                                                                                                  |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                                               | `jdk.jfr.internal.StringPool`                                                                                                                                                             |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `addString(String)`                                                                                 | `jdk.jfr.internal.StringPool`                                                                                                                                                             |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `putString(String)`                                                                                 | `jdk.jfr.internal.event.EventWriter`                                                                                                                                                      |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)`                   | `jdk.jfr.events.ActiveRecordingEvent`                                                                                                                                                     |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                                                 | `jdk.jfr.internal.PlatformRecorder`                                                                                                                                                       |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                                          | `jdk.jfr.internal.PlatformRecorder`                                                                                                                                                       |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `start()`                                                                                           | `jdk.jfr.internal.PlatformRecording`                                                                                                                                                      |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `start()`                                                                                           | `jdk.jfr.Recording`                                                                                                                                                                       |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                                           | `jdk.jfr.internal.dcmd.DCmdStart`                                                                                                                                                         |
| removed | -256.015 KiB |  1.5% → 0.0% |      256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                                     | `jdk.jfr.internal.dcmd.AbstractDCmd`                                                                                                                                                      |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `phaseBody(LoggingContext, Object)`                                                                 | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                                                                                         |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                          | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                                                                                   |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                          | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                                                                                               |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                                                                                                                                      |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                                                                                   |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                                                                                   |

##### Standard library

|  Change |        Delta |             % |                Size | Objects | Function                                                                          | Location                                                                                                  |
| ------: | -----------: | ------------: | ------------------: | ------: | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `initTable()`                                                                     | `java.util.concurrent.ConcurrentHashMap`                                                                  |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putVal(Object, Object, boolean)`                                                 | `java.util.concurrent.ConcurrentHashMap`                                                                  |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `put(Object, Object)`                                                             | `java.util.concurrent.ConcurrentHashMap`                                                                  |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `storeString(String)`                                                             | `jdk.jfr.internal.StringPool`                                                                             |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `addString(String)`                                                               | `jdk.jfr.internal.StringPool`                                                                             |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `putString(String)`                                                               | `jdk.jfr.internal.event.EventWriter`                                                                      |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `commit(long, long, long, String, String, boolean, long, long, long, long, long)` | `jdk.jfr.events.ActiveRecordingEvent`                                                                     |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `writeMetaEvents()`                                                               | `jdk.jfr.internal.PlatformRecorder`                                                                       |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start(PlatformRecording)`                                                        | `jdk.jfr.internal.PlatformRecorder`                                                                       |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.internal.PlatformRecording`                                                                      |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `start()`                                                                         | `jdk.jfr.Recording`                                                                                       |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(ArgumentParser)`                                                         | `jdk.jfr.internal.dcmd.DCmdStart`                                                                         |
| removed | -256.015 KiB |   1.5% → 0.0% |       256 KiB → 0 B |   1 → 0 | `execute(String, String, char)`                                                   | `jdk.jfr.internal.dcmd.AbstractDCmd`                                                                      |
|   -1.4% |   -58.21 KiB | 24.5% → 21.1% | 4.04 MiB → 3.99 MiB | 53 → 16 | `invokeStatic(Object, Object)`                                                    | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |
|   -1.4% |  -57.921 KiB | 24.5% → 21.1% | 4.04 MiB → 3.99 MiB | 51 → 16 | `invoke(Object, Object, Object)`                                                  | `java.lang.invoke.LambdaForm$MH.0x000000f801010000 → java.lang.invoke.LambdaForm$MH.0x0000007001010000`   |
|   -1.4% |   -57.75 KiB | 24.5% → 21.1% | 4.04 MiB → 3.99 MiB | 50 → 16 | `invokeExact_MT(Object, Object, Object, Object)`                                  | `java.lang.invoke.Invokers$Holder`                                                                        |
|   -1.4% |  -57.695 KiB | 24.2% → 20.8% | 3.99 MiB → 3.93 MiB | 48 → 15 | `invokeImpl(Object, Object[])`                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|   -1.4% |  -57.695 KiB | 24.2% → 20.8% | 3.99 MiB → 3.93 MiB | 48 → 15 | `invoke(Object, Object[])`                                                        | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|   -1.4% |  -57.695 KiB | 24.2% → 20.8% | 3.99 MiB → 3.93 MiB | 48 → 15 | `invoke(Object, Object[])`                                                        | `java.lang.reflect.Method`                                                                                |
|   -0.9% |  -34.773 KiB | 24.0% → 20.8% | 3.96 MiB → 3.92 MiB |   6 → 4 | `initCEN(int, ZipCoder)`                                                          | `java.util.zip.ZipFile$Source`                                                                            |

##### Ours

|  Change |        Delta |            % |               Size | Objects | Function                                                                                                                                                                    | Location                                                                                                                                                                                  |
| ------: | -----------: | -----------: | -----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -100.0% |   -1.255 MiB | 7.6% → <0.1% |   1.26 MiB → 160 B |   6 → 1 | `invoke(Object)`                                                                                                                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f8013f5a40 → org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f6880` |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `phaseBody(LoggingContext, Object)`                                                                                                                                         | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                                                                                         |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                                                                                                   |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                                                                                                                               |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                                                        | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                                                                                                                                      |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                                                                                   |
|  -72.7% | -167.921 KiB |  1.4% → 0.3% | 231 KiB → 63.2 KiB | 51 → 12 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                                                         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                                                                                   |
|  -72.6% | -167.812 KiB |  1.4% → 0.3% | 231 KiB → 63.3 KiB | 51 → 13 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                                                                                                                         |
| removed | -145.375 KiB |  0.9% → 0.0% |      145 KiB → 0 B |  36 → 0 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                                                                                   |
| -100.0% | -145.367 KiB | 0.9% → <0.1% |     145 KiB → 72 B |  36 → 2 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                                                                                                                           |
| removed | -145.335 KiB |  0.9% → 0.0% |      145 KiB → 0 B |  35 → 0 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                                                                                                                    |
| removed | -145.335 KiB |  0.9% → 0.0% |      145 KiB → 0 B |  35 → 0 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                                                                                                                    |
| removed | -145.335 KiB |  0.9% → 0.0% |      145 KiB → 0 B |  35 → 0 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`                                                                                                                       |
| -100.0% | -145.234 KiB | 0.9% → <0.1% |     145 KiB → 72 B |  35 → 2 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                                                                                                                           |
| removed | -136.328 KiB |  0.8% → 0.0% |      136 KiB → 0 B |  34 → 0 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                                                                                                                   |
| removed |  -135.21 KiB |  0.8% → 0.0% |      135 KiB → 0 B |  11 → 0 | `visitCall(IrCall, BlockInfo)`                                                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                                                                                              |
| removed |  -135.21 KiB |  0.8% → 0.0% |      135 KiB → 0 B |  11 → 0 | `visitCall(IrCall, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                                                                                              |
| removed |  -135.21 KiB |  0.8% → 0.0% |      135 KiB → 0 B |  11 → 0 | `accept(IrVisitor, Object)`                                                                                                                                                 | `org.jetbrains.kotlin.ir.expressions.IrCall`                                                                                                                                              |
| removed |  -135.21 KiB |  0.8% → 0.0% |      135 KiB → 0 B |  11 → 0 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                                                                                              |
| removed |  -135.21 KiB |  0.8% → 0.0% |      135 KiB → 0 B |  11 → 0 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                                                                                                              |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |              % |                Size |   Objects | Callee                | Location                        |
| -----: | -----------: | -------------: | ------------------: | --------: | --------------------- | ------------------------------- |
| +23.1% |     +2.5 MiB | 100.0% → 98.2% | 10.8 MiB → 13.3 MiB | 130 → 167 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|    new | +256.015 KiB |    0.0% → 1.8% |       0 B → 256 KiB |     0 → 1 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |      Delta |           % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | ---------: | ----------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +25.4% |  +2.75 MiB |      100.0% | 10.8 MiB → 13.6 MiB | 130 → 168 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  +0.3% | +1.351 KiB | 4.3% → 3.5% |   481 KiB → 482 KiB |         4 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |      Delta |      % |                Size |   Objects | Callee          | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------: | --------------- | ------------------------------------------- |
| +18.2% | +2.693 MiB | 100.0% | 14.8 MiB → 17.5 MiB | 177 → 183 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |             % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | ----------: | ------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +25.4% |   +2.75 MiB | 73.1% → 77.5% | 10.8 MiB → 13.6 MiB | 130 → 168 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  -1.4% | -57.695 KiB | 26.9% → 22.5% | 3.99 MiB → 3.93 MiB |   48 → 15 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |    Delta |      % |                Size |   Objects | Callee                | Location           |
| -----: | -------: | -----: | ------------------: | --------: | --------------------- | ------------------ |
| +23.1% | +2.5 MiB | 100.0% | 10.8 MiB → 13.3 MiB | 130 → 167 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|  Change |      Delta |            % |               Size | Objects | Callee    | Location           |
| ------: | ---------: | -----------: | -----------------: | ------: | --------- | ------------------ |
| +599.8% | +1.688 MiB | 2.6% → 14.8% | 288 KiB → 1.97 MiB |  8 → 25 | `clone()` | `java.lang.Object` |

##### `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f73c0`)

| Change |      Delta |             % |          Size | Objects | Callee                                                                                | Location                                                          |
| -----: | ---------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +1.202 MiB | 0.0% → 100.0% | 0 B → 1.2 MiB |   0 → 8 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Objects | Callee                                       | Location                  |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------- | ------------------------- |
|    new | +262.046 KiB | 0.0% → 100.0% | 0 B → 262 KiB |   0 → 3 | `resize()`                                   | `java.util.HashMap`       |
|    new |        +40 B |  0.0% → <0.1% |    0 B → 40 B |   0 → 1 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change |        Delta |             % |          Size | Objects | Callee                                          | Location            |
| -----: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------- |
|    new | +262.085 KiB | 0.0% → 100.0% | 0 B → 262 KiB |   0 → 4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `getValue(Object, Object)` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`)

|     Change |       Delta |              % |                Size | Objects | Callee                   | Location                                                                                                                                            |
| ---------: | ----------: | -------------: | ------------------: | ------: | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
|      +6.6% | +85.171 KiB | 100.0% → 99.5% | 1.25 MiB → 1.33 MiB |  9 → 12 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`                                     |
| +117380.0% | +45.851 KiB |   <0.1% → 3.3% |     40 B → 45.9 KiB |   1 → 4 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelClassifierNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|      +3.5% | +45.351 KiB | 100.0% → 96.6% |  1.25 MiB → 1.3 MiB |  8 → 10 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`   |
| +101940.0% |  +39.82 KiB |   <0.1% → 2.9% |     40 B → 39.9 KiB |   1 → 2 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$1`                                     |
|    removed |      -160 B |   <0.1% → 0.0% |         160 B → 0 B |   2 → 0 | `invoke(Object, Object)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$3`                                     |

##### `create$lambda$0(VirtualFile, byte[], MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`)

| Change |       Delta |             % |               Size | Objects | Callee                                       | Location                                                |
| -----: | ----------: | ------------: | -----------------: | ------: | -------------------------------------------- | ------------------------------------------------------- |
|  +6.9% | +79.289 KiB | 90.0% → 90.2% | 1.13 MiB → 1.2 MiB |   5 → 8 | `contentsToByteArray(boolean)`               | `com.intellij.openapi.vfs.VirtualFile`                  |
|  +4.6% |  +5.921 KiB |  10.0% → 9.8% |  128 KiB → 134 KiB |   3 → 4 | `create(byte[], MetadataVersion, Function4)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `invoke()` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015ea9c0`)

| Change |      Delta |      % |                Size | Objects | Callee                                                  | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------- | ----------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `create$lambda$0(VirtualFile, byte[], MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManager`)

| Change |      Delta |      % |                Size | Objects | Callee     | Location                                                                                                                                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `invoke()` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x000000f8015ebd20 → org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015ea9c0` |

##### `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` (`org.jetbrains.kotlin.util.PerformanceManagerKt`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                           | Location                                       |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `measureSideTime$org_jetbrains_kotlin_compiler_common(PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManager` |

##### `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory`)

| Change |      Delta |      % |                Size | Objects | Callee                                                             | Location                                         |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------ |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `tryMeasureSideTime(PerformanceManager, PhaseSideType, Function0)` | `org.jetbrains.kotlin.util.PerformanceManagerKt` |

##### `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                                      | Location                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `create$org_jetbrains_kotlin_frontend_common_jvm(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory` |

##### `compute()` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015e8f48`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                                      | Location                                                            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `getKotlinBinaryClassOrClassFileContent$lambda$0(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `runReadAction(Computable)` (`com.intellij.mock.MockApplication`)

| Change |      Delta |      % |                Size | Objects | Callee      | Location                                                                                                                                                                                      |
| -----: | ---------: | -----: | ------------------: | ------: | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `compute()` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x000000f8015ea2a8 → org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015e8f48` |

##### `add(Object)` (`java.util.HashSet`)

| Change |      Delta |             % |           Size | Objects | Callee                | Location            |
| -----: | ---------: | ------------: | -------------: | ------: | --------------------- | ------------------- |
|    new | +6.031 KiB | 0.0% → 100.0% | 0 B → 6.03 KiB |   0 → 2 | `put(Object, Object)` | `java.util.HashMap` |

##### `<init>(char[], int, int, Void)` (`java.lang.String`)

| Change |      Delta |      % |              Size | Objects | Callee                       | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ---------------------------- | ----------------------- |
|  +4.6% | +5.921 KiB | 100.0% | 128 KiB → 134 KiB |   3 → 4 | `compress(char[], int, int)` | `java.lang.StringUTF16` |

##### `<init>(char[], int, int)` (`java.lang.String`)

| Change |      Delta |      % |              Size | Objects | Callee                           | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------- | ------------------ |
|  +4.6% | +5.921 KiB | 100.0% | 128 KiB → 134 KiB |   3 → 4 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|   Change |      Delta |             % |             Size | Objects | Callee     | Location                                                                                                                                                                  |
| -------: | ---------: | ------------: | ---------------: | ------: | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +3571.4% | +3.906 KiB | 30.4% → 94.0% | 112 B → 4.02 KiB |       1 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000f801632fc0 → org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x0000007001631d90` |
|   +73.7% |     +112 B |  41.3% → 6.0% |    152 B → 264 B |   2 → 3 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000f801776b90 → org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x00000070017761f8`                     |
|  removed |      -80 B |  21.7% → 0.0% |       80 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter$$Lambda.0x000000f8017a7548`                                                                                         |
|  removed |      -24 B |   6.5% → 0.0% |       24 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.extensions.FirExtensionRegistrar$$Lambda.0x000000f8013d5d60`                                                                                    |

##### `addAll(Collection)` (`java.util.AbstractCollection`)

|  Change |      Delta |             % |           Size | Objects | Callee        | Location                                 |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | ---------------------------------------- |
|     new | +4.015 KiB | 0.0% → 100.0% | 0 B → 4.02 KiB |   0 → 1 | `add(Object)` | `java.util.HashSet`                      |
| removed |     -176 B | 100.0% → 0.0% |    176 B → 0 B |   1 → 0 | `add(Object)` | `kotlin.collections.builders.SetBuilder` |

##### `addAll(Collection, Iterable)` (`kotlin.collections.CollectionsKt__MutableCollectionsKt`)

|  Change |      Delta |             % |           Size | Objects | Callee               | Location                                 |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------- | ---------------------------------------- |
|     new | +4.015 KiB | 0.0% → 100.0% | 0 B → 4.02 KiB |   0 → 1 | `addAll(Collection)` | `java.util.AbstractCollection`           |
| removed |     -176 B | 100.0% → 0.0% |    176 B → 0 B |   1 → 0 | `addAll(Collection)` | `kotlin.collections.builders.SetBuilder` |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change |      Delta |             % |           Size | Objects | Callee     | Location                                                                                                   |
| ------: | ---------: | ------------: | -------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
|     new | +4.015 KiB | 0.0% → 100.0% | 0 B → 4.02 KiB |   0 → 1 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x0000007001677d58`                  |
| removed |     -176 B |  61.1% → 0.0% |    176 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000f801652f50`            |
| removed |     -112 B |  38.9% → 0.0% |    112 B → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000f8015fabb0` |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|   Change |      Delta |              % |             Size | Objects | Callee                  | Location                                                                                 |
| -------: | ---------: | -------------: | ---------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------- |
| +2050.0% | +1.921 KiB | 27.3% → 100.0% |  96 B → 2.02 KiB |       1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1` |
|  +706.3% | +1.765 KiB | 72.7% → 100.0% | 256 B → 2.02 KiB |   3 → 1 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`    |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |  Delta |            % |        Size | Objects | Callee              | Location                                                 |
| -----: | -----: | -----------: | ----------: | ------: | ------------------- | -------------------------------------------------------- |
|    new | +400 B | 0.0% → 64.1% | 0 B → 400 B |   0 → 1 | `loadClass(String)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |  Delta |             % |        Size | Objects | Callee                         | Location           |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------ | ------------------ |
|    new | +336 B | 0.0% → 100.0% | 0 B → 336 B |   0 → 1 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `defineClass(String, byte[], int, int, ProtectionDomain)` (`java.lang.ClassLoader`)

|  Change |  Delta |              % |          Size | Objects | Callee                                                                          | Location                |
| ------: | -----: | -------------: | ------------: | ------: | ------------------------------------------------------------------------------- | ----------------------- |
| +310.5% | +472 B | 42.2% → 100.0% | 152 B → 624 B |   1 → 3 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader` |
| removed | -208 B |   57.8% → 0.0% |   208 B → 0 B |   3 → 0 | `postDefineClass(Class, ProtectionDomain)`                                      | `java.lang.ClassLoader` |

##### `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change |      Delta |      % |                Size | Objects | Callee                      | Location                            |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------- | ----------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `runReadAction(Computable)` | `com.intellij.mock.MockApplication` |

##### `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` (`org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                             | Location                                                            |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `getKotlinBinaryClassOrClassFileContent(VirtualFile, MetadataVersion, byte[], PerformanceManager)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `findKotlinClassOrContent(ClassId, MetadataVersion)` (`org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                                                                                    | Location                                                            |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  +6.7% | +85.21 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `getKotlinBinaryClassOrClassFileContent$default(KotlinBinaryClassCache$Companion, VirtualFile, MetadataVersion, byte[], PerformanceManager, int, Object)` | `org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion` |

##### `computePackagePartInfo(FqName, String)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

|  Change |      Delta |            % |                Size | Objects | Callee                                               | Location                                                            |
| ------: | ---------: | -----------: | ------------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------- |
|   +6.7% | +85.21 KiB |       100.0% | 1.25 MiB → 1.33 MiB |  8 → 12 | `findKotlinClassOrContent(ClassId, MetadataVersion)` | `org.jetbrains.kotlin.load.kotlin.VirtualFileFinder`                |
| removed |      -40 B | <0.1% → 0.0% |          40 B → 0 B |   1 → 0 | `readPackageDataFrom(String[], String[])`            | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |

##### `computePackagePartsInfos(FqName)` (`org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider`)

| Change |       Delta |      % |                Size | Objects | Callee                                   | Location                                                                        |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------------------- | ------------------------------------------------------------------------------- |
|  +6.6% | +85.171 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  9 → 12 | `computePackagePartInfo(FqName, String)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `tryComputePackagePartInfos(FqName)` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider`)

| Change |       Delta |      % |                Size | Objects | Callee                             | Location                                                                        |
| -----: | ----------: | -----: | ------------------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------- |
|  +6.6% | +85.171 KiB | 100.0% | 1.25 MiB → 1.33 MiB |  9 → 12 | `computePackagePartsInfos(FqName)` | `org.jetbrains.kotlin.fir.java.deserialization.JvmClassFileBasedSymbolProvider` |

##### `invoke(Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x00000070013f6880`)

|  Change |      Delta |             % |           Size | Objects | Callee                                                                                      | Location                                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed | -1.255 MiB | 100.0% → 0.0% | 1.26 MiB → 0 B |   6 → 0 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
|     new |     +160 B | 0.0% → 100.0% |    0 B → 160 B |   0 → 1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

|  Change |        Delta |             % |          Size | Objects | Callee        | Location                                 |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed | -256.015 KiB | 100.0% → 0.0% | 256 KiB → 0 B |   1 → 0 | `initTable()` | `java.util.concurrent.ConcurrentHashMap` |

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

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |        Delta |      % |               Size | Objects | Callee                                         | Location                                          |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------- | ------------------------------------------------- |
| -72.7% | -167.921 KiB | 100.0% | 231 KiB → 63.2 KiB | 51 → 12 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change |        Delta |            % |               Size | Objects | Callee                              | Location                                                       |
| -----: | -----------: | -----------: | -----------------: | ------: | ----------------------------------- | -------------------------------------------------------------- |
| -72.7% | -167.921 KiB |       100.0% | 231 KiB → 63.2 KiB | 51 → 12 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`              |
| -61.5% |        -64 B | <0.1% → 0.1% |       104 B → 40 B |       1 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |        Delta |      % |               Size | Objects | Callee                                                     | Location                                                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| -72.7% | -167.921 KiB | 100.0% | 231 KiB → 63.2 KiB | 51 → 12 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |        Delta |      % |               Size | Objects | Callee                                                     | Location                                                    |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| -72.7% | -167.921 KiB | 100.0% | 231 KiB → 63.2 KiB | 51 → 12 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |        Delta |      % |               Size | Objects | Callee                                                               | Location                                             |
| -----: | -----------: | -----: | -----------------: | ------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| -72.7% | -167.921 KiB | 100.0% | 231 KiB → 63.2 KiB | 51 → 12 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |        Delta |      % |               Size | Objects | Callee                                         | Location                                                |
| -----: | -----------: | -----: | -----------------: | ------: | ---------------------------------------------- | ------------------------------------------------------- |
| -72.7% | -167.921 KiB | 100.0% | 231 KiB → 63.2 KiB | 51 → 12 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001c00`)

| Change |      Delta |      % |                Size | Objects | Callee           | Location                                     |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | -------------------------------------------- |
|  -1.4% | -58.21 KiB | 100.0% | 4.04 MiB → 3.99 MiB | 53 → 16 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000007001010000`)

| Change |       Delta |      % |                Size | Objects | Callee                         | Location                                                                                                  |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------ | --------------------------------------------------------------------------------------------------------- |
|  -1.4% | -57.921 KiB | 100.0% | 4.04 MiB → 3.99 MiB | 51 → 16 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000f801001c00 → java.lang.invoke.LambdaForm$DMH.0x0000007001001c00` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |      Delta |      % |                Size | Objects | Callee                           | Location                                                                                                |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
|  -1.4% | -57.75 KiB | 100.0% | 4.04 MiB → 3.99 MiB | 50 → 16 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000f801010000 → java.lang.invoke.LambdaForm$MH.0x0000007001010000` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |                Size | Objects | Callee                                           | Location                           |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------------------------ | ---------------------------------- |
|  -1.4% | -57.695 KiB | 100.0% | 3.99 MiB → 3.93 MiB | 48 → 15 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |                Size | Objects | Callee                         | Location                                          |
| -----: | ----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------------------------- |
|  -1.4% | -57.695 KiB | 100.0% | 3.99 MiB → 3.93 MiB | 48 → 15 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |       Delta |      % |                Size | Objects | Callee                     | Location                                          |
| -----: | ----------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------- |
|  -1.4% | -57.695 KiB | 100.0% | 3.99 MiB → 3.93 MiB | 48 → 15 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|  Change |        Delta |             % |                Size | Objects | Callee                           | Location                                                         |
| ------: | -----------: | ------------: | ------------------: | ------: | -------------------------------- | ---------------------------------------------------------------- |
| -100.0% | -145.234 KiB |  62.9% → 0.1% |      145 KiB → 72 B |  35 → 2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`  |
|  -26.4% |  -22.578 KiB | 37.0% → 99.4% | 85.5 KiB → 62.9 KiB |  12 → 7 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |        Delta |            % |           Size | Objects | Callee                                     | Location                                                |
| ------: | -----------: | -----------: | -------------: | ------: | ------------------------------------------ | ------------------------------------------------------- |
| removed | -136.328 KiB | 93.8% → 0.0% |  136 KiB → 0 B |  34 → 0 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| removed |   -9.046 KiB |  6.2% → 0.0% | 9.05 KiB → 0 B |   2 → 0 | `generateAnnotations()`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                                                                                                                                                                             | Location                                                            |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| removed | -145.335 KiB |  99.9% → 0.0% | 145 KiB → 0 B |  35 → 0 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)`                                        | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |
|  -30.8% |        -32 B | 0.1% → 100.0% |  104 B → 72 B |   1 → 2 | `runLowerings$org_jetbrains_kotlin_cli_jvm(Project, CompilerConfiguration, ModuleDescriptor, Module, JvmIrCodegenFactory, JvmIrCodegenFactory$BackendInput, BaseDiagnosticsCollector, FirJvmBackendClassResolver)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|  Change |        Delta |             % |          Size | Objects | Callee       | Location                                                |
| ------: | -----------: | ------------: | ------------: | ------: | ------------ | ------------------------------------------------------- |
| removed | -145.335 KiB | 100.0% → 0.0% | 145 KiB → 0 B |  35 → 0 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|  Change |        Delta |             % |          Size | Objects | Callee                                                   | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------- | ------------------------------------------------------ |
| removed | -145.335 KiB | 100.0% → 0.0% | 145 KiB → 0 B |  35 → 0 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

|  Change |        Delta |             % |          Size | Objects | Callee                                            | Location                                               |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------ |
| removed | -145.335 KiB | 100.0% → 0.0% | 145 KiB → 0 B |  35 → 0 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|  Change |        Delta |      % |           Size | Objects | Callee                                    | Location                                                        |
| ------: | -----------: | -----: | -------------: | ------: | ----------------------------------------- | --------------------------------------------------------------- |
| -100.0% | -145.234 KiB | 100.0% | 145 KiB → 72 B |  35 → 2 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |        Delta |            % |           Size | Objects | Callee                                    | Location                                                                    |
| ------: | -----------: | -----------: | -------------: | ------: | ----------------------------------------- | --------------------------------------------------------------------------- |
| removed | -134.156 KiB | 98.4% → 0.0% |  134 KiB → 0 B |   9 → 0 | `generateMethodNode(IrFunction)`          | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                     |
| removed |   -2.062 KiB |  1.5% → 0.0% | 2.06 KiB → 0 B |  24 → 0 | `accept(MethodVisitor)`                   | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                           |
| removed |       -112 B |  0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `trackDeclaration(IrDeclaration, Object)` | `org.jetbrains.kotlin.backend.common.linkage.issues.SignatureClashDetector` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |        Delta |             % |           Size | Objects | Callee                                                                                                           | Location                                                         |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed | -135.171 KiB | 100.0% → 0.0% |  135 KiB → 0 B |  10 → 0 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
| removed |   -1.265 KiB |   0.9% → 0.0% | 1.27 KiB → 0 B |   5 → 0 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |       Delta |             % |          Size | Objects | Callee                         | Location                                                     |
| ------: | ----------: | ------------: | ------------: | ------: | ------------------------------ | ------------------------------------------------------------ |
| removed | -135.21 KiB | 100.0% → 0.0% | 135 KiB → 0 B |  11 → 0 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|  Change |       Delta |             % |          Size | Objects | Callee                      | Location                                                     |
| ------: | ----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------------------------------------ |
| removed | -135.21 KiB | 100.0% → 0.0% | 135 KiB → 0 B |  11 → 0 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |        Delta |             % |          Size | Objects | Callee                      | Location                                          |
| ------: | -----------: | ------------: | ------------: | ------: | --------------------------- | ------------------------------------------------- |
| removed | -135.156 KiB | 100.0% → 0.0% | 135 KiB → 0 B |  10 → 0 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn`    |
| removed | -133.578 KiB |  98.8% → 0.0% | 134 KiB → 0 B |   2 → 0 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.declarations.IrVariable` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|  Change |       Delta |             % |          Size | Objects | Callee                                                     | Location                                                     |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| removed | -135.21 KiB | 100.0% → 0.0% | 135 KiB → 0 B |  11 → 0 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

# Lock contention profile diff

Blocked 679.4ms → 488.1ms (-191.30ms, -28.2%) over 3 contentions → 2 contentions (226.5ms → 244.1ms per contention).

| Category         | Change |     Delta |      % |              Time | Contentions |
| ---------------- | -----: | --------: | -----: | ----------------: | ----------: |
| Standard library | -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 |

## Hottest functions

### Self time

#### Improvements

Functions with the largest decrease in time blocked directly in the function body, excluding callees.

##### Standard library

| Change |     Delta |      % |              Time | Contentions | Function              | Location                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

| Change |     Delta |      % |              Time | Contentions | Caller                    | Location                                 |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

### Total time

#### Improvements

Functions with the largest decrease in total time blocked in the function and all its callees.

##### Standard library

| Change |     Delta |      % |              Time | Contentions | Function                    | Location                                                                |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------- | ----------------------------------------------------------------------- |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `park(boolean, long)`       | `jdk.internal.misc.Unsafe`                                              |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `parkNanos(Object, long)`   | `java.util.concurrent.locks.LockSupport`                                |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `await(long, TimeUnit)`     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `await(long)`               | `java.lang.ref.ReferenceQueue`                                          |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `remove0(long)`             | `java.lang.ref.ReferenceQueue`                                          |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `remove(long)`              | `java.lang.ref.ReferenceQueue`                                          |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `run()`                     | `jdk.internal.ref.CleanerImpl`                                          |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `runWith(Object, Runnable)` | `java.lang.Thread`                                                      |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `run()`                     | `java.lang.Thread`                                                      |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `run()`                     | `jdk.internal.misc.InnocuousThread`                                     |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

| Change |     Delta |      % |              Time | Contentions | Callee                | Location                   |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------- | -------------------------- |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

| Change |     Delta |      % |              Time | Contentions | Callee                    | Location                                 |
| -----: | --------: | -----: | ----------------: | ----------: | ------------------------- | ---------------------------------------- |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Callee                  | Location                                                                |
| -----: | --------: | -----: | ----------------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Callee        | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | ------------- | ------------------------------ |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

| Change |     Delta |      % |              Time | Contentions | Callee          | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | --------------- | ------------------------------ |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

| Change |     Delta |      % |              Time | Contentions | Callee         | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | -------------- | ------------------------------ |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

| Change |     Delta |      % |              Time | Contentions | Callee  | Location                       |
| -----: | --------: | -----: | ----------------: | ----------: | ------- | ------------------------------ |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`java.lang.Thread`)

| Change |     Delta |      % |              Time | Contentions | Callee                      | Location           |
| -----: | --------: | -----: | ----------------: | ----------: | --------------------------- | ------------------ |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

| Change |     Delta |      % |              Time | Contentions | Callee  | Location           |
| -----: | --------: | -----: | ----------------: | ----------: | ------- | ------------------ |
| -28.2% | -191.30ms | 100.0% | 679.4ms → 488.1ms |       3 → 2 | `run()` | `java.lang.Thread` |
