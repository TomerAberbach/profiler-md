# Lock contention profile

Blocked 1.19s over 982 contentions (1.2ms per contention).

| Category         |     % |  Time | Contentions |
| ---------------- | ----: | ----: | ----------: |
| Ours             | 99.9% | 1.19s |         973 |
| Standard library |  0.1% | 1.1ms |           9 |

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
└── … 1.19s (99.7%, self 0.7%) generateFile(JvmBackendContext, IrFile, List, boolean) at org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory
    ├── 1.12s (94.3%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
    │   ├── 1.09s (91.5%) generateMethod(IrFunction, SourceMapper)
    │   │   ├── 1.02s (85.7%, self 73.3%) generateMethodNode(IrFunction)
    │   │   │   └── … 148.0ms (12.4%, self 3.8%) doGenerate(ReifiedTypeParametersUsages) at org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen
    │   │   │       ├── … 66.9ms (5.6%) visitStatementContainer(IrStatementContainer, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │   └── … 61.9ms (5.2%) visitReturn(IrReturn, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       ├── … 35.9ms (3.0%) visitWhen(IrWhen, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       │   ├── … 29.9ms (2.5%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │       │   │   ├── 7.7ms (0.6%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       │       │   │   │   └── 2.6ms (0.2%) <init>(TypeSystemCommonBackendContext, Map, boolean, Function2) at org.jetbrains.kotlin.codegen.inline.TypeParameterMappings
    │   │   │       │       │   │   └── 22.3ms (1.9%) 4 more callees, led by (1.5%) genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator
    │   │   │       │       │   └── 3.2ms (0.3%) generate() at org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator
    │   │   │       │       └── … 23.8ms (2.0%) visitCall(IrCall, BlockInfo) at org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen
    │   │   │       │           ├── … 10.5ms (0.9%) doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int) at org.jetbrains.kotlin.codegen.inline.MethodInliner
    │   │   │       │           │   └── 4.5ms (0.4%) doInline(MethodNode)
    │   │   │       │           └── 3.8ms (0.3%) getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)
    │   │   │       ├── 8.4ms (0.7%) calculateMethodFlags(IrFunction)
    │   │   │       └── 25.1ms (2.1%) 13 more callees, led by (0.5%) mapSignatureWithGeneric(IrFunction) at org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper
    │   │   ├── … 19.3ms (1.6%, self 0.7%) makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt
    │   │   │   └── 8.2ms (0.7%) makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)
    │   │   ├── 15.0ms (1.3%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.DelegatingClassBuilder
    │   │   │   ├── 9.9ms (0.8%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder
    │   │   │   │   └── 9.6ms (0.8%, self 0.7%) <init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor
    │   │   │   └── … 5.1ms (0.4%) newMethod(JvmDeclarationOrigin, int, String, String, String, String[]) at org.jetbrains.kotlin.codegen.AbstractClassBuilder
    │   │   │       └── 5.1ms (0.4%) visitMethod(int, String, String, String, String[]) at org.jetbrains.org.objectweb.asm.ClassWriter
    │   │   ├── … 5.7ms (0.5%) <init>(SourceMapper, SMAP, SourcePosition) at org.jetbrains.kotlin.codegen.inline.SourceMapCopier
    │   │   └── 24.9ms (2.1%) 5 more callees, led by (1.7%) accept(MethodVisitor) at org.jetbrains.org.objectweb.asm.tree.MethodNode
    │   └── … 28.0ms (2.4%) serialize(MetadataSource, MetadataSource$File) at org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer
    │       └── 22.8ms (1.9%) packagePartProto(FirFile, Set) at org.jetbrains.kotlin.fir.serialization.FirElementSerializer
    │           └── 22.5ms (1.9%) addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)
    │               └── 19.1ms (1.6%) functionProto(FirFunction)
    │                   ├── 6.3ms (0.5%) serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer) at org.jetbrains.kotlin.fir.serialization.FirContractSerializer
    │                   └── … 5.7ms (0.5%) get(GeneratedMessageLite$Builder) at org.jetbrains.kotlin.metadata.serialization.MutableTable
    └── … 55.5ms (4.7%, self 0.9%) <init>(IrClass, JvmBackendContext, IrFunction, List) at org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen
        ├── … 20.2ms (1.7%, self 1.1%) newClassBuilder(JvmDeclarationOrigin) at org.jetbrains.kotlin.codegen.ClassBuilderFactories$1
        │   └── … 7.3ms (0.6%, self 0.5%) <init>(ClassReader, int) at org.jetbrains.org.objectweb.asm.ClassWriter
        ├── 9.7ms (0.8%) getSourceMapper(JvmBackendContext, IrClass) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
        │   └── … 3.9ms (0.3%) getLineAndColumnNumbers(int) at org.jetbrains.kotlin.ir.AbstractIrFileEntry
        └── 7.7ms (0.6%) mapClassSignature(IrTypeMapper, IrClass, Type, boolean) at org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt
```

## Hottest functions

### Self time

Functions with the most time blocked within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                                                                            | Location                                                              |
| ----: | ------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 73.3% | 871.7ms |          89 | `generateMethodNode(IrFunction)`                                                                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`               |
|  3.8% |  44.9ms |          47 | `doGenerate(ReifiedTypeParametersUsages)`                                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`            |
|  1.1% |  12.9ms |          24 | `newClassBuilder(JvmDeclarationOrigin)`                                                                                                                             | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`                |
|  0.9% |  11.2ms |          43 | `<init>(IrClass, JvmBackendContext, IrFunction, List)`                                                                                                              | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`               |
|  0.7% |   8.9ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                                                                            | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                |
|  0.7% |   8.8ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])`                                                                            | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor` |
|  0.7% |   8.2ms |          14 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)`                  | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`        |
|  0.6% |   7.6ms |          18 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                                                                               | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`          |
|  0.5% |   6.0ms |          19 | `<init>(ClassReader, int)`                                                                                                                                          | `org.jetbrains.org.objectweb.asm.ClassWriter`                         |
|  0.5% |   5.7ms |           3 | `get(GeneratedMessageLite$Builder)`                                                                                                                                 | `org.jetbrains.kotlin.metadata.serialization.MutableTable`            |
|  0.5% |   5.7ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition)`                                                                                                                        | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier`                 |
|  0.4% |   5.0ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`        |
|  0.4% |   4.9ms |          25 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`           |
|  0.4% |   4.4ms |           4 | `visitMethod(int, String, String, String, String[])`                                                                                                                | `org.jetbrains.org.objectweb.asm.ClassWriter`                         |
|  0.3% |   4.0ms |          16 | `doInline(MethodNode)`                                                                                                                                              | `org.jetbrains.kotlin.codegen.inline.MethodInliner`                   |
|  0.3% |   3.9ms |           5 | `getLineAndColumnNumbers(int)`                                                                                                                                      | `org.jetbrains.kotlin.ir.AbstractIrFileEntry`                         |
|  0.3% |   3.8ms |           2 | `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)`                                                                    | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer`        |
|  0.3% |   3.7ms |          13 | `getSourceMapper(JvmBackendContext, IrClass)`                                                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`           |
|  0.3% |   3.4ms |           2 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)`                                                                                     | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer`         |
|  0.3% |   3.2ms |          10 | `generate()`                                                                                                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`            |

#### Lines

Lines with the largest contribution to each function's self time.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Location                                                    |
| ----: | ------: | ----------: | ----------------------------------------------------------- |
| 99.5% | 867.0ms |          72 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:427` |
|  0.3% |   2.4ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:416` |
|  0.2% |   2.2ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:422` |
| <0.1% |   0.2ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:428` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |   Time | Contentions | Location                                                       |
| ----: | -----: | ----------: | -------------------------------------------------------------- |
| 38.8% | 17.4ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:68`  |
| 25.3% | 11.4ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:134` |
| 12.6% |  5.7ms |          11 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:76`  |
| 11.5% |  5.2ms |           7 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:133` |
|  7.2% |  3.2ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen:84`  |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Location                                                  |
| -----: | -----: | ----------: | --------------------------------------------------------- |
| 100.0% | 12.9ms |          24 | `org.jetbrains.kotlin.codegen.ClassBuilderFactories$1:70` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |  Time | Contentions | Location                                                    |
| ----: | ----: | ----------: | ----------------------------------------------------------- |
| 39.3% | 4.4ms |          18 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:84`  |
| 21.5% | 2.4ms |           9 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:110` |
| 18.3% | 2.1ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:89`  |
|  8.7% | 1.0ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:107` |
|  5.9% | 0.7ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen:78`  |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Location                                                   |
| ----: | ----: | ----------: | ---------------------------------------------------------- |
| 97.1% | 8.6ms |          18 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:465` |
|  2.9% | 0.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory:459` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|     % |  Time | Contentions | Location                                                                 |
| ----: | ----: | ----------: | ------------------------------------------------------------------------ |
| 17.7% | 1.6ms |           2 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:53` |
| 15.5% | 1.4ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:55` |
| 10.3% | 0.9ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:58` |
|  9.8% | 0.9ms |           1 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:60` |
|  8.7% | 0.8ms |           3 | `org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor:46` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 49.1% | 4.0ms |           3 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:50` |
| 24.5% | 2.0ms |           5 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:61` |
| 21.6% | 1.8ms |           4 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:54` |
|  4.7% | 0.4ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:63` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |  Time | Contentions | Location                                                          |
| ----: | ----: | ----------: | ----------------------------------------------------------------- |
| 30.7% | 2.3ms |           6 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1581` |
| 30.2% | 2.3ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1570` |
| 19.4% | 1.5ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1569` |
|  8.1% | 0.6ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1548` |
|  4.4% | 0.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen:1572` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 6.0ms |          19 | `org.jetbrains.org.objectweb.asm.ClassWriter:266` |

##### `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`)

|      % |  Time | Contentions | Location                                                      |
| -----: | ----: | ----------: | ------------------------------------------------------------- |
| 100.0% | 5.7ms |           3 | `org.jetbrains.kotlin.metadata.serialization.MutableTable:35` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Location                                                 |
| -----: | ----: | ----------: | -------------------------------------------------------- |
| 100.0% | 5.7ms |           8 | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier:65` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|     % |  Time | Contentions | Location                                                           |
| ----: | ----: | ----------: | ------------------------------------------------------------------ |
| 50.1% | 2.5ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:190` |
| 49.9% | 2.5ms |           2 | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt:198` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                        |
| ----: | ----: | ----------: | --------------------------------------------------------------- |
| 69.5% | 3.4ms |          17 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:225` |
| 30.5% | 1.5ms |           8 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:267` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Location                                          |
| -----: | ----: | ----------: | ------------------------------------------------- |
| 100.0% | 4.4ms |           4 | `org.jetbrains.org.objectweb.asm.ClassWriter:469` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|     % |   Time | Contentions | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------------------- |
| 62.8% |  2.5ms |           6 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:154` |
| 17.1% |  0.7ms |           4 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:159` |
| 11.7% |  0.5ms |           3 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:153` |
|  7.8% |  0.3ms |           2 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:156` |
|  0.5% | 20.7µs |           1 | `org.jetbrains.kotlin.codegen.inline.MethodInliner:433` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`)

|      % |  Time | Contentions | Location                                         |
| -----: | ----: | ----------: | ------------------------------------------------ |
| 100.0% | 3.9ms |           5 | `org.jetbrains.kotlin.ir.AbstractIrFileEntry:67` |

##### `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`)

|      % |  Time | Contentions | Location                                                          |
| -----: | ----: | ----------: | ----------------------------------------------------------------- |
| 100.0% | 3.8ms |           2 | `org.jetbrains.kotlin.fir.serialization.FirContractSerializer:32` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 59.3% | 2.2ms |          10 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:76` |
| 24.3% | 0.9ms |           1 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:90` |
| 16.4% | 0.6ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt:89` |

##### `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % |  Time | Contentions | Location                                                          |
| -----: | ----: | ----------: | ----------------------------------------------------------------- |
| 100.0% | 3.4ms |           2 | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer:129` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|     % |  Time | Contentions | Location                                                       |
| ----: | ----: | ----------: | -------------------------------------------------------------- |
| 42.4% | 1.4ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:38`  |
| 28.1% | 0.9ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:490` |
| 19.7% | 0.6ms |           4 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:35`  |
|  9.9% | 0.3ms |           2 | `org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator:37`  |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Caller                                      | Location                                                             |
| ----: | ------: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 93.3% | 813.1ms |          87 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|  6.7% |  58.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |   Time | Contentions | Caller                                  | Location                                                   |
| -----: | -----: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 44.9ms |          47 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`)

|      % |   Time | Contentions | Caller                                  | Location                                                                    |
| -----: | -----: | ----------: | --------------------------------------- | --------------------------------------------------------------------------- |
| 100.0% | 12.9ms |          24 | `newClassBuilder(JvmDeclarationOrigin)` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory` |

##### `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                                                           | Location                                                |
| -----: | -----: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 100.0% | 11.2ms |          43 | `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 8.9ms |          20 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`)

|      % |  Time | Contentions | Caller                                                                   | Location                                                             |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 100.0% | 8.8ms |          22 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder` |

##### `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                             | Location                                                      |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| 100.0% | 8.2ms |          14 | `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` | `org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension` |

##### `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 7.6ms |          18 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller        | Location                                      |
| -----: | ----: | ----------: | ------------- | --------------------------------------------- |
| 100.0% | 6.0ms |          19 | `<init>(int)` | `org.jetbrains.org.objectweb.asm.ClassWriter` |

##### `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                                            |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 100.0% | 5.7ms |           3 | `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` | `org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion` |

##### `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`)

|      % |  Time | Contentions | Caller                                                                      | Location                                              |
| -----: | ----: | ----------: | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| 100.0% | 5.7ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` | `org.jetbrains.kotlin.codegen.inline.SourceMapCopier` |

##### `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`)

|      % |  Time | Contentions | Caller                                                                                                                                             | Location                                                       |
| -----: | ----: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 100.0% | 5.0ms |           4 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` | `org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt` |

##### `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 4.9ms |          25 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`)

|      % |  Time | Contentions | Caller                                                                   | Location                                            |
| -----: | ----: | ----------: | ------------------------------------------------------------------------ | --------------------------------------------------- |
| 100.0% | 4.4ms |           4 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.AbstractClassBuilder` |

##### `doInline(MethodNode)` (`org.jetbrains.kotlin.codegen.inline.MethodInliner`)

|      % |  Time | Contentions | Caller                                                         | Location                                            |
| -----: | ----: | ----------: | -------------------------------------------------------------- | --------------------------------------------------- |
| 100.0% | 4.0ms |          16 | `doInline(MethodVisitor, LocalVarRemapper, boolean, Map, int)` | `org.jetbrains.kotlin.codegen.inline.MethodInliner` |

##### `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 3.9ms |           5 | `getLineAndColumnNumbers(int)` | `org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl` |

##### `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`)

|      % |  Time | Contentions | Caller                       | Location                                                      |
| -----: | ----: | ----------: | ---------------------------- | ------------------------------------------------------------- |
| 100.0% | 3.8ms |           2 | `functionProto(FirFunction)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`)

|      % |  Time | Contentions | Caller                                                 | Location                                                |
| -----: | ----: | ----------: | ------------------------------------------------------ | ------------------------------------------------------- |
| 100.0% | 3.7ms |          13 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`)

|      % |  Time | Contentions | Caller                           | Location                                                      |
| -----: | ----: | ----------: | -------------------------------- | ------------------------------------------------------------- |
| 100.0% | 3.4ms |           2 | `packagePartProto(FirFile, Set)` | `org.jetbrains.kotlin.fir.serialization.FirElementSerializer` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`)

|      % |  Time | Contentions | Caller                         | Location                                                     |
| -----: | ----: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 3.2ms |          10 | `visitWhen(IrWhen, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

### Total time

Functions with the most time blocked within the function and its callees.

|      % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 100.0% |   1.19s |         982 | `runWorker(ThreadPoolExecutor$Worker)`                                                                            | `java.util.concurrent.ThreadPoolExecutor`                                         |
| 100.0% |   1.19s |         982 | `run()`                                                                                                           | `java.util.concurrent.ThreadPoolExecutor$Worker`                                  |
| 100.0% |   1.19s |         982 | `runWith(Object, Runnable)`                                                                                       | `java.lang.Thread`                                                                |
| 100.0% |   1.19s |         982 | `run()`                                                                                                           | `java.lang.Thread`                                                                |
|  99.9% |   1.19s |         974 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  99.9% |   1.19s |         974 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |
|  99.9% |   1.19s |         974 | `run()`                                                                                                           | `java.util.concurrent.CompletableFuture$AsyncRun`                                 |
|  99.7% |   1.19s |         942 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
|  94.3% |   1.12s |         716 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  91.5% |   1.09s |         667 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  85.7% |   1.02s |         482 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
|  17.4% | 206.6ms |         395 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  17.4% | 206.6ms |         395 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  17.4% | 206.6ms |         395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
|  10.8% | 128.2ms |         210 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.6% | 125.5ms |         186 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.6% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.6% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  10.6% | 125.5ms |         186 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
|  10.3% | 122.3ms |         177 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Contentions | Function                                                                                                          | Location                                                                          |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 99.9% |   1.19s |         974 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 99.9% |   1.19s |         974 | `run()`                                                                                                           | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |
| 99.7% |   1.19s |         942 | `generateFile(JvmBackendContext, IrFile, List, boolean)`                                                          | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`                            |
| 94.3% |   1.12s |         716 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 91.5% |   1.09s |         667 | `generateMethod(IrFunction, SourceMapper)`                                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 85.7% |   1.02s |         482 | `generateMethodNode(IrFunction)`                                                                                  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`                           |
| 17.4% | 206.6ms |         395 | `doGenerate(ReifiedTypeParametersUsages)`                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 17.4% | 206.6ms |         395 | `generate(ReifiedTypeParametersUsages)`                                                                           | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 17.4% | 206.6ms |         395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)`                                     | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`                        |
| 10.8% | 128.2ms |         210 | `generate()`                                                                                                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.6% | 125.5ms |         186 | `visitStatementContainer(IrStatementContainer, BlockInfo)`                                                        | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.6% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, BlockInfo)`                                                                          | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.6% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, Object)`                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.6% | 125.5ms |         186 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`                                 |
| 10.3% | 122.3ms |         177 | `visitReturn(IrReturn, BlockInfo)`                                                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.3% | 122.3ms |         177 | `visitReturn(IrReturn, Object)`                                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
| 10.3% | 122.3ms |         177 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrReturn`                                    |
|  9.7% | 115.7ms |         151 | `visitCall(IrCall, BlockInfo)`                                                                                    | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.7% | 115.7ms |         151 | `visitCall(IrCall, Object)`                                                                                       | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`                      |
|  9.7% | 115.7ms |         151 | `accept(IrVisitor, Object)`                                                                                       | `org.jetbrains.kotlin.ir.expressions.IrCall`                                      |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|      % |  Time | Contentions | Caller  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.19s |         982 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Caller                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.19s |         982 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Caller  | Location           |
| -----: | ----: | ----------: | ------- | ------------------ |
| 100.0% | 1.19s |         982 | `run()` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.19s |         974 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`)

|      % |  Time | Contentions | Caller  | Location                                          |
| -----: | ----: | ----------: | ------- | ------------------------------------------------- |
| 100.0% | 1.19s |         974 | `run()` | `java.util.concurrent.CompletableFuture$AsyncRun` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Caller                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.19s |         974 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|      % |  Time | Contentions | Caller                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.19s |         942 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller                                                   | Location                                               |
| -----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.12s |         716 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |  Time | Contentions | Caller       | Location                                                |
| -----: | ----: | ----------: | ------------ | ------------------------------------------------------- |
| 100.0% | 1.09s |         667 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|      % |   Time | Contentions | Caller                                      | Location                                                             |
| -----: | -----: | ----------: | ------------------------------------------- | -------------------------------------------------------------------- |
| 100.0% |  1.02s |         482 | `generateMethod(IrFunction, SourceMapper)`  | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`              |
|   5.7% | 58.6ms |           2 | `compileInlineFunction(JvmMethodSignature)` | `org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 206.6ms |         395 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                                                                        | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 206.6ms |         395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Caller                           | Location                                                |
| -----: | ------: | ----------: | -------------------------------- | ------------------------------------------------------- |
| 100.0% | 206.6ms |         395 | `generateMethodNode(IrFunction)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 128.2ms |         210 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                                       | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, BlockInfo)`                     | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|   3.4% |   4.3ms |           9 | `visitContainerExpression(IrContainerExpression, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                          |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------- |
| 100.0% | 125.5ms |         186 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlockBody` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Caller       | Location                                                     |
| -----: | ------: | ----------: | ------------ | ------------------------------------------------------------ |
| 100.0% | 125.5ms |         186 | `generate()` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 122.3ms |         177 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                       |
| -----: | ------: | ----------: | --------------------------- | ---------------------------------------------- |
| 100.0% | 122.3ms |         177 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Caller                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 122.3ms |         177 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 115.7ms |         151 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Caller                      | Location                                     |
| -----: | ------: | ----------: | --------------------------- | -------------------------------------------- |
| 100.0% | 115.7ms |         151 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|     % |   Time | Contentions | Caller                                                     | Location                                                     |
| ----: | -----: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 76.7% | 88.7ms |          86 | `visitWhen(IrWhen, BlockInfo)`                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
| 21.9% | 25.3ms |          62 | `visitReturn(IrReturn, BlockInfo)`                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  1.3% |  1.6ms |           2 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.1% |  0.1ms |           1 | `visitTypeOperator(IrTypeOperatorCall, BlockInfo)`         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`)

|     % |  Time | Contentions | Callee      | Location                                          |
| ----: | ----: | ----------: | ----------- | ------------------------------------------------- |
| 99.9% | 1.19s |         974 | `run()`     | `java.util.concurrent.CompletableFuture$AsyncRun` |
|  0.1% | 1.1ms |           8 | `getTask()` | `java.util.concurrent.ThreadPoolExecutor`         |

##### `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`)

|      % |  Time | Contentions | Callee                                 | Location                                  |
| -----: | ----: | ----------: | -------------------------------------- | ----------------------------------------- |
| 100.0% | 1.19s |         982 | `runWorker(ThreadPoolExecutor$Worker)` | `java.util.concurrent.ThreadPoolExecutor` |

##### `runWith(Object, Runnable)` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee  | Location                                         |
| -----: | ----: | ----------: | ------- | ------------------------------------------------ |
| 100.0% | 1.19s |         982 | `run()` | `java.util.concurrent.ThreadPoolExecutor$Worker` |

##### `run()` (`java.lang.Thread`)

|      % |  Time | Contentions | Callee                      | Location           |
| -----: | ----: | ----------: | --------------------------- | ------------------ |
| 100.0% | 1.19s |         982 | `runWith(Object, Runnable)` | `java.lang.Thread` |

##### `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |  Time | Contentions | Callee                                                   | Location                                               |
| ----: | ----: | ----------: | -------------------------------------------------------- | ------------------------------------------------------ |
| 99.8% | 1.19s |         942 | `generateFile(JvmBackendContext, IrFile, List, boolean)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |
|  0.2% | 2.8ms |          32 | `getUnitStats()`                                         | `org.jetbrains.kotlin.util.PerformanceManager`         |

##### `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`)

|      % |  Time | Contentions | Callee                                                                                                            | Location                                               |
| -----: | ----: | ----------: | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 100.0% | 1.19s |         974 | `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory` |

##### `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`)

|      % |  Time | Contentions | Callee  | Location                                                                          |
| -----: | ----: | ----------: | ------- | --------------------------------------------------------------------------------- |
| 100.0% | 1.19s |         974 | `run()` | `org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220` |

##### `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)

|     % |   Time | Contentions | Callee                                                                                                   | Location                                                          |
| ----: | -----: | ----------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 94.6% |  1.12s |         716 | `generate()`                                                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`           |
|  4.7% | 55.5ms |         206 | `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                     | Location                                                |
| ----: | -----: | ----------: | ------------------------------------------ | ------------------------------------------------------- |
| 97.1% |  1.09s |         667 | `generateMethod(IrFunction, SourceMapper)` | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  2.7% | 30.0ms |          47 | `generateAnnotations()`                    | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |
|  0.2% |  2.4ms |           2 | `generateField(IrField)`                   | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen` |

##### `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |   Time | Contentions | Callee                                                                   | Location                                                            |
| ----: | -----: | ----------: | ------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| 93.7% |  1.02s |         482 | `generateMethodNode(IrFunction)`                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  1.9% | 21.1ms |          36 | `getMetadataSerializer()`                                                | `org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`             |
|  1.9% | 20.3ms |          89 | `accept(MethodVisitor)`                                                  | `org.jetbrains.org.objectweb.asm.tree.MethodNode`                   |
|  1.4% | 15.0ms |          41 | `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` | `org.jetbrains.kotlin.codegen.DelegatingClassBuilder`               |
|  0.7% |  7.8ms |           9 | `<init>(SourceMapper, SMAP, MethodVisitor)`                              | `org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor` |

##### `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`)

|     % |    Time | Contentions | Callee                                                                        | Location                                                   |
| ----: | ------: | ----------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 20.3% | 206.6ms |         395 | `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|     % |    Time | Contentions | Callee                                                                                               | Location                                                         |
| ----: | ------: | ----------: | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 62.1% | 128.2ms |         210 | `generate()`                                                                                         | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  4.1% |   8.4ms |          32 | `calculateMethodFlags(IrFunction)`                                                                   | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  2.9% |   6.0ms |          25 | `mapSignatureWithGeneric(IrFunction)`                                                                | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  2.4% |   4.9ms |          10 | `createFrameMapWithReceivers(IrFunction)`                                                            | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |
|  1.5% |   3.1ms |           8 | `generateParameterAnnotations(IrFunction, MethodVisitor, JvmMethodSignature, ClassCodegen, boolean)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`       |

##### `generate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                    | Location                                                   |
| -----: | ------: | ----------: | ----------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 206.6ms |         395 | `doGenerate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`)

|      % |    Time | Contentions | Callee                                  | Location                                                   |
| -----: | ------: | ----------: | --------------------------------------- | ---------------------------------------------------------- |
| 100.0% | 206.6ms |         395 | `generate(ReifiedTypeParametersUsages)` | `org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen` |

##### `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                                             | Location                                                     |
| ----: | ------: | ----------: | -------------------------------------------------- | ------------------------------------------------------------ |
| 97.9% | 125.5ms |         186 | `accept(IrVisitor, Object)`                        | `org.jetbrains.kotlin.ir.expressions.IrBlockBody`            |
|  1.0% |   1.3ms |          11 | `generateNonNullAssertions()`                      | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.5% |   0.6ms |           5 | `markNewLabel()`                                   | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |
|  0.1% |   0.1ms |           1 | `writeParameterInLocalVariableTable(Label, Label)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |    Time | Contentions | Callee                      | Location                                                 |
| ----: | ------: | ----------: | --------------------------- | -------------------------------------------------------- |
| 97.4% | 122.3ms |         177 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrReturn`           |
|  1.8% |   2.2ms |           4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
|  1.2% |   1.6ms |           2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  1.2% |   1.6ms |           4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|  0.4% |   0.5ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhileLoop`        |

##### `visitBlockBody(IrBlockBody, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                                     | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 125.5ms |         186 | `visitStatementContainer(IrStatementContainer, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitBlockBody(IrBlockBody, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                                   | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`)

|      % |    Time | Contentions | Callee                                | Location                                                     |
| -----: | ------: | ----------: | ------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 125.5ms |         186 | `visitBlockBody(IrBlockBody, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |   Time | Contentions | Callee                      | Location                                                 |
| ----: | -----: | ----------: | --------------------------- | -------------------------------------------------------- |
| 77.3% | 94.5ms |         108 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrWhen`             |
| 20.7% | 25.3ms |          62 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrCall`             |
|  1.7% |  2.1ms |           4 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTypeOperatorCall` |
|  0.2% |  0.2ms |           1 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrBlock`            |
|  0.1% |  0.1ms |           2 | `accept(IrVisitor, Object)` | `org.jetbrains.kotlin.ir.expressions.IrTry`              |

##### `visitReturn(IrReturn, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                             | Location                                                     |
| -----: | ------: | ----------: | ---------------------------------- | ------------------------------------------------------------ |
| 100.0% | 122.3ms |         177 | `visitReturn(IrReturn, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`)

|      % |    Time | Contentions | Callee                          | Location                                                     |
| -----: | ------: | ----------: | ------------------------------- | ------------------------------------------------------------ |
| 100.0% | 122.3ms |         177 | `visitReturn(IrReturn, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|     % |   Time | Contentions | Callee                                                                                                           | Location                                                         |
| ----: | -----: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 79.6% | 92.1ms |          83 | `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)`                              | `org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator` |
| 10.0% | 11.5ms |          28 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)`                            | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  5.0% |  5.8ms |          24 | `visitCall$handleParameter(IrCallGenerator, ExpressionCodegen, BlockInfo, IrValueParameter, IrExpression, Type)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |
|  2.2% |  2.6ms |           5 | `mapToCallableMethod(IrCall, IrFunction)`                                                                        | `org.jetbrains.kotlin.backend.jvm.mapping.MethodSignatureMapper` |
|  1.5% |  1.7ms |           6 | `getSuspensionPointKind(IrFunctionAccessExpression)`                                                             | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`     |

##### `visitCall(IrCall, Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`)

|      % |    Time | Contentions | Callee                         | Location                                                     |
| -----: | ------: | ----------: | ------------------------------ | ------------------------------------------------------------ |
| 100.0% | 115.7ms |         151 | `visitCall(IrCall, BlockInfo)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

##### `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`)

|      % |    Time | Contentions | Callee                      | Location                                                     |
| -----: | ------: | ----------: | --------------------------- | ------------------------------------------------------------ |
| 100.0% | 115.7ms |         151 | `visitCall(IrCall, Object)` | `org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen` |

## Hottest call stacks

Call stacks with the most time blocked in their leaf frame.

Common call stack: `invokeCodegen$lambda$0(PerformanceManager, JvmIrCodegenFactory, JvmBackendContext, IrFile, List, boolean, List)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) ← `run()` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory$$Lambda.0x0000009801890220`) ← `run()` (`java.util.concurrent.CompletableFuture$AsyncRun`) ← `runWorker(ThreadPoolExecutor$Worker)` (`java.util.concurrent.ThreadPoolExecutor`) ← `run()` (`java.util.concurrent.ThreadPoolExecutor$Worker`) ← `runWith(Object, Runnable)` (`java.lang.Thread`) ← `run()`

|     % |    Time | Contentions | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----: | ------: | ----------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 68.4% | 813.1ms |          87 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  4.9% |  58.6ms |           2 | `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `compileInlineFunction(JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrSourceCompilerForInline`) ← `genInlineCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCodegen`) ← `genCall(IrCallableMethod, ExpressionCodegen, IrFunctionAccessExpression, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrInlineCallGenerator`) ← `visitCall(IrCall, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`) |
|  3.8% |  44.9ms |          47 | `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.1% |  12.9ms |          24 | `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.9% |  11.2ms |          43 | `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.7% |   8.9ms |          20 | `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.7% |   8.8ms |          22 | `<init>(MethodVisitor, boolean, GenerationState, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationMethodVisitor`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% |   8.2ms |          14 | `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000009801893018`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |   6.0ms |          19 | `<init>(ClassReader, int)` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `<init>(int)` ← `<init>()` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$BinaryClassWriter`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassBuilderFactories$1`) ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newClassBuilder(JvmDeclarationOrigin)` (`org.jetbrains.kotlin.codegen.ClassNameCollectionClassBuilderFactory`) ← `newClassBuilder(JvmDeclarationOrigin)` ← `newVisitor(JvmDeclarationOrigin, Type, List)` (`org.jetbrains.kotlin.codegen.ClassFileFactory`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.5% |   5.7ms |           3 | `get(GeneratedMessageLite$Builder)` (`org.jetbrains.kotlin.metadata.serialization.MutableTable`) ← `writeVersionRequirement(int, int, int, ProtoBuf$VersionRequirement$VersionKind, MutableVersionRequirementTable)` (`org.jetbrains.kotlin.serialization.DescriptorSerializer$Companion`) ← `writeInlineParameterNullCheckRequirement(MutableVersionRequirementTable, Function1)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmSerializerExtension`) ← `serializeFunction(FirFunction, ProtoBuf$Function$Builder, MutableVersionRequirementTable, FirElementSerializer)` ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.5% |   5.7ms |           8 | `<init>(SourceMapper, SMAP, SourcePosition)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopier`) ← `<init>(SourceMapper, SMAP, SourcePosition, int, DefaultConstructorMarker)` ← `<init>(SourceMapper, SMAP, MethodVisitor)` (`org.jetbrains.kotlin.codegen.inline.SourceMapCopyingMethodVisitor`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% |   5.0ms |           4 | `makeElementSerializer(MetadataSource, FirSession, ScopeSession, FirJvmSerializerExtension, AbstractTypeApproximator, MetadataSerializer, LanguageVersionSettings)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializerKt`) ← `makeFirMetadataSerializerForIrClass(FirSession, JvmBackendContext, IrClass, JvmSerializationBindings, Fir2IrComponents, MetadataSerializer, Set)` ← `createSerializer(JvmBackendContext, IrClass, Type, JvmSerializationBindings, MetadataSerializer)` (`org.jetbrains.kotlin.fir.backend.jvm.FirJvmBackendExtension`) ← `metadataSerializer_delegate$lambda$0(ClassCodegen)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x0000009801893018`) ← `getValue()` (`kotlin.SynchronizedLazyImpl`) ← `getMetadataSerializer()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% |   4.9ms |          25 | `mapClassSignature(IrTypeMapper, IrClass, Type, boolean)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.4% |   4.6ms |          11 | `getOrCreateCallGenerator(IrFunctionAccessExpression, BlockInfo, JvmMethodSignature)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitCall(IrCall, BlockInfo)` ← `visitCall(IrCall, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrCall`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.4% |   4.4ms |           4 | `visitMethod(int, String, String, String, String[])` (`org.jetbrains.org.objectweb.asm.ClassWriter`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.AbstractClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.optimization.OptimizationClassBuilder`) ← `newMethod(JvmDeclarationOrigin, int, String, String, String, String[])` (`org.jetbrains.kotlin.codegen.DelegatingClassBuilder`) ← `generateMethod(IrFunction, SourceMapper)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.3% |   3.9ms |           5 | `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`) ← `getLineAndColumnNumbers(int)` (`org.jetbrains.kotlin.ir.util.NaiveSourceBasedFileEntryImpl`) ← `getSourceRangeInfo(int, int)` (`org.jetbrains.kotlin.ir.AbstractIrFileEntry`) ← `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.3% |   3.8ms |           2 | `serializeContractOfFunctionIfAny(FirFunction, ProtoBuf$Function$Builder, FirElementSerializer)` (`org.jetbrains.kotlin.fir.serialization.FirContractSerializer`) ← `functionProto(FirFunction)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |   3.7ms |          13 | `getSourceMapper(JvmBackendContext, IrClass)` (`org.jetbrains.kotlin.backend.jvm.codegen.IrCodegenUtilsKt`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `<init>(IrClass, JvmBackendContext, IrFunction, List, DefaultConstructorMarker)` ← `getOrCreate(IrClass, JvmBackendContext, List, IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$Companion`) ← `getOrCreate$default(ClassCodegen$Companion, IrClass, JvmBackendContext, List, IrFunction, int, Object)` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.3% |   3.4ms |           2 | `addDeclarationProto(ProtoBuf$Package$Builder, FirDeclaration, Set, Function1)` (`org.jetbrains.kotlin.fir.serialization.FirElementSerializer`) ← `packagePartProto(FirFile, Set)` ← `serialize(MetadataSource, MetadataSource$File)` (`org.jetbrains.kotlin.fir.backend.jvm.FirMetadataSerializer`) ← `generateKotlinMetadataAnnotation$lambda$0(MetadataSource, ClassCodegen, IrFileEntry, JvmClassName, boolean, KotlinClassHeader$Kind, AnnotationVisitor)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `invoke(Object)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen$$Lambda.0x00000098018ff410`) ← `writeKotlinMetadata(ClassBuilder, JvmBackendConfig, KotlinClassHeader$Kind, boolean, int, Function1)` (`org.jetbrains.kotlin.codegen.WriteKotlinMetadataKt`) ← `generateKotlinMetadataAnnotation()` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateAnnotations()` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.3% |   3.2ms |          10 | `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.SwitchGenerator`) ← `visitWhen(IrWhen, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitWhen(IrWhen, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrWhen`) ← `visitReturn(IrReturn, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitReturn(IrReturn, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrReturn`) ← `visitStatementContainer(IrStatementContainer, BlockInfo)` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `visitBlockBody(IrBlockBody, BlockInfo)` ← `visitBlockBody(IrBlockBody, Object)` ← `accept(IrVisitor, Object)` (`org.jetbrains.kotlin.ir.expressions.IrBlockBody`) ← `generate()` (`org.jetbrains.kotlin.backend.jvm.codegen.ExpressionCodegen`) ← `doGenerate(ReifiedTypeParametersUsages)` (`org.jetbrains.kotlin.backend.jvm.codegen.FunctionCodegen`) ← `generate(ReifiedTypeParametersUsages)` ← `generate$default(FunctionCodegen, ReifiedTypeParametersUsages, int, Object)` ← `generateMethodNode(IrFunction)` (`org.jetbrains.kotlin.backend.jvm.codegen.ClassCodegen`) ← `generateMethod(IrFunction, SourceMapper)` ← `generate()` ← `generateFile(JvmBackendContext, IrFile, List, boolean)` (`org.jetbrains.kotlin.backend.jvm.JvmIrCodegenFactory`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
