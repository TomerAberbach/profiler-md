# Sampling profile diff

Collected 1,267 samples → 1,332 samples (+65 samples, +5.1%).

| Category         | Change | Delta |             % |     Samples |
| ---------------- | -----: | ----: | ------------: | ----------: |
| Standard library |  +6.0% |   +58 | 76.2% → 76.9% | 966 → 1,024 |
| Ours             |  +2.3% |    +7 | 23.8% → 23.1% |   301 → 308 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                       | Location                                                                  |
| ------: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------------------------- |
|  +11.8% |   +34 | 22.7% → 24.2% | 288 → 322 | `copyOf`                       | `java.util.Arrays`                                                        |
|   +9.1% |   +27 | 23.4% → 24.3% | 297 → 324 | `<init>`                       | `java.io.ByteArrayOutputStream`                                           |
|  +47.4% |    +9 |   1.5% → 2.1% |   19 → 28 | `<init>`                       | `org.jetbrains.kotlin.protobuf.ByteString$Output`                         |
| +300.0% |    +6 |   0.2% → 0.6% |     2 → 8 | `newOutput`                    | `org.jetbrains.kotlin.protobuf.ByteString`                                |
|   +7.8% |    +6 |   6.1% → 6.2% |   77 → 83 | `clone`                        | `java.lang.Object`                                                        |
|  +35.7% |    +5 |   1.1% → 1.4% |   14 → 19 | `<init>`                       | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                     |
|     new |    +5 |   0.0% → 0.4% |     0 → 5 | `getFqNameWhenAvailable`       | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                  |
|  +41.7% |    +5 |   0.9% → 1.3% |   12 → 17 | `grow`                         | `java.util.ArrayList`                                                     |
| +133.3% |    +4 |   0.2% → 0.5% |     3 → 7 | `arrayOfUninitializedElements` | `kotlin.collections.builders.ListBuilderKt`                               |
|  +80.0% |    +4 |   0.4% → 0.7% |     5 → 9 | `<init>`                       | `jdk.internal.org.objectweb.asm.ByteVector`                               |
| +200.0% |    +4 |   0.2% → 0.5% |     2 → 6 | `replace`                      | `java.lang.StringLatin1`                                                  |
| +200.0% |    +4 |   0.2% → 0.5% |     2 → 6 | `<init>`                       | `org.jetbrains.kotlin.name.FqName`                                        |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `initClassName`                | `java.lang.Class`                                                         |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `createScope`                  | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
| +100.0% |    +3 |   0.2% → 0.5% |     3 → 6 | `parsePartialFrom`             | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                           |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `parsePartialFrom`             | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                       |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `stringFromByteBuffer`         | `jdk.internal.jimage.ImageStringsReader`                                  |
|  +60.0% |    +3 |   0.4% → 0.6% |     5 → 8 | `enlarge`                      | `jdk.internal.org.objectweb.asm.ByteVector`                               |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `getValueParameterSymbols`     | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`                 |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `allocateUninitializedArray`   | `jdk.internal.misc.Unsafe`                                                |

##### Standard library

|  Change | Delta |             % |   Samples | Function                       | Location                                                                                   |
| ------: | ----: | ------------: | --------: | ------------------------------ | ------------------------------------------------------------------------------------------ |
|  +11.8% |   +34 | 22.7% → 24.2% | 288 → 322 | `copyOf`                       | `java.util.Arrays`                                                                         |
|   +9.1% |   +27 | 23.4% → 24.3% | 297 → 324 | `<init>`                       | `java.io.ByteArrayOutputStream`                                                            |
|   +7.8% |    +6 |   6.1% → 6.2% |   77 → 83 | `clone`                        | `java.lang.Object`                                                                         |
|  +41.7% |    +5 |   0.9% → 1.3% |   12 → 17 | `grow`                         | `java.util.ArrayList`                                                                      |
| +133.3% |    +4 |   0.2% → 0.5% |     3 → 7 | `arrayOfUninitializedElements` | `kotlin.collections.builders.ListBuilderKt`                                                |
|  +80.0% |    +4 |   0.4% → 0.7% |     5 → 9 | `<init>`                       | `jdk.internal.org.objectweb.asm.ByteVector`                                                |
| +200.0% |    +4 |   0.2% → 0.5% |     2 → 6 | `replace`                      | `java.lang.StringLatin1`                                                                   |
|     new |    +4 |   0.0% → 0.3% |     0 → 4 | `initClassName`                | `java.lang.Class`                                                                          |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `stringFromByteBuffer`         | `jdk.internal.jimage.ImageStringsReader`                                                   |
|  +60.0% |    +3 |   0.4% → 0.6% |     5 → 8 | `enlarge`                      | `jdk.internal.org.objectweb.asm.ByteVector`                                                |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `allocateUninitializedArray`   | `jdk.internal.misc.Unsafe`                                                                 |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `singletonList`                | `java.util.Collections`                                                                    |
|  +66.7% |    +2 |   0.2% → 0.4% |     3 → 5 | `newNode`                      | `java.util.HashMap`                                                                        |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `<init>`                       | `jdk.internal.org.objectweb.asm.MethodWriter`                                              |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `read`                         | `java.nio.file.Files`                                                                      |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `valueOf`                      | `java.lang.Integer`                                                                        |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `put`                          | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap`  |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `descriptorString`             | `java.lang.Class`                                                                          |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `<init>`                       | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder`      |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `<init>`                       | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator` |

##### Ours

|  Change | Delta |           % | Samples | Function                                                   | Location                                                                                |
| ------: | ----: | ----------: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  +47.4% |    +9 | 1.5% → 2.1% | 19 → 28 | `<init>`                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                       |
| +300.0% |    +6 | 0.2% → 0.6% |   2 → 8 | `newOutput`                                                | `org.jetbrains.kotlin.protobuf.ByteString`                                              |
|  +35.7% |    +5 | 1.1% → 1.4% | 14 → 19 | `<init>`                                                   | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                   |
|     new |    +5 | 0.0% → 0.4% |   0 → 5 | `getFqNameWhenAvailable`                                   | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                |
| +200.0% |    +4 | 0.2% → 0.5% |   2 → 6 | `<init>`                                                   | `org.jetbrains.kotlin.name.FqName`                                                      |
|     new |    +4 | 0.0% → 0.3% |   0 → 4 | `createScope`                                              | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`               |
| +100.0% |    +3 | 0.2% → 0.5% |   3 → 6 | `parsePartialFrom`                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                         |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `parsePartialFrom`                                         | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                     |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `getValueParameterSymbols`                                 | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`                               |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `create`                                                   | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                               |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `loadFunction`                                             | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `processCandidate`                                         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `fullyExpandedType`                                        | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `createToFreshVariableSubstitutorAndAddInitialConstraints` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `visitEnd`                                                 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `checkUpperBoundViolated`                                  | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt`             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `extractDeprecationAnnotationInfoPerUseSite`               | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                              |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>`                                                   | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                      |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `parsePrimitiveType`                                       | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`   |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `hashCode`                                                 | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                     |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |           % | Samples | Function                  | Location                                                                       |
| ------: | ----: | ----------: | ------: | ------------------------- | ------------------------------------------------------------------------------ |
|  -41.9% |   -18 | 3.4% → 1.9% | 43 → 25 | `copyOfRangeByte`         | `java.util.Arrays`                                                             |
|  -75.0% |    -9 | 0.9% → 0.2% |  12 → 3 | `newNode`                 | `java.util.LinkedHashMap`                                                      |
|  -29.4% |    -5 | 1.3% → 0.9% | 17 → 12 | `newInstance`             | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                              |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `toString`                | `java.lang.StringBuilder`                                                      |
|  -40.0% |    -4 | 0.8% → 0.5% |  10 → 6 | `<init>`                  | `java.util.HashSet`                                                            |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `getLabel`                | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                               |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `copyOfRange`             | `java.util.Arrays`                                                             |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `getAnnotationsByClassId` | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`                   |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `<init>`                  | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                |
|  -42.9% |    -3 | 0.6% → 0.3% |   7 → 4 | `allocateInstance`        | `java.lang.invoke.DirectMethodHandle`                                          |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `<init>`                  | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`  |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `<init>`                  | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `<init>`                  | `org.jetbrains.kotlin.util.WeakPair`                                           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `_init_$lambda$0`         | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`          |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `builder`                 | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `visitMethodInsn`         | `org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`   |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `readUtf`                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                  |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `iterator`                | `java.util.LinkedHashMap$LinkedEntrySet`                                       |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `box-impl`                | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                  |
|  -28.6% |    -2 | 0.6% → 0.4% |   7 → 5 | `<init>`                  | `org.jetbrains.kotlin.protobuf.CodedInputStream`                               |

##### Standard library

|  Change | Delta |           % | Samples | Function           | Location                                                                                        |
| ------: | ----: | ----------: | ------: | ------------------ | ----------------------------------------------------------------------------------------------- |
|  -41.9% |   -18 | 3.4% → 1.9% | 43 → 25 | `copyOfRangeByte`  | `java.util.Arrays`                                                                              |
|  -75.0% |    -9 | 0.9% → 0.2% |  12 → 3 | `newNode`          | `java.util.LinkedHashMap`                                                                       |
|  -66.7% |    -4 | 0.5% → 0.2% |   6 → 2 | `toString`         | `java.lang.StringBuilder`                                                                       |
|  -40.0% |    -4 | 0.8% → 0.5% |  10 → 6 | `<init>`           | `java.util.HashSet`                                                                             |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `copyOfRange`      | `java.util.Arrays`                                                                              |
|  -42.9% |    -3 | 0.6% → 0.3% |   7 → 4 | `allocateInstance` | `java.lang.invoke.DirectMethodHandle`                                                           |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `builder`          | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap`                  |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `iterator`         | `java.util.LinkedHashMap$LinkedEntrySet`                                                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `newCacheEntry`    | `jdk.internal.jimage.ImageBufferCache`                                                          |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `iterator`         | `java.util.LinkedHashMap$LinkedKeySet`                                                          |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `<init>`           | `kotlin.collections.builders.SetBuilder`                                                        |
|  -25.0% |    -2 | 0.6% → 0.5% |   8 → 6 | `<init>`           | `kotlin.collections.builders.MapBuilder`                                                        |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `putVal`           | `java.util.concurrent.ConcurrentHashMap`                                                        |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `lazy`             | `kotlin.LazyKt__LazyJVMKt`                                                                      |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `plus`             | `kotlin.collections.MapsKt__MapsKt`                                                             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `next`             | `kotlin.collections.IndexingIterator`                                                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `mutableListOf`    | `kotlin.collections.CollectionsKt__CollectionsKt`                                               |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `iterator`         | `java.util.Collections$UnmodifiableCollection`                                                  |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `take`             | `kotlin.collections.CollectionsKt___CollectionsKt`                                              |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `iterator`         | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValues` |

##### Ours

|  Change | Delta |           % | Samples | Function                      | Location                                                                                           |
| ------: | ----: | ----------: | ------: | ----------------------------- | -------------------------------------------------------------------------------------------------- |
|  -29.4% |    -5 | 1.3% → 0.9% | 17 → 12 | `newInstance`                 | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
|  -80.0% |    -4 | 0.4% → 0.1% |   5 → 1 | `getLabel`                    | `org.jetbrains.org.objectweb.asm.tree.LabelNode`                                                   |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `getAnnotationsByClassId`     | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`                                       |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `<init>`                      | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`                                    |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `<init>`                      | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `<init>`                      | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                       |
| removed |    -3 | 0.2% → 0.0% |   3 → 0 | `<init>`                      | `org.jetbrains.kotlin.util.WeakPair`                                                               |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `_init_$lambda$0`             | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                              |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `visitMethodInsn`             | `org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`                       |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `readUtf`                     | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|  -20.0% |    -2 | 0.8% → 0.6% |  10 → 8 | `box-impl`                    | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
|  -28.6% |    -2 | 0.6% → 0.4% |   7 → 5 | `<init>`                      | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                   |
|  -66.7% |    -2 | 0.2% → 0.1% |   3 → 1 | `toString`                    | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `parsePartialFrom`            | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1`                                     |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `visitVarInsn`                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `newFieldSet`                 | `org.jetbrains.kotlin.protobuf.FieldSet`                                                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `toFirSourceElement`          | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`                      |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `toLookupTag`                 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                           |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `propagateAlternateFlows`     | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                                         |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `simplifyTrivialInstructions` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % |   Samples | Caller                   | Location                          |
| ------: | ----: | ------------: | --------: | ------------------------ | --------------------------------- |
|  +13.9% |   +36 | 89.9% → 91.6% | 259 → 295 | `toByteArray`            | `java.io.ByteArrayOutputStream`   |
|  -55.6% |   -10 |   6.3% → 2.5% |    18 → 8 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |
| +300.0% |    +6 |   0.7% → 2.5% |     2 → 8 | `getBytes`               | `jdk.internal.loader.Resource`    |
| +400.0% |    +4 |   0.3% → 1.6% |     1 → 5 | `copyOf`                 | `java.util.Arrays`                |
|  -40.0% |    -2 |   1.7% → 0.9% |     5 → 3 | `grow`                   | `java.util.ArrayList`             |

##### `<init>` (`java.io.ByteArrayOutputStream`)

| Change | Delta |      % |   Samples | Caller                   | Location                                               |
| -----: | ----: | -----: | --------: | ------------------------ | ------------------------------------------------------ |
|  +9.1% |   +27 | 100.0% | 297 → 324 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `<init>` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change | Delta |      % | Samples | Caller      | Location                                   |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------ |
| +47.4% |    +9 | 100.0% | 19 → 28 | `newOutput` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `newOutput` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change | Delta |            % | Samples | Caller   | Location                                                     |
| ------: | ----: | -----------: | ------: | -------- | ------------------------------------------------------------ |
|     new |    +5 | 0.0% → 62.5% |   0 → 5 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`          |
|     new |    +1 | 0.0% → 12.5% |   0 → 1 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`       |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument` |

##### `clone` (`java.lang.Object`)

| Change | Delta |              % | Samples | Caller        | Location           |
| -----: | ----: | -------------: | ------: | ------------- | ------------------ |
|  +6.5% |    +5 | 100.0% → 98.8% | 77 → 82 | `copyOf`      | `java.util.Arrays` |
|    new |    +1 |    0.0% → 1.2% |   0 → 1 | `copyOfRange` | `java.util.Arrays` |

##### `<init>` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ----------------------------------------------------------------------------------- |
|  -33.3% |    -3 | 64.3% → 31.6% |   9 → 6 | `<init>`                              | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame` |
| +150.0% |    +3 | 14.3% → 26.3% |   2 → 5 | `_init_$lambda$0`                     | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`               |
| +200.0% |    +2 |  7.1% → 15.8% |   1 → 3 | `<init>`                              | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                      |
| +100.0% |    +1 |  7.1% → 10.5% |   1 → 2 | `<init>`                              | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.StoreLoadFrame`            |
|     new |    +1 |   0.0% → 5.3% |   0 → 1 | `preprocessNodeBeforeInline$lambda$0` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                 |

##### `getFqNameWhenAvailable` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change | Delta |            % | Samples | Caller                 | Location                                                                   |
| -----: | ----: | -----------: | ------: | ---------------------- | -------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `getClassFqNameUnsafe` | `org.jetbrains.kotlin.ir.types.IrTypeSystemContext`                        |
|    new |    +2 | 0.0% → 40.0% |   0 → 2 | `hasAnnotation`        | `org.jetbrains.kotlin.ir.interpreter.UtilsKt`                              |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `createKeyMapping`     | `org.jetbrains.kotlin.backend.jvm.intrinsics.IrIntrinsicMethods$Companion` |

##### `grow` (`java.util.ArrayList`)

|  Change | Delta |              % | Samples | Caller   | Location              |
| ------: | ----: | -------------: | ------: | -------- | --------------------- |
|  +54.5% |    +6 | 91.7% → 100.0% | 11 → 17 | `grow`   | `java.util.ArrayList` |
| removed |    -1 |    8.3% → 0.0% |   1 → 0 | `addAll` | `java.util.ArrayList` |

##### `arrayOfUninitializedElements` (`kotlin.collections.builders.ListBuilderKt`)

| Change | Delta |              % | Samples | Caller                | Location                                  |
| -----: | ----: | -------------: | ------: | --------------------- | ----------------------------------------- |
| +66.7% |    +2 | 100.0% → 71.4% |   3 → 5 | `<init>`              | `kotlin.collections.builders.MapBuilder`  |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `allocateValuesArray` | `kotlin.collections.builders.MapBuilder`  |
|    new |    +1 |   0.0% → 14.3% |   0 → 1 | `<init>`              | `kotlin.collections.builders.ListBuilder` |

##### `<init>` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change | Delta |             % | Samples | Caller           | Location                                          |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------- |
| +133.3% |    +4 | 60.0% → 77.8% |   3 → 7 | `toByteArray`    | `jdk.internal.org.objectweb.asm.ClassWriter`      |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `create`         | `jdk.internal.org.objectweb.asm.AnnotationWriter` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `visitParameter` | `jdk.internal.org.objectweb.asm.MethodWriter`     |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `<init>`         | `jdk.internal.org.objectweb.asm.MethodWriter`     |
|     new |    +1 |  0.0% → 11.1% |   0 → 1 | `<init>`         | `jdk.internal.org.objectweb.asm.SymbolTable`      |

##### `replace` (`java.lang.StringLatin1`)

|  Change | Delta |      % | Samples | Caller    | Location           |
| ------: | ----: | -----: | ------: | --------- | ------------------ |
| +200.0% |    +4 | 100.0% |   2 → 6 | `replace` | `java.lang.String` |

##### `<init>` (`org.jetbrains.kotlin.name.FqName`)

|  Change | Delta |            % | Samples | Caller                      | Location                                                |
| ------: | ----: | -----------: | ------: | --------------------------- | ------------------------------------------------------- |
|     new |    +3 | 0.0% → 50.0% |   0 → 3 | `resolveNameByInternalName` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `asSingleFqName`            | `org.jetbrains.kotlin.name.ClassId`                     |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `getFqNameWhenAvailable`    | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                |
|     new |    +1 | 0.0% → 16.7% |   0 → 1 | `getJvmAnnotationRetention` | `org.jetbrains.kotlin.backend.jvm.ir.JvmIrUtilsKt`      |

##### `initClassName` (`java.lang.Class`)

| Change | Delta |             % | Samples | Caller    | Location          |
| -----: | ----: | ------------: | ------: | --------- | ----------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `getName` | `java.lang.Class` |

##### `createScope` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

| Change | Delta |            % | Samples | Caller                | Location                                                                  |
| -----: | ----: | -----------: | ------: | --------------------- | ------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `visitValueParameter` | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
|    new |    +1 | 0.0% → 25.0% |   0 → 1 | `visitClass`          | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |

##### `parsePartialFrom` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

|  Change | Delta |      % | Samples | Caller             | Location                                        |
| ------: | ----: | -----: | ------: | ------------------ | ----------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `parsePartialFrom` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

| Change | Delta |             % | Samples | Caller             | Location                                            |
| -----: | ----: | ------------: | ------: | ------------------ | --------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `stringFromByteBuffer` (`jdk.internal.jimage.ImageStringsReader`)

|  Change | Delta |      % | Samples | Caller      | Location                               |
| ------: | ----: | -----: | ------: | ----------- | -------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `getString` | `jdk.internal.jimage.BasicImageReader` |

##### `enlarge` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change | Delta |              % | Samples | Caller    | Location                                    |
| -----: | ----: | -------------: | ------: | --------- | ------------------------------------------- |
| +40.0% |    +2 | 100.0% → 87.5% |   5 → 7 | `putUTF8` | `jdk.internal.org.objectweb.asm.ByteVector` |
|    new |    +1 |   0.0% → 12.5% |   0 → 1 | `put12`   | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `getValueParameterSymbols` (`org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`)

| Change | Delta |            % | Samples | Caller            | Location                                                                                                          |
| -----: | ----: | -----------: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `check`           | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirReifiedChecker`                                         |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `forEachArgument` | `org.jetbrains.kotlin.fir.analysis.cfa.FirCallsEffectAnalyzer`                                                    |
|    new |    +1 | 0.0% → 33.3% |   0 → 1 | `check`           | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirVarargWithNonTrivialUpperBoundInferredToNothingChecker` |

##### `allocateUninitializedArray` (`jdk.internal.misc.Unsafe`)

|  Change | Delta |      % | Samples | Caller     | Location                       |
| ------: | ----: | -----: | ------: | ---------- | ------------------------------ |
| +150.0% |    +3 | 100.0% |   2 → 5 | `newArray` | `java.lang.StringConcatHelper` |

##### `singletonList` (`java.util.Collections`)

| Change | Delta |             % | Samples | Caller   | Location                                             |
| -----: | ----: | ------------: | ------: | -------- | ---------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `listOf` | `kotlin.collections.CollectionsKt__CollectionsJVMKt` |

##### `newNode` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Caller   | Location            |
| -----: | ----: | -----: | ------: | -------- | ------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `putVal` | `java.util.HashMap` |

##### `<init>` (`jdk.internal.org.objectweb.asm.MethodWriter`)

|  Change | Delta |      % | Samples | Caller        | Location                                     |
| ------: | ----: | -----: | ------: | ------------- | -------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `visitMethod` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `read` (`java.nio.file.Files`)

|  Change | Delta |      % | Samples | Caller         | Location              |
| ------: | ----: | -----: | ------: | -------------- | --------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `readAllBytes` | `java.nio.file.Files` |

##### `valueOf` (`java.lang.Integer`)

|  Change | Delta |             % | Samples | Caller                               | Location                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------ | ----------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isUsefulConstraint`                 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `getConstraintsWithSameTypeHashCode` | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableVariableWithConstraints` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `compare`                            | `org.jetbrains.kotlin.codegen.inline.SMAP$special$$inlined$sortedBy$1`              |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `fakeElement`                        | `org.jetbrains.kotlin.KtSourceElementKt`                                            |

##### `put` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap`)

| Change | Delta |             % | Samples | Caller | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ------ | ----------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `put`  | `kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMap` |

##### `descriptorString` (`java.lang.Class`)

| Change | Delta |            % | Samples | Caller       | Location                             |
| -----: | ----: | -----------: | ------: | ------------ | ------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `unparse`    | `sun.invoke.util.BytecodeDescriptor` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `unparseSig` | `sun.invoke.util.BytecodeDescriptor` |

##### `<init>` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder`)

| Change | Delta |             % | Samples | Caller    | Location                                                                       |
| -----: | ----: | ------------: | ------: | --------- | ------------------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `builder` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |

##### `<init>` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeysIterator`)

| Change | Delta |             % | Samples | Caller     | Location                                                                           |
| -----: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `iterator` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapKeys` |

##### `create` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change | Delta |      % | Samples | Caller   | Location                                                  |
| -----: | ----: | -----: | ------: | -------- | --------------------------------------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `create` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `loadFunction` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

| Change | Delta |             % | Samples | Caller                 | Location                                                         |
| -----: | ----: | ------------: | ------: | ---------------------- | ---------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `loadFunction$default` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `processCandidate` (`org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`)

| Change | Delta |             % | Samples | Caller                     | Location                                                              |
| -----: | ----: | ------------: | ------: | -------------------------- | --------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `processCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner` |

##### `fullyExpandedType` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

| Change | Delta |             % | Samples | Caller                      | Location                                                |
| -----: | ----: | ------------: | ------: | --------------------------- | ------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `fullyExpandedType$default` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |

##### `createToFreshVariableSubstitutorAndAddInitialConstraints` (`org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage`)

| Change | Delta |             % | Samples | Caller  | Location                                                                                |
| -----: | ----: | ------------: | ------: | ------- | --------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `check` | `org.jetbrains.kotlin.fir.resolve.calls.stages.CreateFreshTypeVariableSubstitutorStage` |

##### `visitEnd` (`org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1`)

| Change | Delta |             % | Samples | Caller     | Location                                                  |
| -----: | ----: | ------------: | ------: | ---------- | --------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `visitEnd` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass$3` |

##### `checkUpperBoundViolated` (`org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt`)

| Change | Delta |             % | Samples | Caller                            | Location                                                                    |
| -----: | ----: | ------------: | ------: | --------------------------------- | --------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `checkUpperBoundViolated$default` | `org.jetbrains.kotlin.fir.analysis.checkers.FirUpperBoundViolatedHelpersKt` |

##### `extractDeprecationAnnotationInfoPerUseSite` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

| Change | Delta |            % | Samples | Caller                                   | Location                                                   |
| -----: | ----: | -----------: | ------: | ---------------------------------------- | ---------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `getDeprecationsProviderFromAnnotations` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `extractDeprecationInfoPerUseSite`       | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |

##### `<init>` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

| Change | Delta |            % | Samples | Caller                     | Location                                                          |
| -----: | ----: | -----------: | ------: | -------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toFirResolvedTypeRef`     | `org.jetbrains.kotlin.fir.java.JavaTypeConversionKt`              |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `toDefaultResolvedTypeRef` | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader` |

##### `parsePrimitiveType` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change | Delta |             % | Samples | Caller                             | Location                                                                              |
| -----: | ----: | ------------: | ------: | ---------------------------------- | ------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `parseTypeWithoutVarianceAndArray` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |

##### `hashCode` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

| Change | Delta |             % | Samples | Caller | Location                                                                              |
| -----: | ----: | ------------: | ------: | ------ | ------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `get`  | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |

##### `copyOfRangeByte` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Caller        | Location           |
| -----: | ----: | -----: | ------: | ------------- | ------------------ |
| -41.9% |   -18 | 100.0% | 43 → 25 | `copyOfRange` | `java.util.Arrays` |

##### `newNode` (`java.util.LinkedHashMap`)

| Change | Delta |      % | Samples | Caller   | Location            |
| -----: | ----: | -----: | ------: | -------- | ------------------- |
| -75.0% |    -9 | 100.0% |  12 → 3 | `putVal` | `java.util.HashMap` |

##### `newInstance` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change | Delta |            % | Samples | Caller   | Location                                                           |
| ------: | ----: | -----------: | ------: | -------- | ------------------------------------------------------------------ |
| removed |    -3 | 17.6% → 0.0% |   3 → 0 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`            |
| removed |    -2 | 11.8% → 0.0% |   2 → 0 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter`             |
| +200.0% |    +2 | 5.9% → 25.0% |   1 → 3 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |
| removed |    -2 | 11.8% → 0.0% |   2 → 0 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                  |
|  -50.0% |    -1 | 11.8% → 8.3% |   2 → 1 | `<init>` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |

##### `toString` (`java.lang.StringBuilder`)

|  Change | Delta |             % | Samples | Caller                                | Location                                                                              |
| ------: | ----: | ------------: | ------: | ------------------------------------- | ------------------------------------------------------------------------------------- |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `parseParameterizedClassRefSignature` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `getFqNameWhenAvailable`              | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                              |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `unparseMethod`                       | `sun.invoke.util.BytecodeDescriptor`                                                  |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `buildName`                           | `jdk.internal.jimage.ImageLocation`                                                   |
| removed |    -1 |  16.7% → 0.0% |   1 → 0 | `toLowerCaseAsciiOnly`                | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt`           |

##### `<init>` (`java.util.HashSet`)

|  Change | Delta |             % | Samples | Caller                              | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------- | ----------------------------------------------------------------- |
|  -44.4% |    -4 | 90.0% → 83.3% |   9 → 5 | `<init>`                            | `java.util.LinkedHashSet`                                         |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `merge`                             | `org.jetbrains.org.objectweb.asm.tree.analysis.SourceInterpreter` |
|     new |    +1 |  0.0% → 16.7% |   0 → 1 | `computeExpandedTypeForInlineClass` | `org.jetbrains.kotlin.types.ExpandedTypeUtilsKt`                  |

##### `getLabel` (`org.jetbrains.org.objectweb.asm.tree.LabelNode`)

| Change | Delta |      % | Samples | Caller   | Location                                         |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------ |
| -80.0% |    -4 | 100.0% |   5 → 1 | `accept` | `org.jetbrains.org.objectweb.asm.tree.LabelNode` |

##### `copyOfRange` (`java.util.Arrays`)

| Change | Delta |      % | Samples | Caller   | Location           |
| -----: | ----: | -----: | ------: | -------- | ------------------ |
| -50.0% |    -3 | 100.0% |   6 → 3 | `<init>` | `java.lang.String` |

##### `getAnnotationsByClassId` (`org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                     |
| ------: | ----: | ------------: | ------: | ------------------------ | ------------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `getAnnotationByClassId` | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt` |

##### `<init>` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change | Delta |      % | Samples | Caller   | Location                                                              |
| -----: | ----: | -----: | ------: | -------- | --------------------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `<init>` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer` |

##### `allocateInstance` (`java.lang.invoke.DirectMethodHandle`)

| Change | Delta |      % | Samples | Caller             | Location                                     |
| -----: | ----: | -----: | ------: | ------------------ | -------------------------------------------- |
| -42.9% |    -3 | 100.0% |   7 → 4 | `newInvokeSpecial` | `java.lang.invoke.DirectMethodHandle$Holder` |

##### `<init>` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

| Change | Delta |      % | Samples | Caller   | Location                                                                     |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `<init>` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `<init>` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change | Delta |             % | Samples | Caller                   | Location                                                         |
| ------: | ----: | ------------: | ------: | ------------------------ | ---------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `createConstraintSystem` | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents` |

##### `<init>` (`org.jetbrains.kotlin.util.WeakPair`)

|  Change | Delta |             % | Samples | Caller              | Location                                                |
| ------: | ----: | ------------: | ------: | ------------------- | ------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `fullyExpandedType` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |

##### `_init_$lambda$0` (`org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`)

| Change | Delta |      % | Samples | Caller   | Location                                                                                                                                                                                          |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `invoke` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x000000b0018c8518 → org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer$$Lambda.0x00000070018c8518` |

##### `builder` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap`)

| Change | Delta |      % | Samples | Caller    | Location                                                                       |
| -----: | ----: | -----: | ------: | --------- | ------------------------------------------------------------------------------ |
| -66.7% |    -2 | 100.0% |   3 → 1 | `builder` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |

##### `visitMethodInsn` (`org.jetbrains.kotlin.codegen.inline.MethodInliner$doInline$lambdaInliner$1`)

|  Change | Delta |             % | Samples | Caller   | Location                                              |
| ------: | ----: | ------------: | ------: | -------- | ----------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `accept` | `org.jetbrains.org.objectweb.asm.tree.MethodInsnNode` |

##### `readUtf` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change | Delta |      % | Samples | Caller    | Location                                      |
| -----: | ----: | -----: | ------: | --------- | --------------------------------------------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `readUtf` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `iterator` (`java.util.LinkedHashMap$LinkedEntrySet`)

|  Change | Delta |             % | Samples | Caller                  | Location                                                                                  |
| ------: | ----: | ------------: | ------: | ----------------------- | ----------------------------------------------------------------------------------------- |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `prepareTransaction`    | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`              |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `transformFunctionCall` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer` |
| removed |    -1 |  33.3% → 0.0% |   1 → 0 | `doAddOtherSystem`      | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`              |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `create`                | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap$Companion`            |

##### `box-impl` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|  Change | Delta |            % | Samples | Caller                 | Location                                                           |
| ------: | ----: | -----------: | ------: | ---------------------- | ------------------------------------------------------------------ |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `getContextParameters` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`  |
| removed |    -2 | 20.0% → 0.0% |   2 → 0 | `getTypeArguments`     | `org.jetbrains.kotlin.fir.expressions.impl.FirFunctionCallImpl`    |
|     new |    +2 | 0.0% → 25.0% |   0 → 2 | `getAnnotations`       | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`   |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `getAnnotations`       | `org.jetbrains.kotlin.fir.declarations.impl.FirTypeParameterImpl`  |
| removed |    -1 | 10.0% → 0.0% |   1 → 0 | `getContextParameters` | `org.jetbrains.kotlin.fir.declarations.impl.FirPrimaryConstructor` |

##### `<init>` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change | Delta |      % | Samples | Caller        | Location                                         |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------------------ |
| -28.6% |    -2 | 100.0% |   7 → 5 | `newInstance` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `newCacheEntry` (`jdk.internal.jimage.ImageBufferCache`)

|  Change | Delta |             % | Samples | Caller          | Location                               |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `releaseBuffer` | `jdk.internal.jimage.ImageBufferCache` |

##### `iterator` (`java.util.LinkedHashMap$LinkedKeySet`)

|  Change | Delta |             % | Samples | Caller     | Location            |
| ------: | ----: | ------------: | ------: | ---------- | ------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `iterator` | `java.util.HashSet` |

##### `<init>` (`kotlin.collections.builders.SetBuilder`)

| Change | Delta |      % | Samples | Caller             | Location                               |
| -----: | ----: | -----: | ------: | ------------------ | -------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `createSetBuilder` | `kotlin.collections.SetsKt__SetsJVMKt` |

##### `<init>` (`kotlin.collections.builders.MapBuilder`)

| Change | Delta |      % | Samples | Caller   | Location                                 |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------- |
| -25.0% |    -2 | 100.0% |   8 → 6 | `<init>` | `kotlin.collections.builders.MapBuilder` |

##### `putVal` (`java.util.concurrent.ConcurrentHashMap`)

|  Change | Delta |             % | Samples | Caller        | Location                                 |
| ------: | ----: | ------------: | ------: | ------------- | ---------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `putIfAbsent` | `java.util.concurrent.ConcurrentHashMap` |

##### `lazy` (`kotlin.LazyKt__LazyJVMKt`)

|  Change | Delta |            % | Samples | Caller                 | Location                                                                           |
| ------: | ----: | -----------: | ------: | ---------------------- | ---------------------------------------------------------------------------------- |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>`               | `org.jetbrains.kotlin.fir.lazy.Fir2IrLazyClass`                                    |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `buildLazyValueForMap` | `org.jetbrains.kotlin.load.java.structure.JavaElementsKt`                          |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `<init>`               | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.PlainJavaClassifierType` |
|     new |    +1 | 0.0% → 50.0% |   0 → 1 | `<init>`               | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                |

##### `plus` (`kotlin.collections.MapsKt__MapsKt`)

|  Change | Delta |             % | Samples | Caller                    | Location                                                        |
| ------: | ----: | ------------: | ------: | ------------------------- | --------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `buildCurrentSubstitutor` | `org.jetbrains.kotlin.resolve.calls.inference.InferenceUtilsKt` |

##### `next` (`kotlin.collections.IndexingIterator`)

|  Change | Delta |             % | Samples | Caller | Location                              |
| ------: | ----: | ------------: | ------: | ------ | ------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `next` | `kotlin.collections.IndexingIterator` |

##### `mutableListOf` (`kotlin.collections.CollectionsKt__CollectionsKt`)

|  Change | Delta |            % | Samples | Caller     | Location                                                                                 |
| ------: | ----: | -----------: | ------: | ---------- | ---------------------------------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `check`    | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassChecker` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `getChild` | `org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt`                                     |

##### `iterator` (`java.util.Collections$UnmodifiableCollection`)

|  Change | Delta |            % | Samples | Caller                 | Location                                                         |
| ------: | ----: | -----------: | ------: | ---------------------- | ---------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `isInitialized`        | `org.jetbrains.kotlin.protobuf.FieldSet`                         |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `addValueParametersTo` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `take` (`kotlin.collections.CollectionsKt___CollectionsKt`)

|  Change | Delta |             % | Samples | Caller     | Location                                           |
| ------: | ----: | ------------: | ------: | ---------- | -------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `dropLast` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `iterator` (`kotlinx.collections.immutable.implementations.persistentOrderedMap.PersistentOrderedMapValues`)

|  Change | Delta |             % | Samples | Caller                     | Location                                                   |
| ------: | ----: | ------------: | ------: | -------------------------- | ---------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `resetSmartCastPositionTo` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `toString` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change | Delta |             % | Samples | Caller                 | Location                                                     |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `getOrCreateDirectory` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `getExtension`         | `com.intellij.openapi.vfs.VirtualFile`                       |

##### `parsePartialFrom` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1`)

|  Change | Delta |             % | Samples | Caller             | Location                                                       |
| ------: | ----: | ------------: | ------: | ------------------ | -------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$1` |

##### `visitVarInsn` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |            % | Samples | Caller         | Location                                                     |
| ------: | ----: | -----------: | ------: | -------------- | ------------------------------------------------------------ |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `store`        | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `visitVarInsn` | `org.jetbrains.org.objectweb.asm.MethodVisitor`              |

##### `newFieldSet` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change | Delta |      % | Samples | Caller   | Location                                                               |
| -----: | ----: | -----: | ------: | -------- | ---------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `<init>` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `toFirSourceElement` (`org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                      |
| ------: | ----: | ------------: | ------: | -------------------- | ----------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `toFirSourceElement` | `org.jetbrains.kotlin.fir.lightTree.converter.AbstractLightTreeRawFirBuilder` |

##### `toLookupTag` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change | Delta |            % | Samples | Caller              | Location                                                          |
| ------: | ----: | -----------: | ------: | ------------------- | ----------------------------------------------------------------- |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `loadAnnotation`    | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader` |
| removed |    -1 | 50.0% → 0.0% |   1 → 0 | `computeClassifier` | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`    |

##### `propagateAlternateFlows` (`org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`)

|  Change | Delta |             % | Samples | Caller              | Location                                                   |
| ------: | ----: | ------------: | ------: | ------------------- | ---------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `mergeIncomingFlow` | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `simplifyTrivialInstructions` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                           |
| -----: | ----: | -----: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `transform` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                       | Location                                                                                                                                     |
| -----: | ----: | ------------: | ------------: | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| +11.3% |   +74 | 51.7% → 54.7% |     655 → 729 | `loadAllClassesFromJars`       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                       |
| +11.3% |   +74 | 51.7% → 54.7% |     655 → 729 | `preloadClasses`               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                       |
|  +5.1% |   +65 |         99.8% | 1,265 → 1,330 | `run`                          | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                  |
|  +5.1% |   +65 |         99.8% | 1,265 → 1,330 | `main`                         | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                  |
| +12.2% |   +41 | 26.5% → 28.3% |     336 → 377 | `toByteArray`                  | `java.io.ByteArrayOutputStream`                                                                                                              |
| +10.4% |   +38 | 28.9% → 30.3% |     366 → 404 | `copyOf`                       | `java.util.Arrays`                                                                                                                           |
| +19.0% |   +28 | 11.6% → 13.1% |     147 → 175 | `getValue`                     | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                                                                       |
| +42.4% |   +28 |   5.2% → 7.1% |       66 → 94 | `transform`                    | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`                                                                                      |
|  +9.1% |   +27 | 23.4% → 24.3% |     297 → 324 | `<init>`                       | `java.io.ByteArrayOutputStream`                                                                                                              |
| +20.6% |   +22 |   8.4% → 9.7% |     107 → 129 | `processSymbolsByName`         | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                          |
| +33.9% |   +21 |   4.9% → 6.2% |       62 → 83 | `readMessage`                  | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                                                             |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `getTopLevelPropertySymbols`   | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`                                                                               |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `processPropertiesByName`      | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                                                               |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `invoke`                       | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `processPropertiesByName`      | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                          |
| +27.1% |   +19 |   5.5% → 6.7% |       70 → 89 | `parsePartialFrom`             | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                                                               |
| +32.2% |   +19 |   4.7% → 5.9% |       59 → 78 | `transformAnnotation`          | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer` |
| +32.2% |   +19 |   4.7% → 5.9% |       59 → 78 | `transformAnnotation`          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                     |
| +15.9% |   +18 |   8.9% → 9.8% |     113 → 131 | `transformSingle`              | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                     |
| +30.5% |   +18 |   4.7% → 5.8% |       59 → 77 | `computeTopLevelCallableNames` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`                                       |

##### Standard library

|  Change | Delta |             % |   Samples | Function             | Location                                                                                                  |
| ------: | ----: | ------------: | --------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
|  +12.2% |   +41 | 26.5% → 28.3% | 336 → 377 | `toByteArray`        | `java.io.ByteArrayOutputStream`                                                                           |
|  +10.4% |   +38 | 28.9% → 30.3% | 366 → 404 | `copyOf`             | `java.util.Arrays`                                                                                        |
|   +9.1% |   +27 | 23.4% → 24.3% | 297 → 324 | `<init>`             | `java.io.ByteArrayOutputStream`                                                                           |
|  +51.6% |   +16 |   2.4% → 3.5% |   31 → 47 | `linkCallSiteImpl`   | `java.lang.invoke.MethodHandleNatives`                                                                    |
|  +51.6% |   +16 |   2.4% → 3.5% |   31 → 47 | `linkCallSite`       | `java.lang.invoke.MethodHandleNatives`                                                                    |
|  +75.0% |   +15 |   1.6% → 2.6% |   20 → 35 | `buildCallSite`      | `java.lang.invoke.InnerClassLambdaMetafactory`                                                            |
|  +48.4% |   +15 |   2.4% → 3.5% |   31 → 46 | `metafactory`        | `java.lang.invoke.LambdaMetafactory`                                                                      |
|  +48.4% |   +15 |   2.4% → 3.5% |   31 → 46 | `invoke`             | `java.lang.invoke.BootstrapMethodInvoker`                                                                 |
|  +48.4% |   +15 |   2.4% → 3.5% |   31 → 46 | `makeSite`           | `java.lang.invoke.CallSite`                                                                               |
|  +48.3% |   +14 |   2.3% → 3.2% |   29 → 43 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000 → java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
|  +75.0% |   +12 |   1.3% → 2.1% |   16 → 28 | `generateInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory`                                                            |
|  +75.0% |   +12 |   1.3% → 2.1% |   16 → 28 | `spinInnerClass`     | `java.lang.invoke.InnerClassLambdaMetafactory`                                                            |
|  +35.5% |   +11 |   2.4% → 3.2% |   31 → 42 | `getValue`           | `kotlin.SynchronizedLazyImpl`                                                                             |
|  +25.0% |   +11 |   3.5% → 4.1% |   44 → 55 | `getValue`           | `kotlin.SafePublicationLazyImpl`                                                                          |
|  +40.0% |    +8 |   1.6% → 2.1% |   20 → 28 | `loadClass`          | `java.lang.ClassLoader`                                                                                   |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `run`                | `java.net.URLClassLoader$1`                                                                               |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `findClass`          | `java.net.URLClassLoader`                                                                                 |
| +120.0% |    +6 |   0.4% → 0.8% |    5 → 11 | `generate`           | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`                                  |
| +300.0% |    +6 |   0.2% → 0.6% |     2 → 8 | `getBytes`           | `jdk.internal.loader.Resource`                                                                            |
| +300.0% |    +6 |   0.2% → 0.6% |     2 → 8 | `getBytes`           | `jdk.internal.loader.URLClassPath$JarLoader$2`                                                            |

##### Ours

| Change | Delta |             % |       Samples | Function                            | Location                                                                                                                                          |
| -----: | ----: | ------------: | ------------: | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| +11.3% |   +74 | 51.7% → 54.7% |     655 → 729 | `loadAllClassesFromJars`            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                            |
| +11.3% |   +74 | 51.7% → 54.7% |     655 → 729 | `preloadClasses`                    | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                            |
|  +5.1% |   +65 |         99.8% | 1,265 → 1,330 | `run`                               | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                       |
|  +5.1% |   +65 |         99.8% | 1,265 → 1,330 | `main`                              | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                       |
| +19.0% |   +28 | 11.6% → 13.1% |     147 → 175 | `getValue`                          | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                                                                            |
| +42.4% |   +28 |   5.2% → 7.1% |       66 → 94 | `transform`                         | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`                                                                                           |
| +20.6% |   +22 |   8.4% → 9.7% |     107 → 129 | `processSymbolsByName`              | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                               |
| +33.9% |   +21 |   4.9% → 6.2% |       62 → 83 | `readMessage`                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                                                                  |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `getTopLevelPropertySymbols`        | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`                                                                                    |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `processPropertiesByName`           | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                                                                    |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `invoke`                            | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                     |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `processPropertiesByName`           | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                               |
| +27.1% |   +19 |   5.5% → 6.7% |       70 → 89 | `parsePartialFrom`                  | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                                                                    |
| +32.2% |   +19 |   4.7% → 5.9% |       59 → 78 | `transformAnnotation`               | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`      |
| +32.2% |   +19 |   4.7% → 5.9% |       59 → 78 | `transformAnnotation`               | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                          |
| +15.9% |   +18 |   8.9% → 9.8% |     113 → 131 | `transformSingle`                   | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                          |
| +30.5% |   +18 |   4.7% → 5.8% |       59 → 77 | `computeTopLevelCallableNames`      | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`                                            |
| +30.5% |   +18 |   4.7% → 5.8% |       59 → 77 | `invoke`                            | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
| +30.5% |   +18 |   4.7% → 5.8% |       59 → 77 | `getTopLevelCallableNamesInPackage` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                                                         |
| +30.5% |   +18 |   4.7% → 5.8% |       59 → 77 | `computeTopLevelCallableNames`      | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`                                                                |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

##### Standard library

| Change | Delta |             % |   Samples | Function                 | Location                                                                                                  |
| -----: | ----: | ------------: | --------: | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| -40.8% |   -20 |   3.9% → 2.2% |   49 → 29 | `copyOfRange`            | `java.util.Arrays`                                                                                        |
| -41.9% |   -18 |   3.4% → 1.9% |   43 → 25 | `copyOfRangeByte`        | `java.util.Arrays`                                                                                        |
| -48.1% |   -13 |   2.1% → 1.1% |   27 → 14 | `getValue`               | `kotlin.UnsafeLazyImpl`                                                                                   |
| -48.0% |   -12 |   2.0% → 1.0% |   25 → 13 | `<init>`                 | `java.lang.String`                                                                                        |
| -57.9% |   -11 |   1.5% → 0.6% |    19 → 8 | `toString`               | `java.lang.StringBuilder`                                                                                 |
| -55.6% |   -10 |   1.4% → 0.6% |    18 → 8 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder`                                                                         |
| -55.6% |   -10 |   1.4% → 0.6% |    18 → 8 | `append`                 | `java.lang.AbstractStringBuilder`                                                                         |
| -40.0% |   -10 |   2.0% → 1.1% |   25 → 15 | `newString`              | `java.lang.StringLatin1`                                                                                  |
|  -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000 → java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |
|  -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000b001009400 → java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
|  -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invokeExact_MT`         | `java.lang.invoke.Invokers$Holder`                                                                        |
|  -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invokeImpl`             | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|  -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invoke`                 | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                         |
|  -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invoke`                 | `java.lang.reflect.Method`                                                                                |
| -75.0% |    -9 |   0.9% → 0.2% |    12 → 3 | `newNode`                | `java.util.LinkedHashMap`                                                                                 |
| -50.0% |    -9 |   1.4% → 0.7% |    18 → 9 | `append`                 | `java.lang.StringBuilder`                                                                                 |
| -28.0% |    -7 |   2.0% → 1.4% |   25 → 18 | `putVal`                 | `java.util.HashMap`                                                                                       |
| -28.0% |    -7 |   2.0% → 1.4% |   25 → 18 | `put`                    | `java.util.HashMap`                                                                                       |
| -31.8% |    -7 |   1.7% → 1.1% |   22 → 15 | `substring`              | `java.lang.String`                                                                                        |
| -40.0% |    -4 |   0.8% → 0.5% |    10 → 6 | `<init>`                 | `java.util.HashSet`                                                                                       |

##### Ours

| Change | Delta |             % |   Samples | Function                                                    | Location                                                                                                                                                                                                                                            |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -35.9% |   -33 |   7.3% → 4.4% |   92 → 59 | `accept`                                                    | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                                                                                                                                                                     |
| -41.4% |   -29 |   5.5% → 3.1% |   70 → 41 | `checkElement`                                              | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor`                                                                                                                                                             |
| -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `visitFile`                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                                                                                                                                   |
| -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `collectDiagnostics`                                        | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`                                                                                                                                                                          |
| -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `runCheckers`                                               | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                                                                                                                                                                       |
| -35.1% |   -26 |   5.8% → 3.6% |   74 → 48 | `acceptChildren`                                            | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                                                                                                                                            |
| -36.6% |   -26 |   5.6% → 3.4% |   71 → 45 | `visitNestedElements`                                       | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                                                                                                                                   |
| -32.1% |   -25 |   6.2% → 4.0% |   78 → 53 | `accept`                                                    | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                                                                                                                                                            |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                                                                                                                                                       |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                                                                                                                                            |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transform`                                                 | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                                                                                                                                                                     |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformElement`                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`                                                                                                                                                       |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                                                                                                                                                                  |
| -14.1% |   -25 | 14.0% → 11.4% | 177 → 152 | `transformFunctionContent`                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                                                                                                                      |
| -13.8% |   -24 | 13.7% → 11.3% | 174 → 150 | `transformStatementsIndexed`                                | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                                                                                                                                                                          |
| -13.8% |   -24 | 13.7% → 11.3% | 174 → 150 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                                                                                                                                                       |
| -14.5% |   -23 | 12.5% → 10.2% | 159 → 136 | `invoke`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016b4c80 → org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016b47e0` |
| -31.7% |   -20 |   5.0% → 3.2% |   63 → 43 | `visitNamedFunction`                                        | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                                                                                                                                                   |
|  -6.1% |   -20 | 26.0% → 23.3% | 330 → 310 | `resolveAndCheckFir`                                        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                                                                                                                                                      |
| -12.4% |   -20 | 12.7% → 10.6% | 161 → 141 | `transformFunctionWithGivenSignature`                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                                                                                                                                      |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `loadAllClassesFromJars` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change | Delta |             % |   Samples | Callee         | Location                        |
| ------: | ----: | ------------: | --------: | -------------- | ------------------------------- |
|  +12.2% |   +41 | 51.3% → 51.7% | 336 → 377 | `toByteArray`  | `java.io.ByteArrayOutputStream` |
|   +9.1% |   +27 | 45.3% → 44.4% | 297 → 324 | `<init>`       | `java.io.ByteArrayOutputStream` |
| +500.0% |    +5 |   0.2% → 0.8% |     1 → 6 | `put`          | `java.util.HashMap`             |
|   +5.9% |    +1 |   2.6% → 2.5% |   17 → 18 | `getNextEntry` | `java.util.zip.ZipInputStream`  |
| removed |    -1 |   0.2% → 0.0% |     1 → 0 | `<init>`       | `java.util.zip.ZipInputStream`  |

##### `preloadClasses` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change | Delta |            % |   Samples | Callee                   | Location                                               |
| -----: | ----: | -----------: | --------: | ------------------------ | ------------------------------------------------------ |
| +11.3% |   +74 |       100.0% | 655 → 729 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| +17.5% |   +11 | 9.6% → 10.2% |   63 → 74 | `preloadClasses`         | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `run` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |             % |   Samples | Callee           | Location                                               |
| -----: | ----: | ------------: | --------: | ---------------- | ------------------------------------------------------ |
| +11.3% |   +74 | 51.8% → 54.8% | 655 → 729 | `preloadClasses` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  -1.5% |    -9 | 48.2% → 45.2% | 610 → 601 | `invoke`         | `java.lang.reflect.Method`                             |

##### `main` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change | Delta |      % |       Samples | Callee | Location                                    |
| -----: | ----: | -----: | ------------: | ------ | ------------------------------------------- |
|  +5.1% |   +65 | 100.0% | 1,265 → 1,330 | `run`  | `org.jetbrains.kotlin.preloading.Preloader` |

##### `toByteArray` (`java.io.ByteArrayOutputStream`)

| Change | Delta |      % |   Samples | Callee   | Location           |
| -----: | ----: | -----: | --------: | -------- | ------------------ |
| +12.2% |   +41 | 100.0% | 336 → 377 | `copyOf` | `java.util.Arrays` |

##### `copyOf` (`java.util.Arrays`)

|  Change | Delta |             % | Samples | Callee        | Location                  |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------- |
|   +6.5% |    +5 | 21.0% → 20.3% | 77 → 82 | `clone`       | `java.lang.Object`        |
| +400.0% |    +4 |   0.3% → 1.2% |   1 → 5 | `copyOf`      | `java.util.Arrays`        |
| removed |    -1 |   0.3% → 0.0% |   1 → 0 | `newInstance` | `java.lang.reflect.Array` |

##### `getValue` (`org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`)

| Change | Delta |             % | Samples | Callee   | Location                                                                                                                                            |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| +30.5% |   +18 | 40.1% → 44.0% | 59 → 77 | `invoke` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`   |
| +21.2% |   +14 | 44.9% → 45.7% | 66 → 80 | `invoke` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$2`                                     |
| +29.6% |    +8 | 18.4% → 20.0% | 27 → 35 | `invoke` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$special$$inlined$createCache$1`                                  |
| -62.5% |    -5 |   5.4% → 1.7% |   8 → 3 | `invoke` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$special$$inlined$createCache$1`                                     |
| -26.3% |    -5 |  12.9% → 8.0% | 19 → 14 | `invoke` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelClassifierNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |

##### `transform` (`org.jetbrains.kotlin.fir.declarations.FirRegularClass`)

|  Change | Delta |             % | Samples | Callee                  | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | ----------------------- | -------------------------------------------------------------------------------------------------------- |
|  +30.5% |   +18 | 89.4% → 81.9% | 59 → 77 | `transformRegularClass` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer`   |
| +125.0% |    +5 |   6.1% → 9.6% |   4 → 9 | `transformRegularClass` | `org.jetbrains.kotlin.fir.resolve.transformers.AbstractFirStatusResolveTransformer`                      |
| +133.3% |    +4 |   4.5% → 7.4% |   3 → 7 | `transformRegularClass` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|     new |    +1 |   0.0% → 1.1% |   0 → 1 | `transformRegularClass` | `org.jetbrains.kotlin.fir.resolve.transformers.FirTypeResolveTransformer`                                |

##### `processSymbolsByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

| Change | Delta |             % | Samples | Callee   | Location                                                                                      |
| -----: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------- |
| +33.9% |   +20 | 55.1% → 61.2% | 59 → 79 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |
|  +4.2% |    +2 | 44.9% → 38.8% | 48 → 50 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processFunctionsByName$1`  |

##### `readMessage` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change | Delta |             % | Samples | Callee             | Location                                                 |
| -----: | ----: | ------------: | ------: | ------------------ | -------------------------------------------------------- |
| +36.2% |   +17 | 75.8% → 77.1% | 47 → 64 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`      |
| +50.0% |   +15 | 48.4% → 54.2% | 30 → 45 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`          |
| +30.8% |    +4 | 21.0% → 20.5% | 13 → 17 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`    |
| +23.1% |    +3 | 21.0% → 19.3% | 13 → 16 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class$1`         |
| -50.0% |    -3 |   9.7% → 3.6% |   6 → 3 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1` |

##### `getTopLevelPropertySymbols` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`)

| Change | Delta |              % | Samples | Callee                         | Location                                                                            |
| -----: | ----: | -------------: | ------: | ------------------------------ | ----------------------------------------------------------------------------------- |
| +30.5% |   +18 | 100.0% → 97.5% | 59 → 77 | `getTopLevelPropertySymbolsTo` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider` |
|    new |    +2 |    0.0% → 2.5% |   0 → 2 | `createListBuilder`            | `kotlin.collections.CollectionsKt__CollectionsJVMKt`                                |

##### `processPropertiesByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`)

| Change | Delta |      % | Samples | Callee                       | Location                                                       |
| -----: | ----: | -----: | ------: | ---------------------------- | -------------------------------------------------------------- |
| +33.9% |   +20 | 100.0% | 59 → 79 | `getTopLevelPropertySymbols` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider` |

##### `invoke` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`)

| Change | Delta |      % | Samples | Callee                    | Location                                                                                      |
| -----: | ----: | -----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------- |
| +33.9% |   +20 | 100.0% | 59 → 79 | `processPropertiesByName` | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                |
| +33.9% |   +20 | 100.0% | 59 → 79 | `invoke`                  | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1` |

##### `processPropertiesByName` (`org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`)

| Change | Delta |      % | Samples | Callee                 | Location                                                            |
| -----: | ----: | -----: | ------: | ---------------------- | ------------------------------------------------------------------- |
| +33.9% |   +20 | 100.0% | 59 → 79 | `processSymbolsByName` | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |

##### `parsePartialFrom` (`org.jetbrains.kotlin.protobuf.AbstractParser`)

|  Change | Delta |             % | Samples | Callee             | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------ | ------------------------------------------------------------------ |
|  +33.3% |   +15 | 64.3% → 67.4% | 45 → 60 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`                 |
|  +21.4% |    +3 | 20.0% → 19.1% | 14 → 17 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.ProtoBuf$PackageFragment$1`         |
|     new |    +3 |   0.0% → 3.4% |   0 → 3 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$1` |
|  -28.6% |    -2 |  10.0% → 5.6% |   7 → 5 | `newInstance`      | `org.jetbrains.kotlin.protobuf.CodedInputStream`                   |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `parsePartialFrom` | `org.jetbrains.kotlin.metadata.jvm.JvmModuleProtoBuf$Module$1`     |

##### `transformAnnotation` (`org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer`)

| Change | Delta |              % | Samples | Callee              | Location                                                          |
| -----: | ----: | -------------: | ------: | ------------------- | ----------------------------------------------------------------- |
| +30.5% |   +18 | 100.0% → 98.7% | 59 → 77 | `transformChildren` | `org.jetbrains.kotlin.fir.expressions.impl.FirAnnotationCallImpl` |
|    new |    +1 |    0.0% → 1.3% |   0 → 1 | `enterAnnotation`   | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`        |

##### `transformAnnotation` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % | Samples | Callee                | Location                                                                                                                                     |
| -----: | ----: | -----: | ------: | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| +32.2% |   +19 | 100.0% | 59 → 78 | `transformAnnotation` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer` |

##### `transformSingle` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

|  Change | Delta |             % | Samples | Callee      | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------ |
|  +28.1% |   +18 | 56.6% → 62.6% | 64 → 82 | `transform` | `org.jetbrains.kotlin.fir.declarations.FirFile`                    |
| +125.0% |    +5 |   3.5% → 6.9% |   4 → 9 | `transform` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`            |
|     new |    +4 |   0.0% → 3.1% |   0 → 4 | `transform` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |
|  -75.0% |    -3 |   3.5% → 0.8% |   4 → 1 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |
|   +2.9% |    +1 | 31.0% → 27.5% | 35 → 36 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`             |

##### `computeTopLevelCallableNames` (`org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`)

|  Change | Delta |              % | Samples | Callee                         | Location                                                                         |
| ------: | ----: | -------------: | ------: | ------------------------------ | -------------------------------------------------------------------------------- |
|  +32.8% |   +19 | 98.3% → 100.0% | 58 → 77 | `access$getPackageParts`       | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider` |
| removed |    -1 |    1.7% → 0.0% |   1 → 0 | `getTopLevelFunctionNameIndex` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData`                 |

##### `linkCallSiteImpl` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |              % | Samples | Callee               | Location                    |
| -----: | ----: | -------------: | ------: | -------------------- | --------------------------- |
| +48.4% |   +15 | 100.0% → 97.9% | 31 → 46 | `makeSite`           | `java.lang.invoke.CallSite` |
|    new |    +1 |    0.0% → 2.1% |   0 → 1 | `linkToTargetMethod` | `java.lang.invoke.Invokers` |

##### `linkCallSite` (`java.lang.invoke.MethodHandleNatives`)

| Change | Delta |      % | Samples | Callee             | Location                               |
| -----: | ----: | -----: | ------: | ------------------ | -------------------------------------- |
| +51.6% |   +16 | 100.0% | 31 → 47 | `linkCallSiteImpl` | `java.lang.invoke.MethodHandleNatives` |

##### `buildCallSite` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |             % | Samples | Callee            | Location                                       |
| -----: | ----: | ------------: | ------: | ----------------- | ---------------------------------------------- |
| +75.0% |   +12 |         80.0% | 16 → 28 | `spinInnerClass`  | `java.lang.invoke.InnerClassLambdaMetafactory` |
| +50.0% |    +2 | 20.0% → 17.1% |   4 → 6 | `findConstructor` | `java.lang.invoke.MethodHandles$Lookup`        |
|    new |    +1 |   0.0% → 2.9% |   0 → 1 | `asType`          | `java.lang.invoke.MethodHandle`                |

##### `metafactory` (`java.lang.invoke.LambdaMetafactory`)

| Change | Delta |             % | Samples | Callee          | Location                                       |
| -----: | ----: | ------------: | ------: | --------------- | ---------------------------------------------- |
| +75.0% |   +15 | 64.5% → 76.1% | 20 → 35 | `buildCallSite` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invoke` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change | Delta |      % | Samples | Callee           | Location                           |
| -----: | ----: | -----: | ------: | ---------------- | ---------------------------------- |
| +48.4% |   +15 | 100.0% | 31 → 46 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `makeSite` (`java.lang.invoke.CallSite`)

| Change | Delta |      % | Samples | Callee   | Location                                  |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------------- |
| +48.4% |   +15 | 100.0% | 31 → 46 | `invoke` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001230000`)

| Change | Delta |      % | Samples | Callee        | Location                             |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------ |
| +48.3% |   +14 | 100.0% | 29 → 43 | `metafactory` | `java.lang.invoke.LambdaMetafactory` |

##### `generateInnerClass` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change | Delta |             % | Samples | Callee                | Location                                                                 |
| ------: | ----: | ------------: | ------: | --------------------- | ------------------------------------------------------------------------ |
| +120.0% |    +6 | 31.3% → 39.3% |  5 → 11 | `generate`            | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
| +133.3% |    +4 | 18.8% → 25.0% |   3 → 7 | `toByteArray`         | `jdk.internal.org.objectweb.asm.ClassWriter`                             |
| +100.0% |    +2 | 12.5% → 14.3% |   2 → 4 | `visitMethod`         | `jdk.internal.org.objectweb.asm.ClassWriter`                             |
| +200.0% |    +2 |  6.3% → 10.7% |   1 → 3 | `visit`               | `jdk.internal.org.objectweb.asm.ClassWriter`                             |
|  -50.0% |    -2 |  25.0% → 7.1% |   4 → 2 | `generateConstructor` | `java.lang.invoke.InnerClassLambdaMetafactory`                           |

##### `spinInnerClass` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change | Delta |      % | Samples | Callee               | Location                                       |
| -----: | ----: | -----: | ------: | -------------------- | ---------------------------------------------- |
| +75.0% |   +12 | 100.0% | 16 → 28 | `generateInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `getValue` (`kotlin.SynchronizedLazyImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +125.0% |    +5 | 12.9% → 21.4% |   4 → 9 | `invoke` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000b00160fb50 → org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000700160f940`                         |
|  +50.0% |    +2 | 12.9% → 14.3% |   4 → 6 | `invoke` | `org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x000000b001141e48 → org.jetbrains.kotlin.diagnostics.KtDiagnosticFactoryToRendererMapKt$$Lambda.0x0000007001141e48` |
|     new |    +2 |   0.0% → 4.8% |   0 → 2 | `invoke` | `org.jetbrains.kotlin.cli.common.CLICompiler$$Lambda.0x000000700100a000`                                                                                                                          |
|     new |    +2 |   0.0% → 4.8% |   0 → 2 | `invoke` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000007001820000`                                                                                                                 |
| removed |    -1 |   3.2% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.deserialization.PackagePartsCacheData$$Lambda.0x000000b0015d9150`                                                                                                       |

##### `getValue` (`kotlin.SafePublicationLazyImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                                                                                                                                                                              |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +50.0% |    +5 | 22.7% → 27.3% | 10 → 15 | `invoke` | `kotlin.reflect.jvm.internal.DescriptorKProperty$$Lambda$0`                                                                                                                                                           |
| +300.0% |    +3 |   2.3% → 7.3% |   1 → 4 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000b00161dc00 → org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x0000007001627d80`                   |
|     new |    +3 |   0.0% → 5.5% |   0 → 3 | `invoke` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x000000700162f710`                                                                                                                       |
|   +6.9% |    +2 | 65.9% → 56.4% | 29 → 31 | `invoke` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x000000b0015d74a0 → org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000070015d74a0` |
| +200.0% |    +2 |   2.3% → 5.5% |   1 → 3 | `invoke` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000b00160f2a8 → org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000700160f098`                                           |

##### `loadClass` (`java.lang.ClassLoader`)

|  Change | Delta |             % | Samples | Callee      | Location                                                 |
| ------: | ----: | ------------: | ------: | ----------- | -------------------------------------------------------- |
| +266.7% |    +8 | 15.0% → 39.3% |  3 → 11 | `findClass` | `java.net.URLClassLoader`                                |
| +120.0% |    +6 | 25.0% → 39.3% |  5 → 11 | `loadClass` | `java.lang.ClassLoader`                                  |
|  +14.3% |    +2 | 70.0% → 57.1% | 14 → 16 | `findClass` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed |    -2 |  10.0% → 0.0% |   2 → 0 | `loadClass` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
|  -50.0% |    -1 |  10.0% → 3.6% |   2 → 1 | `loadClass` | `jdk.internal.jrtfs.JrtFileSystemProvider$JrtFsLoader`   |

##### `run` (`java.net.URLClassLoader$1`)

|  Change | Delta |              % | Samples | Callee        | Location                           |
| ------: | ----: | -------------: | ------: | ------------- | ---------------------------------- |
| +175.0% |    +7 |         100.0% |  4 → 11 | `run`         | `java.net.URLClassLoader$1`        |
| +125.0% |    +5 | 100.0% → 81.8% |   4 → 9 | `defineClass` | `java.net.URLClassLoader`          |
|     new |    +1 |    0.0% → 9.1% |   0 → 1 | `concat`      | `java.lang.String`                 |
|     new |    +1 |    0.0% → 9.1% |   0 → 1 | `getResource` | `jdk.internal.loader.URLClassPath` |

##### `findClass` (`java.net.URLClassLoader`)

|  Change | Delta |      % | Samples | Callee         | Location                         |
| ------: | ----: | -----: | ------: | -------------- | -------------------------------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `doPrivileged` | `java.security.AccessController` |

##### `generate` (`java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`)

|  Change | Delta |             % | Samples | Callee                 | Location                                                                 |
| ------: | ----: | ------------: | ------: | ---------------------- | ------------------------------------------------------------------------ |
|     new |    +6 |  0.0% → 54.5% |   0 → 6 | `convertArgumentTypes` | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
| removed |    -2 |  40.0% → 0.0% |   2 → 0 | `convertType`          | `java.lang.invoke.TypeConvertingMethodAdapter`                           |
|  +66.7% |    +2 | 60.0% → 45.5% |   3 → 5 | `visitMethodInsn`      | `jdk.internal.org.objectweb.asm.MethodVisitor`                           |

##### `getBytes` (`jdk.internal.loader.Resource`)

|  Change | Delta |      % | Samples | Callee   | Location           |
| ------: | ----: | -----: | ------: | -------- | ------------------ |
| +300.0% |    +6 | 100.0% |   2 → 8 | `copyOf` | `java.util.Arrays` |

##### `getBytes` (`jdk.internal.loader.URLClassPath$JarLoader$2`)

|  Change | Delta |      % | Samples | Callee     | Location                       |
| ------: | ----: | -----: | ------: | ---------- | ------------------------------ |
| +300.0% |    +6 | 100.0% |   2 → 8 | `getBytes` | `jdk.internal.loader.Resource` |

##### `invoke` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`)

| Change | Delta |      % | Samples | Callee                         | Location                                                                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| +30.5% |   +18 | 100.0% | 59 → 77 | `computeTopLevelCallableNames` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`                                            |
| +30.5% |   +18 | 100.0% | 59 → 77 | `invoke`                       | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
| +30.5% |   +18 | 100.0% | 59 → 77 | `computeTopLevelCallableNames` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`                                         |

##### `getTopLevelCallableNamesInPackage` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

| Change | Delta |      % | Samples | Callee     | Location                                               |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------ |
| +30.5% |   +18 | 100.0% | 59 → 77 | `getValue` | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache` |

##### `computeTopLevelCallableNames` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`)

| Change | Delta |      % | Samples | Callee                              | Location                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------- | ------------------------------------------------------------------------- |
| +30.5% |   +18 | 100.0% | 59 → 77 | `getTopLevelCallableNamesInPackage` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider` |

##### `accept` (`org.jetbrains.kotlin.fir.declarations.FirFile`)

|  Change | Delta |             % | Samples | Callee      | Location                                                                                              |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
|  -37.0% |   -27 | 79.3% → 78.0% | 73 → 46 | `visitFile` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                     |
|  -33.3% |    -5 | 16.3% → 16.9% | 15 → 10 | `visitFile` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                      |
|  -50.0% |    -1 |   2.2% → 1.7% |   2 → 1 | `visitFile` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`       |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `visitFile` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSealedClassInheritorsProcessor$InheritorsCollector` |

##### `checkElement` (`org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor`)

|  Change | Delta |             % | Samples | Callee   | Location                                                           |
| ------: | ----: | ------------: | ------: | -------- | ------------------------------------------------------------------ |
|  -40.0% |    -6 | 21.4% → 22.0% |  15 → 9 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`           |
|  -75.0% |    -6 |  11.4% → 4.9% |   8 → 2 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`            |
|  -35.3% |    -6 | 24.3% → 26.8% | 17 → 11 | `accept` | `org.jetbrains.kotlin.fir.types.FirResolvedTypeRef`                |
|  -57.1% |    -4 |  10.0% → 7.3% |   7 → 3 | `accept` | `org.jetbrains.kotlin.fir.expressions.FirPropertyAccessExpression` |
| removed |    -3 |   4.3% → 0.0% |   3 → 0 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirTypeParameter`           |

##### `visitFile` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Callee                | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------------------------------- |
| -37.0% |   -27 |        100.0% | 73 → 46 | `visitFile`           | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| -36.6% |   -26 | 97.3% → 97.8% | 71 → 45 | `visitNestedElements` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| -50.0% |    -1 |   2.7% → 2.2% |   2 → 1 | `access$checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `collectDiagnostics` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`)

| Change | Delta |      % | Samples | Callee   | Location                                        |
| -----: | ----: | -----: | ------: | -------- | ----------------------------------------------- |
| -37.0% |   -27 | 100.0% | 73 → 46 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirFile` |

##### `runCheckers` (`org.jetbrains.kotlin.fir.pipeline.AnalyseKt`)

| Change | Delta |      % | Samples | Callee               | Location                                                                   |
| -----: | ----: | -----: | ------: | -------------------- | -------------------------------------------------------------------------- |
| -37.0% |   -27 | 100.0% | 73 → 46 | `collectDiagnostics` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector` |

##### `acceptChildren` (`org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`)

| Change | Delta |             % | Samples | Callee   | Location                                                 |
| -----: | ----: | ------------: | ------: | -------- | -------------------------------------------------------- |
| -31.1% |   -19 | 82.4% → 87.5% | 61 → 42 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction` |
| -53.8% |    -7 | 17.6% → 12.5% |  13 → 6 | `accept` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`  |

##### `visitNestedElements` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

|  Change | Delta |             % | Samples | Callee           | Location                                                           |
| ------: | ----: | ------------: | ------: | ---------------- | ------------------------------------------------------------------ |
|  -36.6% |   -26 |        100.0% | 71 → 45 | `acceptChildren` | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`           |
|  -29.2% |   -14 | 67.6% → 75.6% | 48 → 34 | `acceptChildren` | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`  |
|  -25.0% |    -6 | 33.8% → 40.0% | 24 → 18 | `acceptChildren` | `org.jetbrains.kotlin.fir.expressions.impl.FirBlockImpl`           |
|  -60.0% |    -6 |  14.1% → 8.9% |  10 → 4 | `acceptChildren` | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyImpl`       |
| +100.0% |    +5 |  7.0% → 22.2% |  5 → 10 | `acceptChildren` | `org.jetbrains.kotlin.fir.declarations.impl.FirValueParameterImpl` |

##### `accept` (`org.jetbrains.kotlin.fir.declarations.FirNamedFunction`)

| Change | Delta |             % | Samples | Callee               | Location                                                                                         |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| -31.7% |   -20 | 80.8% → 81.1% | 63 → 43 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                |
| -71.4% |    -5 |   9.0% → 3.8% |   7 → 2 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.checkers.declaration.DeclarationCheckersDiagnosticComponent`  |
| -33.3% |    -5 | 19.2% → 18.9% | 15 → 10 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.backend.Fir2IrVisitor`                                                 |
| -12.5% |    -1 | 10.3% → 13.2% |   8 → 7 | `visitNamedFunction` | `org.jetbrains.kotlin.fir.analysis.collectors.components.ControlFlowAnalysisDiagnosticComponent` |

##### `transformBlock` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |              % |   Samples | Callee                                                      | Location                                                                                      |
| ------: | ----: | -------------: | --------: | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -13.8% |   -24 | 99.4% → 100.0% | 174 → 150 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer` |
| removed |    -1 |    0.6% → 0.0% |     1 → 0 | `addLocalScope`                                             | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`               |

##### `transformBlock` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change | Delta |      % |   Samples | Callee           | Location                                                                                                 |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transformBlock` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`            |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transformBlock` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform` (`org.jetbrains.kotlin.fir.expressions.FirBlock`)

| Change | Delta |      % |   Samples | Callee           | Location                                                                                                 |
| -----: | ----: | -----: | --------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transformBlock` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transformBlock` | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                       |

##### `transformElement` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`)

| Change | Delta |      % |   Samples | Callee             | Location                                                                                      |
| -----: | ----: | -----: | --------: | ------------------ | --------------------------------------------------------------------------------------------- |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transform`        | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                               |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transformElement` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer` |

##### `transformBlock` (`org.jetbrains.kotlin.fir.visitors.FirTransformer`)

| Change | Delta |      % |   Samples | Callee             | Location                                                                                      |
| -----: | ----: | -----: | --------: | ------------------ | --------------------------------------------------------------------------------------------- |
| -14.3% |   -25 | 100.0% | 175 → 150 | `transformElement` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer` |

##### `transformFunctionContent` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

|  Change | Delta |             % |   Samples | Callee                     | Location                                                              |
| ------: | ----: | ------------: | --------: | -------------------------- | --------------------------------------------------------------------- |
|  -11.9% |   -19 | 89.8% → 92.1% | 159 → 140 | `transformBody`            | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`     |
|  -25.0% |    -6 | 13.6% → 11.8% |   24 → 18 | `transformBody`            | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl` |
| +100.0% |    +1 |   0.6% → 1.3% |     1 → 2 | `enterFunction`            | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`            |
|  -50.0% |    -1 |   1.1% → 0.7% |     2 → 1 | `exitFunction`             | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`            |
|     new |    +1 |   0.0% → 0.7% |     0 → 1 | `transformValueParameters` | `org.jetbrains.kotlin.fir.declarations.impl.FirAnonymousFunctionImpl` |

##### `transformStatementsIndexed` (`org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`)

| Change | Delta |             % |  Samples | Callee      | Location                                                   |
| -----: | ----: | ------------: | -------: | ----------- | ---------------------------------------------------------- |
| -42.9% |   -15 | 20.1% → 13.3% |  35 → 20 | `transform` | `org.jetbrains.kotlin.fir.declarations.FirProperty`        |
|  -5.7% |    -6 | 60.3% → 66.0% | 105 → 99 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirReturnExpression` |
| -22.2% |    -6 | 15.5% → 14.0% |  27 → 21 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirWhileLoop`        |
| -25.0% |    -6 | 13.8% → 12.0% |  24 → 18 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`     |
| +13.0% |    +3 | 13.2% → 17.3% |  23 → 26 | `transform` | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`   |

##### `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`)

|  Change | Delta |           % |   Samples | Callee                       | Location                                                   |
| ------: | ----: | ----------: | --------: | ---------------------------- | ---------------------------------------------------------- |
|  -13.8% |   -24 |      100.0% | 174 → 150 | `transformStatementsIndexed` | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt` |
| +100.0% |    +1 | 0.6% → 1.3% |     1 → 2 | `exitBlock`                  | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |
|     new |    +1 | 0.0% → 0.7% |     0 → 1 | `enterBlock`                 | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer` |

##### `invoke` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016b47e0`)

| Change | Delta |      % |   Samples | Callee                                | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------------------------------- | ---------------------------------------------------------------------------------------------- |
| -14.5% |   -23 | 100.0% | 159 → 136 | `transformNamedFunction$lambda$0$0$0` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `visitNamedFunction` (`org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`)

| Change | Delta |             % | Samples | Callee                | Location                                                                          |
| -----: | ----: | ------------: | ------: | --------------------- | --------------------------------------------------------------------------------- |
| -31.7% |   -20 |        100.0% | 63 → 43 | `visitNamedFunction`  | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| -29.2% |   -14 | 76.2% → 79.1% | 48 → 34 | `visitNestedElements` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |
| -40.0% |    -6 | 23.8% → 20.9% |  15 → 9 | `access$checkElement` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor` |

##### `resolveAndCheckFir` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change | Delta |             % |   Samples | Callee          | Location                                      |
| -----: | ----: | ------------: | --------: | --------------- | --------------------------------------------- |
| -37.3% |   -22 | 17.9% → 11.9% |   59 → 37 | `runCheckers`   | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |
|  +0.7% |    +2 | 82.1% → 88.1% | 271 → 273 | `runResolution` | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt` |

##### `transformFunctionWithGivenSignature` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change | Delta |      % |   Samples | Callee                     | Location                                                                                       |
| -----: | ----: | -----: | --------: | -------------------------- | ---------------------------------------------------------------------------------------------- |
| -12.4% |   -20 | 100.0% | 161 → 141 | `transformFunctionContent` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `copyOfRange` (`java.util.Arrays`)

| Change | Delta |             % | Samples | Callee            | Location           |
| -----: | ----: | ------------: | ------: | ----------------- | ------------------ |
| -41.9% |   -18 | 87.8% → 86.2% | 43 → 25 | `copyOfRangeByte` | `java.util.Arrays` |
|    new |    +1 |   0.0% → 3.4% |   0 → 1 | `clone`           | `java.lang.Object` |

##### `getValue` (`kotlin.UnsafeLazyImpl`)

|  Change | Delta |             % | Samples | Callee   | Location                                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -7 |  25.9% → 0.0% |   7 → 0 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.candidate.Candidate$$Lambda.0x000000b001670720`                                                                                                                                           |
|  -46.2% |    -6 | 48.1% → 50.0% |  13 → 7 | `invoke` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x000000b001686d48 → org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver$$Lambda.0x00000070016828a0`                                                           |
|  -30.0% |    -3 | 37.0% → 50.0% |  10 → 7 | `invoke` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000b00160b6c8 → org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser$$Lambda.0x000000700160b4b8` |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.types.AbstractTypeApproximator$$Lambda.0x000000b00169b9f0`                                                                                                                                                  |
| removed |    -1 |   3.7% → 0.0% |   1 → 0 | `invoke` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000b00163efa0`                                                                                                                                                   |

##### `<init>` (`java.lang.String`)

| Change | Delta |             % | Samples | Callee        | Location           |
| -----: | ----: | ------------: | ------: | ------------- | ------------------ |
| -50.0% |   -12 | 96.0% → 92.3% | 24 → 12 | `copyOfRange` | `java.util.Arrays` |
| -48.0% |   -12 |        100.0% | 25 → 13 | `<init>`      | `java.lang.String` |

##### `toString` (`java.lang.StringBuilder`)

| Change | Delta |             % | Samples | Callee   | Location           |
| -----: | ----: | ------------: | ------: | -------- | ------------------ |
| -53.8% |    -7 | 68.4% → 75.0% |  13 → 6 | `<init>` | `java.lang.String` |

##### `ensureCapacityInternal` (`java.lang.AbstractStringBuilder`)

| Change | Delta |      % | Samples | Callee   | Location           |
| -----: | ----: | -----: | ------: | -------- | ------------------ |
| -55.6% |   -10 | 100.0% |  18 → 8 | `copyOf` | `java.util.Arrays` |

##### `append` (`java.lang.AbstractStringBuilder`)

| Change | Delta |      % | Samples | Callee                   | Location                          |
| -----: | ----: | -----: | ------: | ------------------------ | --------------------------------- |
| -55.6% |   -10 | 100.0% |  18 → 8 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder` |

##### `newString` (`java.lang.StringLatin1`)

| Change | Delta |             % | Samples | Callee        | Location           |
| -----: | ----: | ------------: | ------: | ------------- | ------------------ |
| -50.0% |    -9 | 72.0% → 60.0% |  18 → 9 | `copyOfRange` | `java.util.Arrays` |

##### `invokeStatic` (`java.lang.invoke.LambdaForm$DMH.0x0000007001008000`)

| Change | Delta |      % |   Samples | Callee | Location                                     |
| -----: | ----: | -----: | --------: | ------ | -------------------------------------------- |
|  -1.5% |    -9 | 100.0% | 610 → 601 | `main` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke` (`java.lang.invoke.LambdaForm$MH.0x0000007001009400`)

| Change | Delta |      % |   Samples | Callee         | Location                                                                                                  |
| -----: | ----: | -----: | --------: | -------------- | --------------------------------------------------------------------------------------------------------- |
|  -1.5% |    -9 | 100.0% | 610 → 601 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000 → java.lang.invoke.LambdaForm$DMH.0x0000007001008000` |

##### `invokeExact_MT` (`java.lang.invoke.Invokers$Holder`)

| Change | Delta |           % |   Samples | Callee         | Location                                                                                                  |
| -----: | ----: | ----------: | --------: | -------------- | --------------------------------------------------------------------------------------------------------- |
| +48.3% |   +14 | 4.8% → 7.2% |   29 → 43 | `invokeStatic` | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000 → java.lang.invoke.LambdaForm$DMH.0x0000007001230000` |
|  -1.5% |    -9 |      100.0% | 610 → 601 | `invoke`       | `java.lang.invoke.LambdaForm$MH.0x000000b001009400 → java.lang.invoke.LambdaForm$MH.0x0000007001009400`   |
| +50.0% |    +1 | 0.3% → 0.5% |     2 → 3 | `invokeStatic` | `java.lang.invoke.DirectMethodHandle$Holder`                                                              |

##### `invokeImpl` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee           | Location                           |
| -----: | ----: | -----: | --------: | ---------------- | ---------------------------------- |
|  -1.5% |    -9 | 100.0% | 610 → 601 | `invokeExact_MT` | `java.lang.invoke.Invokers$Holder` |

##### `invoke` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change | Delta |      % |   Samples | Callee       | Location                                          |
| -----: | ----: | -----: | --------: | ------------ | ------------------------------------------------- |
|  -1.5% |    -9 | 100.0% | 610 → 601 | `invokeImpl` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke` (`java.lang.reflect.Method`)

| Change | Delta |           % |   Samples | Callee              | Location                                          |
| -----: | ----: | ----------: | --------: | ------------------- | ------------------------------------------------- |
|  -1.5% |    -9 |      100.0% | 610 → 601 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new |    +1 | 0.0% → 0.2% |     0 → 1 | `isCallerSensitive` | `java.lang.reflect.Method`                        |

##### `append` (`java.lang.StringBuilder`)

|  Change | Delta |              % | Samples | Callee    | Location                          |
| ------: | ----: | -------------: | ------: | --------- | --------------------------------- |
|  -55.6% |   -10 | 100.0% → 88.9% |  18 → 8 | `append`  | `java.lang.AbstractStringBuilder` |
| removed |    -1 |    5.6% → 0.0% |   1 → 0 | `append`  | `java.lang.StringBuilder`         |
|     new |    +1 |   0.0% → 11.1% |   0 → 1 | `valueOf` | `java.lang.String`                |

##### `putVal` (`java.util.HashMap`)

| Change | Delta |             % | Samples | Callee    | Location                  |
| -----: | ----: | ------------: | ------: | --------- | ------------------------- |
| -75.0% |    -9 | 48.0% → 16.7% |  12 → 3 | `newNode` | `java.util.LinkedHashMap` |
| +66.7% |    +2 | 12.0% → 27.8% |   3 → 5 | `newNode` | `java.util.HashMap`       |

##### `put` (`java.util.HashMap`)

| Change | Delta |      % | Samples | Callee   | Location            |
| -----: | ----: | -----: | ------: | -------- | ------------------- |
| -28.0% |    -7 | 100.0% | 25 → 18 | `putVal` | `java.util.HashMap` |

##### `substring` (`java.lang.String`)

| Change | Delta |             % | Samples | Callee      | Location                 |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------ |
| -31.8% |    -7 |        100.0% | 22 → 15 | `newString` | `java.lang.StringLatin1` |
| +50.0% |    +2 | 18.2% → 40.0% |   4 → 6 | `substring` | `java.lang.String`       |
