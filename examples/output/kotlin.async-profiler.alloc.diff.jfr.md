# Allocated heap profile diff

Allocated 680 MiB → 643 MiB (-37.313 MiB, -5.5%) over 1,354 samples → 1,279 samples (514 KiB → 515 KiB per sample).

| Category         | Change |        Delta |             % |              Size |     Samples |
| ---------------- | -----: | -----------: | ------------: | ----------------: | ----------: |
| Standard library |  -7.1% |  -36.813 MiB | 76.3% → 75.0% | 519 MiB → 482 MiB | 1,032 → 958 |
| Ours             |  -0.3% | -511.999 KiB | 23.7% → 25.0% |           161 MiB |   322 → 321 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |   Samples | Function                                                                        | Location                                                                                           |
| ------: | -------------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   +9.9% |    +12.499 MiB | 18.6% → 21.7% |   127 MiB → 139 MiB | 253 → 278 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                                                 |
|  +14.8% |     +5.999 MiB |   6.0% → 7.2% | 40.5 MiB → 46.5 MiB |   81 → 93 | `clone()`                                                                       | `java.lang.Object`                                                                                 |
| +500.0% |     +2.499 MiB |   0.1% → 0.5% |     512 KiB → 3 MiB |     1 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                                            |
| +250.0% |     +2.499 MiB |   0.1% → 0.5% |     1 MiB → 3.5 MiB |     2 → 7 | `accept(ClassVisitor, Attribute[], int)`                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|  +83.3% |     +2.499 MiB |   0.4% → 0.9% |     3 MiB → 5.5 MiB |    6 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                                                                          |
|  +14.3% |     +1.999 MiB |   2.1% → 2.5% |     14 MiB → 16 MiB |   28 → 32 | `<init>(int)`                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| +133.3% |     +1.999 MiB |   0.2% → 0.5% |   1.5 MiB → 3.5 MiB |     3 → 7 | `simplifyTrivialInstructions(MethodNode)`                                       | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|     new |     +1.999 MiB |   0.0% → 0.3% |         0 B → 2 MiB |     0 → 4 | `getBytes(int, int)`                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
| +100.0% |     +1.499 MiB |   0.2% → 0.5% |     1.5 MiB → 3 MiB |     3 → 6 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                                                                |
|  +60.0% |     +1.499 MiB |   0.4% → 0.6% |     2.5 MiB → 4 MiB |     5 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|  +33.3% |     +1.499 MiB |   0.7% → 0.9% |     4.5 MiB → 6 MiB |    9 → 12 | `newInstance(OutputStream, int)`                                                | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| +100.0% |     +1.499 MiB |   0.2% → 0.5% |     1.5 MiB → 3 MiB |     3 → 6 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                                                        |
| +300.0% |     +1.499 MiB |   0.1% → 0.3% |     512 KiB → 2 MiB |     1 → 4 | `replaceCurrentlyActiveContext(FirTowerDataContext)`                            | `org.jetbrains.kotlin.fir.resolve.FirRegularTowerDataContexts`                                     |
|  +75.0% |     +1.499 MiB |   0.3% → 0.5% |     2 MiB → 3.5 MiB |     4 → 7 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                                                         |
| +300.0% |     +1.499 MiB |   0.1% → 0.3% |     512 KiB → 2 MiB |     1 → 4 | `iterator()`                                                                    | `java.util.LinkedHashMap$LinkedKeySet`                                                             |
| +300.0% |     +1.499 MiB |   0.1% → 0.3% |     512 KiB → 2 MiB |     1 → 4 | `to(Object, Object)`                                                            | `kotlin.TuplesKt`                                                                                  |
|     new |     +1.499 MiB |   0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                 | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
|     new |     +1.499 MiB |   0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `<init>()`                                                                      | `java.util.HashSet`                                                                                |
|  +33.3% | +1,023.998 KiB |   0.4% → 0.6% |       3 MiB → 4 MiB |     6 → 8 | `toString()`                                                                    | `java.lang.StringBuilder`                                                                          |
| +100.0% | +1,023.998 KiB |   0.1% → 0.3% |       1 MiB → 2 MiB |     2 → 4 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                                                            |

##### Standard library

|  Change |          Delta |             % |                Size |   Samples | Function                                                                        | Location                                                                            |
| ------: | -------------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
|   +9.9% |    +12.499 MiB | 18.6% → 21.7% |   127 MiB → 139 MiB | 253 → 278 | `copyOf(byte[], int)`                                                           | `java.util.Arrays`                                                                  |
|  +14.8% |     +5.999 MiB |   6.0% → 7.2% | 40.5 MiB → 46.5 MiB |   81 → 93 | `clone()`                                                                       | `java.lang.Object`                                                                  |
| +500.0% |     +2.499 MiB |   0.1% → 0.5% |     512 KiB → 3 MiB |     1 → 6 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` | `java.lang.ClassLoader`                                                             |
|  +83.3% |     +2.499 MiB |   0.4% → 0.9% |     3 MiB → 5.5 MiB |    6 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.LinkedHashMap`                                                           |
| +100.0% |     +1.499 MiB |   0.2% → 0.5% |     1.5 MiB → 3 MiB |     3 → 6 | `newNode(int, Object, Object, HashMap$Node)`                                    | `java.util.HashMap`                                                                 |
| +100.0% |     +1.499 MiB |   0.2% → 0.5% |     1.5 MiB → 3 MiB |     3 → 6 | `enlarge(int)`                                                                  | `jdk.internal.org.objectweb.asm.ByteVector`                                         |
|  +75.0% |     +1.499 MiB |   0.3% → 0.5% |     2 MiB → 3.5 MiB |     4 → 7 | `allocateInstance(Class)`                                                       | `jdk.internal.misc.Unsafe`                                                          |
| +300.0% |     +1.499 MiB |   0.1% → 0.3% |     512 KiB → 2 MiB |     1 → 4 | `iterator()`                                                                    | `java.util.LinkedHashMap$LinkedKeySet`                                              |
| +300.0% |     +1.499 MiB |   0.1% → 0.3% |     512 KiB → 2 MiB |     1 → 4 | `to(Object, Object)`                                                            | `kotlin.TuplesKt`                                                                   |
|     new |     +1.499 MiB |   0.0% → 0.2% |       0 B → 1.5 MiB |     0 → 3 | `<init>()`                                                                      | `java.util.HashSet`                                                                 |
|  +33.3% | +1,023.998 KiB |   0.4% → 0.6% |       3 MiB → 4 MiB |     6 → 8 | `toString()`                                                                    | `java.lang.StringBuilder`                                                           |
| +100.0% | +1,023.998 KiB |   0.1% → 0.3% |       1 MiB → 2 MiB |     2 → 4 | `compress(char[], int, int)`                                                    | `java.lang.StringUTF16`                                                             |
|  +66.7% | +1,023.998 KiB |   0.2% → 0.4% |   1.5 MiB → 2.5 MiB |     3 → 5 | `arrayOfUninitializedElements(int)`                                             | `kotlin.collections.builders.ListBuilderKt`                                         |
|  +28.6% | +1,023.998 KiB |   0.5% → 0.7% |   3.5 MiB → 4.5 MiB |     7 → 9 | `<init>(int, float, boolean)`                                                   | `java.util.HashSet`                                                                 |
|  +33.3% | +1,023.998 KiB |   0.4% → 0.6% |       3 MiB → 4 MiB |     6 → 8 | `<init>(int)`                                                                   | `kotlin.collections.builders.MapBuilder`                                            |
|     new | +1,023.998 KiB |   0.0% → 0.2% |         0 B → 1 MiB |     0 → 2 | `<init>(int)`                                                                   | `jdk.internal.org.objectweb.asm.ByteVector`                                         |
|     new | +1,023.998 KiB |   0.0% → 0.2% |         0 B → 1 MiB |     0 → 2 | `<init>(int, int, MemorySegment)`                                               | `java.nio.HeapByteBuffer`                                                           |
|     new | +1,023.998 KiB |   0.0% → 0.2% |         0 B → 1 MiB |     0 → 2 | `listIterator(int)`                                                             | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector` |
|     new | +1,023.998 KiB |   0.0% → 0.2% |         0 B → 1 MiB |     0 → 2 | `singletonIterator(Object)`                                                     | `java.util.Collections`                                                             |
|     new |   +511.999 KiB |   0.0% → 0.1% |       0 B → 512 KiB |     0 → 1 | `newOutput()`                                                                   | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString`                              |

##### Ours

|  Change |          Delta |           % |              Size | Samples | Function                                                                                        | Location                                                                                           |
| ------: | -------------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| +250.0% |     +2.499 MiB | 0.1% → 0.5% |   1 MiB → 3.5 MiB |   2 → 7 | `accept(ClassVisitor, Attribute[], int)`                                                        | `org.jetbrains.org.objectweb.asm.ClassReader`                                                      |
|  +14.3% |     +1.999 MiB | 2.1% → 2.5% |   14 MiB → 16 MiB | 28 → 32 | `<init>(int)`                                                                                   | `org.jetbrains.kotlin.protobuf.ByteString$Output`                                                  |
| +133.3% |     +1.999 MiB | 0.2% → 0.5% | 1.5 MiB → 3.5 MiB |   3 → 7 | `simplifyTrivialInstructions(MethodNode)`                                                       | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|     new |     +1.999 MiB | 0.0% → 0.3% |       0 B → 2 MiB |   0 → 4 | `getBytes(int, int)`                                                                            | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`                     |
|  +60.0% |     +1.499 MiB | 0.4% → 0.6% |   2.5 MiB → 4 MiB |   5 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`                                                    |
|  +33.3% |     +1.499 MiB | 0.7% → 0.9% |   4.5 MiB → 6 MiB |  9 → 12 | `newInstance(OutputStream, int)`                                                                | `org.jetbrains.kotlin.protobuf.CodedOutputStream`                                                  |
| +300.0% |     +1.499 MiB | 0.1% → 0.3% |   512 KiB → 2 MiB |   1 → 4 | `replaceCurrentlyActiveContext(FirTowerDataContext)`                                            | `org.jetbrains.kotlin.fir.resolve.FirRegularTowerDataContexts`                                     |
|     new |     +1.499 MiB | 0.0% → 0.2% |     0 B → 1.5 MiB |   0 → 3 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                                 | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                                           |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `internalNameByClassId(ClassId)`                                                                | `org.jetbrains.kotlin.resolve.jvm.JvmClassName`                                                    |
|  +66.7% | +1,023.998 KiB | 0.2% → 0.4% | 1.5 MiB → 2.5 MiB |   3 → 5 | `<init>()`                                                                                      | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`                      |
|  +33.3% | +1,023.998 KiB | 0.4% → 0.6% |     3 MiB → 4 MiB |   6 → 8 | `box-impl(List)`                                                                                | `org.jetbrains.kotlin.fir.MutableOrEmptyList`                                                      |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `isClassLikeVisible(FirVisibilityChecker, FirClassLikeSymbol, FirSession, FirFileSymbol, List)` | `org.jetbrains.kotlin.fir.FirVisibilityCheckerKt`                                                  |
|  +16.7% | +1,023.998 KiB | 0.9% → 1.1% |     6 MiB → 7 MiB | 12 → 14 | `<init>(int, int)`                                                                              | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame`                                              |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `zzUnpackcmap_blocks()`                                                                         | `org.jetbrains.kotlin.lexer._JetLexer`                                                             |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `<init>(FirMemberDeclaration)`                                                                  | `org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`                                 |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `toLookupTag(ClassId)`                                                                          | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`                                           |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `considerType(CheckerContext, ConeKotlinType, Set)`                                             | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`             |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `visitLocalVariable(String, String, String, Label, Label, int)`                                 | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `<init>()`                                                                                      | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock`              |
|     new | +1,023.998 KiB | 0.0% → 0.2% |       0 B → 1 MiB |   0 → 2 | `<init>(MethodNode, boolean)`                                                                   | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`                     |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |          Delta |             % |                Size |   Samples | Function                                                                      | Location                                                               |
| ------: | -------------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
|  -22.7% |    -44.313 MiB | 28.7% → 23.5% |   195 MiB → 151 MiB | 391 → 302 | `<init>(int)`                                                                 | `java.io.ByteArrayOutputStream`                                        |
|  -28.6% |     -4.999 MiB |   2.6% → 1.9% | 17.5 MiB → 12.5 MiB |   35 → 25 | `iterator()`                                                                  | `java.util.ArrayList`                                                  |
|  -22.6% |     -3.499 MiB |   2.3% → 1.9% |   15.5 MiB → 12 MiB |   31 → 24 | `copyOfRangeByte(byte[], int, int)`                                           | `java.util.Arrays`                                                     |
|  -50.0% |     -2.499 MiB |   0.7% → 0.4% |     5 MiB → 2.5 MiB |    10 → 5 | `copyOf(Object[], int)`                                                       | `java.util.Arrays`                                                     |
|  -66.7% |     -1.999 MiB |   0.4% → 0.2% |       3 MiB → 1 MiB |     6 → 2 | `createZipEntry(String)`                                                      | `java.util.zip.ZipInputStream`                                         |
|  -40.0% |     -1.999 MiB |   0.7% → 0.5% |       5 MiB → 3 MiB |    10 → 6 | `newString(byte[], int, int)`                                                 | `java.lang.StringLatin1`                                               |
|  -66.7% |     -1.999 MiB |   0.4% → 0.2% |       3 MiB → 1 MiB |     6 → 2 | `getBufferBytes(ByteBuffer)`                                                  | `jdk.internal.jimage.BasicImageReader`                                 |
| removed |     -1.999 MiB |   0.3% → 0.0% |         2 MiB → 0 B |     4 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                   | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`               |
|  -66.7% |     -1.999 MiB |   0.4% → 0.2% |       3 MiB → 1 MiB |     6 → 2 | `lazy(LazyThreadSafetyMode, Function0)`                                       | `kotlin.LazyKt__LazyJVMKt`                                             |
| removed |     -1.999 MiB |   0.3% → 0.0% |         2 MiB → 0 B |     4 → 0 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`             |
|  -80.0% |     -1.999 MiB |   0.4% → 0.1% |   2.5 MiB → 512 KiB |     5 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`           | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                  |
|  -80.0% |     -1.999 MiB |   0.4% → 0.1% |   2.5 MiB → 512 KiB |     5 → 1 | `toArray()`                                                                   | `org.jetbrains.org.objectweb.asm.tree.InsnList`                        |
|  -60.0% |     -1.499 MiB |   0.4% → 0.2% |     2.5 MiB → 1 MiB |     5 → 2 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                              | `java.lang.String`                                                     |
|  -23.1% |     -1.499 MiB |   1.0% → 0.8% |     6.5 MiB → 5 MiB |   13 → 10 | `grow(int)`                                                                   | `java.util.ArrayList`                                                  |
| removed |     -1.499 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                   | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`              |
|  -60.0% |     -1.499 MiB |   0.4% → 0.2% |     2.5 MiB → 1 MiB |     5 → 2 | `create()`                                                                    | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`              |
|  -21.4% |     -1.499 MiB |   1.0% → 0.9% |     7 MiB → 5.5 MiB |   14 → 11 | `resize()`                                                                    | `java.util.HashMap`                                                    |
| removed |     -1.499 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `listIterator(int)`                                                           | `kotlin.collections.builders.ListBuilder`                              |
| removed |     -1.499 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `newExtensionWriter()`                                                        | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage` |
|  -50.0% | -1,023.998 KiB |   0.3% → 0.2% |       2 MiB → 1 MiB |     4 → 2 | `unmodifiableList(List)`                                                      | `java.util.Collections`                                                |

##### Standard library

|  Change |          Delta |             % |                Size |   Samples | Function                                                                                      | Location                                                                       |
| ------: | -------------: | ------------: | ------------------: | --------: | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -22.7% |    -44.313 MiB | 28.7% → 23.5% |   195 MiB → 151 MiB | 391 → 302 | `<init>(int)`                                                                                 | `java.io.ByteArrayOutputStream`                                                |
|  -28.6% |     -4.999 MiB |   2.6% → 1.9% | 17.5 MiB → 12.5 MiB |   35 → 25 | `iterator()`                                                                                  | `java.util.ArrayList`                                                          |
|  -22.6% |     -3.499 MiB |   2.3% → 1.9% |   15.5 MiB → 12 MiB |   31 → 24 | `copyOfRangeByte(byte[], int, int)`                                                           | `java.util.Arrays`                                                             |
|  -50.0% |     -2.499 MiB |   0.7% → 0.4% |     5 MiB → 2.5 MiB |    10 → 5 | `copyOf(Object[], int)`                                                                       | `java.util.Arrays`                                                             |
|  -66.7% |     -1.999 MiB |   0.4% → 0.2% |       3 MiB → 1 MiB |     6 → 2 | `createZipEntry(String)`                                                                      | `java.util.zip.ZipInputStream`                                                 |
|  -40.0% |     -1.999 MiB |   0.7% → 0.5% |       5 MiB → 3 MiB |    10 → 6 | `newString(byte[], int, int)`                                                                 | `java.lang.StringLatin1`                                                       |
|  -66.7% |     -1.999 MiB |   0.4% → 0.2% |       3 MiB → 1 MiB |     6 → 2 | `getBufferBytes(ByteBuffer)`                                                                  | `jdk.internal.jimage.BasicImageReader`                                         |
|  -66.7% |     -1.999 MiB |   0.4% → 0.2% |       3 MiB → 1 MiB |     6 → 2 | `lazy(LazyThreadSafetyMode, Function0)`                                                       | `kotlin.LazyKt__LazyJVMKt`                                                     |
|  -60.0% |     -1.499 MiB |   0.4% → 0.2% |     2.5 MiB → 1 MiB |     5 → 2 | `newStringUTF8NoRepl(byte[], int, int, boolean)`                                              | `java.lang.String`                                                             |
|  -23.1% |     -1.499 MiB |   1.0% → 0.8% |     6.5 MiB → 5 MiB |   13 → 10 | `grow(int)`                                                                                   | `java.util.ArrayList`                                                          |
|  -21.4% |     -1.499 MiB |   1.0% → 0.9% |     7 MiB → 5.5 MiB |   14 → 11 | `resize()`                                                                                    | `java.util.HashMap`                                                            |
| removed |     -1.499 MiB |   0.2% → 0.0% |       1.5 MiB → 0 B |     3 → 0 | `listIterator(int)`                                                                           | `kotlin.collections.builders.ListBuilder`                                      |
|  -50.0% | -1,023.998 KiB |   0.3% → 0.2% |       2 MiB → 1 MiB |     4 → 2 | `unmodifiableList(List)`                                                                      | `java.util.Collections`                                                        |
| removed | -1,023.998 KiB |   0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory`                                           |
|  -66.7% | -1,023.998 KiB |   0.2% → 0.1% |   1.5 MiB → 512 KiB |     3 → 1 | `initClassName()`                                                                             | `java.lang.Class`                                                              |
|  -20.0% | -1,023.998 KiB |   0.7% → 0.6% |       5 MiB → 4 MiB |    10 → 8 | `<init>(int)`                                                                                 | `java.lang.AbstractStringBuilder`                                              |
|  -50.0% | -1,023.998 KiB |   0.3% → 0.2% |       2 MiB → 1 MiB |     4 → 2 | `addConstantUtf8(String)`                                                                     | `jdk.internal.org.objectweb.asm.SymbolTable`                                   |
| removed | -1,023.998 KiB |   0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `listIterator(int)`                                                                           | `kotlin.collections.ReversedListReadOnly`                                      |
|  -50.0% | -1,023.998 KiB |   0.3% → 0.2% |       2 MiB → 1 MiB |     4 → 2 | `builder()`                                                                                   | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |
| removed | -1,023.998 KiB |   0.1% → 0.0% |         1 MiB → 0 B |     2 → 0 | `mutableListOf(Object[])`                                                                     | `kotlin.collections.CollectionsKt__CollectionsKt`                              |

##### Ours

|  Change |          Delta |           % |              Size | Samples | Function                                                                                                          | Location                                                                                           |
| ------: | -------------: | ----------: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed |     -1.999 MiB | 0.3% → 0.0% |       2 MiB → 0 B |   4 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                       | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`                                           |
| removed |     -1.999 MiB | 0.3% → 0.0% |       2 MiB → 0 B |   4 → 0 | `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)`                                     | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`                                         |
|  -80.0% |     -1.999 MiB | 0.4% → 0.1% | 2.5 MiB → 512 KiB |   5 → 1 | `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)`                                               | `org.jetbrains.kotlin.fir.types.ConeInferenceContext`                                              |
|  -80.0% |     -1.999 MiB | 0.4% → 0.1% | 2.5 MiB → 512 KiB |   5 → 1 | `toArray()`                                                                                                       | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                       | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`                                          |
|  -60.0% |     -1.499 MiB | 0.4% → 0.2% |   2.5 MiB → 1 MiB |   5 → 2 | `create()`                                                                                                        | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`                                          |
| removed |     -1.499 MiB | 0.2% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `newExtensionWriter()`                                                                                            | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage`                             |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `toString()`                                                                                                      | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`                                |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                       | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`                                           |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `traverseIds(int)`                                                                                                | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`                                   |
|  -28.6% | -1,023.998 KiB | 0.5% → 0.4% | 3.5 MiB → 2.5 MiB |   7 → 5 | `ensureCapacity()`                                                                                                | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`                                            |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `forceCapacity(int[], int, int)`                                                                                  | `it.unimi.dsi.fastutil.ints.IntArrays`                                                             |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)`                                        | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`                                            |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)`                           | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`                                   |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`                       |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)`             | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`                       |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `topLevel(Name)`                                                                                                  | `org.jetbrains.kotlin.name.FqNameUnsafe$Companion`                                                 |
|  -66.7% | -1,023.998 KiB | 0.2% → 0.1% | 1.5 MiB → 512 KiB |   3 → 1 | `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)`                        | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `visitVarInsn(int, int)`                                                                                          | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                                                  |
| removed | -1,023.998 KiB | 0.1% → 0.0% |       1 MiB → 0 B |   2 → 0 | `<init>(int)`                                                                                                     | `org.jetbrains.org.objectweb.asm.ByteVector`                                                       |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |               Size |   Samples | Location                |
| -----: | ---------: | ------------: | -----------------: | --------: | ----------------------- |
|  +8.0% | +9.499 MiB | 94.1% → 92.5% |  119 MiB → 129 MiB | 238 → 257 | `java.util.Arrays:3539` |
| +40.0% | +2.999 MiB |   5.9% → 7.5% | 7.5 MiB → 10.5 MiB |   15 → 21 | `java.util.Arrays:3541` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |        Delta |              % |            Size | Samples | Location                                          |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------------------------------------- |
| +150.0% |   +1.499 MiB | 100.0% → 71.4% | 1 MiB → 2.5 MiB |   2 → 5 | `org.jetbrains.org.objectweb.asm.ClassReader:458` |
|     new | +511.999 KiB |   0.0% → 14.3% |   0 B → 512 KiB |   0 → 1 | `org.jetbrains.org.objectweb.asm.ClassReader:455` |
|     new | +511.999 KiB |   0.0% → 14.3% |   0 B → 512 KiB |   0 → 1 | `org.jetbrains.org.objectweb.asm.ClassReader:545` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |            Size | Samples | Location                      |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------- |
| +83.3% | +2.499 MiB | 100.0% | 3 MiB → 5.5 MiB |  6 → 11 | `java.util.LinkedHashMap:281` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |        Delta |             % |              Size | Samples | Location                                              |
| -----: | -----------: | ------------: | ----------------: | ------: | ----------------------------------------------------- |
| +12.5% |   +1.499 MiB | 85.7% → 84.4% | 12 MiB → 13.5 MiB | 24 → 27 | `org.jetbrains.kotlin.protobuf.ByteString$Output:789` |
| +25.0% | +511.999 KiB | 14.3% → 15.6% |   2 MiB → 2.5 MiB |   4 → 5 | `org.jetbrains.kotlin.protobuf.ByteString$Output:788` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |        Delta |             % |            Size | Samples | Location                                                                                              |
| ------: | -----------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------------------- |
| +100.0% | +511.999 KiB | 33.3% → 28.6% | 512 KiB → 1 MiB |   1 → 2 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:57` |
|  +50.0% | +511.999 KiB | 66.7% → 42.9% | 1 MiB → 1.5 MiB |   2 → 3 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:58` |
|     new | +511.999 KiB |  0.0% → 14.3% |   0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:49` |
|     new | +511.999 KiB |  0.0% → 14.3% |   0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:50` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

| Change |      Delta |             % |        Size | Samples | Location                                                                          |
| -----: | ---------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 100.0% | 0 B → 2 MiB |   0 → 4 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping:84` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |      Delta |      % |            Size | Samples | Location                 |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------ |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `java.util.HashMap:1909` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |      Delta |      % |            Size | Samples | Location                                             |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------------------------------------- |
| +60.0% | +1.499 MiB | 100.0% | 2.5 MiB → 4 MiB |   5 → 8 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1:5079` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

| Change |      Delta |      % |            Size | Samples | Location                                              |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------- |
| +33.3% | +1.499 MiB | 100.0% | 4.5 MiB → 6 MiB |  9 → 12 | `org.jetbrains.kotlin.protobuf.CodedOutputStream:106` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |      % |            Size | Samples | Location                                        |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `jdk.internal.org.objectweb.asm.ByteVector:401` |

##### `replaceCurrentlyActiveContext(FirTowerDataContext)` (`org.jetbrains.kotlin.fir.resolve.FirRegularTowerDataContexts`)

| Change |      Delta |            % |          Size | Samples | Location                                                          |
| -----: | ---------: | -----------: | ------------: | ------: | ----------------------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 75.0% | 0 B → 1.5 MiB |   0 → 3 | `org.jetbrains.kotlin.fir.resolve.FirRegularTowerDataContexts:47` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedKeySet`)

|  Change |      Delta |      % |            Size | Samples | Location                                   |
| ------: | ---------: | -----: | --------------: | ------: | ------------------------------------------ |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `java.util.LinkedHashMap$LinkedKeySet:700` |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|  Change |      Delta |      % |            Size | Samples | Location             |
| ------: | ---------: | -----: | --------------: | ------: | -------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `kotlin.TuplesKt:44` |

##### `getFqNameWhenAvailable(IrDeclarationWithName)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |          Delta |            % |          Size | Samples | Location                                     |
| -----: | -------------: | -----------: | ------------: | ------: | -------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 66.7% |   0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:277` |
|    new |   +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.ir.util.IrUtilsKt:276` |

##### `<init>()` (`java.util.HashSet`)

| Change |      Delta |             % |          Size | Samples | Location                |
| -----: | ---------: | ------------: | ------------: | ------: | ----------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `java.util.HashSet:107` |

##### `toString()` (`java.lang.StringBuilder`)

| Change |          Delta |      % |          Size | Samples | Location                      |
| -----: | -------------: | -----: | ------------: | ------: | ----------------------------- |
| +33.3% | +1,023.998 KiB | 100.0% | 3 MiB → 4 MiB |   6 → 8 | `java.lang.StringBuilder:475` |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |          Delta |      % |          Size | Samples | Location                    |
| ------: | -------------: | -----: | ------------: | ------: | --------------------------- |
| +100.0% | +1,023.998 KiB | 100.0% | 1 MiB → 2 MiB |   2 → 4 | `java.lang.StringUTF16:211` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change |          Delta |      % |              Size | Samples | Location                                        |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------------------------- |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `kotlin.collections.builders.ListBuilderKt:624` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |          Delta |      % |              Size | Samples | Location                |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------- |
| +28.6% | +1,023.998 KiB | 100.0% | 3.5 MiB → 4.5 MiB |   7 → 9 | `java.util.HashSet:171` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

|  Change |          Delta |             % |          Size | Samples | Location                                    |
| ------: | -------------: | ------------: | ------------: | ------: | ------------------------------------------- |
| +100.0% | +1,023.998 KiB | 33.3% → 50.0% | 1 MiB → 2 MiB |   2 → 4 | `kotlin.collections.builders.MapBuilder:60` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |             % |        Size | Samples | Location                                       |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `jdk.internal.org.objectweb.asm.ByteVector:87` |

##### `<init>(int, int, MemorySegment)` (`java.nio.HeapByteBuffer`)

| Change |          Delta |             % |        Size | Samples | Location                     |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.nio.HeapByteBuffer:71` |

##### `listIterator(int)` (`kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector`)

| Change |          Delta |             % |        Size | Samples | Location                                                                                |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector:141` |

##### `singletonIterator(Object)` (`java.util.Collections`)

| Change |          Delta |             % |        Size | Samples | Location                     |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `java.util.Collections:5028` |

##### `newOutput()` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString`)

| Change |        Delta |             % |          Size | Samples | Location                                                   |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `kotlin.reflect.jvm.internal.impl.protobuf.ByteString:751` |

##### `internalNameByClassId(ClassId)` (`org.jetbrains.kotlin.resolve.jvm.JvmClassName`)

| Change |          Delta |             % |        Size | Samples | Location                                           |
| -----: | -------------: | ------------: | ----------: | ------: | -------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.resolve.jvm.JvmClassName:38` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

|  Change |        Delta |            % |          Size | Samples | Location                                                                          |
| ------: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:320` |
| removed | -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:327` |
|     new | +511.999 KiB | 0.0% → 20.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:319` |
|     new | +511.999 KiB | 0.0% → 20.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:328` |
|     new | +511.999 KiB | 0.0% → 20.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage:332` |

##### `isClassLikeVisible(FirVisibilityChecker, FirClassLikeSymbol, FirSession, FirFileSymbol, List)` (`org.jetbrains.kotlin.fir.FirVisibilityCheckerKt`)

| Change |          Delta |             % |        Size | Samples | Location                                              |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.FirVisibilityCheckerKt:692` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

| Change |          Delta |      % |          Size | Samples | Location                                                 |
| -----: | -------------: | -----: | ------------: | ------: | -------------------------------------------------------- |
| +16.7% | +1,023.998 KiB | 100.0% | 6 MiB → 7 MiB | 12 → 14 | `org.jetbrains.org.objectweb.asm.tree.analysis.Frame:96` |

##### `zzUnpackcmap_blocks()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change |        Delta |            % |          Size | Samples | Location                                   |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------ |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.lexer._JetLexer:274` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.lexer._JetLexer:276` |

##### `<init>(FirMemberDeclaration)` (`org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`)

| Change |          Delta |             % |        Size | Samples | Location                                                              |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope:39` |

##### `toLookupTag(ClassId)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

| Change |          Delta |             % |        Size | Samples | Location                                                    |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt:36` |

##### `considerType(CheckerContext, ConeKotlinType, Set)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`)

| Change |          Delta |             % |        Size | Samples | Location                                                                                   |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy:120` |

##### `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |          Delta |             % |        Size | Samples | Location                                              |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:480` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock`)

| Change |          Delta |             % |        Size | Samples | Location                                                                                  |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock:207` |

##### `<init>(MethodNode, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change |        Delta |            % |          Size | Samples | Location                                                                          |
| -----: | -----------: | -----------: | ------------: | ------: | --------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:49` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer:51` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Location                           |
| -----: | ----------: | -----: | ----------------: | --------: | ---------------------------------- |
| -22.7% | -44.313 MiB | 100.0% | 195 MiB → 151 MiB | 391 → 302 | `java.io.ByteArrayOutputStream:81` |

##### `iterator()` (`java.util.ArrayList`)

| Change |      Delta |      % |                Size | Samples | Location                   |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- |
| -28.6% | -4.999 MiB | 100.0% | 17.5 MiB → 12.5 MiB | 35 → 25 | `java.util.ArrayList:1029` |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Location                |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------- |
| -22.6% | -3.499 MiB | 100.0% | 15.5 MiB → 12 MiB | 31 → 24 | `java.util.Arrays:3863` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

| Change |      Delta |      % |            Size | Samples | Location                |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------- |
| -50.0% | -2.499 MiB | 100.0% | 5 MiB → 2.5 MiB |  10 → 5 | `java.util.Arrays:3482` |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

| Change |      Delta |      % |          Size | Samples | Location                           |
| -----: | ---------: | -----: | ------------: | ------: | ---------------------------------- |
| -66.7% | -1.999 MiB | 100.0% | 3 MiB → 1 MiB |   6 → 2 | `java.util.zip.ZipInputStream:555` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |          Size | Samples | Location                     |
| -----: | ---------: | -----: | ------------: | ------: | ---------------------------- |
| -40.0% | -1.999 MiB | 100.0% | 5 MiB → 3 MiB |  10 → 6 | `java.lang.StringLatin1:750` |

##### `getBufferBytes(ByteBuffer)` (`jdk.internal.jimage.BasicImageReader`)

| Change |      Delta |      % |          Size | Samples | Location                                   |
| -----: | ---------: | -----: | ------------: | ------: | ------------------------------------------ |
| -66.7% | -1.999 MiB | 100.0% | 3 MiB → 1 MiB |   6 → 2 | `jdk.internal.jimage.BasicImageReader:356` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`)

|  Change |      Delta |             % |        Size | Samples | Location                                                      |
| ------: | ---------: | ------------: | ----------: | ------: | ------------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1:5231` |

##### `lazy(LazyThreadSafetyMode, Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|  Change |        Delta |              % |            Size | Samples | Location                      |
| ------: | -----------: | -------------: | --------------: | ------: | ----------------------------- |
| removed |   -1.499 MiB |   50.0% → 0.0% |   1.5 MiB → 0 B |   3 → 0 | `kotlin.LazyKt__LazyJVMKt:44` |
|  -33.3% | -511.999 KiB | 50.0% → 100.0% | 1.5 MiB → 1 MiB |   3 → 2 | `kotlin.LazyKt__LazyJVMKt:45` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|  Change |          Delta |            % |        Size | Samples | Location                                                       |
| ------: | -------------: | -----------: | ----------: | ------: | -------------------------------------------------------------- |
| removed | -1,023.998 KiB | 50.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt:538` |
| removed | -1,023.998 KiB | 50.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt:546` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

|  Change |          Delta |              % |              Size | Samples | Location                                                  |
| ------: | -------------: | -------------: | ----------------: | ------: | --------------------------------------------------------- |
|  -66.7% | -1,023.998 KiB | 60.0% → 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:169` |
| removed | -1,023.998 KiB |   40.0% → 0.0% |       1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.types.ConeInferenceContext:175` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

| Change |      Delta |      % |              Size | Samples | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------------- |
| -80.0% | -1.999 MiB | 100.0% | 2.5 MiB → 512 KiB |   5 → 1 | `org.jetbrains.org.objectweb.asm.tree.InsnList:178` |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

| Change |      Delta |      % |            Size | Samples | Location               |
| -----: | ---------: | -----: | --------------: | ------: | ---------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `java.lang.String:709` |

##### `grow(int)` (`java.util.ArrayList`)

| Change |      Delta |      % |            Size | Samples | Location                  |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------- |
| -23.1% | -1.499 MiB | 100.0% | 6.5 MiB → 5 MiB | 13 → 10 | `java.util.ArrayList:239` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

|  Change |      Delta |             % |          Size | Samples | Location                                                        |
| ------: | ---------: | ------------: | ------------: | ------: | --------------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1:24018` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change |      Delta |      % |            Size | Samples | Location                                                       |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2:1568` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Location                |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------- |
| -21.4% | -1.499 MiB | 100.0% | 7 MiB → 5.5 MiB | 14 → 11 | `java.util.HashMap:710` |

##### `listIterator(int)` (`kotlin.collections.builders.ListBuilder`)

|  Change |      Delta |             % |          Size | Samples | Location                                     |
| ------: | ---------: | ------------: | ------------: | ------: | -------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `kotlin.collections.builders.ListBuilder:76` |

##### `newExtensionWriter()` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage`)

|  Change |      Delta |             % |          Size | Samples | Location                                                                   |
| ------: | ---------: | ------------: | ------------: | ------: | -------------------------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage:308` |

##### `unmodifiableList(List)` (`java.util.Collections`)

| Change |          Delta |      % |          Size | Samples | Location                     |
| -----: | -------------: | -----: | ------------: | ------: | ---------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `java.util.Collections:1479` |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change |          Delta |             % |        Size | Samples | Location                                 |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `java.lang.invoke.LambdaMetafactory:331` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

| Change |          Delta |      % |          Size | Samples | Location                              |
| -----: | -------------: | -----: | ------------: | ------: | ------------------------------------- |
| -20.0% | -1,023.998 KiB | 100.0% | 5 MiB → 4 MiB |  10 → 8 | `java.lang.AbstractStringBuilder:101` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

| Change |          Delta |      % |          Size | Samples | Location                                         |
| -----: | -------------: | -----: | ------------: | ------: | ------------------------------------------------ |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `jdk.internal.org.objectweb.asm.SymbolTable:807` |

##### `listIterator(int)` (`kotlin.collections.ReversedListReadOnly`)

|  Change |          Delta |             % |        Size | Samples | Location                                     |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `kotlin.collections.ReversedListReadOnly:18` |

##### `builder()` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap`)

| Change |          Delta |      % |          Size | Samples | Location                                                                          |
| -----: | -------------: | -----: | ------------: | ------: | --------------------------------------------------------------------------------- |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap:79` |

##### `mutableListOf(Object[])` (`kotlin.collections.CollectionsKt__CollectionsKt`)

|  Change |          Delta |             % |        Size | Samples | Location                                              |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `kotlin.collections.CollectionsKt__CollectionsKt:121` |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

| Change |          Delta |      % |              Size | Samples | Location                                                               |
| -----: | -------------: | -----: | ----------------: | ------: | ---------------------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence:31` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

|  Change |          Delta |             % |        Size | Samples | Location                                                      |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1:7714` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

|  Change |        Delta |            % |          Size | Samples | Location                                                            |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:33` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl:51` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |          Delta |      % |              Size | Samples | Location                                                     |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------------------------------ |
| -28.6% | -1,023.998 KiB | 100.0% | 3.5 MiB → 2.5 MiB |   7 → 5 | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure:1662` |

##### `forceCapacity(int[], int, int)` (`it.unimi.dsi.fastutil.ints.IntArrays`)

| Change |          Delta |      % |              Size | Samples | Location                                   |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------------------ |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `it.unimi.dsi.fastutil.ints.IntArrays:125` |

##### `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`)

|  Change |          Delta |             % |        Size | Samples | Location                                                    |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass:324` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change |          Delta |             % |        Size | Samples | Location                                                             |
| ------: | -------------: | ------------: | ----------: | ------: | -------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer:684` |

##### `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change |        Delta |            % |          Size | Samples | Location                                                                        |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:78` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector:85` |

##### `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change |        Delta |            % |          Size | Samples | Location                                                                        |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl:41` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl:46` |

##### `topLevel(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe$Companion`)

|  Change |          Delta |             % |        Size | Samples | Location                                               |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------ |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.kotlin.name.FqNameUnsafe$Companion:185` |

##### `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |        Delta |              % |            Size | Samples | Location                                                                                               |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------ |
| removed | -511.999 KiB |   33.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:323` |
|  -50.0% | -511.999 KiB | 66.7% → 100.0% | 1 MiB → 512 KiB |   2 → 1 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:433` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |          Delta |             % |        Size | Samples | Location                                              |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:351` |

##### `<init>(int)` (`org.jetbrains.org.objectweb.asm.ByteVector`)

|  Change |          Delta |             % |        Size | Samples | Location                                        |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `org.jetbrains.org.objectweb.asm.ByteVector:55` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |          Delta |             % |              Size |   Samples | Caller                        | Location                          |
| -----: | -------------: | ------------: | ----------------: | --------: | ----------------------------- | --------------------------------- |
|  +8.0% |     +9.499 MiB | 94.1% → 92.5% | 119 MiB → 129 MiB | 238 → 257 | `toByteArray()`               | `java.io.ByteArrayOutputStream`   |
| +40.0% |     +1.999 MiB |   3.9% → 5.0% |     5 MiB → 7 MiB |   10 → 14 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |
| +40.0% | +1,023.998 KiB |   2.0% → 2.5% | 2.5 MiB → 3.5 MiB |     5 → 7 | `getBytes()`                  | `jdk.internal.loader.Resource`    |

##### `clone()` (`java.lang.Object`)

|  Change |        Delta |             % |              Size | Samples | Caller                          | Location                          |
| ------: | -----------: | ------------: | ----------------: | ------: | ------------------------------- | --------------------------------- |
|  +16.5% |   +6.499 MiB | 97.5% → 98.9% | 39.5 MiB → 46 MiB | 79 → 92 | `copyOf(byte[], int)`           | `java.util.Arrays`                |
| removed | -511.999 KiB |   1.2% → 0.0% |     512 KiB → 0 B |   1 → 0 | `copyOfRange(byte[], int, int)` | `java.util.Arrays`                |
| removed | -511.999 KiB |   1.2% → 0.0% |     512 KiB → 0 B |   1 → 0 | `canonicalizeAll(Class[], int)` | `java.lang.invoke.MethodTypeForm` |
|     new | +511.999 KiB |   0.0% → 1.1% |     0 B → 512 KiB |   0 → 1 | `clone()`                       | `java.lang.invoke.MemberName`     |

##### `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)` (`java.lang.ClassLoader`)

|  Change |      Delta |      % |            Size | Samples | Caller                                                    | Location                |
| ------: | ---------: | -----: | --------------: | ------: | --------------------------------------------------------- | ----------------------- |
| +500.0% | +2.499 MiB | 100.0% | 512 KiB → 3 MiB |   1 → 6 | `defineClass(String, byte[], int, int, ProtectionDomain)` | `java.lang.ClassLoader` |

##### `accept(ClassVisitor, Attribute[], int)` (`org.jetbrains.org.objectweb.asm.ClassReader`)

|  Change |      Delta |      % |            Size | Samples | Caller                      | Location                                      |
| ------: | ---------: | -----: | --------------: | ------: | --------------------------- | --------------------------------------------- |
| +250.0% | +2.499 MiB | 100.0% | 1 MiB → 3.5 MiB |   2 → 7 | `accept(ClassVisitor, int)` | `org.jetbrains.org.objectweb.asm.ClassReader` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.LinkedHashMap`)

| Change |      Delta |      % |            Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- | ------------------- |
| +83.3% | +2.499 MiB | 100.0% | 3 MiB → 5.5 MiB |  6 → 11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `<init>(int)` (`org.jetbrains.kotlin.protobuf.ByteString$Output`)

| Change |      Delta |      % |            Size | Samples | Caller        | Location                                   |
| -----: | ---------: | -----: | --------------: | ------: | ------------- | ------------------------------------------ |
| +14.3% | +1.999 MiB | 100.0% | 14 MiB → 16 MiB | 28 → 32 | `newOutput()` | `org.jetbrains.kotlin.protobuf.ByteString` |

##### `simplifyTrivialInstructions(MethodNode)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|  Change |      Delta |      % |              Size | Samples | Caller                          | Location                                                                                           |
| ------: | ---------: | -----: | ----------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| +133.3% | +1.999 MiB | 100.0% | 1.5 MiB → 3.5 MiB |   3 → 7 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `getBytes(int, int)` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping`)

| Change |          Delta |            % |        Size | Samples | Caller                                                                                      | Location                                                          |
| -----: | -------------: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 50.0% | 0 B → 1 MiB |   0 → 2 | `parseCentralDirectory$lambda$0(Ref$LongRef, List, long, LargeDynamicMappedBuffer$Mapping)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |
|    new | +1,023.998 KiB | 0.0% → 50.0% | 0 B → 1 MiB |   0 → 2 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)`       | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt` |

##### `newNode(int, Object, Object, HashMap$Node)` (`java.util.HashMap`)

|  Change |      Delta |      % |            Size | Samples | Caller                                          | Location            |
| ------: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- | ------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$1`)

| Change |      Delta |      % |            Size | Samples | Caller                                                      | Location                                        |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------------------- | ----------------------------------------------- |
| +60.0% | +1.499 MiB | 100.0% | 2.5 MiB → 4 MiB |   5 → 8 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$1` |

##### `newInstance(OutputStream, int)` (`org.jetbrains.kotlin.protobuf.CodedOutputStream`)

|  Change |          Delta |             % |              Size | Samples | Caller                                            | Location                                                           |
| ------: | -------------: | ------------: | ----------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------------ |
| +100.0% | +1,023.998 KiB | 22.2% → 33.3% |     1 MiB → 2 MiB |   2 → 4 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                      |
| +200.0% | +1,023.998 KiB | 11.1% → 25.0% | 512 KiB → 1.5 MiB |   1 → 3 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation`                |
|     new | +1,023.998 KiB |  0.0% → 16.7% |       0 B → 1 MiB |   0 → 2 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Function`                  |
|  -50.0% |   -511.999 KiB |  22.2% → 8.3% |   1 MiB → 512 KiB |   2 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument`             |
| removed |   -511.999 KiB |  11.1% → 0.0% |     512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Annotation$Argument$Value` |

##### `enlarge(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

|  Change |      Delta |      % |            Size | Samples | Caller            | Location                                    |
| ------: | ---------: | -----: | --------------: | ------: | ----------------- | ------------------------------------------- |
| +100.0% | +1.499 MiB | 100.0% | 1.5 MiB → 3 MiB |   3 → 6 | `putUTF8(String)` | `jdk.internal.org.objectweb.asm.ByteVector` |

##### `replaceCurrentlyActiveContext(FirTowerDataContext)` (`org.jetbrains.kotlin.fir.resolve.FirRegularTowerDataContexts`)

|  Change |      Delta |      % |            Size | Samples | Caller                                         | Location                                                                        |
| ------: | ---------: | -----: | --------------: | ------: | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| +300.0% | +1.499 MiB | 100.0% | 512 KiB → 2 MiB |   1 → 4 | `replaceTowerDataContext(FirTowerDataContext)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.BodyResolveContext` |

##### `allocateInstance(Class)` (`jdk.internal.misc.Unsafe`)

| Change |      Delta |      % |            Size | Samples | Caller                     | Location                              |
| -----: | ---------: | -----: | --------------: | ------: | -------------------------- | ------------------------------------- |
| +75.0% | +1.499 MiB | 100.0% | 2 MiB → 3.5 MiB |   4 → 7 | `allocateInstance(Object)` | `java.lang.invoke.DirectMethodHandle` |

##### `iterator()` (`java.util.LinkedHashMap$LinkedKeySet`)

|  Change |        Delta |              % |            Size | Samples | Caller                    | Location                                                                                    |
| ------: | -----------: | -------------: | --------------: | ------: | ------------------------- | ------------------------------------------------------------------------------------------- |
| +100.0% | +511.999 KiB | 100.0% → 50.0% | 512 KiB → 1 MiB |   1 → 2 | `iterator()`              | `java.util.HashSet`                                                                         |
|     new | +511.999 KiB |   0.0% → 25.0% |   0 B → 512 KiB |   0 → 1 | `unwrapAtoms(Collection)` | `org.jetbrains.kotlin.fir.resolve.transformers.FirCallCompletionResultsWriterTransformerKt` |
|     new | +511.999 KiB |   0.0% → 25.0% |   0 B → 512 KiB |   0 → 1 | `toList(Iterable)`        | `kotlin.collections.CollectionsKt___CollectionsKt`                                          |

##### `to(Object, Object)` (`kotlin.TuplesKt`)

|  Change |        Delta |             % |          Size | Samples | Caller                                                               | Location                                                                                                           |
| ------: | -----------: | ------------: | ------------: | ------: | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getChild(KtSourceElement, Set, int, int, boolean)`                  | `org.jetbrains.kotlin.fir.analysis.FirSourceUtilsKt`                                                               |
|     new | +511.999 KiB |  0.0% → 25.0% | 0 B → 512 KiB |   0 → 1 | `addPossibleNewConstraint(TypeVariableMarker, Constraint)`           | `org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector$TypeCheckerStateForConstraintInjector` |
|     new | +511.999 KiB |  0.0% → 25.0% | 0 B → 512 KiB |   0 → 1 | `zip(Iterable, Iterable)`                                            | `kotlin.collections.CollectionsKt___CollectionsKt`                                                                 |
|     new | +511.999 KiB |  0.0% → 25.0% | 0 B → 512 KiB |   0 → 1 | `runAfter(PhaseConfig, PhaserState, LoggingContext, Object, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                                                            |
|     new | +511.999 KiB |  0.0% → 25.0% | 0 B → 512 KiB |   0 → 1 | `zipWithNulls(Iterable, Iterable)`                                   | `org.jetbrains.kotlin.utils.addToStdlib.AddToStdlibKt`                                                             |

##### `getFqNameWhenAvailable(IrDeclarationWithName)` (`org.jetbrains.kotlin.ir.util.IrUtilsKt`)

| Change |      Delta |             % |          Size | Samples | Caller                                        | Location                                            |
| -----: | ---------: | ------------: | ------------: | ------: | --------------------------------------------- | --------------------------------------------------- |
|    new | +1.499 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB |   0 → 3 | `getClassFqNameUnsafe(TypeConstructorMarker)` | `org.jetbrains.kotlin.ir.types.IrTypeSystemContext` |

##### `<init>()` (`java.util.HashSet`)

| Change |        Delta |            % |          Size | Samples | Caller                                                  | Location                                                                          |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------- | --------------------------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `getNonSubsumedNonPhantomOverriddenSymbols(Collection)` | `org.jetbrains.kotlin.fir.declarations.DeclarationUtilsKt`                        |
|    new | +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `<init>()`                                              | `org.jetbrains.kotlin.codegen.optimization.boxing.RedundantBoxedValuesCollection` |
|    new | +511.999 KiB | 0.0% → 33.3% | 0 B → 512 KiB |   0 → 1 | `transform(String, MethodNode)`                         | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`        |

##### `toString()` (`java.lang.StringBuilder`)

|  Change |          Delta |            % |          Size | Samples | Caller                                                                                           | Location                                                                    |
| ------: | -------------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
|     new | +1,023.998 KiB | 0.0% → 25.0% |   0 B → 1 MiB |   0 → 2 | `toLowerCaseAsciiOnly(String)`                                                                   | `org.jetbrains.kotlin.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt` |
| removed | -1,023.998 KiB | 33.3% → 0.0% |   1 MiB → 0 B |   2 → 0 | `getFqNameWhenAvailable(IrDeclarationWithName)`                                                  | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                                    |
| removed |   -511.999 KiB | 16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `map$lambda$0$add(Map, String, String)`                                                          | `org.jetbrains.kotlin.metadata.jvm.deserialization.ClassMapperLite`         |
| removed |   -511.999 KiB | 16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `joinToString(Iterable, CharSequence, CharSequence, CharSequence, int, CharSequence, Function1)` | `kotlin.collections.CollectionsKt___CollectionsKt`                          |
|     new |   +511.999 KiB | 0.0% → 12.5% | 0 B → 512 KiB |   0 → 1 | `fromMethodNameAndDesc(String, String)`                                                          | `org.jetbrains.kotlin.load.kotlin.MemberSignature$Companion`                |

##### `compress(char[], int, int)` (`java.lang.StringUTF16`)

|  Change |          Delta |      % |          Size | Samples | Caller                           | Location           |
| ------: | -------------: | -----: | ------------: | ------: | -------------------------------- | ------------------ |
| +100.0% | +1,023.998 KiB | 100.0% | 1 MiB → 2 MiB |   2 → 4 | `<init>(char[], int, int, Void)` | `java.lang.String` |

##### `arrayOfUninitializedElements(int)` (`kotlin.collections.builders.ListBuilderKt`)

| Change |          Delta |              % |              Size | Samples | Caller        | Location                                  |
| -----: | -------------: | -------------: | ----------------: | ------: | ------------- | ----------------------------------------- |
|    new |     +1.999 MiB |   0.0% → 80.0% |       0 B → 2 MiB |   0 → 4 | `<init>(int)` | `kotlin.collections.builders.MapBuilder`  |
| -66.7% | -1,023.998 KiB | 100.0% → 20.0% | 1.5 MiB → 512 KiB |   3 → 1 | `<init>(int)` | `kotlin.collections.builders.ListBuilder` |

##### `<init>(int, float, boolean)` (`java.util.HashSet`)

| Change |          Delta |      % |              Size | Samples | Caller     | Location                  |
| -----: | -------------: | -----: | ----------------: | ------: | ---------- | ------------------------- |
| +28.6% | +1,023.998 KiB | 100.0% | 3.5 MiB → 4.5 MiB |   7 → 9 | `<init>()` | `java.util.LinkedHashSet` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

| Change |          Delta |      % |          Size | Samples | Caller     | Location                                 |
| -----: | -------------: | -----: | ------------: | ------: | ---------- | ---------------------------------------- |
| +33.3% | +1,023.998 KiB | 100.0% | 3 MiB → 4 MiB |   6 → 8 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `<init>(int)` (`jdk.internal.org.objectweb.asm.ByteVector`)

| Change |          Delta |             % |        Size | Samples | Caller          | Location                                     |
| -----: | -------------: | ------------: | ----------: | ------: | --------------- | -------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `toByteArray()` | `jdk.internal.org.objectweb.asm.ClassWriter` |

##### `<init>(int, int, MemorySegment)` (`java.nio.HeapByteBuffer`)

| Change |          Delta |             % |        Size | Samples | Caller          | Location              |
| -----: | -------------: | ------------: | ----------: | ------: | --------------- | --------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `allocate(int)` | `java.nio.ByteBuffer` |

##### `listIterator(int)` (`kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector`)

| Change |        Delta |            % |          Size | Samples | Caller                                      | Location                                                    |
| -----: | -----------: | -----------: | ------------: | ------: | ------------------------------------------- | ----------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `<init>(ReversedListReadOnly, int)`         | `kotlin.collections.ReversedListReadOnly$listIterator$1`    |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `addLocalVariable(FirVariable, FirSession)` | `org.jetbrains.kotlin.fir.declarations.FirTowerDataContext` |

##### `singletonIterator(Object)` (`java.util.Collections`)

| Change |          Delta |             % |        Size | Samples | Caller       | Location                              |
| -----: | -------------: | ------------: | ----------: | ------: | ------------ | ------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `iterator()` | `java.util.Collections$SingletonList` |

##### `newOutput()` (`kotlin.reflect.jvm.internal.impl.protobuf.ByteString`)

| Change |        Delta |             % |          Size | Samples | Caller                                            | Location                                                        |
| -----: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------- | --------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 100.0% | 0 B → 512 KiB |   0 → 1 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation` |

##### `internalNameByClassId(ClassId)` (`org.jetbrains.kotlin.resolve.jvm.JvmClassName`)

| Change |          Delta |             % |        Size | Samples | Caller                                                                                              | Location                                                  |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `mapBuiltInType(TypeSystemCommonBackendContext, KotlinTypeMarker, JvmTypeFactory, TypeMappingMode)` | `org.jetbrains.kotlin.load.kotlin.TypeSignatureMappingKt` |

##### `<init>()` (`org.jetbrains.kotlin.resolve.calls.inference.model.MutableConstraintStorage`)

| Change |          Delta |      % |              Size | Samples | Caller                                                                                                | Location                                                                     |
| -----: | -------------: | -----: | ----------------: | ------: | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| +66.7% | +1,023.998 KiB | 100.0% | 1.5 MiB → 2.5 MiB |   3 → 5 | `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `box-impl(List)` (`org.jetbrains.kotlin.fir.MutableOrEmptyList`)

|  Change |          Delta |             % |            Size | Samples | Caller                               | Location                                                             |
| ------: | -------------: | ------------: | --------------: | ------: | ------------------------------------ | -------------------------------------------------------------------- |
|     new |     +1.499 MiB |  0.0% → 37.5% |   0 B → 1.5 MiB |   0 → 3 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl`     |
|     new | +1,023.998 KiB |  0.0% → 25.0% |     0 B → 1 MiB |   0 → 2 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirPropertyImpl`         |
| removed |   -511.999 KiB |  16.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.declarations.impl.FirNamedFunctionImpl`    |
| removed |   -511.999 KiB |  16.7% → 0.0% |   512 KiB → 0 B |   1 → 0 | `acceptChildren(FirVisitor, Object)` | `org.jetbrains.kotlin.fir.expressions.impl.FirSingleExpressionBlock` |
|  -50.0% |   -511.999 KiB | 33.3% → 12.5% | 1 MiB → 512 KiB |   2 → 1 | `getAnnotations()`                   | `org.jetbrains.kotlin.fir.types.impl.FirResolvedTypeRefImpl`         |

##### `isClassLikeVisible(FirVisibilityChecker, FirClassLikeSymbol, FirSession, FirFileSymbol, List)` (`org.jetbrains.kotlin.fir.FirVisibilityCheckerKt`)

| Change |          Delta |             % |        Size | Samples | Caller                                                            | Location                                                                           |
| -----: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `isTypeVisibilityBroken(CheckerContext, ConeKotlinType, boolean)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirTypeVisibilityHelpersKt` |

##### `<init>(int, int)` (`org.jetbrains.org.objectweb.asm.tree.analysis.Frame`)

|  Change |          Delta |             % |            Size | Samples | Caller                                          | Location                                                                                                   |
| ------: | -------------: | ------------: | --------------: | ------: | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| +150.0% |     +2.999 MiB | 33.3% → 71.4% |   2 MiB → 5 MiB |  4 → 10 | `_init_$lambda$0(int, int)`                     | `org.jetbrains.kotlin.codegen.optimization.common.FastMethodAnalyzer`                                      |
| removed | -1,023.998 KiB |  16.7% → 0.0% |     1 MiB → 0 B |   2 → 0 | `<init>(int, int)`                              | `org.jetbrains.kotlin.codegen.inline.MethodInlinerUtilKt$analyzeMethodNodeWithInterpreter$BasicValueFrame` |
|  -50.0% |   -511.999 KiB |  16.7% → 7.1% | 1 MiB → 512 KiB |   2 → 1 | `preprocessNodeBeforeInline$lambda$0(int, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                                                        |
|  -33.3% |   -511.999 KiB | 25.0% → 14.3% | 1.5 MiB → 1 MiB |   3 → 2 | `<init>(FixStackAnalyzer, int, int)`            | `org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackAnalyzer$FixStackFrame`                        |
| removed |   -511.999 KiB |   8.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `<init>(int, int)`                              | `org.jetbrains.kotlin.codegen.optimization.boxing.BoxingFrame`                                             |

##### `zzUnpackcmap_blocks()` (`org.jetbrains.kotlin.lexer._JetLexer`)

| Change |          Delta |             % |        Size | Samples | Caller       | Location                               |
| -----: | -------------: | ------------: | ----------: | ------: | ------------ | -------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `<clinit>()` | `org.jetbrains.kotlin.lexer._JetLexer` |

##### `<init>(FirMemberDeclaration)` (`org.jetbrains.kotlin.fir.scopes.impl.FirMemberTypeParameterScope`)

| Change |          Delta |             % |        Size | Samples | Caller                                                     | Location                                                                                                       |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `transformNamedFunction(FirNamedFunction, ResolutionMode)` | `org.jetbrains.kotlin.fir.resolve.transformers.plugin.FirDeclarationsResolveTransformerForAnnotationArguments` |

##### `toLookupTag(ClassId)` (`org.jetbrains.kotlin.fir.types.TypeConstructionUtilsKt`)

| Change |        Delta |            % |          Size | Samples | Caller                                                                             | Location                                                          |
| -----: | -----------: | -----------: | ------------: | ------: | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `loadAnnotation(ClassId, List)`                                                    | `org.jetbrains.kotlin.fir.java.deserialization.AnnotationsLoader` |
|    new | +511.999 KiB | 0.0% → 50.0% | 0 B → 512 KiB |   0 → 1 | `createFunctionType(FunctionTypeKind, List, ConeKotlinType, ConeKotlinType, List)` | `org.jetbrains.kotlin.fir.resolve.ResolveUtilsKt`                 |

##### `considerType(CheckerContext, ConeKotlinType, Set)` (`org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassProxy`)

| Change |          Delta |             % |        Size | Samples | Caller                                                                    | Location                                                                                 |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassChecker` |

##### `visitLocalVariable(String, String, String, Label, Label, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

| Change |          Delta |             % |        Size | Samples | Caller                                                          | Location                                        |
| -----: | -------------: | ------------: | ----------: | ------: | --------------------------------------------------------------- | ----------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `visitLocalVariable(String, String, String, Label, Label, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator$BasicBlock`)

| Change |          Delta |             % |        Size | Samples | Caller                       | Location                                                                   |
| -----: | -------------: | ------------: | ----------: | ------: | ---------------------------- | -------------------------------------------------------------------------- |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `getBasicBlockAt$lambda$0()` | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |

##### `<init>(MethodNode, boolean)` (`org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer`)

| Change |          Delta |             % |        Size | Samples | Caller                                                       | Location                                                                       |
| -----: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------ | ------------------------------------------------------------------------------ |
|    new | +1,023.998 KiB | 0.0% → 100.0% | 0 B → 1 MiB |   0 → 2 | `<init>(MethodNode, boolean, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer` |

##### `<init>(int)` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Caller                                                  | Location                                               |
| -----: | ----------: | -----: | ----------------: | --------: | ------------------------------------------------------- | ------------------------------------------------------ |
| -22.7% | -44.313 MiB | 100.0% | 195 MiB → 151 MiB | 391 → 302 | `loadAllClassesFromJars(Collection, int, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `iterator()` (`java.util.ArrayList`)

|  Change |          Delta |            % |              Size | Samples | Caller                                         | Location                                                  |
| ------: | -------------: | -----------: | ----------------: | ------: | ---------------------------------------------- | --------------------------------------------------------- |
| +400.0% |     +1.999 MiB | 2.9% → 20.0% | 512 KiB → 2.5 MiB |   1 → 5 | `iterator-impl(List)`                          | `org.jetbrains.kotlin.fir.MutableOrEmptyList`             |
| removed |     -1.499 MiB |  8.6% → 0.0% |     1.5 MiB → 0 B |   3 → 0 | `zip(Iterable, Iterable)`                      | `kotlin.collections.CollectionsKt___CollectionsKt`        |
| removed | -1,023.998 KiB |  5.7% → 0.0% |       1 MiB → 0 B |   2 → 0 | `getAnnotation(IrAnnotationContainer, FqName)` | `org.jetbrains.kotlin.ir.util.IrUtilsKt`                  |
|     new | +1,023.998 KiB |  0.0% → 8.0% |       0 B → 1 MiB |   0 → 2 | `getTypeParameterSymbols()`                    | `org.jetbrains.kotlin.fir.symbols.impl.FirCallableSymbol` |
| removed |   -511.999 KiB |  2.9% → 0.0% |     512 KiB → 0 B |   1 → 0 | `visitClassTypeSignature(ClassTypeSignature)`  | `sun.reflect.generics.visitor.Reifier`                    |

##### `copyOfRangeByte(byte[], int, int)` (`java.util.Arrays`)

| Change |      Delta |      % |              Size | Samples | Caller                          | Location           |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------- | ------------------ |
| -22.6% | -3.499 MiB | 100.0% | 15.5 MiB → 12 MiB | 31 → 24 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `copyOf(Object[], int)` (`java.util.Arrays`)

|  Change |          Delta |             % |              Size | Samples | Caller               | Location                                                                            |
| ------: | -------------: | ------------: | ----------------: | ------: | -------------------- | ----------------------------------------------------------------------------------- |
|  -40.0% | -1,023.998 KiB | 50.0% → 60.0% | 2.5 MiB → 1.5 MiB |   5 → 3 | `grow(int)`          | `java.util.ArrayList`                                                               |
|  -33.3% |   -511.999 KiB | 30.0% → 40.0% |   1.5 MiB → 1 MiB |   3 → 2 | `toArray()`          | `java.util.ArrayList`                                                               |
| removed |   -511.999 KiB |  10.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `addAll(Collection)` | `kotlinx.collections.immutable.implementations.immutableList.SmallPersistentVector` |
| removed |   -511.999 KiB |  10.0% → 0.0% |     512 KiB → 0 B |   1 → 0 | `copy()`             | `org.jetbrains.kotlin.util.ArrayMapImpl`                                            |

##### `createZipEntry(String)` (`java.util.zip.ZipInputStream`)

| Change |      Delta |      % |          Size | Samples | Caller      | Location                       |
| -----: | ---------: | -----: | ------------: | ------: | ----------- | ------------------------------ |
| -66.7% | -1.999 MiB | 100.0% | 3 MiB → 1 MiB |   6 → 2 | `readLOC()` | `java.util.zip.ZipInputStream` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |      % |          Size | Samples | Caller                | Location           |
| -----: | ---------: | -----: | ------------: | ------: | --------------------- | ------------------ |
| -40.0% | -1.999 MiB | 100.0% | 5 MiB → 3 MiB |  10 → 6 | `substring(int, int)` | `java.lang.String` |

##### `getBufferBytes(ByteBuffer)` (`jdk.internal.jimage.BasicImageReader`)

| Change |      Delta |      % |          Size | Samples | Caller                       | Location                               |
| -----: | ---------: | -----: | ------------: | ------: | ---------------------------- | -------------------------------------- |
| -66.7% | -1.999 MiB | 100.0% | 3 MiB → 1 MiB |   6 → 2 | `getResource(ImageLocation)` | `jdk.internal.jimage.BasicImageReader` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1`)

|  Change |      Delta |             % |        Size | Samples | Caller                                                      | Location                                                 |
| ------: | ---------: | ------------: | ----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| removed | -1.999 MiB | 100.0% → 0.0% | 2 MiB → 0 B |   4 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type$Argument$1` |

##### `lazy(LazyThreadSafetyMode, Function0)` (`kotlin.LazyKt__LazyJVMKt`)

|  Change |        Delta |            % |          Size | Samples | Caller                                                                                                                    | Location                                                                |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| removed | -511.999 KiB | 16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(Class)`                                                                                                           | `kotlin.reflect.jvm.internal.KClassImpl`                                |
| removed | -511.999 KiB | 16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(FirThisOwnerSymbol, ConeKotlinType, ConeKotlinType, FirSession, ScopeSession, boolean, InaccessibleReceiverKind)` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue`          |
| removed | -511.999 KiB | 16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(Map, FirSession)`                                                                                                 | `org.jetbrains.kotlin.fir.resolve.substitution.ConeSubstitutorByMap`    |
| removed | -511.999 KiB | 16.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(Name, FirTowerDataContext)`                                                                                       | `org.jetbrains.kotlin.fir.resolve.calls.tower.TowerDataElementsForName` |

##### `extractDeprecationAnnotationInfoPerUseSite(List, boolean, FirSession, List)` (`org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt`)

|  Change |          Delta |            % |        Size | Samples | Caller                                                                                | Location                                                   |
| ------: | -------------: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| removed | -1,023.998 KiB | 50.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `getDeprecationsProviderFromAnnotations(List, FirSession, boolean, List)`             | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |
| removed | -1,023.998 KiB | 50.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `extractDeprecationInfoPerUseSite(FirAnnotationContainer, FirSession, List, boolean)` | `org.jetbrains.kotlin.fir.declarations.DeprecationUtilsKt` |

##### `newTypeCheckerState(TypeSystemContext, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.types.ConeInferenceContext`)

| Change |      Delta |      % |              Size | Samples | Caller                                           | Location                                                      |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------ | ------------------------------------------------------------- |
| -80.0% | -1.999 MiB | 100.0% | 2.5 MiB → 512 KiB |   5 → 1 | `newTypeCheckerState(boolean, boolean, boolean)` | `org.jetbrains.kotlin.types.model.TypeCheckerProviderContext` |

##### `toArray()` (`org.jetbrains.org.objectweb.asm.tree.InsnList`)

|  Change |          Delta |            % |          Size | Samples | Caller                                                                                     | Location                                                                                           |
| ------: | -------------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 40.0% → 0.0% |   1 MiB → 0 B |   2 → 0 | `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `indexOf(AbstractInsnNode)`                                                                | `org.jetbrains.org.objectweb.asm.tree.InsnList`                                                    |
| removed |   -511.999 KiB | 20.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `transform(String, MethodNode)`                                                            | `org.jetbrains.kotlin.codegen.optimization.RedundantGotoMethodTransformer`                         |

##### `newStringUTF8NoRepl(byte[], int, int, boolean)` (`java.lang.String`)

| Change |      Delta |      % |            Size | Samples | Caller                                  | Location             |
| -----: | ---------: | -----: | --------------: | ------: | --------------------------------------- | -------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `newStringUTF8NoRepl(byte[], int, int)` | `java.lang.System$2` |

##### `grow(int)` (`java.util.ArrayList`)

|  Change |          Delta |              % |          Size | Samples | Caller               | Location              |
| ------: | -------------: | -------------: | ------------: | ------: | -------------------- | --------------------- |
|  -16.7% | -1,023.998 KiB | 92.3% → 100.0% | 6 MiB → 5 MiB | 12 → 10 | `grow()`             | `java.util.ArrayList` |
| removed |   -511.999 KiB |    7.7% → 0.0% | 512 KiB → 0 B |   1 → 0 | `addAll(Collection)` | `java.util.ArrayList` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1`)

|  Change |      Delta |             % |          Size | Samples | Caller                                                      | Location                                                  |
| ------: | ---------: | ------------: | ------------: | ------: | ----------------------------------------------------------- | --------------------------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$ValueParameter$1` |

##### `create()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2`)

| Change |      Delta |      % |            Size | Samples | Caller     | Location                                                  |
| -----: | ---------: | -----: | --------------: | ------: | ---------- | --------------------------------------------------------- |
| -60.0% | -1.499 MiB | 100.0% | 2.5 MiB → 1 MiB |   5 → 2 | `create()` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure$2` |

##### `resize()` (`java.util.HashMap`)

| Change |      Delta |      % |            Size | Samples | Caller                                          | Location            |
| -----: | ---------: | -----: | --------------: | ------: | ----------------------------------------------- | ------------------- |
| -21.4% | -1.499 MiB | 100.0% | 7 MiB → 5.5 MiB | 14 → 11 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `listIterator(int)` (`kotlin.collections.builders.ListBuilder`)

|  Change |      Delta |             % |          Size | Samples | Caller       | Location                                  |
| ------: | ---------: | ------------: | ------------: | ------: | ------------ | ----------------------------------------- |
| removed | -1.499 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B |   3 → 0 | `iterator()` | `kotlin.collections.builders.ListBuilder` |

##### `newExtensionWriter()` (`org.jetbrains.kotlin.protobuf.GeneratedMessageLite$ExtendableMessage`)

|  Change |          Delta |            % |          Size | Samples | Caller                       | Location                                               |
| ------: | -------------: | -----------: | ------------: | ------: | ---------------------------- | ------------------------------------------------------ |
| removed | -1,023.998 KiB | 66.7% → 0.0% |   1 MiB → 0 B |   2 → 0 | `writeTo(CodedOutputStream)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`          |
| removed |   -511.999 KiB | 33.3% → 0.0% | 512 KiB → 0 B |   1 → 0 | `writeTo(CodedOutputStream)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter` |

##### `unmodifiableList(List)` (`java.util.Collections`)

|  Change |        Delta |            % |          Size | Samples | Caller                                            | Location                                                      |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------- | ------------------------------------------------------------- |
| removed | -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function` |
| removed | -511.999 KiB | 25.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Class`                |

##### `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` (`java.lang.invoke.LambdaMetafactory`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                                 | Location                                             |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001234000` |

##### `initClassName()` (`java.lang.Class`)

| Change |          Delta |      % |              Size | Samples | Caller      | Location          |
| -----: | -------------: | -----: | ----------------: | ------: | ----------- | ----------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `getName()` | `java.lang.Class` |

##### `<init>(int)` (`java.lang.AbstractStringBuilder`)

|  Change |          Delta |            % |        Size | Samples | Caller        | Location                  |
| ------: | -------------: | -----------: | ----------: | ------: | ------------- | ------------------------- |
| removed | -1,023.998 KiB | 20.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `<init>(int)` | `java.lang.StringBuilder` |

##### `addConstantUtf8(String)` (`jdk.internal.org.objectweb.asm.SymbolTable`)

|  Change |          Delta |            % |            Size | Samples | Caller                                                            | Location                                      |
| ------: | -------------: | -----------: | --------------: | ------: | ----------------------------------------------------------------- | --------------------------------------------- |
| removed | -1,023.998 KiB | 50.0% → 0.0% |     1 MiB → 0 B |   2 → 0 | `<init>(SymbolTable, int, String, String, String, String[], int)` | `jdk.internal.org.objectweb.asm.MethodWriter` |
|  -50.0% |   -511.999 KiB |        50.0% | 1 MiB → 512 KiB |   2 → 1 | `addConstantUtf8Reference(int, String)`                           | `jdk.internal.org.objectweb.asm.SymbolTable`  |
|     new |   +511.999 KiB | 0.0% → 50.0% |   0 B → 512 KiB |   0 → 1 | `addConstantNameAndType(String, String)`                          | `jdk.internal.org.objectweb.asm.SymbolTable`  |

##### `listIterator(int)` (`kotlin.collections.ReversedListReadOnly`)

|  Change |          Delta |             % |        Size | Samples | Caller       | Location                                  |
| ------: | -------------: | ------------: | ----------: | ------: | ------------ | ----------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `iterator()` | `kotlin.collections.ReversedListReadOnly` |

##### `builder()` (`kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap`)

| Change |          Delta |      % |          Size | Samples | Caller      | Location                                                                       |
| -----: | -------------: | -----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------ |
| -50.0% | -1,023.998 KiB | 100.0% | 2 MiB → 1 MiB |   4 → 2 | `builder()` | `kotlinx.collections.immutable.implementations.immutableMap.PersistentHashMap` |

##### `mutableListOf(Object[])` (`kotlin.collections.CollectionsKt__CollectionsKt`)

|  Change |        Delta |            % |          Size | Samples | Caller                                                                    | Location                                                                                                 |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `transformTypeRef(FirTypeRef, ResolutionMode)`                            | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirAbstractBodyResolveTransformerDispatcher` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `check(CheckerContext, DiagnosticReporter, FirQualifiedAccessExpression)` | `org.jetbrains.kotlin.fir.analysis.checkers.expression.FirMissingDependencyClassChecker`                 |

##### `toString()` (`org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence`)

|  Change |        Delta |              % |            Size | Samples | Caller                                    | Location                                                     |
| ------: | -----------: | -------------: | --------------: | ------: | ----------------------------------------- | ------------------------------------------------------------ |
|  -50.0% | -511.999 KiB | 66.7% → 100.0% | 1 MiB → 512 KiB |   2 → 1 | `getOrCreateDirectory(CharSequence, Map)` | `org.jetbrains.kotlin.cli.jvm.compiler.jarfs.FastJarHandler` |
| removed | -511.999 KiB |   33.3% → 0.0% |   512 KiB → 0 B |   1 → 0 | `getFileTypeByFileName(CharSequence)`     | `com.intellij.openapi.fileTypes.FileTypeRegistry`            |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                      | Location                                                 |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------- | -------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$TypeParameter$1` |

##### `traverseIds(int)` (`org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl`)

|  Change |        Delta |            % |          Size | Samples | Caller                       | Location                                                         |
| ------: | -----------: | -----------: | ------------: | ------: | ---------------------------- | ---------------------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `isLocalClassName(int)`      | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `getQualifiedClassName(int)` | `org.jetbrains.kotlin.metadata.deserialization.NameResolverImpl` |

##### `ensureCapacity()` (`com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure`)

| Change |        Delta |             % |            Size | Samples | Caller                                                                                    | Location                                                |
| -----: | -----------: | ------------: | --------------: | ------: | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| -75.0% |   -1.499 MiB | 57.1% → 20.0% | 2 MiB → 512 KiB |   4 → 1 | `getChildren(LighterASTNode, Ref)`                                                        | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |
| +33.3% | +511.999 KiB | 42.9% → 80.0% | 1.5 MiB → 2 MiB |   3 → 4 | `insertLeaf(IElementType, PsiBuilderImpl, int, int, boolean, PsiBuilderImpl$StartMarker)` | `com.intellij.lang.impl.PsiBuilderImpl$MyTreeStructure` |

##### `forceCapacity(int[], int, int)` (`it.unimi.dsi.fastutil.ints.IntArrays`)

| Change |          Delta |      % |              Size | Samples | Caller      | Location                                  |
| -----: | -------------: | -----: | ----------------: | ------: | ----------- | ----------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `grow(int)` | `it.unimi.dsi.fastutil.ints.IntArrayList` |

##### `resolveNameByInternalName(String, FileBasedKotlinClass$InnerClassesInfo)` (`org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                             | Location                                                |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------ | ------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `resolveNameByDesc(String, FileBasedKotlinClass$InnerClassesInfo)` | `org.jetbrains.kotlin.load.kotlin.FileBasedKotlinClass` |

##### `loadFunction(ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin)` (`org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                                                                                              | Location                                                         |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `loadFunction$default(FirMemberDeserializer, ProtoBuf$Function, ProtoBuf$Class, FirClassSymbol, FirDeclarationOrigin, int, Object)` | `org.jetbrains.kotlin.fir.deserialization.FirMemberDeserializer` |

##### `addInitialSubtypeConstraint(ConstraintInjector$Context, KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` (`org.jetbrains.kotlin.resolve.calls.inference.components.ConstraintInjector`)

|  Change |          Delta |             % |        Size | Samples | Caller                                                                         | Location                                                                     |
| ------: | -------------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `addSubtypeConstraint(KotlinTypeMarker, KotlinTypeMarker, ConstraintPosition)` | `org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl` |

##### `<init>(ConstraintInjector, TypeSystemInferenceExtensionContext, LanguageVersionSettings, Function2)` (`org.jetbrains.kotlin.resolve.calls.inference.model.NewConstraintSystemImpl`)

|  Change |          Delta |             % |        Size | Samples | Caller                              | Location                                                         |
| ------: | -------------: | ------------: | ----------: | ------: | ----------------------------------- | ---------------------------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `createConstraintSystem(Function2)` | `org.jetbrains.kotlin.fir.resolve.inference.InferenceComponents` |

##### `topLevel(Name)` (`org.jetbrains.kotlin.name.FqNameUnsafe$Companion`)

|  Change |          Delta |             % |        Size | Samples | Caller           | Location                                     |
| ------: | -------------: | ------------: | ----------: | ------: | ---------------- | -------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `topLevel(Name)` | `org.jetbrains.kotlin.name.FqName$Companion` |

##### `simplifyKnownSafeCallPatterns(TemporaryVariablesEliminationTransformer$ControlFlowGraph)` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

| Change |          Delta |      % |              Size | Samples | Caller                          | Location                                                                                           |
| -----: | -------------: | -----: | ----------------: | ------: | ------------------------------- | -------------------------------------------------------------------------------------------------- |
| -66.7% | -1,023.998 KiB | 100.0% | 1.5 MiB → 512 KiB |   3 → 1 | `transform(String, MethodNode)` | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |

##### `visitVarInsn(int, int)` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|  Change |        Delta |            % |          Size | Samples | Caller                   | Location                                           |
| ------: | -----------: | -----------: | ------------: | ------: | ------------------------ | -------------------------------------------------- |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `accept(MethodVisitor)`  | `org.jetbrains.org.objectweb.asm.tree.VarInsnNode` |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `visitVarInsn(int, int)` | `org.jetbrains.org.objectweb.asm.MethodVisitor`    |

##### `<init>(int)` (`org.jetbrains.org.objectweb.asm.ByteVector`)

|  Change |          Delta |             % |        Size | Samples | Caller          | Location                                      |
| ------: | -------------: | ------------: | ----------: | ------: | --------------- | --------------------------------------------- |
| removed | -1,023.998 KiB | 100.0% → 0.0% | 1 MiB → 0 B |   2 → 0 | `toByteArray()` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|    Change |       Delta |             % |                Size |   Samples | Function                                                                                                                                         | Location                                                                                                                                          |
| --------: | ----------: | ------------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| +14100.0% | +70.499 MiB |  0.1% → 11.0% |    512 KiB → 71 MiB |   1 → 142 | `invoke()`                                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000090016b4c80`                         |
|    +11.4% | +18.999 MiB | 24.4% → 28.8% |   166 MiB → 185 MiB | 332 → 370 | `copyOf(byte[], int)`                                                                                                                            | `java.util.Arrays`                                                                                                                                |
|    +10.1% | +15.999 MiB | 23.3% → 27.2% |   159 MiB → 175 MiB | 317 → 349 | `toByteArray()`                                                                                                                                  | `java.io.ByteArrayOutputStream`                                                                                                                   |
|  +2300.0% | +11.499 MiB |   0.1% → 1.9% |    512 KiB → 12 MiB |    1 → 24 | `invoke(Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x0000009001671850`                                                    |
|    +41.3% |  +9.499 MiB |   3.4% → 5.1% |   23 MiB → 32.5 MiB |   46 → 65 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                                                                  |
|   +566.7% |  +8.499 MiB |   0.2% → 1.6% |    1.5 MiB → 10 MiB |    3 → 20 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                                                   |
|   +566.7% |  +8.499 MiB |   0.2% → 1.6% |    1.5 MiB → 10 MiB |    3 → 20 | `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                                               | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                                                   |
|    +33.3% |  +7.999 MiB |   3.5% → 5.0% |     24 MiB → 32 MiB |   48 → 64 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                                                                  |
|    +33.3% |  +7.999 MiB |   3.5% → 5.0% |     24 MiB → 32 MiB |   48 → 64 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`                                                                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                                                                  |
|    +33.3% |  +7.999 MiB |   3.5% → 5.0% |     24 MiB → 32 MiB |   48 → 64 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                      | `org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`                                                                                                |
|    +30.2% |  +7.999 MiB |   3.9% → 5.4% | 26.5 MiB → 34.5 MiB |   53 → 69 | `readPackageDataFrom(byte[], String[])`                                                                                                          | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                                                               |
|   +533.3% |  +7.999 MiB |   0.2% → 1.5% |   1.5 MiB → 9.5 MiB |    3 → 19 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                                                                           |
|    +17.1% |  +6.499 MiB |   5.6% → 6.9% |   38 MiB → 44.5 MiB |   76 → 89 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                  | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                                                                    |
|    +22.8% |  +6.499 MiB |   4.2% → 5.4% |   28.5 MiB → 35 MiB |   57 → 70 | `readPackageDataFrom(String[], String[])`                                                                                                        | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                                                               |
|    +11.0% |  +6.499 MiB |  8.7% → 10.2% | 59.2 MiB → 65.7 MiB | 118 → 131 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                            | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                          |
|    +18.7% |  +6.499 MiB |   5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `invoke(Object, Void)`                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|    +18.7% |  +6.499 MiB |   5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `invoke(Object, Object)`                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|    +18.7% |  +6.499 MiB |   5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `getTopLevelCallableNamesInPackage(FqName)`                                                                                                      | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                                                         |
|    +18.7% |  +6.499 MiB |   5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `computeTopLevelCallableNames(FqName)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`                                                                |
|    +18.7% |  +6.499 MiB |   5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `computeTopLevelCallableNames(FqName)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`                                         |

##### Standard library

|  Change |       Delta |             % |                Size |   Samples | Function                                                                      | Location                                                                 |
| ------: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
|  +11.4% | +18.999 MiB | 24.4% → 28.8% |   166 MiB → 185 MiB | 332 → 370 | `copyOf(byte[], int)`                                                         | `java.util.Arrays`                                                       |
|  +10.1% | +15.999 MiB | 23.3% → 27.2% |   159 MiB → 175 MiB | 317 → 349 | `toByteArray()`                                                               | `java.io.ByteArrayOutputStream`                                          |
|  +14.8% |  +5.999 MiB |   6.0% → 7.2% | 40.5 MiB → 46.5 MiB |   81 → 93 | `clone()`                                                                     | `java.lang.Object`                                                       |
| +116.7% |  +3.499 MiB |   0.4% → 1.0% |     3 MiB → 6.5 MiB |    6 → 13 | `<init>()`                                                                    | `kotlin.collections.builders.SetBuilder`                                 |
|  +66.7% |  +2.999 MiB |   0.7% → 1.2% |   4.5 MiB → 7.5 MiB |    9 → 15 | `createSetBuilder()`                                                          | `kotlin.collections.SetsKt__SetsJVMKt`                                   |
| +100.0% |  +2.999 MiB |   0.4% → 0.9% |       3 MiB → 6 MiB |    6 → 12 | `<init>(int)`                                                                 | `kotlin.collections.builders.MapBuilder`                                 |
| +100.0% |  +2.999 MiB |   0.4% → 0.9% |       3 MiB → 6 MiB |    6 → 12 | `<init>()`                                                                    | `kotlin.collections.builders.MapBuilder`                                 |
|  +21.7% |  +2.499 MiB |   1.7% → 2.2% |   11.5 MiB → 14 MiB |   23 → 28 | `putVal(int, Object, Object, boolean, boolean)`                               | `java.util.HashMap`                                                      |
|  +13.2% |  +2.499 MiB |   2.8% → 3.3% |   19 MiB → 21.5 MiB |   38 → 43 | `getValue()`                                                                  | `kotlin.SafePublicationLazyImpl`                                         |
| +500.0% |  +2.499 MiB |   0.1% → 0.5% |     512 KiB → 3 MiB |     1 → 6 | `generate(MethodType)`                                                        | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |
|  +83.3% |  +2.499 MiB |   0.4% → 0.9% |     3 MiB → 5.5 MiB |    6 → 11 | `newNode(int, Object, Object, HashMap$Node)`                                  | `java.util.LinkedHashMap`                                                |
|  +41.7% |  +2.499 MiB |   0.9% → 1.3% |     6 MiB → 8.5 MiB |   12 → 17 | `add(Object)`                                                                 | `java.util.HashSet`                                                      |
|  +17.4% |  +1.999 MiB |   1.7% → 2.1% | 11.5 MiB → 13.5 MiB |   23 → 27 | `put(Object, Object)`                                                         | `java.util.HashMap`                                                      |
|  +19.0% |  +1.999 MiB |   1.5% → 1.9% | 10.5 MiB → 12.5 MiB |   21 → 25 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives`                                   |
|  +19.0% |  +1.999 MiB |   1.5% → 1.9% | 10.5 MiB → 12.5 MiB |   21 → 25 | `linkCallSite(Object, Object, Object, Object, Object, Object[])`              | `java.lang.invoke.MethodHandleNatives`                                   |
|  +22.2% |  +1.999 MiB |   1.3% → 1.7% |      9 MiB → 11 MiB |   18 → 22 | `invokeStatic(Object, Object, Object, Object, Object, Object, Object)`        | `java.lang.invoke.LambdaForm$DMH.0x0000009001234000`                     |
|  +40.0% |  +1.999 MiB |   0.7% → 1.1% |       5 MiB → 7 MiB |   10 → 14 | `ensureCapacityInternal(int)`                                                 | `java.lang.AbstractStringBuilder`                                        |
|  +50.0% |  +1.999 MiB |   0.6% → 0.9% |       4 MiB → 6 MiB |    8 → 12 | `append(String)`                                                              | `java.lang.AbstractStringBuilder`                                        |
|  +50.0% |  +1.999 MiB |   0.6% → 0.9% |       4 MiB → 6 MiB |    8 → 12 | `append(String)`                                                              | `java.lang.StringBuilder`                                                |
| +200.0% |  +1.999 MiB |   0.1% → 0.5% |       1 MiB → 3 MiB |     2 → 6 | `addAll(Collection)`                                                          | `java.util.AbstractCollection`                                           |

##### Ours

|    Change |       Delta |            % |                Size |   Samples | Function                                                                                                                                         | Location                                                                                                                                          |
| --------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| +14100.0% | +70.499 MiB | 0.1% → 11.0% |    512 KiB → 71 MiB |   1 → 142 | `invoke()`                                                                                                                                       | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000090016b4c80`                         |
|  +2300.0% | +11.499 MiB |  0.1% → 1.9% |    512 KiB → 12 MiB |    1 → 24 | `invoke(Object)`                                                                                                                                 | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x0000009001671850`                                                    |
|    +41.3% |  +9.499 MiB |  3.4% → 5.1% |   23 MiB → 32.5 MiB |   46 → 65 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                  | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                                                                  |
|   +566.7% |  +8.499 MiB |  0.2% → 1.6% |    1.5 MiB → 10 MiB |    3 → 20 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                                                   |
|   +566.7% |  +8.499 MiB |  0.2% → 1.6% |    1.5 MiB → 10 MiB |    3 → 20 | `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                                               | `org.jetbrains.kotlin.types.AbstractTypeMapper`                                                                                                   |
|    +33.3% |  +7.999 MiB |  3.5% → 5.0% |     24 MiB → 32 MiB |   48 → 64 | `<init>(CodedInputStream, ExtensionRegistryLite)`                                                                                                | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                                                                  |
|    +33.3% |  +7.999 MiB |  3.5% → 5.0% |     24 MiB → 32 MiB |   48 → 64 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)`                                                                                    | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                                                                                                  |
|    +33.3% |  +7.999 MiB |  3.5% → 5.0% |     24 MiB → 32 MiB |   48 → 64 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`                                                                                      | `org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`                                                                                                |
|    +30.2% |  +7.999 MiB |  3.9% → 5.4% | 26.5 MiB → 34.5 MiB |   53 → 69 | `readPackageDataFrom(byte[], String[])`                                                                                                          | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                                                               |
|   +533.3% |  +7.999 MiB |  0.2% → 1.5% |   1.5 MiB → 9.5 MiB |    3 → 19 | `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                                                                                           |
|    +17.1% |  +6.499 MiB |  5.6% → 6.9% |   38 MiB → 44.5 MiB |   76 → 89 | `parseFrom(InputStream, ExtensionRegistryLite)`                                                                                                  | `org.jetbrains.kotlin.protobuf.AbstractParser`                                                                                                    |
|    +22.8% |  +6.499 MiB |  4.2% → 5.4% |   28.5 MiB → 35 MiB |   57 → 70 | `readPackageDataFrom(String[], String[])`                                                                                                        | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`                                                                               |
|    +11.0% |  +6.499 MiB | 8.7% → 10.2% | 59.2 MiB → 65.7 MiB | 118 → 131 | `transformSingle(FirElement, FirTransformer, Object)`                                                                                            | `org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`                                                                                          |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `invoke(Object, Void)`                                                                                                                           | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `invoke(Object, Object)`                                                                                                                         | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `getTopLevelCallableNamesInPackage(FqName)`                                                                                                      | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`                                                                         |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `computeTopLevelCallableNames(FqName)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`                                                                |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `computeTopLevelCallableNames(FqName)`                                                                                                           | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`                                         |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `mayHaveTopLevelCallable(FqName, Name)`                                                                                                          | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`                                                                               |
|    +18.7% |  +6.499 MiB |  5.1% → 6.4% | 34.7 MiB → 41.2 MiB |   69 → 82 | `getTopLevelPropertySymbolsTo(List, FqName, Name)`                                                                                               | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`                                                               |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

| Change |       Delta |             % |              Size |       Samples | Function                                                                                           | Location                                                                                                                  |
| -----: | ----------: | ------------: | ----------------: | ------------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| -98.6% | -71.499 MiB |  10.7% → 0.2% |  72.5 MiB → 1 MiB |       145 → 2 | `invoke()`                                                                                         | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000090016adaa8` |
| -22.7% | -44.313 MiB | 28.7% → 23.5% | 195 MiB → 151 MiB |     391 → 302 | `<init>(int)`                                                                                      | `java.io.ByteArrayOutputStream`                                                                                           |
|  -5.6% | -38.313 MiB | 99.9% → 99.8% | 680 MiB → 641 MiB | 1,353 → 1,276 | `run(String[])`                                                                                    | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
|  -5.6% | -38.313 MiB | 99.9% → 99.8% | 680 MiB → 641 MiB | 1,353 → 1,276 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
|  -7.9% | -28.813 MiB | 53.7% → 52.3% | 365 MiB → 336 MiB |     730 → 672 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                            | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|  -7.8% | -28.313 MiB | 53.7% → 52.4% | 365 MiB → 337 MiB |     730 → 673 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
| -84.6% | -10.999 MiB |   1.9% → 0.3% |    13 MiB → 2 MiB |        26 → 4 | `invoke(Object)`                                                                                   | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x0000009001671a88`                            |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `main(String[])`                                                                                   | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `invokeStatic(Object, Object)`                                                                     | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400`                                                                      |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `invoke(Object, Object, Object)`                                                                   | `java.lang.invoke.LambdaForm$MH.0x0000009001009800`                                                                       |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `invokeExact_MT(Object, Object, Object, Object)`                                                   | `java.lang.invoke.Invokers$Holder`                                                                                        |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `invokeImpl(Object, Object[])`                                                                     | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                                         |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `invoke(Object, Object[])`                                                                         | `jdk.internal.reflect.DirectMethodHandleAccessor`                                                                         |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `invoke(Object, Object[])`                                                                         | `java.lang.reflect.Method`                                                                                                |
|  -3.1% |  -9.499 MiB | 45.6% → 46.8% | 310 MiB → 301 MiB |     620 → 601 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|  -3.1% |  -9.499 MiB | 45.6% → 46.8% | 310 MiB → 301 MiB |     620 → 601 | `doMain(CLICompiler, String[])`                                                                    | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|  -2.9% |  -8.999 MiB | 45.5% → 46.8% | 310 MiB → 301 MiB |     619 → 601 | `exec(PrintStream, Services, MessageRenderer, String[])`                                           | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|  -2.9% |  -8.999 MiB | 45.5% → 46.8% | 310 MiB → 301 MiB |     619 → 601 | `exec(PrintStream, MessageRenderer, String[])`                                                     | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|  -2.9% |  -8.999 MiB | 45.5% → 46.8% | 310 MiB → 301 MiB |     619 → 601 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |

##### Standard library

| Change |       Delta |             % |                Size |   Samples | Function                                                                      | Location                                             |
| -----: | ----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| -22.7% | -44.313 MiB | 28.7% → 23.5% |   195 MiB → 151 MiB | 391 → 302 | `<init>(int)`                                                                 | `java.io.ByteArrayOutputStream`                      |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% |   314 MiB → 304 MiB | 623 → 603 | `invokeStatic(Object, Object)`                                                | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% |   314 MiB → 304 MiB | 623 → 603 | `invoke(Object, Object, Object)`                                              | `java.lang.invoke.LambdaForm$MH.0x0000009001009800`  |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% |   314 MiB → 304 MiB | 623 → 603 | `invokeExact_MT(Object, Object, Object, Object)`                              | `java.lang.invoke.Invokers$Holder`                   |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% |   314 MiB → 304 MiB | 623 → 603 | `invokeImpl(Object, Object[])`                                                | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% |   314 MiB → 304 MiB | 623 → 603 | `invoke(Object, Object[])`                                                    | `jdk.internal.reflect.DirectMethodHandleAccessor`    |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% |   314 MiB → 304 MiB | 623 → 603 | `invoke(Object, Object[])`                                                    | `java.lang.reflect.Method`                           |
| -28.6% |  -4.999 MiB |   2.6% → 1.9% | 17.5 MiB → 12.5 MiB |   35 → 25 | `iterator()`                                                                  | `java.util.ArrayList`                                |
| -24.3% |  -4.499 MiB |   2.7% → 2.2% |   18.5 MiB → 14 MiB |   37 → 28 | `copyOfRange(byte[], int, int)`                                               | `java.util.Arrays`                                   |
| -42.9% |  -4.499 MiB |   1.5% → 0.9% |    10.5 MiB → 6 MiB |   21 → 12 | `newString(byte[], int, int)`                                                 | `java.lang.StringLatin1`                             |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)` | `jdk.internal.jimage.ImageReader$SharedImageReader`  |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `handleModulesSubTree(String, ImageLocation)`                                 | `jdk.internal.jimage.ImageReader$SharedImageReader`  |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `buildNode(String)`                                                           | `jdk.internal.jimage.ImageReader$SharedImageReader`  |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `findNode(String)`                                                            | `jdk.internal.jimage.ImageReader$SharedImageReader`  |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `findNode(String)`                                                            | `jdk.internal.jimage.ImageReader`                    |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `findNode(String)`                                                            | `jdk.internal.jrtfs.SystemImage$1`                   |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `lookup(String)`                                                              | `jdk.internal.jrtfs.JrtFileSystem`                   |
| -66.7% |  -3.999 MiB |   0.9% → 0.3% |       6 MiB → 2 MiB |    12 → 4 | `checkNode(JrtPath)`                                                          | `jdk.internal.jrtfs.JrtFileSystem`                   |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `isDirectory(JrtPath, boolean)`                                               | `jdk.internal.jrtfs.JrtFileSystem`                   |
| -72.7% |  -3.999 MiB |   0.8% → 0.2% |   5.5 MiB → 1.5 MiB |    11 → 3 | `<init>(JrtPath, DirectoryStream$Filter)`                                     | `jdk.internal.jrtfs.JrtDirectoryStream`              |

##### Ours

| Change |       Delta |             % |              Size |       Samples | Function                                                                                                                                      | Location                                                                                                                  |
| -----: | ----------: | ------------: | ----------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| -98.6% | -71.499 MiB |  10.7% → 0.2% |  72.5 MiB → 1 MiB |       145 → 2 | `invoke()`                                                                                                                                    | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000090016adaa8` |
|  -5.6% | -38.313 MiB | 99.9% → 99.8% | 680 MiB → 641 MiB | 1,353 → 1,276 | `run(String[])`                                                                                                                               | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
|  -5.6% | -38.313 MiB | 99.9% → 99.8% | 680 MiB → 641 MiB | 1,353 → 1,276 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.preloading.Preloader`                                                                               |
|  -7.9% | -28.813 MiB | 53.7% → 52.3% | 365 MiB → 336 MiB |     730 → 672 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                                                                                       | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
|  -7.8% | -28.313 MiB | 53.7% → 52.4% | 365 MiB → 337 MiB |     730 → 673 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)`                                                                  | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils`                                                                    |
| -84.6% | -10.999 MiB |   1.9% → 0.3% |    13 MiB → 2 MiB |        26 → 4 | `invoke(Object)`                                                                                                                              | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x0000009001671a88`                            |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`                                                                    |
|  -3.2% |  -9.999 MiB | 46.2% → 47.4% | 314 MiB → 304 MiB |     623 → 603 | `main(String[])`                                                                                                                              | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|  -3.1% |  -9.499 MiB | 45.6% → 46.8% | 310 MiB → 301 MiB |     620 → 601 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)`                                            | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|  -3.1% |  -9.499 MiB | 45.6% → 46.8% | 310 MiB → 301 MiB |     620 → 601 | `doMain(CLICompiler, String[])`                                                                                                               | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|  -2.9% |  -8.999 MiB | 45.5% → 46.8% | 310 MiB → 301 MiB |     619 → 601 | `exec(PrintStream, Services, MessageRenderer, String[])`                                                                                      | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|  -2.9% |  -8.999 MiB | 45.5% → 46.8% | 310 MiB → 301 MiB |     619 → 601 | `exec(PrintStream, MessageRenderer, String[])`                                                                                                | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|  -2.9% |  -8.999 MiB | 45.5% → 46.8% | 310 MiB → 301 MiB |     619 → 601 | `doMainNoExit(CLICompiler, String[], MessageRenderer)`                                                                                        | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion`                                                                   |
|  -2.8% |  -8.499 MiB | 45.1% → 46.4% | 307 MiB → 298 MiB |     613 → 596 | `exec(MessageCollector, Services, CommonCompilerArguments)`                                                                                   | `org.jetbrains.kotlin.cli.common.CLICompiler`                                                                             |
|  -2.8% |  -8.499 MiB | 44.6% → 45.8% | 303 MiB → 295 MiB |     606 → 589 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|  -2.8% |  -8.499 MiB | 44.6% → 45.8% | 303 MiB → 295 MiB |     606 → 589 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                           | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|  -2.8% |  -8.499 MiB | 44.6% → 45.8% | 303 MiB → 295 MiB |     606 → 589 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|  -2.8% |  -8.499 MiB | 44.6% → 45.8% | 303 MiB → 295 MiB |     606 → 589 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                                                                   |
|  -2.8% |  -8.499 MiB | 44.6% → 45.8% | 303 MiB → 295 MiB |     606 → 589 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |
|  -2.8% |  -8.499 MiB | 44.6% → 45.8% | 303 MiB → 295 MiB |     606 → 589 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)`                                                                        | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                                                              |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000090016b4c80`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                                       | Location                                                                                       |
| ------: | -----------: | ------------: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
|     new |  +70.999 MiB | 0.0% → 100.0% |  0 B → 71 MiB | 0 → 142 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)`          | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `transformAccessor$lambda$0$0(FirProperty, FirPropertyAccessor, FirDeclarationsResolveTransformer, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `copyOf(byte[], int)` (`java.util.Arrays`)

| Change |      Delta |             % |              Size | Samples | Callee    | Location           |
| -----: | ---------: | ------------: | ----------------: | ------: | --------- | ------------------ |
| +16.5% | +6.499 MiB | 23.8% → 24.8% | 39.5 MiB → 46 MiB | 79 → 92 | `clone()` | `java.lang.Object` |

##### `toByteArray()` (`java.io.ByteArrayOutputStream`)

| Change |       Delta |      % |              Size |   Samples | Callee                | Location           |
| -----: | ----------: | -----: | ----------------: | --------: | --------------------- | ------------------ |
| +10.1% | +15.999 MiB | 100.0% | 159 MiB → 175 MiB | 317 → 349 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x0000009001671850`)

|  Change |        Delta |             % |          Size | Samples | Callee                                                                                                                                                | Location                                                            |
| ------: | -----------: | ------------: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|     new |  +11.999 MiB | 0.0% → 100.0% |  0 B → 12 MiB |  0 → 24 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |
| removed | -511.999 KiB | 100.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`)

| Change |      Delta |      % |              Size | Samples | Callee                                          | Location                                       |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------- | ---------------------------------------------- |
| +41.3% | +9.499 MiB | 100.0% | 23 MiB → 32.5 MiB | 46 → 65 | `parseFrom(InputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.AbstractParser` |

##### `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

|  Change |          Delta |             % |              Size | Samples | Callee                                                                                                                                                                      | Location                                                                      |
| ------: | -------------: | ------------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| +550.0% |     +5.499 MiB | 66.7% → 65.0% |   1 MiB → 6.5 MiB |  2 → 13 | `mapBuiltInType(TypeSystemCommonBackendContext, KotlinTypeMarker, JvmTypeFactory, TypeMappingMode)`                                                                         | `org.jetbrains.kotlin.load.kotlin.TypeSignatureMappingKt`                     |
| +800.0% |     +3.999 MiB | 33.3% → 45.0% | 512 KiB → 4.5 MiB |   1 → 9 | `mapClassType(TypeSystemCommonBackendContextForTypeMapping, TypeConstructorMarker, TypeMappingMode, RigidTypeMarker, TypeMappingContext, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper`                               |
|     new |     +1.499 MiB |  0.0% → 15.0% |     0 B → 1.5 MiB |   0 → 3 | `writeGenericType(JvmDescriptorTypeWriter, KotlinTypeMarker, Type, TypeMappingMode)`                                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`                       |
|     new | +1,023.998 KiB |  0.0% → 10.0% |       0 B → 1 MiB |   0 → 2 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)`                            | `org.jetbrains.kotlin.types.AbstractTypeMapper`                               |
|     new |   +511.999 KiB |   0.0% → 5.0% |     0 B → 512 KiB |   0 → 1 | `representativeUpperBound(TypeParameterMarker)`                                                                                                                             | `org.jetbrains.kotlin.backend.jvm.mapping.IrTypeCheckerContextForTypeMapping` |

##### `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` (`org.jetbrains.kotlin.types.AbstractTypeMapper`)

|  Change |      Delta |      % |             Size | Samples | Callee                                                                                                                                           | Location                                        |
| ------: | ---------: | -----: | ---------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| +566.7% | +8.499 MiB | 100.0% | 1.5 MiB → 10 MiB |  3 → 20 | `mapType(TypeSystemCommonBackendContextForTypeMapping, TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper` |

##### `<init>(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`)

| Change |          Delta |              % |            Size | Samples | Callee                                       | Location                                         |
| -----: | -------------: | -------------: | --------------: | ------: | -------------------------------------------- | ------------------------------------------------ |
| +29.2% |     +6.999 MiB | 100.0% → 96.9% | 24 MiB → 31 MiB | 48 → 62 | `readMessage(Parser, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.CodedInputStream` |
|    new | +1,023.998 KiB |    0.0% → 3.1% |     0 B → 1 MiB |   0 → 2 | `add(Object)`                                | `java.util.ArrayList`                            |

##### `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package`)

| Change |      Delta |      % |            Size | Samples | Callee                                            | Location                                         |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------------ |
| +33.3% | +7.999 MiB | 100.0% | 24 MiB → 32 MiB | 48 → 64 | `<init>(CodedInputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Package` |

##### `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.metadata.ProtoBuf$Package$1`)

| Change |      Delta |      % |            Size | Samples | Callee                                                        | Location                                           |
| -----: | ---------: | -----: | --------------: | ------: | ------------------------------------------------------------- | -------------------------------------------------- |
| +33.3% | +7.999 MiB | 100.0% | 24 MiB → 32 MiB | 48 → 64 | `<init>(CodedInputStream, ExtensionRegistryLite, ProtoBuf$1)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`   |
| +33.3% | +7.999 MiB | 100.0% | 24 MiB → 32 MiB | 48 → 64 | `parsePartialFrom(CodedInputStream, ExtensionRegistryLite)`   | `org.jetbrains.kotlin.metadata.ProtoBuf$Package$1` |

##### `readPackageDataFrom(byte[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`)

| Change |      Delta |             % |              Size | Samples | Callee                                          | Location                                                            |
| -----: | ---------: | ------------: | ----------------: | ------: | ----------------------------------------------- | ------------------------------------------------------------------- |
| +41.3% | +9.499 MiB | 86.8% → 94.2% | 23 MiB → 32.5 MiB | 46 → 65 | `parseFrom(InputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.metadata.ProtoBuf$Package`                    |
| -42.9% | -1.499 MiB |  13.2% → 5.8% |   3.5 MiB → 2 MiB |   7 → 4 | `readNameResolver(InputStream, String[])`       | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |

##### `mapType(IrType, TypeMappingMode, JvmSignatureWriter, boolean)` (`org.jetbrains.kotlin.backend.jvm.mapping.IrTypeMapper`)

|  Change |      Delta |      % |              Size | Samples | Callee                                                                                             | Location                                        |
| ------: | ---------: | -----: | ----------------: | ------: | -------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| +533.3% | +7.999 MiB | 100.0% | 1.5 MiB → 9.5 MiB |  3 → 19 | `mapType(TypeMappingContext, KotlinTypeMarker, TypeMappingMode, JvmDescriptorTypeWriter, boolean)` | `org.jetbrains.kotlin.types.AbstractTypeMapper` |

##### `parseFrom(InputStream, ExtensionRegistryLite)` (`org.jetbrains.kotlin.protobuf.AbstractParser`)

| Change |      Delta |      % |              Size | Samples | Callee                                                 | Location                                       |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------------------------------ | ---------------------------------------------- |
| +17.1% | +6.499 MiB | 100.0% | 38 MiB → 44.5 MiB | 76 → 89 | `parsePartialFrom(InputStream, ExtensionRegistryLite)` | `org.jetbrains.kotlin.protobuf.AbstractParser` |
| +17.1% | +6.499 MiB | 100.0% | 38 MiB → 44.5 MiB | 76 → 89 | `parseFrom(InputStream, ExtensionRegistryLite)`        | `org.jetbrains.kotlin.protobuf.AbstractParser` |

##### `readPackageDataFrom(String[], String[])` (`org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil`)

| Change |      Delta |             % |                Size | Samples | Callee                                  | Location                                                            |
| -----: | ---------: | ------------: | ------------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +30.2% | +7.999 MiB | 93.0% → 98.6% | 26.5 MiB → 34.5 MiB | 53 → 69 | `readPackageDataFrom(byte[], String[])` | `org.jetbrains.kotlin.metadata.jvm.deserialization.JvmProtoBufUtil` |
| -75.0% | -1.499 MiB |   7.0% → 1.4% |     2 MiB → 512 KiB |   4 → 1 | `decodeBytes(String[])`                 | `org.jetbrains.kotlin.metadata.jvm.deserialization.BitEncoding`     |

##### `transformSingle(FirElement, FirTransformer, Object)` (`org.jetbrains.kotlin.fir.visitors.FirTransformerUtilKt`)

| Change |          Delta |             % |                Size | Samples | Callee                              | Location                                                  |
| -----: | -------------: | ------------: | ------------------: | ------: | ----------------------------------- | --------------------------------------------------------- |
| +11.9% |     +4.499 MiB | 63.7% → 64.2% | 37.7 MiB → 42.2 MiB | 75 → 84 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirFile`           |
| -66.7% |     -1.999 MiB |   5.1% → 1.5% |       3 MiB → 1 MiB |   6 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirProperty`       |
| -37.5% |     -1.499 MiB |   6.8% → 3.8% |     4 MiB → 2.5 MiB |   8 → 5 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.declarations.FirRegularClass`   |
|  +9.4% |     +1.499 MiB | 27.0% → 26.6% |   16 MiB → 17.5 MiB | 32 → 35 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirFunctionCall`    |
|    new | +1,023.998 KiB |   0.0% → 1.5% |         0 B → 1 MiB |   0 → 2 | `transform(FirTransformer, Object)` | `org.jetbrains.kotlin.fir.expressions.FirThrowExpression` |

##### `invoke(Object, Void)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`)

| Change |      Delta |              % |                Size | Samples | Callee                                 | Location                                                                                                  |
| -----: | ---------: | -------------: | ------------------: | ------: | -------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| +18.7% | +6.499 MiB |         100.0% | 34.7 MiB → 41.2 MiB | 69 → 82 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1` |
| +17.3% | +5.999 MiB | 100.0% → 98.8% | 34.7 MiB → 40.7 MiB | 69 → 81 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$symbolNamesProvider$1`    |

##### `invoke(Object, Object)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1`)

| Change |      Delta |      % |                Size | Samples | Callee                 | Location                                                                                                                                          |
| -----: | ---------: | -----: | ------------------: | ------: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| +18.7% | +6.499 MiB | 100.0% | 34.7 MiB → 41.2 MiB | 69 → 82 | `invoke(Object, Void)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider$topLevelCallableNamesByPackage_delegate$lambda$0$$inlined$createCache$1` |

##### `getTopLevelCallableNamesInPackage(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider`)

| Change |      Delta |      % |                Size | Samples | Callee                     | Location                                               |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------- | ------------------------------------------------------ |
| +18.7% | +6.499 MiB | 100.0% | 34.7 MiB → 41.2 MiB | 69 → 82 | `getValue(Object, Object)` | `org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache` |

##### `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider`)

| Change |        Delta |              % |                Size | Samples | Callee                                      | Location                                                                  |
| -----: | -----------: | -------------: | ------------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------- |
| +17.3% |   +5.999 MiB | 100.0% → 98.8% | 34.7 MiB → 40.7 MiB | 69 → 81 | `getTopLevelCallableNamesInPackage(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider` |
|    new | +511.999 KiB |    0.0% → 1.2% |       0 B → 512 KiB |   0 → 1 | `addAll(Collection, Iterable)`              | `kotlin.collections.CollectionsKt__MutableCollectionsKt`                  |

##### `computeTopLevelCallableNames(FqName)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider$symbolNamesProvider$1`)

| Change |      Delta |      % |                Size | Samples | Callee                                 | Location                                                                           |
| -----: | ---------: | -----: | ------------------: | ------: | -------------------------------------- | ---------------------------------------------------------------------------------- |
| +18.7% | +6.499 MiB | 100.0% | 34.7 MiB → 41.2 MiB | 69 → 82 | `computeTopLevelCallableNames(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCompositeCachedSymbolNamesProvider` |

##### `<init>()` (`kotlin.collections.builders.SetBuilder`)

|  Change |      Delta |             % |              Size | Samples | Callee     | Location                                 |
| ------: | ---------: | ------------: | ----------------: | ------: | ---------- | ---------------------------------------- |
| +120.0% | +2.999 MiB | 83.3% → 84.6% | 2.5 MiB → 5.5 MiB |  5 → 11 | `<init>()` | `kotlin.collections.builders.MapBuilder` |

##### `createSetBuilder()` (`kotlin.collections.SetsKt__SetsJVMKt`)

|  Change |      Delta |             % |            Size | Samples | Callee     | Location                                 |
| ------: | ---------: | ------------: | --------------: | ------: | ---------- | ---------------------------------------- |
| +116.7% | +3.499 MiB | 66.7% → 86.7% | 3 MiB → 6.5 MiB |  6 → 13 | `<init>()` | `kotlin.collections.builders.SetBuilder` |

##### `<init>(int)` (`kotlin.collections.builders.MapBuilder`)

| Change |      Delta |            % |        Size | Samples | Callee                              | Location                                    |
| -----: | ---------: | -----------: | ----------: | ------: | ----------------------------------- | ------------------------------------------- |
|    new | +1.999 MiB | 0.0% → 33.3% | 0 B → 2 MiB |   0 → 4 | `arrayOfUninitializedElements(int)` | `kotlin.collections.builders.ListBuilderKt` |

##### `<init>()` (`kotlin.collections.builders.MapBuilder`)

|  Change |      Delta |      % |          Size | Samples | Callee        | Location                                 |
| ------: | ---------: | -----: | ------------: | ------: | ------------- | ---------------------------------------- |
| +100.0% | +2.999 MiB | 100.0% | 3 MiB → 6 MiB |  6 → 12 | `<init>(int)` | `kotlin.collections.builders.MapBuilder` |

##### `putVal(int, Object, Object, boolean, boolean)` (`java.util.HashMap`)

|  Change |      Delta |             % |            Size | Samples | Callee                                       | Location                  |
| ------: | ---------: | ------------: | --------------: | ------: | -------------------------------------------- | ------------------------- |
|  +83.3% | +2.499 MiB | 26.1% → 39.3% | 3 MiB → 5.5 MiB |  6 → 11 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.LinkedHashMap` |
| +100.0% | +1.499 MiB | 13.0% → 21.4% | 1.5 MiB → 3 MiB |   3 → 6 | `newNode(int, Object, Object, HashMap$Node)` | `java.util.HashMap`       |
|  -21.4% | -1.499 MiB | 60.9% → 39.3% | 7 MiB → 5.5 MiB | 14 → 11 | `resize()`                                   | `java.util.HashMap`       |

##### `getValue()` (`kotlin.SafePublicationLazyImpl`)

|  Change |          Delta |             % |              Size | Samples | Callee     | Location                                                                                                   |
| ------: | -------------: | ------------: | ----------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
|  +11.1% |     +1.499 MiB | 71.1% → 69.8% | 13.5 MiB → 15 MiB | 27 → 30 | `invoke()` | `org.jetbrains.kotlin.fir.java.deserialization.JvmBinaryAnnotationDeserializer$$Lambda.0x00000090015d74a0` |
|     new |     +1.499 MiB |   0.0% → 7.0% |     0 B → 1.5 MiB |   0 → 3 | `invoke()` | `org.jetbrains.kotlin.fir.java.FirLazyJavaDeclarationList$$Lambda.0x000000900160f098`                      |
| +200.0% | +1,023.998 KiB |   2.6% → 7.0% | 512 KiB → 1.5 MiB |   1 → 3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.FirClassDeclaredMemberScopeImpl$$Lambda.0x000000900162bd38`          |
| +200.0% | +1,023.998 KiB |   2.6% → 7.0% | 512 KiB → 1.5 MiB |   1 → 3 | `invoke()` | `org.jetbrains.kotlin.fir.scopes.impl.AbstractFirUseSiteMemberScope$$Lambda.0x0000009001633a30`            |
| removed |   -511.999 KiB |   2.6% → 0.0% |     512 KiB → 0 B |   1 → 0 | `invoke()` | `org.jetbrains.kotlin.fir.resolve.calls.ImplicitReceiverValue$$Lambda.0x00000070016d1390`                  |

##### `generate(MethodType)` (`java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator`)

| Change |          Delta |            % |          Size | Samples | Callee                                                  | Location                                                                 |
| -----: | -------------: | -----------: | ------------: | ------: | ------------------------------------------------------- | ------------------------------------------------------------------------ |
|    new |     +1.499 MiB | 0.0% → 50.0% | 0 B → 1.5 MiB |   0 → 3 | `visitMethodInsn(int, String, String, String, boolean)` | `jdk.internal.org.objectweb.asm.MethodVisitor`                           |
|    new | +1,023.998 KiB | 0.0% → 33.3% |   0 B → 1 MiB |   0 → 2 | `convertArgumentTypes(MethodType)`                      | `java.lang.invoke.InnerClassLambdaMetafactory$ForwardingMethodGenerator` |

##### `add(Object)` (`java.util.HashSet`)

| Change |      Delta |      % |            Size | Samples | Callee                | Location            |
| -----: | ---------: | -----: | --------------: | ------: | --------------------- | ------------------- |
| +41.7% | +2.499 MiB | 100.0% | 6 MiB → 8.5 MiB | 12 → 17 | `put(Object, Object)` | `java.util.HashMap` |

##### `put(Object, Object)` (`java.util.HashMap`)

| Change |      Delta |      % |                Size | Samples | Callee                                          | Location            |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------- | ------------------- |
| +17.4% | +1.999 MiB | 100.0% | 11.5 MiB → 13.5 MiB | 23 → 27 | `putVal(int, Object, Object, boolean, boolean)` | `java.util.HashMap` |

##### `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

|  Change |        Delta |             % |              Size | Samples | Callee                                                      | Location                    |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------------------------------- | --------------------------- |
|  +15.0% |   +1.499 MiB | 95.2% → 92.0% | 10 MiB → 11.5 MiB | 20 → 23 | `makeSite(MethodHandle, String, MethodType, Object, Class)` | `java.lang.invoke.CallSite` |
| +100.0% | +511.999 KiB |   4.8% → 8.0% |   512 KiB → 1 MiB |   1 → 2 | `linkToTargetMethod(MethodType)`                            | `java.lang.invoke.Invokers` |

##### `linkCallSite(Object, Object, Object, Object, Object, Object[])` (`java.lang.invoke.MethodHandleNatives`)

| Change |      Delta |      % |                Size | Samples | Callee                                                                        | Location                               |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------------------------------- | -------------------------------------- |
| +19.0% | +1.999 MiB | 100.0% | 10.5 MiB → 12.5 MiB | 21 → 25 | `linkCallSiteImpl(Class, MethodHandle, String, MethodType, Object, Object[])` | `java.lang.invoke.MethodHandleNatives` |

##### `invokeStatic(Object, Object, Object, Object, Object, Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001234000`)

| Change |      Delta |      % |           Size | Samples | Callee                                                                                        | Location                             |
| -----: | ---------: | -----: | -------------: | ------: | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| +22.2% | +1.999 MiB | 100.0% | 9 MiB → 11 MiB | 18 → 22 | `metafactory(MethodHandles$Lookup, String, MethodType, MethodType, MethodHandle, MethodType)` | `java.lang.invoke.LambdaMetafactory` |

##### `ensureCapacityInternal(int)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |      % |          Size | Samples | Callee                | Location           |
| -----: | ---------: | -----: | ------------: | ------: | --------------------- | ------------------ |
| +40.0% | +1.999 MiB | 100.0% | 5 MiB → 7 MiB | 10 → 14 | `copyOf(byte[], int)` | `java.util.Arrays` |

##### `append(String)` (`java.lang.AbstractStringBuilder`)

| Change |      Delta |      % |          Size | Samples | Callee                        | Location                          |
| -----: | ---------: | -----: | ------------: | ------: | ----------------------------- | --------------------------------- |
| +50.0% | +1.999 MiB | 100.0% | 4 MiB → 6 MiB |  8 → 12 | `ensureCapacityInternal(int)` | `java.lang.AbstractStringBuilder` |

##### `append(String)` (`java.lang.StringBuilder`)

| Change |          Delta |            % |          Size | Samples | Callee           | Location                          |
| -----: | -------------: | -----------: | ------------: | ------: | ---------------- | --------------------------------- |
| +50.0% |     +1.999 MiB |       100.0% | 4 MiB → 6 MiB |  8 → 12 | `append(String)` | `java.lang.AbstractStringBuilder` |
|    new | +1,023.998 KiB | 0.0% → 16.7% |   0 B → 1 MiB |   0 → 2 | `append(String)` | `java.lang.StringBuilder`         |

##### `addAll(Collection)` (`java.util.AbstractCollection`)

|  Change |        Delta |            % |          Size | Samples | Callee        | Location                                 |
| ------: | -----------: | -----------: | ------------: | ------: | ------------- | ---------------------------------------- |
|     new |   +2.499 MiB | 0.0% → 83.3% | 0 B → 2.5 MiB |   0 → 5 | `add(Object)` | `java.util.HashSet`                      |
| removed | -511.999 KiB | 50.0% → 0.0% | 512 KiB → 0 B |   1 → 0 | `add(Object)` | `kotlin.collections.builders.SetBuilder` |

##### `mayHaveTopLevelCallable(FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider`)

| Change |      Delta |      % |                Size | Samples | Callee                                      | Location                                                                  |
| -----: | ---------: | -----: | ------------------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------- |
| +18.7% | +6.499 MiB | 100.0% | 34.7 MiB → 41.2 MiB | 69 → 82 | `getTopLevelCallableNamesInPackage(FqName)` | `org.jetbrains.kotlin.fir.resolve.providers.FirCachedSymbolNamesProvider` |

##### `getTopLevelPropertySymbolsTo(List, FqName, Name)` (`org.jetbrains.kotlin.fir.resolve.providers.impl.FirCachingCompositeSymbolProvider`)

| Change |      Delta |      % |                Size | Samples | Callee                                  | Location                                                            |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------- | ------------------------------------------------------------------- |
| +18.7% | +6.499 MiB | 100.0% | 34.7 MiB → 41.2 MiB | 69 → 82 | `mayHaveTopLevelCallable(FqName, Name)` | `org.jetbrains.kotlin.fir.resolve.providers.FirSymbolNamesProvider` |

##### `invoke()` (`org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer$$Lambda.0x00000090016adaa8`)

|  Change |          Delta |             % |           Size | Samples | Callee                                                                                              | Location                                                                                       |
| ------: | -------------: | ------------: | -------------: | ------: | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| removed |    -72.499 MiB | 100.0% → 0.0% | 72.5 MiB → 0 B | 145 → 0 | `transformNamedFunction$lambda$0$0$0(FirDeclarationsResolveTransformer, FirNamedFunction, boolean)` | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |
|     new | +1,023.998 KiB | 0.0% → 100.0% |    0 B → 1 MiB |   0 → 2 | `forRegularClassBody$lambda$0(Function0)`                                                           | `org.jetbrains.kotlin.fir.resolve.transformers.body.resolve.FirDeclarationsResolveTransformer` |

##### `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |             % |              Size |   Samples | Callee                                                                       | Location                                               |
| -----: | ----------: | ------------: | ----------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -7.8% | -28.313 MiB | 53.7% → 52.5% | 365 MiB → 337 MiB | 730 → 673 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  -3.2% |  -9.999 MiB | 46.3% → 47.5% | 314 MiB → 304 MiB | 623 → 603 | `invoke(Object, Object[])`                                                   | `java.lang.reflect.Method`                             |

##### `main(String[])` (`org.jetbrains.kotlin.preloading.Preloader`)

| Change |       Delta |      % |              Size |       Samples | Callee          | Location                                    |
| -----: | ----------: | -----: | ----------------: | ------------: | --------------- | ------------------------------------------- |
|  -5.6% | -38.313 MiB | 100.0% | 680 MiB → 641 MiB | 1,353 → 1,276 | `run(String[])` | `org.jetbrains.kotlin.preloading.Preloader` |

##### `loadAllClassesFromJars(Collection, int, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

|  Change |       Delta |             % |              Size |   Samples | Callee                | Location                        |
| ------: | ----------: | ------------: | ----------------: | --------: | --------------------- | ------------------------------- |
|  -22.7% | -44.313 MiB | 53.5% → 44.9% | 195 MiB → 151 MiB | 391 → 302 | `<init>(int)`         | `java.io.ByteArrayOutputStream` |
|  +10.1% | +15.999 MiB | 43.5% → 51.9% | 159 MiB → 175 MiB | 317 → 349 | `toByteArray()`       | `java.io.ByteArrayOutputStream` |
|  -26.3% |  -2.499 MiB |   2.6% → 2.1% |   9.5 MiB → 7 MiB |   19 → 14 | `getNextEntry()`      | `java.util.zip.ZipInputStream`  |
| +400.0% |  +1.999 MiB |   0.1% → 0.7% | 512 KiB → 2.5 MiB |     1 → 5 | `put(Object, Object)` | `java.util.HashMap`             |

##### `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` (`org.jetbrains.kotlin.preloading.ClassPreloadingUtils`)

| Change |        Delta |              % |                Size |   Samples | Callee                                                                       | Location                                               |
| -----: | -----------: | -------------: | ------------------: | --------: | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
|  -7.9% |  -28.813 MiB | 100.0% → 99.9% |   365 MiB → 336 MiB | 730 → 672 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|  +9.1% |   +3.186 MiB |   9.6% → 11.4% | 35.2 MiB → 38.4 MiB |   70 → 76 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |
|    new | +511.999 KiB |    0.0% → 0.1% |       0 B → 512 KiB |     0 → 1 | `mergeClasspathFromManifests(Map)`                                           | `org.jetbrains.kotlin.preloading.ClassPreloadingUtils` |

##### `invoke(Object)` (`org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel$$Lambda.0x0000009001671a88`)

|  Change |       Delta |             % |         Size | Samples | Callee                                                                                                                                                | Location                                                            |
| ------: | ----------: | ------------: | -----------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| removed | -12.999 MiB | 100.0% → 0.0% | 13 MiB → 0 B |  26 → 0 | `processFunctionsByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirCallableSymbol)`  | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |
|     new |  +1.999 MiB | 0.0% → 100.0% |  0 B → 2 MiB |   0 → 4 | `processPropertiesByName$lambda$0(FirLookupTrackerComponent, CallInfo, Ref$BooleanRef, ScopeBasedTowerLevel, TowerLevelProcessor, FirVariableSymbol)` | `org.jetbrains.kotlin.fir.resolve.calls.tower.ScopeBasedTowerLevel` |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`)

| Change |        Delta |             % |                Size |   Samples | Callee                          | Location                                                |
| -----: | -----------: | ------------: | ------------------: | --------: | ------------------------------- | ------------------------------------------------------- |
|  -3.1% |   -9.499 MiB | 98.7% → 98.8% |   310 MiB → 301 MiB | 620 → 601 | `doMain(CLICompiler, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| -11.9% | -511.999 KiB |   1.3% → 1.2% | 4.21 MiB → 3.71 MiB |     3 → 2 | `<init>()`                      | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`            |

##### `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |      Delta |      % |              Size |   Samples | Callee           | Location                                               |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | ------------------------------------------------------ |
|  -3.2% | -9.999 MiB | 100.0% | 314 MiB → 304 MiB | 623 → 603 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion` |

##### `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000009001008400`)

| Change |      Delta |      % |              Size |   Samples | Callee           | Location                                     |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------- | -------------------------------------------- |
|  -3.2% | -9.999 MiB | 100.0% | 314 MiB → 304 MiB | 623 → 603 | `main(String[])` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x0000009001009800`)

| Change |      Delta |      % |              Size |   Samples | Callee                         | Location                                             |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ---------------------------------------------------- |
|  -3.2% | -9.999 MiB | 100.0% | 314 MiB → 304 MiB | 623 → 603 | `invokeStatic(Object, Object)` | `java.lang.invoke.LambdaForm$DMH.0x0000009001008400` |

##### `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`)

| Change |      Delta |      % |              Size |   Samples | Callee                           | Location                                            |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------- | --------------------------------------------------- |
|  -3.2% | -9.999 MiB | 100.0% | 314 MiB → 304 MiB | 623 → 603 | `invoke(Object, Object, Object)` | `java.lang.invoke.LambdaForm$MH.0x0000009001009800` |

##### `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |              Size |   Samples | Callee                                           | Location                           |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------------------------ | ---------------------------------- |
|  -3.2% | -9.999 MiB | 100.0% | 314 MiB → 304 MiB | 623 → 603 | `invokeExact_MT(Object, Object, Object, Object)` | `java.lang.invoke.Invokers$Holder` |

##### `invoke(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`)

| Change |      Delta |      % |              Size |   Samples | Callee                         | Location                                          |
| -----: | ---------: | -----: | ----------------: | --------: | ------------------------------ | ------------------------------------------------- |
|  -3.2% | -9.999 MiB | 100.0% | 314 MiB → 304 MiB | 623 → 603 | `invokeImpl(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |

##### `invoke(Object, Object[])` (`java.lang.reflect.Method`)

| Change |        Delta |           % |              Size |   Samples | Callee                     | Location                                          |
| -----: | -----------: | ----------: | ----------------: | --------: | -------------------------- | ------------------------------------------------- |
|  -3.2% |   -9.999 MiB |      100.0% | 314 MiB → 304 MiB | 623 → 603 | `invoke(Object, Object[])` | `jdk.internal.reflect.DirectMethodHandleAccessor` |
|    new | +511.999 KiB | 0.0% → 0.2% |     0 B → 512 KiB |     0 → 1 | `acquireMethodAccessor()`  | `java.lang.reflect.Method`                        |

##### `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

|  Change |        Delta |              % |              Size |   Samples | Callee                                                 | Location                                                |
| ------: | -----------: | -------------: | ----------------: | --------: | ------------------------------------------------------ | ------------------------------------------------------- |
|   -2.9% |   -8.999 MiB | 99.8% → 100.0% | 310 MiB → 301 MiB | 619 → 601 | `doMainNoExit(CLICompiler, String[], MessageRenderer)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |
| removed | -511.999 KiB |    0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `defaultMessageRenderer()`                             | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `doMain(CLICompiler, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                                                             | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -3.1% | -9.499 MiB | 100.0% | 310 MiB → 301 MiB | 620 → 601 | `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` | `org.jetbrains.kotlin.cli.common.CLICompiler$Companion` |

##### `exec(PrintStream, Services, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

|  Change |        Delta |             % |              Size |   Samples | Callee                                                      | Location                                      |
| ------: | -----------: | ------------: | ----------------: | --------: | ----------------------------------------------------------- | --------------------------------------------- |
|   -2.8% |   -8.499 MiB | 99.0% → 99.2% | 307 MiB → 298 MiB | 613 → 596 | `exec(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |
| removed | -511.999 KiB |   0.2% → 0.0% |     512 KiB → 0 B |     1 → 0 | `createArguments()`                                         | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`  |

##### `exec(PrintStream, MessageRenderer, String[])` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                   | Location                                      |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------- | --------------------------------------------- |
|  -2.9% | -8.999 MiB | 100.0% | 310 MiB → 301 MiB | 619 → 601 | `exec(PrintStream, Services, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`)

| Change |      Delta |      % |              Size |   Samples | Callee                                         | Location                                      |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------- | --------------------------------------------- |
|  -2.9% | -8.999 MiB | 100.0% | 310 MiB → 301 MiB | 619 → 601 | `exec(PrintStream, MessageRenderer, String[])` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `copyOfRange(byte[], int, int)` (`java.util.Arrays`)

|  Change |        Delta |             % |              Size | Samples | Callee                              | Location           |
| ------: | -----------: | ------------: | ----------------: | ------: | ----------------------------------- | ------------------ |
|  -22.6% |   -3.499 MiB | 83.8% → 85.7% | 15.5 MiB → 12 MiB | 31 → 24 | `copyOfRangeByte(byte[], int, int)` | `java.util.Arrays` |
| removed | -511.999 KiB |   2.7% → 0.0% |     512 KiB → 0 B |   1 → 0 | `clone()`                           | `java.lang.Object` |

##### `newString(byte[], int, int)` (`java.lang.StringLatin1`)

| Change |      Delta |             % |            Size | Samples | Callee                          | Location           |
| -----: | ---------: | ------------: | --------------: | ------: | ------------------------------- | ------------------ |
| -45.5% | -2.499 MiB | 52.4% → 50.0% | 5.5 MiB → 3 MiB |  11 → 6 | `copyOfRange(byte[], int, int)` | `java.util.Arrays` |

##### `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

| Change |      Delta |             % |          Size | Samples | Callee                 | Location                                                                       |
| -----: | ---------: | ------------: | ------------: | ------: | ---------------------- | ------------------------------------------------------------------------------ |
| -80.0% | -3.999 MiB | 90.9% → 66.7% | 5 MiB → 1 MiB |  10 → 2 | `visit(ImageLocation)` | `jdk.internal.jimage.ImageReader$SharedImageReader$$Lambda.0x00000090013909a0` |

##### `handleModulesSubTree(String, ImageLocation)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

| Change |      Delta |      % |              Size | Samples | Callee                                                                        | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `visitLocation(ImageLocation, ImageReader$SharedImageReader$LocationVisitor)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `buildNode(String)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

| Change |      Delta |      % |              Size | Samples | Callee                                        | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | --------------------------------------------- | --------------------------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `handleModulesSubTree(String, ImageLocation)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `findNode(String)` (`jdk.internal.jimage.ImageReader$SharedImageReader`)

| Change |      Delta |      % |              Size | Samples | Callee              | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------- | --------------------------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `buildNode(String)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `findNode(String)` (`jdk.internal.jimage.ImageReader`)

| Change |      Delta |      % |              Size | Samples | Callee             | Location                                            |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------ | --------------------------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `findNode(String)` | `jdk.internal.jimage.ImageReader$SharedImageReader` |

##### `findNode(String)` (`jdk.internal.jrtfs.SystemImage$1`)

| Change |      Delta |      % |              Size | Samples | Callee             | Location                          |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------ | --------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `findNode(String)` | `jdk.internal.jimage.ImageReader` |

##### `lookup(String)` (`jdk.internal.jrtfs.JrtFileSystem`)

| Change |      Delta |      % |              Size | Samples | Callee             | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------ | ---------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `findNode(String)` | `jdk.internal.jrtfs.SystemImage$1` |

##### `checkNode(JrtPath)` (`jdk.internal.jrtfs.JrtFileSystem`)

| Change |      Delta |             % |              Size | Samples | Callee           | Location                           |
| -----: | ---------: | ------------: | ----------------: | ------: | ---------------- | ---------------------------------- |
| -72.7% | -3.999 MiB | 91.7% → 75.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `lookup(String)` | `jdk.internal.jrtfs.JrtFileSystem` |

##### `isDirectory(JrtPath, boolean)` (`jdk.internal.jrtfs.JrtFileSystem`)

| Change |      Delta |      % |              Size | Samples | Callee               | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | -------------------- | ---------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `checkNode(JrtPath)` | `jdk.internal.jrtfs.JrtFileSystem` |

##### `<init>(JrtPath, DirectoryStream$Filter)` (`jdk.internal.jrtfs.JrtDirectoryStream`)

| Change |      Delta |      % |              Size | Samples | Callee                          | Location                           |
| -----: | ---------: | -----: | ----------------: | ------: | ------------------------------- | ---------------------------------- |
| -72.7% | -3.999 MiB | 100.0% | 5.5 MiB → 1.5 MiB |  11 → 3 | `isDirectory(JrtPath, boolean)` | `jdk.internal.jrtfs.JrtFileSystem` |

##### `exec(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`)

| Change |      Delta |             % |              Size |   Samples | Callee                                                          | Location                                      |
| -----: | ---------: | ------------: | ----------------: | --------: | --------------------------------------------------------------- | --------------------------------------------- |
|  -2.8% | -8.499 MiB | 98.9% → 98.8% | 303 MiB → 295 MiB | 606 → 589 | `execImpl(MessageCollector, Services, CommonCompilerArguments)` | `org.jetbrains.kotlin.cli.common.CLICompiler` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |        Delta |             % |              Size |   Samples | Callee                                                                          | Location                                                                    |
| -----: | -----------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
|  -2.7% |   -7.999 MiB | 99.5% → 99.7% | 302 MiB → 294 MiB | 603 → 587 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`            | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                        |
| -33.3% | -511.999 KiB |   0.5% → 0.3% |   1.5 MiB → 1 MiB |     3 → 2 | `reportToMessageCollector(BaseDiagnosticsCollector, MessageCollector, boolean)` | `org.jetbrains.kotlin.cli.common.fir.FirDiagnosticsCompilerResultsReporter` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                         | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | ---------------------------------------------- | ------------------------------------------------------- |
|  -2.8% | -8.499 MiB | 100.0% | 303 MiB → 295 MiB | 606 → 589 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                                                              | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.8% | -8.499 MiB | 100.0% | 303 MiB → 295 MiB | 606 → 589 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                                                                                                        | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.8% | -8.499 MiB | 100.0% | 303 MiB → 295 MiB | 606 → 589 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                         | Location                                                |
| -----: | ---------: | -----: | ----------------: | --------: | -------------------------------------------------------------- | ------------------------------------------------------- |
|  -2.8% | -8.499 MiB | 100.0% | 303 MiB → 295 MiB | 606 → 589 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

| Change |      Delta |      % |              Size |   Samples | Callee                                                                | Location                                     |
| -----: | ---------: | -----: | ----------------: | --------: | --------------------------------------------------------------------- | -------------------------------------------- |
|  -2.8% | -8.499 MiB | 100.0% | 303 MiB → 295 MiB | 606 → 589 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |
