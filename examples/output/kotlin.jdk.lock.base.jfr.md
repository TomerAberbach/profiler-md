# Lock contention profile

Blocked 2.36s over 697 contentions (3.4ms per contention).

| Category         |      % |  Time | Contentions |
| ---------------- | -----: | ----: | ----------: |
| Ours             | 100.0% | 2.36s |         689 |
| Standard library |  <0.1% | 0.7ms |           8 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 2.36s (100.0%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 2.25s (95.2%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 2.20s (93.2%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.99s (84.3%, self 70.0%) generateMethodNode(IrFunction)
    │   │   │   └── … 338.2ms (14.3%, self 3.0%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 162.1ms (6.9%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   ├── … 134.4ms (5.7%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   ├── … 67.2ms (2.8%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │   └── … 37.5ms (1.6%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │       │   │   │       └── 35.1ms (1.5%) genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │   │   │           └── … 22.5ms (1.0%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │   │   │               └── 12.4ms (0.5%, self 0.5%) doInline(MethodNode)
    │   │   │       │   │   ├── … 53.9ms (2.3%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   │   │   ├── … 36.0ms (1.5%) inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen
    │   │   │       │   │   │   │   └── 31.5ms (1.3%) 4 more callees, led by (1.2%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │   │   │   └── 10.4ms (0.4%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │   │   └── 7.6ms (0.3%) accept(IrVisitor, Object) at org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall
    │   │   │       │   └── 22.3ms (0.9%) 6 more callees, led by (0.4%) accept(IrVisitor, Object) at org.jetbrains.kotlin.ir.expressions.IrWhen
    │   │   │       ├── 17.5ms (0.7%) generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)
    │   │   │       ├── 15.2ms (0.6%) createFrameMapWithReceivers(IrFunction)
    │   │   │       └── 60.9ms (2.6%) 9 more callees, led by (1.1%) calculateMethodFlags(IrFunction)
    │   │   ├── … 81.7ms (3.5%, self 1.4%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   ├── 35.6ms (1.5%, self 0.8%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   │   │   └── 10.9ms (0.5%) createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion
    │   │   │   │       └── 10.9ms (0.5%) createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)
    │   │   │   └── 12.8ms (0.5%) 2 more callees, led by (0.5%) <init>(FirSession, JvmSerializationBindings, GenerationState, List, AbstractTypeApproximator, Fir2IrComponents, FirElementAwareStringTable) at org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension
    │   │   ├── … 67.0ms (2.8%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.transformer.CompositeMethodTransformer
    │   │   │   └── 67.0ms (2.8%) 11 more callees, led by (0.7%) transform(String, MethodNode) at org.jetbrains.kotlin.codegen.optimization.fixStack.FixStackMethodTransformer
    │   │   ├── 37.2ms (1.6%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
    │   │   │   ├── 27.2ms (1.2%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
    │   │   │   │   └── 18.9ms (0.8%, self 0.8%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   └── … 10.0ms (0.4%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
    │   │   │       └── 10.0ms (0.4%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
    │   │   └── … 11.3ms (0.5%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
    │   └── 46.8ms (2.0%) 2 more callees, led by (2.0%) generateAnnotations()
    └── … 102.3ms (4.3%, self 0.7%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── … 39.3ms (1.7%, self 1.2%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │   └── … 11.5ms (0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 12.0ms (0.5%, self 0.5%) getDescriptorOrigin(IrDeclaration) at org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt
        └── 31.9ms (1.3%) 5 more callees, led by (0.7%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |   Time | Contentions | Function                                                                                                                                                            | Location                                                                |
| ----: | -----: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 70.0% |  1.66s |          76 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  3.0% | 70.8ms |          23 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  1.4% | 33.3ms |          18 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  1.2% | 27.8ms |          10 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                  |
|  0.8% | 19.0ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`          |
|  0.8% | 17.9ms |          12 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`   |
|  0.7% | 17.5ms |           8 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)`                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  0.7% | 17.3ms |          60 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                 |
|  0.6% | 15.0ms |          12 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                     |
|  0.6% | 14.5ms |           8 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                                      | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
|  0.5% | 12.0ms |           8 | `getDescriptorOrigin(IrDeclaration)`                                                                                                                                | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`  |
|  0.5% | 11.6ms |          18 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                  |
|  0.5% | 11.5ms |          18 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |
|  0.5% | 11.3ms |          11 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                   |
|  0.5% | 10.8ms |           2 | `createFrameMapWithReceivers(IrFunction)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`              |
|  0.4% | 10.0ms |           4 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                           |
|  0.4% | 10.0ms |          12 | `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)`                                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`              |
|  0.4% |  9.6ms |           3 | `visitWhen(IrWhen, BlockInfo)`                                                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`            |
|  0.4% |  9.6ms |           3 | `newBuilder()`                                                                                                                                                      | `org.jetbrains.kotlin.metadata.ProtoBuf$Type`                           |
|  0.4% |  9.2ms |           7 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`            |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 99.8% | 1.65s |          71 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.2% | 2.6ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
|  0.1% | 1.0ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |
| <0.1% | 0.5ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 62.9% | 44.6ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 18.1% | 12.8ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:140` |
|  7.8% |  5.5ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
|  5.6% |  4.0ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:143` |
|  4.9% |  3.5ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |   Time | Contentions | Location                                                          |
| ----: | -----: | ----------: | ----------------------------------------------------------------- |
| 35.8% | 11.9ms |           6 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 28.3% |  9.4ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |
| 21.3% |  7.1ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
| 14.6% |  4.9ms |           6 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 27.8ms |          10 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |   Time | Contentions | Location                                                           |
| -----: | -----: | ----------: | ------------------------------------------------------------------ |
| 100.0% | 19.0ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |   Time | Contentions | Location                                                                 |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ |
| 76.0% | 13.6ms |           4 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:63` |
|  9.6% |  1.7ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:59` |
|  5.4% |  1.0ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:64` |
|  3.7% |  0.7ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:60` |
|  2.7% |  0.5ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:61` |

##### `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 85.4% | 14.9ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:356` |
|  8.2% |  1.4ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:340` |
|  6.5% |  1.1ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:338` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 25.4% | 4.4ms |          15 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:112` |
| 22.0% | 3.8ms |          18 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 17.5% | 3.0ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:121` |
| 16.6% | 2.9ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |
|  6.6% | 1.1ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |  Time | Contentions | Location                                                |
| ----: | ----: | ----------: | ------------------------------------------------------- |
| 42.3% | 6.3ms |           5 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 27.2% | 4.1ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |
| 13.8% | 2.1ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
|  8.7% | 1.3ms |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  7.9% | 1.2ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

|      % |   Time | Contentions | Location                                                                     |
| -----: | -----: | ----------: | ---------------------------------------------------------------------------- |
| 100.0% | 14.5ms |           8 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion:1394` |

##### `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`)

|     % |  Time | Contentions | Location                                                                  |
| ----: | ----: | ----------: | ------------------------------------------------------------------------- |
| 76.1% | 9.1ms |           7 | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt:39` |
| 23.9% | 2.9ms |           1 | `org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt:44` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |   Time | Contentions | Location                                                   |
| -----: | -----: | ----------: | ---------------------------------------------------------- |
| 100.0% | 11.6ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |   Time | Contentions | Location                                          |
| -----: | -----: | ----------: | ------------------------------------------------- |
| 100.0% | 11.5ms |          18 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |   Time | Contentions | Location                                                 |
| -----: | -----: | ----------: | -------------------------------------------------------- |
| 100.0% | 11.3ms |          11 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Location                                                       |
| -----: | -----: | ----------: | -------------------------------------------------------------- |
| 100.0% | 10.8ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:300` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |   Time | Contentions | Location                                          |
| -----: | -----: | ----------: | ------------------------------------------------- |
| 100.0% | 10.0ms |           4 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 42.5% | 4.2ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:319` |
| 38.1% | 3.8ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:330` |
| 13.1% | 1.3ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:341` |
|  6.2% | 0.6ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen:331` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Location                                                          |
| -----: | ----: | ----------: | ----------------------------------------------------------------- |
| 100.0% | 9.6ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1014` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % |  Time | Contentions | Location                                           |
| -----: | ----: | ----------: | -------------------------------------------------- |
| 100.0% | 9.6ms |           3 | `org.jetbrains.kotlin.metadata.ProtoBuf$Type:6336` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 57.5% | 5.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 31.9% | 2.9ms |           3 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| 10.6% | 1.0ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Caller                                      | Location                                                             |
| ----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 89.1% |   1.48s |          74 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
| 10.9% | 180.0ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 70.8ms |          23 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |   Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 33.3ms |          18 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 27.8ms |          10 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |   Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 19.0ms |           4 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |   Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 17.9ms |          12 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                    | Location                                                   |
| -----: | -----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 17.5ms |           8 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 17.3ms |          60 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |   Time | Contentions | Caller                                                         | Location                                            |
| -----: | -----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 15.0ms |          12 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`)

|     % |   Time | Contentions | Caller                                                                                                                                                                              | Location                                                                |
| ----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 75.4% | 10.9ms |           6 | `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |
| 24.6% |  3.6ms |           2 | `create(FirSession, ScopeSession, FirClass, FirSerializerExtension, FirElementSerializer, AbstractTypeApproximator, LanguageVersionSettings, boolean)`                              | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion` |

##### `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`)

|      % |   Time | Contentions | Caller                                                 | Location                                                |
| -----: | -----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 12.0ms |           8 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |   Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 11.6ms |          18 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |   Time | Contentions | Caller        | Location                                      |
| -----: | -----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 11.5ms |          18 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |   Time | Contentions | Caller                                                                      | Location                                              |
| -----: | -----: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 11.3ms |          11 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                    | Location                                                   |
| -----: | -----: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 10.8ms |           2 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |   Time | Contentions | Caller                                                                   | Location                                            |
| -----: | -----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 10.0ms |           4 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`)

|      % |   Time | Contentions | Caller                                                                                    | Location                                                   |
| -----: | -----: | ----------: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 10.0ms |          12 | `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen` |

##### `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                      | Location                                                     |
| -----: | ----: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 9.6ms |           3 | `visitWhen(IrWhen, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`)

|      % |  Time | Contentions | Caller                                                                                 | Location                                                      |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 9.6ms |           3 | `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 9.2ms |           7 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   2.36s |         696 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 100.0% |   2.36s |         696 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798` |
| 100.0% |   2.36s |         696 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
| 100.0% |   2.36s |         696 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   2.36s |         696 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 100.0% |   2.36s |         696 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   2.36s |         696 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
| 100.0% |   2.36s |         690 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  95.2% |   2.25s |         508 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.2% |   2.20s |         479 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  84.3% |   1.99s |         319 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  21.9% | 518.1ms |         244 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  21.9% | 518.1ms |         244 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  21.9% | 518.1ms |         244 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  15.0% | 353.7ms |         137 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  13.9% | 328.3ms |         115 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   2.36s |         696 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 100.0% |   2.36s |         696 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798` |
| 100.0% |   2.36s |         690 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  95.2% |   2.25s |         508 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  93.2% |   2.20s |         479 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  84.3% |   1.99s |         319 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  21.9% | 518.1ms |         244 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  21.9% | 518.1ms |         244 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  21.9% | 518.1ms |         244 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  15.0% | 353.7ms |         137 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  14.5% | 342.0ms |         120 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  13.9% | 328.3ms |         115 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.9% | 328.3ms |         115 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  13.9% | 328.3ms |         115 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
|  12.5% | 295.6ms |          97 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  12.5% | 295.6ms |          97 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  12.5% | 295.6ms |          97 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 2.36s |         696 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 2.36s |         696 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 2.36s |         696 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 2.36s |         696 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 2.36s |         696 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 2.36s |         696 | `run()` | `java.lang.Thread` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.36s |         690 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.25s |         508 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 2.20s |         479 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |    Time | Contentions | Caller                                      | Location                                                             |
| -----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |   1.99s |         319 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   9.0% | 180.0ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 518.1ms |         244 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 518.1ms |         244 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 518.1ms |         244 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 353.7ms |         137 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   5.5% |  18.8ms |           9 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 342.0ms |         120 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 342.0ms |         120 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 328.3ms |         115 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 328.3ms |         115 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 328.3ms |         115 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 295.6ms |          97 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                     |
| -----: | ------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 295.6ms |          97 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |    Time | Contentions | Caller                                                     | Location                                                     |
| ----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 80.1% | 236.8ms |          49 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 19.8% |  58.6ms |          47 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.1% |   0.3ms |           1 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Callee                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.36s |         690 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  <0.1% | 0.4ms |           6 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 2.36s |         696 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 2.36s |         696 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Callee  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 2.36s |         696 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 2.36s |         696 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 2.36s |         696 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 2.36s |         696 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |    Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | ------: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.2% |   2.25s |         508 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.3% | 102.3ms |         164 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                  | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- | ------------------------------------------------------- |
| 97.9% |  2.20s |         479 | `generateMethod(IrFunction, SourceMapper)`              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  2.1% | 46.6ms |          26 | `generateAnnotations()`                                 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
| <0.1% |  0.2ms |           3 | `shouldSkipCodeGenerationAccordingToGenerationFilter()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                            |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 90.5% |  1.99s |         319 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  4.0% | 87.4ms |          43 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  3.3% | 72.4ms |          82 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
|  1.7% | 37.2ms |          22 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
|  0.5% | 12.0ms |          12 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 26.0% | 518.1ms |         244 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |
| <0.1% |   0.1ms |           1 | `<clinit>()`                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                                                                               | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 68.3% | 353.7ms |         137 | `generate()`                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  5.1% |  26.6ms |          24 | `calculateMethodFlags(IrFunction)`                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  3.4% |  17.5ms |           8 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.9% |  15.2ms |           4 | `createFrameMapWithReceivers(IrFunction)`                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.1% |  10.9ms |          20 | `mapSignatureWithGeneric(IrFunction)`                                                                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 518.1ms |         244 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 518.1ms |         244 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                             | Location                                                     |
| ----: | ------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| 96.7% | 342.0ms |         120 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  1.9% |   6.6ms |           5 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.8% |   2.7ms |           2 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.2% |   0.8ms |           5 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 96.0% | 328.3ms |         115 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn`           |
|  2.8% |   9.6ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
|  1.4% |   4.7ms |           5 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|  1.3% |   4.5ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`        |
|  1.3% |   4.5ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 342.0ms |         120 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 342.0ms |         120 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 75.3% | 247.2ms |          60 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 17.8% |  58.6ms |          47 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  2.9% |   9.4ms |           2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |
|  2.3% |   7.6ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|  1.7% |   5.6ms |           3 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 328.3ms |         115 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 328.3ms |         115 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 88.1% | 260.6ms |          76 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
|  5.9% |  17.4ms |          10 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  4.8% |  14.3ms |           8 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  1.0% |   3.1ms |           1 | `getSuspensionPointKind(IrFunctionAccessExpression)`                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  0.1% |   0.3ms |           1 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                         | Location                                                     |
| -----: | ------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 295.6ms |          97 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |    Time | Contentions | Callee                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 295.6ms |          97 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x00000070018ad798`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----: | ------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 62.4% |   1.48s |          74 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  7.6% | 180.0ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                  |
|  3.0% |  70.8ms |          23 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% |  33.3ms |          18 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018af840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.2% |  27.8ms |          10 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |  19.0ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018af840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  17.9ms |          12 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.7% |  17.5ms |           8 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.7% |  17.3ms |          60 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.5% |  12.0ms |           8 | `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`) ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` ← `doInline(MethodVisitor, LocalVarRemapper, boolean, Map)` ← `inlineCall(SMAPAndMethodNode, boolean, IrFunctionAccessExpression)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  0.5% |  12.0ms |           8 | `getDescriptorOrigin(IrDeclaration)` (`org.jetbrains.kotlin.backend.jvm.extensions.JvmIrDeclarationOriginKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.5% |  11.6ms |          18 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |  11.5ms |          18 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.5% |  11.3ms |          11 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.5% |  10.9ms |           6 | `createTopLevel(FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer$Companion`) ← `createTopLevel$default(FirElementSerializer$Companion, FirSession, ScopeSession, FirSerializerExtension, AbstractTypeApproximator, LanguageVersionSettings, boolean, int, Object)` ← `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000070018af840`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.5% |  10.8ms |           2 | `createFrameMapWithReceivers(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.4% |  10.0ms |           4 | `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.AbstractClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% |   9.6ms |           3 | `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.4% |   9.2ms |          18 | `<init>(BothSignatureWriter$Mode)` (`org.jetbrains.kotlin.codegen.signature.BothSignatureWriter`) ← `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.4% |   9.1ms |           2 | `newBuilder()` (`org.jetbrains.kotlin.metadata.ProtoBuf$Type`) ← `typeOrTypealiasProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `typeOrTypealiasProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, boolean, int, Object)` ← `typeProto(ConeKotlinType, boolean, FirTypeRef, boolean, boolean)` ← `typeProto$default(FirElementSerializer, ConeKotlinType, boolean, FirTypeRef, boolean, boolean, int, Object)` ← `typeProto(FirTypeRef, boolean)` ← `functionProto(FirFunction)` ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000007001917d60`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

# Thread park profile

Parked 3.18s over 45 parks (70.6ms per park).

| Category         |      % |  Time | Parks |
| ---------------- | -----: | ----: | ----: |
| Standard library | 100.0% | 3.18s |    45 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── 1.75s (55.0%) run() at java.lang.Thread
│   └── 1.75s (55.0%) runWith(Object, Runnable)
│       └── 1.75s (55.0%) run() at java.util.concurrent.ThreadPoolExecutor$Worker
│           └── 1.75s (55.0%) runWorker(ThreadPoolExecutor$Worker) at java.util.concurrent.ThreadPoolExecutor
│               └── 1.75s (55.0%) getTask()
│                   └── 1.75s (55.0%) take() at java.util.concurrent.LinkedBlockingQueue
│                       └── 1.75s (55.0%) await() at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
│                           └── 1.75s (54.9%) managedBlock(ForkJoinPool$ManagedBlocker) at java.util.concurrent.ForkJoinPool
│                               └── 1.75s (54.9%) unmanagedBlock(ForkJoinPool$ManagedBlocker)
│                                   └── 1.75s (54.9%) block() at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode
│                                       └── 1.75s (54.9%) park() at java.util.concurrent.locks.LockSupport
│                                           └── 1.75s (54.9%, self 100.0% globally) park(boolean, long) at jdk.internal.misc.Unsafe
├── 911.9ms (28.7%) run() at jdk.internal.misc.InnocuousThread
│   └── 911.9ms (28.7%) run() at java.lang.Thread
│       └── 911.9ms (28.7%) runWith(Object, Runnable)
│           └── 911.9ms (28.7%) run() at jdk.internal.ref.CleanerImpl
│               └── 911.9ms (28.7%) remove(long) at java.lang.ref.ReferenceQueue
│                   └── 911.9ms (28.7%) remove0(long)
│                       └── 911.9ms (28.7%) await(long)
│                           └── 911.9ms (28.7%) await(long, TimeUnit) at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject
│                               └── 911.9ms (28.7%) parkNanos(Object, long) at java.util.concurrent.locks.LockSupport
│                                   └── 911.9ms (28.7%) park(boolean, long) at jdk.internal.misc.Unsafe
└── … 518.9ms (16.3%) executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable) at org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline
    └── 518.9ms (16.3%) runPhasedPipeline(ArgumentsPipelineArtifact)
        └── 518.9ms (16.3%) invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.CompilerPhaseKt
            └── 518.9ms (16.3%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.backend.common.phaser.CompositePhase
                └── 518.9ms (16.3%) invoke(PhaseConfig, PhaserState, LoggingContext, Object) at org.jetbrains.kotlin.config.phaser.NamedCompilerPhase
                    └── 518.9ms (16.3%) phaseBody(LoggingContext, Object) at org.jetbrains.kotlin.cli.pipeline.PipelinePhase
                        └── 518.9ms (16.3%) phaseBody(PipelineContext, PipelineArtifact)
                            └── 518.9ms (16.3%) executePhase(PipelineArtifact) at org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase
                                └── 518.9ms (16.3%) executePhase(JvmFir2IrPipelineArtifact)
                                    └── 518.9ms (16.3%) runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean) at org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler
                                        └── 518.9ms (16.3%) invokeCodegen(JvmIrCodegenFactory$CodegenInput) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
                                            └── 518.3ms (16.3%) get() at java.util.concurrent.CompletableFuture
                                                └── 518.3ms (16.3%) waitingGet(boolean)
                                                    └── 518.3ms (16.3%) managedBlock(ForkJoinPool$ManagedBlocker) at java.util.concurrent.ForkJoinPool
                                                        └── 518.3ms (16.3%) unmanagedBlock(ForkJoinPool$ManagedBlocker)
                                                            └── 518.3ms (16.3%) block() at java.util.concurrent.CompletableFuture$Signaller
                                                                └── 518.3ms (16.3%) park(Object) at java.util.concurrent.locks.LockSupport
                                                                    └── 518.3ms (16.3%) park(boolean, long) at jdk.internal.misc.Unsafe
```

## Hottest functions

### Self time

Functions with the most time parked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |  Time | Parks | Function              | Location                   |
| -----: | ----: | ----: | --------------------- | -------------------------- |
| 100.0% | 3.18s |    45 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Parks | Caller                    | Location                                 |
| ----: | ------: | ----: | ------------------------- | ---------------------------------------- |
| 54.9% |   1.75s |    26 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 28.7% | 912.6ms |     4 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 16.4% | 519.7ms |    15 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

### Total time

Functions with the most time parked within the function and its callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Standard library

|      % |    Time | Parks | Function                                      | Location                                                                |
| -----: | ------: | ----: | --------------------------------------------- | ----------------------------------------------------------------------- |
| 100.0% |   3.18s |    45 | `park(boolean, long)`                         | `jdk.internal.misc.Unsafe`                                              |
|  83.7% |   2.66s |    42 | `runWith(Object, Runnable)`                   | `java.lang.Thread`                                                      |
|  83.7% |   2.66s |    42 | `run()`                                       | `java.lang.Thread`                                                      |
|  71.2% |   2.26s |    28 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool`                                     |
|  71.2% |   2.26s |    28 | `managedBlock(ForkJoinPool$ManagedBlocker)`   | `java.util.concurrent.ForkJoinPool`                                     |
|  55.0% |   1.75s |    39 | `await()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  55.0% |   1.75s |    39 | `take()`                                      | `java.util.concurrent.LinkedBlockingQueue`                              |
|  55.0% |   1.75s |    39 | `getTask()`                                   | `java.util.concurrent.ThreadPoolExecutor`                               |
|  55.0% |   1.75s |    39 | `runWorker(ThreadPoolExecutor$Worker)`        | `java.util.concurrent.ThreadPoolExecutor`                               |
|  55.0% |   1.75s |    39 | `run()`                                       | `java.util.concurrent.ThreadPoolExecutor$Worker`                        |
|  54.9% |   1.75s |    26 | `park()`                                      | `java.util.concurrent.locks.LockSupport`                                |
|  54.9% |   1.75s |    26 | `block()`                                     | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`   |
|  28.7% | 912.6ms |     4 | `parkNanos(Object, long)`                     | `java.util.concurrent.locks.LockSupport`                                |
|  28.7% | 911.9ms |     3 | `await(long, TimeUnit)`                       | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  28.7% | 911.9ms |     3 | `await(long)`                                 | `java.lang.ref.ReferenceQueue`                                          |
|  28.7% | 911.9ms |     3 | `remove0(long)`                               | `java.lang.ref.ReferenceQueue`                                          |
|  28.7% | 911.9ms |     3 | `remove(long)`                                | `java.lang.ref.ReferenceQueue`                                          |
|  28.7% | 911.9ms |     3 | `run()`                                       | `jdk.internal.ref.CleanerImpl`                                          |
|  28.7% | 911.9ms |     3 | `run()`                                       | `jdk.internal.misc.InnocuousThread`                                     |
|  16.4% | 519.7ms |    15 | `park(Object)`                                | `java.util.concurrent.locks.LockSupport`                                |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `park(boolean, long)` (`jdk.internal.misc.Unsafe`)

|     % |    Time | Parks | Caller                    | Location                                 |
| ----: | ------: | ----: | ------------------------- | ---------------------------------------- |
| 54.9% |   1.75s |    26 | `park()`                  | `java.util.concurrent.locks.LockSupport` |
| 28.7% | 912.6ms |     4 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |
| 16.4% | 519.7ms |    15 | `park(Object)`            | `java.util.concurrent.locks.LockSupport` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Parks | Caller  | Location           |
| -----: | ----: | ----: | ------- | ------------------ |
| 100.0% | 2.66s |    42 | `run()` | `java.lang.Thread` |

##### `run()` (`java.lang.Thread`)

|     % |    Time | Parks | Caller  | Location                            |
| ----: | ------: | ----: | ------- | ----------------------------------- |
| 34.3% | 911.9ms |     3 | `run()` | `jdk.internal.misc.InnocuousThread` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Parks | Caller                                      | Location                            |
| -----: | ----: | ----: | ------------------------------------------- | ----------------------------------- |
| 100.0% | 2.26s |    28 | `managedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Parks | Caller                | Location                                                                |
| ----: | ------: | ----: | --------------------- | ----------------------------------------------------------------------- |
| 77.1% |   1.75s |    26 | `await()`             | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
| 22.9% | 518.3ms |     2 | `waitingGet(boolean)` | `java.util.concurrent.CompletableFuture`                                |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |  Time | Parks | Caller   | Location                                   |
| -----: | ----: | ----: | -------- | ------------------------------------------ |
| 100.0% | 1.75s |    39 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Parks | Caller      | Location                                  |
| -----: | ----: | ----: | ----------- | ----------------------------------------- |
| 100.0% | 1.75s |    39 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Caller                                 | Location                                  |
| -----: | ----: | ----: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.75s |    39 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Caller  | Location                                         |
| -----: | ----: | ----: | ------- | ------------------------------------------------ |
| 100.0% | 1.75s |    39 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Parks | Caller                      | Location           |
| -----: | ----: | ----: | --------------------------- | ------------------ |
| 100.0% | 1.75s |    39 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Parks | Caller    | Location                                                              |
| -----: | ----: | ----: | --------- | --------------------------------------------------------------------- |
| 100.0% | 1.75s |    26 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Parks | Caller                                        | Location                            |
| -----: | ----: | ----: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 1.75s |    26 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|     % |    Time | Parks | Caller                  | Location                                                                |
| ----: | ------: | ----: | ----------------------- | ----------------------------------------------------------------------- |
| 99.9% | 911.9ms |     3 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |
|  0.1% |   0.6ms |     1 | `awaitNanos(long)`      | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Parks | Caller        | Location                       |
| -----: | ------: | ----: | ------------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Caller          | Location                       |
| -----: | ------: | ----: | --------------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Caller         | Location                       |
| -----: | ------: | ----: | -------------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Caller  | Location                       |
| -----: | ------: | ----: | ------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `run()` | `jdk.internal.ref.CleanerImpl` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Parks | Caller                      | Location           |
| -----: | ------: | ----: | --------------------------- | ------------------ |
| 100.0% | 911.9ms |     3 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

|     % |    Time | Parks | Caller                                                                           | Location                                                |
| ----: | ------: | ----: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 99.7% | 518.3ms |     2 | `block()`                                                                        | `java.util.concurrent.CompletableFuture$Signaller`      |
|  0.3% |   1.4ms |    13 | `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|     % |    Time | Parks | Callee  | Location                                         |
| ----: | ------: | ----: | ------- | ------------------------------------------------ |
| 65.7% |   1.75s |    39 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |
| 34.3% | 911.9ms |     3 | `run()` | `jdk.internal.ref.CleanerImpl`                   |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Parks | Callee                      | Location           |
| -----: | ----: | ----: | --------------------------- | ------------------ |
| 100.0% | 2.66s |    42 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|     % |    Time | Parks | Callee    | Location                                                              |
| ----: | ------: | ----: | --------- | --------------------------------------------------------------------- |
| 77.1% |   1.75s |    26 | `block()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode` |
| 22.9% | 518.3ms |     2 | `block()` | `java.util.concurrent.CompletableFuture$Signaller`                    |

##### `managedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`)

|      % |  Time | Parks | Callee                                        | Location                            |
| -----: | ----: | ----: | --------------------------------------------- | ----------------------------------- |
| 100.0% | 2.26s |    28 | `unmanagedBlock(ForkJoinPool$ManagedBlocker)` | `java.util.concurrent.ForkJoinPool` |

##### `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|     % |  Time | Parks | Callee                                            | Location                                                |
| ----: | ----: | ----: | ------------------------------------------------- | ------------------------------------------------------- |
| 99.9% | 1.75s |    26 | `managedBlock(ForkJoinPool$ManagedBlocker)`       | `java.util.concurrent.ForkJoinPool`                     |
|  0.1% | 1.4ms |    13 | `reacquire(AbstractQueuedSynchronizer$Node, int)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer` |

##### `take()` (`java.util.concurrent.LinkedBlockingQueue`)

|      % |  Time | Parks | Callee    | Location                                                                |
| -----: | ----: | ----: | --------- | ----------------------------------------------------------------------- |
| 100.0% | 1.75s |    39 | `await()` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `getTask()` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Callee   | Location                                   |
| -----: | ----: | ----: | -------- | ------------------------------------------ |
| 100.0% | 1.75s |    39 | `take()` | `java.util.concurrent.LinkedBlockingQueue` |

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Parks | Callee      | Location                                  |
| -----: | ----: | ----: | ----------- | ----------------------------------------- |
| 100.0% | 1.75s |    39 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Parks | Callee                                 | Location                                  |
| -----: | ----: | ----: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.75s |    39 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `park()` (`java.util.concurrent.locks.LockSupport`)

|      % |  Time | Parks | Callee                | Location                   |
| -----: | ----: | ----: | --------------------- | -------------------------- |
| 100.0% | 1.75s |    26 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`)

|      % |  Time | Parks | Callee   | Location                                 |
| -----: | ----: | ----: | -------- | ---------------------------------------- |
| 100.0% | 1.75s |    26 | `park()` | `java.util.concurrent.locks.LockSupport` |

##### `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Parks | Callee                | Location                   |
| -----: | ------: | ----: | --------------------- | -------------------------- |
| 100.0% | 912.6ms |     4 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

##### `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`)

|      % |    Time | Parks | Callee                    | Location                                 |
| -----: | ------: | ----: | ------------------------- | ---------------------------------------- |
| 100.0% | 911.9ms |     3 | `parkNanos(Object, long)` | `java.util.concurrent.locks.LockSupport` |

##### `await(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Callee                  | Location                                                                |
| -----: | ------: | ----: | ----------------------- | ----------------------------------------------------------------------- |
| 100.0% | 911.9ms |     3 | `await(long, TimeUnit)` | `java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject` |

##### `remove0(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Callee        | Location                       |
| -----: | ------: | ----: | ------------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `await(long)` | `java.lang.ref.ReferenceQueue` |

##### `remove(long)` (`java.lang.ref.ReferenceQueue`)

|      % |    Time | Parks | Callee          | Location                       |
| -----: | ------: | ----: | --------------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `remove0(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.ref.CleanerImpl`)

|      % |    Time | Parks | Callee         | Location                       |
| -----: | ------: | ----: | -------------- | ------------------------------ |
| 100.0% | 911.9ms |     3 | `remove(long)` | `java.lang.ref.ReferenceQueue` |

##### `run()` (`jdk.internal.misc.InnocuousThread`)

|      % |    Time | Parks | Callee  | Location           |
| -----: | ------: | ----: | ------- | ------------------ |
| 100.0% | 911.9ms |     3 | `run()` | `java.lang.Thread` |

##### `park(Object)` (`java.util.concurrent.locks.LockSupport`)

|      % |    Time | Parks | Callee                | Location                   |
| -----: | ------: | ----: | --------------------- | -------------------------- |
| 100.0% | 519.7ms |    15 | `park(boolean, long)` | `jdk.internal.misc.Unsafe` |

## Hottest call stacks

Call stacks with the most time parked in their leaf frame.

|     % |    Time | Parks | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.9% |   1.75s |    26 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park()` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionNode`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 28.7% | 911.9ms |     3 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `await(long, TimeUnit)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `await(long)` (`java.lang.ref.ReferenceQueue`) ← `remove0(long)` ← `remove(long)` ← `run()` (`jdk.internal.ref.CleanerImpl`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()` ← `run()` (`jdk.internal.misc.InnocuousThread`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 16.3% | 518.3ms |     2 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `block()` (`java.util.concurrent.CompletableFuture$Signaller`) ← `unmanagedBlock(ForkJoinPool$ManagedBlocker)` (`java.util.concurrent.ForkJoinPool`) ← `managedBlock(ForkJoinPool$ManagedBlocker)` ← `waitingGet(boolean)` (`java.util.concurrent.CompletableFuture`) ← `get()` ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])` |
| <0.1% |   1.4ms |    13 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `park(Object)` (`java.util.concurrent.locks.LockSupport`) ← `acquire(AbstractQueuedSynchronizer$Node, int, boolean, boolean, boolean, long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer`) ← `reacquire(AbstractQueuedSynchronizer$Node, int)` ← `await()` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `take()` (`java.util.concurrent.LinkedBlockingQueue`) ← `getTask()` (`java.util.concurrent.ThreadPoolExecutor`) ← `runWorker(ThreadPoolExecutor$Worker)` ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <0.1% |   0.6ms |     1 | `park(boolean, long)` (`jdk.internal.misc.Unsafe`) ← `parkNanos(Object, long)` (`java.util.concurrent.locks.LockSupport`) ← `awaitNanos(long)` (`java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject`) ← `awaitTermination(long, TimeUnit)` (`java.util.concurrent.ThreadPoolExecutor`) ← `invokeCodegen(JvmIrCodegenFactory$CodegenInput)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `runCodegen$org_jetbrains_kotlin_cli_jvm(JvmIrCodegenFactory$CodegenInput, GenerationState, JvmIrCodegenFactory, BaseDiagnosticsCollector, CompilerConfiguration, boolean)` (`org.jetbrains.kotlin.cli.jvm.compiler.KotlinToJVMBytecodeCompiler`) ← `executePhase(JvmFir2IrPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.jvm.JvmBackendPipelinePhase`) ← `executePhase(PipelineArtifact)` ← `phaseBody(PipelineContext, PipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.PipelinePhase`) ← `phaseBody(LoggingContext, Object)` ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.NamedCompilerPhase`) ← `invoke(PhaseConfig, PhaserState, LoggingContext, Object)` (`org.jetbrains.kotlin.backend.common.phaser.CompositePhase`) ← `invokeToplevel(CompilerPhase, PhaseConfig, LoggingContext, Object)` (`org.jetbrains.kotlin.config.phaser.CompilerPhaseKt`) ← `runPhasedPipeline(ArgumentsPipelineArtifact)` (`org.jetbrains.kotlin.cli.pipeline.AbstractCliPipeline`) ← `executeAndReturnPipeLineArtifact(CommonCompilerArguments, Services, MessageCollector, Disposable)` ← `executeAndReturnPipeLineArtifact$default(AbstractCliPipeline, CommonCompilerArguments, Services, MessageCollector, Disposable, int, Object)` ← `execute(CommonCompilerArguments, Services, MessageCollector)` ← `doExecutePhased(K2JVMCompilerArguments, Services, MessageCollector)` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `doExecutePhased(CommonCompilerArguments, Services, MessageCollector)` ← `execImpl(MessageCollector, Services, CommonCompilerArguments)` (`org.jetbrains.kotlin.cli.common.CLICompiler`) ← `exec(MessageCollector, Services, CommonCompilerArguments)` ← `exec(PrintStream, Services, MessageRenderer, String[])` ← `exec(PrintStream, MessageRenderer, String[])` ← `doMainNoExit(CLICompiler, String[], MessageRenderer)` (`org.jetbrains.kotlin.cli.common.CLICompiler$Companion`) ← `doMainNoExit$default(CLICompiler$Companion, CLICompiler, String[], MessageRenderer, int, Object)` ← `doMain(CLICompiler, String[])` ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler$Companion`) ← `main(String[])` (`org.jetbrains.kotlin.cli.jvm.K2JVMCompiler`) ← `invokeStatic(Object, Object)` (`java.lang.invoke.LambdaForm$DMH.0x0000007001001800`) ← `invoke(Object, Object, Object)` (`java.lang.invoke.LambdaForm$MH.0x000000700100e000`) ← `invokeExact_MT(Object, Object, Object, Object)` (`java.lang.invoke.Invokers$Holder`) ← `invokeImpl(Object, Object[])` (`jdk.internal.reflect.DirectMethodHandleAccessor`) ← `invoke(Object, Object[])` ← `invoke(Object, Object[])` (`java.lang.reflect.Method`) ← `run(String[])` (`org.jetbrains.kotlin.preloading.Preloader`) ← `main(String[])`                                                                                        |
