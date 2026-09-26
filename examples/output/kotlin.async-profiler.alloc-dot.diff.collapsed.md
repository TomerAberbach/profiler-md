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

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                     | Location                                                                                                                                     |
| -----: | ----: | ------------: | ------------: | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
|    new |  +601 |  0.0% → 45.1% |       0 → 601 | `invokeStatic`               | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                                                                                         |
|    new |  +601 |  0.0% → 45.1% |       0 → 601 | `invoke`                     | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                                                                                          |
| +11.3% |   +74 | 51.7% → 54.7% |     655 → 729 | `loadAllClassesFromJars`     | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                       |
| +11.3% |   +74 | 51.7% → 54.7% |     655 → 729 | `preloadClasses`             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                                       |
|  +5.1% |   +65 |         99.8% | 1,265 → 1,330 | `run`                        | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                  |
|  +5.1% |   +65 |         99.8% | 1,265 → 1,330 | `main`                       | `org.jetbrains.kotlin.preloading.Preloader`                                                                                                  |
|    new |   +43 |   0.0% → 3.2% |        0 → 43 | `invokeStatic`               | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000`                                                                                         |
| +12.2% |   +41 | 26.5% → 28.3% |     336 → 377 | `toByteArray`                | `java.io.ByteArrayOutputStream`                                                                                                              |
| +10.4% |   +38 | 28.9% → 30.3% |     366 → 404 | `copyOf`                     | `java.util.Arrays`                                                                                                                           |
| +19.0% |   +28 | 11.6% → 13.1% |     147 → 175 | `getValue`                   | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`                                                                                       |
| +42.4% |   +28 |   5.2% → 7.1% |       66 → 94 | `transform`                  | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`                                                                                      |
|  +9.1% |   +27 | 23.4% → 24.3% |     297 → 324 | `<init>`                     | `java.io.ByteArrayOutputStream`                                                                                                              |
| +20.6% |   +22 |   8.4% → 9.7% |     107 → 129 | `processSymbolsByName`       | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                          |
| +33.9% |   +21 |   4.9% → 6.2% |       62 → 83 | `readMessage`                | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                                                             |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `getTopLevelPropertySymbols` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolProvider`                                                                               |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `processPropertiesByName`    | `org.jetbrains.kotlin.fir.scopes.impl.FirSingleLevelDefaultStarImportingScope`                                                               |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `invoke`                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope$processPropertiesByName$1`                                                |
| +33.9% |   +20 |   4.7% → 5.9% |       59 → 79 | `processPropertiesByName`    | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope`                                                                          |
| +27.1% |   +19 |   5.5% → 6.7% |       70 → 89 | `parsePartialFrom`           | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                                                               |
| +32.2% |   +19 |   4.7% → 5.9% |       59 → 78 | `transformAnnotation`        | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.AbstractFirSpecificAnnotationResolveTransformer$FirEnumAnnotationArgumentsTransformer` |

##### Standard library

|  Change | Delta |             % |   Samples | Function             | Location                                                                 |
| ------: | ----: | ------------: | --------: | -------------------- | ------------------------------------------------------------------------ |
|     new |  +601 |  0.0% → 45.1% |   0 → 601 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x0000007001008000`                     |
|     new |  +601 |  0.0% → 45.1% |   0 → 601 | `invoke`             | `java.lang.invoke.LambdaForm$MH.0x0000007001009400`                      |
|     new |   +43 |   0.0% → 3.2% |    0 → 43 | `invokeStatic`       | `java.lang.invoke.LambdaForm$DMH.0x0000007001230000`                     |
|  +12.2% |   +41 | 26.5% → 28.3% | 336 → 377 | `toByteArray`        | `java.io.ByteArrayOutputStream`                                          |
|  +10.4% |   +38 | 28.9% → 30.3% | 366 → 404 | `copyOf`             | `java.util.Arrays`                                                       |
|   +9.1% |   +27 | 23.4% → 24.3% | 297 → 324 | `<init>`             | `java.io.ByteArrayOutputStream`                                          |
|  +51.6% |   +16 |   2.4% → 3.5% |   31 → 47 | `linkCallSiteImpl`   | `java.lang.invoke.MethodHandleNatives`                                   |
|  +51.6% |   +16 |   2.4% → 3.5% |   31 → 47 | `linkCallSite`       | `java.lang.invoke.MethodHandleNatives`                                   |
|  +75.0% |   +15 |   1.6% → 2.6% |   20 → 35 | `buildCallSite`      | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|  +48.4% |   +15 |   2.4% → 3.5% |   31 → 46 | `metafactory`        | `java.lang.invoke.LambdaMetafactory`                                     |
|  +48.4% |   +15 |   2.4% → 3.5% |   31 → 46 | `invoke`             | `java.lang.invoke.BootstrapMethodInvoker`                                |
|  +48.4% |   +15 |   2.4% → 3.5% |   31 → 46 | `makeSite`           | `java.lang.invoke.CallSite`                                              |
|  +75.0% |   +12 |   1.3% → 2.1% |   16 → 28 | `generateInnerClass` | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|  +75.0% |   +12 |   1.3% → 2.1% |   16 → 28 | `spinInnerClass`     | `java.lang.invoke.InnerClassLambdaMetafactory`                           |
|  +35.5% |   +11 |   2.4% → 3.2% |   31 → 42 | `getValue`           | `kotlin.SynchronizedLazyImpl`                                            |
|  +25.0% |   +11 |   3.5% → 4.1% |   44 → 55 | `getValue`           | `kotlin.SafePublicationLazyImpl`                                         |
|  +40.0% |    +8 |   1.6% → 2.1% |   20 → 28 | `loadClass`          | `java.lang.ClassLoader`                                                  |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `run`                | `java.net.URLClassLoader$1`                                              |
| +175.0% |    +7 |   0.3% → 0.8% |    4 → 11 | `findClass`          | `java.net.URLClassLoader`                                                |
| +120.0% |    +6 |   0.4% → 0.8% |    5 → 11 | `generate`           | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |

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

|  Change | Delta |             % |   Samples | Function                                                    | Location                                                                                                                  |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| removed |  -610 |  48.1% → 0.0% |   610 → 0 | `invokeStatic`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000`                                                                      |
| removed |  -610 |  48.1% → 0.0% |   610 → 0 | `invoke`                                                    | `java.lang.invoke.LambdaForm$MH.0x000000b001009400`                                                                       |
|  -35.9% |   -33 |   7.3% → 4.4% |   92 → 59 | `accept`                                                    | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                                           |
|  -41.4% |   -29 |   5.5% → 3.1% |   70 → 41 | `checkElement`                                              | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor`                                   |
| removed |   -29 |   2.3% → 0.0% |    29 → 0 | `invokeStatic`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000`                                                                      |
|  -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `visitFile`                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
|  -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `collectDiagnostics`                                        | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`                                                |
|  -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `runCheckers`                                               | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                                             |
|  -35.1% |   -26 |   5.8% → 3.6% |   74 → 48 | `acceptChildren`                                            | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
|  -36.6% |   -26 |   5.6% → 3.4% |   71 → 45 | `visitNestedElements`                                       | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
|  -32.1% |   -25 |   6.2% → 4.0% |   78 → 53 | `accept`                                                    | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                                  |
|  -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
|  -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transform`                                                 | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                                           |
|  -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformElement`                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`                             |
|  -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                                        |
|  -14.1% |   -25 | 14.0% → 11.4% | 177 → 152 | `transformFunctionContent`                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
|  -13.8% |   -24 | 13.7% → 11.3% | 174 → 150 | `transformStatementsIndexed`                                | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                                                |
|  -13.8% |   -24 | 13.7% → 11.3% | 174 → 150 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
|  -14.5% |   -23 | 12.5% → 10.2% | 159 → 136 | `invoke`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016b47e0` |

##### Standard library

|  Change | Delta |             % |   Samples | Function                 | Location                                             |
| ------: | ----: | ------------: | --------: | ------------------------ | ---------------------------------------------------- |
| removed |  -610 |  48.1% → 0.0% |   610 → 0 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000` |
| removed |  -610 |  48.1% → 0.0% |   610 → 0 | `invoke`                 | `java.lang.invoke.LambdaForm$MH.0x000000b001009400`  |
| removed |   -29 |   2.3% → 0.0% |    29 → 0 | `invokeStatic`           | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000` |
|  -40.8% |   -20 |   3.9% → 2.2% |   49 → 29 | `copyOfRange`            | `java.util.Arrays`                                   |
|  -41.9% |   -18 |   3.4% → 1.9% |   43 → 25 | `copyOfRangeByte`        | `java.util.Arrays`                                   |
|  -48.1% |   -13 |   2.1% → 1.1% |   27 → 14 | `getValue`               | `kotlin.UnsafeLazyImpl`                              |
|  -48.0% |   -12 |   2.0% → 1.0% |   25 → 13 | `<init>`                 | `java.lang.String`                                   |
|  -57.9% |   -11 |   1.5% → 0.6% |    19 → 8 | `toString`               | `java.lang.StringBuilder`                            |
|  -55.6% |   -10 |   1.4% → 0.6% |    18 → 8 | `ensureCapacityInternal` | `java.lang.AbstractStringBuilder`                    |
|  -55.6% |   -10 |   1.4% → 0.6% |    18 → 8 | `append`                 | `java.lang.AbstractStringBuilder`                    |
|  -40.0% |   -10 |   2.0% → 1.1% |   25 → 15 | `newString`              | `java.lang.StringLatin1`                             |
|   -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invokeExact_MT`         | `java.lang.invoke.Invokers$Holder`                   |
|   -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invokeImpl`             | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invoke`                 | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   -1.5% |    -9 | 48.1% → 45.1% | 610 → 601 | `invoke`                 | `java.lang.reflect.Method`                           |
|  -75.0% |    -9 |   0.9% → 0.2% |    12 → 3 | `newNode`                | `java.util.LinkedHashMap`                            |
|  -50.0% |    -9 |   1.4% → 0.7% |    18 → 9 | `append`                 | `java.lang.StringBuilder`                            |
|  -28.0% |    -7 |   2.0% → 1.4% |   25 → 18 | `putVal`                 | `java.util.HashMap`                                  |
|  -28.0% |    -7 |   2.0% → 1.4% |   25 → 18 | `put`                    | `java.util.HashMap`                                  |
|  -31.8% |    -7 |   1.7% → 1.1% |   22 → 15 | `substring`              | `java.lang.String`                                   |

##### Ours

| Change | Delta |             % |   Samples | Function                                                    | Location                                                                                                                  |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| -35.9% |   -33 |   7.3% → 4.4% |   92 → 59 | `accept`                                                    | `org.jetbrains.kotlin.fir.declarations.FirFile`                                                                           |
| -41.4% |   -29 |   5.5% → 3.1% |   70 → 41 | `checkElement`                                              | `org.jetbrains.kotlin.fir.analysis.collectors.CheckerRunningDiagnosticCollectorVisitor`                                   |
| -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `visitFile`                                                 | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
| -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `collectDiagnostics`                                        | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollector`                                                |
| -37.0% |   -27 |   5.8% → 3.5% |   73 → 46 | `runCheckers`                                               | `org.jetbrains.kotlin.fir.pipeline.AnalyseKt`                                                                             |
| -35.1% |   -26 |   5.8% → 3.6% |   74 → 48 | `acceptChildren`                                            | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`                                                                  |
| -36.6% |   -26 |   5.6% → 3.4% |   71 → 45 | `visitNestedElements`                                       | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
| -32.1% |   -25 |   6.2% → 4.0% |   78 → 53 | `accept`                                                    | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                                  |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                  |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transform`                                                 | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                                           |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformElement`                                          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirPartialBodyResolveTransformer`                             |
| -14.3% |   -25 | 13.8% → 11.3% | 175 → 150 | `transformBlock`                                            | `org.jetbrains.kotlin.fir.visitors.FirTransformer`                                                                        |
| -14.1% |   -25 | 14.0% → 11.4% | 177 → 152 | `transformFunctionContent`                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
| -13.8% |   -24 | 13.7% → 11.3% | 174 → 150 | `transformStatementsIndexed`                                | `org.jetbrains.kotlin.fir.expressions.FirExpressionUtilKt`                                                                |
| -13.8% |   -24 | 13.7% → 11.3% | 174 → 150 | `transformBlockInCurrentScope$org_jetbrains_kotlin_resolve` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirExpressionsResolveTransformer`                             |
| -14.5% |   -23 | 12.5% → 10.2% | 159 → 136 | `invoke`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000070016b47e0` |
| -31.7% |   -20 |   5.0% → 3.2% |   63 → 43 | `visitNamedFunction`                                        | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                                         |
|  -6.1% |   -20 | 26.0% → 23.3% | 330 → 310 | `resolveAndCheckFir`                                        | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                            |
| -12.4% |   -20 | 12.7% → 10.6% | 161 → 141 | `transformFunctionWithGivenSignature`                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                            |
