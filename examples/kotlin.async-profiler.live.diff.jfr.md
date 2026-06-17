# Allocated heap profile diff

Allocated 27.2 MB → 23.4 MB (-3.84 MB, -14.1%) over 1,345 samples → 1,235 samples (20.2 kB → 18.9 kB per sample).

| Category | Change |    Delta |      % |              Size |       Samples |
| -------- | -----: | -------: | -----: | ----------------: | ------------: |
| ours     | -14.1% | -3.84 MB | 100.0% | 27.2 MB → 23.4 MB | 1,345 → 1,235 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |    Delta |           % |              Size | Samples | Function                                                                                                                    | Location                                                                     |
| -------: | -------: | ----------: | ----------------: | ------: | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|   +33.2% |  +524 kB | 5.8% → 9.0% | 1.58 MB → 2.11 MB |   4 → 5 | `getBufIfOpen(boolean)`                                                                                                     | java.io.BufferedInputStream                                                  |
| +3404.5% |  +115 kB | 0.0% → 0.5% |  3.39 kB → 119 kB |       2 | `read(InputStream, int)`                                                                                                    | java.nio.file.Files                                                          |
|      new | +57.1 kB | 0.0% → 0.2% |     0 B → 57.1 kB |   0 → 1 | `stringsToBytes(String[])`                                                                                                  | org.jetbrains.kotlin.metadata.jvm.deserialization.UtfEncodingKt              |
|      new | +49.4 kB | 0.0% → 0.2% |     0 B → 49.4 kB |   0 → 1 | `<init>(int)`                                                                                                               | org.jetbrains.org.objectweb.asm.ByteVector                                   |
|  +234.1% | +38.2 kB | 0.1% → 0.2% | 16.3 kB → 54.6 kB |   3 → 6 | `<init>(byte[], int, boolean)`                                                                                              | org.jetbrains.org.objectweb.asm.ClassReader                                  |
|  +694.6% | +14.3 kB | 0.0% → 0.1% | 2.06 kB → 16.4 kB |       1 | `list0(File)`                                                                                                               | java.io.UnixFileSystem                                                       |
|  +256.0% | +3.73 kB |        0.0% | 1.46 kB → 5.18 kB |   3 → 4 | `enlarge(int)`                                                                                                              | jdk.internal.org.objectweb.asm.ByteVector                                    |
|    +4.3% |  +2.4 kB |        0.2% | 55.7 kB → 58.1 kB |   2 → 3 | `getBufferBytes(ByteBuffer)`                                                                                                | jdk.internal.jimage.BasicImageReader                                         |
|   +66.7% | +2.08 kB |        0.0% |  3.12 kB → 5.2 kB |   3 → 5 | `<init>(ClassWriter)`                                                                                                       | jdk.internal.org.objectweb.asm.SymbolTable                                   |
|      new | +1.04 kB |        0.0% |     0 B → 1.04 kB |   0 → 1 | `<init>()`                                                                                                                  | org.jetbrains.kotlin.codegen.optimization.NegatedJumpsMethodTransformer      |
|      new |   +712 B |        0.0% |       0 B → 712 B |   0 → 1 | `getBytes(int, int)`                                                                                                        | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.LargeDynamicMappedBuffer$Mapping |
|   +65.1% |   +656 B |        0.0% | 1.01 kB → 1.66 kB |   1 → 2 | `<init>(int)`                                                                                                               | jdk.internal.org.objectweb.asm.ByteVector                                    |
|   +66.7% |   +512 B |        0.0% |   768 B → 1.28 kB | 24 → 40 | `iterator()`                                                                                                                | java.util.ArrayList                                                          |
|  +133.3% |   +352 B |        0.0% |     264 B → 616 B |   3 → 7 | `createZipEntry(String)`                                                                                                    | java.util.zip.ZipInputStream                                                 |
|      new |   +288 B |        0.0% |       0 B → 288 B |   0 → 2 | `createCandidate(CallInfo, FirBasedSymbol, ExplicitReceiverKind, FirScope, FirExpression, FirExpression, boolean, boolean)` | org.jetbrains.kotlin.fir.resolve.calls.candidate.CandidateFactory            |
|  +192.3% |   +200 B |        0.0% |     104 B → 304 B |   1 → 4 | `toString()`                                                                                                                | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ByteArrayCharSequence            |
|   +48.7% |   +152 B |        0.0% |     312 B → 464 B |   3 → 5 | `initClassName()`                                                                                                           | java.lang.Class                                                              |
|  +271.4% |   +152 B |        0.0% |      56 B → 208 B |       1 | `toArray()`                                                                                                                 | org.jetbrains.org.objectweb.asm.tree.InsnList                                |
|      new |   +152 B |        0.0% |       0 B → 152 B |   0 → 1 | `<init>(int, float)`                                                                                                        | it.unimi.dsi.fastutil.ints.Int2IntOpenHashMap                                |
|      new |   +144 B |        0.0% |       0 B → 144 B |   0 → 1 | `<init>(int)`                                                                                                               | kotlin.reflect.jvm.internal.impl.protobuf.ByteString$Output                  |

#### Progressions

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |    Delta |             % |              Size |   Samples | Function                                                                              | Location                                                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|  -15.6% | -1.62 MB | 38.1% → 37.4% | 10.4 MB → 8.75 MB | 360 → 291 | `<init>(int)`                                                                         | java.io.ByteArrayOutputStream                                                |
|  -16.4% |  -1.3 MB | 29.1% → 28.3% | 7.91 MB → 6.61 MB | 282 → 255 | `copyOf(byte[], int)`                                                                 | java.util.Arrays                                                             |
|  -46.1% | -1.12 MB |   8.9% → 5.6% |  2.42 MB → 1.3 MB |   85 → 83 | `clone()`                                                                             | java.lang.Object                                                             |
|  -99.3% |  -262 kB |   1.0% → 0.0% |   264 kB → 1.9 kB |   19 → 10 | `resize()`                                                                            | java.util.HashMap                                                            |
|  -91.4% |  -112 kB |   0.5% → 0.0% |  123 kB → 10.5 kB |     6 → 2 | `accept(ClassVisitor, Attribute[], int)`                                              | org.jetbrains.org.objectweb.asm.ClassReader                                  |
|   -8.5% | -68.2 kB |   3.0% → 3.2% |   805 kB → 737 kB |     5 → 4 | `contentsToByteArray$lambda$0(ZipEntryDescription, LargeDynamicMappedBuffer$Mapping)` | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt              |
| removed | -59.1 kB |   0.2% → 0.0% |     59.1 kB → 0 B |     1 → 0 | `forceCapacity(int[], int, int)`                                                      | it.unimi.dsi.fastutil.ints.IntArrays                                         |
|   -1.7% | -58.9 kB | 12.6% → 14.4% | 3.42 MB → 3.36 MB |     2 → 1 | `initCEN(int, ZipCoder)`                                                              | java.util.zip.ZipFile$Source                                                 |
| removed | -16.4 kB |   0.1% → 0.0% |     16.4 kB → 0 B |     2 → 0 | `<init>(InputStream, int)`                                                            | java.util.jar.Manifest$FastInputStream                                       |
|  -91.6% | -16.1 kB |   0.1% → 0.0% | 17.6 kB → 1.47 kB |     6 → 9 | `copyOf(Object[], int)`                                                               | java.util.Arrays                                                             |
|  -28.4% | -6.74 kB |          0.1% |   23.7 kB → 17 kB |     4 → 2 | `compress(char[], int, int)`                                                          | java.lang.StringUTF16                                                        |
|  -18.8% | -6.35 kB |          0.1% | 33.8 kB → 27.5 kB |     2 → 3 | `<init>(InputStream, Inflater, int)`                                                  | java.util.zip.InflaterInputStream                                            |
| removed | -4.11 kB |          0.0% |     4.11 kB → 0 B |     1 → 0 | `enlarge(int)`                                                                        | org.jetbrains.org.objectweb.asm.ByteVector                                   |
|  -94.8% | -4.09 kB |          0.0% |   4.31 kB → 224 B |     8 → 2 | `defineClass1(ClassLoader, String, byte[], int, int, ProtectionDomain, String)`       | java.lang.ClassLoader                                                        |
|  -94.1% | -2.17 kB |          0.0% |    2.3 kB → 136 B |     5 → 1 | `<init>(String, MethodNode, Interpreter, boolean, boolean, boolean, Function2)`       | org.jetbrains.kotlin.codegen.optimization.common.FastAnalyzer                |
|  -47.7% |   -920 B |          0.0% | 1.93 kB → 1.01 kB |   17 → 10 | `<init>(int, int)`                                                                    | org.jetbrains.org.objectweb.asm.tree.analysis.Frame                          |
|   -9.3% |   -480 B |          0.0% |  5.18 kB → 4.7 kB |   41 → 36 | `<init>(int)`                                                                         | org.jetbrains.kotlin.protobuf.ByteString$Output                              |
|  -23.6% |   -456 B |          0.0% | 1.94 kB → 1.48 kB |   30 → 22 | `copyOfRangeByte(byte[], int, int)`                                                   | java.util.Arrays                                                             |
|  -71.7% |   -304 B |          0.0% |     424 B → 120 B |     5 → 3 | `copyOfRange(byte[], int, int)`                                                       | java.util.Arrays                                                             |
| removed |   -304 B |          0.0% |       304 B → 0 B |     1 → 0 | `<init>(MethodNode, boolean)`                                                         | org.jetbrains.kotlin.codegen.optimization.common.InstructionLivenessAnalyzer |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|      Change |    Delta |            % |              Size |   Samples | Function                                       | Location                                                                                                  |
| ----------: | -------: | -----------: | ----------------: | --------: | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
|         new | +4.71 MB | 0.0% → 20.2% |     0 B → 4.71 MB |   0 → 602 | `invokeStatic(Object, Object)`                 | java.lang.invoke.LambdaForm$DMH.0x0000007001008000                                                        |
|         new | +4.71 MB | 0.0% → 20.2% |     0 B → 4.71 MB |   0 → 602 | `invoke(Object, Object, Object)`               | java.lang.invoke.LambdaForm$MH.0x0000007001009400                                                         |
|         new |  +943 kB |  0.0% → 4.0% |      0 B → 943 kB |    0 → 19 | `compute()`                                    | org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x00000070015c4cd8              |
|         new |  +943 kB |  0.0% → 4.0% |      0 B → 943 kB |    0 → 18 | `invoke()`                                     | org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x00000070015c6548                |
| +3458200.0% |  +830 kB |  0.0% → 3.6% |     24 B → 830 kB |    1 → 67 | `transformAnnotations(FirTransformer, Object)` | org.jetbrains.kotlin.fir.declarations.impl.FirRegularClassImpl                                            |
|         new |  +738 kB |  0.0% → 3.2% |      0 B → 738 kB |     0 → 5 | `invoke(Object)`                               | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x0000007001394428                |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |   13 → 15 | `readLOC()`                                    | java.util.zip.ZipInputStream                                                                              |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |   13 → 15 | `getNextEntry()`                               | java.util.zip.ZipInputStream                                                                              |
|      +33.2% |  +524 kB |  5.8% → 9.0% | 1.58 MB → 2.11 MB |     4 → 5 | `getBufIfOpen(boolean)`                        | java.io.BufferedInputStream                                                                               |
|      +33.2% |  +524 kB |  5.8% → 9.0% | 1.58 MB → 2.11 MB |     4 → 5 | `getBufIfOpen()`                               | java.io.BufferedInputStream                                                                               |
|      +33.2% |  +524 kB |  5.8% → 9.0% | 1.58 MB → 2.11 MB |     4 → 5 | `fill()`                                       | java.io.BufferedInputStream                                                                               |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |     3 → 4 | `read1(byte[], int, int)`                      | java.io.BufferedInputStream                                                                               |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |     3 → 4 | `implRead(byte[], int, int)`                   | java.io.BufferedInputStream                                                                               |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |     3 → 4 | `read(byte[], int, int)`                       | java.io.BufferedInputStream                                                                               |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |     3 → 4 | `read(byte[], int, int)`                       | java.io.FilterInputStream                                                                                 |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |     3 → 4 | `read(byte[], int, int)`                       | java.io.PushbackInputStream                                                                               |
|      +33.3% |  +524 kB |  5.8% → 9.0% |  1.57 MB → 2.1 MB |     3 → 4 | `readFully(byte[], int, int)`                  | java.util.zip.ZipInputStream                                                                              |
|         new |  +199 kB |  0.0% → 0.9% |      0 B → 199 kB |    0 → 19 | `invoke(Object, Object)`                       | org.jetbrains.kotlin.fir.deserialization.AbstractFirDeserializedSymbolProvider$$Lambda.0x0000007001472078 |
|    +1974.9% |  +180 kB |  0.0% → 0.8% |  9.14 kB → 190 kB |        23 | `toSymbol(ConeClassLikeLookupTag, FirSession)` | org.jetbrains.kotlin.fir.resolve.ToSymbolUtilsKt                                                          |
|      +16.2% |  +150 kB |  3.4% → 4.6% |  923 kB → 1.07 MB | 170 → 162 | `getValue(Object, Object)`                     | org.jetbrains.kotlin.fir.caches.FirThreadUnsafeCache                                                      |

#### Progressions

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |    Delta |             % |              Size |       Samples | Function                                                                     | Location                                                                                     |
| ------: | -------: | ------------: | ----------------: | ------------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| removed | -4.71 MB |  17.3% → 0.0% |     4.71 MB → 0 B |       602 → 0 | `invokeStatic(Object, Object)`                                               | java.lang.invoke.LambdaForm$DMH.0x000000b001008000                                           |
| removed | -4.71 MB |  17.3% → 0.0% |     4.71 MB → 0 B |       602 → 0 | `invoke(Object, Object, Object)`                                             | java.lang.invoke.LambdaForm$MH.0x000000b001009400                                            |
|  -14.1% | -3.84 MB |        100.0% | 27.2 MB → 23.4 MB | 1,344 → 1,235 | `run(String[])`                                                              | org.jetbrains.kotlin.preloading.Preloader                                                    |
|  -14.1% | -3.84 MB |        100.0% | 27.2 MB → 23.4 MB | 1,344 → 1,235 | `main(String[])`                                                             | org.jetbrains.kotlin.preloading.Preloader                                                    |
|  -17.1% | -3.84 MB | 82.7% → 79.8% | 22.5 MB → 18.7 MB |     742 → 633 | `preloadClasses(Collection, int, ClassLoader, ClassCondition, ClassHandler)` | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                         |
|  -17.0% | -3.83 MB | 82.7% → 79.8% | 22.5 MB → 18.7 MB |     741 → 633 | `loadAllClassesFromJars(Collection, int, ClassHandler)`                      | org.jetbrains.kotlin.preloading.ClassPreloadingUtils                                         |
|  -24.0% | -2.47 MB | 37.8% → 33.4% | 10.3 MB → 7.82 MB |     359 → 320 | `toByteArray()`                                                              | java.io.ByteArrayOutputStream                                                                |
|  -23.4% | -2.41 MB | 37.9% → 33.9% | 10.3 MB → 7.91 MB |     367 → 336 | `copyOf(byte[], int)`                                                        | java.util.Arrays                                                                             |
|  -15.6% | -1.62 MB | 38.1% → 37.4% | 10.4 MB → 8.75 MB |     360 → 291 | `<init>(int)`                                                                | java.io.ByteArrayOutputStream                                                                |
|  -46.1% | -1.12 MB |   8.9% → 5.6% |  2.42 MB → 1.3 MB |       85 → 83 | `clone()`                                                                    | java.lang.Object                                                                             |
| removed |  -896 kB |   3.3% → 0.0% |      896 kB → 0 B |        24 → 0 | `invoke()`                                                                   | org.jetbrains.kotlin.load.kotlin.VirtualFileKotlinClass$Factory$$Lambda.0x000000b0015c8700   |
| removed |  -896 kB |   3.3% → 0.0% |      896 kB → 0 B |        24 → 0 | `compute()`                                                                  | org.jetbrains.kotlin.load.kotlin.KotlinBinaryClassCache$Companion$$Lambda.0x000000b0015c6c78 |
| removed |  -805 kB |   3.0% → 0.0% |      805 kB → 0 B |         5 → 0 | `invoke(Object)`                                                             | org.jetbrains.kotlin.cli.jvm.compiler.jarfs.ZipImplementationKt$$Lambda.0x000000b001396000   |
|  -99.1% |  -262 kB |   1.0% → 0.0% |  264 kB → 2.44 kB |       35 → 26 | `put(Object, Object)`                                                        | java.util.HashMap                                                                            |
|  -99.3% |  -262 kB |   1.0% → 0.0% |   264 kB → 1.9 kB |       19 → 10 | `resize()`                                                                   | java.util.HashMap                                                                            |
|  -99.0% |  -262 kB |   1.0% → 0.0% |  264 kB → 2.52 kB |       35 → 27 | `putVal(int, Object, Object, boolean, boolean)`                              | java.util.HashMap                                                                            |
|  -72.6% |  -163 kB |   0.8% → 0.3% |  224 kB → 61.4 kB |     130 → 153 | `executePhase(JvmFir2IrPipelineArtifact)`                                    | org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase                                |
|  -72.6% |  -163 kB |   0.8% → 0.3% |  224 kB → 61.4 kB |     130 → 153 | `executePhase(PipelineArtifact)`                                             | org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase                                |
| removed |  -162 kB |   0.6% → 0.0% |      162 kB → 0 B |        10 → 0 | `invoke()`                                                                   | org.jetbrains.kotlin.codegen.inline.SourceCompilerForInlineKt$$Lambda.0x000000b0018e72d0     |
|  -80.5% |  -120 kB |   0.5% → 0.1% |  149 kB → 29.1 kB |       54 → 49 | `accept(ClassVisitor, Attribute[], int)`                                     | org.jetbrains.org.objectweb.asm.ClassReader                                                  |
