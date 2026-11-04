# Lock contention profile

Blocked 3.74s over 1,172 contentions (3.2ms per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Standard library | 59.1% | 2.21s |          54 |
| Ours             | 40.9% | 1.53s |       1,118 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 2.88s (77.0%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│   ├── … 1.53s (41.0%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
│   │   ├── 1.45s (39.0%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│   │   │   ├── 1.44s (38.5%) generateMethod(IrFunction, SourceMapper)
│   │   │   │   ├── 1.36s (36.5%, self 32.0%) generateMethodNode(IrFunction)
│   │   │   │   │   └── … 167.6ms (4.5%, self 1.3%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
│   │   │   │   │       ├── … 67.7ms (1.8%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   ├── … 44.6ms (1.2%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   ├── … 38.7ms (1.0%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
│   │   │   │   │       │   │   │   ├── … 19.4ms (0.5%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
│   │   │   │   │       │   │   │   │   ├── 4.6ms (0.1%) getInlineCallSiteInfo() at org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline
│   │   │   │   │       │   │   │   │   └── … 2.1ms (0.1%) doInline(MethodNode) at org.jetbrains.kotlin.codegen.inline.MethodInliner
│   │   │   │   │       │   │   │   └── 11.7ms (0.3%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
│   │   │   │   │       │   │   │       └── 2.8ms (0.1%) <init>(TypeSystemCommonBackendContext, Map, boolean, Function2) at org.jetbrains.kotlin.codegen.inline.TypeParameterMappings
│   │   │   │   │       │   │   └── 4.5ms (0.1%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator
│   │   │   │   │       │   └── 23.0ms (0.6%) 3 more callees, led by (0.5%) accept(IrVisitor, Object) at org.jetbrains.kotlin.ir.expressions.IrCall
│   │   │   │   │       ├── 10.4ms (0.3%) createFrameMapWithReceivers(IrFunction)
│   │   │   │   │       │   └── 5.4ms (0.1%) <init>() at org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap
│   │   │   │   │       │       └── 5.4ms (0.1%) <init>() at org.jetbrains.kotlin.codegen.FrameMapBase
│   │   │   │   │       └── … 3.5ms (0.1%) getTypeMappingModeForParameter(IrTypeSystemContext, IrDeclaration, IrType) at org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper$Companion
│   │   │   │   ├── 30.3ms (0.8%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
│   │   │   │   │   ├── 26.6ms (0.7%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
│   │   │   │   │   │   └── 24.9ms (0.7%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
│   │   │   │   │   │       └── 10.0ms (0.3%) <init>() at org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer
│   │   │   │   │   └── … 3.8ms (0.1%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
│   │   │   │   │       └── 3.8ms (0.1%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
│   │   │   │   ├── 17.9ms (0.5%) accept(MethodVisitor) at org.jetbrains.org.objectweb.asm.tree.MethodNode
│   │   │   │   ├── … 15.7ms (0.4%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
│   │   │   │   └── 9.5ms (0.3%) <init>(SourceMapper, SMAP, MethodVisitor) at org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor
│   │   │   │       └── 6.4ms (0.2%) <init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
│   │   │   │           └── 6.4ms (0.2%) <init>(SourceMapper, SMAP, SourcePosition)
│   │   │   └── … 3.6ms (0.1%) newBuilder() at org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement
│   │   └── … 66.1ms (1.8%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
│   │       ├── … 28.3ms (0.8%, self 0.5%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
│   │       │   └── … 7.9ms (0.2%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
│   │       ├── 8.0ms (0.2%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
│   │       └── 7.4ms (0.2%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
│   └── … 1.34s (36.0%, self 59.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
├── … 495.4ms (13.2%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 365.4ms (9.8%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

|     % |   Time | Contentions | Function                                                                                                                                           | Location                                                                                           |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 59.0% |  2.20s |          39 | `park(boolean, long)`                                                                                                                              | `jdk.internal.misc.Unsafe`                                                                         |
| 32.0% |  1.19s |          85 | `generateMethodNode(IrFunction)`                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  1.3% | 50.5ms |          65 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|  0.5% | 20.4ms |          29 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                            | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                             |
|  0.4% | 14.9ms |          48 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  0.4% | 13.8ms |          46 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                           | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                              |
|  0.3% | 12.4ms |          22 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                       |
|  0.3% | 10.0ms |           4 | `<init>()`                                                                                                                                         | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  0.2% |  7.8ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                             |
|  0.2% |  6.6ms |          18 | `<init>(ClassReader, int)`                                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                      |
|  0.2% |  6.5ms |          17 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                     |
|  0.2% |  6.4ms |           5 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                       | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                              |
|  0.1% |  5.4ms |          21 | `<init>()`                                                                                                                                         | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|  0.1% |  5.0ms |           7 | `createFrameMapWithReceivers(IrFunction)`                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|  0.1% |  4.9ms |          13 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |
|  0.1% |  4.6ms |           1 | `getInlineCallSiteInfo()`                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                               |
|  0.1% |  4.5ms |          11 | `generate()`                                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                         |
|  0.1% |  4.3ms |          31 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |
|  0.1% |  4.2ms |           4 | `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)`                                                                                  | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`                                        |
|  0.1% |  3.6ms |           3 | `newBuilder()`                                                                                                                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`                                        |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |   Time | Contentions | Function                                    | Location                                |
| ----: | -----: | ----------: | ------------------------------------------- | --------------------------------------- |
| 59.0% |  2.20s |          39 | `park(boolean, long)`                       | `jdk.internal.misc.Unsafe`              |
| <0.1% |  0.3ms |           2 | `desiredAssertionStatus()`                  | `java.lang.Class`                       |
| <0.1% |  0.3ms |           4 | `finishEntry(ClassValue, ClassValue$Entry)` | `java.lang.ClassValue$ClassValueMap`    |
| <0.1% |  0.2ms |           5 | `startEntry(ClassValue)`                    | `java.lang.ClassValue$ClassValueMap`    |
| <0.1% |  0.1ms |           2 | `getValue()`                                | `kotlin.SynchronizedLazyImpl`           |
| <0.1% | 38.9µs |           1 | `getId()`                                   | `jdk.jfr.internal.PlatformRecording`    |
| <0.1% | 10.5µs |           1 | `put(Object, Object)`                       | `java.util.Collections$SynchronizedMap` |

##### Ours

|     % |   Time | Contentions | Function                                                                                                                                           | Location                                                                                           |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 32.0% |  1.19s |          85 | `generateMethodNode(IrFunction)`                                                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  1.3% | 50.5ms |          65 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|  0.5% | 20.4ms |          29 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                            | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                                             |
|  0.4% | 14.9ms |          48 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                                            |
|  0.4% | 13.8ms |          46 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                           | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`                              |
|  0.3% | 12.4ms |          22 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                                       |
|  0.3% | 10.0ms |           4 | `<init>()`                                                                                                                                         | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer` |
|  0.2% |  7.8ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                                             |
|  0.2% |  6.6ms |          18 | `<init>(ClassReader, int)`                                                                                                                         | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                      |
|  0.2% |  6.5ms |          17 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`                                     |
|  0.2% |  6.4ms |           5 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                       | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                                              |
|  0.1% |  5.4ms |          21 | `<init>()`                                                                                                                                         | `org.jetbrains.kotlin.codegen.FrameMapBase`                                                        |
|  0.1% |  5.0ms |           7 | `createFrameMapWithReceivers(IrFunction)`                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                                         |
|  0.1% |  4.9ms |          13 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |
|  0.1% |  4.6ms |           1 | `getInlineCallSiteInfo()`                                                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`                               |
|  0.1% |  4.5ms |          11 | `generate()`                                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`                                         |
|  0.1% |  4.3ms |          31 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`                                        |
|  0.1% |  4.2ms |           4 | `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)`                                                                                  | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`                                        |
|  0.1% |  3.6ms |           3 | `newBuilder()`                                                                                                                                     | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`                                        |
|  0.1% |  3.2ms |           4 | `visitMethod(int, String, String, String, String[])`                                                                                               | `org.jetbrains.org.objectweb.asm.ClassWriter`                                                      |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 99.6% | 1.19s |          64 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.3% | 3.2ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
|  0.1% | 1.7ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
| <0.1% | 0.3ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 55.8% | 28.2ms |          15 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 18.9% |  9.5ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
|  8.2% |  4.2ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  8.1% |  4.1ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  4.4% |  2.2ms |          12 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 20.4ms |          29 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 25.5% | 3.8ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 19.1% | 2.8ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |
| 15.6% | 2.3ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |
| 14.6% | 2.2ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:112` |
|  8.8% | 1.3ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:109` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 15.6% | 2.1ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:65` |
| 15.1% | 2.1ms |           5 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |
| 14.2% | 2.0ms |           5 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:47` |
|  9.2% | 1.3ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:56` |
|  7.9% | 1.1ms |           5 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 37.5% | 4.7ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 25.2% | 3.1ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| 16.4% | 2.0ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |
| 15.0% | 1.9ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |
|  4.2% | 0.5ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1551` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |   Time | Contentions | Location                                                                                              |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% | 10.0ms |           4 | `org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer:23` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 97.1% | 7.6ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  2.9% | 0.2ms |           2 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 6.6ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 45.3% | 2.9ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 38.5% | 2.5ms |           7 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 13.6% | 0.9ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
|  2.7% | 0.2ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Location                                                 |
| -----: | ----: | ----------: | -------------------------------------------------------- |
| 100.0% | 6.4ms |           5 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Location                                       |
| -----: | ----: | ----------: | ---------------------------------------------- |
| 100.0% | 5.4ms |          21 | `org.jetbrains.kotlin.codegen.FrameMapBase:26` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |  Time | Contentions | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------- |
| 100.0% | 5.0ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:300` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 53.1% | 2.6ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| 31.7% | 1.6ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |
| 15.2% | 0.7ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |

##### `getInlineCallSiteInfo()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|      % |  Time | Contentions | Location                                                                |
| -----: | ----: | ----------: | ----------------------------------------------------------------------- |
| 100.0% | 4.6ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline:47` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 42.3% | 1.9ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:38`  |
| 36.3% | 1.6ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:35`  |
| 12.6% | 0.6ms |           5 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:37`  |
|  8.8% | 0.4ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:490` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 64.8% | 2.8ms |          23 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| 35.2% | 1.5ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)` (`org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 93.7% | 3.9ms |           3 | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings:450` |
|  6.3% | 0.3ms |           1 | `org.jetbrains.kotlin.codegen.inline.TypeParameterMappings:448` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`)

|      % |  Time | Contentions | Location                                                          |
| -----: | ----: | ----------: | ----------------------------------------------------------------- |
| 100.0% | 3.6ms |           3 | `org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement:28060` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 3.2ms |           4 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|      % |  Time | Contentions | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 0.3ms |           2 | `java.lang.Class:3906` |

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

|      % |  Time | Contentions | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 0.3ms |           4 | `java.lang.ClassValue$ClassValueMap:476` |

##### `startEntry(ClassValue)` (`java.lang.ClassValue$ClassValueMap`)

|      % |  Time | Contentions | Location                                 |
| -----: | ----: | ----------: | ---------------------------------------- |
| 100.0% | 0.2ms |           5 | `java.lang.ClassValue$ClassValueMap:440` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|      % |  Time | Contentions | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 0.1ms |           2 | `kotlin.SynchronizedLazyImpl:81` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |   Time | Contentions | Location                                 |
| -----: | -----: | ----------: | ---------------------------------------- |
| 100.0% | 38.9µs |           1 | `jdk.jfr.internal.PlatformRecording:433` |

##### `put(Object, Object)` (`java.util.Collections$SynchronizedMap`)

|      % |   Time | Contentions | Location                                     |
| -----: | -----: | ----------: | -------------------------------------------- |
| 100.0% | 10.5µs |           1 | `java.util.Collections$SynchronizedMap:2897` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller                    | Location                                 |
| ----: | ------: | ----------: | ------------------------- | ---------------------------------------- |
| 61.0% |   1.34s |          26 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 22.4% | 495.8ms |           3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 16.6% | 366.5ms |          10 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Caller                                      | Location                                                             |
| ----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 94.7% |  1.13s |          83 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  5.3% | 63.8ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 50.5ms |          65 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 20.4ms |          29 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 14.9ms |          48 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 13.8ms |          46 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |   Time | Contentions | Caller                         | Location                                                     |
| -----: | -----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 12.4ms |          22 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`)

|      % |   Time | Contentions | Caller                                                                                   | Location                                                              |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 100.0% | 10.0ms |           4 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 7.8ms |          20 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 6.6ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 6.5ms |          17 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ----: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 6.4ms |           5 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`)

|      % |  Time | Contentions | Caller     | Location                                              |
| -----: | ----: | ----------: | ---------- | ----------------------------------------------------- |
| 100.0% | 5.4ms |          21 | `<init>()` | `org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |  Time | Contentions | Caller                                    | Location                                                   |
| -----: | ----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 5.0ms |           7 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.9ms |          13 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `getInlineCallSiteInfo()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`)

|      % |  Time | Contentions | Caller                                                               | Location                                                   |
| -----: | ----: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 4.6ms |           1 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 4.5ms |          11 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.3ms |          31 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `<init>(TypeSystemCommonBackendContext, Map, boolean, Function2)` (`org.jetbrains.kotlin.codegen.inline.TypeParameterMappings`)

|      % |  Time | Contentions | Caller                                                                                | Location                                                     |
| -----: | ----: | ----------: | ------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 4.2ms |           4 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$VersionRequirement`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                                            |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% | 3.6ms |           3 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 3.2ms |           4 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `desiredAssertionStatus()` (`java.lang.Class`)

|     % |   Time | Contentions | Caller       | Location                                                          |
| ----: | -----: | ----------: | ------------ | ----------------------------------------------------------------- |
| 89.8% |  0.3ms |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.RemapVisitor`                |
| 10.2% | 34.3µs |           1 | `<clinit>()` | `org.jetbrains.kotlin.codegen.inline.InternalFinallyBlockInliner` |

##### `finishEntry(ClassValue, ClassValue$Entry)` (`java.lang.ClassValue$ClassValueMap`)

|      % |  Time | Contentions | Caller                  | Location               |
| -----: | ----: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 0.3ms |           4 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `startEntry(ClassValue)` (`java.lang.ClassValue$ClassValueMap`)

|      % |  Time | Contentions | Caller                  | Location               |
| -----: | ----: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 0.2ms |           5 | `getFromHashMap(Class)` | `java.lang.ClassValue` |

##### `getValue()` (`kotlin.SynchronizedLazyImpl`)

|     % |  Time | Contentions | Caller                              | Location                                                             |
| ----: | ----: | ----------: | ----------------------------------- | -------------------------------------------------------------------- |
| 99.3% | 0.1ms |           1 | `getFIELD_FOR_ENUM_ENTRY()`         | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |
|  0.7% | 0.4µs |           1 | `getGENERATED_SAM_IMPLEMENTATION()` | `org.jetbrains.kotlin.ir.declarations.IrDeclarationOrigin$Companion` |

##### `getId()` (`jdk.jfr.internal.PlatformRecording`)

|      % |   Time | Contentions | Caller    | Location            |
| -----: | -----: | ----------: | --------- | ------------------- |
| 100.0% | 38.9µs |           1 | `getId()` | `jdk.jfr.Recording` |

##### `put(Object, Object)` (`java.util.Collections$SynchronizedMap`)

|      % |   Time | Contentions | Caller                                         | Location                                        |
| -----: | -----: | ----------: | ---------------------------------------------- | ----------------------------------------------- |
| 100.0% | 10.5µs |           1 | `newVisitor(JvmDeclarationOrigin, Type, List)` | `org.jetbrains.kotlin.codegen.ClassFileFactory` |

### Total time

Functions with the most time blocked within the function and its callees.

|     % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 90.2% |   3.37s |       1,169 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 90.2% |   3.37s |       1,169 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| 77.0% |   2.88s |       1,167 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 77.0% |   2.88s |       1,167 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 59.0% |   2.20s |          39 | `park(boolean, long)`                                                                                             | `jdk.internal.misc.Unsafe`                                                        |
| 45.8% |   1.71s |          27 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)`                                                                     | `java.util.concurrent.ForkJoinPool`                                               |
| 45.8% |   1.71s |          27 | `managedBlock(ForkJoinPool$ManagedBlocker)`                                                                       | `java.util.concurrent.ForkJoinPool`                                               |
| 41.0% |   1.53s |       1,132 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 41.0% |   1.53s |       1,132 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0` |
| 41.0% |   1.53s |       1,132 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| 41.0% |   1.53s |       1,131 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 39.0% |   1.45s |         862 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 38.5% |   1.44s |         827 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 36.5% |   1.36s |         578 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 36.0% |   1.34s |          34 | `take()`                                                                                                          | `java.util.concurrent.LinkedBlockingQueue`                                        |
| 36.0% |   1.34s |          34 | `getTask()`                                                                                                       | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 36.0% |   1.34s |          33 | `await()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`           |
| 36.0% |   1.34s |          26 | `park()`                                                                                                          | `java.util.concurrent.locks.LockSupport`                                          |
| 36.0% |   1.34s |          26 | `block()`                                                                                                         | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`             |
| 13.2% | 495.8ms |           3 | `parkNanos(Object, long)`                                                                                         | `java.util.concurrent.locks.LockSupport`                                          |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|     % |    Time | Contentions | Function                                      | Location                                                                |
| ----: | ------: | ----------: | --------------------------------------------- | ----------------------------------------------------------------------- |
| 90.2% |   3.37s |       1,169 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                                      |
| 90.2% |   3.37s |       1,169 | `run()`                                       | `java.lang.Thread`                                                      |
| 77.0% |   2.88s |       1,167 | `runWorker(ThreadPoolExecutor$Worker)`        | `java.util.concurrent.ThreadPoolExecutor`                               |
| 77.0% |   2.88s |       1,167 | `run()`                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
| 59.0% |   2.20s |          39 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`                                              |
| 45.8% |   1.71s |          27 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool`                                     |
| 45.8% |   1.71s |          27 | `managedBlock(ForkJoinPool$ManagedBlocker)`   | `java.util.concurrent.ForkJoinPool`                                     |
| 41.0% |   1.53s |       1,132 | `run()`                                       | `java.util.concurrent.CompletableFuture$AsyncRun`                       |
| 36.0% |   1.34s |          34 | `take()`                                      | `java.util.concurrent.LinkedBlockingQueue`                              |
| 36.0% |   1.34s |          34 | `getTask()`                                   | `java.util.concurrent.ThreadPoolExecutor`                               |
| 36.0% |   1.34s |          33 | `await()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 36.0% |   1.34s |          26 | `park()`                                      | `java.util.concurrent.locks.LockSupport`                                |
| 36.0% |   1.34s |          26 | `block()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
| 13.2% | 495.8ms |           3 | `parkNanos(Object, long)`                     | `java.util.concurrent.locks.LockSupport`                                |
| 13.2% | 495.4ms |           2 | `await(long, TimeUnit)`                       | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 13.2% | 495.4ms |           2 | `await(long)`                                 | `java.lang.ref.ReferenceQueue`                                          |
| 13.2% | 495.4ms |           2 | `remove0(long)`                               | `java.lang.ref.ReferenceQueue`                                          |
| 13.2% | 495.4ms |           2 | `remove(long)`                                | `java.lang.ref.ReferenceQueue`                                          |
| 13.2% | 495.4ms |           2 | `run()`                                       | `jdk.internal.ref.CleanerImpl`                                          |
| 13.2% | 495.4ms |           2 | `run()`                                       | `jdk.internal.misc.InnocuousThread`                                     |

##### Ours

|     % |    Time | Contentions | Function                                                                                                                                                                    | Location                                                                          |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 41.0% |   1.53s |       1,132 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)`                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 41.0% |   1.53s |       1,132 | `run()`                                                                                                                                                                     | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0` |
| 41.0% |   1.53s |       1,131 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 39.0% |   1.45s |         862 | `generate()`                                                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 38.5% |   1.44s |         827 | `generateMethod(IrFunction, SourceMapper)`                                                                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 36.5% |   1.36s |         578 | `generateMethodNode(IrFunction)`                                                                                                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  9.8% | 365.9ms |           2 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  9.8% | 365.9ms |           2 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`               |
|  9.8% | 365.9ms |           2 | `executePhase(JvmFir2IrPipelineArtifact)`                                                                                                                                   | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |
|  9.8% | 365.9ms |           2 | `executePhase(PipelineArtifact)`                                                                                                                                            | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`                   |
|  9.8% | 365.9ms |           2 | `phaseBody(PipelineContext, PipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                 |
|  9.8% | 365.9ms |           2 | `phaseBody(LoggingContext, Object)`                                                                                                                                         | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase`                                 |
|  9.8% | 365.9ms |           2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`                           |
|  9.8% | 365.9ms |           2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)`                                                                                                                  | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase`                       |
|  9.8% | 365.9ms |           2 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)`                                                                                                        | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`                              |
|  9.8% | 365.9ms |           2 | `runPhasedPipeline(ArgumentsPipelineArtifact)`                                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 365.9ms |           2 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)`                                                                         | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 365.9ms |           2 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)`                               | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 365.9ms |           2 | `execute(CommonCompilerArguments, Services, MessageCollector)`                                                                                                              | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`                           |
|  9.8% | 365.9ms |           2 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)`                                                                                                       | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 3.37s |       1,169 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|     % |    Time | Contentions | Caller  | Location                            |
| ----: | ------: | ----------: | ------- | ----------------------------------- |
| 14.7% | 495.4ms |           2 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 2.88s |       1,167 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 2.88s |       1,167 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Contentions | Caller                    | Location                                 |
| ----: | ------: | ----------: | ------------------------- | ---------------------------------------- |
| 61.0% |   1.34s |          26 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 22.4% | 495.8ms |           3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 16.6% | 366.5ms |          10 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Caller                                      | Location                            |
| -----: | ----: | ----------: | ------------------------------------------- | ----------------------------------- |
| 100.0% | 1.71s |          27 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Caller                | Location                                                                |
| ----: | ------: | ----------: | --------------------- | ----------------------------------------------------------------------- |
| 78.7% |   1.34s |          26 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 21.3% | 365.4ms |           1 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.53s |       1,132 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.53s |       1,132 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.53s |       1,132 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.53s |       1,131 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.45s |         862 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.44s |         827 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.36s |         578 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   4.7% | 63.8ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Contentions | Caller      | Location                                  |
| -----: | ----: | ----------: | ----------- | ----------------------------------------- |
| 100.0% | 1.34s |          34 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.34s |          34 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |  Time | Contentions | Caller   | Location                                   |
| -----: | ----: | ----------: | -------- | ------------------------------------------ |
| 100.0% | 1.34s |          33 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Caller    | Location                                                              |
| -----: | ----: | ----------: | --------- | --------------------------------------------------------------------- |
| 100.0% | 1.34s |          26 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Contentions | Caller                                        | Location                            |
| -----: | ----: | ----------: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.34s |          26 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|     % |    Time | Contentions | Caller                  | Location                                                                |
| ----: | ------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| 99.9% | 495.4ms |           2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  0.1% |   0.5ms |           1 | `awaitNanos(long)`      | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Contentions | Caller        | Location                       |
| -----: | ------: | ----------: | ------------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Caller          | Location                       |
| -----: | ------: | ----------: | --------------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Caller         | Location                       |
| -----: | ------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Caller  | Location                       |
| -----: | ------: | ----------: | ------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Contentions | Caller                      | Location           |
| -----: | ------: | ----------: | --------------------------- | ------------------ |
| 100.0% | 495.4ms |           2 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |    Time | Contentions | Caller                                                                                                                                                                      | Location                                                            |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

|      % |    Time | Contentions | Caller                                    | Location                                                        |
| -----: | ------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Caller                           | Location                                                        |
| -----: | ------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Caller                                         | Location                                          |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Caller                              | Location                                          |
| -----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Caller                                                     | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % |    Time | Contentions | Caller                                                     | Location                                                    |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % |    Time | Contentions | Caller                                                               | Location                                             |
| -----: | ------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % |    Time | Contentions | Caller                                         | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                                                              | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                                                                                                        | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                         | Location                                                |
| -----: | ------: | ----------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Caller                                                                | Location                                     |
| -----: | ------: | ----------: | --------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 365.9ms |           2 | `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Time | Contentions | Caller                                                                 | Location                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 365.9ms |           2 | `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.jvm.K2JVMCompiler` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |    Time | Contentions | Callee  | Location                                         |
| ----: | ------: | ----------: | ------- | ------------------------------------------------ |
| 85.3% |   2.88s |       1,167 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |
| 14.7% | 495.4ms |           2 | `run()` | `jdk.internal.ref.CleanerImpl`                   |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 3.37s |       1,169 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |   Time | Contentions | Callee                                                  | Location                                          |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------- |
| 53.2% |  1.53s |       1,132 | `run()`                                                 | `java.util.concurrent.CompletableFuture$AsyncRun` |
| 46.8% |  1.34s |          34 | `getTask()`                                             | `java.util.concurrent.ThreadPoolExecutor`         |
| <0.1% | 26.6µs |           1 | `processWorkerExit(ThreadPoolExecutor$Worker, boolean)` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 2.88s |       1,167 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Contentions | Callee    | Location                                                              |
| ----: | ------: | ----------: | --------- | --------------------------------------------------------------------- |
| 78.7% |   1.34s |          26 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
| 21.3% | 365.4ms |           1 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Contentions | Callee                                        | Location                            |
| -----: | ----: | ----------: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.71s |          27 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Callee                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.53s |       1,131 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  <0.1% | 0.5ms |           1 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.53s |       1,132 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.53s |       1,132 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.2% |  1.45s |         862 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.3% | 66.1ms |         249 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                  | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 98.8% |  1.44s |         827 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  1.2% | 16.9ms |          25 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.7ms |           1 | `visitSMAP(SourceMapper, boolean, boolean)`             | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`   |
| <0.1% |  0.5ms |           9 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                            |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 94.7% |  1.36s |         578 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  2.1% | 30.3ms |          68 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
|  1.2% | 17.9ms |         110 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
|  1.2% | 17.0ms |          49 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  0.7% |  9.5ms |          10 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 17.0% | 231.4ms |         495 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Contentions | Callee                | Location                                                                |
| -----: | ----: | ----------: | --------------------- | ----------------------------------------------------------------------- |
| 100.0% | 1.34s |          33 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  <0.1% | 0.1ms |           1 | `lockInterruptibly()` | `java.util.concurrent.locks.ReentrantLock`                              |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Callee   | Location                                   |
| -----: | ----: | ----------: | -------- | ------------------------------------------ |
| 100.0% | 1.34s |          34 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|     % |  Time | Contentions | Callee                                            | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 1.34s |          26 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
|  0.1% | 0.9ms |           7 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Contentions | Callee                | Location                   |
| -----: | ----: | ----------: | --------------------- | -------------------------- |
| 100.0% | 1.34s |          26 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Contentions | Callee   | Location                                 |
| -----: | ----: | ----------: | -------- | ---------------------------------------- |
| 100.0% | 1.34s |          26 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Contentions | Callee                | Location                   |
| -----: | ------: | ----------: | --------------------- | -------------------------- |
| 100.0% | 495.8ms |           3 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Contentions | Callee                    | Location                                 |
| -----: | ------: | ----------: | ------------------------- | ---------------------------------------- |
| 100.0% | 495.4ms |           2 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Callee                  | Location                                                                |
| -----: | ------: | ----------: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% | 495.4ms |           2 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Callee        | Location                       |
| -----: | ------: | ----------: | ------------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Contentions | Callee          | Location                       |
| -----: | ------: | ----------: | --------------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Contentions | Callee         | Location                       |
| -----: | ------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 495.4ms |           2 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % |    Time | Contentions | Callee  | Location           |
| -----: | ------: | ----------: | ------- | ------------------ |
| 100.0% | 495.4ms |           2 | `run()` | `java.lang.Thread` |

##### `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |    Time | Contentions | Callee                             | Location                                  |
| ----: | ------: | ----------: | ---------------------------------- | ----------------------------------------- |
| 99.9% | 365.4ms |           1 | `get()`                            | `java.util.concurrent.CompletableFuture`  |
|  0.1% |   0.5ms |           1 | `awaitTermination(long, TimeUnit)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`)

|      % |    Time | Contentions | Callee                                            | Location                                               |
| -----: | ------: | ----------: | ------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 365.9ms |           2 | `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Callee                                                                                                                                                                      | Location                                                            |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` | `org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler` |

##### `executePhase(PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`)

|      % |    Time | Contentions | Callee                                    | Location                                                        |
| -----: | ------: | ----------: | ----------------------------------------- | --------------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executePhase(JvmFir2IrPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Callee                           | Location                                                        |
| -----: | ------: | ----------: | -------------------------------- | --------------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executePhase(PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase` |

##### `phaseBody(LoggingContext, Object)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`)

|      % |    Time | Contentions | Callee                                         | Location                                          |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `phaseBody(PipelineContext, PipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`)

|      % |    Time | Contentions | Callee                              | Location                                          |
| -----: | ------: | ----------: | ----------------------------------- | ------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `phaseBody(LoggingContext, Object)` | `org.jetbrains.kotlin.cli.pipeline.PipelinePhase` |

##### `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`)

|      % |    Time | Contentions | Callee                                                     | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.NamedCompilerPhase` |

##### `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`)

|      % |    Time | Contentions | Callee                                                     | Location                                                    |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` | `org.jetbrains.kotlin.backend.common.phaser.CompositePhase` |

##### `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                                               | Location                                             |
| -----: | ------: | ----------: | -------------------------------------------------------------------- | ---------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` | `org.jetbrains.kotlin.config.phaser.CompilerPhaseKt` |

##### `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                         | Location                                                |
| -----: | ------: | ----------: | ---------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `runPhasedPipeline(ArgumentsPipelineArtifact)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                                                                              | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `execute(CommonCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`)

|      % |    Time | Contentions | Callee                                                                                                                                        | Location                                                |
| -----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

##### `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`)

|      % |    Time | Contentions | Callee                                                         | Location                                                |
| -----: | ------: | ----------: | -------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 365.9ms |           2 | `execute(CommonCompilerArguments, Services, MessageCollector)` | `org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 36.0% |   1.34s |          26 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 30.3% |   1.13s |          83 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 13.2% | 495.4ms |           2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  9.8% | 365.4ms |           1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
|  1.7% |  63.8ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |  50.5ms |          65 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.5% |  20.4ms |          29 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |  14.9ms |          48 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.4% |  13.8ms |          46 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.3% |  10.0ms |           4 | `<init>()` (`org.jetbrains.kotlin.codegen.optimization.temporaryVals.TemporaryVariablesEliminationTransformer`) ← `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |   8.7ms |          14 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.2% |   7.8ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.2% |   6.6ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.2% |   6.5ms |          17 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018b4680`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.2% |   6.4ms |           5 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |   5.4ms |          21 | `<init>()` (`org.jetbrains.kotlin.codegen.FrameMapBase`) ← `<init>()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrFrameMap`) ← `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |   5.0ms |           7 | `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |   4.9ms |          13 | `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   4.6ms |           1 | `getInlineCallSiteInfo()` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.1% |   4.5ms |          11 | `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad9b0`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
