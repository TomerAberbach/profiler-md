# Sampling profile diff

Collected 1,257 samples → 1,304 samples (+47 samples, +3.7%).

| Category         | Change | Delta |             % |   Samples |
| ---------------- | -----: | ----: | ------------: | --------: |
| Standard library |  +2.4% |   +23 | 75.3% → 74.4% | 947 → 970 |
| Ours             |  +7.7% |   +24 | 24.7% → 25.6% | 310 → 334 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                       | Location                                                                     |
| ------: | ----: | ------------: | --------: | ------------------------------ | ---------------------------------------------------------------------------- |
|  +77.8% |   +21 |   2.1% → 3.7% |   27 → 48 | `<init>`                       | `org.jetbrains.kotlin.protobuf.ByteString$Output`                            |
| +100.0% |    +8 |   0.6% → 1.2% |    8 → 16 | `newInstance`                  | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                            |
| +150.0% |    +6 |   0.3% → 0.8% |    4 → 10 | `allocateUninitializedArray`   | `jdk.internal.misc.Unsafe`                                                   |
| +125.0% |    +5 |   0.3% → 0.7% |     4 → 9 | `<init>`                       | `org.jetbrains.kotlin.protobuf.CodedInputStream`                             |
|   +1.5% |    +5 | 26.7% → 26.2% | 336 → 341 | `<init>`                       | `java.io.ByteArrayOutputStream`                                              |
|  +13.8% |    +4 |   2.3% → 2.5% |   29 → 33 | `iterator`                     | `java.util.ArrayList`                                                        |
| +133.3% |    +4 |   0.2% → 0.5% |     3 → 7 | `arrayOfUninitializedElements` | `kotlin.collections.builders.ListBuilderKt`                                  |
| +100.0% |    +4 |   0.3% → 0.6% |     4 → 8 | `enlarge`                      | `jdk.internal.org.objectweb.asm.ByteVector`                                  |
|  +80.0% |    +4 |   0.4% → 0.7% |     5 → 9 | `createZipEntry`               | `java.util.zip.ZipInputStream`                                               |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `build`                        | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`           |
|  +75.0% |    +3 |   0.3% → 0.5% |     4 → 7 | `newString`                    | `java.lang.StringLatin1`                                                     |
|  +60.0% |    +3 |   0.4% → 0.6% |     5 → 8 | `allocateInstance`             | `jdk.internal.misc.Unsafe`                                                   |
|  +50.0% |    +3 |   0.5% → 0.7% |     6 → 9 | `newNode`                      | `java.util.LinkedHashMap`                                                    |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `newFieldMap`                  | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                               |
| +100.0% |    +3 |   0.2% → 0.5% |     3 → 6 | `<init>`                       | `jdk.internal.org.objectweb.asm.ByteVector`                                  |
| +150.0% |    +3 |   0.2% → 0.4% |     2 → 5 | `<init>`                       | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `initClassName`                | `java.lang.Class`                                                            |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `toIrAnnotations`              | `org.jetbrains.kotlin.fir.backend.generators.AnnotationGenerator`            |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `<init>`                       | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                           |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `loadAnnotation`               | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`            |

##### Standard library

|  Change | Delta |             % |   Samples | Function                       | Location                                           |
| ------: | ----: | ------------: | --------: | ------------------------------ | -------------------------------------------------- |
| +150.0% |    +6 |   0.3% → 0.8% |    4 → 10 | `allocateUninitializedArray`   | `jdk.internal.misc.Unsafe`                         |
|   +1.5% |    +5 | 26.7% → 26.2% | 336 → 341 | `<init>`                       | `java.io.ByteArrayOutputStream`                    |
|  +13.8% |    +4 |   2.3% → 2.5% |   29 → 33 | `iterator`                     | `java.util.ArrayList`                              |
| +133.3% |    +4 |   0.2% → 0.5% |     3 → 7 | `arrayOfUninitializedElements` | `kotlin.collections.builders.ListBuilderKt`        |
| +100.0% |    +4 |   0.3% → 0.6% |     4 → 8 | `enlarge`                      | `jdk.internal.org.objectweb.asm.ByteVector`        |
|  +80.0% |    +4 |   0.4% → 0.7% |     5 → 9 | `createZipEntry`               | `java.util.zip.ZipInputStream`                     |
|  +75.0% |    +3 |   0.3% → 0.5% |     4 → 7 | `newString`                    | `java.lang.StringLatin1`                           |
|  +60.0% |    +3 |   0.4% → 0.6% |     5 → 8 | `allocateInstance`             | `jdk.internal.misc.Unsafe`                         |
|  +50.0% |    +3 |   0.5% → 0.7% |     6 → 9 | `newNode`                      | `java.util.LinkedHashMap`                          |
| +100.0% |    +3 |   0.2% → 0.5% |     3 → 6 | `<init>`                       | `jdk.internal.org.objectweb.asm.ByteVector`        |
| +300.0% |    +3 |   0.1% → 0.3% |     1 → 4 | `initClassName`                | `java.lang.Class`                                  |
|     new |    +3 |   0.0% → 0.2% |     0 → 3 | `unmodifiableList`             | `java.util.Collections`                            |
|  +25.0% |    +2 |   0.6% → 0.8% |    8 → 10 | `<init>`                       | `java.util.HashSet`                                |
|  +14.3% |    +2 |   1.1% → 1.2% |   14 → 16 | `grow`                         | `java.util.ArrayList`                              |
|  +40.0% |    +2 |   0.4% → 0.5% |     5 → 7 | `defineClass1`                 | `java.lang.ClassLoader`                            |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `<init>`                       | `kotlin.collections.builders.SetBuilder`           |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `joinToString`                 | `kotlin.collections.CollectionsKt___CollectionsKt` |
|  +66.7% |    +2 |   0.2% → 0.4% |     3 → 5 | `to`                           | `kotlin.TuplesKt`                                  |
|     new |    +2 |   0.0% → 0.2% |     0 → 2 | `newStringUTF8NoRepl`          | `java.lang.String`                                 |
| +200.0% |    +2 |   0.1% → 0.2% |     1 → 3 | `<init>`                       | `jdk.internal.org.objectweb.asm.SymbolTable`       |

##### Ours

|  Change | Delta |           % | Samples | Function                 | Location                                                                        |
| ------: | ----: | ----------: | ------: | ------------------------ | ------------------------------------------------------------------------------- |
|  +77.8% |   +21 | 2.1% → 3.7% | 27 → 48 | `<init>`                 | `org.jetbrains.kotlin.protobuf.ByteString$Output`                               |
| +100.0% |    +8 | 0.6% → 1.2% |  8 → 16 | `newInstance`            | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                               |
| +125.0% |    +5 | 0.3% → 0.7% |   4 → 9 | `<init>`                 | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                |
| +300.0% |    +3 | 0.1% → 0.3% |   1 → 4 | `build`                  | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`              |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `newFieldMap`            | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                  |
| +150.0% |    +3 | 0.2% → 0.4% |   2 → 5 | `<init>`                 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`    |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `toIrAnnotations`        | `org.jetbrains.kotlin.fir.backend.generators.AnnotationGenerator`               |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `<init>`                 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.CFGNode`                              |
|     new |    +3 | 0.0% → 0.2% |   0 → 3 | `loadAnnotation`         | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`               |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `parsePartialFrom`       | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`                        |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `<init>`                 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                   |
|  +66.7% |    +2 | 0.2% → 0.4% |   3 → 5 | `loadAllClassesFromJars` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                          |
|  +28.6% |    +2 | 0.6% → 0.7% |   7 → 9 | `newOutput`              | `org.jetbrains.kotlin.protobuf.ByteString`                                      |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `convertCallExpression`  | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirExpressionBuilder` |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `implicit`               | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable$Companion`                   |
| +200.0% |    +2 | 0.1% → 0.2% |   1 → 3 | `visitVarInsn`           | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                               |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `getArgumentTypes`       | `org.jetbrains.org.objectweb.asm.Type`                                          |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `enqueueResolutionTasks` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver`                 |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `allocateStartMarker`    | `com.intellij.lang.impl.MarkerPool`                                             |
|     new |    +2 | 0.0% → 0.2% |   0 → 2 | `push`                   | `org.jetbrains.org.objectweb.asm.Frame`                                         |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |   Samples | Function                        | Location                                                                                           |
| ------: | ----: | ------------: | --------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -77.8% |    -7 |   0.7% → 0.2% |     9 → 2 | `<init>`                        | `java.util.ArrayList`                                                                              |
|  -16.1% |    -5 |   2.5% → 2.0% |   31 → 26 | `copyOfRangeByte`               | `java.util.Arrays`                                                                                 |
|  -33.3% |    -5 |   1.2% → 0.8% |   15 → 10 | `resize`                        | `java.util.HashMap`                                                                                |
|  -36.4% |    -4 |   0.9% → 0.5% |    11 → 7 | `<init>`                        | `java.lang.AbstractStringBuilder`                                                                  |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `iterator`                      | `java.util.LinkedHashMap$LinkedEntrySet`                                                           |
|  -60.0% |    -3 |   0.4% → 0.2% |     5 → 2 | `accept`                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|  -27.3% |    -3 |   0.9% → 0.6% |    11 → 8 | `<init>`                        | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
|  -50.0% |    -3 |   0.5% → 0.2% |     6 → 3 | `parsePartialFrom`              | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|   -1.1% |    -3 | 21.4% → 20.4% | 269 → 266 | `copyOf`                        | `java.util.Arrays`                                                                                 |
|   -4.3% |    -3 |   5.6% → 5.1% |   70 → 67 | `clone`                         | `java.lang.Object`                                                                                 |
|  -42.9% |    -3 |   0.6% → 0.3% |     7 → 4 | `ensureCapacity`                | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -30.0% |    -3 |   0.8% → 0.5% |    10 → 7 | `box-impl`                      | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
|  -75.0% |    -3 |   0.3% → 0.1% |     4 → 1 | `iterator`                      | `org.jetbrains.kotlin.utils.SmartList`                                                             |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `iterator`                      | `kotlin.ranges.IntProgression`                                                                     |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `processLevel`                  | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                             |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `approximateToSuperType`        | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                              |
|  -50.0% |    -2 |   0.3% → 0.2% |     4 → 2 | `toIrType`                      | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                                             |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `addConstantMemberReference`    | `jdk.internal.org.objectweb.asm.SymbolTable`                                                       |
|  -40.0% |    -2 |   0.4% → 0.2% |     5 → 3 | `toArray`                       | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
|  -50.0% |    -2 |   0.3% → 0.2% |     4 → 2 | `simplifyKnownSafeCallPatterns` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### Standard library

|  Change | Delta |             % |   Samples | Function                     | Location                                                                              |
| ------: | ----: | ------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------------- |
|  -77.8% |    -7 |   0.7% → 0.2% |     9 → 2 | `<init>`                     | `java.util.ArrayList`                                                                 |
|  -16.1% |    -5 |   2.5% → 2.0% |   31 → 26 | `copyOfRangeByte`            | `java.util.Arrays`                                                                    |
|  -33.3% |    -5 |   1.2% → 0.8% |   15 → 10 | `resize`                     | `java.util.HashMap`                                                                   |
|  -36.4% |    -4 |   0.9% → 0.5% |    11 → 7 | `<init>`                     | `java.lang.AbstractStringBuilder`                                                     |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `iterator`                   | `java.util.LinkedHashMap$LinkedEntrySet`                                              |
|   -1.1% |    -3 | 21.4% → 20.4% | 269 → 266 | `copyOf`                     | `java.util.Arrays`                                                                    |
|   -4.3% |    -3 |   5.6% → 5.1% |   70 → 67 | `clone`                      | `java.lang.Object`                                                                    |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `iterator`                   | `kotlin.ranges.IntProgression`                                                        |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `addConstantMemberReference` | `jdk.internal.org.objectweb.asm.SymbolTable`                                          |
|  -28.6% |    -2 |   0.6% → 0.4% |     7 → 5 | `<init>`                     | `kotlin.collections.builders.MapBuilder`                                              |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `asList`                     | `java.util.Arrays`                                                                    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `builder`                    | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap`        |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `plus`                       | `kotlin.collections.CollectionsKt___CollectionsKt`                                    |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `<init>`                     | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |
|  -20.0% |    -1 |   0.4% → 0.3% |     5 → 4 | `addConstantUtf8`            | `jdk.internal.org.objectweb.asm.SymbolTable`                                          |
|  -25.0% |    -1 |   0.3% → 0.2% |     4 → 3 | `copyOfRange`                | `java.util.Arrays`                                                                    |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `listIterator`               | `java.util.AbstractList`                                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `subList`                    | `java.util.AbstractList`                                                              |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `<init>`                     | `java.lang.invoke.InnerClassLambdaMetafactory`                                        |
|  -25.0% |    -1 |   0.3% → 0.2% |     4 → 3 | `allocateInstance`           | `java.lang.invoke.DirectMethodHandle`                                                 |

##### Ours

|  Change | Delta |           % | Samples | Function                                    | Location                                                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -60.0% |    -3 | 0.4% → 0.2% |   5 → 2 | `accept`                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|  -27.3% |    -3 | 0.9% → 0.6% |  11 → 8 | `<init>`                                    | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
|  -50.0% |    -3 | 0.5% → 0.2% |   6 → 3 | `parsePartialFrom`                          | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|  -42.9% |    -3 | 0.6% → 0.3% |   7 → 4 | `ensureCapacity`                            | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -30.0% |    -3 | 0.8% → 0.5% |  10 → 7 | `box-impl`                                  | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
|  -75.0% |    -3 | 0.3% → 0.1% |   4 → 1 | `iterator`                                  | `org.jetbrains.kotlin.utils.SmartList`                                                             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `processLevel`                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask`                             |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `approximateToSuperType`                    | `org.jetbrains.kotlin.types.AbstractTypeApproximator`                                              |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `toIrType`                                  | `org.jetbrains.kotlin.fir.backend.Fir2IrTypeConverter`                                             |
|  -40.0% |    -2 | 0.4% → 0.2% |   5 → 3 | `toArray`                                   | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
|  -50.0% |    -2 | 0.3% → 0.2% |   4 → 2 | `simplifyKnownSafeCallPatterns`             | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `topLevel`                                  | `org.jetbrains.kotlin.name.FqName$Companion`                                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `withAttributes`                            | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `IrSimpleTypeImpl`                          | `org.jetbrains.kotlin.ir.types.impl.IrSimpleTypeImplKt`                                            |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `getAnnotationsByClassId`                   | `org.jetbrains.kotlin.fir.declarations.FirAnnotationUtilsKt`                                       |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `analyzeMethodNodeWithInterpreter$lambda$0` | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt`                                          |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `freeze`                                    | `org.jetbrains.kotlin.fir.resolve.dfa.MutableFlow`                                                 |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `hashCode`                                  | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                                |
| removed |    -2 | 0.2% → 0.0% |   2 → 0 | `defaultType`                               | `org.jetbrains.kotlin.fir.resolve.ScopeUtilsKt`                                                    |
| removed |    -1 | 0.1% → 0.0% |   1 → 0 | `collectCandidates`                         | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                                           |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |       Samples | Function                                   | Location                                                            |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
|    new |  +637 |  0.0% → 48.8% |       0 → 637 | `invokeStatic`                             | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000`                |
|    new |  +637 |  0.0% → 48.8% |       0 → 637 | `invoke`                                   | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`                 |
| +12.1% |   +48 | 31.7% → 34.2% |     398 → 446 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`    |
|  +3.7% |   +47 |         99.9% | 1,256 → 1,303 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                         |
|  +3.7% |   +47 |         99.9% | 1,256 → 1,303 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                         |
| +42.4% |   +42 |  7.9% → 10.8% |      99 → 141 | `processSymbolsByName`                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |
|  +6.3% |   +38 | 47.8% → 49.0% |     601 → 639 | `invoke`                                   | `java.lang.reflect.Method`                                          |
| +52.1% |   +38 |   5.8% → 8.5% |      73 → 111 | `parsePartialFrom`                         | `org.jetbrains.kotlin.protobuf.AbstractParser`                      |
|  +6.2% |   +37 | 47.8% → 48.9% |     601 → 638 | `invokeExact_MT`                           | `java.lang.invoke.Invokers$Holder`                                  |
| +14.9% |   +36 | 19.3% → 21.3% |     242 → 278 | `transformDeclarations`                    | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`            |
|  +6.2% |   +36 | 46.5% → 47.6% |     585 → 621 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                        |
|  +6.2% |   +36 | 46.5% → 47.6% |     585 → 621 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                       |
|  +6.0% |   +36 | 47.8% → 48.8% |     601 → 637 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`              |
|  +6.0% |   +36 | 47.8% → 48.8% |     601 → 637 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                        |
|  +6.0% |   +36 | 47.8% → 48.8% |     601 → 637 | `invokeImpl`                               | `jdk.internal.reflect.DirectMethodHandleAccessor`                   |
|  +6.0% |   +36 | 47.8% → 48.8% |     601 → 637 | `invoke`                                   | `jdk.internal.reflect.DirectMethodHandleAccessor`                   |
| +14.3% |   +35 | 19.4% → 21.4% |     244 → 279 | `transformInplace`                         | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`            |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |

##### Standard library

|  Change | Delta |             % |   Samples | Function            | Location                                             |
| ------: | ----: | ------------: | --------: | ------------------- | ---------------------------------------------------- |
|     new |  +637 |  0.0% → 48.8% |   0 → 637 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000000801008000` |
|     new |  +637 |  0.0% → 48.8% |   0 → 637 | `invoke`            | `java.lang.invoke.LambdaForm$MH.0x0000000801009400`  |
|   +6.3% |   +38 | 47.8% → 49.0% | 601 → 639 | `invoke`            | `java.lang.reflect.Method`                           |
|   +6.2% |   +37 | 47.8% → 48.9% | 601 → 638 | `invokeExact_MT`    | `java.lang.invoke.Invokers$Holder`                   |
|   +6.0% |   +36 | 47.8% → 48.8% | 601 → 637 | `invokeImpl`        | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|   +6.0% |   +36 | 47.8% → 48.8% | 601 → 637 | `invoke`            | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|     new |   +34 |   0.0% → 2.6% |    0 → 34 | `invokeStatic`      | `java.lang.invoke.LambdaForm$DMH.0x0000000801230000` |
|  +84.2% |   +16 |   1.5% → 2.7% |   19 → 35 | `loadClass`         | `java.lang.ClassLoader`                              |
|  +33.3% |   +12 |   2.9% → 3.7% |   36 → 48 | `getValue`          | `kotlin.SafePublicationLazyImpl`                     |
| +225.0% |    +9 |   0.3% → 1.0% |    4 → 13 | `getBytes`          | `jdk.internal.loader.Resource`                       |
| +225.0% |    +9 |   0.3% → 1.0% |    4 → 13 | `getBytes`          | `jdk.internal.loader.URLClassPath$JarLoader$2`       |
|  +90.0% |    +9 |   0.8% → 1.5% |   10 → 19 | `executePrivileged` | `java.security.AccessController`                     |
|  +90.0% |    +9 |   0.8% → 1.5% |   10 → 19 | `doPrivileged`      | `java.security.AccessController`                     |
| +133.3% |    +8 |   0.5% → 1.1% |    6 → 14 | `replace`           | `java.lang.StringLatin1`                             |
| +133.3% |    +8 |   0.5% → 1.1% |    6 → 14 | `replace`           | `java.lang.String`                                   |
|  +27.6% |    +8 |   2.3% → 2.8% |   29 → 37 | `linkCallSiteImpl`  | `java.lang.invoke.MethodHandleNatives`               |
|  +27.6% |    +8 |   2.3% → 2.8% |   29 → 37 | `linkCallSite`      | `java.lang.invoke.MethodHandleNatives`               |
| +160.0% |    +8 |   0.4% → 1.0% |    5 → 13 | `defineClass`       | `java.net.URLClassLoader`                            |
|  +24.1% |    +7 |   2.3% → 2.8% |   29 → 36 | `metafactory`       | `java.lang.invoke.LambdaMetafactory`                 |
|  +24.1% |    +7 |   2.3% → 2.8% |   29 → 36 | `invoke`            | `java.lang.invoke.BootstrapMethodInvoker`            |

##### Ours

| Change | Delta |             % |       Samples | Function                                   | Location                                                            |
| -----: | ----: | ------------: | ------------: | ------------------------------------------ | ------------------------------------------------------------------- |
| +12.1% |   +48 | 31.7% → 34.2% |     398 → 446 | `executePhase`                             | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`    |
|  +3.7% |   +47 |         99.9% | 1,256 → 1,303 | `run`                                      | `org.jetbrains.kotlin.preloading.Preloader`                         |
|  +3.7% |   +47 |         99.9% | 1,256 → 1,303 | `main`                                     | `org.jetbrains.kotlin.preloading.Preloader`                         |
| +42.4% |   +42 |  7.9% → 10.8% |      99 → 141 | `processSymbolsByName`                     | `org.jetbrains.kotlin.fir.scopes.impl.FirDefaultStarImportingScope` |
| +52.1% |   +38 |   5.8% → 8.5% |      73 → 111 | `parsePartialFrom`                         | `org.jetbrains.kotlin.protobuf.AbstractParser`                      |
| +14.9% |   +36 | 19.3% → 21.3% |     242 → 278 | `transformDeclarations`                    | `org.jetbrains.kotlin.fir.declarations.impl.FirFileImpl`            |
|  +6.2% |   +36 | 46.5% → 47.6% |     585 → 621 | `doExecutePhased`                          | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                        |
|  +6.2% |   +36 | 46.5% → 47.6% |     585 → 621 | `execImpl`                                 | `org.jetbrains.kotlin.cli.common.CLICompiler`                       |
|  +6.0% |   +36 | 47.8% → 48.8% |     601 → 637 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`              |
|  +6.0% |   +36 | 47.8% → 48.8% |     601 → 637 | `main`                                     | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                        |
| +14.3% |   +35 | 19.4% → 21.4% |     244 → 279 | `transformInplace`                         | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`            |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `runPhasedPipeline`                        | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `executeAndReturnPipeLineArtifact`         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `executeAndReturnPipeLineArtifact$default` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  +6.0% |   +35 | 46.5% → 47.5% |     585 → 620 | `execute`                                  | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`             |
|  +5.8% |   +35 | 47.7% → 48.6% |     599 → 634 | `exec`                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                       |
|  +5.8% |   +35 | 47.7% → 48.6% |     599 → 634 | `doMainNoExit`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`             |
|  +5.8% |   +35 | 47.7% → 48.7% |     600 → 635 | `doMain`                                   | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`             |
| +50.0% |   +35 |   5.6% → 8.1% |      70 → 105 | `parseFrom`                                | `org.jetbrains.kotlin.protobuf.AbstractParser`                      |
| +22.4% |   +34 | 12.1% → 14.3% |     152 → 186 | `getValue`                                 | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache`              |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change | Delta |            % | Samples | Function                   | Location                                                                                                 |
| ------: | ----: | -----------: | ------: | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed |  -601 | 47.8% → 0.0% | 601 → 0 | `invokeStatic`             | `java.lang.invoke.LambdaForm$DMH.0x000000c801008000`                                                     |
| removed |  -601 | 47.8% → 0.0% | 601 → 0 | `invoke`                   | `java.lang.invoke.LambdaForm$MH.0x000000c801009400`                                                      |
| removed |   -26 |  2.1% → 0.0% |  26 → 0 | `invokeStatic`             | `java.lang.invoke.LambdaForm$DMH.0x000000c801230000`                                                     |
|  -50.0% |   -20 |  3.2% → 1.5% | 40 → 20 | `performTransformations`   | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                    |
|  -42.5% |   -17 |  3.2% → 1.8% | 40 → 23 | `invokeSuspend`            | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
|  -41.5% |   -17 |  3.3% → 1.8% | 41 → 24 | `processCandidate`         | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
|  -41.5% |   -17 |  3.3% → 1.8% | 41 → 24 | `processCandidate$default` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
|  -44.7% |   -17 |  3.0% → 1.6% | 38 → 21 | `transform`                | `org.jetbrains.kotlin.fir.declarations.FirProperty`                                                      |
|  -41.0% |   -16 |  3.1% → 1.8% | 39 → 23 | `visitStatement`           | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                                    |
|  -41.0% |   -16 |  3.1% → 1.8% | 39 → 23 | `visitExpression`          | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                                    |
|  -38.1% |   -16 |  3.3% → 2.0% | 42 → 26 | `transform`                | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`                       |
|  -48.5% |   -16 |  2.6% → 1.3% | 33 → 17 | `transformProperty`        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
|  -48.5% |   -16 |  2.6% → 1.3% | 33 → 17 | `transformProperty`        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|  -42.9% |   -15 |  2.8% → 1.5% | 35 → 20 | `visitElement`             | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
|  -39.5% |   -15 |  3.0% → 1.8% | 38 → 23 | `visitAnnotationContainer` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
|  -39.5% |   -15 |  3.0% → 1.8% | 38 → 23 | `visitBlock`               | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
|  -38.5% |   -15 |  3.1% → 1.8% | 39 → 24 | `accept`                   | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                          |
|  -45.5% |   -15 |  2.6% → 1.4% | 33 → 18 | `acceptChildren`           | `org.jetbrains.kotlin.fir.expressions.impl.FirBlockImpl`                                                 |
|  -34.9% |   -15 |  3.4% → 2.1% | 43 → 28 | `visitEnd`                 | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`                                               |
|  -34.9% |   -15 |  3.4% → 2.1% | 43 → 28 | `visitEnd`                 | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                          |

##### Standard library

|  Change | Delta |             % |   Samples | Function                     | Location                                                                       |
| ------: | ----: | ------------: | --------: | ---------------------------- | ------------------------------------------------------------------------------ |
| removed |  -601 |  47.8% → 0.0% |   601 → 0 | `invokeStatic`               | `java.lang.invoke.LambdaForm$DMH.0x000000c801008000`                           |
| removed |  -601 |  47.8% → 0.0% |   601 → 0 | `invoke`                     | `java.lang.invoke.LambdaForm$MH.0x000000c801009400`                            |
| removed |   -26 |   2.1% → 0.0% |    26 → 0 | `invokeStatic`               | `java.lang.invoke.LambdaForm$DMH.0x000000c801230000`                           |
|  -81.8% |    -9 |   0.9% → 0.2% |    11 → 2 | `<init>`                     | `java.util.ArrayList`                                                          |
|   -6.7% |    -7 |   8.4% → 7.5% |  105 → 98 | `resumeWith`                 | `kotlin.coroutines.jvm.internal.BaseContinuationImpl`                          |
|   -2.1% |    -7 | 26.9% → 25.4% | 338 → 331 | `copyOf`                     | `java.util.Arrays`                                                             |
|  -62.5% |    -5 |   0.6% → 0.2% |     8 → 3 | `addConstantMethodref`       | `jdk.internal.org.objectweb.asm.SymbolTable`                                   |
|  -62.5% |    -5 |   0.6% → 0.2% |     8 → 3 | `visitMethodInsn`            | `jdk.internal.org.objectweb.asm.MethodWriter`                                  |
|  -16.1% |    -5 |   2.5% → 2.0% |   31 → 26 | `copyOfRangeByte`            | `java.util.Arrays`                                                             |
|  -14.3% |    -5 |   2.8% → 2.3% |   35 → 30 | `copyOfRange`                | `java.util.Arrays`                                                             |
|  -21.7% |    -5 |   1.8% → 1.4% |   23 → 18 | `grow`                       | `java.util.ArrayList`                                                          |
|   -1.7% |    -5 | 23.9% → 22.7% | 301 → 296 | `toByteArray`                | `java.io.ByteArrayOutputStream`                                                |
|  -33.3% |    -5 |   1.2% → 0.8% |   15 → 10 | `resize`                     | `java.util.HashMap`                                                            |
| removed |    -5 |   0.4% → 0.0% |     5 → 0 | `plus`                       | `kotlin.collections.CollectionsKt___CollectionsKt`                             |
|  -50.0% |    -4 |   0.6% → 0.3% |     8 → 4 | `addConstantMemberReference` | `jdk.internal.org.objectweb.asm.SymbolTable`                                   |
|  -19.0% |    -4 |   1.7% → 1.3% |   21 → 17 | `add`                        | `java.util.ArrayList`                                                          |
|  -36.4% |    -4 |   0.9% → 0.5% |    11 → 7 | `<init>`                     | `java.lang.AbstractStringBuilder`                                              |
|  -36.4% |    -4 |   0.9% → 0.5% |    11 → 7 | `<init>`                     | `java.lang.StringBuilder`                                                      |
| removed |    -4 |   0.3% → 0.0% |     4 → 0 | `builder`                    | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |
|  -80.0% |    -4 |   0.4% → 0.1% |     5 → 1 | `addAll`                     | `java.util.ArrayList`                                                          |

##### Ours

| Change | Delta |           % | Samples | Function                    | Location                                                                                                 |
| -----: | ----: | ----------: | ------: | --------------------------- | -------------------------------------------------------------------------------------------------------- |
| -50.0% |   -20 | 3.2% → 1.5% | 40 → 20 | `performTransformations`    | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                                    |
| -42.5% |   -17 | 3.2% → 1.8% | 40 → 23 | `invokeSuspend`             | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                 |
| -41.5% |   -17 | 3.3% → 1.8% | 41 → 24 | `processCandidate`          | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -41.5% |   -17 | 3.3% → 1.8% | 41 → 24 | `processCandidate$default`  | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner`                                    |
| -44.7% |   -17 | 3.0% → 1.6% | 38 → 21 | `transform`                 | `org.jetbrains.kotlin.fir.declarations.FirProperty`                                                      |
| -41.0% |   -16 | 3.1% → 1.8% | 39 → 23 | `visitStatement`            | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                                    |
| -41.0% |   -16 | 3.1% → 1.8% | 39 → 23 | `visitExpression`           | `org.jetbrains.kotlin.fir.visitors.FirDefaultVisitor`                                                    |
| -38.1% |   -16 | 3.3% → 2.0% | 42 → 26 | `transform`                 | `org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer`                       |
| -48.5% |   -16 | 2.6% → 1.3% | 33 → 17 | `transformProperty`         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -48.5% |   -16 | 2.6% → 1.3% | 33 → 17 | `transformProperty`         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| -42.9% |   -15 | 2.8% → 1.5% | 35 → 20 | `visitElement`              | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
| -39.5% |   -15 | 3.0% → 1.8% | 38 → 23 | `visitAnnotationContainer`  | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
| -39.5% |   -15 | 3.0% → 1.8% | 38 → 23 | `visitBlock`                | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
| -38.5% |   -15 | 3.1% → 1.8% | 39 → 24 | `accept`                    | `org.jetbrains.kotlin.fir.expressions.FirBlock`                                                          |
| -45.5% |   -15 | 2.6% → 1.4% | 33 → 18 | `acceptChildren`            | `org.jetbrains.kotlin.fir.expressions.impl.FirBlockImpl`                                                 |
| -34.9% |   -15 | 3.4% → 2.1% | 43 → 28 | `visitEnd`                  | `org.jetbrains.kotlin.codegen.TransformationMethodVisitor`                                               |
| -34.9% |   -15 | 3.4% → 2.1% | 43 → 28 | `visitEnd`                  | `org.jetbrains.org.objectweb.asm.MethodVisitor`                                                          |
| -46.9% |   -15 | 2.5% → 1.3% | 32 → 17 | `transformLocalVariable`    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`           |
| -50.0% |   -14 | 2.2% → 1.1% | 28 → 14 | `visitWithCallOrAssignment` | `org.jetbrains.kotlin.fir.analysis.collectors.AbstractDiagnosticCollectorVisitor`                        |
| -19.4% |   -14 | 5.7% → 4.4% | 72 → 58 | `accept`                    | `org.jetbrains.kotlin.fir.declarations.FirNamedFunction`                                                 |
