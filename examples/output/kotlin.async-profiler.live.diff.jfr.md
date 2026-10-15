# Allocated heap profile diff

Allocated 658 MiB → 612 MiB (-45.499 MiB, -6.9%) over 1,309 samples → 1,218 samples (515 KiB per sample).

| Category         | Change |       Delta |             % |              Size |     Samples |
| ---------------- | -----: | ----------: | ------------: | ----------------: | ----------: |
| Standard library |  -9.8% | -50.999 MiB | 79.0% → 76.5% | 520 MiB → 469 MiB | 1,033 → 931 |
| Ours             |  +4.0% |  +5.499 MiB | 21.0% → 23.5% | 138 MiB → 144 MiB |   276 → 287 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |          Delta |           % |               Size | Samples | Function                                                                              | Location                                                                         |
| ------: | -------------: | ----------: | -----------------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| +233.3% |     +3.499 MiB | 0.2% → 0.8% |    1.5 MiB → 5 MiB |  3 → 10 | `allocateInstance(Class)`                                                             | `jdk.internal.misc.Unsafe`                                                       |
| +166.7% |     +2.499 MiB | 0.2% → 0.7% |    1.5 MiB → 4 MiB |   3 → 8 | `copyOfRange(byte[], int, int)`                                                       | `java.util.Arrays`                                                               |
| +250.0% |     +2.499 MiB | 0.2% → 0.6% |    1 MiB → 3.5 MiB |   2 → 7 | `enlarge(int)`                                                                        | `jdk.internal.org.objectweb.asm.ByteVector`                                      |
| +100.0% |     +1.999 MiB | 0.3% → 0.7% |      2 MiB → 4 MiB |   4 → 8 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                           |
| +133.3% |     +1.999 MiB | 0.2% → 0.6% |  1.5 MiB → 3.5 MiB |   3 → 7 | `newNode(int, Object, Object, HashMap$Node)`                                          | `java.util.HashMap`                                                              |
|     new |     +1.999 MiB | 0.0% → 0.3% |        0 B → 2 MiB |   0 → 4 | `readUtf(int, int, char[])`                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                    |
|  +57.1% |     +1.999 MiB | 0.5% → 0.9% |  3.5 MiB → 5.5 MiB |  7 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                          | `java.util.LinkedHashMap`                                                        |
|     new |     +1.999 MiB | 0.0% → 0.3% |        0 B → 2 MiB |   0 → 4 | `createScope(IrSymbolOwner)`                                                          | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`        |
|  +75.0% |     +1.499 MiB | 0.3% → 0.6% |    2 MiB → 3.5 MiB |   4 → 7 | `createZipEntry(String)`                                                              | `java.util.zip.ZipInputStream`                                                   |
|  +42.9% |     +1.499 MiB | 0.5% → 0.8% |    3.5 MiB → 5 MiB |  7 → 10 | `copyOf(Object[], int)`                                                               | `java.util.Arrays`                                                               |
| +100.0% |     +1.499 MiB | 0.2% → 0.5% |    1.5 MiB → 3 MiB |   3 → 6 | `create()`                                                                            | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                        |
| +218.6% |     +1.499 MiB | 0.1% → 0.4% | 703 KiB → 2.19 MiB |   1 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                |
| +150.0% |     +1.499 MiB | 0.2% → 0.4% |    1 MiB → 2.5 MiB |   2 → 5 | `build()`                                                                             | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`               |
| +100.0% |     +1.499 MiB | 0.2% → 0.5% |    1.5 MiB → 3 MiB |   3 → 6 | `<init>()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`    |
|     new |     +1.499 MiB | 0.0% → 0.2% |      0 B → 1.5 MiB |   0 → 3 | `stringsToBytes(String[])`                                                            | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`                |
|  +66.7% |         +1 MiB | 0.2% → 0.4% |  1.5 MiB → 2.5 MiB |   3 → 5 | `getBufIfOpen(boolean)`                                                               | `java.io.BufferedInputStream`                                                    |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`                      |
| +100.0% | +1,023.998 KiB | 0.2% → 0.3% |      1 MiB → 2 MiB |   2 → 4 | `addConstantUtf8(String)`                                                             | `jdk.internal.org.objectweb.asm.SymbolTable`                                     |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `toMutableList(Iterable)`                                                             | `kotlin.collections.CollectionsKt___CollectionsKt`                               |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `convertUserType(KtSourceElement, LighterASTNode, boolean)`                           | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### Standard library

|  Change |          Delta |           % |                Size | Samples | Function                                                    | Location                                                    |
| ------: | -------------: | ----------: | ------------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------- |
| +233.3% |     +3.499 MiB | 0.2% → 0.8% |     1.5 MiB → 5 MiB |  3 → 10 | `allocateInstance(Class)`                                   | `jdk.internal.misc.Unsafe`                                  |
| +166.7% |     +2.499 MiB | 0.2% → 0.7% |     1.5 MiB → 4 MiB |   3 → 8 | `copyOfRange(byte[], int, int)`                             | `java.util.Arrays`                                          |
| +250.0% |     +2.499 MiB | 0.2% → 0.6% |     1 MiB → 3.5 MiB |   2 → 7 | `enlarge(int)`                                              | `jdk.internal.org.objectweb.asm.ByteVector`                 |
| +133.3% |     +1.999 MiB | 0.2% → 0.6% |   1.5 MiB → 3.5 MiB |   3 → 7 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.HashMap`                                         |
|  +57.1% |     +1.999 MiB | 0.5% → 0.9% |   3.5 MiB → 5.5 MiB |  7 → 11 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.LinkedHashMap`                                   |
|  +75.0% |     +1.499 MiB | 0.3% → 0.6% |     2 MiB → 3.5 MiB |   4 → 7 | `createZipEntry(String)`                                    | `java.util.zip.ZipInputStream`                              |
|  +42.9% |     +1.499 MiB | 0.5% → 0.8% |     3.5 MiB → 5 MiB |  7 → 10 | `copyOf(Object[], int)`                                     | `java.util.Arrays`                                          |
|  +66.7% |         +1 MiB | 0.2% → 0.4% |   1.5 MiB → 2.5 MiB |   3 → 5 | `getBufIfOpen(boolean)`                                     | `java.io.BufferedInputStream`                               |
|     new | +1,023.998 KiB | 0.0% → 0.2% |         0 B → 1 MiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1` |
| +100.0% | +1,023.998 KiB | 0.2% → 0.3% |       1 MiB → 2 MiB |   2 → 4 | `addConstantUtf8(String)`                                   | `jdk.internal.org.objectweb.asm.SymbolTable`                |
|     new | +1,023.998 KiB | 0.0% → 0.2% |         0 B → 1 MiB |   0 → 2 | `toMutableList(Iterable)`                                   | `kotlin.collections.CollectionsKt___CollectionsKt`          |
|  +40.0% | +1,023.998 KiB | 0.4% → 0.6% |   2.5 MiB → 3.5 MiB |   5 → 7 | `to(Object, Object)`                                        | `kotlin.TuplesKt`                                           |
|     new | +1,023.998 KiB | 0.0% → 0.2% |         0 B → 1 MiB |   0 → 2 | `toMap(Iterable)`                                           | `kotlin.collections.MapsKt__MapsKt`                         |
| +200.0% | +1,023.998 KiB | 0.1% → 0.2% |   512 KiB → 1.5 MiB |   1 → 3 | `iterator()`                                                | `java.util.LinkedHashMap$LinkedValues`                      |
|     new | +1,023.998 KiB | 0.0% → 0.2% |         0 B → 1 MiB |   0 → 2 | `list0(File)`                                               | `java.io.UnixFileSystem`                                    |
|     new | +1,023.998 KiB | 0.0% → 0.2% |         0 B → 1 MiB |   0 → 2 | `read(ByteBuffer)`                                          | `java.nio.channels.Channels$ReadableByteChannelImpl`        |
|     new | +1,023.998 KiB | 0.0% → 0.2% |         0 B → 1 MiB |   0 → 2 | `until(int, int)`                                           | `kotlin.ranges.RangesKt___RangesKt`                         |
|  +15.6% |   +511.999 KiB | 0.5% → 0.6% | 3.21 MiB → 3.71 MiB |   1 → 2 | `initCEN(int, ZipCoder)`                                    | `java.util.zip.ZipFile$Source`                              |
|     new |   +511.999 KiB | 0.0% → 0.1% |       0 B → 512 KiB |   0 → 1 | `visitMethod(int, String, String, String, String[])`        | `jdk.internal.org.objectweb.asm.ClassWriter`                |
|     new |   +511.999 KiB | 0.0% → 0.1% |       0 B → 512 KiB |   0 → 1 | `generateInnerClass()`                                      | `java.lang.invoke.InnerClassLambdaMetafactory`              |

##### Ours

|  Change |          Delta |           % |               Size | Samples | Function                                                                              | Location                                                                              |
| ------: | -------------: | ----------: | -----------------: | ------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| +100.0% |     +1.999 MiB | 0.3% → 0.7% |      2 MiB → 4 MiB |   4 → 8 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                               | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                |
|     new |     +1.999 MiB | 0.0% → 0.3% |        0 B → 2 MiB |   0 → 4 | `readUtf(int, int, char[])`                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                         |
|     new |     +1.999 MiB | 0.0% → 0.3% |        0 B → 2 MiB |   0 → 4 | `createScope(IrSymbolOwner)`                                                          | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`             |
| +100.0% |     +1.499 MiB | 0.2% → 0.5% |    1.5 MiB → 3 MiB |   3 → 6 | `create()`                                                                            | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                             |
| +218.6% |     +1.499 MiB | 0.1% → 0.4% | 703 KiB → 2.19 MiB |   1 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                     |
| +150.0% |     +1.499 MiB | 0.2% → 0.4% |    1 MiB → 2.5 MiB |   2 → 5 | `build()`                                                                             | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                    |
| +100.0% |     +1.499 MiB | 0.2% → 0.5% |    1.5 MiB → 3 MiB |   3 → 6 | `<init>()`                                                                            | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`         |
|     new |     +1.499 MiB | 0.0% → 0.2% |      0 B → 1.5 MiB |   0 → 3 | `stringsToBytes(String[])`                                                            | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`                     |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `convertUserType(KtSourceElement, LighterASTNode, boolean)`                           | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`      |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)`            | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`                               |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |
|  +66.7% | +1,023.998 KiB | 0.2% → 0.4% |  1.5 MiB → 2.5 MiB |   3 → 5 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                   | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                 |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `hashCode()`                                                                          | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`                                   |
|     new | +1,023.998 KiB | 0.0% → 0.2% |        0 B → 1 MiB |   0 → 2 | `<init>()`                                                                            | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`    |
|  +50.0% |   +511.999 KiB |        0.2% |    1 MiB → 1.5 MiB |   2 → 3 | `toString()`                                                                          | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                   |
|   +9.1% |   +511.999 KiB | 0.8% → 1.0% |    5.5 MiB → 6 MiB | 11 → 12 | `newInstance(OutputStream, int)`                                                      | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                     |
| +100.0% |   +511.999 KiB | 0.1% → 0.2% |    512 KiB → 1 MiB |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`                                 |
| +100.0% |   +511.999 KiB | 0.1% → 0.2% |    512 KiB → 1 MiB |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                           | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                   |
|     new |   +511.999 KiB | 0.0% → 0.1% |      0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                                         |
|     new |   +511.999 KiB | 0.0% → 0.1% |      0 B → 512 KiB |   0 → 1 | `readElementValue(AnnotationVisitor, int, String, char[])`                            | `org.jetbrains.org.objectweb.asm.ClassReader`                                         |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |              Size |   Samples | Function                                                    | Location                                                    |
| ------: | ----------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- | ----------------------------------------------------------- |
|  -10.9% | -18.499 MiB | 25.7% → 24.6% | 169 MiB → 151 MiB | 338 → 301 | `<init>(int)`                                               | `java.io.ByteArrayOutputStream`                             |
|   -9.8% | -13.499 MiB | 21.0% → 20.4% | 138 MiB → 125 MiB | 276 → 249 | `copyOf(byte[], int)`                                       | `java.util.Arrays`                                          |
|  -11.1% |  -4.999 MiB |   6.8% → 6.5% |   45 MiB → 40 MiB |   90 → 80 | `clone()`                                                   | `java.lang.Object`                                          |
|  -41.2% |  -3.499 MiB |   1.3% → 0.8% |   8.5 MiB → 5 MiB |   17 → 10 | `resize()`                                                  | `java.util.HashMap`                                         |
|  -63.6% |  -3.499 MiB |   0.8% → 0.3% |   5.5 MiB → 2 MiB |    11 → 4 | `newString(byte[], int, int)`                               | `java.lang.StringLatin1`                                    |
|  -20.6% |  -3.499 MiB |   2.6% → 2.2% | 17 MiB → 13.5 MiB |   34 → 27 | `iterator()`                                                | `java.util.ArrayList`                                       |
|  -75.0% |  -2.999 MiB |   0.6% → 0.2% |     4 MiB → 1 MiB |     8 → 2 | `<init>(int)`                                               | `java.util.ArrayList`                                       |
|  -83.3% |  -2.499 MiB |   0.5% → 0.1% |   3 MiB → 512 KiB |     6 → 1 | `replace(byte[], char, char)`                               | `java.lang.StringLatin1`                                    |
|  -25.0% |  -2.499 MiB |   1.5% → 1.2% |  10 MiB → 7.5 MiB |   20 → 15 | `<init>(int, float, boolean)`                               | `java.util.HashSet`                                         |
|  -14.3% |  -2.499 MiB |   2.7% → 2.4% | 17.5 MiB → 15 MiB |   35 → 30 | `<init>(int)`                                               | `org.jetbrains.kotlin.protobuf.ByteString$Output`           |
|  -71.4% |  -2.499 MiB |   0.5% → 0.2% |   3.5 MiB → 1 MiB |     7 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`             |
|  -62.5% |  -2.499 MiB |   0.6% → 0.2% |   4 MiB → 1.5 MiB |     8 → 3 | `<init>(int)`                                               | `kotlin.collections.builders.MapBuilder`                    |
|  -28.6% |  -1.999 MiB |   1.1% → 0.8% |     7 MiB → 5 MiB |   14 → 10 | `grow(int)`                                                 | `java.util.ArrayList`                                       |
|  -60.0% |  -1.499 MiB |   0.4% → 0.2% |   2.5 MiB → 1 MiB |     5 → 2 | `<init>(InputStream, Inflater, int)`                        | `java.util.zip.InflaterInputStream`                         |
|  -33.3% |  -1.499 MiB |   0.7% → 0.5% |   4.5 MiB → 3 MiB |     9 → 6 | `<init>(int)`                                               | `java.lang.AbstractStringBuilder`                           |
|  -60.0% |  -1.499 MiB |   0.4% → 0.2% |   2.5 MiB → 1 MiB |     5 → 2 | `initClassName()`                                           | `java.lang.Class`                                           |
|  -75.0% |  -1.499 MiB |   0.3% → 0.1% |   2 MiB → 512 KiB |     4 → 1 | `ensureCapacity()`                                          | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`     |
| removed |  -1.499 MiB |   0.2% → 0.0% |     1.5 MiB → 0 B |     3 → 0 | `iterator()`                                                | `java.util.LinkedHashMap$LinkedKeySet`                      |
|  -33.3% |  -1.499 MiB |   0.7% → 0.5% |   4.5 MiB → 3 MiB |     9 → 6 | `box-impl(List)`                                            | `org.jetbrains.kotlin.fir.MutableOrEmptyList`               |
|  -50.0% |  -1.499 MiB |   0.5% → 0.2% |   3 MiB → 1.5 MiB |     6 → 3 | `<init>()`                                                  | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache` |

##### Standard library

|  Change |          Delta |             % |              Size |   Samples | Function                                                                                      | Location                                     |
| ------: | -------------: | ------------: | ----------------: | --------: | --------------------------------------------------------------------------------------------- | -------------------------------------------- |
|  -10.9% |    -18.499 MiB | 25.7% → 24.6% | 169 MiB → 151 MiB | 338 → 301 | `<init>(int)`                                                                                 | `java.io.ByteArrayOutputStream`              |
|   -9.8% |    -13.499 MiB | 21.0% → 20.4% | 138 MiB → 125 MiB | 276 → 249 | `copyOf(byte[], int)`                                                                         | `java.util.Arrays`                           |
|  -11.1% |     -4.999 MiB |   6.8% → 6.5% |   45 MiB → 40 MiB |   90 → 80 | `clone()`                                                                                     | `java.lang.Object`                           |
|  -41.2% |     -3.499 MiB |   1.3% → 0.8% |   8.5 MiB → 5 MiB |   17 → 10 | `resize()`                                                                                    | `java.util.HashMap`                          |
|  -63.6% |     -3.499 MiB |   0.8% → 0.3% |   5.5 MiB → 2 MiB |    11 → 4 | `newString(byte[], int, int)`                                                                 | `java.lang.StringLatin1`                     |
|  -20.6% |     -3.499 MiB |   2.6% → 2.2% | 17 MiB → 13.5 MiB |   34 → 27 | `iterator()`                                                                                  | `java.util.ArrayList`                        |
|  -75.0% |     -2.999 MiB |   0.6% → 0.2% |     4 MiB → 1 MiB |     8 → 2 | `<init>(int)`                                                                                 | `java.util.ArrayList`                        |
|  -83.3% |     -2.499 MiB |   0.5% → 0.1% |   3 MiB → 512 KiB |     6 → 1 | `replace(byte[], char, char)`                                                                 | `java.lang.StringLatin1`                     |
|  -25.0% |     -2.499 MiB |   1.5% → 1.2% |  10 MiB → 7.5 MiB |   20 → 15 | `<init>(int, float, boolean)`                                                                 | `java.util.HashSet`                          |
|  -62.5% |     -2.499 MiB |   0.6% → 0.2% |   4 MiB → 1.5 MiB |     8 → 3 | `<init>(int)`                                                                                 | `kotlin.collections.builders.MapBuilder`     |
|  -28.6% |     -1.999 MiB |   1.1% → 0.8% |     7 MiB → 5 MiB |   14 → 10 | `grow(int)`                                                                                   | `java.util.ArrayList`                        |
|  -60.0% |     -1.499 MiB |   0.4% → 0.2% |   2.5 MiB → 1 MiB |     5 → 2 | `<init>(InputStream, Inflater, int)`                                                          | `java.util.zip.InflaterInputStream`          |
|  -33.3% |     -1.499 MiB |   0.7% → 0.5% |   4.5 MiB → 3 MiB |     9 → 6 | `<init>(int)`                                                                                 | `java.lang.AbstractStringBuilder`            |
|  -60.0% |     -1.499 MiB |   0.4% → 0.2% |   2.5 MiB → 1 MiB |     5 → 2 | `initClassName()`                                                                             | `java.lang.Class`                            |
| removed |     -1.499 MiB |   0.2% → 0.0% |     1.5 MiB → 0 B |     3 → 0 | `iterator()`                                                                                  | `java.util.LinkedHashMap$LinkedKeySet`       |
|  -75.0% |     -1.499 MiB |   0.3% → 0.1% |   2 MiB → 512 KiB |     4 → 1 | `iterator()`                                                                                  | `java.util.AbstractList`                     |
|  -75.0% |     -1.499 MiB |   0.3% → 0.1% |   2 MiB → 512 KiB |     4 → 1 | `arrayOfUninitializedElements(int)`                                                           | `kotlin.collections.builders.ListBuilderKt`  |
|  -50.0% | -1,023.998 KiB |   0.3% → 0.2% |     2 MiB → 1 MiB |     4 → 2 | `<init>(ClassWriter)`                                                                         | `jdk.internal.org.objectweb.asm.SymbolTable` |
| removed | -1,023.998 KiB |   0.2% → 0.0% |       1 MiB → 0 B |     2 → 0 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`         |
|  -40.0% | -1,023.998 KiB |   0.4% → 0.2% | 2.5 MiB → 1.5 MiB |     5 → 3 | `allocateUninitializedArray(Class, int)`                                                      | `jdk.internal.misc.Unsafe`                   |

##### Ours

|  Change |          Delta |           % |              Size | Samples | Function                                                                                 | Location                                                                                             |
| ------: | -------------: | ----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  -14.3% |     -2.499 MiB | 2.7% → 2.4% | 17.5 MiB → 15 MiB | 35 → 30 | `<init>(int)`                                                                            | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                    |
|  -71.4% |     -2.499 MiB | 0.5% → 0.2% |   3.5 MiB → 1 MiB |   7 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                      |
|  -75.0% |     -1.499 MiB | 0.3% → 0.1% |   2 MiB → 512 KiB |   4 → 1 | `ensureCapacity()`                                                                       | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                              |
|  -33.3% |     -1.499 MiB | 0.7% → 0.5% |   4.5 MiB → 3 MiB |   9 → 6 | `box-impl(List)`                                                                         | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                        |
|  -50.0% |     -1.499 MiB | 0.5% → 0.2% |   3 MiB → 1.5 MiB |   6 → 3 | `<init>()`                                                                               | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`                                          |
|  -50.0% | -1,023.998 KiB | 0.3% → 0.2% |     2 MiB → 1 MiB |   4 → 2 | `<init>(byte[], int, boolean)`                                                           | `org.jetbrains.org.objectweb.asm.ClassReader`                                                        |
|  -20.0% | -1,023.998 KiB | 0.8% → 0.7% |     5 MiB → 4 MiB |  10 → 8 | `newOutput()`                                                                            | `org.jetbrains.kotlin.protobuf.ByteString`                                                           |
| removed | -1,023.998 KiB | 0.2% → 0.0% |       1 MiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                              | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`                                 |
|  -33.3% | -1,023.998 KiB | 0.5% → 0.3% |     3 MiB → 2 MiB |   6 → 4 | `<init>(InputStream)`                                                                    | `org.jetbrains.kotlin.protobuf.CodedInputStream`                                                     |
| removed | -1,023.998 KiB | 0.2% → 0.0% |       1 MiB → 0 B |   2 → 0 | `traverseIds(int)`                                                                       | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`                                     |
| removed | -1,023.998 KiB | 0.2% → 0.0% |       1 MiB → 0 B |   2 → 0 | `createFunctionCallArgumentsExitNode(ControlFlowGraphBuilder, FirFunctionCall, CFGNode)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphNodeBuilderKt`                             |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `<init>(String)`                                                                         | `org.jetbrains.kotlin.name.FqName`                                                                   |
| removed | -1,023.998 KiB | 0.2% → 0.0% |       1 MiB → 0 B |   2 → 0 | `toLookupTag(ClassId)`                                                                   | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                             |
| removed | -1,023.998 KiB | 0.2% → 0.0% |       1 MiB → 0 B |   2 → 0 | `rewriteLocalVars()`                                                                     | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |
| removed | -1,023.998 KiB | 0.2% → 0.0% |       1 MiB → 0 B |   2 → 0 | `merge(SymbolTable, Frame, int)`                                                         | `org.jetbrains.org.objectweb.asm.Frame`                                                              |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<clinit>()`                                                                             | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties`                                           |
|  -33.3% |   -511.999 KiB |        0.2% |   1.5 MiB → 1 MiB |   3 → 2 | `accept(ClassVisitor, Attribute[], int)`                                                 | `org.jetbrains.org.objectweb.asm.ClassReader`                                                        |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                              | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1`                          |
| removed |   -511.999 KiB | 0.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `child(Name)`                                                                            | `org.jetbrains.kotlin.name.FqNameUnsafe`                                                             |
|  -25.0% |   -511.999 KiB | 0.3% → 0.2% |   2 MiB → 1.5 MiB |   4 → 3 | `newFieldSet()`                                                                          | `org.jetbrains.kotlin.protobuf.FieldSet`                                                             |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |      % |            Size | Samples | Location                |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------- |
| +166.7% | +2.499 MiB | 100.0% | 1.5 MiB → 4 MiB |   3 → 8 | `java.util.Arrays:3856` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |      % |            Size | Samples | Location                                        |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- |
| +250.0% | +2.499 MiB | 100.0% | 1 MiB → 3.5 MiB |   2 → 7 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |          Delta |     % |          Size | Samples | Location                                                   |
| ------: | -------------: | ----: | ------------: | ------: | ---------------------------------------------------------- |
| +100.0% | +1,023.998 KiB | 50.0% | 1 MiB → 2 MiB |   2 → 4 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:139` |
| +100.0% | +1,023.998 KiB | 50.0% | 1 MiB → 2 MiB |   2 → 4 | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils:151` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |      Delta |      % |              Size | Samples | Location                 |
| ------: | ---------: | -----: | ----------------: | ------: | ------------------------ |
| +133.3% | +1.999 MiB | 100.0% | 1.5 MiB → 3.5 MiB |   3 → 7 | `java.util.HashMap:1909` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |             % |        Size | Samples | Location                                           |
| -----: | ---------: | ------------: | ----------: | ------: | -------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 4 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |              Size | Samples | Location                      |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------- |
| +57.1% | +1.999 MiB | 100.0% | 3.5 MiB → 5.5 MiB |  7 → 11 | `java.util.LinkedHashMap:281` |

##### `createScope(IrSymbolOwner)` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

| Change |      Delta |             % |        Size | Samples | Location                                                                     |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 4 | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext:36` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

| Change |      Delta |      % |            Size | Samples | Location                           |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------- |
| +75.0% | +1.499 MiB | 100.0% | 2 MiB → 3.5 MiB |   4 → 7 | `java.util.zip.ZipInputStream:555` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |            Size | Samples | Location                |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------- |
| +42.9% | +1.499 MiB | 100.0% | 3.5 MiB → 5 MiB |  7 → 10 | `java.util.Arrays:3482` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|  Change |      Delta |      % |            Size | Samples | Location                                                       |
| ------: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |      Delta |      % |               Size | Samples | Location                                                             |
| ------: | ---------: | -----: | -----------------: | ------: | -------------------------------------------------------------------- |
| +218.6% | +1.499 MiB | 100.0% | 703 KiB → 2.19 MiB |   1 → 4 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|  Change |      Delta |      % |            Size | Samples | Location                                                              |
| ------: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------------------- |
| +150.0% | +1.499 MiB | 100.0% | 1 MiB → 2.5 MiB |   2 → 5 | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder:36` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|  Change |          Delta |            % |          Size | Samples | Location                                                                          |
| ------: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------- |
|     new | +1,023.998 KiB | 0.0% → 33.3% |   0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:320` |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:330` |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:334` |
|     new |   +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:316` |
|     new |   +511.999 KiB | 0.0% → 16.7% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |

##### `stringsToBytes(String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`)

| Change |      Delta |             % |          Size | Samples | Location                                                             |
| -----: | ---------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt:60` |

##### `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`)

| Change |  Delta |      % |              Size | Samples | Location                          |
| -----: | -----: | -----: | ----------------: | ------: | --------------------------------- |
| +66.7% | +1 MiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `java.io.BufferedInputStream:181` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`)

| Change |          Delta |             % |        Size | Samples | Location                                                         |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1:5079` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |      % |          Size | Samples | Location                                         |
| ------: | -------------: | -----: | ------------: | ------: | ------------------------------------------------ |
| +100.0% | +1,023.998 KiB | 100.0% | 1 MiB → 2 MiB |   2 → 4 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `toMutableList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change |          Delta |             % |        Size | Samples | Location                                                |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `kotlin.collections.CollectionsKt___CollectionsKt:1512` |

##### `convertUserType(KtSourceElement, LighterASTNode, boolean)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

| Change |        Delta |            % |          Size | Samples | Location                                                                              |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:2594` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder:4782` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

| Change |          Delta |      % |              Size | Samples | Location             |
| -----: | -------------: | -----: | ----------------: | ------: | -------------------- |
| +40.0% | +1,023.998 KiB | 100.0% | 2.5 MiB → 3.5 MiB |   5 → 7 | `kotlin.TuplesKt:44` |

##### `toMap(Iterable)` (`kotlin.collections.MapsKt__MapsKt`)

| Change |          Delta |             % |        Size | Samples | Location                                |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `kotlin.collections.MapsKt__MapsKt:724` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedValues`)

|  Change |          Delta |      % |              Size | Samples | Location                                   |
| ------: | -------------: | -----: | ----------------: | ------: | ------------------------------------------ |
| +200.0% | +1,023.998 KiB | 100.0% | 512 KiB → 1.5 MiB |   1 → 3 | `java.util.LinkedHashMap$LinkedValues:808` |

##### `read(ByteBuffer)` (`java.nio.channels.Channels$ReadableByteChannelImpl`)

| Change |          Delta |             % |        Size | Samples | Location                                                 |
| -----: | -------------: | ------------: | ----------: | ------: | -------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.nio.channels.Channels$ReadableByteChannelImpl:311` |

##### `until(int, int)` (`kotlin.ranges.RangesKt___RangesKt`)

| Change |          Delta |             % |        Size | Samples | Location                                 |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `kotlin.ranges.RangesKt___RangesKt:1131` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |            % |          Size | Samples | Location                            |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------- |
|    new | +511.999 KiB | 0.0% → 13.5% | 0 B → 512 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1744` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |             % |          Size | Samples | Location                                         |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `jdk.internal.org.objectweb.asm.ClassWriter:500` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |        Delta |             % |          Size | Samples | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `java.lang.invoke.InnerClassLambdaMetafactory:302` |

##### `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`)

| Change |          Delta |             % |        Size | Samples | Location                                                    |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass:324` |

##### `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change |        Delta |            % |          Size | Samples | Location                                                                                  |
| -----: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser:117` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser:119` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change |        Delta |              % |            Size | Samples | Location                                                  |
| -----: | -----------: | -------------: | --------------: | ------: | --------------------------------------------------------- |
| +33.3% | +511.999 KiB | 100.0% → 80.0% | 1.5 MiB → 2 MiB |   3 → 4 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:169` |
|    new | +511.999 KiB |   0.0% → 20.0% |   0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:175` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

| Change |          Delta |             % |        Size | Samples | Location                                               |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.resolve.dfa.RealVariable:78` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`)

| Change |          Delta |             % |        Size | Samples | Location                                                                              |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder:22` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |        Delta |             % |            Size | Samples | Location                                                               |
| ------: | -----------: | ------------: | --------------: | ------: | ---------------------------------------------------------------------- |
| +100.0% | +511.999 KiB | 50.0% → 66.7% | 512 KiB → 1 MiB |   1 → 2 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:31` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

| Change |        Delta |      % |            Size | Samples | Location                                              |
| -----: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------- |
|  +9.1% | +511.999 KiB | 100.0% | 5.5 MiB → 6 MiB | 11 → 12 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

|  Change |        Delta |      % |            Size | Samples | Location                                                   |
| ------: | -----------: | -----: | --------------: | ------: | ---------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1:2037` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|  Change |        Delta |      % |            Size | Samples | Location                                                  |
| ------: | -----------: | -----: | --------------: | ------: | --------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

| Change |        Delta |             % |          Size | Samples | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:4951` |

##### `readElementValue(AnnotationVisitor, int, String, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |        Delta |             % |          Size | Samples | Location                                           |
| -----: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.org.objectweb.asm.ClassReader:3285` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------- |
| -10.9% | -18.499 MiB | 100.0% | 169 MiB → 151 MiB | 338 → 301 | `java.io.ByteArrayOutputStream:81` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |   Samples | Location                |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------- |
|  -8.6% | -10.999 MiB | 92.8% → 94.0% | 128 MiB → 117 MiB | 256 → 234 | `java.util.Arrays:3539` |
| -25.0% |  -2.499 MiB |   7.2% → 6.0% |  10 MiB → 7.5 MiB |   20 → 15 | `java.util.Arrays:3541` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Location                |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------- |
| -41.2% | -3.499 MiB | 100.0% | 8.5 MiB → 5 MiB | 17 → 10 | `java.util.HashMap:710` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |            Size | Samples | Location                     |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| -63.6% | -3.499 MiB | 100.0% | 5.5 MiB → 2 MiB |  11 → 4 | `java.lang.StringLatin1:750` |

##### `iterator()` (`java.util.ArrayList`)

| Change |      Delta |      % |              Size | Samples | Location                   |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------- |
| -20.6% | -3.499 MiB | 100.0% | 17 MiB → 13.5 MiB | 34 → 27 | `java.util.ArrayList:1029` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |          Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------: | ------: | ------------------------- |
| -75.0% | -2.999 MiB | 100.0% | 4 MiB → 1 MiB |   8 → 2 | `java.util.ArrayList:156` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |            Size | Samples | Location                     |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| -83.3% | -2.499 MiB | 100.0% | 3 MiB → 512 KiB |   6 → 1 | `java.lang.StringLatin1:317` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |      Delta |      % |             Size | Samples | Location                |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------- |
| -25.0% | -2.499 MiB | 100.0% | 10 MiB → 7.5 MiB | 20 → 15 | `java.util.HashSet:171` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |          Delta |             % |            Size | Samples | Location                                              |
| -----: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------------- |
| -60.0% |     -1.499 MiB |  14.3% → 6.7% | 2.5 MiB → 1 MiB |   5 → 2 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |
|  -6.7% | -1,023.998 KiB | 85.7% → 93.3% | 15 MiB → 14 MiB | 30 → 28 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |      Delta |      % |            Size | Samples | Location                                             |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------- |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

| Change |          Delta |             % |            Size | Samples | Location                                    |
| -----: | -------------: | ------------: | --------------: | ------: | ------------------------------------------- |
| -75.0% |     -1.499 MiB | 50.0% → 33.3% | 2 MiB → 512 KiB |   4 → 1 | `kotlin.collections.builders.MapBuilder:60` |
| -50.0% | -1,023.998 KiB | 50.0% → 66.7% |   2 MiB → 1 MiB |   4 → 2 | `kotlin.collections.builders.MapBuilder:59` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |          Size | Samples | Location                  |
| -----: | ---------: | -----: | ------------: | ------: | ------------------------- |
| -28.6% | -1.999 MiB | 100.0% | 7 MiB → 5 MiB | 14 → 10 | `java.util.ArrayList:239` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |            Size | Samples | Location                               |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `java.util.zip.InflaterInputStream:89` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |      % |            Size | Samples | Location                              |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------- |
| -33.3% | -1.499 MiB | 100.0% | 4.5 MiB → 3 MiB |   9 → 6 | `java.lang.AbstractStringBuilder:101` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |      Delta |      % |            Size | Samples | Location                                                     |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------------------ |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1662` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedKeySet`)

|  Change |      Delta |             % |          Size | Samples | Location                                   |
| ------: | ---------: | ------------: | ------------: | ------: | ------------------------------------------ |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `java.util.LinkedHashMap$LinkedKeySet:700` |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

| Change |          Delta |             % |              Size | Samples | Location                                                       |
| -----: | -------------: | ------------: | ----------------: | ------: | -------------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 50.0% → 33.3% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:55` |
| -33.3% |   -511.999 KiB | 50.0% → 66.7% |   1.5 MiB → 1 MiB |   3 → 2 | `org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache:54` |

##### `iterator()` (`java.util.AbstractList`)

| Change |      Delta |      % |            Size | Samples | Location                     |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `java.util.AbstractList:301` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change |      Delta |      % |            Size | Samples | Location                                        |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `kotlin.collections.builders.ListBuilderKt:624` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |      % |          Size | Samples | Location                                         |
| -----: | -------------: | -----: | ------------: | ------: | ------------------------------------------------ |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change |          Delta |             % |        Size | Samples | Location                                 |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `java.lang.invoke.LambdaMetafactory:331` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |          Delta |      % |              Size | Samples | Location                        |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------- |
| -40.0% | -1,023.998 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `jdk.internal.misc.Unsafe:1380` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |          Delta |      % |          Size | Samples | Location                                          |
| -----: | -------------: | -----: | ------------: | ------: | ------------------------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `org.jetbrains.org.objectweb.asm.ClassReader:214` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

| Change |          Delta |      % |          Size | Samples | Location                                       |
| -----: | -------------: | -----: | ------------: | ------: | ---------------------------------------------- |
| -20.0% | -1,023.998 KiB | 100.0% | 5 MiB → 4 MiB |  10 → 8 | `org.jetbrains.kotlin.protobuf.ByteString:751` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`)

|  Change |          Delta |             % |        Size | Samples | Location                                                                  |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1:2479` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change |          Delta |      % |          Size | Samples | Location                                             |
| -----: | -------------: | -----: | ------------: | ------: | ---------------------------------------------------- |
| -33.3% | -1,023.998 KiB | 100.0% | 3 MiB → 2 MiB |   6 → 4 | `org.jetbrains.kotlin.protobuf.CodedInputStream:911` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

|  Change |        Delta |            % |          Size | Samples | Location                                                            |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:34` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:51` |

##### `createFunctionCallArgumentsExitNode(ControlFlowGraphBuilder, FirFunctionCall, CFGNode)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphNodeBuilderKt`)

|  Change |          Delta |             % |        Size | Samples | Location                                                                     |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphNodeBuilderKt:123` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

| Change |          Delta |      % |              Size | Samples | Location                              |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.kotlin.name.FqName:37` |

##### `toLookupTag(ClassId)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change |          Delta |             % |        Size | Samples | Location                                                    |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:36` |

##### `rewriteLocalVars()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|  Change |          Delta |             % |        Size | Samples | Location                                                                                                 |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod:111` |

##### `merge(SymbolTable, Frame, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

|  Change |          Delta |             % |        Size | Samples | Location                                     |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.Frame:1183` |

##### `<clinit>()` (`org.jetbrains.kotlin.cli.common.CompilerSystemProperties`)

|  Change |        Delta |             % |          Size | Samples | Location                                                      |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties:25` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |        Delta |      % |            Size | Samples | Location                                          |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------------- |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1`)

|  Change |        Delta |             % |          Size | Samples | Location                                                                         |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1:1051` |

##### `child(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|  Change |        Delta |             % |          Size | Samples | Location                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.name.FqNameUnsafe:96` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change |        Delta |      % |            Size | Samples | Location                                    |
| -----: | -----------: | -----: | --------------: | ------: | ------------------------------------------- |
| -25.0% | -511.999 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

|  Change |      Delta |      % |            Size | Samples | Caller                     | Location                              |
| ------: | ---------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------- |
| +233.3% | +3.499 MiB | 100.0% | 1.5 MiB → 5 MiB |  3 → 10 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |      Delta |             % |            Size | Samples | Caller                                | Location           |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------------------- | ------------------ |
| +500.0% | +2.499 MiB | 33.3% → 75.0% | 512 KiB → 3 MiB |   1 → 6 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |        Delta |              % |              Size | Samples | Caller                  | Location                                    |
| ------: | -----------: | -------------: | ----------------: | ------: | ----------------------- | ------------------------------------------- |
| +600.0% |   +2.999 MiB | 50.0% → 100.0% | 512 KiB → 3.5 MiB |   1 → 7 | `putUTF8(String)`       | `jdk.internal.org.objectweb.asm.ByteVector` |
| removed | -511.999 KiB |   50.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `put122(int, int, int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |      Delta |      % |          Size | Samples | Caller                                                                       | Location                                               |
| ------: | ---------: | -----: | ------------: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   4 → 8 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |      Delta |      % |              Size | Samples | Caller                                          | Location            |
| ------: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
| +133.3% | +1.999 MiB | 100.0% | 1.5 MiB → 3.5 MiB |   3 → 7 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |      Delta |             % |        Size | Samples | Caller                 | Location                                      |
| -----: | ---------: | ------------: | ----------: | ------: | ---------------------- | --------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 4 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |              Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
| +57.1% | +1.999 MiB | 100.0% | 3.5 MiB → 5.5 MiB |  7 → 11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `createScope(IrSymbolOwner)` (`org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext`)

| Change |        Delta |            % |          Size | Samples | Caller                                  | Location                                                                  |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------------------------------- |
|    new |   +1.499 MiB | 0.0% → 75.0% | 0 B → 1.5 MiB |   0 → 3 | `visitValueParameter(IrValueParameter)` | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |
|    new | +511.999 KiB | 0.0% → 25.0% | 0 B → 512 KiB |   0 → 1 | `visitFunction(IrFunction)`             | `org.jetbrains.kotlin.backend.common.IrElementTransformerVoidWithContext` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

| Change |      Delta |      % |            Size | Samples | Caller      | Location                       |
| -----: | ---------: | -----: | --------------: | ------: | ----------- | ------------------------------ |
| +75.0% | +1.499 MiB | 100.0% | 2 MiB → 3.5 MiB |   4 → 7 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |            Size | Samples | Caller      | Location                                 |
| -----: | -----------: | ------------: | --------------: | ------: | ----------- | ---------------------------------------- |
| +33.3% | +511.999 KiB | 42.9% → 40.0% | 1.5 MiB → 2 MiB |   3 → 4 | `grow(int)` | `java.util.ArrayList`                    |
| +25.0% | +511.999 KiB | 57.1% → 50.0% | 2 MiB → 2.5 MiB |   4 → 5 | `toArray()` | `java.util.ArrayList`                    |
|    new | +511.999 KiB |  0.0% → 10.0% |   0 B → 512 KiB |   0 → 1 | `copy()`    | `org.jetbrains.kotlin.util.ArrayMapImpl` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

|  Change |      Delta |      % |            Size | Samples | Caller     | Location                                                  |
| ------: | ---------: | -----: | --------------: | ------: | ---------- | --------------------------------------------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

|  Change |        Delta |             % |           Size | Samples | Caller           | Location                                                                                     |
| ------: | -----------: | ------------: | -------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
|     new |   +2.186 MiB | 0.0% → 100.0% | 0 B → 2.19 MiB |   0 → 4 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b001396000` |
| removed | -702.726 KiB | 100.0% → 0.0% |  703 KiB → 0 B |   1 → 0 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000f801396000` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|  Change |          Delta |             % |              Size | Samples | Caller                                                                                                            | Location                                                                           |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| +200.0% | +1,023.998 KiB | 50.0% → 60.0% | 512 KiB → 1.5 MiB |   1 → 3 | `toDefaultResolvedTypeRef(ConeClassLikeLookupTag)`                                                                | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`                  |
|     new | +1,023.998 KiB |  0.0% → 40.0% |       0 B → 1 MiB |   0 → 2 | `typeRef(ProtoBuf$Type)`                                                                                          | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                     |
| removed |   -511.999 KiB |  50.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `transformType(FirTypeRef, ConeKotlinType, ConeDiagnostic, TypeResolutionConfiguration, FirResolvedSymbolOrigin)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|  Change |      Delta |      % |            Size | Samples | Caller                                                                                                | Location                                                                     |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `stringsToBytes(String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt`)

| Change |      Delta |             % |          Size | Samples | Caller                  | Location                                                        |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------- | --------------------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `decodeBytes(String[])` | `org.jetbrains.kotlin.metadata.jvm.deserialization.BitEncoding` |

##### `getBufIfOpen(boolean)` (`java.io.BufferedInputStream`)

| Change |  Delta |      % |              Size | Samples | Caller           | Location                      |
| -----: | -----: | -----: | ----------------: | ------: | ---------------- | ----------------------------- |
| +66.7% | +1 MiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `getBufIfOpen()` | `java.io.BufferedInputStream` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`)

| Change |          Delta |             % |        Size | Samples | Caller                                                      | Location                                                    |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |             % |              Size | Samples | Caller                                                            | Location                                      |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| +200.0% | +1,023.998 KiB | 50.0% → 75.0% | 512 KiB → 1.5 MiB |   1 → 3 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `toMutableList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change |          Delta |             % |        Size | Samples | Caller                             | Location                                           |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------- | -------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `sortedWith(Iterable, Comparator)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `convertUserType(KtSourceElement, LighterASTNode, boolean)` (`org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder`)

| Change |          Delta |             % |        Size | Samples | Caller                                                                                                              | Location                                                                         |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `convertUserType$default(LightTreeRawFirDeclarationBuilder, KtSourceElement, LighterASTNode, boolean, int, Object)` | `org.jetbrains.kotlin.fir.lightTree.converter.LightTreeRawFirDeclarationBuilder` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|  Change |          Delta |            % |          Size | Samples | Caller                                                                                                                               | Location                                                                     |
| ------: | -------------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
|     new | +1,023.998 KiB | 0.0% → 28.6% |   0 B → 1 MiB |   0 → 2 | `addSuccessor(MaxStackFrameSizeAndLocalsCalculator$BasicBlock, Label)`                                                               | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`   |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `resolveUserType(FirUserTypeRef, FirTypeCandidateCollector$TypeResolutionResult, boolean, FirDeclaration, boolean)`                  | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirTypeResolverImpl`        |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `resolveVariableAccessAndSelectCandidateImpl(FirQualifiedAccessExpression, boolean, ResolutionMode, boolean, FirElement, Function1)` | `org.jetbrains.kotlin.fir.resolve.calls.FirCallResolver`                     |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `addInitialEqualityConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)`                   | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector` |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getChild(KtSourceElement, Set, int, int, boolean)`                                                                                  | `org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt`                         |

##### `toMap(Iterable)` (`kotlin.collections.MapsKt__MapsKt`)

| Change |        Delta |            % |          Size | Samples | Caller                                                                           | Location                                             |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `remapMultiFieldValueClassStructure(IrFunction, IrFunction, Map)`                | `org.jetbrains.kotlin.backend.jvm.JvmBackendContext` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `getSubstitutedUnderlyingType(TypeSystemCommonBackendContext, KotlinTypeMarker)` | `org.jetbrains.kotlin.types.ExpandedTypeUtilsKt`     |

##### `iterator()` (`java.util.LinkedHashMap$LinkedValues`)

| Change |        Delta |            % |          Size | Samples | Caller                     | Location                                                                                            |
| -----: | -----------: | -----------: | ------------: | ------: | -------------------------- | --------------------------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `computeConstraintEdges()` | `org.jetbrains.kotlin.resolve.calls.inference.components.TypeVariableDependencyInformationProvider` |
|    new | +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `toList(Iterable)`         | `kotlin.collections.CollectionsKt___CollectionsKt`                                                  |

##### `list0(File)` (`java.io.UnixFileSystem`)

| Change |          Delta |             % |        Size | Samples | Caller       | Location                 |
| -----: | -------------: | ------------: | ----------: | ------: | ------------ | ------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `list(File)` | `java.io.UnixFileSystem` |

##### `read(ByteBuffer)` (`java.nio.channels.Channels$ReadableByteChannelImpl`)

| Change |          Delta |             % |        Size | Samples | Caller             | Location                             |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------ | ------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `read(ByteBuffer)` | `jdk.internal.jrtfs.JrtFileSystem$1` |

##### `until(int, int)` (`kotlin.ranges.RangesKt___RangesKt`)

| Change |        Delta |            % |          Size | Samples | Caller                                                             | Location                                                              |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------ | --------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `captureArguments(ConeTypeContext, ConeKotlinType, CaptureStatus)` | `org.jetbrains.kotlin.fir.types.TypeUtilsKt`                          |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `equalsWith$kotlinx_collections_immutable(TrieNode, Function2)`    | `kotlinx.collections.immutable.implementations.immutableMap.TrieNode` |

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Samples | Caller                                          | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +15.6% | +511.999 KiB | 100.0% | 3.21 MiB → 3.71 MiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `visitMethod(int, String, String, String, String[])` (`jdk.internal.org.objectweb.asm.ClassWriter`)

| Change |        Delta |             % |          Size | Samples | Caller             | Location                                    |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------ | ------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `methodPrologue()` | `java.lang.invoke.InvokerBytecodeGenerator` |

##### `generateInnerClass()` (`java.lang.invoke.InnerClassLambdaMetafactory`)

| Change |        Delta |             % |          Size | Samples | Caller             | Location                                       |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------ | ---------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `spinInnerClass()` | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`)

| Change |          Delta |             % |        Size | Samples | Caller                                                             | Location                                                |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `resolveNameByDesc(String, FileBasedKotlinClass$InnerClassesInfo)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `parseParameterizedClassRefSignature(CharacterIterator, ClassifierResolutionContext)` (`org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser`)

| Change |          Delta |             % |        Size | Samples | Caller                                                                             | Location                                                                              |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `parseTypeWithoutVarianceAndArray(CharacterIterator, ClassifierResolutionContext)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryClassSignatureParser` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change |          Delta |      % |              Size | Samples | Caller                                           | Location                                                      |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `newTypeCheckerState(boolean, boolean, boolean)` | `org.jetbrains.kotlin.types.model.TypeCheckerProviderContext` |

##### `hashCode()` (`org.jetbrains.kotlin.fir.resolve.dfa.RealVariable`)

| Change |        Delta |            % |          Size | Samples | Caller        | Location                                                                              |
| -----: | -----------: | -----------: | ------------: | ------: | ------------- | ------------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `get(Object)` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap`        |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `get(Object)` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMapBuilder` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`)

| Change |        Delta |            % |          Size | Samples | Caller                                                                 | Location                                                                           |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `visitEnd()`                                                           | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `createArgumentMapping(FirSession, ProtoBuf$Annotation, NameResolver)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt`         |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |        Delta |             % |            Size | Samples | Caller                                    | Location                                                     |
| ------: | -----------: | ------------: | --------------: | ------: | ----------------------------------------- | ------------------------------------------------------------ |
| +100.0% | +511.999 KiB | 50.0% → 66.7% | 512 KiB → 1 MiB |   1 → 2 | `getOrCreateDirectory(CharSequence, Map)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |          Delta |            % |              Size | Samples | Caller                                            | Location                                                           |
| ------: | -------------: | -----------: | ----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| +400.0% |     +1.999 MiB | 9.1% → 41.7% | 512 KiB → 2.5 MiB |   1 → 5 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
|  -66.7% | -1,023.998 KiB | 27.3% → 8.3% | 1.5 MiB → 512 KiB |   3 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                  |
| removed |   -511.999 KiB |  9.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmModuleProtoBuf$PackageParts` |
| removed |   -511.999 KiB |  9.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter`            |
| removed |   -511.999 KiB |  9.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `writeTo(OutputStream)`                           | `org.jetbrains.kotlin.protobuf.AbstractMessageLite`                |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

|  Change |        Delta |      % |            Size | Samples | Caller                                                      | Location                                              |
| ------: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|  Change |        Delta |      % |            Size | Samples | Caller                                                      | Location                                            |
| ------: | -----------: | -----: | --------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% | 512 KiB → 1 MiB |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

| Change |        Delta |             % |          Size | Samples | Caller                                                        | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------- | --------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type` |

##### `readElementValue(AnnotationVisitor, int, String, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |        Delta |             % |          Size | Samples | Caller                                                       | Location                                      |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------ | --------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `readElementValues(AnnotationVisitor, int, boolean, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                  | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------ |
| -10.9% | -18.499 MiB | 100.0% | 169 MiB → 151 MiB | 338 → 301 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |       Delta |             % |              Size |   Samples | Caller                        | Location                          |
| -----: | ----------: | ------------: | ----------------: | --------: | ----------------------------- | --------------------------------- |
|  -8.6% | -10.999 MiB | 92.8% → 94.0% | 128 MiB → 117 MiB | 256 → 234 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| -29.4% |  -2.499 MiB |   6.2% → 4.8% |   8.5 MiB → 6 MiB |   17 → 12 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `clone()` (`java.lang.Object`)

|  Change |        Delta |             % |                Size | Samples | Caller                          | Location                                                               |
| ------: | -----------: | ------------: | ------------------: | ------: | ------------------------------- | ---------------------------------------------------------------------- |
|  -11.2% |   -4.999 MiB | 98.9% → 98.8% | 44.5 MiB → 39.5 MiB | 89 → 79 | `copyOf(byte[], int)`           | `java.util.Arrays`                                                     |
| removed | -511.999 KiB |   1.1% → 0.0% |       512 KiB → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays`                                                     |
|     new | +511.999 KiB |   0.0% → 1.3% |       0 B → 512 KiB |   0 → 1 | `values()`                      | `org.jetbrains.kotlin.descriptors.annotations.AnnotationUseSiteTarget` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- | ------------------- |
| -41.2% | -3.499 MiB | 100.0% | 8.5 MiB → 5 MiB | 17 → 10 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |            Size | Samples | Caller                | Location           |
| -----: | ---------: | -----: | --------------: | ------: | --------------------- | ------------------ |
| -63.6% | -3.499 MiB | 100.0% | 5.5 MiB → 2 MiB |  11 → 4 | `substring(int, int)` | `java.lang.String` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |          Delta |           % |          Size | Samples | Caller                                                                        | Location                                                   |
| ------: | -------------: | ----------: | ------------: | ------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed |     -1.499 MiB | 8.8% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `acceptChildren(IrVisitor, Object)`                                           | `org.jetbrains.kotlin.ir.declarations.IrFunction`          |
| removed | -1,023.998 KiB | 5.9% → 0.0% |   1 MiB → 0 B |   2 → 0 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |
| removed | -1,023.998 KiB | 5.9% → 0.0% |   1 MiB → 0 B |   2 → 0 | `acceptChildren(IrVisitor, Object)`                                           | `org.jetbrains.kotlin.ir.declarations.IrClass`             |
|     new | +1,023.998 KiB | 0.0% → 7.4% |   0 B → 1 MiB |   0 → 2 | `zip(Iterable, Iterable)`                                                     | `kotlin.collections.CollectionsKt___CollectionsKt`         |
| removed |   -511.999 KiB | 2.9% → 0.0% | 512 KiB → 0 B |   1 → 0 | `computeImportingScopes(FirFile, FirSession, ScopeSession, boolean, boolean)` | `org.jetbrains.kotlin.fir.scopes.ImportingScopesKt`        |

##### `<init>(int)` (`java.util.ArrayList`)

|  Change |          Delta |            % |          Size | Samples | Caller                                                                                                    | Location                                                                                  |
| ------: | -------------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 25.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `ensureEntryArrayMutable()`                                                                               | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                            |
| removed |   -511.999 KiB | 12.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `plus(Collection, Iterable)`                                                                              | `kotlin.collections.CollectionsKt___CollectionsKt`                                        |
| removed |   -511.999 KiB | 12.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |
| removed |   -511.999 KiB | 12.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                    | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                             |
| removed |   -511.999 KiB | 12.5% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getValueParameterSymbols()`                                                                              | `org.jetbrains.kotlin.fir.symbols.impl.FirFunctionSymbol`                                 |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |            Size | Samples | Caller                | Location           |
| -----: | ---------: | -----: | --------------: | ------: | --------------------- | ------------------ |
| -83.3% | -2.499 MiB | 100.0% | 3 MiB → 512 KiB |   6 → 1 | `replace(char, char)` | `java.lang.String` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |        Delta |             % |              Size | Samples | Caller        | Location                  |
| -----: | -----------: | ------------: | ----------------: | ------: | ------------- | ------------------------- |
| -23.5% |   -1.999 MiB | 85.0% → 86.7% | 8.5 MiB → 6.5 MiB | 17 → 13 | `<init>()`    | `java.util.LinkedHashSet` |
| -33.3% | -511.999 KiB | 15.0% → 13.3% |   1.5 MiB → 1 MiB |   3 → 2 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |      Delta |      % |              Size | Samples | Caller        | Location                                   |
| -----: | ---------: | -----: | ----------------: | ------: | ------------- | ------------------------------------------ |
| -14.3% | -2.499 MiB | 100.0% | 17.5 MiB → 15 MiB | 35 → 30 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |      Delta |      % |            Size | Samples | Caller                                                      | Location                                        |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| -71.4% | -2.499 MiB | 100.0% | 3.5 MiB → 1 MiB |   7 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

| Change |      Delta |      % |            Size | Samples | Caller     | Location                                 |
| -----: | ---------: | -----: | --------------: | ------: | ---------- | ---------------------------------------- |
| -62.5% | -2.499 MiB | 100.0% | 4 MiB → 1.5 MiB |   8 → 3 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |        Delta |              % |            Size | Samples | Caller               | Location              |
| ------: | -----------: | -------------: | --------------: | ------: | -------------------- | --------------------- |
|  -23.1% |   -1.499 MiB | 92.9% → 100.0% | 6.5 MiB → 5 MiB | 13 → 10 | `grow()`             | `java.util.ArrayList` |
| removed | -511.999 KiB |    7.1% → 0.0% |   512 KiB → 0 B |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `<init>(InputStream, Inflater, int)` (`java.util.zip.InflaterInputStream`)

| Change |      Delta |      % |            Size | Samples | Caller                                                                                  | Location                                           |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------- | -------------------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `<init>(ZipFile, ZipFile$ZipFileInputStream, ZipFile$CleanableResource, Inflater, int)` | `java.util.zip.ZipFile$ZipFileInflaterInputStream` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |             % |            Size | Samples | Caller        | Location                  |
| -----: | ---------: | ------------: | --------------: | ------: | ------------- | ------------------------- |
| -75.0% | -1.499 MiB | 44.4% → 16.7% | 2 MiB → 512 KiB |   4 → 1 | `<init>(int)` | `java.lang.StringBuilder` |

##### `initClassName()` (`java.lang.Class`)

| Change |      Delta |      % |            Size | Samples | Caller      | Location          |
| -----: | ---------: | -----: | --------------: | ------: | ----------- | ----------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `getName()` | `java.lang.Class` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

|  Change |          Delta |              % |            Size | Samples | Caller                                                                                    | Location                                                |
| ------: | -------------: | -------------: | --------------: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -1,023.998 KiB |   50.0% → 0.0% |     1 MiB → 0 B |   2 → 0 | `getChildren(LighterASTNode, Ref)`                                                        | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
|  -50.0% |   -511.999 KiB | 50.0% → 100.0% | 1 MiB → 512 KiB |   2 → 1 | `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedKeySet`)

|  Change |      Delta |             % |          Size | Samples | Caller       | Location            |
| ------: | ---------: | ------------: | ------------: | ------: | ------------ | ------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `iterator()` | `java.util.HashSet` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|  Change |          Delta |             % |              Size | Samples | Caller                               | Location                                                                    |
| ------: | -------------: | ------------: | ----------------: | ------: | ------------------------------------ | --------------------------------------------------------------------------- |
| removed |     -1.499 MiB |  33.3% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`            |
| +200.0% | +1,023.998 KiB | 11.1% → 50.0% | 512 KiB → 1.5 MiB |   1 → 3 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirPropertyAccessExpressionImpl` |
| removed |   -511.999 KiB |  11.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `getContextParameters()`             | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`           |
| removed |   -511.999 KiB |  11.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`           |
| removed |   -511.999 KiB |  11.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.declarations.impl.FirReceiverParameterImpl`       |

##### `<init>()` (`org.jetbrains.kotlin.types.AbstractTypeApproximator$Cache`)

|  Change |          Delta |              % |            Size | Samples | Caller                                                                         | Location                                              |
| ------: | -------------: | -------------: | --------------: | ------: | ------------------------------------------------------------------------------ | ----------------------------------------------------- |
| removed | -1,023.998 KiB |   33.3% → 0.0% |     1 MiB → 0 B |   2 → 0 | `approximateToSubType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)`   | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |
|  -25.0% |   -511.999 KiB | 66.7% → 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `approximateToSuperType(KotlinTypeMarker, TypeApproximatorConfiguration, Map)` | `org.jetbrains.kotlin.types.AbstractTypeApproximator` |

##### `iterator()` (`java.util.AbstractList`)

| Change |      Delta |      % |            Size | Samples | Caller       | Location                               |
| -----: | ---------: | -----: | --------------: | ------: | ------------ | -------------------------------------- |
| -75.0% | -1.499 MiB | 100.0% | 2 MiB → 512 KiB |   4 → 1 | `iterator()` | `org.jetbrains.kotlin.utils.SmartList` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

|  Change |          Delta |              % |              Size | Samples | Caller        | Location                                  |
| ------: | -------------: | -------------: | ----------------: | ------: | ------------- | ----------------------------------------- |
|  -66.7% | -1,023.998 KiB | 75.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `<init>(int)` | `kotlin.collections.builders.MapBuilder`  |
| removed |   -511.999 KiB |   25.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<init>(int)` | `kotlin.collections.builders.ListBuilder` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |      % |          Size | Samples | Caller                     | Location                                     |
| -----: | -------------: | -----: | ------------: | ------: | -------------------------- | -------------------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                                 | Location                                             |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change |          Delta |      % |              Size | Samples | Caller           | Location                       |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------- | ------------------------------ |
| -40.0% | -1,023.998 KiB | 100.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `<init>(byte[], int, boolean)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |          Delta |      % |          Size | Samples | Caller                     | Location                                      |
| -----: | -------------: | -----: | ------------: | ------: | -------------------------- | --------------------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `<init>(byte[], int, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `newOutput()` (`org.jetbrains.kotlin.protobuf.ByteString`)

|  Change |          Delta |             % |            Size | Samples | Caller                                            | Location                                                                |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------------------- | ----------------------------------------------------------------------- |
|     new | +1,023.998 KiB |  0.0% → 25.0% |     0 B → 1 MiB |   0 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`                  |
| removed | -1,023.998 KiB |  20.0% → 0.0% |     1 MiB → 0 B |   2 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.jvm.JvmProtoBuf$StringTableTypes$Record` |
|  -33.3% |   -511.999 KiB | 30.0% → 25.0% | 1.5 MiB → 1 MiB |   3 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
|  -33.3% |   -511.999 KiB | 30.0% → 25.0% | 1.5 MiB → 1 MiB |   3 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                     |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                      | Location                                                             |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1` |

##### `<init>(InputStream)` (`org.jetbrains.kotlin.protobuf.CodedInputStream`)

| Change |          Delta |      % |          Size | Samples | Caller                     | Location                                         |
| -----: | -------------: | -----: | ------------: | ------: | -------------------------- | ------------------------------------------------ |
| -33.3% | -1,023.998 KiB | 100.0% | 3 MiB → 2 MiB |   6 → 4 | `newInstance(InputStream)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

|  Change |          Delta |             % |        Size | Samples | Caller                  | Location                                                         |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------- | ---------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `isLocalClassName(int)` | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |

##### `createFunctionCallArgumentsExitNode(ControlFlowGraphBuilder, FirFunctionCall, CFGNode)` (`org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphNodeBuilderKt`)

|  Change |          Delta |             % |        Size | Samples | Caller                                   | Location                                                           |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------- | ------------------------------------------------------------------ |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `enterCallArguments(FirStatement, List)` | `org.jetbrains.kotlin.fir.resolve.dfa.cfg.ControlFlowGraphBuilder` |

##### `<init>(String)` (`org.jetbrains.kotlin.name.FqName`)

|  Change |          Delta |            % |        Size | Samples | Caller                                                                     | Location                                                |
| ------: | -------------: | -----------: | ----------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------- |
| removed | -1,023.998 KiB | 66.7% → 0.0% | 1 MiB → 0 B |   2 → 0 | `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `toLookupTag(ClassId)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change |        Delta |            % |          Size | Samples | Caller                                                                                          | Location                                                                   |
| ------: | -----------: | -----------: | ------------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `loadAnnotation(ClassId, List)`                                                                 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`          |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `deserializeAnnotation(FirSession, ProtoBuf$Annotation, NameResolver, AnnotationUseSiteTarget)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt` |

##### `rewriteLocalVars()` (`org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod`)

|  Change |          Delta |             % |        Size | Samples | Caller        | Location                                                                                             |
| ------: | -------------: | ------------: | ----------: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `transform()` | `org.jetbrains.kotlin.codegen.optimization.LabelNormalizationMethodTransformer$TransformerForMethod` |

##### `merge(SymbolTable, Frame, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

|  Change |          Delta |             % |        Size | Samples | Caller               | Location                                       |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------- | ---------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `computeAllFrames()` | `org.jetbrains.org.objectweb.asm.MethodWriter` |

##### `<clinit>()` (`org.jetbrains.kotlin.cli.common.CompilerSystemProperties`)

|  Change |        Delta |             % |          Size | Samples | Caller                          | Location                                                |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------- | ------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change |        Delta |      % |            Size | Samples | Caller                      | Location                                      |
| -----: | -----------: | -----: | --------------: | ------: | --------------------------- | --------------------------------------------- |
| -33.3% | -511.999 KiB | 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                      | Location                                                                    |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1` |

##### `child(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe`)

|  Change |        Delta |             % |          Size | Samples | Caller        | Location                           |
| ------: | -----------: | ------------: | ------------: | ------: | ------------- | ---------------------------------- |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `child(Name)` | `org.jetbrains.kotlin.name.FqName` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change |        Delta |      % |            Size | Samples | Caller     | Location                                                               |
| -----: | -----------: | -----: | --------------: | ------: | ---------- | ---------------------------------------------------------------------- |
| -25.0% | -511.999 KiB | 100.0% | 2 MiB → 1.5 MiB |   4 → 3 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Standard library

|  Change |      Delta |           % |              Size | Samples | Function                                                  | Location                                                                                                                              |
| ------: | ---------: | ----------: | ----------------: | ------: | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| +266.7% | +3.999 MiB | 0.2% → 0.9% | 1.5 MiB → 5.5 MiB |  3 → 11 | `addConstantUtf8(String)`                                 | `jdk.internal.org.objectweb.asm.SymbolTable`                                                                                          |
| +160.0% | +3.999 MiB | 0.4% → 1.1% | 2.5 MiB → 6.5 MiB |  5 → 13 | `allocateInstance(Object)`                                | `java.lang.invoke.DirectMethodHandle`                                                                                                 |
| +233.3% | +3.499 MiB | 0.2% → 0.8% |   1.5 MiB → 5 MiB |  3 → 10 | `allocateInstance(Class)`                                 | `jdk.internal.misc.Unsafe`                                                                                                            |
|  +17.6% | +2.999 MiB | 2.6% → 3.3% |   17 MiB → 20 MiB | 34 → 40 | `getValue()`                                              | `kotlin.SynchronizedLazyImpl`                                                                                                         |
| +600.0% | +2.999 MiB | 0.1% → 0.6% | 512 KiB → 3.5 MiB |   1 → 7 | `putUTF8(String)`                                         | `jdk.internal.org.objectweb.asm.ByteVector`                                                                                           |
| +250.0% | +2.499 MiB | 0.2% → 0.6% |   1 MiB → 3.5 MiB |   2 → 7 | `enlarge(int)`                                            | `jdk.internal.org.objectweb.asm.ByteVector`                                                                                           |
| +166.7% | +2.499 MiB | 0.2% → 0.7% |   1.5 MiB → 4 MiB |   3 → 8 | `generate(MethodType)`                                    | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`                                                              |
| +133.3% | +1.999 MiB | 0.2% → 0.6% | 1.5 MiB → 3.5 MiB |   3 → 7 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.HashMap`                                                                                                                   |
| +100.0% | +1.999 MiB | 0.3% → 0.7% |     2 MiB → 4 MiB |   4 → 8 | `getContributedVariables(Name, LookupLocation)`           | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation`          |
| +100.0% | +1.999 MiB | 0.3% → 0.7% |     2 MiB → 4 MiB |   4 → 8 | `getContributedVariables(Name, LookupLocation)`           | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope`                                  |
| +100.0% | +1.999 MiB | 0.3% → 0.7% |     2 MiB → 4 MiB |   4 → 8 | `getContributedVariables(Name, LookupLocation)`           | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope` |
|  +44.4% | +1.999 MiB | 0.7% → 1.1% | 4.5 MiB → 6.5 MiB |  9 → 13 | `copyOf(Object[], int)`                                   | `java.util.Arrays`                                                                                                                    |
|  +57.1% | +1.999 MiB | 0.5% → 0.9% | 3.5 MiB → 5.5 MiB |  7 → 11 | `newNode(int, Object, Object, HashMap$Node)`              | `java.util.LinkedHashMap`                                                                                                             |
| +400.0% | +1.999 MiB | 0.1% → 0.4% | 512 KiB → 2.5 MiB |   1 → 5 | `convertType(Class, Class, Class)`                        | `java.lang.invoke.TypeConvertingMethodAdapter`                                                                                        |
|  +16.7% |   +1.5 MiB | 1.4% → 1.7% |  9 MiB → 10.5 MiB | 18 → 21 | `readLOC()`                                               | `java.util.zip.ZipInputStream`                                                                                                        |
|  +16.7% |   +1.5 MiB | 1.4% → 1.7% |  9 MiB → 10.5 MiB | 18 → 21 | `getNextEntry()`                                          | `java.util.zip.ZipInputStream`                                                                                                        |
|  +75.0% | +1.499 MiB | 0.3% → 0.6% |   2 MiB → 3.5 MiB |   4 → 7 | `createZipEntry(String)`                                  | `java.util.zip.ZipInputStream`                                                                                                        |
|   +8.6% | +1.499 MiB | 2.7% → 3.1% | 17.5 MiB → 19 MiB | 35 → 38 | `copyOfRange(byte[], int, int)`                           | `java.util.Arrays`                                                                                                                    |
| +300.0% | +1.499 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |   1 → 4 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])` | `sun.reflect.annotation.AnnotationParser`                                                                                             |
| +300.0% | +1.499 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |   1 → 4 | `parseAnnotations(byte[], ConstantPool, Class)`           | `sun.reflect.annotation.AnnotationParser`                                                                                             |

##### Ours

| Change |      Delta |             % |              Size |   Samples | Function                                                                                                          | Location                                                                                                                           |
| -----: | ---------: | ------------: | ----------------: | --------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`                            |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `invoke()`                                                                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x000000b0016b4e10` |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `withWhenExpression(FirWhenExpression, FirSession, Function0)`                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`                                                    |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `transformWhenExpression(FirWhenExpression, ResolutionMode)`                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`                            |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `transformWhenExpression(FirWhenExpression, ResolutionMode)`                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                           |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `transformWhenExpression(FirWhenExpression, Object)`                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                           |
| +28.9% | +6.499 MiB |   3.4% → 4.7% | 22.5 MiB → 29 MiB |   45 → 58 | `transform(FirTransformer, Object)`                                                                               | `org.jetbrains.kotlin.fir.expressions.FirWhenExpression`                                                                           |
| +33.3% | +5.999 MiB |   2.7% → 3.9% |   18 MiB → 24 MiB |   36 → 48 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`                            |
| +33.3% | +5.999 MiB |   2.7% → 3.9% |   18 MiB → 24 MiB |   36 → 48 | `transformWhenBranch(FirWhenBranch, ResolutionMode)`                                                              | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                           |
| +33.3% | +5.999 MiB |   2.7% → 3.9% |   18 MiB → 24 MiB |   36 → 48 | `transformWhenBranch(FirWhenBranch, Object)`                                                                      | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`                           |
| +33.3% | +5.999 MiB |   2.7% → 3.9% |   18 MiB → 24 MiB |   36 → 48 | `transform(FirTransformer, Object)`                                                                               | `org.jetbrains.kotlin.fir.expressions.FirWhenBranch`                                                                               |
| +33.3% | +5.999 MiB |   2.7% → 3.9% |   18 MiB → 24 MiB |   36 → 48 | `transformBranches(FirTransformer, Object)`                                                                       | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`                                                                  |
|  +7.8% | +5.499 MiB | 10.7% → 12.4% | 70.5 MiB → 76 MiB | 141 → 152 | `transformNamedFunction(FirNamedFunction, ResolutionMode)`                                                        | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                     |
|  +7.7% | +5.499 MiB | 10.8% → 12.5% | 71 MiB → 76.5 MiB | 142 → 153 | `withFile(FirFile, Function0)`                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                     |
|  +7.7% | +5.499 MiB | 10.8% → 12.5% | 71 MiB → 76.5 MiB | 142 → 153 | `transformFile(FirFile, Object)`                                                                                  | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`                                      |
| +83.3% | +4.999 MiB |   0.9% → 1.8% |    6 MiB → 11 MiB |   12 → 22 | `toTypeAliasSymbol(ConeClassLikeLookupTag, FirSession)`                                                           | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`                                                                                 |
|  +7.1% | +4.999 MiB | 10.6% → 12.2% |   70 MiB → 75 MiB | 140 → 150 | `transformFunctionWithGivenSignature(FirFunction, boolean)`                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`                                     |
| +69.2% | +4.499 MiB |   1.0% → 1.8% |  6.5 MiB → 11 MiB |   13 → 22 | `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)`                                     | `org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`                                                                                     |
| +69.2% | +4.499 MiB |   1.0% → 1.8% |  6.5 MiB → 11 MiB |   13 → 22 | `directExpansionType(ConeClassLikeType, FirSession, Function1)`                                                   | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                                            |
| +69.2% | +4.499 MiB |   1.0% → 1.8% |  6.5 MiB → 11 MiB |   13 → 22 | `fullyExpandedTypeNoCache(ConeClassLikeType, FirSession, Function1)`                                              | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`                                                                            |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |             % |              Size |       Samples | Function                                                                                                                                      | Location                                                    |
| -----: | ----------: | ------------: | ----------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|  -7.1% | -46.499 MiB | 99.9% → 99.8% | 657 MiB → 611 MiB | 1,308 → 1,215 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                 |
|  -7.1% | -46.499 MiB | 99.9% → 99.8% | 657 MiB → 611 MiB | 1,308 → 1,215 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                 |
|  -8.5% | -29.999 MiB | 53.8% → 52.9% | 354 MiB → 324 MiB |     707 → 647 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`      |
|  -8.5% | -29.999 MiB | 53.8% → 52.9% | 354 MiB → 324 MiB |     707 → 647 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`      |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
|  -7.3% | -21.499 MiB | 44.7% → 44.5% | 294 MiB → 273 MiB |     588 → 545 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  -7.3% | -21.499 MiB | 44.7% → 44.5% | 294 MiB → 273 MiB |     588 → 545 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  -7.3% | -21.499 MiB | 44.7% → 44.5% | 294 MiB → 273 MiB |     588 → 545 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -6.7% | -19.999 MiB | 45.4% → 45.5% | 299 MiB → 279 MiB |     597 → 557 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| -10.9% | -18.499 MiB | 25.7% → 24.6% | 169 MiB → 151 MiB |     338 → 301 | `<init>(int)`                                                                                                                                 | `java.io.ByteArrayOutputStream`                             |
| -10.1% | -18.499 MiB | 27.8% → 26.8% | 183 MiB → 164 MiB |     365 → 328 | `copyOf(byte[], int)`                                                                                                                         | `java.util.Arrays`                                          |
|  -5.7% | -16.999 MiB | 45.5% → 46.1% | 299 MiB → 282 MiB |     598 → 564 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |

##### Standard library

| Change |       Delta |             % |                Size |   Samples | Function                                         | Location                                              |
| -----: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------ | ----------------------------------------------------- |
| -10.9% | -18.499 MiB | 25.7% → 24.6% |   169 MiB → 151 MiB | 338 → 301 | `<init>(int)`                                    | `java.io.ByteArrayOutputStream`                       |
| -10.1% | -18.499 MiB | 27.8% → 26.8% |   183 MiB → 164 MiB | 365 → 328 | `copyOf(byte[], int)`                            | `java.util.Arrays`                                    |
|  -9.3% | -15.999 MiB | 26.3% → 25.6% |   173 MiB → 157 MiB | 345 → 313 | `toByteArray()`                                  | `java.io.ByteArrayOutputStream`                       |
|  -5.3% | -15.999 MiB | 46.0% → 46.9% |   303 MiB → 287 MiB | 600 → 568 | `invokeStatic(Object, Object)`                   | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000`  |
|  -5.3% | -15.999 MiB | 46.0% → 46.9% |   303 MiB → 287 MiB | 600 → 568 | `invoke(Object, Object, Object)`                 | `java.lang.invoke.LambdaForm$MH.0x000000b001009400`   |
|  -5.3% | -15.999 MiB | 46.0% → 46.9% |   303 MiB → 287 MiB | 600 → 568 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder`                    |
|  -5.3% | -15.999 MiB | 46.0% → 46.9% |   303 MiB → 287 MiB | 600 → 568 | `invokeImpl(Object, Object[])`                   | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  -5.3% | -15.999 MiB | 46.0% → 46.9% |   303 MiB → 287 MiB | 600 → 568 | `invoke(Object, Object[])`                       | `jdk.internal.reflect.DirectMethodHandleAccessor`     |
|  -5.3% | -15.999 MiB | 46.0% → 46.9% |   303 MiB → 287 MiB | 600 → 568 | `invoke(Object, Object[])`                       | `java.lang.reflect.Method`                            |
| -12.7% |  -6.999 MiB |   8.4% → 7.8% |     55 MiB → 48 MiB |  110 → 96 | `resumeWith(Object)`                             | `kotlin.coroutines.jvm.internal.BaseContinuationImpl` |
| -11.1% |  -4.999 MiB |   6.8% → 6.5% |     45 MiB → 40 MiB |   90 → 80 | `clone()`                                        | `java.lang.Object`                                    |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `replace(byte[], char, char)`                    | `java.lang.StringLatin1`                              |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `replace(char, char)`                            | `java.lang.String`                                    |
| -27.6% |  -3.999 MiB |   2.2% → 1.7% | 14.5 MiB → 10.5 MiB |   29 → 21 | `loadClass(String, boolean)`                     | `java.lang.ClassLoader`                               |
| -41.2% |  -3.499 MiB |   1.3% → 0.8% |     8.5 MiB → 5 MiB |   17 → 10 | `resize()`                                       | `java.util.HashMap`                                   |
| -20.6% |  -3.499 MiB |   2.6% → 2.2% |   17 MiB → 13.5 MiB |   34 → 27 | `iterator()`                                     | `java.util.ArrayList`                                 |
| -63.6% |  -3.499 MiB |   0.8% → 0.3% |     5.5 MiB → 2 MiB |    11 → 4 | `<init>(int)`                                    | `kotlin.collections.builders.MapBuilder`              |
| -63.6% |  -3.499 MiB |   0.8% → 0.3% |     5.5 MiB → 2 MiB |    11 → 4 | `<init>()`                                       | `kotlin.collections.builders.MapBuilder`              |
| -75.0% |  -2.999 MiB |   0.6% → 0.2% |       4 MiB → 1 MiB |     8 → 2 | `<init>(int)`                                    | `java.util.ArrayList`                                 |
| -46.2% |  -2.999 MiB |   1.0% → 0.6% |   6.5 MiB → 3.5 MiB |    13 → 7 | `createSetBuilder()`                             | `kotlin.collections.SetsKt__SetsJVMKt`                |

##### Ours

| Change |       Delta |             % |              Size |       Samples | Function                                                                                                                                      | Location                                                    |
| -----: | ----------: | ------------: | ----------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|  -7.1% | -46.499 MiB | 99.9% → 99.8% | 657 MiB → 611 MiB | 1,308 → 1,215 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                 |
|  -7.1% | -46.499 MiB | 99.9% → 99.8% | 657 MiB → 611 MiB | 1,308 → 1,215 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                 |
|  -8.5% | -29.999 MiB | 53.8% → 52.9% | 354 MiB → 324 MiB |     707 → 647 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`      |
|  -8.5% | -29.999 MiB | 53.8% → 52.9% | 354 MiB → 324 MiB |     707 → 647 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`      |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
|  -7.5% | -21.999 MiB | 44.5% → 44.2% | 293 MiB → 271 MiB |     585 → 541 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
|  -7.3% | -21.499 MiB | 44.7% → 44.5% | 294 MiB → 273 MiB |     588 → 545 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  -7.3% | -21.499 MiB | 44.7% → 44.5% | 294 MiB → 273 MiB |     588 → 545 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
|  -7.3% | -21.499 MiB | 44.7% → 44.5% | 294 MiB → 273 MiB |     588 → 545 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -7.3% | -21.499 MiB | 44.6% → 44.5% | 294 MiB → 272 MiB |     587 → 544 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
|  -6.7% | -19.999 MiB | 45.4% → 45.5% | 299 MiB → 279 MiB |     597 → 557 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  -5.7% | -16.999 MiB | 45.5% → 46.1% | 299 MiB → 282 MiB |     598 → 564 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  -5.7% | -16.999 MiB | 45.5% → 46.1% | 299 MiB → 282 MiB |     598 → 564 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
|  -5.7% | -16.999 MiB | 45.5% → 46.1% | 299 MiB → 282 MiB |     598 → 564 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

|  Change |        Delta |             % |            Size | Samples | Callee                                                                                  | Location                                                                  |
| ------: | -----------: | ------------: | --------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|  +33.3% |   +5.999 MiB | 80.0% → 82.8% | 18 MiB → 24 MiB | 36 → 48 | `transformBranches(FirTransformer, Object)`                                             | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`         |
| removed | -511.999 KiB |   2.2% → 0.0% |   512 KiB → 0 B |   1 → 0 | `transformSubjectVariable(FirTransformer, Object)`                                      | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`         |
| +100.0% | +511.999 KiB |   2.2% → 3.4% | 512 KiB → 1 MiB |   1 → 2 | `exitWhenExpression(FirWhenExpression, boolean)`                                        | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`                |
|  +50.0% | +511.999 KiB |   4.4% → 5.2% | 1 MiB → 1.5 MiB |   2 → 3 | `generateCalleeForWhenExpression(FirWhenExpression, ResolutionContext, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSyntheticCallGenerator` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x000000b0016b4e10`)

| Change |      Delta |      % |              Size | Samples | Callee                                                                                                            | Location                                                                                                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +28.9% | +6.499 MiB | 100.0% | 22.5 MiB → 29 MiB | 45 → 58 | `transformWhenExpression$lambda$1(FirWhenExpression, FirControlFlowStatementsResolveTransformer, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `withWhenExpression(FirWhenExpression, FirSession, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext`)

| Change |      Delta |      % |              Size | Samples | Callee     | Location                                                                                                                           |
| -----: | ---------: | -----: | ----------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| +28.9% | +6.499 MiB | 100.0% | 22.5 MiB → 29 MiB | 45 → 58 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer$$Lambda.0x000000b0016b4e10` |

##### `transformWhenExpression(FirWhenExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

| Change |      Delta |      % |              Size | Samples | Callee                                                         | Location                                                                        |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| +28.9% | +6.499 MiB | 100.0% | 22.5 MiB → 29 MiB | 45 → 58 | `withWhenExpression(FirWhenExpression, FirSession, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |

##### `transformWhenExpression(FirWhenExpression, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |              Size | Samples | Callee                                                       | Location                                                                                                |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| +28.9% | +6.499 MiB | 100.0% | 22.5 MiB → 29 MiB | 45 → 58 | `transformWhenExpression(FirWhenExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `transformWhenExpression(FirWhenExpression, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |              Size | Samples | Callee                                                       | Location                                                                                                 |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| +28.9% | +6.499 MiB | 100.0% | 22.5 MiB → 29 MiB | 45 → 58 | `transformWhenExpression(FirWhenExpression, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirWhenExpression`)

| Change |          Delta |           % |              Size | Samples | Callee                                               | Location                                                                                                 |
| -----: | -------------: | ----------: | ----------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +28.9% |     +6.499 MiB |      100.0% | 22.5 MiB → 29 MiB | 45 → 58 | `transformWhenExpression(FirWhenExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
|    new | +1,023.998 KiB | 0.0% → 3.4% |       0 B → 1 MiB |   0 → 2 | `transformWhenExpression(FirWhenExpression, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformer`                |

##### `transformWhenBranch(FirWhenBranch, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer`)

| Change |        Delta |             % |              Size | Samples | Callee                                       | Location                                                         |
| -----: | -----------: | ------------: | ----------------: | ------: | -------------------------------------------- | ---------------------------------------------------------------- |
| +29.2% |   +3.499 MiB | 66.7% → 64.6% | 12 MiB → 15.5 MiB | 24 → 31 | `transformResult(FirTransformer, Object)`    | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch` |
| +66.7% |   +2.999 MiB | 25.0% → 31.3% | 4.5 MiB → 7.5 MiB |  9 → 15 | `transformCondition(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirRegularWhenBranch` |
| -33.3% | -511.999 KiB |   8.3% → 4.2% |   1.5 MiB → 1 MiB |   3 → 2 | `exitWhenBranchCondition(FirWhenBranch)`     | `org.jetbrains.kotlin.fir.resolve.dfa.FirDataFlowAnalyzer`       |

##### `transformWhenBranch(FirWhenBranch, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |            Size | Samples | Callee                                               | Location                                                                                                |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| +33.3% | +5.999 MiB | 100.0% | 18 MiB → 24 MiB | 36 → 48 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirControlFlowStatementsResolveTransformer` |

##### `transformWhenBranch(FirWhenBranch, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher`)

| Change |      Delta |      % |            Size | Samples | Callee                                               | Location                                                                                                 |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +33.3% | +5.999 MiB | 100.0% | 18 MiB → 24 MiB | 36 → 48 | `transformWhenBranch(FirWhenBranch, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transform(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.FirWhenBranch`)

| Change |      Delta |      % |            Size | Samples | Callee                                       | Location                                                                                                 |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +33.3% | +5.999 MiB | 100.0% | 18 MiB → 24 MiB | 36 → 48 | `transformWhenBranch(FirWhenBranch, Object)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |

##### `transformBranches(FirTransformer, Object)` (`org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl`)

| Change |      Delta |      % |            Size | Samples | Callee                                           | Location                                                          |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------ | ----------------------------------------------------------------- |
| +33.3% | +5.999 MiB | 100.0% | 18 MiB → 24 MiB | 36 → 48 | `transformInplace(List, FirTransformer, Object)` | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`          |
| +33.3% | +5.999 MiB | 100.0% | 18 MiB → 24 MiB | 36 → 48 | `transformBranches(FirTransformer, Object)`      | `org.jetbrains.kotlin.fir.expressions.impl.FirWhenExpressionImpl` |

##### `transformNamedFunction(FirNamedFunction, ResolutionMode)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |        Delta |              % |                Size |   Samples | Callee                                                                  | Location                                                                        |
| -----: | -----------: | -------------: | ------------------: | --------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
|  +7.1% |   +4.999 MiB | 100.0% → 99.3% | 70.5 MiB → 75.5 MiB | 141 → 151 | `forFunctionBody(FirFunction, SessionAndScopeSessionHolder, Function0)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |
|    new | +511.999 KiB |    0.0% → 0.7% |       0 B → 512 KiB |     0 → 1 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`        | `java.lang.invoke.MethodHandleNatives`                                          |

##### `withFile(FirFile, Function0)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |      % |              Size |   Samples | Callee     | Location                                                                                                                  |
| -----: | ---------: | -----: | ----------------: | --------: | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
|  +7.7% | +5.499 MiB | 100.0% | 71 MiB → 76.5 MiB | 142 → 153 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x000000b0016548c0` |

##### `transformFile(FirFile, Object)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirBodyResolveTransformerAdapter`)

| Change |      Delta |      % |              Size |   Samples | Callee                              | Location                                        |
| -----: | ---------: | -----: | ----------------: | --------: | ----------------------------------- | ----------------------------------------------- |
|  +7.7% | +5.499 MiB | 100.0% | 71 MiB → 76.5 MiB | 142 → 153 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirFile` |

##### `toTypeAliasSymbol(ConeClassLikeLookupTag, FirSession)` (`org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`)

| Change |      Delta |      % |           Size | Samples | Callee                                         | Location                                           |
| -----: | ---------: | -----: | -------------: | ------: | ---------------------------------------------- | -------------------------------------------------- |
| +83.3% | +4.999 MiB | 100.0% | 6 MiB → 11 MiB | 12 → 22 | `toSymbol(ConeClassLikeLookupTag, FirSession)` | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt` |

##### `transformFunctionWithGivenSignature(FirFunction, boolean)` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer`)

| Change |      Delta |      % |            Size |   Samples | Callee                                                           | Location                                                                                       |
| -----: | ---------: | -----: | --------------: | --------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
|  +7.1% | +4.999 MiB | 100.0% | 70 MiB → 75 MiB | 140 → 150 | `transformFunctionContent(FirFunction, ResolutionMode, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `buildFirViaLightTree(FirSession, Collection, DiagnosticReporter, Function2)` (`org.jetbrains.kotlin.fir.pipeline.FirUtilsKt`)

| Change |        Delta |              % |             Size | Samples | Callee                                                               | Location                                           |
| -----: | -----------: | -------------: | ---------------: | ------: | -------------------------------------------------------------------- | -------------------------------------------------- |
| +53.8% |   +3.499 MiB | 100.0% → 90.9% | 6.5 MiB → 10 MiB | 13 → 20 | `buildFirFile(CharSequence, KtSourceFile, KtSourceFileLinesMapping)` | `org.jetbrains.kotlin.fir.lightTree.LightTree2Fir` |
|    new | +511.999 KiB |    0.0% → 4.5% |    0 B → 512 KiB |   0 → 1 | `getContentsAsStream()`                                              | `org.jetbrains.kotlin.KtVirtualFileSourceFile`     |
|    new | +511.999 KiB |    0.0% → 4.5% |    0 B → 512 KiB |   0 → 1 | `readSourceFileWithMapping(InputStreamReader)`                       | `org.jetbrains.kotlin.KtSourceFileLinesMappingKt`  |

##### `directExpansionType(ConeClassLikeType, FirSession, Function1)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

|  Change |        Delta |              % |           Size | Samples | Callee                                                                                  | Location                                                |
| ------: | -----------: | -------------: | -------------: | ------: | --------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  +83.3% |   +4.999 MiB | 92.3% → 100.0% | 6 MiB → 11 MiB | 12 → 22 | `toTypeAliasSymbol(ConeClassLikeLookupTag, FirSession)`                                 | `org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt`      |
| removed | -511.999 KiB |    7.7% → 0.0% |  512 KiB → 0 B |   1 → 0 | `mapTypeAliasArguments(FirTypeAlias, ConeClassLikeType, ConeClassLikeType, FirSession)` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |

##### `fullyExpandedTypeNoCache(ConeClassLikeType, FirSession, Function1)` (`org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt`)

| Change |      Delta |            % |             Size | Samples | Callee                                                          | Location                                                |
| -----: | ---------: | -----------: | ---------------: | ------: | --------------------------------------------------------------- | ------------------------------------------------------- |
| +69.2% | +4.499 MiB |       100.0% | 6.5 MiB → 11 MiB | 13 → 22 | `directExpansionType(ConeClassLikeType, FirSession, Function1)` | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |
|    new | +1.499 MiB | 0.0% → 13.6% |    0 B → 1.5 MiB |   0 → 3 | `fullyExpandedType(ConeClassLikeType, FirSession, Function1)`   | `org.jetbrains.kotlin.fir.resolve.TypeExpansionUtilsKt` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |      Delta |             % |              Size | Samples | Callee            | Location                                    |
| ------: | ---------: | ------------: | ----------------: | ------: | ----------------- | ------------------------------------------- |
| +600.0% | +2.999 MiB | 33.3% → 63.6% | 512 KiB → 3.5 MiB |   1 → 7 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `allocateInstance(Object)` (`java.lang.invoke.DirectMethodHandle`)

|  Change |      Delta |             % |            Size | Samples | Callee                    | Location                   |
| ------: | ---------: | ------------: | --------------: | ------: | ------------------------- | -------------------------- |
| +233.3% | +3.499 MiB | 60.0% → 76.9% | 1.5 MiB → 5 MiB |  3 → 10 | `allocateInstance(Class)` | `jdk.internal.misc.Unsafe` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|  Change |          Delta |             % |              Size | Samples | Callee     | Location                                                                             |
| ------: | -------------: | ------------: | ----------------: | ------: | ---------- | ------------------------------------------------------------------------------------ |
| +400.0% |     +1.999 MiB |  2.9% → 12.5% | 512 KiB → 2.5 MiB |   1 → 5 | `invoke()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000b00181c200`    |
|  -23.1% |     -1.499 MiB | 38.2% → 25.0% |   6.5 MiB → 5 MiB | 13 → 10 | `invoke()` | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile$$Lambda.0x000000b00137ba80` |
|  +40.0% | +1,023.998 KiB | 14.7% → 17.5% | 2.5 MiB → 3.5 MiB |   5 → 7 | `invoke()` | `org.jetbrains.kotlin.fir.java.declarations.FirJavaClass$$Lambda.0x000000b00160fb50` |
|  +22.2% | +1,023.998 KiB | 26.5% → 27.5% | 4.5 MiB → 5.5 MiB |  9 → 11 | `invoke()` | `org.jetbrains.kotlin.builtins.DefaultBuiltIns$$Lambda.0x000000b001752668`           |
| removed |   -511.999 KiB |   2.9% → 0.0% |     512 KiB → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.jvm.JvmMappedScope$$Lambda.0x000000f80163b700`      |

##### `putUTF8(String)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |      % |              Size | Samples | Callee         | Location                                    |
| ------: | ---------: | -----: | ----------------: | ------: | -------------- | ------------------------------------------- |
| +600.0% | +2.999 MiB | 100.0% | 512 KiB → 3.5 MiB |   1 → 7 | `enlarge(int)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `generate(MethodType)` (`java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`)

|  Change |        Delta |             % |            Size | Samples | Callee                                                  | Location                                                                 |
| ------: | -----------: | ------------: | --------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| +300.0% |   +1.499 MiB | 33.3% → 50.0% | 512 KiB → 2 MiB |   1 → 4 | `convertArgumentTypes(MethodType)`                      | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
|  +50.0% | +511.999 KiB | 66.7% → 37.5% | 1 MiB → 1.5 MiB |   2 → 3 | `visitMethodInsn(int, String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.MethodVisitor`                           |
|     new | +511.999 KiB |  0.0% → 12.5% |   0 B → 512 KiB |   0 → 1 | `convertType(Class, Class, Class)`                      | `java.lang.invoke.TypeConvertingMethodAdapter`                           |

##### `getContributedVariables(Name, LookupLocation)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation`)

| Change |          Delta |              % |          Size | Samples | Callee               | Location                                                                                                                     |
| -----: | -------------: | -------------: | ------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| +50.0% | +1,023.998 KiB | 100.0% → 75.0% | 2 MiB → 3 MiB |   4 → 6 | `getVariableNames()` | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation` |
|    new | +1,023.998 KiB |   0.0% → 25.0% |   0 B → 1 MiB |   0 → 2 | `invoke(Object)`     | `kotlin.reflect.jvm.internal.impl.storage.LockBasedStorageManager$MapBasedMemoizedFunctionToNotNull`                         |

##### `getContributedVariables(Name, LookupLocation)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope`)

|  Change |      Delta |      % |          Size | Samples | Callee                                          | Location                                                                                                                     |
| ------: | ---------: | -----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   4 → 8 | `getContributedVariables(Name, LookupLocation)` | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope$OptimizedImplementation` |

##### `getContributedVariables(Name, LookupLocation)` (`kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor$DeserializedClassMemberScope`)

|  Change |      Delta |      % |          Size | Samples | Callee                                          | Location                                                                                             |
| ------: | ---------: | -----: | ------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| +100.0% | +1.999 MiB | 100.0% | 2 MiB → 4 MiB |   4 → 8 | `getContributedVariables(Name, LookupLocation)` | `kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberScope` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |            Size | Samples | Callee                         | Location           |
| -----: | -----------: | ------------: | --------------: | ------: | ------------------------------ | ------------------ |
| +50.0% | +511.999 KiB | 22.2% → 23.1% | 1 MiB → 1.5 MiB |   2 → 3 | `copyOf(Object[], int, Class)` | `java.util.Arrays` |

##### `convertType(Class, Class, Class)` (`java.lang.invoke.TypeConvertingMethodAdapter`)

|  Change |        Delta |              % |            Size | Samples | Callee                 | Location                                       |
| ------: | -----------: | -------------: | --------------: | ------: | ---------------------- | ---------------------------------------------- |
| +300.0% |   +1.499 MiB | 100.0% → 80.0% | 512 KiB → 2 MiB |   1 → 4 | `cast(String, String)` | `java.lang.invoke.TypeConvertingMethodAdapter` |
|     new | +511.999 KiB |   0.0% → 20.0% |   0 B → 512 KiB |   0 → 1 | `unparse(Class)`       | `sun.invoke.util.BytecodeDescriptor`           |

##### `readLOC()` (`java.util.zip.ZipInputStream`)

| Change |        Delta |             % |            Size | Samples | Callee                        | Location                       |
| -----: | -----------: | ------------: | --------------: | ------: | ----------------------------- | ------------------------------ |
| +75.0% |   +1.499 MiB | 22.2% → 33.3% | 2 MiB → 3.5 MiB |   4 → 7 | `createZipEntry(String)`      | `java.util.zip.ZipInputStream` |
| +33.3% | +512.015 KiB | 16.7% → 19.0% | 1.5 MiB → 2 MiB |   3 → 4 | `readFully(byte[], int, int)` | `java.util.zip.ZipInputStream` |
|  -9.1% | -511.999 KiB | 61.1% → 47.6% | 5.5 MiB → 5 MiB | 11 → 10 | `toStringUTF8(byte[], int)`   | `java.util.zip.ZipCoder`       |

##### `getNextEntry()` (`java.util.zip.ZipInputStream`)

| Change |    Delta |      % |             Size | Samples | Callee      | Location                       |
| -----: | -------: | -----: | ---------------: | ------: | ----------- | ------------------------------ |
| +16.7% | +1.5 MiB | 100.0% | 9 MiB → 10.5 MiB | 18 → 21 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |        Delta |             % |              Size | Samples | Callee                              | Location           |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------ |
|   -3.2% | -511.999 KiB | 88.6% → 78.9% | 15.5 MiB → 15 MiB | 31 → 30 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |
| removed | -511.999 KiB |   2.9% → 0.0% |     512 KiB → 0 B |   1 → 0 | `clone()`                           | `java.lang.Object` |

##### `parseAnnotations2(byte[], ConstantPool, Class, Class[])` (`sun.reflect.annotation.AnnotationParser`)

|  Change |          Delta |              % |              Size | Samples | Callee                                                                | Location                                  |
| ------: | -------------: | -------------: | ----------------: | ------: | --------------------------------------------------------------------- | ----------------------------------------- |
| +200.0% | +1,023.998 KiB | 100.0% → 75.0% | 512 KiB → 1.5 MiB |   1 → 3 | `parseAnnotation2(ByteBuffer, ConstantPool, Class, boolean, Class[])` | `sun.reflect.annotation.AnnotationParser` |
|     new |   +511.999 KiB |   0.0% → 25.0% |     0 B → 512 KiB |   0 → 1 | `wrap(byte[])`                                                        | `java.nio.ByteBuffer`                     |

##### `parseAnnotations(byte[], ConstantPool, Class)` (`sun.reflect.annotation.AnnotationParser`)

|  Change |      Delta |      % |            Size | Samples | Callee                                                    | Location                                  |
| ------: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------- | ----------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `parseAnnotations2(byte[], ConstantPool, Class, Class[])` | `sun.reflect.annotation.AnnotationParser` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

|  Change |        Delta |             % |              Size |   Samples | Callee                                                                       | Location                                               |
| ------: | -----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|   -8.5% |  -29.999 MiB | 53.8% → 53.0% | 354 MiB → 324 MiB | 707 → 647 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|   -5.3% |  -15.999 MiB | 46.1% → 47.0% | 303 MiB → 287 MiB | 600 → 568 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |
| removed | -511.999 KiB |   0.1% → 0.0% |     512 KiB → 0 B |     1 → 0 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`             | `java.lang.invoke.MethodHandleNatives`                 |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |      % |              Size |       Samples | Callee          | Location                                    |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------- | ------------------------------------------- |
|  -7.1% | -46.499 MiB | 100.0% | 657 MiB → 611 MiB | 1,308 → 1,215 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |          Delta |             % |              Size |   Samples | Callee                | Location                        |
| ------: | -------------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------- |
|  -10.9% |    -18.499 MiB | 47.8% → 46.5% | 169 MiB → 151 MiB | 338 → 301 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
|   -9.3% |    -15.999 MiB | 48.8% → 48.4% | 173 MiB → 157 MiB | 345 → 313 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  +16.7% |       +1.5 MiB |   2.5% → 3.2% |  9 MiB → 10.5 MiB |   18 → 21 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
| +100.0% | +1,023.998 KiB |   0.3% → 0.6% |     1 MiB → 2 MiB |     2 → 4 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |       Delta |            % |                Size |   Samples | Callee                                                                       | Location                                               |
| -----: | ----------: | -----------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -8.5% | -29.999 MiB |       100.0% |   354 MiB → 324 MiB | 707 → 647 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| -21.2% |  -7.499 MiB | 10.0% → 8.6% | 35.4 MiB → 27.9 MiB |   70 → 55 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |          Delta |             % |                Size |   Samples | Callee                           | Location                                                              |
| -----: | -------------: | ------------: | ------------------: | --------: | -------------------------------- | --------------------------------------------------------------------- |
|  -7.4% |    -14.499 MiB | 66.5% → 66.6% |   195 MiB → 180 MiB | 389 → 360 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
|  -9.5% |     -6.999 MiB | 25.1% → 24.6% | 73.5 MiB → 66.5 MiB | 147 → 133 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
|  -4.3% | -1,023.998 KiB |   7.9% → 8.1% |     23 MiB → 22 MiB |   46 → 44 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
| +33.3% |   +511.999 KiB |   0.5% → 0.7% |     1.5 MiB → 2 MiB |     3 → 4 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | ------------------------------------------------- |
|  -7.5% | -21.999 MiB | 100.0% | 293 MiB → 271 MiB | 585 → 541 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|  Change |          Delta |           % |              Size |   Samples | Callee                                                               | Location                                                         |
| ------: | -------------: | ----------: | ----------------: | --------: | -------------------------------------------------------------------- | ---------------------------------------------------------------- |
|   -7.5% |    -21.999 MiB |      100.0% | 293 MiB → 271 MiB | 585 → 541 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                |
|  -10.7% |     -1.499 MiB | 4.8% → 4.6% | 14 MiB → 12.5 MiB |   28 → 25 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase`   |
|  -50.0% | -1,023.998 KiB | 0.7% → 0.4% |     2 MiB → 1 MiB |     4 → 2 | `phaseBody(LoggingContext, Object)`                                  | `org.jetbrains.kotlin.backend.common.phaser.ModuleLoweringPhase` |
| removed | -1,023.998 KiB | 0.3% → 0.0% |       1 MiB → 0 B |     2 → 0 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`          |
| removed | -1,023.998 KiB | 0.3% → 0.0% |       1 MiB → 0 B |     2 → 0 | `isVerbose(NamedCompilerPhase)`                                      | `org.jetbrains.kotlin.config.phaser.PhaseConfig`                 |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                     | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
|  -7.5% | -21.999 MiB | 100.0% | 293 MiB → 271 MiB | 585 → 541 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                     | Location                                                    |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  -7.5% | -21.999 MiB | 100.0% | 293 MiB → 271 MiB | 585 → 541 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |       Delta |     % |              Size |   Samples | Callee                                                         | Location                                                |
| -----: | ----------: | ----: | ----------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  -7.3% | -21.499 MiB | 99.8% | 294 MiB → 272 MiB | 587 → 544 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  -7.3% | -21.499 MiB | 100.0% | 294 MiB → 273 MiB | 588 → 545 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                 | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
|  -7.3% | -21.499 MiB | 100.0% | 294 MiB → 273 MiB | 588 → 545 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |        Delta |             % |              Size |   Samples | Callee                                                                          | Location                                                                    |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -7.5% |  -21.999 MiB | 99.7% → 99.4% | 293 MiB → 271 MiB | 585 → 541 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| +50.0% | +511.999 KiB |   0.3% → 0.6% |   1 MiB → 1.5 MiB |     2 → 3 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
|  -7.3% | -21.499 MiB | 100.0% | 294 MiB → 272 MiB | 587 → 544 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                                              | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -7.3% | -21.499 MiB | 100.0% | 294 MiB → 272 MiB | 587 → 544 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -7.3% | -21.499 MiB | 100.0% | 294 MiB → 272 MiB | 587 → 544 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                          | Location                                      |
| -----: | ----------: | ------------: | ----------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  -7.3% | -21.499 MiB | 98.5% → 97.8% | 294 MiB → 273 MiB | 588 → 545 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| +33.3% |  +1.499 MiB |   1.5% → 2.2% |   4.5 MiB → 6 MiB |    9 → 12 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |                Size | Samples | Callee    | Location           |
| -----: | ---------: | ------------: | ------------------: | ------: | --------- | ------------------ |
| -11.2% | -4.999 MiB | 24.4% → 24.1% | 44.5 MiB → 39.5 MiB | 89 → 79 | `clone()` | `java.lang.Object` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |       Delta |             % |              Size |   Samples | Callee                                                                               | Location                                                                |
| ------: | ----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
|   -6.7% | -19.999 MiB | 99.8% → 98.8% | 299 MiB → 279 MiB | 597 → 557 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
| +600.0% |  +2.999 MiB |   0.2% → 1.2% | 512 KiB → 3.5 MiB |     1 → 7 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Callee                | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------- | ------------------ |
|  -9.3% | -15.999 MiB | 100.0% | 173 MiB → 157 MiB | 345 → 313 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b001008000`)

| Change |       Delta |      % |              Size |   Samples | Callee           | Location                                     |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------- | -------------------------------------------- |
|  -5.3% | -15.999 MiB | 100.0% | 303 MiB → 287 MiB | 600 → 568 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b001009400`)

| Change |       Delta |      % |              Size |   Samples | Callee                         | Location                                             |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  -5.3% | -15.999 MiB | 100.0% | 303 MiB → 287 MiB | 600 → 568 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |       Delta |      % |              Size |   Samples | Callee                           | Location                                            |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------- | --------------------------------------------------- |
|  -5.3% | -15.999 MiB | 100.0% | 303 MiB → 287 MiB | 600 → 568 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |              Size |   Samples | Callee                                           | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  -5.3% | -15.999 MiB | 100.0% | 303 MiB → 287 MiB | 600 → 568 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |              Size |   Samples | Callee                         | Location                                          |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------- |
|  -5.3% | -15.999 MiB | 100.0% | 303 MiB → 287 MiB | 600 → 568 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |          Delta |           % |              Size |   Samples | Callee                     | Location                                          |
| -----: | -------------: | ----------: | ----------------: | --------: | -------------------------- | ------------------------------------------------- |
|  -5.3% |    -15.999 MiB |      100.0% | 303 MiB → 287 MiB | 600 → 568 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new | +1,023.998 KiB | 0.0% → 0.3% |       0 B → 1 MiB |     0 → 2 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `resumeWith(Object)` (`kotlin.coroutines.jvm.internal.BaseContinuationImpl`)

|  Change |          Delta |             % |              Size | Samples | Callee                  | Location                                                                                                               |
| ------: | -------------: | ------------: | ----------------: | ------: | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
|  -10.8% |     -4.499 MiB | 75.5% → 77.1% | 41.5 MiB → 37 MiB | 83 → 74 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirBaseTowerResolveTask$processLevel$6`                                  |
|   -9.4% |     -1.499 MiB | 29.1% → 30.2% | 16 MiB → 14.5 MiB | 32 → 29 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.stages.ResolutionStageRunner$processCandidate$1`                               |
|  -50.0% |     -1.499 MiB |   5.5% → 3.1% |   3 MiB → 1.5 MiB |   6 → 3 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolveTask$processCandidatesWithGivenImplicitReceiverAsValue$1` |
| removed | -1,023.998 KiB |   1.8% → 0.0% |       1 MiB → 0 B |   2 → 0 | `invokeSuspend(Object)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.FirTowerResolver$enqueueResolutionTasks$1`                               |
| removed |   -511.999 KiB |   0.9% → 0.0% |     512 KiB → 0 B |   1 → 0 | `invokeSuspend(Object)` | `com.intellij.ide.plugins.PluginDescriptorLoader$loadForCoreEnv$1`                                                     |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

| Change |      Delta |             % |            Size | Samples | Callee           | Location                       |
| -----: | ---------: | ------------: | --------------: | ------: | ---------------- | ------------------------------ |
| -60.0% | -1.499 MiB | 45.5% → 66.7% | 2.5 MiB → 1 MiB |   5 → 2 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `replace(char, char)` (`java.lang.String`)

| Change |      Delta |      % |              Size | Samples | Callee                        | Location                 |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------- | ------------------------ |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `replace(byte[], char, char)` | `java.lang.StringLatin1` |

##### `loadClass(String, boolean)` (`java.lang.ClassLoader`)

|  Change |        Delta |             % |             Size | Samples | Callee                       | Location                                                 |
| ------: | -----------: | ------------: | ---------------: | ------: | ---------------------------- | -------------------------------------------------------- |
|  -50.0% |   -1.999 MiB | 27.6% → 19.0% |    4 MiB → 2 MiB |   8 → 4 | `findClass(String)`          | `java.net.URLClassLoader`                                |
|  -15.0% |   -1.499 MiB | 69.0% → 81.0% | 10 MiB → 8.5 MiB | 20 → 17 | `findClass(String)`          | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |
| removed | -511.999 KiB |   3.4% → 0.0% |    512 KiB → 0 B |   1 → 0 | `loadClass(String, boolean)` | `org.jetbrains.kotlin.preloading.MemoryBasedClassLoader` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

| Change |          Delta |             % |              Size | Samples | Callee                              | Location                                    |
| -----: | -------------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------------------------------- |
| -66.7% | -1,023.998 KiB | 27.3% → 25.0% | 1.5 MiB → 512 KiB |   3 → 1 | `arrayOfUninitializedElements(int)` | `kotlin.collections.builders.ListBuilderKt` |

##### `<init>()` (`kotlin.collections.builders.MapBuilder`)

| Change |      Delta |      % |            Size | Samples | Callee        | Location                                 |
| -----: | ---------: | -----: | --------------: | ------: | ------------- | ---------------------------------------- |
| -63.6% | -3.499 MiB | 100.0% | 5.5 MiB → 2 MiB |  11 → 4 | `<init>(int)` | `kotlin.collections.builders.MapBuilder` |

##### `createSetBuilder()` (`kotlin.collections.SetsKt__SetsJVMKt`)

| Change |      Delta |             % |          Size | Samples | Callee     | Location                                 |
| -----: | ---------: | ------------: | ------------: | ------: | ---------- | ---------------------------------------- |
| -50.0% | -2.999 MiB | 92.3% → 85.7% | 6 MiB → 3 MiB |  12 → 6 | `<init>()` | `kotlin.collections.builders.SetBuilder` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |       Delta |      % |              Size |   Samples | Callee                                                   | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
|  -5.7% | -16.999 MiB | 100.0% | 299 MiB → 282 MiB | 598 → 564 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |       Delta |      % |              Size |   Samples | Callee                                         | Location                                      |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
|  -5.7% | -16.999 MiB | 100.0% | 299 MiB → 282 MiB | 598 → 564 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

# Retained heap profile diff

Retained 8.98 MiB → 9.07 MiB (+93.695 KiB, +1.0%) over 388 objects → 345 objects (23.7 KiB → 26.9 KiB per object).

| Category         | Change |        Delta |             % |                Size |   Objects |
| ---------------- | -----: | -----------: | ------------: | ------------------: | --------: |
| Standard library |  -2.7% | -230.304 KiB | 92.2% → 88.8% | 8.28 MiB → 8.05 MiB | 300 → 265 |
| Ours             | +45.0% |     +324 KiB |  7.8% → 11.2% |  719 KiB → 1.02 MiB |   88 → 80 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|     Change |        Delta |             % |                Size | Objects | Function                                                                                       | Location                                                                           |
| ---------: | -----------: | ------------: | ------------------: | ------: | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|     +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |   1 → 2 | `initCEN(int, ZipCoder)`                                                                       | `java.util.zip.ZipFile$Source`                                                     |
|     +21.8% | +153.039 KiB |   7.6% → 9.2% |   703 KiB → 856 KiB |   1 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`          | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                  |
|        new | +109.015 KiB |   0.0% → 1.2% |       0 B → 109 KiB |   0 → 1 | `zzUnpackcmap_blocks()`                                                                        | `org.jetbrains.kotlin.lexer._JetLexer`                                             |
|     +25.3% |  +64.867 KiB |   2.8% → 3.5% |   256 KiB → 321 KiB |       4 | `resize()`                                                                                     | `java.util.HashMap`                                                                |
|        new |  +41.187 KiB |   0.0% → 0.4% |      0 B → 41.2 KiB |   0 → 1 | `zzUnpacktrans()`                                                                              | `org.jetbrains.kotlin.lexer._JetLexer`                                             |
| +236350.0% |  +36.929 KiB |  <0.1% → 0.4% |     16 B → 36.9 KiB |   1 → 2 | `copyOf(Object[], int)`                                                                        | `java.util.Arrays`                                                                 |
|    +697.3% |      +28 KiB |  <0.1% → 0.3% |   4.02 KiB → 32 KiB |       1 | `enlarge(int)`                                                                                 | `org.jetbrains.org.objectweb.asm.ByteVector`                                       |
|    +300.0% |     +1,008 B |         <0.1% |    336 B → 1.31 KiB |   1 → 3 | `copyOf(Object[], int, Class)`                                                                 | `java.util.Arrays`                                                                 |
|        new |       +528 B |  0.0% → <0.1% |         0 B → 528 B |   0 → 1 | `enlarge(int)`                                                                                 | `jdk.internal.org.objectweb.asm.ByteVector`                                        |
|        new |       +512 B |  0.0% → <0.1% |         0 B → 512 B |   0 → 1 | `<init>(MethodNode, boolean)`                                                                  | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`     |
|        new |       +192 B |  0.0% → <0.1% |         0 B → 192 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                    | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`                        |
|        new |       +128 B |  0.0% → <0.1% |         0 B → 128 B |   0 → 1 | `executePhase(JvmFir2IrPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                    |
|    +400.0% |       +128 B |         <0.1% |        32 B → 160 B |   1 → 5 | `newNode(int, Object, Object, HashMap$Node)`                                                   | `java.util.HashMap`                                                                |
|    +100.0% |       +112 B |         <0.1% |       112 B → 224 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                |
|    +185.7% |       +104 B |         <0.1% |        56 B → 160 B |   1 → 3 | `copyOfRange(byte[], int, int)`                                                                | `java.util.Arrays`                                                                 |
|    +150.0% |        +96 B |         <0.1% |        64 B → 160 B |   2 → 5 | `build()`                                                                                      | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                 |
|        new |        +88 B |  0.0% → <0.1% |          0 B → 88 B |   0 → 1 | `build()`                                                                                      | `org.jetbrains.kotlin.fir.java.declarations.FirJavaMethodBuilder`                  |
|        new |        +80 B |  0.0% → <0.1% |          0 B → 80 B |   0 → 1 | `decompress(ByteBuffer, int)`                                                                  | `jdk.internal.jimage.ImageLocation`                                                |
|        new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `getIrExternalOrBuiltInsPackageFragment(FqName, FirModuleData, FirDeclarationOrigin, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage`                        |
|        new |        +64 B |  0.0% → <0.1% |          0 B → 64 B |   0 → 1 | `<init>()`                                                                                     | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder` |

##### Standard library

|     Change |        Delta |             % |                Size | Objects | Function                                                    | Location                                                                |
| ---------: | -----------: | ------------: | ------------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
|     +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |   1 → 2 | `initCEN(int, ZipCoder)`                                    | `java.util.zip.ZipFile$Source`                                          |
|     +25.3% |  +64.867 KiB |   2.8% → 3.5% |   256 KiB → 321 KiB |       4 | `resize()`                                                  | `java.util.HashMap`                                                     |
| +236350.0% |  +36.929 KiB |  <0.1% → 0.4% |     16 B → 36.9 KiB |   1 → 2 | `copyOf(Object[], int)`                                     | `java.util.Arrays`                                                      |
|    +300.0% |     +1,008 B |         <0.1% |    336 B → 1.31 KiB |   1 → 3 | `copyOf(Object[], int, Class)`                              | `java.util.Arrays`                                                      |
|        new |       +528 B |  0.0% → <0.1% |         0 B → 528 B |   0 → 1 | `enlarge(int)`                                              | `jdk.internal.org.objectweb.asm.ByteVector`                             |
|        new |       +192 B |  0.0% → <0.1% |         0 B → 192 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`             |
|    +400.0% |       +128 B |         <0.1% |        32 B → 160 B |   1 → 5 | `newNode(int, Object, Object, HashMap$Node)`                | `java.util.HashMap`                                                     |
|    +185.7% |       +104 B |         <0.1% |        56 B → 160 B |   1 → 3 | `copyOfRange(byte[], int, int)`                             | `java.util.Arrays`                                                      |
|        new |        +80 B |  0.0% → <0.1% |          0 B → 80 B |   0 → 1 | `decompress(ByteBuffer, int)`                               | `jdk.internal.jimage.ImageLocation`                                     |
|        new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$1`      |
|        new |        +56 B |  0.0% → <0.1% |          0 B → 56 B |   0 → 1 | `addConstantUtf8(String)`                                   | `jdk.internal.org.objectweb.asm.SymbolTable`                            |
|        new |        +48 B |  0.0% → <0.1% |          0 B → 48 B |   0 → 1 | `getDeclaredConstructors0(boolean)`                         | `java.lang.Class`                                                       |
|        new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `makeImpl(Class, Class[], boolean)`                         | `java.lang.invoke.MethodType`                                           |
|        new |        +40 B |  0.0% → <0.1% |          0 B → 40 B |   0 → 1 | `newReflectionData(SoftReference, int)`                     | `java.lang.Class`                                                       |
|    +100.0% |        +32 B |         <0.1% |         32 B → 64 B |   1 → 2 | `newConditionNode()`                                        | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|        new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `putVal(Object, Object, boolean)`                           | `java.util.concurrent.ConcurrentHashMap`                                |
|        new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `<clinit>()`                                                | `java.security.Security`                                                |
|        new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `allocateUninitializedArray(Class, int)`                    | `jdk.internal.misc.Unsafe`                                              |
|        new |        +32 B |  0.0% → <0.1% |          0 B → 32 B |   0 → 1 | `listIterator(int)`                                         | `java.util.ArrayList$SubList`                                           |
|        new |        +24 B |  0.0% → <0.1% |          0 B → 24 B |   0 → 1 | `toMutableList(Iterable)`                                   | `kotlin.collections.CollectionsKt___CollectionsKt`                      |

##### Ours

|  Change |        Delta |            % |              Size | Objects | Function                                                                                       | Location                                                                           |
| ------: | -----------: | -----------: | ----------------: | ------: | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|  +21.8% | +153.039 KiB |  7.6% → 9.2% | 703 KiB → 856 KiB |   1 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`          | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                  |
|     new | +109.015 KiB |  0.0% → 1.2% |     0 B → 109 KiB |   0 → 1 | `zzUnpackcmap_blocks()`                                                                        | `org.jetbrains.kotlin.lexer._JetLexer`                                             |
|     new |  +41.187 KiB |  0.0% → 0.4% |    0 B → 41.2 KiB |   0 → 1 | `zzUnpacktrans()`                                                                              | `org.jetbrains.kotlin.lexer._JetLexer`                                             |
| +697.3% |      +28 KiB | <0.1% → 0.3% | 4.02 KiB → 32 KiB |       1 | `enlarge(int)`                                                                                 | `org.jetbrains.org.objectweb.asm.ByteVector`                                       |
|     new |       +512 B | 0.0% → <0.1% |       0 B → 512 B |   0 → 1 | `<init>(MethodNode, boolean)`                                                                  | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`     |
|     new |       +128 B | 0.0% → <0.1% |       0 B → 128 B |   0 → 1 | `executePhase(JvmFir2IrPipelineArtifact)`                                                      | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                    |
| +100.0% |       +112 B |        <0.1% |     112 B → 224 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`                                |
| +150.0% |        +96 B |        <0.1% |      64 B → 160 B |   2 → 5 | `build()`                                                                                      | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`                 |
|     new |        +88 B | 0.0% → <0.1% |        0 B → 88 B |   0 → 1 | `build()`                                                                                      | `org.jetbrains.kotlin.fir.java.declarations.FirJavaMethodBuilder`                  |
|     new |        +64 B | 0.0% → <0.1% |        0 B → 64 B |   0 → 1 | `getIrExternalOrBuiltInsPackageFragment(FqName, FirModuleData, FirDeclarationOrigin, boolean)` | `org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage`                        |
|     new |        +64 B | 0.0% → <0.1% |        0 B → 64 B |   0 → 1 | `<init>()`                                                                                     | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder` |
|     new |        +56 B | 0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `removeElements(int, int)`                                                                     | `it.unimi.dsi.fastutil.ints.IntArrayList`                                          |
|     new |        +56 B | 0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `push(int)`                                                                                    | `org.jetbrains.org.objectweb.asm.Frame`                                            |
|     new |        +56 B | 0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `setLocal(int, int)`                                                                           | `org.jetbrains.org.objectweb.asm.Frame`                                            |
|     new |        +56 B | 0.0% → <0.1% |        0 B → 56 B |   0 → 1 | `markNewLabel()`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                       |
|     new |        +48 B | 0.0% → <0.1% |        0 B → 48 B |   0 → 2 | `readUtf(int, int, char[])`                                                                    | `org.jetbrains.org.objectweb.asm.ClassReader`                                      |
|     new |        +48 B | 0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `visitLineNumber(int, Label)`                                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                  |
|     new |        +48 B | 0.0% → <0.1% |        0 B → 48 B |   0 → 1 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)`    | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`                  |
| +100.0% |        +40 B |        <0.1% |       40 B → 80 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`                              |
| +100.0% |        +40 B |        <0.1% |       40 B → 80 B |   1 → 2 | `visitVarInsn(int, int)`                                                                       | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                  |

#### Improvements

Functions with the largest decrease in bytes retained within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                           | Location                                                                  |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|  -15.6% | -518.218 KiB | 36.0% → 30.1% | 3.23 MiB → 2.73 MiB | 153 → 146 | `copyOf(byte[], int)`                                                                              | `java.util.Arrays`                                                        |
|  -10.0% | -156.429 KiB | 17.0% → 15.1% | 1.52 MiB → 1.37 MiB |   66 → 49 | `clone()`                                                                                          | `java.lang.Object`                                                        |
| removed |   -4.023 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `rehash(int)`                                                                                      | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`                         |
|  -75.0% |   -1.195 KiB |         <0.1% |    1.59 KiB → 408 B |    10 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                | `java.util.Arrays`                                                        |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(ClassWriter)`                                                                              | `jdk.internal.org.objectweb.asm.SymbolTable`                              |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `resize(int)`                                                                                      | `java.util.IdentityHashMap`                                               |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>()`                                                                                         | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer` |
| removed |       -856 B |  <0.1% → 0.0% |         856 B → 0 B |     1 → 0 | `newInstance(OutputStream, int)`                                                                   | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                         |
| removed |       -576 B |  <0.1% → 0.0% |         576 B → 0 B |     1 → 0 | `createBuiltInsAndSymbolTable(Fir2IrComponentsStorage, Fir2IrSyntheticIrBuiltinsSymbolsContainer)` | `org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline`                        |
|  -66.7% |       -384 B |         <0.1% |       576 B → 192 B |     6 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                           |
|  -60.0% |       -336 B |         <0.1% |       560 B → 224 B |    10 → 4 | `grow(int)`                                                                                        | `java.util.ArrayList`                                                     |
|  -87.0% |       -320 B |         <0.1% |        368 B → 48 B |     5 → 2 | `initClassName()`                                                                                  | `java.lang.Class`                                                         |
| removed |       -280 B |  <0.1% → 0.0% |         280 B → 0 B |     1 → 0 | `rehash(int)`                                                                                      | `it.unimi.dsi.fastutil.ints.IntOpenHashSet`                               |
|  -29.7% |       -240 B |         <0.1% |       808 B → 568 B |     7 → 5 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`                    | `java.lang.ClassLoader`                                                   |
|  -27.5% |       -224 B |         <0.1% |       816 B → 592 B |     2 → 1 | `toArray()`                                                                                        | `org.jetbrains.org.objectweb.asm.tree.InsnList`                           |
| removed |       -200 B |  <0.1% → 0.0% |         200 B → 0 B |     2 → 0 | `merge(SymbolTable, Frame, int)`                                                                   | `org.jetbrains.org.objectweb.asm.Frame`                                   |
| removed |       -192 B |  <0.1% → 0.0% |         192 B → 0 B |     3 → 0 | `<init>(int, float, boolean)`                                                                      | `java.util.HashSet`                                                       |
|  -22.3% |       -168 B |         <0.1% |       752 B → 584 B |     8 → 5 | `<init>(int, int)`                                                                                 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                     |
| removed |       -152 B |  <0.1% → 0.0% |         152 B → 0 B |     1 → 0 | `<init>(int, float)`                                                                               | `it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap`                           |
|  -60.0% |       -144 B |         <0.1% |        240 B → 96 B |     4 → 2 | `<init>(int)`                                                                                      | `java.util.ArrayList`                                                     |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                                        | Location                                                                                   |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
|  -15.6% | -518.218 KiB | 36.0% → 30.1% | 3.23 MiB → 2.73 MiB | 153 → 146 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                                         |
|  -10.0% | -156.429 KiB | 17.0% → 15.1% | 1.52 MiB → 1.37 MiB |   66 → 49 | `clone()`                                                                       | `java.lang.Object`                                                                         |
|  -75.0% |   -1.195 KiB |         <0.1% |    1.59 KiB → 408 B |    10 → 5 | `copyOfRangeByte(byte[], int, int)`                                             | `java.util.Arrays`                                                                         |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(ClassWriter)`                                                           | `jdk.internal.org.objectweb.asm.SymbolTable`                                               |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `resize(int)`                                                                   | `java.util.IdentityHashMap`                                                                |
|  -60.0% |       -336 B |         <0.1% |       560 B → 224 B |    10 → 4 | `grow(int)`                                                                     | `java.util.ArrayList`                                                                      |
|  -87.0% |       -320 B |         <0.1% |        368 B → 48 B |     5 → 2 | `initClassName()`                                                               | `java.lang.Class`                                                                          |
|  -29.7% |       -240 B |         <0.1% |       808 B → 568 B |     7 → 5 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                    |
| removed |       -192 B |  <0.1% → 0.0% |         192 B → 0 B |     3 → 0 | `<init>(int, float, boolean)`                                                   | `java.util.HashSet`                                                                        |
|  -60.0% |       -144 B |         <0.1% |        240 B → 96 B |     4 → 2 | `<init>(int)`                                                                   | `java.util.ArrayList`                                                                      |
|   -0.2% |       -144 B |          0.6% | 56.4 KiB → 56.2 KiB |     3 → 1 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                                                    |
| removed |        -96 B |  <0.1% → 0.0% |          96 B → 0 B |     2 → 0 | `<init>()`                                                                      | `java.util.HashSet`                                                                        |
| removed |        -80 B |  <0.1% → 0.0% |          80 B → 0 B |     1 → 0 | `<init>(LazyJavaResolverContext, JavaPackage, LazyJavaPackageFragment)`         | `kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.JvmPackageScope`              |
| removed |        -80 B |  <0.1% → 0.0% |          80 B → 0 B |     2 → 0 | `newFieldMap(int)`                                                              | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap`                                 |
|  -50.0% |        -48 B |         <0.1% |         96 B → 48 B |     4 → 2 | `toString()`                                                                    | `java.lang.StringBuilder`                                                                  |
|  -66.7% |        -48 B |         <0.1% |         72 B → 24 B |     3 → 1 | `newString(byte[], int, int)`                                                   | `java.lang.StringLatin1`                                                                   |
| removed |        -48 B |  <0.1% → 0.0% |          48 B → 0 B |     2 → 0 | `replace(byte[], char, char)`                                                   | `java.lang.StringLatin1`                                                                   |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |     1 → 0 | `<clinit>()`                                                                    | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$Kind` |
| removed |        -32 B |  <0.1% → 0.0% |          32 B → 0 B |     1 → 0 | `<init>(int)`                                                                   | `java.lang.AbstractStringBuilder`                                                          |
|  -25.0% |        -24 B |         <0.1% |         96 B → 72 B |     4 → 3 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                | `java.lang.String`                                                                         |

##### Ours

|  Change |      Delta |            % |                Size | Objects | Function                                                                                           | Location                                                                    |
| ------: | ---------: | -----------: | ------------------: | ------: | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed | -4.023 KiB | <0.1% → 0.0% |      4.02 KiB → 0 B |   1 → 0 | `rehash(int)`                                                                                      | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`                           |
| removed | -1.015 KiB | <0.1% → 0.0% |      1.02 KiB → 0 B |   1 → 0 | `<init>()`                                                                                         | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`   |
| removed |     -856 B | <0.1% → 0.0% |         856 B → 0 B |   1 → 0 | `newInstance(OutputStream, int)`                                                                   | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                           |
| removed |     -576 B | <0.1% → 0.0% |         576 B → 0 B |   1 → 0 | `createBuiltInsAndSymbolTable(Fir2IrComponentsStorage, Fir2IrSyntheticIrBuiltinsSymbolsContainer)` | `org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline`                          |
|  -66.7% |     -384 B |        <0.1% |       576 B → 192 B |   6 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                             |
| removed |     -280 B | <0.1% → 0.0% |         280 B → 0 B |   1 → 0 | `rehash(int)`                                                                                      | `it.unimi.dsi.fastutil.ints.IntOpenHashSet`                                 |
|  -27.5% |     -224 B |        <0.1% |       816 B → 592 B |   2 → 1 | `toArray()`                                                                                        | `org.jetbrains.org.objectweb.asm.tree.InsnList`                             |
| removed |     -200 B | <0.1% → 0.0% |         200 B → 0 B |   2 → 0 | `merge(SymbolTable, Frame, int)`                                                                   | `org.jetbrains.org.objectweb.asm.Frame`                                     |
|  -22.3% |     -168 B |        <0.1% |       752 B → 584 B |   8 → 5 | `<init>(int, int)`                                                                                 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                       |
| removed |     -152 B | <0.1% → 0.0% |         152 B → 0 B |   1 → 0 | `<init>(int, float)`                                                                               | `it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap`                             |
|   -9.4% |     -120 B |        <0.1% | 1.25 KiB → 1.13 KiB |   1 → 2 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`                    | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`             |
| removed |      -96 B | <0.1% → 0.0% |          96 B → 0 B |   1 → 0 | `buildPartial()`                                                                                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`                       |
| removed |      -88 B | <0.1% → 0.0% |          88 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`        |
| removed |      -64 B | <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`                    |
| removed |      -64 B | <0.1% → 0.0% |          64 B → 0 B |   1 → 0 | `<init>()`                                                                                         | `org.jetbrains.kotlin.fir.backend.Fir2IrCommonMemberStorage`                |
| removed |      -56 B | <0.1% → 0.0% |          56 B → 0 B |   1 → 0 | `visitMethodInsn(int, String, String, String, boolean)`                                            | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                           |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                        | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1` |
|  -50.0% |      -48 B |        <0.1% |         96 B → 48 B |   4 → 2 | `newFieldSet()`                                                                                    | `org.jetbrains.kotlin.protobuf.FieldSet`                                    |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |   2 → 0 | `toLookupTag(ClassId)`                                                                             | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                    |
| removed |      -48 B | <0.1% → 0.0% |          48 B → 0 B |   1 → 0 | `wrapWithMaxLocalCalc(MethodNode)`                                                                 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`                  |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |           % |          Size | Objects | Location                            |
| -----: | -----------: | ----------: | ------------: | ------: | ----------------------------------- |
|    new | +345.109 KiB | 0.0% → 9.5% | 0 B → 345 KiB |   0 → 1 | `java.util.zip.ZipFile$Source:1744` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |        Delta |      % |              Size | Objects | Location                                                             |
| -----: | -----------: | -----: | ----------------: | ------: | -------------------------------------------------------------------- |
| +21.8% | +153.039 KiB | 100.0% | 703 KiB → 856 KiB |   1 → 4 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:51` |

##### `zzUnpackcmap_blocks()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change |        Delta |             % |          Size | Objects | Location                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------ |
|    new | +109.015 KiB | 0.0% → 100.0% | 0 B → 109 KiB |   0 → 1 | `org.jetbrains.kotlin.lexer._JetLexer:274` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Objects | Location                |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------- |
| +25.3% | +64.867 KiB | 100.0% | 256 KiB → 321 KiB |       4 | `java.util.HashMap:710` |

##### `zzUnpacktrans()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change |       Delta |             % |           Size | Objects | Location                                   |
| -----: | ----------: | ------------: | -------------: | ------: | ------------------------------------------ |
|    new | +41.187 KiB | 0.0% → 100.0% | 0 B → 41.2 KiB |   0 → 1 | `org.jetbrains.kotlin.lexer._JetLexer:593` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|     Change |       Delta |      % |            Size | Objects | Location                |
| ---------: | ----------: | -----: | --------------: | ------: | ----------------------- |
| +236350.0% | +36.929 KiB | 100.0% | 16 B → 36.9 KiB |   1 → 2 | `java.util.Arrays:3482` |

##### `enlarge(int)` (`org.jetbrains.org.objectweb.asm.ByteVector`)

|  Change |   Delta |      % |              Size | Objects | Location                                         |
| ------: | ------: | -----: | ----------------: | ------: | ------------------------------------------------ |
| +697.3% | +28 KiB | 100.0% | 4.02 KiB → 32 KiB |       1 | `org.jetbrains.org.objectweb.asm.ByteVector:369` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |    Delta |      % |             Size | Objects | Location                |
| ------: | -------: | -----: | ---------------: | ------: | ----------------------- |
| +300.0% | +1,008 B | 100.0% | 336 B → 1.31 KiB |   1 → 3 | `java.util.Arrays:3513` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |  Delta |             % |        Size | Objects | Location                                        |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------- |
|    new | +528 B | 0.0% → 100.0% | 0 B → 528 B |   0 → 1 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `<init>(MethodNode, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change |  Delta |             % |        Size | Objects | Location                                                                          |
| -----: | -----: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- |
|    new | +512 B | 0.0% → 100.0% | 0 B → 512 B |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:51` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`)

| Change |  Delta |             % |        Size | Objects | Location                                                         |
| -----: | -----: | ------------: | ----------: | ------: | ---------------------------------------------------------------- |
|    new | +192 B | 0.0% → 100.0% | 0 B → 192 B |   0 → 2 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1:5079` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |  Delta |             % |        Size | Objects | Location                                                           |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------------ |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase:44` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |  Delta |      % |         Size | Objects | Location                 |
| ------: | -----: | -----: | -----------: | ------: | ------------------------ |
| +400.0% | +128 B | 100.0% | 32 B → 160 B |   1 → 5 | `java.util.HashMap:1909` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|  Change |  Delta |      % |          Size | Objects | Location                                                  |
| ------: | -----: | -----: | ------------: | ------: | --------------------------------------------------------- |
| +100.0% | +112 B | 100.0% | 112 B → 224 B |   1 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1:16780` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |      % |         Size | Objects | Location                |
| ------: | -----: | -----: | -----------: | ------: | ----------------------- |
| +185.7% | +104 B | 100.0% | 56 B → 160 B |   1 → 3 | `java.util.Arrays:3856` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|  Change | Delta |      % |         Size | Objects | Location                                                              |
| ------: | ----: | -----: | -----------: | ------: | --------------------------------------------------------------------- |
| +150.0% | +96 B | 100.0% | 64 B → 160 B |   2 → 5 | `org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder:36` |

##### `build()` (`org.jetbrains.kotlin.fir.java.declarations.FirJavaMethodBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                                              |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------- |
|    new | +88 B | 0.0% → 100.0% | 0 B → 88 B |   0 → 1 | `org.jetbrains.kotlin.fir.java.declarations.FirJavaMethodBuilder:253` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

| Change | Delta |             % |       Size | Objects | Location                               |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `jdk.internal.jimage.ImageLocation:64` |

##### `getIrExternalOrBuiltInsPackageFragment(FqName, FirModuleData, FirDeclarationOrigin, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage`)

| Change | Delta |             % |       Size | Objects | Location                                                        |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage:255` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`)

| Change | Delta |             % |       Size | Objects | Location                                                                              |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder:22` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$1`)

| Change | Delta |             % |       Size | Objects | Location                                                                 |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------ |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$1:15187` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % |       Size | Objects | Location                                         |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------ |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change | Delta |             % |       Size | Objects | Location                          |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `java.lang.invoke.MethodType:400` |

##### `newReflectionData(SoftReference, int)` (`java.lang.Class`)

| Change | Delta |             % |       Size | Objects | Location               |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `java.lang.Class:3406` |

##### `newConditionNode()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|  Change | Delta |      % |        Size | Objects | Location                                                                     |
| ------: | ----: | -----: | ----------: | ------: | ---------------------------------------------------------------------------- |
| +100.0% | +32 B | 100.0% | 32 B → 64 B |   1 → 2 | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject:1661` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % |       Size | Objects | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `java.util.concurrent.ConcurrentHashMap:1019` |

##### `<clinit>()` (`java.security.Security`)

| Change | Delta |             % |       Size | Objects | Location                    |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `java.security.Security:83` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |       Size | Objects | Location                        |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `jdk.internal.misc.Unsafe:1380` |

##### `listIterator(int)` (`java.util.ArrayList$SubList`)

| Change | Delta |             % |       Size | Objects | Location                           |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `java.util.ArrayList$SubList:1369` |

##### `toMutableList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change | Delta |             % |       Size | Objects | Location                                                |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `kotlin.collections.CollectionsKt___CollectionsKt:1512` |

##### `removeElements(int, int)` (`it.unimi.dsi.fastutil.ints.IntArrayList`)

| Change | Delta |             % |       Size | Objects | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `it.unimi.dsi.fastutil.ints.IntArrayList:665` |

##### `push(int)` (`org.jetbrains.org.objectweb.asm.Frame`)

| Change | Delta |             % |       Size | Objects | Location                                    |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.jetbrains.org.objectweb.asm.Frame:534` |

##### `setLocal(int, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

| Change | Delta |             % |       Size | Objects | Location                                    |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.jetbrains.org.objectweb.asm.Frame:514` |

##### `markNewLabel()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change | Delta |             % |       Size | Objects | Location                                                         |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:198` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change | Delta |             % |       Size | Objects | Location                                           |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `org.jetbrains.org.objectweb.asm.ClassReader:3886` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change | Delta |             % |       Size | Objects | Location                                              |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:510` |

##### `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change | Delta |             % |       Size | Objects | Location                                                              |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt:130` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

|  Change | Delta |      % |        Size | Objects | Location                                                   |
| ------: | ----: | -----: | ----------: | ------: | ---------------------------------------------------------- |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1:2037` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |      % |        Size | Objects | Location                                              |
| ------: | ----: | -----: | ----------: | ------: | ----------------------------------------------------- |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|   Change |        Delta |              % |                Size |   Objects | Location                |
| -------: | -----------: | -------------: | ------------------: | --------: | ----------------------- |
|   -16.7% | -552.789 KiB | 100.0% → 98.7% | 3.23 MiB → 2.69 MiB | 150 → 143 | `java.util.Arrays:3539` |
| +2169.1% |   +34.57 KiB |   <0.1% → 1.3% | 1.59 KiB → 36.2 KiB |         3 | `java.util.Arrays:3541` |

##### `rehash(int)` (`it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`)

|  Change |      Delta |             % |           Size | Objects | Location                                              |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------------------------------------- |
| removed | -4.023 KiB | 100.0% → 0.0% | 4.02 KiB → 0 B |   1 → 0 | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet:849` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |             Size | Objects | Location                |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------- |
| -75.0% | -1.195 KiB | 100.0% | 1.59 KiB → 408 B |  10 → 5 | `java.util.Arrays:3863` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |      Delta |             % |           Size | Objects | Location                                         |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------ |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `jdk.internal.org.objectweb.asm.SymbolTable:156` |

##### `resize(int)` (`java.util.IdentityHashMap`)

|  Change |      Delta |             % |           Size | Objects | Location                        |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `java.util.IdentityHashMap:486` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`)

|  Change |      Delta |             % |           Size | Objects | Location                                                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer:40` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |  Delta |             % |        Size | Objects | Location                                              |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------- |
| removed | -856 B | 100.0% → 0.0% | 856 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `createBuiltInsAndSymbolTable(Fir2IrComponentsStorage, Fir2IrSyntheticIrBuiltinsSymbolsContainer)` (`org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline`)

|  Change |  Delta |             % |        Size | Objects | Location                                               |
| ------: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------ |
| removed | -576 B | 100.0% → 0.0% | 576 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline:227` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |  Delta |      % |          Size | Objects | Location                                             |
| -----: | -----: | -----: | ------------: | ------: | ---------------------------------------------------- |
| -66.7% | -384 B | 100.0% | 576 B → 192 B |   6 → 2 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |          Size | Objects | Location                  |
| -----: | -----: | -----: | ------------: | ------: | ------------------------- |
| -60.0% | -336 B | 100.0% | 560 B → 224 B |  10 → 4 | `java.util.ArrayList:239` |

##### `rehash(int)` (`it.unimi.dsi.fastutil.ints.IntOpenHashSet`)

|  Change |  Delta |             % |        Size | Objects | Location                                        |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------------------------------- |
| removed | -280 B | 100.0% → 0.0% | 280 B → 0 B |   1 → 0 | `it.unimi.dsi.fastutil.ints.IntOpenHashSet:825` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

| Change |  Delta |      % |          Size | Objects | Location                                            |
| -----: | -----: | -----: | ------------: | ------: | --------------------------------------------------- |
| -27.5% | -224 B | 100.0% | 816 B → 592 B |   2 → 1 | `org.jetbrains.org.objectweb.asm.tree.InsnList:178` |

##### `merge(SymbolTable, Frame, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

|  Change |  Delta |             % |        Size | Objects | Location                                     |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.Frame:1183` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|  Change |  Delta |             % |        Size | Objects | Location                |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- |
| removed | -192 B | 100.0% → 0.0% | 192 B → 0 B |   3 → 0 | `java.util.HashSet:171` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

| Change |  Delta |      % |          Size | Objects | Location                                                 |
| -----: | -----: | -----: | ------------: | ------: | -------------------------------------------------------- |
| -22.3% | -168 B | 100.0% | 752 B → 584 B |   8 → 5 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `<init>(int, float)` (`it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap`)

|  Change |  Delta |             % |        Size | Objects | Location                                            |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------------------------------- |
| removed | -152 B | 100.0% → 0.0% | 152 B → 0 B |   1 → 0 | `it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap:100` |

##### `<init>(int)` (`java.util.ArrayList`)

| Change |  Delta |      % |         Size | Objects | Location                  |
| -----: | -----: | -----: | -----------: | ------: | ------------------------- |
| -60.0% | -144 B | 100.0% | 240 B → 96 B |   4 → 2 | `java.util.ArrayList:156` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |  Delta |      % |                Size | Objects | Location                    |
| -----: | -----: | -----: | ------------------: | ------: | --------------------------- |
|  -0.2% | -144 B | 100.0% | 56.4 KiB → 56.2 KiB |   3 → 1 | `java.lang.StringUTF16:211` |

##### `<init>()` (`java.util.HashSet`)

|  Change | Delta |             % |       Size | Objects | Location                |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   2 → 0 | `java.util.HashSet:107` |

##### `<init>(LazyJavaResolverContext, JavaPackage, LazyJavaPackageFragment)` (`kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.JvmPackageScope`)

|  Change | Delta |             % |       Size | Objects | Location                                                                         |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   1 → 0 | `kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.JvmPackageScope:42` |

##### `newFieldMap(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap`)

|  Change | Delta |             % |       Size | Objects | Location                                                       |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap:100` |

##### `toString()` (`java.lang.StringBuilder`)

| Change | Delta |      % |        Size | Objects | Location                      |
| -----: | ----: | -----: | ----------: | ------: | ----------------------------- |
| -50.0% | -48 B | 100.0% | 96 B → 48 B |   4 → 2 | `java.lang.StringBuilder:475` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change | Delta |      % |        Size | Objects | Location                     |
| -----: | ----: | -----: | ----------: | ------: | ---------------------------- |
| -66.7% | -48 B | 100.0% | 72 B → 24 B |   3 → 1 | `java.lang.StringLatin1:750` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change | Delta |             % |       Size | Objects | Location                     |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   2 → 0 | `java.lang.StringLatin1:317` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$Kind`)

|  Change | Delta |             % |       Size | Objects | Location                                                                                        |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$Kind:1072` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % |       Size | Objects | Location                              |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `java.lang.AbstractStringBuilder:101` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

| Change | Delta |      % |        Size | Objects | Location               |
| -----: | ----: | -----: | ----------: | ------: | ---------------------- |
| -25.0% | -24 B | 100.0% | 96 B → 72 B |   4 → 3 | `java.lang.String:709` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

|  Change |      Delta |             % |           Size | Objects | Location                                                           |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------------------------------------------------ |
| removed |  -1.25 KiB | 100.0% → 0.0% | 1.25 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:35` |
|     new | +1.132 KiB | 0.0% → 100.0% | 0 B → 1.13 KiB |   0 → 2 | `org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer:28` |

##### `buildPartial()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`)

|  Change | Delta |             % |       Size | Objects | Location                                                   |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder:6414` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`)

|  Change | Delta |             % |       Size | Objects | Location                                                                  |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------- |
| removed | -88 B | 100.0% → 0.0% | 88 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1:2479` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

|  Change | Delta |             % |       Size | Objects | Location                                                      |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1:7714` |

##### `<init>()` (`org.jetbrains.kotlin.fir.backend.Fir2IrCommonMemberStorage`)

|  Change | Delta |             % |       Size | Objects | Location                                                        |
| ------: | ----: | ------------: | ---------: | ------: | --------------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.fir.backend.Fir2IrCommonMemberStorage:71` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------- |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:379` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1`)

|  Change | Delta |             % |       Size | Objects | Location                                                                         |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1:1051` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change | Delta |      % |        Size | Objects | Location                                    |
| -----: | ----: | -----: | ----------: | ------: | ------------------------------------------- |
| -50.0% | -48 B | 100.0% | 96 B → 48 B |   4 → 2 | `org.jetbrains.kotlin.protobuf.FieldSet:92` |

##### `toLookupTag(ClassId)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change | Delta |             % |       Size | Objects | Location                                                    |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:36` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

|  Change | Delta |             % |       Size | Objects | Location                                                       |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt:179` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `initCEN(int, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Caller                                          | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change |        Delta |      % |              Size | Objects | Caller           | Location                                                                                     |
| -----: | -----------: | -----: | ----------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| +21.8% | +153.039 KiB | 100.0% | 703 KiB → 856 KiB |   1 → 4 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b001396000` |

##### `zzUnpackcmap_blocks()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change |        Delta |             % |          Size | Objects | Caller       | Location                               |
| -----: | -----------: | ------------: | ------------: | ------: | ------------ | -------------------------------------- |
|    new | +109.015 KiB | 0.0% → 100.0% | 0 B → 109 KiB |   0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.lexer._JetLexer` |

##### `resize()` (`java.util.HashMap`)

| Change |       Delta |      % |              Size | Objects | Caller                                          | Location            |
| -----: | ----------: | -----: | ----------------: | ------: | ----------------------------------------------- | ------------------- |
| +25.3% | +64.867 KiB | 100.0% | 256 KiB → 321 KiB |       4 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `zzUnpacktrans()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change |       Delta |             % |           Size | Objects | Caller       | Location                               |
| -----: | ----------: | ------------: | -------------: | ------: | ------------ | -------------------------------------- |
|    new | +41.187 KiB | 0.0% → 100.0% | 0 B → 41.2 KiB |   0 → 1 | `<clinit>()` | `org.jetbrains.kotlin.lexer._JetLexer` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |       Delta |             % |           Size | Objects | Caller      | Location                                 |
| ------: | ----------: | ------------: | -------------: | ------: | ----------- | ---------------------------------------- |
|     new | +36.617 KiB |  0.0% → 99.1% | 0 B → 36.6 KiB |   0 → 1 | `grow(int)` | `java.util.ArrayList`                    |
|     new |      +336 B |   0.0% → 0.9% |    0 B → 336 B |   0 → 1 | `copy()`    | `org.jetbrains.kotlin.util.ArrayMapImpl` |
| removed |       -16 B | 100.0% → 0.0% |     16 B → 0 B |   1 → 0 | `toArray()` | `java.util.ArrayList`                    |

##### `enlarge(int)` (`org.jetbrains.org.objectweb.asm.ByteVector`)

|  Change |   Delta |      % |              Size | Objects | Caller            | Location                                     |
| ------: | ------: | -----: | ----------------: | ------: | ----------------- | -------------------------------------------- |
| +697.3% | +28 KiB | 100.0% | 4.02 KiB → 32 KiB |       1 | `putUTF8(String)` | `org.jetbrains.org.objectweb.asm.ByteVector` |

##### `copyOf(Object[], int, Class)` (`java.util.Arrays`)

|  Change |    Delta |      % |             Size | Objects | Caller                  | Location           |
| ------: | -------: | -----: | ---------------: | ------: | ----------------------- | ------------------ |
| +300.0% | +1,008 B | 100.0% | 336 B → 1.31 KiB |   1 → 3 | `copyOf(Object[], int)` | `java.util.Arrays` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |  Delta |             % |        Size | Objects | Caller            | Location                                    |
| -----: | -----: | ------------: | ----------: | ------: | ----------------- | ------------------------------------------- |
|    new | +528 B | 0.0% → 100.0% | 0 B → 528 B |   0 → 1 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `<init>(MethodNode, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change |  Delta |             % |        Size | Objects | Caller                                                       | Location                                                                       |
| -----: | -----: | ------------: | ----------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------ |
|    new | +512 B | 0.0% → 100.0% | 0 B → 512 B |   0 → 1 | `<init>(MethodNode, boolean, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1`)

| Change |  Delta |             % |        Size | Objects | Caller                                                      | Location                                                    |
| -----: | -----: | ------------: | ----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +192 B | 0.0% → 100.0% | 0 B → 192 B |   0 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$1` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

| Change |  Delta |             % |        Size | Objects | Caller                           | Location                                                        |
| -----: | -----: | ------------: | ----------: | ------: | -------------------------------- | --------------------------------------------------------------- |
|    new | +128 B | 0.0% → 100.0% | 0 B → 128 B |   0 → 1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |  Delta |      % |         Size | Objects | Caller                                          | Location            |
| ------: | -----: | -----: | -----------: | ------: | ----------------------------------------------- | ------------------- |
| +400.0% | +128 B | 100.0% | 32 B → 160 B |   1 → 5 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Function$1`)

|  Change |  Delta |      % |          Size | Objects | Caller                                                      | Location                                            |
| ------: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------- |
| +100.0% | +112 B | 100.0% | 112 B → 224 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function$1` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |  Delta |      % |         Size | Objects | Caller                                | Location           |
| ------: | -----: | -----: | -----------: | ------: | ------------------------------------- | ------------------ |
| +185.7% | +104 B | 100.0% | 56 B → 160 B |   1 → 3 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `build()` (`org.jetbrains.kotlin.fir.types.builder.FirResolvedTypeRefBuilder`)

|  Change | Delta |             % |        Size | Objects | Caller                                                                                                            | Location                                                                           |
| ------: | ----: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| +200.0% | +64 B | 50.0% → 60.0% | 32 B → 96 B |   1 → 3 | `toDefaultResolvedTypeRef(ConeClassLikeLookupTag)`                                                                | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`                  |
|     new | +64 B |  0.0% → 40.0% |  0 B → 64 B |   0 → 2 | `typeRef(ProtoBuf$Type)`                                                                                          | `org.jetbrains.kotlin.fir.deserialization.FirTypeDeserializer`                     |
| removed | -32 B |  50.0% → 0.0% |  32 B → 0 B |   1 → 0 | `transformType(FirTypeRef, ConeKotlinType, ConeDiagnostic, TypeResolutionConfiguration, FirResolvedSymbolOrigin)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirSpecificTypeResolverTransformer` |

##### `build()` (`org.jetbrains.kotlin.fir.java.declarations.FirJavaMethodBuilder`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                                         | Location                                        |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
|    new | +88 B | 0.0% → 100.0% | 0 B → 88 B |   0 → 1 | `convertJavaMethodToFir(JavaClass, JavaMethod, ClassId, ConeClassLikeType, FirModuleData, FirRegularClassSymbol, JavaPackage)` | `org.jetbrains.kotlin.fir.java.FirJavaFacadeKt` |

##### `decompress(ByteBuffer, int)` (`jdk.internal.jimage.ImageLocation`)

| Change | Delta |             % |       Size | Objects | Caller               | Location                               |
| -----: | ----: | ------------: | ---------: | ------: | -------------------- | -------------------------------------- |
|    new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 1 | `getAttributes(int)` | `jdk.internal.jimage.BasicImageReader` |

##### `getIrExternalOrBuiltInsPackageFragment(FqName, FirModuleData, FirDeclarationOrigin, boolean)` (`org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage`)

| Change | Delta |             % |       Size | Objects | Caller                                                                                                           | Location                                                    |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `findIrParent$org_jetbrains_kotlin_fir2ir(FqName, ConeClassLikeLookupTag, FirBasedSymbol, FirDeclarationOrigin)` | `org.jetbrains.kotlin.fir.backend.Fir2IrDeclarationStorage` |

##### `<init>()` (`org.jetbrains.kotlin.fir.expressions.builder.FirAnnotationArgumentMappingBuilder`)

| Change | Delta |             % |       Size | Objects | Caller       | Location                                                                           |
| -----: | ----: | ------------: | ---------: | ------: | ------------ | ---------------------------------------------------------------------------------- |
|    new | +64 B | 0.0% → 100.0% | 0 B → 64 B |   0 → 1 | `visitEnd()` | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader$loadAnnotation$1` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$1`)

| Change | Delta |             % |       Size | Objects | Caller                                                      | Location                                                           |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | ------------------------------------------------------------------ |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$1` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change | Delta |             % |       Size | Objects | Caller                                                            | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |

##### `getDeclaredConstructors0(boolean)` (`java.lang.Class`)

| Change | Delta |             % |       Size | Objects | Caller                                    | Location          |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------------------- | ----------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `privateGetDeclaredConstructors(boolean)` | `java.lang.Class` |

##### `makeImpl(Class, Class[], boolean)` (`java.lang.invoke.MethodType`)

| Change | Delta |             % |       Size | Objects | Caller                               | Location                      |
| -----: | ----: | ------------: | ---------: | ------: | ------------------------------------ | ----------------------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `insertParameterTypes(int, Class[])` | `java.lang.invoke.MethodType` |

##### `newReflectionData(SoftReference, int)` (`java.lang.Class`)

| Change | Delta |             % |       Size | Objects | Caller             | Location          |
| -----: | ----: | ------------: | ---------: | ------: | ------------------ | ----------------- |
|    new | +40 B | 0.0% → 100.0% | 0 B → 40 B |   0 → 1 | `reflectionData()` | `java.lang.Class` |

##### `newConditionNode()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|  Change | Delta |      % |        Size | Objects | Caller                  | Location                                                                |
| ------: | ----: | -----: | ----------: | ------: | ----------------------- | ----------------------------------------------------------------------- |
| +100.0% | +32 B | 100.0% | 32 B → 64 B |   1 → 2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `putVal(Object, Object, boolean)` (`java.util.concurrent.ConcurrentHashMap`)

| Change | Delta |             % |       Size | Objects | Caller                        | Location                                 |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------- | ---------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `putIfAbsent(Object, Object)` | `java.util.concurrent.ConcurrentHashMap` |

##### `<clinit>()` (`java.security.Security`)

| Change | Delta |             % |       Size | Objects | Caller                           | Location                               |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------- | -------------------------------------- |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `getOverridableProperty(String)` | `sun.security.util.SecurityProperties` |

##### `allocateUninitializedArray(Class, int)` (`jdk.internal.misc.Unsafe`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                       |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------------ |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `newArray(long)` | `java.lang.StringConcatHelper` |

##### `listIterator(int)` (`java.util.ArrayList$SubList`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                 |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | ------------------------ |
|    new | +32 B | 0.0% → 100.0% | 0 B → 32 B |   0 → 1 | `listIterator()` | `java.util.AbstractList` |

##### `toMutableList(Iterable)` (`kotlin.collections.CollectionsKt___CollectionsKt`)

| Change | Delta |             % |       Size | Objects | Caller                             | Location                                           |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------- | -------------------------------------------------- |
|    new | +24 B | 0.0% → 100.0% | 0 B → 24 B |   0 → 1 | `sortedWith(Iterable, Comparator)` | `kotlin.collections.CollectionsKt___CollectionsKt` |

##### `removeElements(int, int)` (`it.unimi.dsi.fastutil.ints.IntArrayList`)

| Change | Delta |             % |       Size | Objects | Caller                                        | Location                                  |
| -----: | ----: | ------------: | ---------: | ------: | --------------------------------------------- | ----------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `rollbackTo(PsiBuilderImpl$ProductionMarker)` | `com.intellij.lang.impl.MarkerProduction` |

##### `push(int)` (`org.jetbrains.org.objectweb.asm.Frame`)

| Change | Delta |             % |       Size | Objects | Caller                                   | Location                                |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------- | --------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `execute(int, int, Symbol, SymbolTable)` | `org.jetbrains.org.objectweb.asm.Frame` |

##### `setLocal(int, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

| Change | Delta |             % |       Size | Objects | Caller                                   | Location                                |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------------------------- | --------------------------------------- |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `execute(int, int, Symbol, SymbolTable)` | `org.jetbrains.org.objectweb.asm.Frame` |

##### `markNewLabel()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

| Change | Delta |             % |       Size | Objects | Caller                                 | Location                                                     |
| -----: | ----: | ------------: | ---------: | ------: | -------------------------------------- | ------------------------------------------------------------ |
|    new | +56 B | 0.0% → 100.0% | 0 B → 56 B |   0 → 1 | `visitVariable(IrVariable, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `readUtf(int, int, char[])` (`org.jetbrains.org.objectweb.asm.ClassReader`)

| Change | Delta |             % |       Size | Objects | Caller                 | Location                                      |
| -----: | ----: | ------------: | ---------: | ------: | ---------------------- | --------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 2 | `readUtf(int, char[])` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `visitLineNumber(int, Label)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change | Delta |             % |       Size | Objects | Caller                        | Location                                        |
| -----: | ----: | ------------: | ---------: | ------: | ----------------------------- | ----------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `visitLineNumber(int, Label)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt`)

| Change | Delta |             % |       Size | Objects | Caller           | Location                                                                                     |
| -----: | ----: | ------------: | ---------: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
|    new | +48 B | 0.0% → 100.0% | 0 B → 48 B |   0 → 1 | `invoke(Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b0013933d0` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1`)

|  Change | Delta |      % |        Size | Objects | Caller                                                      | Location                                              |
| ------: | ----: | -----: | ----------: | ------: | ----------------------------------------------------------- | ----------------------------------------------------- |
| +100.0% | +40 B | 100.0% | 40 B → 80 B |   1 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$1` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Caller                   | Location                                           |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------ | -------------------------------------------------- |
|     new | +80 B | 0.0% → 100.0% | 0 B → 80 B |   0 → 2 | `visitVarInsn(int, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor`    |
| removed | -40 B | 100.0% → 0.0% | 40 B → 0 B |   1 → 0 | `accept(MethodVisitor)`  | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

|   Change |        Delta |              % |                Size |   Objects | Caller                        | Location                          |
| -------: | -----------: | -------------: | ------------------: | --------: | ----------------------------- | --------------------------------- |
|   -16.7% | -552.789 KiB | 100.0% → 98.7% | 3.23 MiB → 2.69 MiB | 150 → 143 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| +2169.1% |   +34.57 KiB |   <0.1% → 1.3% | 1.59 KiB → 36.2 KiB |         3 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `clone()` (`java.lang.Object`)

| Change |        Delta |      % |                Size | Objects | Caller                | Location           |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------- | ------------------ |
| -10.0% | -156.429 KiB | 100.0% | 1.52 MiB → 1.37 MiB | 66 → 49 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `rehash(int)` (`it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`)

|  Change |      Delta |             % |           Size | Objects | Caller        | Location                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | ------------------------------------------------- |
| removed | -4.023 KiB | 100.0% → 0.0% | 4.02 KiB → 0 B |   1 → 0 | `add(Object)` | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |             Size | Objects | Caller                          | Location           |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------- | ------------------ |
| -75.0% | -1.195 KiB | 100.0% | 1.59 KiB → 408 B |  10 → 5 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(ClassWriter)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |      Delta |             % |           Size | Objects | Caller                     | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `resize(int)` (`java.util.IdentityHashMap`)

|  Change |      Delta |             % |           Size | Objects | Caller                | Location                    |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | --------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `put(Object, Object)` | `java.util.IdentityHashMap` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer`)

|  Change |      Delta |             % |           Size | Objects | Caller                                                                                   | Location                                                              |
| ------: | ---------: | ------------: | -------------: | ------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |  Delta |             % |        Size | Objects | Caller                  | Location                                            |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- | --------------------------------------------------- |
| removed | -856 B | 100.0% → 0.0% | 856 B → 0 B |   1 → 0 | `writeTo(OutputStream)` | `org.jetbrains.kotlin.protobuf.AbstractMessageLite` |

##### `createBuiltInsAndSymbolTable(Fir2IrComponentsStorage, Fir2IrSyntheticIrBuiltinsSymbolsContainer)` (`org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline`)

|  Change |  Delta |             % |        Size | Objects | Caller                  | Location                                           |
| ------: | -----: | ------------: | ----------: | ------: | ----------------------- | -------------------------------------------------- |
| removed | -576 B | 100.0% → 0.0% | 576 B → 0 B |   1 → 0 | `runFir2IrConversion()` | `org.jetbrains.kotlin.fir.pipeline.Fir2IrPipeline` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |  Delta |      % |          Size | Objects | Caller                                                      | Location                                        |
| -----: | -----: | -----: | ------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| -66.7% | -384 B | 100.0% | 576 B → 192 B |   6 → 2 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |  Delta |              % |          Size | Objects | Caller               | Location              |
| ------: | -----: | -------------: | ------------: | ------: | -------------------- | --------------------- |
|  -55.6% | -280 B | 90.0% → 100.0% | 504 B → 224 B |   9 → 4 | `grow()`             | `java.util.ArrayList` |
| removed |  -56 B |   10.0% → 0.0% |    56 B → 0 B |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `initClassName()` (`java.lang.Class`)

| Change |  Delta |      % |         Size | Objects | Caller      | Location          |
| -----: | -----: | -----: | -----------: | ------: | ----------- | ----------------- |
| -87.0% | -320 B | 100.0% | 368 B → 48 B |   5 → 2 | `getName()` | `java.lang.Class` |

##### `rehash(int)` (`it.unimi.dsi.fastutil.ints.IntOpenHashSet`)

|  Change |  Delta |             % |        Size | Objects | Caller     | Location                                    |
| ------: | -----: | ------------: | ----------: | ------: | ---------- | ------------------------------------------- |
| removed | -280 B | 100.0% → 0.0% | 280 B → 0 B |   1 → 0 | `add(int)` | `it.unimi.dsi.fastutil.ints.IntOpenHashSet` |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

| Change |  Delta |      % |          Size | Objects | Caller                                                    | Location                |
| -----: | -----: | -----: | ------------: | ------: | --------------------------------------------------------- | ----------------------- |
| -29.7% | -240 B | 100.0% | 808 B → 568 B |   7 → 5 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|  Change |  Delta |             % |        Size | Objects | Caller                      | Location                                                               |
| ------: | -----: | ------------: | ----------: | ------: | --------------------------- | ---------------------------------------------------------------------- |
|     new | +592 B | 0.0% → 100.0% | 0 B → 592 B |   0 → 1 | `run()`                     | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor` |
| removed | -520 B |  63.7% → 0.0% | 520 B → 0 B |   1 → 0 | `indexOf(AbstractInsnNode)` | `org.jetbrains.org.objectweb.asm.tree.InsnList`                        |
| removed | -296 B |  36.3% → 0.0% | 296 B → 0 B |   1 → 0 | `get(int)`                  | `org.jetbrains.org.objectweb.asm.tree.InsnList`                        |

##### `merge(SymbolTable, Frame, int)` (`org.jetbrains.org.objectweb.asm.Frame`)

|  Change |  Delta |             % |        Size | Objects | Caller               | Location                                       |
| ------: | -----: | ------------: | ----------: | ------: | -------------------- | ---------------------------------------------- |
| removed | -200 B | 100.0% → 0.0% | 200 B → 0 B |   2 → 0 | `computeAllFrames()` | `org.jetbrains.org.objectweb.asm.MethodWriter` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

|  Change |  Delta |            % |        Size | Objects | Caller        | Location                  |
| ------: | -----: | -----------: | ----------: | ------: | ------------- | ------------------------- |
| removed | -128 B | 66.7% → 0.0% | 128 B → 0 B |   2 → 0 | `<init>()`    | `java.util.LinkedHashSet` |
| removed |  -64 B | 33.3% → 0.0% |  64 B → 0 B |   1 → 0 | `<init>(int)` | `java.util.LinkedHashSet` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |  Delta |             % |          Size | Objects | Caller                                           | Location                                                                                          |
| ------: | -----: | ------------: | ------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
|  -43.9% | -144 B | 43.6% → 31.5% | 328 B → 184 B |   3 → 1 | `<init>(FixStackAnalyzer, int, int)`             | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`               |
| removed |  -72 B |   9.6% → 0.0% |    72 B → 0 B |   1 → 0 | `<init>(UninitializedStoresProcessor, int, int)` | `org.jetbrains.kotlin.codegen.coroutines.UninitializedStoresProcessor$UninitializedNewValueFrame` |
|     new |  +40 B |   0.0% → 6.8% |    0 B → 40 B |   0 → 1 | `preprocessNodeBeforeInline$lambda$0(int, int)`  | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                               |
|   +7.1% |   +8 B | 14.9% → 20.5% | 112 B → 120 B |       1 | `<init>(int, int)`                               | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                                    |

##### `<init>(int, float)` (`it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap`)

|  Change |  Delta |             % |        Size | Objects | Caller     | Location                                        |
| ------: | -----: | ------------: | ----------: | ------: | ---------- | ----------------------------------------------- |
| removed | -152 B | 100.0% → 0.0% | 152 B → 0 B |   1 → 0 | `<init>()` | `it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap` |

##### `<init>(int)` (`java.util.ArrayList`)

|  Change |  Delta |            % |        Size | Objects | Caller                                                                                                    | Location                                                                                  |
| ------: | -----: | -----------: | ----------: | ------: | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| removed | -160 B | 66.7% → 0.0% | 160 B → 0 B |   2 → 0 | `ensureEntryArrayMutable()`                                                                               | `org.jetbrains.kotlin.protobuf.SmallSortedMap`                                            |
|     new |  +40 B | 0.0% → 41.7% |  0 B → 40 B |   0 → 1 | `parseClassTypeSignature()`                                                                               | `sun.reflect.generics.parser.SignatureParser`                                             |
| removed |  -24 B | 10.0% → 0.0% |  24 B → 0 B |   1 → 0 | `create(String, int, String, String, JavaClass, ClassifierResolutionContext, BinaryClassSignatureParser)` | `org.jetbrains.kotlin.load.java.structure.impl.classFiles.BinaryJavaMethodBase$Companion` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

| Change |  Delta |      % |                Size | Objects | Caller                           | Location           |
| -----: | -----: | -----: | ------------------: | ------: | -------------------------------- | ------------------ |
|  -0.2% | -144 B | 100.0% | 56.4 KiB → 56.2 KiB |   3 → 1 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `<init>()` (`java.util.HashSet`)

|  Change | Delta |            % |       Size | Objects | Caller                                                                                | Location                                                                                           |
| ------: | ----: | -----------: | ---------: | ------: | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed | -48 B | 50.0% → 0.0% | 48 B → 0 B |   1 → 0 | `processLabels(TemporaryVariablesEliminationTransformer$ControlFlowGraph)`            | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| removed | -48 B | 50.0% → 0.0% | 48 B → 0 B |   1 → 0 | `computeExpandedTypeForInlineClass(TypeSystemCommonBackendContext, KotlinTypeMarker)` | `org.jetbrains.kotlin.types.ExpandedTypeUtilsKt`                                                   |

##### `<init>(LazyJavaResolverContext, JavaPackage, LazyJavaPackageFragment)` (`kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.JvmPackageScope`)

|  Change | Delta |             % |       Size | Objects | Caller                                         | Location                                                                              |
| ------: | ----: | ------------: | ---------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   1 → 0 | `<init>(LazyJavaResolverContext, JavaPackage)` | `kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaPackageFragment` |

##### `newFieldMap(int)` (`kotlin.reflect.jvm.internal.impl.protobuf.SmallSortedMap`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                                             |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | ---------------------------------------------------- |
| removed | -80 B | 100.0% → 0.0% | 80 B → 0 B |   2 → 0 | `<init>()` | `kotlin.reflect.jvm.internal.impl.protobuf.FieldSet` |

##### `toString()` (`java.lang.StringBuilder`)

|  Change | Delta |            % |       Size | Objects | Caller                                          | Location                                 |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------------------------- | ---------------------------------------- |
| removed | -48 B | 50.0% → 0.0% | 48 B → 0 B |   2 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt` |
| removed | -24 B | 25.0% → 0.0% | 24 B → 0 B |   1 → 0 | `resolve(Path)`                                 | `jdk.internal.jrtfs.JrtPath`             |
|     new | +24 B | 0.0% → 50.0% | 0 B → 24 B |   0 → 1 | `getDescriptor(Class)`                          | `org.jetbrains.org.objectweb.asm.Type`   |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change | Delta |      % |        Size | Objects | Caller                | Location           |
| -----: | ----: | -----: | ----------: | ------: | --------------------- | ------------------ |
| -66.7% | -48 B | 100.0% | 72 B → 24 B |   3 → 1 | `substring(int, int)` | `java.lang.String` |

##### `replace(byte[], char, char)` (`java.lang.StringLatin1`)

|  Change | Delta |             % |       Size | Objects | Caller                | Location           |
| ------: | ----: | ------------: | ---------: | ------: | --------------------- | ------------------ |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   2 → 0 | `replace(char, char)` | `java.lang.String` |

##### `<clinit>()` (`kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$Kind`)

|  Change | Delta |             % |       Size | Objects | Caller         | Location                                                                              |
| ------: | ----: | ------------: | ---------: | ------: | -------------- | ------------------------------------------------------------------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `initFields()` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change | Delta |             % |       Size | Objects | Caller     | Location                  |
| ------: | ----: | ------------: | ---------: | ------: | ---------- | ------------------------- |
| removed | -32 B | 100.0% → 0.0% | 32 B → 0 B |   1 → 0 | `<init>()` | `java.lang.StringBuilder` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

| Change | Delta |      % |        Size | Objects | Caller                                  | Location             |
| -----: | ----: | -----: | ----------: | ------: | --------------------------------------- | -------------------- |
| -25.0% | -24 B | 100.0% | 96 B → 72 B |   4 → 3 | `newStringUTF8NoRepl(byte[], int, int)` | `java.lang.System$2` |

##### `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)` (`org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer`)

| Change |  Delta |              % |             Size | Objects | Caller                                                        | Location                                                               |
| -----: | -----: | -------------: | ---------------: | ------: | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| -48.1% | -616 B | 100.0% → 57.2% | 1.25 KiB → 664 B |       1 | `<init>(String, MethodNode, Interpreter, Function2)`          | `org.jetbrains.kotlin.codegen.optimization.fixStack.FastStackAnalyzer` |
|    new | +496 B |   0.0% → 42.8% |      0 B → 496 B |   0 → 1 | `<init>(String, MethodNode, Interpreter, boolean, Function2)` | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`  |

##### `buildPartial()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder`)

|  Change | Delta |             % |       Size | Objects | Caller    | Location                                              |
| ------: | ----: | ------------: | ---------: | ------: | --------- | ----------------------------------------------------- |
| removed | -96 B | 100.0% → 0.0% | 96 B → 0 B |   1 → 0 | `build()` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Builder` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1`)

|  Change | Delta |             % |       Size | Objects | Caller                                                      | Location                                                             |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| removed | -88 B | 100.0% → 0.0% | 88 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value$1` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

|  Change | Delta |             % |       Size | Objects | Caller                                                      | Location                                                 |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1` |

##### `<init>()` (`org.jetbrains.kotlin.fir.backend.Fir2IrCommonMemberStorage`)

|  Change | Delta |             % |       Size | Objects | Caller                                                                                                                                                                                                                                                                        | Location                                          |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| removed | -64 B | 100.0% → 0.0% | 64 B → 0 B |   1 → 0 | `convertToIrAndActualize-MT2kVtw$default(List, Fir2IrExtensions, Fir2IrConfiguration, Collection, KotlinMangler$IrMangler, Fir2IrVisibilityConverter, KotlinBuiltIns, Function1, IrSpecialAnnotationsProvider, Function1, Fir2IrCommonMemberStorage, Function1, int, Object)` | `org.jetbrains.kotlin.fir.pipeline.ConvertToIrKt` |

##### `visitMethodInsn(int, String, String, String, boolean)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change | Delta |             % |       Size | Objects | Caller                                          | Location                                                     |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------- | ------------------------------------------------------------ |
| removed | -56 B | 100.0% → 0.0% | 56 B → 0 B |   1 → 0 | `invokestatic(String, String, String, boolean)` | `org.jetbrains.org.objectweb.asm.commons.InstructionAdapter` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1`)

|  Change | Delta |             % |       Size | Objects | Caller                                                      | Location                                                                    |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$1` |

##### `newFieldSet()` (`org.jetbrains.kotlin.protobuf.FieldSet`)

| Change | Delta |      % |        Size | Objects | Caller     | Location                                                               |
| -----: | ----: | -----: | ----------: | ------: | ---------- | ---------------------------------------------------------------------- |
| -50.0% | -48 B | 100.0% | 96 B → 48 B |   4 → 2 | `<init>()` | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |

##### `toLookupTag(ClassId)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

|  Change | Delta |            % |       Size | Objects | Caller                                                                                          | Location                                                                   |
| ------: | ----: | -----------: | ---------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| removed | -24 B | 50.0% → 0.0% | 24 B → 0 B |   1 → 0 | `loadAnnotation(ClassId, List)`                                                                 | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader`          |
| removed | -24 B | 50.0% → 0.0% | 24 B → 0 B |   1 → 0 | `deserializeAnnotation(FirSession, ProtoBuf$Annotation, NameResolver, AnnotationUseSiteTarget)` | `org.jetbrains.kotlin.fir.deserialization.AnnotationDeserializationUtilKt` |

##### `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`)

|  Change | Delta |             % |       Size | Objects | Caller                                    | Location                                                   |
| ------: | ----: | ------------: | ---------: | ------: | ----------------------------------------- | ---------------------------------------------------------- |
| removed | -48 B | 100.0% → 0.0% | 48 B → 0 B |   1 → 0 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |        Delta |             % |                Size |   Objects | Function                                                                                           | Location                                                    |
| -----: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000`        |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x000000b001009400`         |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                          |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`           |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`           |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                                  |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `phaseBody(PipelineContext, PipelineArtifact)`                                                     | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `phaseBody(LoggingContext, Object)`                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                         | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                               | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| +54.3% | +425.601 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 161 → 137 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| +54.3% | +425.492 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 135 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                        | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% | +425.421 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 129 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |

##### Standard library

| Change |        Delta |             % |                Size |   Objects | Function                                                                    | Location                                             |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------- | ---------------------------------------------------- |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeStatic(Object, Object)`                                              | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000` |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object, Object)`                                            | `java.lang.invoke.LambdaForm$MH.0x000000b001009400`  |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeExact_MT(Object, Object, Object, Object)`                            | `java.lang.invoke.Invokers$Holder`                   |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeImpl(Object, Object[])`                                              | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object[])`                                                  | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object[])`                                                  | `java.lang.reflect.Method`                           |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `initCEN(int, ZipCoder)`                                                    | `java.util.zip.ZipFile$Source`                       |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)`                             | `java.util.zip.ZipFile$Source`                       |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `get(File, boolean, ZipCoder)`                                              | `java.util.zip.ZipFile$Source`                       |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>(ZipFile, ZipCoder, File, int)`                                      | `java.util.zip.ZipFile$CleanableResource`            |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>(File, int, Charset)`                                                | `java.util.zip.ZipFile`                              |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>(File, int)`                                                         | `java.util.zip.ZipFile`                              |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>(File, boolean, int, Runtime$Version)`                               | `java.util.jar.JarFile`                              |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `getJarFile(URL)`                                                           | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$JarLoader$1`       |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController`                     |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)`             | `java.security.AccessController`                     |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `ensureOpen()`                                                              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)`              | `jdk.internal.loader.URLClassPath$JarLoader`         |
| +10.5% | +345.109 KiB | 35.7% → 39.1% | 3.21 MiB → 3.54 MiB |     1 → 2 | `run()`                                                                     | `jdk.internal.loader.URLClassPath$3`                 |

##### Ours

| Change |        Delta |             % |                Size |   Objects | Function                                                                                                                                      | Location                                                    |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`      |
| +18.9% |  +770.71 KiB | 44.2% → 52.1% | 3.97 MiB → 4.72 MiB | 162 → 139 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `phaseBody(LoggingContext, Object)`                                                                                                           | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`           |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`     |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                    | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |
| +54.5% | +426.101 KiB |  8.5% → 13.0% |  783 KiB → 1.18 MiB | 153 → 125 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                          | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`        |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| +54.3% | +425.632 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 137 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| +54.3% | +425.601 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 161 → 137 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`     |
| +54.3% | +425.492 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 160 → 135 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% | +425.421 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 129 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| +54.3% | +425.421 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 129 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                |
| +54.3% | +425.421 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 129 | `execImpl(MessageCollector, Services, CommonCompilerArguments)`                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler`               |
| +54.3% |  +425.39 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 128 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| +54.3% |  +425.39 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 128 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| +54.3% |  +425.39 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 128 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |
| +54.3% |  +425.39 KiB |  8.5% → 13.0% |  784 KiB → 1.18 MiB | 155 → 128 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`     |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                                                                                 | Location                                                                                        |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  -14.6% | -709.218 KiB | 53.0% → 44.8% | 4.76 MiB → 4.06 MiB | 216 → 192 | `toByteArray()`                                                                                                                                          | `java.io.ByteArrayOutputStream`                                                                 |
|  -13.2% | -677.046 KiB | 55.8% → 47.9% | 5.01 MiB → 4.35 MiB | 225 → 204 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                          |
|  -13.2% | -677.046 KiB | 55.8% → 47.9% | 5.01 MiB → 4.35 MiB | 225 → 204 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                          |
|  -13.8% | -674.648 KiB | 53.0% → 45.2% |  4.76 MiB → 4.1 MiB | 219 → 195 | `copyOf(byte[], int)`                                                                                                                                    | `java.util.Arrays`                                                                              |
|  -10.0% | -156.429 KiB | 17.0% → 15.1% | 1.52 MiB → 1.37 MiB |   66 → 49 | `clone()`                                                                                                                                                | `java.lang.Object`                                                                              |
|  -82.7% |   -5.078 KiB |  0.1% → <0.1% | 6.14 KiB → 1.06 KiB |     6 → 3 | `generateAnnotations()`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                         |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                         |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `invoke(Object)`                                                                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000b0018d6420`              |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)`                                                   | `org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`                                            |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `generateKotlinMetadataAnnotation()`                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                         |
| removed |   -4.023 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `rehash(int)`                                                                                                                                            | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`                                               |
| removed |   -4.023 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `add(Object)`                                                                                                                                            | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`                                               |
| removed |   -4.015 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `visit(String, Object)`                                                                                                                                  | `org.jetbrains.org.objectweb.asm.AnnotationWriter`                                              |
| removed |   -4.015 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `writeAnnotationData(AnnotationVisitor, String[], String[])`                                                                                             | `org.jetbrains.kotlin.codegen.AsmUtil`                                                          |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage$lambda$0(ObjectOpenHashSet, VirtualFile, JavaRoot$RootType)`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                            |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `invoke(Object, Object)`                                                                                                                                 | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl$$Lambda.0x000000b0015af4c8` |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                                                                   | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                                   |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                                                                   | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex`                        |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `traverseDirectoriesInPackage$default(JvmDependenciesIndex, FqName, Set, Function2, int, Object)`                                                        | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndex`                                       |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage(FqName)`                                                                                                                       | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                            |

##### Standard library

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                                                 | Location                                             |
| ------: | -----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
|  -14.6% | -709.218 KiB | 53.0% → 44.8% | 4.76 MiB → 4.06 MiB | 216 → 192 | `toByteArray()`                                                                                                          | `java.io.ByteArrayOutputStream`                      |
|  -13.8% | -674.648 KiB | 53.0% → 45.2% |  4.76 MiB → 4.1 MiB | 219 → 195 | `copyOf(byte[], int)`                                                                                                    | `java.util.Arrays`                                   |
|  -10.0% | -156.429 KiB | 17.0% → 15.1% | 1.52 MiB → 1.37 MiB |   66 → 49 | `clone()`                                                                                                                | `java.lang.Object`                                   |
|  -75.0% |   -1.195 KiB |         <0.1% |    1.59 KiB → 408 B |    10 → 5 | `copyOfRangeByte(byte[], int, int)`                                                                                      | `java.util.Arrays`                                   |
|  -80.4% |   -1.156 KiB |         <0.1% |    1.44 KiB → 288 B |     9 → 6 | `toString()`                                                                                                             | `java.lang.StringBuilder`                            |
|  -82.6% |   -1.109 KiB |         <0.1% |    1.34 KiB → 240 B |     5 → 4 | `<init>(AbstractStringBuilder, Void)`                                                                                    | `java.lang.String`                                   |
|  -82.6% |   -1.109 KiB |         <0.1% |    1.34 KiB → 240 B |     5 → 4 | `<init>(StringBuilder)`                                                                                                  | `java.lang.String`                                   |
|  -66.4% |   -1.093 KiB |         <0.1% |    1.65 KiB → 568 B |    11 → 8 | `copyOfRange(byte[], int, int)`                                                                                          | `java.util.Arrays`                                   |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(ClassWriter)`                                                                                                    | `jdk.internal.org.objectweb.asm.SymbolTable`         |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(ClassReader, int)`                                                                                               | `jdk.internal.org.objectweb.asm.ClassWriter`         |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `<init>(int)`                                                                                                            | `jdk.internal.org.objectweb.asm.ClassWriter`         |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `resize(int)`                                                                                                            | `java.util.IdentityHashMap`                          |
| removed |   -1.015 KiB |  <0.1% → 0.0% |      1.02 KiB → 0 B |     1 → 0 | `put(Object, Object)`                                                                                                    | `java.util.IdentityHashMap`                          |
|  -96.9% |     -1,008 B |         <0.1% |     1.02 KiB → 32 B |         1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory`       |
|  -46.1% |       -520 B |         <0.1% |     1.1 KiB → 608 B |     2 → 3 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`                                                   | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000` |
|  -43.3% |       -488 B |         <0.1% |     1.1 KiB → 640 B |     2 → 4 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)`                            | `java.lang.invoke.LambdaMetafactory`                 |
|  -43.3% |       -488 B |         <0.1% |     1.1 KiB → 640 B |     2 → 4 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)`                                         | `java.lang.invoke.Invokers$Holder`                   |
|  -43.3% |       -488 B |         <0.1% |     1.1 KiB → 640 B |     2 → 4 | `invoke(Class, MethodHandle, String, Object, Object, Class)`                                                             | `java.lang.invoke.BootstrapMethodInvoker`            |
|  -43.3% |       -488 B |         <0.1% |     1.1 KiB → 640 B |     2 → 4 | `makeSite(MethodHandle, String, MethodType, Object, Class)`                                                              | `java.lang.invoke.CallSite`                          |
|  -43.3% |       -488 B |         <0.1% |     1.1 KiB → 640 B |     2 → 4 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])`                                            | `java.lang.invoke.MethodHandleNatives`               |

##### Ours

|  Change |        Delta |             % |                Size |   Objects | Function                                                                                                                                                 | Location                                                                                        |
| ------: | -----------: | ------------: | ------------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  -13.2% | -677.046 KiB | 55.8% → 47.9% | 5.01 MiB → 4.35 MiB | 225 → 204 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                          |
|  -13.2% | -677.046 KiB | 55.8% → 47.9% | 5.01 MiB → 4.35 MiB | 225 → 204 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                             | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                          |
|  -82.7% |   -5.078 KiB |  0.1% → <0.1% | 6.14 KiB → 1.06 KiB |     6 → 3 | `generateAnnotations()`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                         |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                         |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `invoke(Object)`                                                                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000b0018d6420`              |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)`                                                   | `org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`                                            |
|  -82.6% |   -5.046 KiB |  0.1% → <0.1% | 6.11 KiB → 1.06 KiB |     5 → 3 | `generateKotlinMetadataAnnotation()`                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                         |
| removed |   -4.023 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `rehash(int)`                                                                                                                                            | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`                                               |
| removed |   -4.023 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `add(Object)`                                                                                                                                            | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`                                               |
| removed |   -4.015 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `visit(String, Object)`                                                                                                                                  | `org.jetbrains.org.objectweb.asm.AnnotationWriter`                                              |
| removed |   -4.015 KiB |  <0.1% → 0.0% |      4.02 KiB → 0 B |     1 → 0 | `writeAnnotationData(AnnotationVisitor, String[], String[])`                                                                                             | `org.jetbrains.kotlin.codegen.AsmUtil`                                                          |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage$lambda$0(ObjectOpenHashSet, VirtualFile, JavaRoot$RootType)`                                                                   | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                            |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `invoke(Object, Object)`                                                                                                                                 | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl$$Lambda.0x000000b0015af4c8` |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                                                                   | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`                                   |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `traverseDirectoriesInPackage(FqName, Set, Function2)`                                                                                                   | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex`                        |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `traverseDirectoriesInPackage$default(JvmDependenciesIndex, FqName, Set, Function2, int, Object)`                                                        | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndex`                                       |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage(FqName)`                                                                                                                       | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`                            |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage(FqName)`                                                                                                                       | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade$CliFinder`                                |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage(FqName, GlobalSearchScope)`                                                                                                    | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade`                                          |
|  -97.3% |   -3.976 KiB |         <0.1% |    4.09 KiB → 112 B |     3 → 2 | `knownClassNamesInPackage(FqName)`                                                                                                                       | `org.jetbrains.kotlin.load.java.JavaClassFinderImpl`                                            |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change |        Delta |             % |                Size |   Objects | Callee                          | Location                                                |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------- | ------------------------------------------------------- |
| +54.3% | +425.601 KiB | 19.3% → 25.0% |  784 KiB → 1.18 MiB | 161 → 137 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| +10.5% | +345.109 KiB | 80.7% → 75.0% | 3.21 MiB → 3.54 MiB |     1 → 2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |       Delta |      % |                Size |   Objects | Callee           | Location                                               |
| -----: | ----------: | -----: | ------------------: | --------: | ---------------- | ------------------------------------------------------ |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b001008000`)

| Change |       Delta |      % |                Size |   Objects | Callee           | Location                                     |
| -----: | ----------: | -----: | ------------------: | --------: | ---------------- | -------------------------------------------- |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000b001009400`)

| Change |       Delta |      % |                Size |   Objects | Callee                         | Location                                             |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------ | ---------------------------------------------------- |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b001008000` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |       Delta |      % |                Size |   Objects | Callee                           | Location                                            |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------------- | --------------------------------------------------- |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x000000b001009400` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |                Size |   Objects | Callee                                           | Location                           |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------------------------ | ---------------------------------- |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |       Delta |      % |                Size |   Objects | Callee                         | Location                                          |
| -----: | ----------: | -----: | ------------------: | --------: | ------------------------------ | ------------------------------------------------- |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |       Delta |      % |                Size |   Objects | Callee                     | Location                                          |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------- | ------------------------------------------------- |
| +18.9% | +770.71 KiB | 100.0% | 3.97 MiB → 4.72 MiB | 162 → 139 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|   Change |        Delta |             % |                Size | Objects | Callee                           | Location                                                              |
| -------: | -----------: | ------------: | ------------------: | ------: | -------------------------------- | --------------------------------------------------------------------- |
|   +30.5% | +233.695 KiB | 98.0% → 82.8% | 767 KiB → 1,001 KiB | 76 → 67 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFrontendPipelinePhase`      |
| +1101.2% |  +156.57 KiB |  1.8% → 14.1% |  14.2 KiB → 171 KiB | 69 → 48 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`       |
| +3232.4% |  +35.859 KiB |   0.1% → 3.1% |   1.11 KiB → 37 KiB |   7 → 9 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmFir2IrPipelinePhase`        |
|   -37.5% |        -24 B |         <0.1% |         64 B → 40 B |       1 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmConfigurationPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

| Change |        Delta |      % |               Size |   Objects | Callee                                         | Location                                          |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------------------------- | ------------------------------------------------- |
| +54.5% | +426.101 KiB | 100.0% | 783 KiB → 1.18 MiB | 153 → 125 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

| Change |        Delta |      % |               Size |   Objects | Callee                              | Location                                                       |
| -----: | -----------: | -----: | -----------------: | --------: | ----------------------------------- | -------------------------------------------------------------- |
| +54.5% | +426.101 KiB | 100.0% | 783 KiB → 1.18 MiB | 153 → 125 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`              |
| +75.0% |        +24 B |  <0.1% |        32 B → 56 B |     1 → 2 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.FileLoweringPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                     | Location                                                |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| +54.5% | +426.101 KiB | 100.0% | 783 KiB → 1.18 MiB | 153 → 125 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                     | Location                                                    |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| +54.5% | +426.101 KiB | 100.0% | 783 KiB → 1.18 MiB | 153 → 125 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |        Delta |            % |               Size |   Objects | Callee                                                                               | Location                                                                |
| -----: | -----------: | -----------: | -----------------: | --------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| +54.3% | +425.492 KiB |       100.0% | 784 KiB → 1.18 MiB | 160 → 135 | `exec(MessageCollector, Services, CommonCompilerArguments)`                          | `org.jetbrains.kotlin.cli.common.CLICompiler`                           |
|    new |       +144 B | 0.0% → <0.1% |        0 B → 144 B |     0 → 2 | `parseCommandLineArguments$default(List, CommonToolArguments, boolean, int, Object)` | `org.jetbrains.kotlin.cli.common.arguments.ParseCommandLineArgumentsKt` |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                   | Location                                      |
| -----: | -----------: | -----: | -----------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
| +54.3% | +425.632 KiB | 100.0% | 784 KiB → 1.18 MiB | 160 → 137 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |        Delta |      % |               Size |   Objects | Callee                                         | Location                                      |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
| +54.3% | +425.632 KiB | 100.0% | 784 KiB → 1.18 MiB | 160 → 137 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                 | Location                                                |
| -----: | -----------: | -----: | -----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
| +54.3% | +425.632 KiB | 100.0% | 784 KiB → 1.18 MiB | 160 → 137 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change |        Delta |            % |               Size |   Objects | Callee                                                                                             | Location                                                   |
| ------: | -----------: | -----------: | -----------------: | --------: | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|  +54.3% | +425.632 KiB |       100.0% | 784 KiB → 1.18 MiB | 160 → 137 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`    |
| removed |        -32 B | <0.1% → 0.0% |         32 B → 0 B |     1 → 0 | `<clinit>()`                                                                                       | `org.jetbrains.kotlin.cli.common.CompilerSystemProperties` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                          | Location                                      |
| -----: | -----------: | -----: | -----------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
| +54.3% | +425.421 KiB | 100.0% | 784 KiB → 1.18 MiB | 155 → 129 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| +23.7% |        +72 B |  <0.1% |      304 B → 376 B |     5 → 6 | `<clinit>()`                                                    | `org.jetbrains.kotlin.cli.common.ArgumentsKt` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |       Delta |            % |               Size |   Objects | Callee                                                         | Location                                                |
| -----: | ----------: | -----------: | -----------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| +54.3% | +425.39 KiB |       100.0% | 784 KiB → 1.18 MiB | 155 → 128 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |
|    new |       +32 B | 0.0% → <0.1% |         0 B → 32 B |     0 → 1 | `getDefaultPerformanceManager()`                               | `org.jetbrains.kotlin.cli.common.CLICompiler`           |

##### `<init>(ZipFile$Source$Key, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Callee                   | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------ | ------------------------------ |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `initCEN(int, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `get(File, boolean, ZipCoder)` (`java.util.zip.ZipFile$Source`)

| Change |        Delta |      % |                Size | Objects | Callee                                          | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------------------ |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(ZipFile$Source$Key, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(ZipFile, ZipCoder, File, int)` (`java.util.zip.ZipFile$CleanableResource`)

| Change |        Delta |      % |                Size | Objects | Callee                         | Location                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------------------ | ------------------------------ |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `get(File, boolean, ZipCoder)` | `java.util.zip.ZipFile$Source` |

##### `<init>(File, int, Charset)` (`java.util.zip.ZipFile`)

| Change |        Delta |      % |                Size | Objects | Callee                                 | Location                                  |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------- | ----------------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(ZipFile, ZipCoder, File, int)` | `java.util.zip.ZipFile$CleanableResource` |

##### `<init>(File, int)` (`java.util.zip.ZipFile`)

| Change |        Delta |      % |                Size | Objects | Callee                       | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ---------------------------- | ----------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(File, int, Charset)` | `java.util.zip.ZipFile` |

##### `<init>(File, boolean, int, Runtime$Version)` (`java.util.jar.JarFile`)

| Change |        Delta |      % |                Size | Objects | Callee              | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | ------------------- | ----------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(File, int)` | `java.util.zip.ZipFile` |

##### `getJarFile(URL)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |      % |                Size | Objects | Callee                                        | Location                |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------- | ----------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(File, boolean, int, Runtime$Version)` | `java.util.jar.JarFile` |

##### `run()` (`jdk.internal.loader.URLClassPath$JarLoader$1`)

| Change |        Delta |      % |                Size | Objects | Callee            | Location                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ----------------- | ---------------------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `getJarFile(URL)` | `jdk.internal.loader.URLClassPath$JarLoader`   |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `run()`           | `jdk.internal.loader.URLClassPath$JarLoader$1` |

##### `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` (`java.security.AccessController`)

| Change |        Delta |      % |                Size | Objects | Callee  | Location                                       |
| -----: | -----------: | -----: | ------------------: | ------: | ------- | ---------------------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$JarLoader$1` |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `run()` | `jdk.internal.loader.URLClassPath$3`           |

##### `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` (`java.security.AccessController`)

| Change |        Delta |      % |                Size | Objects | Callee                                                                      | Location                         |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------------------- | -------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `executePrivileged(PrivilegedExceptionAction, AccessControlContext, Class)` | `java.security.AccessController` |

##### `ensureOpen()` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |      % |                Size | Objects | Callee                                                          | Location                         |
| -----: | -----------: | -----: | ------------------: | ------: | --------------------------------------------------------------- | -------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `doPrivileged(PrivilegedExceptionAction, AccessControlContext)` | `java.security.AccessController` |

##### `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` (`jdk.internal.loader.URLClassPath$JarLoader`)

| Change |        Delta |      % |                Size | Objects | Callee         | Location                                     |
| -----: | -----------: | -----: | ------------------: | ------: | -------------- | -------------------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `ensureOpen()` | `jdk.internal.loader.URLClassPath$JarLoader` |

##### `run()` (`jdk.internal.loader.URLClassPath$3`)

| Change |        Delta |      % |                Size | Objects | Callee                                                         | Location                                     |
| -----: | -----------: | -----: | ------------------: | ------: | -------------------------------------------------------------- | -------------------------------------------- |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `<init>(URL, URLStreamHandler, HashMap, AccessControlContext)` | `jdk.internal.loader.URLClassPath$JarLoader` |
| +10.5% | +345.109 KiB | 100.0% | 3.21 MiB → 3.54 MiB |   1 → 2 | `run()`                                                        | `jdk.internal.loader.URLClassPath$3`         |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                                | Location                                     |
| -----: | -----------: | -----: | -----------------: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
| +54.3% | +425.421 KiB | 100.0% | 784 KiB → 1.18 MiB | 155 → 129 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |        Delta |      % |               Size |   Objects | Callee                                                                 | Location                                     |
| -----: | -----------: | -----: | -----------------: | --------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| +54.3% | +425.421 KiB | 100.0% | 784 KiB → 1.18 MiB | 155 → 129 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |        Delta |              % |               Size |   Objects | Callee                                                                          | Location                                                                    |
| -----: | -----------: | -------------: | -----------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| +54.5% | +426.101 KiB | 99.8% → 100.0% | 783 KiB → 1.18 MiB | 153 → 125 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| -54.2% |       -728 B |   0.2% → <0.1% |   1.31 KiB → 616 B |     2 → 3 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |       Delta |      % |               Size |   Objects | Callee                                         | Location                                                |
| -----: | ----------: | -----: | -----------------: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
| +54.3% | +425.39 KiB | 100.0% | 784 KiB → 1.18 MiB | 155 → 128 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |       Delta |      % |               Size |   Objects | Callee                                                                                              | Location                                                |
| -----: | ----------: | -----: | -----------------: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +54.3% | +425.39 KiB | 100.0% | 784 KiB → 1.18 MiB | 155 → 128 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |       Delta |      % |               Size |   Objects | Callee                                                                                                                                        | Location                                                |
| -----: | ----------: | -----: | -----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +54.3% | +425.39 KiB | 100.0% | 784 KiB → 1.18 MiB | 155 → 128 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |        Delta |      % |                Size |   Objects | Callee                | Location           |
| -----: | -----------: | -----: | ------------------: | --------: | --------------------- | ------------------ |
| -14.6% | -709.218 KiB | 100.0% | 4.76 MiB → 4.06 MiB | 216 → 192 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |             % |                Size |   Objects | Callee                | Location                        |
| -----: | -----------: | ------------: | ------------------: | --------: | --------------------- | ------------------------------- |
| -14.6% | -709.218 KiB | 95.0% → 93.5% | 4.76 MiB → 4.06 MiB | 216 → 192 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
| +12.5% |  +32.078 KiB |   5.0% → 6.5% |   256 KiB → 288 KiB |     1 → 4 | `put(Object, Object)` | `java.util.HashMap`             |
| +42.9% |       +120 B |         <0.1% |       280 B → 400 B |     6 → 7 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |           % |                Size |   Objects | Callee                                                                       | Location                                               |
| -----: | -----------: | ----------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| -13.2% | -677.046 KiB |      100.0% | 5.01 MiB → 4.35 MiB | 225 → 204 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
| +48.5% |  +57.476 KiB | 2.3% → 4.0% |   118 KiB → 176 KiB |   18 → 13 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |        Delta |             % |                Size | Objects | Callee    | Location           |
| -----: | -----------: | ------------: | ------------------: | ------: | --------- | ------------------ |
| -10.0% | -156.429 KiB | 32.0% → 33.4% | 1.52 MiB → 1.37 MiB | 66 → 49 | `clone()` | `java.lang.Object` |

##### `generateAnnotations()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |      Delta |              % |                Size | Objects | Callee                                                                        | Location                                                     |
| ------: | ---------: | -------------: | ------------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  -82.6% | -5.046 KiB | 99.5% → 100.0% | 6.11 KiB → 1.06 KiB |   5 → 3 | `generateKotlinMetadataAnnotation()`                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`      |
| removed |      -32 B |    0.5% → 0.0% |          32 B → 0 B |   1 → 0 | `genAnnotations$default(AnnotationCodegen, IrDeclaration, List, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.AnnotationCodegen` |

##### `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|  Change |      Delta |             % |             Size | Objects | Callee                                                       | Location                                                            |
| ------: | ---------: | ------------: | ---------------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| removed | -4.015 KiB |  65.7% → 0.0% |   4.02 KiB → 0 B |   1 → 0 | `writeAnnotationData(AnnotationVisitor, String[], String[])` | `org.jetbrains.kotlin.codegen.AsmUtil`                              |
| removed | -1.976 KiB |  32.4% → 0.0% |   1.98 KiB → 0 B |   2 → 0 | `writeData(MessageLite, JvmStringTable)`                     | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |
| +806.7% |     +968 B | 1.9% → 100.0% | 120 B → 1.06 KiB |   2 → 3 | `serialize(MetadataSource, MetadataSource$File)`             | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`        |

##### `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000b0018d6420`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                                                                                   | Location                                                |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -82.6% | -5.046 KiB | 100.0% | 6.11 KiB → 1.06 KiB |   5 → 3 | `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`)

| Change |      Delta |      % |                Size | Objects | Callee           | Location                                                                           |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------- | ---------------------------------------------------------------------------------- |
| -82.6% | -5.046 KiB | 100.0% | 6.11 KiB → 1.06 KiB |   5 → 3 | `invoke(Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000b0018d6420` |

##### `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

| Change |      Delta |      % |                Size | Objects | Callee                                                                                                 | Location                                             |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| -82.6% | -5.046 KiB | 100.0% | 6.11 KiB → 1.06 KiB |   5 → 3 | `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` | `org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt` |

##### `add(Object)` (`it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`)

|  Change |      Delta |             % |           Size | Objects | Callee        | Location                                          |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | ------------------------------------------------- |
| removed | -4.023 KiB | 100.0% → 0.0% | 4.02 KiB → 0 B |   1 → 0 | `rehash(int)` | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet` |

##### `visit(String, Object)` (`org.jetbrains.org.objectweb.asm.AnnotationWriter`)

|  Change |      Delta |             % |           Size | Objects | Callee                    | Location                                      |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------- | --------------------------------------------- |
| removed | -4.015 KiB | 100.0% → 0.0% | 4.02 KiB → 0 B |   1 → 0 | `addConstantUtf8(String)` | `org.jetbrains.org.objectweb.asm.SymbolTable` |

##### `writeAnnotationData(AnnotationVisitor, String[], String[])` (`org.jetbrains.kotlin.codegen.AsmUtil`)

|  Change |      Delta |             % |           Size | Objects | Callee                  | Location                                           |
| ------: | ---------: | ------------: | -------------: | ------: | ----------------------- | -------------------------------------------------- |
| removed | -4.015 KiB | 100.0% → 0.0% | 4.02 KiB → 0 B |   1 → 0 | `visit(String, Object)` | `org.jetbrains.org.objectweb.asm.AnnotationWriter` |

##### `knownClassNamesInPackage$lambda$0(ObjectOpenHashSet, VirtualFile, JavaRoot$RootType)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`)

|  Change |      Delta |             % |           Size | Objects | Callee                      | Location                                                  |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------------- | --------------------------------------------------------- |
| removed | -4.023 KiB |  98.5% → 0.0% | 4.02 KiB → 0 B |   1 → 0 | `add(Object)`               | `it.unimi.dsi.fastutil.objects.ObjectOpenHashSet`         |
| +250.0% |      +80 B | 0.8% → 100.0% |   32 B → 112 B |   1 → 2 | `getChildren()`             | `org.jetbrains.kotlin.cli.jvm.modules.CoreJrtVirtualFile` |
| removed |      -32 B |   0.8% → 0.0% |     32 B → 0 B |   1 → 0 | `getNameWithoutExtension()` | `com.intellij.openapi.vfs.VirtualFile`                    |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl$$Lambda.0x000000b0015af4c8`)

| Change |      Delta |      % |             Size | Objects | Callee                                                                                 | Location                                                             |
| -----: | ---------: | -----: | ---------------: | ------: | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `knownClassNamesInPackage$lambda$0(ObjectOpenHashSet, VirtualFile, JavaRoot$RootType)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl` |

##### `traverseDirectoriesInPackage(FqName, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl`)

| Change |      Delta |      % |             Size | Objects | Callee                   | Location                                                                                        |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------ | ----------------------------------------------------------------------------------------------- |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `invoke(Object, Object)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl$$Lambda.0x000000b0015af4c8` |

##### `traverseDirectoriesInPackage(FqName, Set, Function2)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex`)

| Change |      Delta |      % |             Size | Objects | Callee                                                 | Location                                                      |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------- |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `traverseDirectoriesInPackage(FqName, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndexImpl` |

##### `traverseDirectoriesInPackage$default(JvmDependenciesIndex, FqName, Set, Function2, int, Object)` (`org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndex`)

| Change |      Delta |      % |             Size | Objects | Callee                                                 | Location                                                                 |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `traverseDirectoriesInPackage(FqName, Set, Function2)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesDynamicCompoundIndex` |

##### `knownClassNamesInPackage(FqName)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl`)

| Change |      Delta |      % |             Size | Objects | Callee                                                                                            | Location                                                  |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `traverseDirectoriesInPackage$default(JvmDependenciesIndex, FqName, Set, Function2, int, Object)` | `org.jetbrains.kotlin.cli.jvm.index.JvmDependenciesIndex` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |      Delta |             % |             Size | Objects | Callee                  | Location           |
| -----: | ---------: | ------------: | ---------------: | ------: | ----------------------- | ------------------ |
| -82.6% | -1.109 KiB | 93.5% → 83.3% | 1.34 KiB → 240 B |   5 → 4 | `<init>(StringBuilder)` | `java.lang.String` |

##### `<init>(AbstractStringBuilder, Void)` (`java.lang.String`)

| Change |      Delta |      % |             Size | Objects | Callee                          | Location           |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------- | ------------------ |
| -82.6% | -1.109 KiB | 100.0% | 1.34 KiB → 240 B |   5 → 4 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(StringBuilder)` (`java.lang.String`)

| Change |      Delta |      % |             Size | Objects | Callee                                | Location           |
| -----: | ---------: | -----: | ---------------: | ------: | ------------------------------------- | ------------------ |
| -82.6% | -1.109 KiB | 100.0% | 1.34 KiB → 240 B |   5 → 4 | `<init>(AbstractStringBuilder, Void)` | `java.lang.String` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |             % |             Size | Objects | Callee                              | Location           |
| -----: | ---------: | ------------: | ---------------: | ------: | ----------------------------------- | ------------------ |
| -75.0% | -1.195 KiB | 96.7% → 71.8% | 1.59 KiB → 408 B |  10 → 5 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |

##### `<init>(ClassReader, int)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |      Delta |             % |           Size | Objects | Callee                | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | --------------------- | -------------------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `<init>(ClassWriter)` | `jdk.internal.org.objectweb.asm.SymbolTable` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ClassWriter`)

|  Change |      Delta |             % |           Size | Objects | Callee                     | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------- | -------------------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `<init>(ClassReader, int)` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `put(Object, Object)` (`java.util.IdentityHashMap`)

|  Change |      Delta |             % |           Size | Objects | Callee        | Location                    |
| ------: | ---------: | ------------: | -------------: | ------: | ------------- | --------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `resize(int)` | `java.util.IdentityHashMap` |

##### `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` (`java.lang.invoke.InnerClassLambdaMetafactory`)

|  Change |      Delta |             % |           Size | Objects | Callee                    | Location                                     |
| ------: | ---------: | ------------: | -------------: | ------: | ------------------------- | -------------------------------------------- |
| removed | -1.015 KiB | 100.0% → 0.0% | 1.02 KiB → 0 B |   1 → 0 | `<init>(int)`             | `jdk.internal.org.objectweb.asm.ClassWriter` |
|     new |      +32 B | 0.0% → 100.0% |     0 B → 32 B |   0 → 1 | `changeReturnType(Class)` | `java.lang.invoke.MethodType`                |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000b001230000`)

| Change |  Delta |      % |            Size | Objects | Callee                                                                                        | Location                             |
| -----: | -----: | -----: | --------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| -46.1% | -520 B | 100.0% | 1.1 KiB → 608 B |   2 → 3 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change |    Delta |            % |            Size | Objects | Callee                                                                                                                   | Location                                       |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
|  -96.9% | -1,008 B | 92.2% → 5.0% | 1.02 KiB → 32 B |       1 | `<init>(MethodHandles$Lookup, MethodType, String, MethodType, MethodHandle, MethodType, boolean, Class[], MethodType[])` | `java.lang.invoke.InnerClassLambdaMetafactory` |
| +590.9% |   +520 B | 7.8% → 95.0% |    88 B → 608 B |   1 → 3 | `buildCallSite()`                                                                                                        | `java.lang.invoke.InnerClassLambdaMetafactory` |

##### `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |  Delta |              % |            Size | Objects | Callee                                                                 | Location                                             |
| -----: | -----: | -------------: | --------------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| -46.1% | -520 B | 100.0% → 95.0% | 1.1 KiB → 608 B |   2 → 3 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x000000b001230000` |
|    new |  +32 B |    0.0% → 5.0% |      0 B → 32 B |   0 → 1 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.DirectMethodHandle$Holder`         |

##### `invoke(Class, MethodHandle, String, Object, Object, Class)` (`java.lang.invoke.BootstrapMethodInvoker`)

| Change |  Delta |      % |            Size | Objects | Callee                                                                           | Location                           |
| -----: | -----: | -----: | --------------: | ------: | -------------------------------------------------------------------------------- | ---------------------------------- |
| -43.3% | -488 B | 100.0% | 1.1 KiB → 640 B |   2 → 4 | `invokeExact_MT(Object, Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `makeSite(MethodHandle, String, MethodType, Object, Class)` (`java.lang.invoke.CallSite`)

| Change |  Delta |      % |            Size | Objects | Callee                                                       | Location                                  |
| -----: | -----: | -----: | --------------: | ------: | ------------------------------------------------------------ | ----------------------------------------- |
| -43.3% | -488 B | 100.0% | 1.1 KiB → 640 B |   2 → 4 | `invoke(Class, MethodHandle, String, Object, Object, Class)` | `java.lang.invoke.BootstrapMethodInvoker` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change |  Delta |      % |            Size | Objects | Callee                                                      | Location                    |
| -----: | -----: | -----: | --------------: | ------: | ----------------------------------------------------------- | --------------------------- |
| -43.3% | -488 B | 100.0% | 1.1 KiB → 640 B |   2 → 4 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |

##### `knownClassNamesInPackage(FqName)` (`org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade$CliFinder`)

| Change |      Delta |      % |             Size | Objects | Callee                             | Location                                                             |
| -----: | ---------: | -----: | ---------------: | ------: | ---------------------------------- | -------------------------------------------------------------------- |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `knownClassNamesInPackage(FqName)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinCliJavaFileManagerImpl` |

##### `knownClassNamesInPackage(FqName, GlobalSearchScope)` (`org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade`)

| Change |      Delta |      % |             Size | Objects | Callee                             | Location                                                         |
| -----: | ---------: | -----: | ---------------: | ------: | ---------------------------------- | ---------------------------------------------------------------- |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `knownClassNamesInPackage(FqName)` | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade$CliFinder` |

##### `knownClassNamesInPackage(FqName)` (`org.jetbrains.kotlin.load.java.JavaClassFinderImpl`)

| Change |      Delta |      % |             Size | Objects | Callee                                                | Location                                               |
| -----: | ---------: | -----: | ---------------: | ------: | ----------------------------------------------------- | ------------------------------------------------------ |
| -97.3% | -3.976 KiB | 100.0% | 4.09 KiB → 112 B |   3 → 2 | `knownClassNamesInPackage(FqName, GlobalSearchScope)` | `org.jetbrains.kotlin.resolve.jvm.KotlinJavaPsiFacade` |
