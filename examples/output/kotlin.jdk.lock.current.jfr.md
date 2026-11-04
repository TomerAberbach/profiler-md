# Lock contention profile

Blocked 3.42s over 1,240 contentions (2.8ms per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Standard library | 61.9% | 2.11s |          43 |
| Ours             | 38.1% | 1.30s |       1,197 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 2.61s (76.4%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│   ├── … 1.30s (38.2%, self 61.8% globally) park(boolean, long) at jdk.internal.misc.Unsafe
│   └── … 1.30s (38.1%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
│       ├── 1.23s (35.9%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│       │   ├── 1.22s (35.7%) generateMethod(IrFunction, SourceMapper)
│       │   │   ├── 1.15s (33.7%, self 29.6%) generateMethodNode(IrFunction)
│       │   │   │   └── … 139.5ms (4.1%, self 1.2%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
│       │   │   │       ├── … 54.2ms (1.6%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│       │   │   │       │   ├── … 29.3ms (0.9%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│       │   │   │       │   │   ├── 8.5ms (0.2%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
│       │   │   │       │   │   │   └── 2.6ms (0.1%) <init>(TypeSystemCommonBackendContext, Map, boolean, Function2) at org.jetbrains.kotlin.codegen.inline.TypeParameterMappings
│       │   │   │       │   │   ├── … 4.0ms (0.1%) <clinit>() at org.jetbrains.kotlin.codegen.inline.MethodInliner
│       │   │   │       │   │   └── 2.8ms (0.1%) visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)
│       │   │   │       │   │       └── 2.8ms (0.1%) genValueAndPut(IrValueParameter, IrExpression, Type, ExpressionCodegen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
│       │   │   │       │   └── … 3.9ms (0.1%) doInline(MethodNode) at org.jetbrains.kotlin.codegen.inline.MethodInliner
│       │   │   │       ├── 6.3ms (0.2%) <init>(int, int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.tree.MethodNode
│       │   │   │       ├── 5.4ms (0.2%) wrapWithMaxLocalCalc(MethodNode) at org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt
│       │   │   │       │   └── 4.0ms (0.1%) <init>(int, int, String, MethodVisitor) at org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator
│       │   │   │       ├── … 4.1ms (0.1%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
│       │   │   │       └── … 2.0ms (0.1%) getOptimalModeForSignaturePart(TypeSystemCommonBackendContext, KotlinTypeMarker, boolean) at org.jetbrains.kotlin.load.kotlin.TypeMappingModeExtensionsKt
│       │   │   ├── 17.8ms (0.5%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
│       │   │   │   ├── 13.5ms (0.4%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
│       │   │   │   │   └── 11.6ms (0.3%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
│       │   │   │   └── … 4.3ms (0.1%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
│       │   │   │       └── 4.3ms (0.1%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
│       │   │   ├── … 17.7ms (0.5%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
│       │   │   │   └── 8.4ms (0.2%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
│       │   │   │       └── 2.5ms (0.1%) createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion
│       │   │   │           └── 2.5ms (0.1%) createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)
│       │   │   ├── … 8.5ms (0.2%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
│       │   │   └── … 3.6ms (0.1%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.boxing.PopBackwardPropagationTransformer
│       │   └── … 2.7ms (0.1%) serializeProperty(FirProperty, ProtoBuf$Property$Builder, MutableVersionRequirementTable, FirElementSerializer) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
│       └── … 65.2ms (1.9%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│           ├── … 28.5ms (0.8%, self 0.6%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
│           │   └── … 7.6ms (0.2%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
│           ├── 11.1ms (0.3%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
│           │   └── 3.9ms (0.1%) <init>(BothSignatureWriter$Mode) at org.jetbrains.kotlin.codegen.signature.BothSignatureWriter
│           └── 7.5ms (0.2%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
├── … 471.8ms (13.8%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 335.3ms (9.8%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |   Time | Contentions | Function                                                                                                                                                            | Location                                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 61.8% |  2.11s |          33 | `park(boolean, long)`                                                                                                                                               | `jdk.internal.misc.Unsafe`                                                 |
| 29.6% |  1.01s |          94 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  1.2% | 39.9ms |          62 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                 |
|  0.6% | 20.9ms |          29 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                     |
|  0.3% | 11.7ms |          91 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  0.3% | 10.0ms |          51 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`      |
|  0.3% |  8.9ms |          19 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                     |
|  0.2% |  8.5ms |           4 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                      |
|  0.2% |  8.0ms |          25 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`               |
|  0.2% |  7.2ms |          35 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                |
|  0.2% |  6.9ms |          16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`             |
|  0.2% |  6.3ms |          20 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                          |
|  0.2% |  6.1ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                              |
|  0.1% |  4.8ms |           5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`             |
|  0.1% |  4.8ms |          15 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                        |
|  0.1% |  4.1ms |          10 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                                |
|  0.1% |  4.0ms |           1 | `<clinit>()`                                                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                        |
|  0.1% |  4.0ms |          10 | `<init>(int, int, String, MethodVisitor)`                                                                                                                           | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |
|  0.1% |  3.9ms |          21 | `<init>(BothSignatureWriter$Mode)`                                                                                                                                  | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter`               |
|  0.1% |  3.6ms |          37 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |  Time | Contentions | Function                                    | Location                             |
| ----: | ----: | ----------: | ------------------------------------------- | ------------------------------------ |
| 61.8% | 2.11s |          33 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`           |
|  0.1% | 1.9ms |           4 | `desiredAssertionStatus()`                  | `java.lang.Class`                    |
| <0.1% | 0.1ms |           1 | `finishEntry(ClassValue, ClassValue$Entry)` | `java.lang.ClassValue$ClassValueMap` |
| <0.1% | 0.1ms |           3 | `getValue()`                                | `kotlin.SynchronizedLazyImpl`        |
| <0.1% | 7.2µs |           1 | `periodicTask()`                            | `jdk.jfr.internal.PlatformRecorder`  |
| <0.1% | 7.0µs |           1 | `getId()`                                   | `jdk.jfr.internal.PlatformRecording` |

##### Ours

|     % |   Time | Contentions | Function                                                                                                                                                            | Location                                                                   |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 29.6% |  1.01s |          94 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  1.2% | 39.9ms |          62 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                 |
|  0.6% | 20.9ms |          29 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                     |
|  0.3% | 11.7ms |          91 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                    |
|  0.3% | 10.0ms |          51 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`      |
|  0.3% |  8.9ms |          19 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                     |
|  0.2% |  8.5ms |           4 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                      |
|  0.2% |  8.0ms |          25 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`               |
|  0.2% |  7.2ms |          35 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                |
|  0.2% |  6.9ms |          16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`             |
|  0.2% |  6.3ms |          20 | `<init>(int, int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                          |
|  0.2% |  6.1ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                              |
|  0.1% |  4.8ms |           5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`             |
|  0.1% |  4.8ms |          15 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                        |
|  0.1% |  4.1ms |          10 | `<init>()`                                                                                                                                                          | `org.jetbrains.kotlin.codegen.FrameMapBase`                                |
|  0.1% |  4.0ms |           1 | `<clinit>()`                                                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                        |
|  0.1% |  4.0ms |          10 | `<init>(int, int, String, MethodVisitor)`                                                                                                                           | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator` |
|  0.1% |  3.9ms |          21 | `<init>(BothSignatureWriter$Mode)`                                                                                                                                  | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter`               |
|  0.1% |  3.6ms |          37 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                |
|  0.1% |  3.3ms |           3 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                              |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 99.5% |    1s |          74 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.3% | 3.5ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
|  0.2% | 1.6ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| <0.1% | 0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 43.0% | 17.1ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 25.8% | 10.3ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
| 10.2% |  4.1ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  7.5% |  3.0ms |          12 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |
|  6.5% |  2.6ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 20.9ms |          29 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 35.3% | 4.1ms |          18 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 17.0% | 2.0ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
| 16.5% | 1.9ms |          22 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |
|  8.0% | 0.9ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |
|  6.9% | 0.8ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:112` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 16.2% | 1.6ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
| 15.6% | 1.6ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:57` |
| 11.6% | 1.2ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:47` |
|  9.6% | 1.0ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:53` |
|  7.7% | 0.8ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 98.9% | 8.8ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  1.1% | 0.1ms |           1 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Location                                                 |
| -----: | ----: | ----------: | -------------------------------------------------------- |
| 100.0% | 8.5ms |           4 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 48.4% | 3.9ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 15.9% | 1.3ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| 14.0% | 1.1ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
| 11.9% | 1.0ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
|  8.9% | 0.7ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 66.5% | 4.8ms |          28 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| 33.5% | 2.4ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 52.9% | 3.6ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 25.4% | 1.7ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 14.8% | 1.0ms |           8 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
|  7.0% | 0.5ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|     % |  Time | Contentions | Location                                              |
| ----: | ----: | ----------: | ----------------------------------------------------- |
| 86.5% | 5.5ms |          11 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:225` |
| 13.5% | 0.9ms |           9 | `org.jetbrains.org.objectweb.asm.tree.MethodNode:230` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 6.1ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 50.4% | 2.4ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |
| 49.6% | 2.4ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 55.2% | 2.6ms |           6 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 22.8% | 1.1ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
| 14.5% | 0.7ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  6.3% | 0.3ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
|  1.3% | 0.1ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 4.1ms |          10 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

|     % |  Time | Contentions | Location                                                                      |
| ----: | ----: | ----------: | ----------------------------------------------------------------------------- |
| 80.7% | 3.2ms |           4 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator:68` |
| 19.3% | 0.8ms |           6 | `org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator:64` |

##### `<init>(BothSignatureWriter$Mode)` (`org.jetbrains.kotlin.codegen.signature.BothSignatureWriter`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 79.1% | 3.1ms |           9 | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter:43` |
| 20.9% | 0.8ms |          12 | `org.jetbrains.kotlin.codegen.signature.BothSignatureWriter:36` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 37.8% | 1.4ms |          13 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| 32.4% | 1.2ms |          13 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |
| 29.8% | 1.1ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 3.3ms |           3 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|      % |  Time | Contentions | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1.9ms |           4 | `java.lang.Class:3906` |

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

|      % |  Time | Contentions | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 0.1ms |           1 | `java.lang.ClassValue$ClassValueMap:476` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|      % |  Time | Contentions | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 0.1ms |           3 | `kotlin.SynchronizedLazyImpl:81` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Location                                |
| -----: | ----: | ----------: | --------------------------------------- |
| 100.0% | 7.2µs |           1 | `jdk.jfr.internal.PlatformRecorder:526` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 7.0µs |           1 | `jdk.jfr.internal.PlatformRecording:433` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller                    | Location                                 |
| ----: | ------: | ----------: | ------------------------- | ---------------------------------------- |
| 61.8% |   1.30s |          20 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 22.3% | 472.2ms |           3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 15.9% | 336.3ms |          10 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Caller                                      | Location                                                             |
| ----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 94.6% | 959.4ms |          92 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  5.4% |  54.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 39.9ms |          62 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 20.9ms |          29 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 11.7ms |          91 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 10.0ms |          51 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 8.9ms |          19 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ----: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 8.5ms |           4 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 8.0ms |          25 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 7.2ms |          35 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 6.9ms |          16 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`)

|      % |  Time | Contentions | Caller                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 6.3ms |          20 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 6.1ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 4.8ms |           5 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 4.8ms |          15 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 4.1ms |          10 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                               | Location                                                   |
| -----: | ----: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 4.0ms |           1 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`)

|      % |  Time | Contentions | Caller                             | Location                                                   |
| -----: | ----: | ----------: | ---------------------------------- | ---------------------------------------------------------- |
| 100.0% | 4.0ms |          10 | `wrapWithMaxLocalCalc(MethodNode)` | `org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt` |

##### `<init>(BothSignatureWriter$Mode)` (`org.jetbrains.kotlin.codegen.signature.BothSignatureWriter`)

|      % |  Time | Contentions | Caller                                                    | Location                                                    |
| -----: | ----: | ----------: | --------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 3.9ms |          21 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.6ms |          37 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 3.3ms |           3 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|     % |   Time | Contentions | Caller       | Location                                                          |
| ----: | -----: | ----------: | ------------ | ----------------------------------------------------------------- |
| 75.4% |  1.4ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
| 13.5% |  0.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |
| 10.4% |  0.2ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.StackValue`                         |
|  0.8% | 14.9µs |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.NameGenerator`               |

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

|      % |  Time | Contentions | Caller                  | Location               |
| -----: | ----: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 0.1ms |           1 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |   Time | Contentions | Caller                                       | Location                                                             |
| ----: | -----: | ----------: | -------------------------------------------- | -------------------------------------------------------------------- |
| 81.3% | 48.6µs |           1 | `getGENERATED_SAM_IMPLEMENTATION()`          | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |
| 18.0% | 10.8µs |           1 | `getCONTINUATION_CLASS()`                    | `org.jetbrains.kotlin.backend.jvm.JvmLoweredDeclarationOrigin`       |
|  0.7% |  0.4µs |           1 | `getADAPTER_FOR_FUN_INTERFACE_CONSTRUCTOR()` | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |

##### `periodicTask()` (`jdk.jfr.internal.PlatformRecorder`)

|      % |  Time | Contentions | Caller                        | Location                            |
| -----: | ----: | ----------: | ----------------------------- | ----------------------------------- |
| 100.0% | 7.2µs |           1 | `lambda$startDiskMonitor$1()` | `jdk.jfr.internal.PlatformRecorder` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |  Time | Contentions | Caller    | Location            |
| -----: | ----: | ----------: | --------- | ------------------- |
| 100.0% | 7.0µs |           1 | `getId()` | `jdk.jfr.Recording` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 90.2% |   3.08s |       1,236 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 90.2% |   3.08s |       1,236 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| 76.4% |   2.61s |       1,233 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 76.4% |   2.61s |       1,233 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 61.8% |   2.11s |          33 | `park(boolean, long)`                                                                                             | `jdk.internal.misc.Unsafe`                                                        |
| 48.0% |   1.64s |          22 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)`                                                                     | `java.util.concurrent.ForkJoinPool`                                               |
| 48.0% |   1.64s |          22 | `managedBlock(ForkJoinPool$ManagedBlocker)`                                                                       | `java.util.concurrent.ForkJoinPool`                                               |
| 38.2% |   1.31s |          28 | `take()`                                                                                                          | `java.util.concurrent.LinkedBlockingQueue`                                        |
| 38.2% |   1.31s |          28 | `getTask()`                                                                                                       | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 38.2% |   1.30s |          25 | `await()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`           |
| 38.2% |   1.30s |          20 | `park()`                                                                                                          | `java.util.concurrent.locks.LockSupport`                                          |
| 38.2% |   1.30s |          20 | `block()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`             |
| 38.2% |   1.30s |       1,205 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 38.2% |   1.30s |       1,205 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |
| 38.2% |   1.30s |       1,205 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| 38.1% |   1.30s |       1,186 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 35.9% |   1.23s |         821 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 35.7% |   1.22s |         789 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 33.7% |   1.15s |         561 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 13.8% | 472.2ms |           3 | `parkNanos(Object, long)`                                                                                         | `java.util.concurrent.locks.LockSupport`                                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                                      | Location                                                                |
| ----: | ------: | ----------: | --------------------------------------------- | ----------------------------------------------------------------------- |
| 90.2% |   3.08s |       1,236 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                                      |
| 90.2% |   3.08s |       1,236 | `run()`                                       | `java.lang.Thread`                                                      |
| 76.4% |   2.61s |       1,233 | `runWorker(ThreadPoolExecutor$Worker)`        | `java.util.concurrent.ThreadPoolExecutor`                               |
| 76.4% |   2.61s |       1,233 | `run()`                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
| 61.8% |   2.11s |          33 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`                                              |
| 48.0% |   1.64s |          22 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool`                                     |
| 48.0% |   1.64s |          22 | `managedBlock(ForkJoinPool$ManagedBlocker)`   | `java.util.concurrent.ForkJoinPool`                                     |
| 38.2% |   1.31s |          28 | `take()`                                      | `java.util.concurrent.LinkedBlockingQueue`                              |
| 38.2% |   1.31s |          28 | `getTask()`                                   | `java.util.concurrent.ThreadPoolExecutor`                               |
| 38.2% |   1.30s |          25 | `await()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 38.2% |   1.30s |          20 | `park()`                                      | `java.util.concurrent.locks.LockSupport`                                |
| 38.2% |   1.30s |          20 | `block()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
| 38.2% |   1.30s |       1,205 | `run()`                                       | `java.util.concurrent.CompletableFuture$AsyncRun`                       |
| 13.8% | 472.2ms |           3 | `parkNanos(Object, long)`                     | `java.util.concurrent.locks.LockSupport`                                |
| 13.8% | 471.8ms |           2 | `await(long, TimeUnit)`                       | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 13.8% | 471.8ms |           2 | `await(long)`                                 | `java.lang.ref.ReferenceQueue`                                          |
| 13.8% | 471.8ms |           2 | `remove0(long)`                               | `java.lang.ref.ReferenceQueue`                                          |
| 13.8% | 471.8ms |           2 | `remove(long)`                                | `java.lang.ref.ReferenceQueue`                                          |
| 13.8% | 471.8ms |           2 | `run()`                                       | `jdk.internal.ref.CleanerImpl`                                          |
| 13.8% | 471.8ms |           2 | `run()`                                       | `jdk.internal.misc.InnocuousThread`                                     |

##### Ours

|     % |    Time | Contentions | Function                                                                                                                                                                    | Location                                                                          |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 38.2% |   1.30s |       1,205 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)`                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 38.2% |   1.30s |       1,205 | `run()`                                                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |
| 38.1% |   1.30s |       1,186 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 35.9% |   1.23s |         821 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 35.7% |   1.22s |         789 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 33.7% |   1.15s |         561 | `generateMethodNode(IrFunction)`                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  9.8% | 335.8ms |           3 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  9.8% | 335.8ms |           3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`               |
|  9.8% | 335.8ms |           3 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |
|  9.8% | 335.8ms |           3 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |
|  9.8% | 335.8ms |           3 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                 |
|  9.8% | 335.8ms |           3 | `phaseBody(LoggingContext, Object)`                                                                                                                                         | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                 |
|  9.8% | 335.8ms |           3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                           |
|  9.8% | 335.8ms |           3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                       |
|  9.8% | 335.8ms |           3 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                                                        | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                              |
|  9.8% | 335.8ms |           3 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 335.8ms |           3 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                                                         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 335.8ms |           3 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)`                               | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 335.8ms |           3 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 335.8ms |           3 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                                                       | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 3.08s |       1,236 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|     % |    Time | Contentions | Caller  | Location                            |
| ----: | ------: | ----------: | ------- | ----------------------------------- |
| 15.3% | 471.8ms |           2 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 2.61s |       1,233 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 2.61s |       1,233 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller                    | Location                                 |
| ----: | ------: | ----------: | ------------------------- | ---------------------------------------- |
| 61.8% |   1.30s |          20 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 22.3% | 472.2ms |           3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 15.9% | 336.3ms |          10 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                                      | Location                            |
| -----: | ----: | ----------: | ------------------------------------------- | ----------------------------------- |
| 100.0% | 1.64s |          22 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Caller                | Location                                                                |
| ----: | ------: | ----------: | --------------------- | ----------------------------------------------------------------------- |
| 79.6% |   1.30s |          20 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 20.4% | 335.3ms |           2 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Contentions | Caller      | Location                                  |
| -----: | ----: | ----------: | ----------- | ----------------------------------------- |
| 100.0% | 1.31s |          28 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.31s |          28 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |  Time | Contentions | Caller   | Location                                   |
| -----: | ----: | ----------: | -------- | ------------------------------------------ |
| 100.0% | 1.30s |          25 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Caller    | Location                                                              |
| -----: | ----: | ----------: | --------- | --------------------------------------------------------------------- |
| 100.0% | 1.30s |          20 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Contentions | Caller                                        | Location                            |
| -----: | ----: | ----------: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.30s |          20 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.30s |       1,205 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.30s |       1,205 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.30s |       1,205 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.30s |       1,186 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.23s |         821 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.22s |         789 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.15s |         561 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   4.7% | 54.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|     % |    Time | Contentions | Caller                  | Location                                                                |
| ----: | ------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| 99.9% | 471.8ms |           2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  0.1% |   0.5ms |           1 | `awaitNanos(long)`      | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Contentions | Caller        | Location                       |
| -----: | ------: | ----------: | ------------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Caller          | Location                       |
| -----: | ------: | ----------: | --------------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Caller         | Location                       |
| -----: | ------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Caller  | Location                       |
| -----: | ------: | ----------: | ------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Contentions | Caller                      | Location           |
| -----: | ------: | ----------: | --------------------------- | ------------------ |
| 100.0% | 471.8ms |           2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |    Time | Contentions | Caller                                                                                                                                                                      | Location                                                            |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

|      % |    Time | Contentions | Caller                                    | Location                                                        |
| -----: | ------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Caller                           | Location                                                        |
| -----: | ------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Caller                                         | Location                                          |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Caller                              | Location                                          |
| -----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Caller                                                     | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % |    Time | Contentions | Caller                                                     | Location                                                    |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % |    Time | Contentions | Caller                                                               | Location                                             |
| -----: | ------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % |    Time | Contentions | Caller                                         | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                                                              | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                         | Location                                                |
| -----: | ------: | ----------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                                | Location                                     |
| -----: | ------: | ----------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 335.8ms |           3 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Time | Contentions | Caller                                                                 | Location                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 335.8ms |           3 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |    Time | Contentions | Callee  | Location                                                       |
| ----: | ------: | ----------: | ------- | -------------------------------------------------------------- |
| 84.7% |   2.61s |       1,233 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker`               |
| 15.3% | 471.8ms |           2 | `run()` | `jdk.internal.ref.CleanerImpl`                                 |
| <0.1% |   7.2µs |           1 | `run()` | `jdk.jfr.internal.PlatformRecorder$$Lambda.0x000000d001042ce0` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 3.08s |       1,236 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |  Time | Contentions | Callee      | Location                                          |
| ----: | ----: | ----------: | ----------- | ------------------------------------------------- |
| 50.0% | 1.31s |          28 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |
| 50.0% | 1.30s |       1,205 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 2.61s |       1,233 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Callee    | Location                                                              |
| ----: | ------: | ----------: | --------- | --------------------------------------------------------------------- |
| 79.6% |   1.30s |          20 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
| 20.4% | 335.3ms |           2 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                        | Location                            |
| -----: | ----: | ----------: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.64s |          22 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Contentions | Callee                | Location                                                                |
| -----: | ----: | ----------: | --------------------- | ----------------------------------------------------------------------- |
| 100.0% | 1.30s |          25 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  <0.1% | 0.2ms |           3 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock`                              |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Callee   | Location                                   |
| -----: | ----: | ----------: | -------- | ------------------------------------------ |
| 100.0% | 1.31s |          28 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|     % |  Time | Contentions | Callee                                            | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 1.30s |          20 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
|  0.1% | 0.8ms |           5 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Callee                | Location                   |
| -----: | ----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 1.30s |          20 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Contentions | Callee   | Location                                 |
| -----: | ----: | ----------: | -------- | ---------------------------------------- |
| 100.0% | 1.30s |          20 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                               |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 99.8% | 1.30s |       1,186 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  0.2% | 2.6ms |          19 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.30s |       1,205 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.30s |       1,205 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 94.3% |  1.23s |         821 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  5.0% | 65.2ms |         346 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Callee                                                  | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 99.2% | 1.22s |         789 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.6% | 7.6ms |          25 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.1% | 1.3ms |           3 | `generateField(IrField)`                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.1% | 0.6ms |           1 | `visitSMAP(SourceMapper, boolean, boolean)`             | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`   |
| <0.1% | 0.1ms |           1 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                            |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 94.5% |  1.15s |         561 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  1.5% | 18.9ms |          43 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  1.5% | 17.9ms |          91 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
|  1.5% | 17.8ms |          67 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
|  0.9% | 10.7ms |           8 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 16.8% | 194.2ms |         469 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Contentions | Callee                | Location                   |
| -----: | ------: | ----------: | --------------------- | -------------------------- |
| 100.0% | 472.2ms |           3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Contentions | Callee                    | Location                                 |
| -----: | ------: | ----------: | ------------------------- | ---------------------------------------- |
| 100.0% | 471.8ms |           2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Callee                  | Location                                                                |
| -----: | ------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% | 471.8ms |           2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Callee        | Location                       |
| -----: | ------: | ----------: | ------------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Callee          | Location                       |
| -----: | ------: | ----------: | --------------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Contentions | Callee         | Location                       |
| -----: | ------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 471.8ms |           2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % |    Time | Contentions | Callee  | Location           |
| -----: | ------: | ----------: | ------- | ------------------ |
| 100.0% | 471.8ms |           2 | `run()` | `java.lang.Thread` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |    Time | Contentions | Callee                             | Location                                  |
| ----: | ------: | ----------: | ---------------------------------- | ----------------------------------------- |
| 99.9% | 335.3ms |           2 | `get()`                            | `java.util.concurrent.CompletableFuture`  |
|  0.1% |   0.5ms |           1 | `awaitTermination(long, TimeUnit)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

|      % |    Time | Contentions | Callee                                            | Location                                               |
| -----: | ------: | ----------: | ------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 335.8ms |           3 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Callee                                                                                                                                                                      | Location                                                            |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Callee                                    | Location                                                        |
| -----: | ------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Callee                           | Location                                                        |
| -----: | ------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Callee                                         | Location                                          |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % |    Time | Contentions | Callee                              | Location                                          |
| -----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % |    Time | Contentions | Callee                                                     | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % |    Time | Contentions | Callee                                                     | Location                                                    |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                                               | Location                                             |
| -----: | ------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                         | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                                                                              | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Time | Contentions | Callee                                                         | Location                                                |
| -----: | ------: | ----------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 335.8ms |           3 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38.2% |   1.30s |          20 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 28.0% | 959.4ms |          92 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 13.8% | 471.8ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  9.8% | 335.3ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x000000d001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000d00100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  1.6% |  54.6ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.2% |  39.9ms |          62 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |  20.9ms |          29 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% |  11.7ms |          91 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.3% |  10.0ms |          51 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |   8.9ms |          19 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |   8.5ms |           4 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |   7.2ms |          35 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.2% |   6.9ms |          16 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d0018b6300`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |   6.3ms |          20 | `<init>(int, int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.tree.MethodNode`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.2% |   6.1ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% |   5.4ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.1% |   4.8ms |           5 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x000000d0018b6300`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.1% |   4.1ms |          10 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |   4.0ms |           1 | `<clinit>()` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |   4.0ms |          10 | `<init>(int, int, String, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.MaxStackFrameSizeAndLocalsCalculator`) ← `wrapWithMaxLocalCalc(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.InlineCodegenUtilsKt`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x000000d0018aecf8`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
